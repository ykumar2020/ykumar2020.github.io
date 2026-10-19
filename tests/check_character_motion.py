"""Behavioral checks for Julie's idle and scroll-directed run animations."""
import sys
from playwright.sync_api import sync_playwright

base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="no-preference")
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    assert page.goto(base, wait_until="domcontentloaded").status == 200
    runner = page.locator(".julie-runner-track")
    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-ready')")
    page.wait_for_function("el => el.classList.contains('is-resting') && Number.parseFloat(getComputedStyle(el).opacity) > .9", arg=runner.element_handle())
    assert runner.evaluate("el => el.classList.contains('is-resting') && Number.parseFloat(getComputedStyle(el).opacity) > .9")
    assert runner.get_attribute("data-role") == "studio"
    assert runner.get_attribute("data-cast-order") == "julie,black-cat,grey-cat,julie-cats"
    assert runner.get_attribute("data-cat-frames") == "12"
    assert "cat-run-cycle-black-v2.webp" in page.locator(".cat-runner-black").evaluate("x => getComputedStyle(x).backgroundImage")
    assert "cat-run-cycle-grey-v2.webp" in page.locator(".cat-runner-grey").evaluate("x => getComputedStyle(x).backgroundImage")
    assert page.locator(".julie-context-portrait").evaluate("x => x.complete && x.naturalWidth === 640 && x.naturalHeight === 960")
    assert page.locator(".julie-hi").inner_text() == "Hi! Let me know if you need help."
    page.locator("#julie-apps").scroll_into_view_if_needed()
    page.wait_for_function("document.querySelectorAll('.julie-app-card.is-julie-visible').length > 0")
    assert "julie-idle-alive" in page.locator(".julie-app-card.is-julie-visible img").first.evaluate("el => getComputedStyle(el).animationName")
    page.evaluate("scrollTo(0, document.documentElement.scrollHeight * .55)")
    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-running')")
    assert runner.get_attribute("data-cast") == "julie"
    page.wait_for_timeout(1400)
    midpoint = runner.evaluate("el => Number.parseFloat(getComputedStyle(el).getPropertyValue('--julie-runner-x'))")
    assert 100 < midpoint < 1180, midpoint
    assert runner.get_attribute("data-direction") == "right"
    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-resting')", timeout=7000)
    parked = runner.evaluate("el => Number.parseFloat(getComputedStyle(el).getPropertyValue('--julie-runner-x'))")
    assert parked > 1100, parked
    assert runner.evaluate("el => Number.parseFloat(getComputedStyle(el).opacity) > .9")
    page.locator("#research").scroll_into_view_if_needed()
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.role === 'news'")
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.cast === 'black-cat'")
    first_cat_frame = runner.evaluate("el => [getComputedStyle(el).getPropertyValue('--cat-frame-x'), getComputedStyle(el).getPropertyValue('--cat-frame-y')].join(' ')")
    page.wait_for_timeout(160)
    next_cat_frame = runner.evaluate("el => [getComputedStyle(el).getPropertyValue('--cat-frame-x'), getComputedStyle(el).getPropertyValue('--cat-frame-y')].join(' ')")
    assert first_cat_frame != next_cat_frame, (first_cat_frame, next_cat_frame)
    assert page.locator(".julie-context-portrait").get_attribute("src") == "assets/julie-role-news-v2.webp"
    assert not errors, errors

    reduced_page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="reduce")
    assert reduced_page.goto(base, wait_until="domcontentloaded").status == 200
    assert reduced_page.locator(".julie-runner-track").is_hidden()
    browser.close()

print("PASS: the sprint cast uses 12-frame cat run cycles, begins Julie -> black cat, declares the full four-part sequence, parks Julie in the corner, and stops for reduced motion.")
