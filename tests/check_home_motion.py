"""Verify that home motion plays by default and explicit accessibility choices persist."""
import sys

from playwright.sync_api import sync_playwright


BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8091/"

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    assert page.goto(BASE, wait_until="networkidle").status == 200

    page.wait_for_function("document.documentElement.dataset.motion === 'playing'")
    carousel = page.locator("#photo-carousel")
    fft = page.locator("#fft-background")
    assert carousel.get_attribute("data-paused") == "false"
    assert carousel.get_attribute("data-autoplay") == "true"
    assert fft.get_attribute("data-motion") == "playing"

    fft_frames = int(fft.get_attribute("data-frames"))
    fft_pixels = fft.evaluate("el => el.toDataURL()")
    page.wait_for_timeout(350)
    assert int(fft.get_attribute("data-frames")) > fft_frames
    assert fft.evaluate("el => el.toDataURL()") != fft_pixels
    page.wait_for_function("document.querySelector('#photo-carousel').dataset.index !== '0'", timeout=6000)

    page.locator("#motion-toggle").click()
    page.wait_for_function("document.documentElement.dataset.motion === 'paused'")
    assert page.evaluate("localStorage.getItem('julie-site-motion-v2')") == "paused"
    paused_index = carousel.get_attribute("data-index")
    paused_frames = int(fft.get_attribute("data-frames"))
    page.wait_for_timeout(3500)
    assert carousel.get_attribute("data-index") == paused_index
    assert int(fft.get_attribute("data-frames")) == paused_frames

    page.reload(wait_until="networkidle")
    page.wait_for_function("document.documentElement.dataset.motion === 'paused'")
    assert page.locator("#photo-carousel").get_attribute("data-paused") == "true"
    assert page.locator("#fft-background").get_attribute("data-motion") == "paused"
    assert not errors, errors
    context.close()

    reduced = browser.new_context(viewport={"width": 900, "height": 700}, reduced_motion="reduce")
    reduced_page = reduced.new_page()
    assert reduced_page.goto(BASE, wait_until="networkidle").status == 200
    reduced_page.wait_for_function("document.documentElement.dataset.motion === 'paused'")
    assert reduced_page.locator("#photo-carousel").get_attribute("data-paused") == "true"
    assert reduced_page.locator("#fft-background").get_attribute("data-motion") == "paused"
    reduced.close()
    browser.close()

print("PASS: the home slideshow and FFT animate by default; explicit pause and reduced-motion remain respected.")
