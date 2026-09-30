"""Open gallery regression: all studies embedded, independent controls and purple fallbacks."""
from pathlib import Path
import json,sys,zipfile
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1];BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
report={'url':BASE,'studies':[],'violations':[]}
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)));page.on('console',lambda e:errors.append(e.text) if e.type=='error' else None)
 page.goto(BASE,wait_until='networkidle');page.wait_for_function("document.querySelector('#hero-art-scene').dataset.state==='ready'")
 assert page.locator('#home #photo-carousel').count()==1
 assert page.locator('#home .portrait-slide').count()==10
 assert page.locator('#photo-carousel').bounding_box()['y']<600
 page.locator('[data-photo=next]').click();page.wait_for_function("document.querySelector('#photo-carousel').dataset.index==='1'")
 assert page.locator('.portrait-slide:not([hidden])').count()==1
 assert page.locator('.work-selectors').count()==0
 assert page.locator('.embedded-work:visible').count()==8
 assert page.locator('#knowledge-panel').is_visible() and page.locator('#publication-list').is_visible()
 for host in page.locator('.embedded-scene').all():
  sid=host.get_attribute('id');key=host.get_attribute('data-work');article=host.locator('..')
  host.scroll_into_view_if_needed();page.wait_for_function('(id)=>document.getElementById(id).dataset.state==="ready"',arg=sid)
  select=article.locator('select')
  options=select.locator('option').evaluate_all('(els)=>els.map(e=>e.value)') if select.count() else [host.get_attribute('data-mode')]
  for mode in options:
   if select.count():select.select_option(mode)
   text=article.locator('.graphics-readout').inner_text();assert text
   if key=='torus':assert '5,120 triangles' in text and ('15,360 vertex records' if mode=='nonindexed' else '2,665 vertex records') in text
   if key=='swirl':assert f'{(int(mode)-1)*int(mode)*2+2:,}' in text
  if select.count():select.select_option({'torus':'wire','swirl':'90','solar':'20'}[key])
  page.wait_for_timeout(250);n=host.get_attribute('data-frames');page.wait_for_timeout(200);assert n==host.get_attribute('data-frames')
  # Save the actual default purple rendering as its own static fallback.
  host.locator('canvas').screenshot(path=str(ROOT/f'assets/graphics/{sid}-red.png'))
  report['studies'].append([sid,options])
 host=page.locator('#work-swirl-90');host.scroll_into_view_if_needed()
 page.locator('[data-controls=work-swirl-90] [data-motion-toggle]').click();page.wait_for_timeout(300)
 before=host.locator('canvas').screenshot();page.wait_for_timeout(400);assert before!=host.locator('canvas').screenshot()
 page.locator('[data-controls=work-swirl-90] [data-motion-toggle]').click();page.locator('[data-controls=work-swirl-90] [data-turn=right]').click()
 page.locator('[data-controls=work-swirl-90] [data-motion-toggle]').click();page.locator('#contact').scroll_into_view_if_needed();page.wait_for_timeout(300);n=host.get_attribute('data-frames');page.wait_for_timeout(300);assert n==host.get_attribute('data-frames')
 page.locator('#motion-toggle').click()
 video=page.locator('#graphics video');video.scroll_into_view_if_needed();video.evaluate('(v)=>v.load()');page.wait_for_function("document.querySelector('video').readyState>=2");assert video.evaluate('(v)=>v.duration')>0
 video.evaluate('(v)=>v.play()');page.wait_for_timeout(350);assert video.evaluate('(v)=>v.currentTime')>0
 page.locator('#home').scroll_into_view_if_needed();page.wait_for_timeout(300);assert video.evaluate('(v)=>v.paused')
 for width in [320,390,768,1024,1440]:
  page.set_viewport_size({'width':width,'height':900});page.evaluate('scrollTo(0,0)');page.wait_for_timeout(150);assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
  assert page.locator('#photo-carousel').bounding_box()['y']<650
  page.screenshot(path=str(ROOT/f'qa/open-{width}.png'))
 page.add_script_tag(path=str(ROOT/'qa/axe.min.js'));audit=page.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21aa","wcag22aa"]}})')
 report['violations']=[{'id':v['id'],'targets':[n['target'] for n in v['nodes']]} for v in audit['violations']]
 host.scroll_into_view_if_needed();page.evaluate("document.querySelector('#work-swirl-90 canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()")
 page.wait_for_function("document.querySelector('#work-swirl-90').dataset.state==='fallback'");assert host.locator('img').is_visible();assert page.locator('[data-project=swirl] select').is_disabled()
 for link in page.locator('.graphics-source-index a[href]').evaluate_all('(els)=>els.map(e=>e.getAttribute("href")).filter(h=>!h.startsWith("http"))'):assert page.request.get(BASE+link).status==200
 assert not errors,errors;b.close()
report['errors']=errors;(ROOT/'qa/graphics-test-results.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2));assert not report['violations']
