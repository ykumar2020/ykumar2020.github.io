"""Verify that every curated research item exposes a real, accessible visual artifact."""
import sys

from playwright.sync_api import sync_playwright


BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8091/"

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(
        channel="chrome", headless=True, args=["--enable-unsafe-swiftshader"]
    )
    context = browser.new_context(viewport={"width": 1440, "height": 1000})
    page = context.new_page()
    errors = []
    failed_requests = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on(
        "requestfailed",
        lambda request: (
            failed_requests.append(f"{request.url}: {request.failure}")
            if "/assets/research/" in request.url
            else None
        ),
    )
    assert page.goto(BASE, wait_until="networkidle").status == 200

    groups = (
        ("#flagships .flagship-card", 4),
        (".frontier-paper", 2),
        (".research-selected li", 6),
    )
    for selector, expected in groups:
        cards = page.locator(selector)
        assert cards.count() == expected, (selector, cards.count())
        for index in range(expected):
            card = cards.nth(index)
            assert card.locator(".research-artifact").count() == 1
            image = card.locator(".research-artifact img")
            assert image.count() == 1
            assert image.get_attribute("src").startswith("assets/research/")
            assert len(image.get_attribute("alt") or "") >= 25
            image.scroll_into_view_if_needed()
            image.evaluate("node => node.decode ? node.decode() : Promise.resolve()")
            assert image.evaluate("node => node.complete && node.naturalWidth > 0")
            assert card.locator(".research-artifact figcaption span").count() == 1
            assert card.locator(".research-artifact figcaption").inner_text().strip()
            link = card.locator(".research-artifact a")
            assert link.count() == 1 and link.get_attribute("href")

    assert page.locator(".research-artifact").count() >= 12
    assert "Every preview is extracted" in page.locator(".research-artifact-note").inner_text()

    for width in (1440, 768, 390, 320):
        page.set_viewport_size({"width": width, "height": 850})
        if not page.evaluate("document.documentElement.scrollWidth <= innerWidth"):
            overflowing = page.evaluate("""() => [...document.querySelectorAll('*')]
                .filter(node => node.getBoundingClientRect().right > innerWidth + 1)
                .slice(0, 12)
                .map(node => ({tag: node.tagName, cls: node.className, right: Math.round(node.getBoundingClientRect().right), width: Math.round(node.getBoundingClientRect().width)}))""")
            raise AssertionError((width, overflowing))

    assert not errors, errors
    assert not failed_requests, failed_requests
    context.close()
    browser.close()

print("PASS: all 12 curated research works display an accessible, source-linked visual artifact.")
