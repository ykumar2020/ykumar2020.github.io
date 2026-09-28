'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opened));
  navigation.classList.toggle('is-open', opened);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 1024px)').addEventListener('change', closeMenu);
const papers = [...document.querySelectorAll('.paper')];
const filters = [...document.querySelectorAll('.filter')];
const search = document.querySelector('#publication-search');
const loadMore = document.querySelector('#load-more');
const count = document.querySelector('#publication-count');
const yearFilter = document.querySelector('#publication-year');
const statusFilter = document.querySelector('#publication-status');
const showAll = document.querySelector('#show-all-publications');
let selected = 'All';
let visibleLimit = 6;
function updatePapers() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = papers.filter(p => (selected === 'All' || p.dataset.topic === selected) && (!yearFilter.value || p.dataset.year === yearFilter.value) && (!statusFilter.value || p.dataset.status === statusFilter.value) && p.textContent.toLocaleLowerCase().includes(query));
  papers.forEach(p => p.hidden = true);
  matches.slice(0, visibleLimit).forEach(p => p.hidden = false);
  count.textContent = 'Showing ' + Math.min(visibleLimit, matches.length) + ' of ' + matches.length + ' bibliography records';
  loadMore.hidden = matches.length <= visibleLimit;
  showAll.hidden = matches.length <= visibleLimit;
  showAll.textContent = 'Show all ' + matches.length + ' matching records';
  document.querySelector('#no-results').hidden = matches.length > 0;
}
document.querySelector('.publication-tools').hidden = false; count.hidden = false;
filters.forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.filter; visibleLimit = 6;
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  updatePapers();
}));
search.addEventListener('input', () => { visibleLimit = 6; updatePapers(); });
yearFilter.addEventListener('change', () => { visibleLimit = 6; updatePapers(); });
statusFilter.addEventListener('change', () => { visibleLimit = 6; updatePapers(); });
showAll.addEventListener('click', () => {
  const before = papers.filter(p => !p.hidden);
  visibleLimit = papers.length; updatePapers();
  const next = papers.find(p => !p.hidden && !before.includes(p));
  if (next) { const heading = next.querySelector('h3'); heading.tabIndex = -1; heading.focus({preventScroll: true}); }
});
loadMore.addEventListener('click', () => {
  const before = papers.filter(p => !p.hidden);
  visibleLimit += 6; updatePapers();
  const next = papers.find(p => !p.hidden && !before.includes(p));
  if (next) { const heading = next.querySelector('h3'); heading.tabIndex = -1; heading.focus({preventScroll: true}); }
});
updatePapers();
let toastTimer;
const toast = document.querySelector('#toast');
function announce(message) { toast.textContent = message; toast.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.hidden = true, 3500); }
document.querySelectorAll('.copy-citation').forEach(button => button.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(button.dataset.citation); announce('Citation copied to clipboard.'); }
  catch {
    const text = document.createElement('textarea');
    text.value = button.dataset.citation; text.style.position = 'fixed'; text.style.opacity = '0';
    document.body.append(text); text.select(); const copied = document.execCommand('copy');
    text.remove(); button.focus();
    announce(copied ? 'Citation copied to clipboard.' : 'Copy unavailable. Select the citation text on the page.');
  }
}));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navigation.querySelectorAll('a').forEach(a => {
        if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-15% 0px -60% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

// Load the locally bundled 3D renderer only as the planet section approaches view.
const planetRoot = document.querySelector('#planetarium');
if (planetRoot && 'IntersectionObserver' in window) {
  const planetLoader = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    planetLoader.disconnect();
    import('./assets/planets.js').then(module => module.mountPlanets(planetRoot)).catch(() => {
      planetRoot.dataset.state = 'fallback';
      planetRoot.querySelector('.planet-controls').hidden = true;
      planetRoot.querySelector('.planet-status').textContent = 'Still view';
    });
  }, { rootMargin: '250px' });
  planetLoader.observe(planetRoot);
}

