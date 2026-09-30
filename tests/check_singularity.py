"""Interaction, visual-state and accessibility checks for the Singularity pillar."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
 b=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
 page=b.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[]
 page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:8091/',wait_until='networkidle')
 page.wait_for_function('document.querySelector("#horizon-scene").dataset.state==="ready"')
 assert page.locator('.access-pass').count()==5
 assert page.locator('#publication-list .paper-focus-tags').count()==3
 page.locator('#horizon-depth').fill('5')
 assert page.locator('#horizon-status').inner_text()=='HELD BY TRIPWIRE'
 before=page.locator('#horizon-scene').screenshot()
 page.locator('#horizon-gate').uncheck()
 assert 'UNGATED' in page.locator('#horizon-status').inner_text()
 assert '1.50/s' in page.locator('#horizon-metrics').inner_text()
 assert before!=page.locator('#horizon-scene').screenshot()
 with page.expect_download() as dl:page.locator('#horizon-export').click()
 data=json.loads(Path(dl.value.path()).read_text());assert data['k']==5 and data['backlogPerSecond']==1.5
 page.locator('#horizon-reset').click()
 assert page.locator('#horizon-depth').input_value()=='2'
 for ident in ['risk-recursion','risk-asymmetry','risk-poisoning']:
  page.locator('#'+ident+' summary').click();assert page.locator('#'+ident).get_attribute('open') is not None
 page.locator('[data-focus-jump="ASI-Risk"]').click()
 assert page.locator('#publication-list .paper:visible').evaluate_all('(xs)=>xs.map(x=>x.id)')==['cv-10','cv-38']
 assert page.locator('#network-record option').count()==2
 assert page.locator('#knowledge-panel').is_visible()
 page.locator('[data-focus-jump="Recursive-Systems"]').click()
 assert page.locator('#publication-list .paper:visible').evaluate_all('(xs)=>xs.map(x=>x.id)')==['cv-07']
 page.locator('#risk-poisoning [data-paper-jump]').click()
 assert page.locator('#cv-06').is_visible()
 assert page.locator('[data-focus-filter="All"]').get_attribute('aria-pressed')=='true'
 page.locator('[data-focus-filter="ASI-Risk"]').click();page.locator('[data-jump-year]').click()
 assert page.locator('[data-focus-filter="All"]').get_attribute('aria-pressed')=='true'
 page.locator('#horizon-depth').fill('6');page.locator('#horizon-scene').scroll_into_view_if_needed()
 frames=page.locator('#horizon-scene').get_attribute('data-frames');page.wait_for_timeout(400)
 assert page.locator('#horizon-scene').get_attribute('data-frames')==frames
 page.locator('#horizon-scene').screenshot(path=str(ROOT/'qa/horizon-desktop.png'))
 page.locator('#horizon-lab').screenshot(path=str(ROOT/'qa/horizon-panel.png'))
 for width in [320,390,768,1440]:
  page.set_viewport_size({'width':width,'height':900});page.wait_for_timeout(150)
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
 page.set_viewport_size({'width':390,'height':900})
 page.locator('#horizon-lab').screenshot(path=str(ROOT/'qa/horizon-mobile.png'))
 page.add_script_tag(path=str(ROOT/'qa/axe.min.js'))
 problems=page.evaluate("async()=> (await axe.run(document.querySelector('#singularity'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations")
 assert not problems,json.dumps(problems,indent=2)
 page.emulate_media(reduced_motion='no-preference');page.locator('#horizon-scene').scroll_into_view_if_needed();page.wait_for_timeout(100)
 start=int(page.locator('#horizon-scene').get_attribute('data-frames'));page.wait_for_timeout(1100);delta=int(page.locator('#horizon-scene').get_attribute('data-frames'))-start;assert 0<delta<=35,delta
 page.locator('#contact').scroll_into_view_if_needed();page.wait_for_timeout(150);start=page.locator('#horizon-scene').get_attribute('data-frames');page.wait_for_timeout(250);assert page.locator('#horizon-scene').get_attribute('data-frames')==start
 page.locator('#horizon-scene canvas').evaluate("c=>c.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()")
 page.wait_for_function('document.querySelector("#horizon-scene").dataset.state==="fallback"');assert page.locator('#horizon-scene img').is_visible()
 assert not errors,errors
 nojs=b.new_page(java_script_enabled=False,reduced_motion='reduce');nojs.goto('http://127.0.0.1:8091/');assert nojs.locator('#singularity-title').is_visible();nojs.locator('#risk-recursion summary').focus();nojs.keyboard.press('Enter');assert nojs.locator('#risk-recursion .risk-detail').is_visible();b.close()
print('Singularity browser checks passed: gate, export, matrix, filters/network, reduced motion, 30 fps cap, offscreen freeze, fallback, 320-1440 widths, no-JS and axe A/AA.')
