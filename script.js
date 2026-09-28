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
