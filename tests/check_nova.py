from pathlib import Path
import json,zipfile,hashlib
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1];base='http://127.0.0.1:8091/'
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader']);page=b.new_page(viewport={'width':1440,'height':1100},reduced_motion='reduce');errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(base,wait_until='networkidle');page.locator('#virtual-ta').scroll_into_view_if_needed()
 frame=page.locator('#virtual-ta iframe').element_handle().content_frame();frame.wait_for_selector('#hand-off')
 frame.locator('#hand-off').click();frame.wait_for_function("document.body.classList.contains('presenting')")
 frame.wait_for_function("document.querySelector('#demo-caption').textContent.startsWith('Start with')")
 frame.locator('#take-back').click();assert not frame.locator('body').evaluate("e=>e.classList.contains('presenting')")
 frame.locator('#pause-motion').click();assert frame.locator('#pause-motion').get_attribute('aria-pressed')=='true'
 page.locator('#virtual-ta').screenshot(path=str(root/'qa/nova-desktop.png'))
 page.add_script_tag(path=str(root/'qa/axe.min.js'));violations=page.evaluate("async()=> (await axe.run(document.querySelector('#virtual-ta'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations")
 assert not violations,json.dumps(violations,indent=2)
 frame.add_script_tag(path=str(root/'qa/axe.min.js'));v=frame.evaluate("async()=> (await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations");assert not v,json.dumps(v,indent=2)
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':900});page.locator('#virtual-ta').scroll_into_view_if_needed();page.wait_for_timeout(200)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  assert frame.evaluate('document.documentElement.scrollWidth<=innerWidth')
  assert frame.evaluate('document.documentElement.scrollHeight<=innerHeight+1'),frame.evaluate('({h:innerHeight,s:document.documentElement.scrollHeight})')
  page.locator('#virtual-ta').screenshot(path=str(root/f'qa/nova-{width}.png'))
 for link in ['labs/nova/guide.html','assets/downloads/nova-virtual-ta.zip','data/nova-verification.json']:
  assert page.request.get(base+link).status==200
 assert not errors,errors
 b.close()
info=json.loads((root/'data/nova-verification.json').read_text());archive=root/info['download']['file'];assert hashlib.sha256(archive.read_bytes()).hexdigest()==info['download']['sha256']
with zipfile.ZipFile(archive) as z:
 assert not any(Path(n).name in ['.env','local-settings.json'] for n in z.namelist())
 assert len(json.loads(z.read('NovaVirtualTA/public/lectures/sample/lecture.json'))['slides'])==3
 assert not any(n.endswith('.png') or n.endswith('.pptx') or n.endswith('.pdf') for n in z.namelist())
print('Nova preview, controls, reduced-motion layout, mobile sizing, axe, links and public package passed.')
