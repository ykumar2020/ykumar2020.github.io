"""Browser regression checks. Run against `npm run preview` before publishing.

Requires Python playwright and requests, plus an installed Chrome browser.
The axe audit is a useful automated screen, not a full WCAG certification.
"""
from pathlib import Path
import json, sys, time
import requests
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'qa'; OUT.mkdir(exist_ok=True)
BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
report={'url':BASE,'checks':[],'accessibility_violations':[]}

with sync_playwright() as p:
    browser=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
    context=browser.new_context(viewport={'width':1440,'height':1000},reduced_motion='reduce',permissions=['clipboard-read','clipboard-write'])
    page=context.new_page();errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.on('console',lambda e:errors.append(e.text) if e.type=='error' else None)
    assert page.goto(BASE,wait_until='networkidle').status==200
    page.wait_for_function("document.querySelector('#grid-scene').dataset.state==='ready'")
    assert page.locator('main > section').evaluate_all('(els)=>els.map(e=>e.id)') == ['research','publications','projects','graphics','connectomes','teaching','about','experience','service','contact']
    assert page.locator('.research-selected li').count()==6
    assert page.locator('.teaching-case').count()==8
    assert page.locator('#publication-list').bounding_box()['y'] < page.locator('#knowledge-panel').bounding_box()['y']
    report['checks'] += ['Research and bibliography precede projects; six selected works and eight teaching examples']
    assert page.locator('h1').count()==1
    assert 'Julie' in page.locator('h1').inner_text() and 'Kumar' in page.locator('h1').inner_text()
    assert page.locator('#publication-list .paper').count()==77
    assert page.locator('#publication-list .paper:visible').count()==6
    assert page.locator('#publication-list .bibtex-drawer').count()==77
    frames=page.locator('#grid-scene').get_attribute('data-frames');page.wait_for_timeout(400)
    assert page.locator('#grid-scene').get_attribute('data-frames')==frames,'Reduced-motion grid keeps rendering'
    page.locator('#grid-scene').screenshot(path=str(OUT/'grid-still.png'))
    page.screenshot(path=str(OUT/'cyber-home.png'))
    report['checks']+=['All 77 records and BibTeX drawers','Reduced motion stops continuous rendering']

    page.locator('#load-more').click();assert page.locator('#publication-list .paper:visible').count()==12
    for topic in ['Trustworthy AI','Agentic AI','Multimodal AI','Education','AI Systems','Algorithms']:
        page.locator(f'[data-filter="{topic}"]').click()
        assert all(t==topic for t in page.locator('#publication-list .paper:visible').evaluate_all('(els)=>els.map(e=>e.dataset.topic)'))
    page.locator('[data-filter=All]').click()
    page.locator('#publication-search').fill('Matryoshka');assert page.locator('#publication-list .paper:visible').count()==2
    page.locator('.copy-citation:visible').first.click();assert 'Matryoshka' in page.evaluate('navigator.clipboard.readText()')
    page.locator('.bibtex-drawer:visible summary').first.click()
    assert '@misc{' in page.locator('.bibtex-drawer pre:visible').first.inner_text()
    assert ' and ' in page.locator('.bibtex-drawer pre:visible').first.inner_text()
    page.locator('#publication-search').fill('')
    page.locator('#publication-year').select_option('2015');assert page.locator('#publication-list .paper:visible').count()==2
    page.locator('#publication-status').select_option('Poster');assert page.locator('#publication-list .paper:visible').count()==1
    page.locator('#publication-year').select_option('');page.locator('#publication-status').select_option('')
    page.locator('#show-all-publications').click();assert page.locator('#publication-list .paper:visible').count()==77
    report['checks']+=['Topic, search, year and status filters','Pagination and complete bibliography','Citation clipboard and expandable BibTeX']

    page.wait_for_function("document.querySelector('#network-scene').dataset.records==='77'")
    assert page.locator('#network-record option').count()==77
    page.locator('#network-record').select_option('cv-03')
    assert 'Periodic Table' in page.locator('#network-detail h3').inner_text()
    page.locator('[data-filter="Agentic AI"]').click()
    page.wait_for_function("document.querySelector('#network-scene').dataset.records==='6'")
    assert page.locator('#network-record option').count()==6
    assert page.locator('#network-detail .paper').get_attribute('data-topic')=='Agentic AI'
    page.locator('#publication-search').fill('zz-no-record')
    assert page.locator('#network-record option').count()==0
    assert page.locator('#no-results').is_visible()
    page.locator('#publication-search').fill('');page.locator('[data-filter=All]').click()
    page.wait_for_function("document.querySelector('#network-scene').dataset.records==='77'")
    page.locator('#knowledge-panel').scroll_into_view_if_needed();page.screenshot(path=str(OUT/'cyber-constellation.png'))
    report['checks']+=['Network filter parity, record selection and empty state']

    assert page.locator('#node-scene').count()==0
    page.locator('#brain-fly').scroll_into_view_if_needed();page.wait_for_function("document.querySelector('#brain-fly').dataset.asset==='loaded'")
    before=page.locator('#brain-fly canvas').screenshot()
    page.locator('[data-controls=brain-fly] [data-tilt=right]').click()
    after=page.locator('#brain-fly canvas').screenshot();assert before!=after
    assert page.locator('.skill-detail:visible').count()==6
    page.screenshot(path=str(OUT/'cyber-research.png'))
    page.locator('[data-controls=brain-fly] [data-motion-toggle]').click()
    page.wait_for_timeout(300)
    n=int(page.locator('#brain-fly').get_attribute('data-frames'));start=time.monotonic();page.wait_for_timeout(1100)
    fps=(int(page.locator('#brain-fly').get_attribute('data-frames'))-n)/(time.monotonic()-start)
    assert 0<fps<=31, fps
    page.locator('#contact').scroll_into_view_if_needed();page.wait_for_timeout(250)
    n=page.locator('#brain-fly').get_attribute('data-frames');page.wait_for_timeout(400)
    assert page.locator('#brain-fly').get_attribute('data-frames')==n,'Offscreen canvas keeps rendering'
    page.locator('#home').scroll_into_view_if_needed();page.wait_for_timeout(200)
    page.locator('#motion-toggle').click()
    report['measured_brain_fps']=round(fps,2)
    report['checks']+=['Brain rotation controls and visible research domains','30 fps render cap','Offscreen WebGL completely stops']

    for width,height in [(1440,1000),(1024,900),(768,1024),(390,844),(320,740)]:
        page.set_viewport_size({'width':width,'height':height});page.evaluate('scrollTo(0,0)');page.wait_for_timeout(200)
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
        page.screenshot(path=str(OUT/f'cyber-{width}.png'))
        if width==390:
            page.locator('.menu-toggle').click();assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='true'
            page.keyboard.press('Escape');assert page.locator('.menu-toggle').get_attribute('aria-expanded')=='false'
            assert page.evaluate("document.activeElement===document.querySelector('.menu-toggle')")
            page.locator('#knowledge-panel').scroll_into_view_if_needed();page.wait_for_timeout(200)
            page.screenshot(path=str(OUT/'cyber-network-mobile.png'))
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    report['checks']+=['Responsive widths 320–1440px; no horizontal overflow','Mobile navigation, Escape and focus return']

    page.set_viewport_size({'width':1440,'height':1000})
    page.locator('#brain-fly').scroll_into_view_if_needed()
    page.evaluate("window.testLostContext=document.querySelector('#brain-fly canvas').getContext('webgl2').getExtension('WEBGL_lose_context');testLostContext.loseContext()")
    page.wait_for_function("document.querySelector('#brain-fly').dataset.state==='fallback'")
    assert page.locator('#brain-fly .scene-fallback').is_visible()
    page.evaluate('testLostContext.restoreContext()');page.wait_for_function("document.querySelector('#brain-fly').dataset.state==='ready'")
    report['checks']+=['WebGL context loss fallback and recovery']
    assert not errors,errors

    # No-JS readers receive the complete static scholarly document.
    nojs=browser.new_context(java_script_enabled=False,viewport={'width':390,'height':844})
    plain=nojs.new_page();plain.goto(BASE)
    assert plain.locator('.paper:visible').count()==77
    assert plain.locator('.skill-detail:visible').count()==6
    assert plain.locator('#site-nav').is_visible()
    assert plain.locator('#brain-fly .scene-fallback').is_visible()
    report['checks']+=['No-JavaScript publications, research text, mobile navigation and static brain image']

    # Automated WCAG A/AA audit, list view and optional constellation.
    axe=OUT/'axe.min.js'
    if not axe.exists():
        response=requests.get('https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js',timeout=30);response.raise_for_status();axe.write_text(response.text,encoding='utf8')
    page.goto(BASE,wait_until='networkidle');page.add_script_tag(path=str(axe))
    for view in ['open-gallery']:
        audit=page.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21aa","wcag22aa"]}})')
        (OUT/f'cyber-axe-{view}.json').write_text(json.dumps(audit,indent=2),encoding='utf8')
        report['accessibility_violations'] += [{'view':view,'id':v['id'],'help':v['help'],'targets':[n['target'] for n in v['nodes']]} for v in audit['violations']]
    page.emulate_media(media='print');assert page.locator('#publication-list .paper:visible').count()==77
    report['checks']+=['Print exposes complete bibliography','No browser script or shader errors']
    browser.close()
(OUT/'cyber-test-results.json').write_text(json.dumps(report,indent=2),encoding='utf8')
print(json.dumps(report,indent=2))
assert not report['accessibility_violations'],'Resolve accessibility audit issues before publishing'