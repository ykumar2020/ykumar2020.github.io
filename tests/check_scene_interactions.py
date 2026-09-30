"""Exercise actual canvas changes and independent playback across live scenes."""
from pathlib import Path
import hashlib,json
from playwright.sync_api import sync_playwright

ROOT=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1050},reduced_motion='reduce')
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:8091/',wait_until='networkidle')
 hosts=page.locator('#grid-scene,#hero-art-scene,#horizon-scene,#attention-scene,#network-scene,.embedded-scene,.connectome-scene').evaluate_all('(xs)=>xs.map(x=>x.id)')
 results=[]
 for ident in hosts:
  host=page.locator('#'+ident);host.scroll_into_view_if_needed()
  page.wait_for_function('(id)=>document.getElementById(id).dataset.state==="ready"',arg=ident)
  if ident.startswith('brain-'):page.wait_for_function('(id)=>document.getElementById(id).dataset.asset==="loaded"',arg=ident,timeout=60000)
  controls=page.locator(f'[data-controls="{ident}"]');assert controls.is_visible(),ident
  controls.locator('[data-scene-speed]').select_option('2');assert host.get_attribute('data-speed')=='2'
  # Reduced motion starts still. Explicit local play affects only this scene.
  controls.locator('[data-scene-motion]').click();host.scroll_into_view_if_needed()
  page.wait_for_function('(id)=>document.getElementById(id).dataset.motion==="playing"',arg=ident)
  first=int(host.get_attribute('data-frames'));page.wait_for_timeout(400);assert int(host.get_attribute('data-frames'))>first,ident
  assert page.locator('[data-motion="playing"]').count()==1,ident
  controls.locator('[data-scene-motion]').click();host.scroll_into_view_if_needed();page.wait_for_timeout(80)
  first=host.get_attribute('data-frames');page.wait_for_timeout(180);assert host.get_attribute('data-frames')==first,ident
  if ident=='work-fireworks-normal':
   controls.locator('[data-add-burst]').click();assert host.get_attribute('data-bursts')=='1'
   host.locator('canvas').click(position={'x':90,'y':110});assert host.get_attribute('data-bursts')=='2'
  else:
   before=hashlib.sha256(host.locator('canvas').screenshot()).hexdigest()
   if ident=='grid-scene':controls.locator('[data-turn="right"]').click()
   else:host.locator('canvas').focus();page.keyboard.press('ArrowRight')
   after=hashlib.sha256(host.locator('canvas').screenshot()).hexdigest()
   assert before!=after,ident+' view control had no visible effect'
   reset=controls.locator('[data-turn="reset"],[data-tilt="reset"]');reset.click()
  results.append({'scene':ident,'independentPlayback':True,'interactionChangedDisplay':True})
 # The BMA edits the shape and ball location, not just the camera.
 for ident,value,key in [('bma-radius','.8','radius'),('bma-center','.7','center')]:
  page.locator('#'+ident).evaluate('(e,v)=>{e.value=v;e.dispatchEvent(new Event("input",{bubbles:true}))}',value)
  assert float(page.locator('#hero-art-scene').get_attribute('data-'+key))==float(value)
 page.locator('#geometry-lab').screenshot(path=str(ROOT/'qa/interactive-bma.png'))
 # Saved video exposes playback-rate control, without suggesting a live renderer.
 page.get_by_label('Ray-tracing playback speed',exact=True).select_option('1.5')
 assert page.locator('#graphics video').evaluate('v=>v.playbackRate')==1.5
 page.add_script_tag(path=str(ROOT/'qa/axe.min.js'))
 issues=page.evaluate("async()=> (await axe.run(document.querySelector('#geometry-lab'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations")
 assert not issues,json.dumps(issues)
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':900});page.locator('#home').scroll_into_view_if_needed();page.wait_for_timeout(150)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
 page.set_viewport_size({'width':1440,'height':1050});page.evaluate('scrollTo(0,0)');page.wait_for_timeout(300);page.screenshot(path=str(ROOT/'qa/interactive-hero.png'))
 # Real touch gestures: horizontal inspection must not steal vertical scrolling.
 touch=b.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
 phone=touch.new_page();phone.goto('http://127.0.0.1:8091/',wait_until='networkidle')
 cdp=touch.new_cdp_session(phone)
 def swipe(x,y,dx,dy):
  cdp.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':x,'y':y}]})
  for i in range(1,9):
   cdp.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':x+dx*i/8,'y':y+dy*i/8}]});phone.wait_for_timeout(35)
  cdp.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]});phone.wait_for_timeout(300)
 for ident in ['hero-art-scene','work-torus-wire']:
  h=phone.locator('#'+ident);h.scroll_into_view_if_needed();phone.wait_for_function('(id)=>document.getElementById(id).dataset.state==="ready"',arg=ident)
  rect=h.locator('canvas').bounding_box();x=rect['x']+rect['width']*.3;y=rect['y']+rect['height']*.5
  before=h.get_attribute('data-view-rotation');swipe(x,y,90,0);assert h.get_attribute('data-view-rotation')!=before,ident
  before=phone.evaluate('scrollY');swipe(x,y,0,-110);assert abs(phone.evaluate('scrollY')-before)>30,ident+' blocks page scrolling'
 touch.close()
 assert not errors,errors
 (ROOT/'qa/scene-interactions.json').write_text(json.dumps({'passed':True,'scenes':results,'pageErrors':errors},indent=2))
 print(f'PASS: {len(results)} scenes, independent playback, visible interaction changes, BMA parameters, video rate, mobile widths, and BMA accessibility.')
 b.close()
