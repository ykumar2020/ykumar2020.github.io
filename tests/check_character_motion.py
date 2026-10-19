"""Behavioral checks for Julie's idle and scroll-directed run animations."""
import sys
from playwright.sync_api import sync_playwright


def lower_body_signature(locator):
    """Hash visible lower-body pixels so a changing counter alone cannot pass."""
    return locator.evaluate(
        """canvas => {
          const context = canvas.getContext('2d', {willReadFrequently: true});
          const pixels = context.getImageData(0, canvas.height * .48,
            canvas.width, canvas.height * .52).data;
          let hash = 2166136261;
          for (let i = 0; i < pixels.length; i += 4) {
            hash ^= pixels[i] + (pixels[i + 1] << 8) +
              (pixels[i + 2] << 16) + (pixels[i + 3] << 24);
            hash = Math.imul(hash, 16777619);
          }
          return `${canvas.dataset.frame}:${hash >>> 0}`;
        }"""
    )


def assert_legs_advance(page, selector):
    sprite = page.locator(selector)
    signatures = []
    for _ in range(4):
        page.wait_for_timeout(175)
        signatures.append(lower_body_signature(sprite))
    assert len(set(signatures)) == len(signatures), (selector, signatures)

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
    assert runner.get_attribute("data-run-frames") == "24"
    assert runner.get_attribute("data-cat-frames") == "24"
    assert runner.get_attribute("data-frame-interval-ms") == "145"
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.spriteState === 'ready'")
    assert runner.get_attribute("data-sprite-renderer") == "canvas-cropped"
    assert page.locator(".julie-runner-sprite").evaluate("x => x.tagName === 'CANVAS' && x.width === 256 && x.height === 256")
    assert page.locator(".julie-runner-sprite").get_attribute("data-sprite-src") == "assets/julie-run-cycle-v3.webp"
    assert page.locator(".cat-runner-black").get_attribute("data-sprite-src") == "assets/cat-run-cycle-black-v4.webp"
    assert page.locator(".cat-runner-grey").get_attribute("data-sprite-src") == "assets/cat-run-cycle-grey-v4.webp"
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
    assert_legs_advance(page, ".julie-runner-sprite")
    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-resting')", timeout=7000)
    parked = runner.evaluate("el => Number.parseFloat(getComputedStyle(el).getPropertyValue('--julie-runner-x'))")
    assert parked > 1100, parked
    assert runner.evaluate("el => Number.parseFloat(getComputedStyle(el).opacity) > .9")
    page.locator("#research").scroll_into_view_if_needed()
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.role === 'news'")
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.cast === 'black-cat'")
    first_cat_frame = page.locator(".cat-runner-black").get_attribute("data-frame")
    page.wait_for_function(
        "first => document.querySelector('.cat-runner-black').dataset.frame !== first",
        arg=first_cat_frame,
    )
    next_cat_frame = page.locator(".cat-runner-black").get_attribute("data-frame")
    assert first_cat_frame != next_cat_frame, (first_cat_frame, next_cat_frame)
    assert_legs_advance(page, ".cat-runner-black")
    assert page.locator(".julie-context-portrait").get_attribute("src") == "assets/julie-role-news-v2.webp"

    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-resting')", timeout=7000)
    page.locator("#projects").scroll_into_view_if_needed()
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.cast === 'grey-cat'")
    assert_legs_advance(page, ".cat-runner-grey")

    page.wait_for_function("document.querySelector('.julie-runner-track').classList.contains('is-resting')", timeout=7000)
    page.locator("#teaching").scroll_into_view_if_needed()
    page.wait_for_function("document.querySelector('.julie-runner-track').dataset.cast === 'julie-cats'")
    assert_legs_advance(page, ".julie-runner-sprite")
    assert_legs_advance(page, ".cat-runner-black")
    assert_legs_advance(page, ".cat-runner-grey")
    assert not errors, errors

    reduced_page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="reduce")
    assert reduced_page.goto(base, wait_until="domcontentloaded").status == 200
    assert reduced_page.locator(".julie-runner-track").is_hidden()
    browser.close()

print("PASS: Julie and both cats use 24-frame sprint cycles, the cast begins Julie -> black cat, parks Julie in the corner, and stops for reduced motion.")
