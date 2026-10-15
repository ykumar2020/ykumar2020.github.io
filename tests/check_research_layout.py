"""Focused acceptance check for the graph-first research experience."""
from pathlib import Path
import sys

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8091/'

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel='chrome', headless=True, args=['--enable-unsafe-swiftshader'])
    page = browser.new_page(viewport={'width': 1440, 'height': 1000}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    assert page.goto(BASE, wait_until='domcontentloaded').status == 200
    page.wait_for_function("document.querySelector('#network-scene').dataset.state==='ready'")

    graph_y = page.locator('#collaborations').bounding_box()['y']
    assert graph_y < page.locator('#flagships').bounding_box()['y'] < page.locator('#research').bounding_box()['y']
    assert page.locator('#site-nav a', has_text='Research').get_attribute('href') == '#collaborations'
    assert page.locator('.flagship-grid').evaluate("e=>getComputedStyle(e).gridTemplateColumns.split(' ').length") == 4
    assert page.locator('.research-selected ul').evaluate("e=>getComputedStyle(e).gridTemplateColumns.split(' ').length") == 3
    assert page.locator('#publication-list').evaluate("e=>getComputedStyle(e).gridTemplateColumns.split(' ').length") == 3

    assert page.locator('#collaborator-select').input_value() == ''
    assert page.locator('#collaborator-detail h4').inner_text() == 'Choose a collaborator'
    page.locator('#collaborator-select').select_option('dov-kruger')
    assert page.locator('#collaborator-detail li').count() == 33
    assert page.locator('#collaborator-detail>p').first.inner_text().startswith('All 33 shared bibliography records')
    page.locator('#knowledge-panel').screenshot(path=str(ROOT / 'qa/research-graph-first-desktop.png'))
    page.locator('#flagships').screenshot(path=str(ROOT / 'qa/research-compact-cards-desktop.png'))

    page.locator('[data-filter="Agentic AI"]').click()
    page.wait_for_function("document.querySelector('#network-scene').dataset.records==='6'")
    assert page.locator('#collaborator-detail li').count() == 33

    page.set_viewport_size({'width': 390, 'height': 844})
    assert page.locator('.flagship-grid').evaluate("e=>getComputedStyle(e).gridTemplateColumns.split(' ').length") == 1
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    assert not errors, errors
    browser.close()

print('PASS: graph-first research order, compact desktop cards, and complete collaborator paper lists.')
