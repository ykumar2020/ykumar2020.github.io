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
let selectedFocus = 'All';
let visibleLimit = 6;
const filterParams = new URLSearchParams(location.search);
const topicValues = ['All', ...filters.map(button => button.dataset.filter)];
if (topicValues.includes(filterParams.get('topic'))) selected = filterParams.get('topic');
if ([...document.querySelectorAll('[data-focus-filter]')].some(button => button.dataset.focusFilter === filterParams.get('focus'))) selectedFocus = filterParams.get('focus');
if ([...yearFilter.options].some(option => option.value === filterParams.get('year'))) yearFilter.value = filterParams.get('year');
if ([...statusFilter.options].some(option => option.value === filterParams.get('status'))) statusFilter.value = filterParams.get('status');
search.value = (filterParams.get('q') || '').slice(0, 120);
function saveFilterState() {
  const params = new URLSearchParams();
  if (selected !== 'All') params.set('topic', selected);
  if (selectedFocus !== 'All') params.set('focus', selectedFocus);
  if (yearFilter.value) params.set('year', yearFilter.value);
  if (statusFilter.value) params.set('status', statusFilter.value);
  if (search.value.trim()) params.set('q', search.value.trim());
  history.replaceState(null, '', location.pathname + (params.size ? '?' + params : '') + location.hash);
}
function updatePapers() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = papers.filter(p => (selected === 'All' || p.dataset.topic === selected) && (selectedFocus === 'All' || (p.dataset.focus||'').split(' ').includes(selectedFocus)) && (!yearFilter.value || p.dataset.year === yearFilter.value) && (!statusFilter.value || p.dataset.status === statusFilter.value) && p.textContent.toLocaleLowerCase().includes(query));
  papers.forEach(p => p.hidden = true);
  matches.slice(0, visibleLimit).forEach(p => p.hidden = false);
  count.textContent = 'Showing ' + Math.min(visibleLimit, matches.length) + ' of ' + matches.length + ' bibliography records';
  loadMore.hidden = matches.length <= visibleLimit;
  showAll.hidden = matches.length <= visibleLimit;
  showAll.textContent = 'Show all ' + matches.length + ' matching records';
  document.querySelector('#no-results').hidden = matches.length > 0;
  if (window.academicNetworkReady) {

    syncNetwork(matches);
  }
}
document.querySelector('.publication-tools').hidden = false; count.hidden = false;
filters.forEach(button => button.addEventListener('click', () => {
  selected = button.dataset.filter; visibleLimit = 6;
  filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  updatePapers(); saveFilterState();
}));
filters.forEach(item => { const active=item.dataset.filter===selected; item.classList.toggle('active',active); item.setAttribute('aria-pressed',String(active)); });
search.addEventListener('input', () => { visibleLimit = 6; updatePapers(); saveFilterState(); });
yearFilter.addEventListener('change', () => { visibleLimit = 6; updatePapers(); saveFilterState(); });
statusFilter.addEventListener('change', () => { visibleLimit = 6; updatePapers(); saveFilterState(); });
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

// The visuals enhance the document; scholarly content never depends on WebGL.
let visuals;
const visualReady = new Promise(resolve => {
  const load = () => import('./assets/planets.js?v=20260930-collisions-v1').then(module => {
    visuals = module.mountAcademicVisuals();
    resolve(visuals);
  }).catch(() => resolve(null));
  if ('requestIdleCallback' in window) requestIdleCallback(load, {timeout: 1200}); else setTimeout(load, 1);
});
const motionControl = document.querySelector('#motion-toggle');
let siteMotionPaused = localStorage.getItem('julie-site-motion') !== 'playing';
function broadcastMotionPreference() {
  document.documentElement.dataset.motion = siteMotionPaused ? 'paused' : 'playing';
  localStorage.setItem('julie-site-motion', siteMotionPaused ? 'paused' : 'playing');
  document.dispatchEvent(new CustomEvent('site-motion-change', {detail:{paused:siteMotionPaused}}));
  const julieMotion = document.querySelector('[data-welcome-julie] [data-motion]');
  if (julieMotion && (julieMotion.getAttribute('aria-pressed') === 'true') !== siteMotionPaused) julieMotion.click();
}
motionControl?.addEventListener('click', () => setTimeout(() => {
  siteMotionPaused = motionControl.getAttribute('aria-pressed') === 'true';
  broadcastMotionPreference();
}));
visualReady.then(() => {
  const currentlyPaused = motionControl?.getAttribute('aria-pressed') === 'true';
  if (motionControl && currentlyPaused !== siteMotionPaused) motionControl.click();
  else broadcastMotionPreference();
});

