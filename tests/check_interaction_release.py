"""Small deployment check for the controls and projected network labels."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
ROOT=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce')
 errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE,wait_until='networkidle')
 page.wait_for_selector('[data-controls=grid-scene] [data-scene-motion]')
 page.screenshot(path=str(ROOT/'qa/interaction-release-hero.png'))
 assert page.locator('#photo-carousel').bounding_box()['y']<230
 grid=page.locator('[data-controls=grid-scene]');grid.scroll_into_view_if_needed()
 grid.locator('[data-turn=right]').click();assert page.locator('#grid-scene').get_attribute('data-view-rotation')
 host=page.locator('#network-scene');host.scroll_into_view_if_needed()
 page.wait_for_selector('#network-scene canvas')
 labels=page.locator('.collaborator-face')
 before=labels.evaluate_all('(xs)=>xs.map(x=>[x.style.left,x.style.top])')
 controls=page.locator('[data-controls=network-scene]')
 controls.locator('[data-scene-zoom]').fill('125')
 assert before!=labels.evaluate_all('(xs)=>xs.map(x=>[x.style.left,x.style.top])')
 controls.locator('[data-turn=reset]').click()
 assert before==labels.evaluate_all('(xs)=>xs.map(x=>[x.style.left,x.style.top])')
 for w in [320,390,768]:
  page.set_viewport_size({'width':w,'height':900});page.evaluate('scrollTo(0,0)');page.wait_for_timeout(100)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 assert not errors,errors
 b.close()
print('PASS: deployed controls, hero photo prominence, network zoom/reset label alignment, and mobile layout at '+BASE)