// Three-photo flip carousel. Content remains static when motion is reduced.
const photoCarousel = document.querySelector('#photo-carousel');
if (photoCarousel) {
  const slides = [...photoCarousel.querySelectorAll('.portrait-slide')];
  const controls = photoCarousel.querySelector('.photo-controls');
  const pauseButton = controls.querySelector('[data-photo="pause"]');
  const counter = photoCarousel.querySelector('.photo-count');
  const liveStatus = photoCarousel.querySelector('.photo-status');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, busy = false, paused = reducedMotion.matches;
  let hovered = false, focused = false, visible = true, timer;
  let animations = [];

  function schedulePhoto() {
    clearTimeout(timer);
    pauseButton.textContent = paused ? 'Play' : 'Pause';
    pauseButton.setAttribute('aria-label', paused ? 'Play photo rotation' : 'Pause photo rotation');
    pauseButton.setAttribute('aria-pressed', String(paused));
    photoCarousel.dataset.paused = String(paused);
    if (!paused && !hovered && !focused && visible && !document.hidden && !busy) {
      timer = setTimeout(() => showPhoto(current + 1, false), 8000);
    }
  }

  async function flip(element, from, to) {
    const animation = element.animate([
      { transform: `rotateY(${from}deg)`, opacity: Math.abs(from) > 0 ? .55 : 1 },
      { transform: `rotateY(${to}deg)`, opacity: Math.abs(to) > 0 ? .55 : 1 }
    ], { duration: 280, easing: 'ease-in-out', fill: 'both' });
    animations.push(animation);
    try { await animation.finished; } catch { /* Reduced-motion changes can cancel a flip. */ }
    return animation;
  }

  async function showPhoto(index, manual = true) {
    if (busy) return;
    const next = (index + slides.length) % slides.length;
    if (next === current) return;
    busy = true;
    if (manual) paused = true;
    clearTimeout(timer);
    const oldSlide = slides[current], newSlide = slides[next];
    try {
      const img = newSlide.querySelector('img');
      await img.decode();
      if (!reducedMotion.matches) await flip(oldSlide, 0, 88);
      oldSlide.hidden = true;
      newSlide.hidden = false;
      current = next;
      photoCarousel.dataset.index = String(current);
      counter.textContent = String(current + 1).padStart(2, '0') + ' / 03';
      if (manual) liveStatus.textContent = 'Photo ' + (current + 1) + ' of 3. ' + img.alt;
      if (!reducedMotion.matches) await flip(newSlide, -88, 0);
    } catch {
      if (manual) liveStatus.textContent = 'This photo could not load. Please try another photo.';
    } finally {
      animations.forEach(animation => animation.cancel()); animations = [];
      busy = false; schedulePhoto();
    }
  }
  controls.hidden = false;
  photoCarousel.dataset.index = '0';
  controls.addEventListener('click', event => {
    const action = event.target.closest('[data-photo]')?.dataset.photo;
    if (action === 'next') showPhoto(current + 1);
    if (action === 'previous') showPhoto(current - 1);
    if (action === 'pause') { paused = !paused; schedulePhoto(); }
  });
  photoCarousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); showPhoto(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  photoCarousel.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { hovered = true; schedulePhoto(); } });
  photoCarousel.addEventListener('pointerleave', () => { hovered = false; schedulePhoto(); });
  photoCarousel.addEventListener('focusin', () => { focused = true; schedulePhoto(); });
  photoCarousel.addEventListener('focusout', event => { focused = photoCarousel.contains(event.relatedTarget); schedulePhoto(); });
  document.addEventListener('visibilitychange', schedulePhoto);
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) { paused = true; animations.forEach(animation => animation.cancel()); }
    schedulePhoto();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedulePhoto(); }, { threshold: .25 }).observe(photoCarousel);
  }
  schedulePhoto();
}