// Photo flip carousel. Content remains static when motion is reduced.
const photoCarousel = document.querySelector('#photo-carousel');
if (photoCarousel) {
  const slides = [...photoCarousel.querySelectorAll('.portrait-slide')];
  const controls = photoCarousel.querySelector('.photo-controls');
  const pauseButton = controls.querySelector('[data-photo="pause"]');
  const counter = photoCarousel.querySelector('.photo-count');
  const liveStatus = photoCarousel.querySelector('.photo-status');
  const photoCaption = photoCarousel.querySelector('.photo-caption');
  const segments = photoCarousel.querySelector('.photo-segments');
  const ticks = slides.map((slide,index)=>{
    const button=document.createElement('button');button.type='button';button.className='photo-tick';
    button.setAttribute('aria-label',`Show photo ${index+1}: ${slide.dataset.caption}`);
    button.setAttribute('aria-controls','portrait-gallery');
    button.addEventListener('click',()=>showPhoto(index));segments.append(button);return button;
  });
  segments.hidden=false;
  const photoInterval = 3000;
  photoCarousel.style.setProperty('--photo-interval', photoInterval + 'ms');
  segments.style.setProperty('--photo-count', String(slides.length));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, busy = false, paused = true;
  let hovered = false, focused = false, visible = true, timer;
  let animations = [];

  function schedulePhoto() {
    clearTimeout(timer);
    pauseButton.textContent = paused ? 'Play' : 'Pause';
    pauseButton.setAttribute('aria-label', paused ? 'Play photo rotation' : 'Pause photo rotation');
    pauseButton.setAttribute('aria-pressed', String(paused));
    photoCarousel.dataset.paused = String(paused);
    ticks.forEach((tick,i)=>{tick.setAttribute('aria-pressed',String(i===current));tick.classList.remove('is-filling');});
    photoCarousel.dataset.autoplay=String(!paused&&!hovered&&!focused&&visible&&!document.hidden&&!busy);
    if (!paused && !hovered && !focused && visible && !document.hidden && !busy) {
      void ticks[current].offsetWidth;
      ticks[current].classList.add('is-filling');
      timer = setTimeout(() => showPhoto(current + 1, false), photoInterval);
    }
  }

  async function flip(element, from, to) {
    const animation = element.animate([
      { transform: `rotateY(${from}deg)`, opacity: Math.abs(from) > 0 ? .55 : 1 },
      { transform: `rotateY(${to}deg)`, opacity: Math.abs(to) > 0 ? .55 : 1 }
    ], { duration: 160, easing: 'ease-in-out', fill: 'both' });
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
      if (photoCaption) photoCaption.textContent = newSlide.dataset.caption;
      photoCarousel.dataset.index = String(current);
      counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
      if (manual) liveStatus.textContent = 'Photo ' + (current + 1) + ' of ' + slides.length + '. ' + img.alt;
      if (!reducedMotion.matches) await flip(newSlide, -88, 0);
    } catch {
      if (manual) liveStatus.textContent = 'This photo could not load. Please try another photo.';
    } finally {
      animations.forEach(animation => animation.cancel()); animations = [];
      busy = false; schedulePhoto();
    }
  }
  // Native vertical scrolling stays available; only completed horizontal swipes navigate.
  let touchStart=null;
  const gallery=photoCarousel.querySelector('.portrait-frame');
  gallery.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')touchStart={x:e.clientX,y:e.clientY};},{passive:true});
  gallery.addEventListener('pointerup',e=>{if(!touchStart)return;const dx=e.clientX-touchStart.x,dy=e.clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5)showPhoto(current+(dx<0?1:-1));},{passive:true});
  gallery.addEventListener('pointercancel',()=>{touchStart=null;},{passive:true});
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
  document.addEventListener('site-motion-change', event => { paused = event.detail.paused; schedulePhoto(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedulePhoto(); }, { threshold: .25 }).observe(photoCarousel);
  }
  schedulePhoto();
}


