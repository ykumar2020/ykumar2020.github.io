"""Mobile touch, playback, restart and visible collision rendering."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,reduced_motion='reduce')
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE,wait_until='networkidle');host=page.locator('#work-fireworks-normal');host.scroll_into_view_if_needed()
 page.wait_for_function("document.querySelector('#work-fireworks-normal').dataset.liveBalls==='16'")
 controls=page.locator('[data-controls=work-fireworks-normal]');canvas=host.locator('canvas')
 first=canvas.screenshot();controls.locator('[data-scene-motion]').tap();host.scroll_into_view_if_needed()
 page.wait_for_function("Number(document.querySelector('#work-fireworks-normal').dataset.collisions)>3")
 assert first!=canvas.screenshot()
 page.wait_for_timeout(5000)
 assert int(host.get_attribute('data-live-balls'))>0
 canvas.screenshot(path=str(ROOT/'qa/collisions-mobile-fixed.png'))
 controls.locator('[data-scene-motion]').tap();host.scroll_into_view_if_needed();page.wait_for_timeout(100)
 frames=host.get_attribute('data-frames');page.wait_for_timeout(300);assert frames==host.get_attribute('data-frames')
 canvas.tap(position={'x':140,'y':140});assert host.get_attribute('data-bursts')=='1';assert int(host.get_attribute('data-particles'))>0
 controls.locator('[data-restart]').tap();assert host.get_attribute('data-live-balls')=='16';assert host.get_attribute('data-collisions')=='0'
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':844});host.scroll_into_view_if_needed();assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 assert not errors,errors
 b.close()
print('PASS: mobile collision rendering, continuous play, pause, tap burst, restart and responsive widths. '+BASE)
