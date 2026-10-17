"""Regression checks for the evidence-led academic overview."""
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8091/"
ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "qa"
QA.mkdir(exist_ok=True)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    for label, width, height in (("desktop", 1440, 1000), ("mobile", 390, 844)):
        page = browser.new_page(viewport={"width": width, "height": height}, reduced_motion="reduce")
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        response = page.goto(BASE, wait_until="domcontentloaded")
        assert response and response.status == 200
        page.locator("#highlights").scroll_into_view_if_needed()
        assert page.locator("#highlights").is_visible()
        assert page.locator("#youtube").is_visible()
        assert "Learn with Yulia" in page.locator("#youtube").inner_text()
        assert page.locator(".research-theme").count() == 5
        assert page.locator(".evidence-strip article").count() == 3
        assert page.locator(".news-list li").count() == 4
        assert page.locator(".recognition-panel li").count() == 4
        assert page.locator("#notes .technical-notes-grid article").count() == 3
        youtube_links = page.locator('a[href="https://www.youtube.com/@yuliakumar8682"]')
        assert youtube_links.count() >= 8
        assert page.locator('script[type="application/ld+json"]').text_content().find("youtube.com/@yuliakumar8682") >= 0
        impact_count = page.locator(".paper-impact").count()
        assert impact_count >= 5, impact_count
        document_overflow = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
        overflowing = page.evaluate("""[...document.querySelectorAll('*')]
          .filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1 && getComputedStyle(e.parentElement).overflowX === 'visible')
          .slice(0, 8).map(e => `${e.tagName.toLowerCase()}#${e.id}.${e.className}`)""")
        assert not document_overflow, f"horizontal overflow at {width}px: {overflowing}"
        page.locator("#youtube").screenshot(path=QA / f"youtube-channel-{label}.png")
        page.locator("#highlights").screenshot(path=QA / f"academic-overview-{label}.png")
        assert not errors, errors
        page.close()
    browser.close()

print("PASS: academic overview, evidence statements, news, recognition, and notes render at desktop and mobile sizes.")
