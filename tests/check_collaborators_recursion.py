"""Check coauthor evidence, portrait provenance, controls and real recursive morphing."""
from pathlib import Path
import json,hashlib,subprocess,sys
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1];BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8091/'
manifest=json.loads((ROOT/'data/collaborators.json').read_text(encoding='utf8'))
pubs={p['id']:p for p in json.loads((ROOT/'data/publications.json').read_text(encoding='utf8'))}
assert len({p['id'] for p in manifest['people']})==len(manifest['people'])
for person in manifest['people']:
 assert person['papers'] and all(i in pubs for i in person['papers'])
 assert set(person['topics'])=={pubs[i]['topic'] for i in person['papers']}
 if 'image' in person:
  assert hashlib.sha256((ROOT/person['image']).read_bytes()).hexdigest()==person['sha256']
  if person['id']=='jose-serra': assert person['photoAttribution']=='Portrait supplied by Julie Kumar'
  else: assert person['profile'].startswith('https://') and person['imageSource'].startswith('https://')
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)));page.on('console',lambda e:errors.append(e.text) if e.type=='error' else None)
 page.goto(BASE,wait_until='networkidle');host=page.locator('#network-scene');host.scroll_into_view_if_needed()
 assert host.get_attribute('data-visible-people')=='8'
 assert page.locator('.collaborator-face[data-person="jose-serra"]').count()==1
 page.locator('#collaborator-select').select_option('jose-serra')
 assert page.locator('#collaborator-detail li').count()==3
 assert page.locator('#collaborator-detail h4').inner_text()=='Jose Serra'
 assert page.locator('#collaborator-detail a',has_text='Google Scholar profile').get_attribute('href')=='https://scholar.google.com/citations?user=NpJefRUAAAAJ&hl=en'
 assert page.locator('.collaborator-face[data-person] img').count()==8
 assert page.locator('.collaborator-face img').evaluate_all('(xs)=>xs.every(x=>x.complete&&x.naturalWidth>0)')
 page.locator('#collaborator-select').select_option('dov-kruger');assert page.locator('#collaborator-detail h4').inner_text()=='Dov Kruger'
 dov=next(p for p in manifest['people'] if p['id']=='dov-kruger')
 assert page.locator('#collaborator-detail li').count()==len(dov['papers'])
 page.locator('#collaborator-detail li button').first.click();assert page.locator('.paper-coauthor[data-person="dov-kruger"]').count()==1
 host.screenshot(path=str(ROOT/'qa/collaborators-desktop-final.png'))
 for width in [320,390,768]:
  page.set_viewport_size({'width':width,'height':900});host.scroll_into_view_if_needed();page.wait_for_timeout(300)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  if width<768:
   page.locator('#collaborator-select').select_option('juan-jenny-li')
   assert page.locator('.collaborator-face').count()==2
   boxes=page.locator('.collaborator-face,.collaboration-edge-label').evaluate_all('(xs)=>xs.map(x=>{let r=x.getBoundingClientRect();return {l:r.left,r:r.right,t:r.top,b:r.bottom}})')
   for i,a in enumerate(boxes):
    for c in boxes[i+1:]:assert not(a['l']<c['r'] and a['r']>c['l'] and a['t']<c['b'] and a['b']>c['t']),boxes
   page.locator('[data-people=next]').click();assert 'Showing 2' in page.locator('#collaboration-count').inner_text()
   host.screenshot(path=str(ROOT/f'qa/collaborators-mobile-{width}.png'))
 page.set_viewport_size({'width':1440,'height':1000})
 for mode in ['pyramid','snowflake','fern']:
  host=page.locator('#work-fractal-'+mode);host.scroll_into_view_if_needed();page.wait_for_function('(id)=>document.getElementById(id).dataset.state==="ready"',arg='work-fractal-'+mode)
  slider=host.locator('..').locator('[data-recursion-depth]')
  def depth(v):slider.evaluate('(e,v)=>{e.value=v;e.dispatchEvent(new Event("input",{bubbles:true}))}',v)
  depth('1');one=host.screenshot();depth('2.5');two=host.screenshot();assert one!=two
  assert host.get_attribute('data-recursion')=='2.500'
  # Per-study play resumes only under the global motion policy.
  host.locator('..').get_by_role('button',name='Animate recursion',exact=True).click()
  page.emulate_media(reduced_motion='no-preference');page.wait_for_timeout(1400)
  assert float(host.get_attribute('data-recursion'))<2.5
  page.emulate_media(reduced_motion='reduce');page.wait_for_function('(id)=>document.getElementById(id).dataset.motion==="paused"',arg='work-fractal-'+mode);phase=host.get_attribute('data-recursion');page.wait_for_timeout(200);assert phase==host.get_attribute('data-recursion')
 assert not errors,errors
 b.close()
print('PASS: coauthor links and photo hashes; desktop/mobile node controls; visible recursive morphing; animation and reduced-motion behavior.')
