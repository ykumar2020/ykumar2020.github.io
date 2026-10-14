"""Behavioral checks for Julie's idle and scroll-directed run animations."""
import sys
from playwright.sync_api import sync_playwright

base = next((arg for arg in sys.argv[1:] if arg.startswith("http")), "http://127.0.0.1:8091/")
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="no-preference")
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    assert page.goto(base, wait_until="networkidle").status == 200
    runner = page.locator(".julie-runner-track")
    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-ready')")
    page.locator("#julie-apps").scroll_into_view_if_needed()
    page.wait_for_function("document.querySelectorAll('.julie-app-card.is-julie-visible').length > 0")
    assert "julie-idle-alive" in page.locator(".julie-app-card.is-julie-visible img:not(.julie-role-glasses)").first.evaluate("el => getComputedStyle(el).animationName")
    before = runner.evaluate("el => getComputedStyle(el).getPropertyValue('--julie-runner-x')")
    page.evaluate("scrollTo(0, document.documentElement.scrollHeight * .55)")
    page.wait_for_timeout(700)
    after = runner.evaluate("el => getComputedStyle(el).getPropertyValue('--julie-runner-x')")
    assert before != after, (before, after)
    assert runner.get_attribute("data-direction") == "right"
    assert not errors, errors

    reduced_page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="reduce")
    assert reduced_page.goto(base, wait_until="networkidle").status == 200
    assert reduced_page.locator(".julie-runner-track").is_hidden()
    browser.close()

print("PASS: Julie idles when visible, runs toward scroll position, and stops for reduced motion.")
