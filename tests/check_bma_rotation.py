"""Regression: BMA rotates through poles, rolls, and supports mobile inspection."""
import json,math,sys
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce')
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE,wait_until='networkidle');host=page.locator('#hero-art-scene');host.scroll_into_view_if_needed()
 controls=page.locator('[data-controls=hero-art-scene]');canvas=host.locator('canvas');canvas.wait_for()
 def rotation():return json.loads(host.get_attribute('data-view-rotation'))
 initial=rotation();start=canvas.screenshot()
 # Forty increments exceed one full revolution. Every step must still change.
 for direction in ['up','right','roll-left']:
  controls.locator('[data-turn=reset]').click()
  for _ in range(40):
   before=rotation();controls.locator(f'[data-turn={direction}]').click();after=rotation()
   assert sum((a-b)**2 for a,b in zip(before,after))>.001,(direction,'rotation stopped')
   assert abs(sum(a*a for a in after)-1)<1e-9
  assert start!=canvas.screenshot(),direction
 controls.locator('[data-turn=reset]').click();assert rotation()==initial
 canvas.focus();page.keyboard.press('q');rolled=rotation();assert rolled!=initial
 page.keyboard.press('e');assert all(abs(a-b)<1e-12 for a,b in zip(rotation(),initial))
 rect=canvas.bounding_box();x=rect['x']+rect['width']/2;y=rect['y']+rect['height']/2
 page.mouse.move(x,y);page.mouse.down();page.mouse.move(x+100,y+180,steps=15);page.mouse.up();assert rotation()!=initial
 page.locator('#geometry-lab').screenshot(path=str(ROOT/'qa/bma-free-rotation.png'))
 controls.locator('[data-turn=reset]').click();assert rotation()==initial
 # A touch-only mode enables unrestricted vertical drags; off restores page scrolling.
 phone_context=b.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
 phone=phone_context.new_page();phone.goto(BASE,wait_until='networkidle');h=phone.locator('#hero-art-scene');h.scroll_into_view_if_needed()
 touch=phone.locator('[data-bma-touch]');touch.click();h.scroll_into_view_if_needed();assert touch.get_attribute('aria-pressed')=='true'
 cdp=phone_context.new_cdp_session(phone)
 def swipe():
  r=h.locator('canvas').bounding_box();x=r['x']+r['width']/2;y=r['y']+r['height']*.65
  cdp.send('Input.dispatchTouchEvent',{'type':'touchStart','touchPoints':[{'x':x,'y':y}]})
  for i in range(1,9):
   cdp.send('Input.dispatchTouchEvent',{'type':'touchMove','touchPoints':[{'x':x,'y':y-120*i/8}]});phone.wait_for_timeout(30)
  cdp.send('Input.dispatchTouchEvent',{'type':'touchEnd','touchPoints':[]});phone.wait_for_timeout(250)
 before=h.get_attribute('data-view-rotation');scroll=phone.evaluate('scrollY');swipe()
 assert before!=h.get_attribute('data-view-rotation');assert abs(phone.evaluate('scrollY')-scroll)<3
 touch.click();h.scroll_into_view_if_needed();scroll=phone.evaluate('scrollY');swipe();assert abs(phone.evaluate('scrollY')-scroll)>30
 assert phone.evaluate('document.documentElement.scrollWidth<=innerWidth')
 assert not errors,errors
 b.close()
print('PASS: full revolutions on three axes, pole crossing, roll keys, mouse drag, reset, touch rotation and touch scrolling. '+BASE)
