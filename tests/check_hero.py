"""Hero behavior, contrast, mobile gestures and mathematical-scene fallbacks."""
from pathlib import Path
import time
from playwright.sync_api import sync_playwright
BASE='http://127.0.0.1:8091/'
ROOT=Path(__file__).resolve().parents[1]
def luminance(rgb):
 c=[v/255 for v in rgb];c=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in c]
 return .2126*c[0]+.7152*c[1]+.0722*c[2]
ratio=(luminance((216,180,254))+.05)/(luminance((13,19,31))+.05)
assert ratio>=7
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE,wait_until='networkidle')
 page.wait_for_function('document.querySelector("#hero-art-scene").dataset.state==="ready"')
 assert 'Finance' in page.locator('.degree-context').inner_text()
 assert 'Ph.D. Candidate in ECE' in page.locator('.hero-roles').inner_text()
 assert page.locator('.access-pass').count()==5
 assert page.locator('.photo-tick').count()==10
 assert page.locator('#hero-art-scene canvas').evaluate('(e)=>getComputedStyle(e).pointerEvents')=='none'
 assert page.locator('#grid-scene').evaluate('(e)=>getComputedStyle(e).zIndex')=='0'
 assert page.locator('.hero-headline em').evaluate('(e)=>getComputedStyle(e).color')=='rgb(216, 180, 254)'
 frames=page.locator('#hero-art-scene').get_attribute('data-frames');page.wait_for_timeout(300)
 assert page.locator('#hero-art-scene').get_attribute('data-frames')==frames
 for index in [2,9,0]:
  page.locator('.photo-tick').nth(index).click()
  page.wait_for_function('(i)=>document.querySelector("#photo-carousel").dataset.index===String(i)',arg=index)
  assert page.locator('.photo-tick[aria-pressed=true]').count()==1
  assert page.locator('.photo-tick').nth(index).get_attribute('aria-pressed')=='true'
 page.locator('[data-jump-year]').click()
 assert page.locator('#publication-year').input_value()=='2026'
 assert page.locator('.paper:visible').evaluate_all('(xs)=>xs.every(x=>x.dataset.year==="2026")')
 page.locator('#home').scroll_into_view_if_needed()
 page.screenshot(path=str(ROOT/'qa/hero-hud-desktop.png'))
 page.locator('.credential-strip').screenshot(path=str(ROOT/'qa/hero-access-passes.png'))
 # Resume automatic motion explicitly after starting with reduced motion.
 page.locator('#home').scroll_into_view_if_needed();page.emulate_media(reduced_motion='no-preference')
 page.wait_for_timeout(200)
 before=int(page.locator('#hero-art-scene').get_attribute('data-frames'));start=time.monotonic();page.wait_for_timeout(1100)
 fps=(int(page.locator('#hero-art-scene').get_attribute('data-frames'))-before)/(time.monotonic()-start);assert 0<fps<=31
 page.locator('[data-photo=pause]').click();page.evaluate('document.activeElement.blur()');page.mouse.move(1,1)
 page.wait_for_function('document.querySelector("#photo-carousel").dataset.autoplay==="true"')
 assert page.locator('.photo-tick.is-filling').count()==1
 page.wait_for_function('document.querySelector("#photo-carousel").dataset.index==="1"',timeout=12000)
 page.emulate_media(reduced_motion='reduce');page.wait_for_timeout(700)
 frozen=page.locator('#photo-carousel').get_attribute('data-index');page.wait_for_timeout(300)
 assert page.locator('#photo-carousel').get_attribute('data-index')==frozen
 # Real Chrome touch input: horizontal navigation and unblocked vertical scrolling.
 mobile=b.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
 touch=mobile.new_page();touch.goto(BASE,wait_until='networkidle');cdp=mobile.new_cdp_session(touch)
 touch.locator('.portrait-frame').scroll_into_view_if_needed();rect=touch.locator('.portrait-frame').bounding_box()
 x=rect['x']+rect['width']*.8;y=rect['y']+rect['height']*.5
 def swipe(dx,dy):
  cdp.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':x,'y':y}]})
  for step in range(1,7):
   cdp.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':x+dx*step/6,'y':y+dy*step/6}]});touch.wait_for_timeout(25)
  cdp.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]});touch.wait_for_timeout(400)
 swipe(-110,4)
 assert touch.locator('#photo-carousel').get_attribute('data-index')=='1'
 scroll=touch.evaluate('scrollY');swipe(3,-130)
 assert touch.evaluate('scrollY')>scroll+20,'Vertical swipe did not scroll'
 assert touch.locator('#photo-carousel').get_attribute('data-index')=='1'
 for width in [320,390,768,1024,1440]:
  page.set_viewport_size({'width':width,'height':1000});page.evaluate('scrollTo(0,0)');page.wait_for_timeout(100)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
  if width==390:page.screenshot(path=str(ROOT/'qa/hero-hud-mobile.png'))
 # The static wireframe remains when WebGL loses its context.
 page.locator('#hero-art-scene').scroll_into_view_if_needed()
 page.evaluate('document.querySelector("#hero-art-scene canvas").getContext("webgl2").getExtension("WEBGL_lose_context").loseContext()')
 page.wait_for_function('document.querySelector("#hero-art-scene").dataset.state==="fallback"')
 assert page.locator('#hero-art-scene .scene-fallback').is_visible()
 assert not errors,errors
 print(f'PASS: degree context, 10 ticks, autoplay/reduced motion, quick filter, real touch swipes, widths 320-1440, WebGL fallback. Emphasis contrast {ratio:.2f}:1; hero rendering {fps:.2f} fps.')
 b.close()
