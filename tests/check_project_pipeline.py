"""Verify the interactive source-to-results research pipeline."""
import sys
from playwright.sync_api import sync_playwright


base = next((arg for arg in sys.argv[1:] if arg.startswith('http')), 'http://127.0.0.1:8091/')
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel='chrome', headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800}, reduced_motion='no-preference')
    assert page.goto(base, wait_until='domcontentloaded').status == 200
    pipeline = page.locator('#project-pipeline')
    pipeline.scroll_into_view_if_needed()
    assert pipeline.is_visible()
    assert page.locator('[data-pipeline-step]').count() == 5
    page.locator('[data-pipeline-step="3"]').click()
    assert page.locator('.pipeline-visual').get_attribute('data-active') == '3'
    assert page.locator('.pipeline-detail h4').inner_text() == 'Graph analysis'
    assert 'coverage' in page.locator('.pipeline-detail').inner_text().lower()
    page.locator('.pipeline-motion').click()
    assert pipeline.evaluate("el => el.classList.contains('is-paused')")
    assert page.locator('.pipeline-motion').inner_text() == 'Play pipeline'
    mobile = browser.new_page(viewport={'width': 390, 'height': 760}, reduced_motion='reduce')
    assert mobile.goto(base, wait_until='domcontentloaded').status == 200
    assert mobile.locator('#project-pipeline').is_visible()
    assert mobile.locator('.pipeline-viewport').evaluate('el => el.scrollWidth > el.clientWidth')
    assert mobile.locator('.pipeline-controls').evaluate("el => getComputedStyle(el).gridTemplateColumns.split(' ').length === 2")
    mobile.locator('[data-pipeline-step="4"]').click()
    assert mobile.locator('.pipeline-viewport').evaluate('el => el.scrollLeft > 0')
    browser.close()

print('PASS: animated source-to-graph-analysis pipeline works on desktop and mobile.')
