from playwright.sync_api import sync_playwright
import json,time
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:8091/',wait_until='networkidle');s=page.locator('#hero-art-scene');assert s.get_attribute('data-state')=='ready'
 n=int(s.get_attribute('data-frames'));page.wait_for_timeout(700);assert n==int(s.get_attribute('data-frames'))
 before=s.screenshot();page.locator('#motion-toggle').click();page.wait_for_timeout(300)
 n=int(s.get_attribute('data-frames'));start=time.monotonic();page.wait_for_timeout(2500);fps=(int(s.get_attribute('data-frames'))-n)/(time.monotonic()-start);assert 0<fps<=31
 assert before!=s.screenshot();page.screenshot(path='qa/redshift-animated.png')
 page.locator('#motion-toggle').click();page.wait_for_timeout(300);n=s.get_attribute('data-frames');page.wait_for_timeout(500);assert n==s.get_attribute('data-frames')
 page.locator('#motion-toggle').click();page.locator('#contact').scroll_into_view_if_needed();page.wait_for_timeout(500);n=s.get_attribute('data-frames');page.wait_for_timeout(600);assert n==s.get_attribute('data-frames')
 page.evaluate('window.scrollTo(0,0)');page.wait_for_timeout(500);page.locator('#motion-toggle').click()
 page.set_viewport_size({'width':390,'height':844});page.wait_for_timeout(500);page.screenshot(path='qa/redshift-mobile.png',full_page=True)
 assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 page.evaluate("document.querySelector('#hero-art-scene canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()")
 page.wait_for_timeout(300);assert s.get_attribute('data-state')=='fallback';assert s.locator('img').is_visible()
 assert page.request.get('http://127.0.0.1:8091/assets/asi-loom-fallback.svg').ok
 assert not errors
 result={'loom_fps':round(fps,2),'checks':['reduced-motion still','visible movement','30 fps cap','manual pause','offscreen suspension','mobile overflow','static context-loss fallback'],'errors':errors}
 open('qa/loom-results.json','w').write(json.dumps(result,indent=2));print(json.dumps(result));b.close()
