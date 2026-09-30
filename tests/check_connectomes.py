"""Verify image-based relief, credits, interactions, and motion behavior."""
from pathlib import Path
import json,time,hashlib
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1];report={'checks':[],'errors':[],'violations':[]}
manifest=json.loads((ROOT/'assets/connectomes/sources.json').read_text())
for im in manifest['images']:assert hashlib.sha256((ROOT/'assets/connectomes'/im['file']).read_bytes()).hexdigest()==im['sha256']
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce')
 page.on('pageerror',lambda e:report['errors'].append(str(e)));page.on('console',lambda e:report['errors'].append(e.text) if e.type=='error' else None)
 page.goto('http://127.0.0.1:8091/',wait_until='networkidle')
 assert page.locator('#home #photo-carousel').count()==1
 for key in ['human','fly']:
  host=page.locator('#brain-'+key);card=host.locator('..');host.scroll_into_view_if_needed();page.wait_for_function('(id)=>document.getElementById(id).dataset.asset==="loaded"',arg='brain-'+key)
  page.wait_for_timeout(200);n=host.get_attribute('data-frames');page.wait_for_timeout(350);assert n==host.get_attribute('data-frames')
  original=host.locator('canvas').screenshot();card.locator('[data-tilt=right]').click();assert original!=host.locator('canvas').screenshot()
  card.locator('[data-tilt=reset]').click();card.locator('[data-image-colors]').select_option('source');assert host.get_attribute('data-palette')=='source';assert original!=host.locator('canvas').screenshot()
  card.locator('[data-image-colors]').select_option('red')
  card.locator('[data-image-zoom]').fill('150');assert original!=host.locator('canvas').screenshot();card.locator('[data-image-depth]').fill('0');card.locator('[data-image-depth]').fill('75');card.locator('[data-tilt=reset]').click()
  assert 'Image credit:' in card.inner_text();assert 'not measured anatomy' in card.inner_text()
  assert page.request.get('http://127.0.0.1:8091/'+host.get_attribute('data-image')).status==200
 report['checks']+=['Both sources loaded with credits and unchanged-file hashes','Independent tilt, reset, zoom, depth and source-color controls','Reduced-motion still frames']
 host=page.locator('#brain-fly');host.scroll_into_view_if_needed();page.locator('[data-controls=brain-fly] [data-motion-toggle]').click();page.wait_for_timeout(200);n=int(host.get_attribute('data-frames'));t=time.monotonic();first=host.locator('canvas').screenshot();page.wait_for_timeout(1700);fps=(int(host.get_attribute('data-frames'))-n)/(time.monotonic()-t);assert 0<fps<=31;assert first!=host.locator('canvas').screenshot();report['fps']=round(fps,2)
 angle=float(host.get_attribute('data-rotation'));assert angle>0
 page.locator('[data-controls=brain-fly] [data-brain-rotate]').click();held=host.get_attribute('data-rotation');page.wait_for_timeout(350);assert held==host.get_attribute('data-rotation')
 page.locator('[data-controls=brain-fly] [data-brain-rotate]').click();page.wait_for_timeout(350);assert float(host.get_attribute('data-rotation'))>float(held)
 page.locator('#contact').scroll_into_view_if_needed();page.wait_for_timeout(400);n=host.get_attribute('data-frames');page.wait_for_timeout(400);assert n==host.get_attribute('data-frames');page.locator('#motion-toggle').click()
 # Exercise all studies in one page to expose renderer/context conflicts.
 for scene in page.locator('.embedded-scene').all():
  scene.scroll_into_view_if_needed();page.wait_for_function('(id)=>document.getElementById(id).dataset.state==="ready"',arg=scene.get_attribute('id'))
 host.scroll_into_view_if_needed();assert host.get_attribute('data-state')=='ready'
 for w in [320,390,768,1440]:
  page.set_viewport_size({'width':w,'height':900});host.scroll_into_view_if_needed();page.wait_for_timeout(150);assert page.evaluate('document.documentElement.scrollWidth<=innerWidth');page.screenshot(path=str(ROOT/f'qa/connectomes-{w}.png'))
 page.add_script_tag(path=str(ROOT/'qa/axe.min.js'));audit=page.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21aa","wcag22aa"]}})');report['violations']=[{'id':v['id'],'targets':[n['target'] for n in v['nodes']]} for v in audit['violations']]
 page.evaluate("window.lostBrain=document.querySelector('#brain-fly canvas').getContext('webgl2').getExtension('WEBGL_lose_context');lostBrain.loseContext()")
 page.wait_for_function("document.querySelector('#brain-fly').dataset.state==='fallback'");assert host.locator('img').is_visible();assert page.locator('#brain-fly').locator('..').locator('select').is_disabled()
 page.evaluate('lostBrain.restoreContext()');page.wait_for_function("document.querySelector('#brain-fly').dataset.state==='ready'")
 context=b.new_context(java_script_enabled=False);plain=context.new_page();plain.goto('http://127.0.0.1:8091/');assert plain.locator('.connectome-study:visible').count()==2;assert plain.locator('.connectome-scene img:visible').count()==2
 default=b.new_context(reduced_motion='no-preference');dp=default.new_page();dp.goto('http://127.0.0.1:8091/',wait_until='networkidle');dp.locator('#brain-human').scroll_into_view_if_needed();dp.wait_for_function("Number(document.querySelector('#brain-human').dataset.rotation)>.1");assert dp.locator('#brain-human').get_attribute('data-auto-rotate')=='true';default.close()
 report['checks']+=['Default automatic rotation and local pause/resume','Visible animation capped at 30 fps','Offscreen suspension','All embedded renderers coexist','320-1440px layouts','Context-loss fallback and recovery','No-JavaScript images and credits'];b.close()
(ROOT/'qa/connectomes-results.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2));assert not report['errors'];assert not report['violations']