// Research text is available without a canvas or JavaScript.
const research = document.querySelector('#research-node');
const domains = [...research.querySelectorAll('.skill-detail')];
const domainButtons = [...research.querySelectorAll('[data-skill-select]')];

function selectDomain(index) {
  domains.forEach(item=>item.hidden=false);
  domainButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  research.querySelector('.research-status').textContent=domains[index].querySelector('h3').textContent;

}
domainButtons.forEach(button=>button.addEventListener('click',()=>selectDomain(Number(button.dataset.skillSelect))));
selectDomain(0);

// The optional network uses the same filtered records as the chronological list.
let networkMode=true;
const networkPanel=document.querySelector('#knowledge-panel');
const recordSelect=document.querySelector('#network-record');
const viewButtons=[...document.querySelectorAll('[data-publication-view]')];

function showNetworkRecord(id) {
  const original=papers.find(p=>p.id===id), detail=document.querySelector('#network-detail');
  detail.replaceChildren();
  if(!original) { detail.textContent='No matching records. Change the filters above.'; return; }
  const copy=original.cloneNode(true); copy.removeAttribute('id'); copy.hidden=false;
  copy.querySelectorAll('.copy-citation').forEach(b=>b.remove());
  detail.append(copy); recordSelect.value=id; visuals?.selectRecord(id);
}
function syncNetwork(matches) {
  if(!networkMode) return;
  const previous=recordSelect.value;
  recordSelect.replaceChildren(...matches.map(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.dataset.year+' · '+p.querySelector('h3').textContent;return o;}));
  showNetworkRecord(matches.some(p=>p.id===previous)?previous:matches[0]?.id);
  visualReady.then(v=>v?.setRecords(matches.map(p=>({id:p.id,topic:p.dataset.topic,title:p.querySelector('h3').textContent,year:p.dataset.year})),id=>showNetworkRecord(id)));
}
viewButtons.forEach(button=>button.addEventListener('click',()=>{
  networkMode=button.dataset.publicationView==='network';
  networkPanel.hidden=!networkMode;
  document.querySelector('#publication-list').hidden=networkMode;
  viewButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  updatePapers();
}));
recordSelect.addEventListener('change',()=>showNetworkRecord(recordSelect.value));

window.academicNetworkReady=true;
updatePapers();

// Committee shortcut uses the existing filter, keeping list and network synchronized.
document.querySelector('[data-jump-year]')?.addEventListener('click',()=>{
 setResearchFocus('All');
 document.querySelector('[data-filter="All"]').click();
 document.querySelector('#publication-search').value='';
 document.querySelector('#publication-status').value='';
 const year=document.querySelector('#publication-year');year.value='2026';year.dispatchEvent(new Event('change',{bubbles:true}));
});

window.addEventListener('message',event=>{
 const frame=document.querySelector('#attack-frame');
 if(frame&&event.source===frame.contentWindow&&event.origin===location.origin&&event.data?.type==='lab-height'&&Number.isFinite(event.data.height))frame.style.height=Math.max(450,Math.min(1900,event.data.height+12))+'px';
});

