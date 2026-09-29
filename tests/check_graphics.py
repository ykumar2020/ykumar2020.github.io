"""Regression checks for the owner's graphics adaptations and source downloads."""
from pathlib import Path
import json,sys,zipfile
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
report={'url':BASE,'modes':[],'violations':[]}
with sync_playwright() as p:
    b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
    page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.on('console',lambda e:errors.append(e.text) if e.type=='error' else None)
    page.goto(BASE,wait_until='networkidle')
    page.wait_for_function("document.querySelector('#hero-art-scene').dataset.state==='ready'")
    assert page.locator('#photo-carousel .portrait-slide').count()==6
    assert page.locator('#about #photo-carousel').count()==1
    for key in ['torus','swirl','fractal','solar','fireworks','raytrace']:
        page.locator('button[data-work='+key+']').click()
        assert page.locator('button[data-work='+key+']').get_attribute('aria-pressed')=='true'
        if key=='raytrace':
            assert page.locator('#raytrace-preview video').is_visible()
            video=page.locator('#raytrace-preview video')
            video.evaluate('(v)=>v.load()')
            page.wait_for_function("document.querySelector('video').readyState>=2")
            assert video.evaluate('(v)=>v.duration')>0
            video.evaluate('(v)=>v.play()');page.wait_for_timeout(350)
            assert video.evaluate('(v)=>v.currentTime')>0
            page.locator('button[data-work=torus]').click()
            assert video.evaluate('(v)=>v.paused')
            continue
        assert page.locator('#graphics-scene').get_attribute('data-work')==key
        for mode in page.locator('#graphics-mode option').evaluate_all('(els)=>els.map(e=>e.value)'):
            page.locator('#graphics-mode').select_option(mode)
            text=page.locator('#graphics-readout').inner_text();assert text
            if key=='torus':
                assert '5,120 triangles' in text
                assert ('15,360 vertex records' if mode=='nonindexed' else '2,665 vertex records') in text
            if key=='swirl':assert f'{(int(mode)-1)*int(mode)*2+2:,}' in text
            report['modes'].append([key,mode,text])
        page.locator('#graphics-scene').scroll_into_view_if_needed();page.wait_for_timeout(200)
        n=page.locator('#graphics-scene').get_attribute('data-frames');page.wait_for_timeout(250)
        assert n==page.locator('#graphics-scene').get_attribute('data-frames'),'Reduced motion did not stop graphics'
    page.locator('button[data-work=swirl]').click()
    page.locator('[data-controls=graphics-scene] [data-motion-toggle]').click()
    page.wait_for_timeout(400)
    first=page.locator('#graphics-scene canvas').screenshot();page.wait_for_timeout(300)
    assert first!=page.locator('#graphics-scene canvas').screenshot()
    page.locator('#contact').scroll_into_view_if_needed();page.wait_for_timeout(200)
    n=page.locator('#graphics-scene').get_attribute('data-frames');page.wait_for_timeout(250)
    assert n==page.locator('#graphics-scene').get_attribute('data-frames'),'Offscreen graphics keeps rendering'
    for width in [320,390,768,1024,1440]:
        page.set_viewport_size({'width':width,'height':900});page.locator('#graphics').scroll_into_view_if_needed();page.wait_for_timeout(150)
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
    page.locator('#graphics-scene').scroll_into_view_if_needed()
    page.evaluate("document.querySelector('#graphics-scene canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()")
    page.wait_for_function("document.querySelector('#graphics-scene').dataset.state==='fallback'")
    assert page.locator('#graphics-scene .scene-fallback').is_visible()
    assert page.locator('#graphics-scene .scene-fallback').get_attribute('src').endswith('swirl-preview.png')
    assert not page.locator('.graphics-controls').is_visible()
    assert not errors,errors
    page.goto(BASE,wait_until='networkidle');page.add_script_tag(path=str(ROOT/'qa/axe.min.js'))
    for key in ['torus','raytrace']:
        page.locator('button[data-work='+key+']').click()
        audit=page.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21aa","wcag22aa"]}})')
        report['violations'] += [{'view':key,'id':v['id'],'targets':[n['target'] for n in v['nodes']]} for v in audit['violations']]
    for link in page.locator('.graphics-source-index a[href]').evaluate_all('(els)=>els.map(e=>e.getAttribute("href")).filter(h=>!h.startsWith("http"))'):
        assert page.request.get(BASE+link).status==200,link
    b.close()
for f in (ROOT/'graphics/sources').glob('*.zip'):
    with zipfile.ZipFile(f) as z:
        assert all('/build/' not in n and not n.endswith(('.exe','.dll','.pdb','.obj')) for n in z.namelist())
report['errors']=errors
(ROOT/'qa/graphics-test-results.json').write_text(json.dumps(report,indent=2),encoding='utf8')
print(json.dumps(report,indent=2))
assert not report['violations'],report['violations']
