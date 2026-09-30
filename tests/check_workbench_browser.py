"""Browser integration checks for the inline research workbench."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
with sync_playwright() as p:
    browser=p.chromium.launch(channel='chrome',headless=True,args=['--enable-unsafe-swiftshader'])
    page=browser.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce')
    errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto('http://127.0.0.1:8091/',wait_until='networkidle')
    page.wait_for_function('document.querySelector("#benchmark-table tbody tr")')
    assert page.locator('#publication-list .artifact-drawer').count()==77
    assert '14/14' in page.locator('#workbench-checks').inner_text()
    page.locator('#attack-frame').scroll_into_view_if_needed()
    f=page.frame_locator('#attack-frame')
    f.locator('#epsilon').fill('1.5');f.locator('#fraction').fill('0.35')
    assert 'B (incorrect)' in f.locator('#raw').inner_text()
    assert 'A (correct)' in f.locator('#defense').inner_text()
    f.locator('#fraction').fill('0.7');f.locator('#epsilon').fill('2')
    assert 'Both classifiers fail' in f.locator('#outcome').inner_text()
    f.locator('summary').click()
    page.wait_for_timeout(200)
    frame=page.locator('#attack-frame').element_handle().content_frame()
    assert frame.evaluate('document.documentElement.scrollHeight <= innerHeight+2')
    page.locator('#attention-input').fill('audit')
    assert page.locator('#attention-heatmap tbody tr').count()==5
    layer1=page.locator('#attention-heatmap').inner_text()
    page.locator('#attention-layer').select_option('1')
    assert layer1!=page.locator('#attention-heatmap').inner_text()
    page.locator('#attention-query').select_option('4')
    assert '1.000000' in page.locator('#attention-query-result').inner_text()
    with page.expect_download() as dl:page.locator('#attention-export').click()
    trace=json.loads(Path(dl.value.path()).read_text())
    assert len(trace['weights'])==2 and len(trace['layers'][0]['Q'])==5
    page.locator('#attention-input').fill('')
    assert page.locator('#attention-query-result').inner_text()==''
    page.locator('#attention-input').fill('trust AI')
    page.locator('#attention-scene').scroll_into_view_if_needed()
    assert page.locator('#attention-scene').get_attribute('data-state')=='ready'
    assert page.locator('#medial-scene').count()==0
    assert page.locator('#hero-art-scene').count()==1
    assert page.locator('#benchmark-table tbody tr').count()==5
    page.locator('#benchmark-language').select_option('All')
    assert page.locator('#benchmark-table tbody tr').count()==15
    bad={'records':[{'model':'bad','language':'English','arss':7,'refusalPercent':0,'latencySeconds':1,'prompts':20}]}
    page.locator('#benchmark-import').set_input_files({'name':'bad.json','mimeType':'application/json','buffer':json.dumps(bad).encode()})
    page.wait_for_function('document.querySelector("#benchmark-error").textContent.includes("rejected")')
    assert page.locator('#benchmark-table tbody tr').count()==15
    good=json.loads((ROOT/'data/drag-pilot.json').read_text())
    good['records']=good['records'][:1];good['records'][0]['model']='<img src=x onerror=alert(1)>'
    page.locator('#benchmark-import').set_input_files({'name':'new.json','mimeType':'application/json','buffer':json.dumps(good).encode()})
    page.wait_for_function('document.querySelectorAll("#benchmark-table tbody tr").length===1')
    assert page.locator('#benchmark-table img').count()==0
    assert 'not independently verified' in page.locator('#benchmark-status').inner_text()
    page.locator('#benchmark-refresh').click()
    page.wait_for_function('document.querySelectorAll("#benchmark-table tbody tr").length===15')
    page.locator('#benchmark-language').select_option('English')
    page.locator('#attention-lab').screenshot(path=str(ROOT/'qa/workbench-attention.png'))
    page.locator('#benchmark-lab').screenshot(path=str(ROOT/'qa/workbench-benchmark.png'))
    for width in [320,390,768]:
        page.set_viewport_size({'width':width,'height':900})
        page.wait_for_timeout(150)
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
    page.add_script_tag(path=str(ROOT/'qa/axe.min.js'))
    violations=page.evaluate("async()=> (await axe.run(document.querySelector('#live-workbench'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}})).violations")
    assert not violations,json.dumps(violations,indent=2)
    assert not errors,errors
    browser.close()
print('Workbench browser checks passed: controls, exports, import rejection, safe text, responsive layout and axe A/AA.')