function setResearchFocus(value){
 selectedFocus=value;visibleLimit=6;
 document.querySelectorAll('[data-focus-filter]').forEach(b=>{const active=b.dataset.focusFilter===value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 updatePapers();saveFilterState();
}
document.querySelectorAll('[data-focus-filter]').forEach(b=>b.addEventListener('click',()=>setResearchFocus(b.dataset.focusFilter)));
setResearchFocus(selectedFocus);
function resetResearchFilters(){
 selectedFocus='All';search.value='';yearFilter.value='';statusFilter.value='';document.querySelector('[data-filter="All"]').click();
}
document.querySelectorAll('[data-focus-jump]').forEach(a=>a.addEventListener('click',()=>{resetResearchFilters();setResearchFocus(a.dataset.focusJump);}));
document.querySelectorAll('[data-paper-jump]').forEach(a=>a.addEventListener('click',e=>{
 e.preventDefault();resetResearchFilters();setResearchFocus('All');visibleLimit=papers.length;updatePapers();
 const paper=document.getElementById(a.dataset.paperJump);if(paper){paper.scrollIntoView({block:'start'});const title=paper.querySelector('h3');title.tabIndex=-1;title.focus({preventScroll:true});}
}));

// Pause the embedded teaching voice when its section is no longer visible.
const julieDemo=document.querySelector("#julie-demo");
if(julieDemo)new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)julieDemo.contentWindow?.postMessage({type:"julie:pause"},location.origin);},{threshold:.05}).observe(julieDemo);

// LEGO Julie uses two real photographs. Motion changes only their presentation;
// it never invents unseen views of the physical model.
const legoGallery=document.querySelector('[data-lego-gallery]');
if(legoGallery){
 const stage=legoGallery.querySelector('[data-lego-stage]');
 const shots=[...legoGallery.querySelectorAll('[data-lego-shot]')];
 const viewButtons=[...legoGallery.querySelectorAll('[data-lego-view]')];
 const motionButton=legoGallery.querySelector('[data-lego-motion]');
 const status=legoGallery.querySelector('[data-lego-status]');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,paused=reduced.matches,visible=true,timer=0;
 function schedule(){clearTimeout(timer);legoGallery.dataset.motion=paused?'off':'on';motionButton.textContent=paused?'Resume motion':'Pause motion';motionButton.setAttribute('aria-pressed',String(!paused));if(!paused&&visible&&!document.hidden)timer=setTimeout(()=>show(current+1,false),5200)}
 function show(index,manual=true){current=(index+shots.length)%shots.length;shots.forEach((shot,i)=>{const active=i===current;shot.classList.toggle('is-active',active);shot.setAttribute('aria-hidden',String(!active))});viewButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===current)));status.textContent=`Showing the ${current?'character close-up':'complete tribute'}.`;if(manual)paused=true;schedule()}
 viewButtons.forEach((button,i)=>button.addEventListener('click',()=>show(i)));
 motionButton.addEventListener('click',()=>{paused=!paused;schedule()});
 stage.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();show(current+(event.key==='ArrowRight'?1:-1))}});
 stage.addEventListener('pointermove',event=>{if(reduced.matches)return;const box=stage.getBoundingClientRect(),x=(event.clientX-box.left)/box.width-.5,y=(event.clientY-box.top)/box.height-.5;stage.style.setProperty('--lego-ry',`${x*4}deg`);stage.style.setProperty('--lego-rx',`${y*-4}deg`)});
 stage.addEventListener('pointerleave',()=>{stage.style.setProperty('--lego-ry','0deg');stage.style.setProperty('--lego-rx','0deg')});
 document.addEventListener('visibilitychange',schedule);
 document.addEventListener('site-motion-change',event=>{paused=event.detail.paused;schedule()});
 reduced.addEventListener('change',()=>{paused=reduced.matches;schedule()});
 if('IntersectionObserver'in window)new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;schedule()},{threshold:.2}).observe(legoGallery);
 schedule();
}

// Julie's glasses are a stable identity layer shared by the animated presenter
// and the role cards; the underlying wardrobe is the Learn with Yulia denim set.
const welcomeJulie=document.querySelector('[data-welcome-julie]');
if(welcomeJulie){
 const labelWelcomeJulie=()=>{const canvas=welcomeJulie.querySelector('canvas');if(!canvas)return false;canvas.setAttribute('aria-label','Animated Julie wearing glasses and her Learn with Yulia denim teaching outfit');return true};
 if(!labelWelcomeJulie()){const observer=new MutationObserver(()=>{if(labelWelcomeJulie())observer.disconnect()});observer.observe(welcomeJulie,{childList:true,subtree:true})}
}
