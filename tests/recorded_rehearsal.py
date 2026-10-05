"""Check the public recorded handoff; no AI provider requests in this test."""
import json,sys,time
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
base=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8096';root=Path(__file__).resolve().parents[1];out=root/'qa/recorded-rehearsal';out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',headless=True)
 page=browser.new_page(viewport={'width':1280,'height':1000});errors=[];requests=[]
 page.add_init_script("window.__audio=[];window.__nativeVoiceCalls=0;const A=window.Audio;window.Audio=new Proxy(A,{construct(t,args){const a=new t(...args);window.__audio.push(a);return a;}});if(window.speechSynthesis)window.speechSynthesis.speak=()=>{window.__nativeVoiceCalls++;throw Error('Native voice must not be used');};")
 page.on('pageerror',lambda e:errors.append(str(e)));page.on('request',lambda r:requests.append({'url':r.url,'method':r.method}))
 page.goto(base+'/julie/');expect(page.locator('#avatar')).to_have_attribute('data-state','ready',timeout=30000)
 assert page.evaluate('()=>window.__audio.every(a=>a.paused)')
 durations=[]
 for i in range(3):
  page.locator('#lesson').select_option(str(i));page.locator('#start').click();expect(page.locator('#state')).to_have_text('PRESENTING',timeout=20000)
  for _ in range(80):
   if page.evaluate('()=>window.__audio.some(a=>a.currentTime>.15&&!a.paused)'):break
   page.wait_for_timeout(100)
  else:raise AssertionError('Audio did not advance')
  state=page.evaluate('()=>window.__audio.map(a=>({src:a.currentSrc,seconds:a.duration,time:a.currentTime,rate:a.playbackRate}))')[0];assert '/voice/sample-' in state['src'] and state['seconds']>10 and state['rate']==1;durations.append(state['seconds'])
  expect(page.locator('#status')).to_contain_text('Marin');expect(page.locator('#caption')).to_be_visible()
  if i==0:
   expect(page.locator('#status')).to_have_text('Handoff complete · you have the floor',timeout=30000)
  elif i==1:
   page.locator('#stop').click();expect(page.locator('#state')).to_have_text('STANDING BY');assert page.evaluate('()=>window.__audio.every(a=>a.paused)')
  else:page.keyboard.press('Escape');expect(page.locator('#state')).to_have_text('STANDING BY')
 page.set_viewport_size({'width':390,'height':844});page.emulate_media(reduced_motion='reduce');expect(page.locator('#motion')).not_to_be_checked();assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 page.locator('#start').click();expect(page.locator('#state')).to_have_text('PRESENTING');page.locator('#next').click();expect(page.locator('#state')).to_have_text('STANDING BY')
 page.screenshot(path=str(out/'mobile.png'),full_page=True)
 assert page.evaluate('window.__nativeVoiceCalls')==0
 page.goto(base+'/');page.locator('#julie-demo').scroll_into_view_if_needed();frame=page.frame_locator('#julie-demo');frame.locator('#start').click();expect(frame.locator('#state')).to_have_text('PRESENTING',timeout=20000);frame.locator('#stop').click();expect(frame.locator('#state')).to_have_text('STANDING BY')
 assert not errors,errors;assert all(r['method']=='GET' for r in requests),requests
 result={'url':base,'voice':'marin','durations':durations,'checks':['no autoplay','all three recorded samples play','normal playback speed','natural end hands floor back','take back floor stops audio','Escape stops audio','slide change stops audio','mobile layout','reduced motion','embedded homepage button','no native speech fallback','no POST/API synthesis requests'],'browser':'Edge desktop and 390px viewport; not physical iPhone','errors':errors}
 (out/('production.json' if base.startswith('https') else 'local.json')).write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2));browser.close()
