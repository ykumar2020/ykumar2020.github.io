(() => {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const cards = [...document.querySelectorAll('.julie-app-card')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-julie-visible', entry.isIntersecting));
    }, { rootMargin: '80px', threshold: .05 });
    cards.forEach(card => observer.observe(card));
  } else cards.forEach(card => card.classList.add('is-julie-visible'));

  const runner = document.createElement('div');
  runner.className = 'julie-runner-track';
  runner.dataset.direction = 'right';
  runner.dataset.cast = 'julie';
  runner.dataset.castOrder = 'julie,black-cat,grey-cat,julie-cats';
  runner.dataset.runFrames = '24';
  runner.dataset.catFrames = '24';
  runner.dataset.frameIntervalMs = '145';
  runner.dataset.spriteRenderer = 'canvas-cropped';
  runner.dataset.spriteState = 'loading';
  runner.setAttribute('aria-hidden', 'true');
  runner.innerHTML = '<canvas class="julie-runner-sprite" width="256" height="256" data-sprite-src="assets/julie-run-cycle-v5.webp"></canvas><canvas class="cat-runner cat-runner-black" width="256" height="256" data-sprite-src="assets/cat-run-cycle-black-v5.webp"></canvas><canvas class="cat-runner cat-runner-grey" width="256" height="256" data-sprite-src="assets/cat-run-cycle-grey-v5.webp"></canvas><div class="julie-greeting"><img class="julie-context-portrait" src="assets/julie-role-studio-v2.webp" alt="" width="640" height="960"><span class="julie-hi">Hi! Let me know if you need help.</span></div>';
  document.body.append(runner);

  const catCameo = document.createElement('div');
  catCameo.className = 'cat-cameo';
  catCameo.dataset.cat = 'black-cat';
  catCameo.setAttribute('aria-hidden', 'true');
  catCameo.innerHTML = '<span class="cat-cameo-speech">Myayu!</span><canvas class="cat-cameo-sprite" width="256" height="256"></canvas>';
  document.body.append(catCameo);

  const sprite = runner.querySelector('.julie-runner-sprite');
  const blackCatSprite = runner.querySelector('.cat-runner-black');
  const greyCatSprite = runner.querySelector('.cat-runner-grey');
  const catCameoSprite = catCameo.querySelector('.cat-cameo-sprite');
  const spriteCanvases = [sprite, blackCatSprite, greyCatSprite];
  const spriteImages = new Map();
  const contextPortrait = runner.querySelector('.julie-context-portrait');
  const roleProfiles = {
    studio: 'assets/julie-role-studio-v2.webp',
    weather: 'assets/julie-role-weather-v2.webp',
    news: 'assets/julie-role-news-v2.webp',
    learn: 'assets/julie-role-learn-v2.webp'
  };
  const sectionRoles = {
    home: 'studio', 'julie-apps': 'studio', 'lego-julie': 'studio',
    flagships: 'news', research: 'news', publications: 'news', connectomes: 'news',
    projects: 'weather', graphics: 'weather',
    teaching: 'learn', about: 'learn', experience: 'learn', service: 'learn',
    'work-with-me': 'learn', contact: 'learn'
  };
  const sections = [...document.querySelectorAll('main section[id]')];
  const framePositions = Array.from({ length: 24 }, (_, index) => [
    `${(index % 6) * 20}%`,
    `${Math.floor(index / 6) * (100 / 3)}%`
  ]);

  function drawFrame(canvas, image, index) {
    const columns = 6;
    const rows = 4;
    const sourceWidth = image.naturalWidth / columns;
    const sourceHeight = image.naturalHeight / rows;
    if (!Number.isInteger(sourceWidth) || !Number.isInteger(sourceHeight)) {
      throw new Error(`Invalid 6x4 sprint sheet: ${image.src}`);
    }
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      image,
      (index % columns) * sourceWidth,
      Math.floor(index / columns) * sourceHeight,
      sourceWidth,
      sourceHeight,
      0,
      0,
      canvas.width,
      canvas.height
    );
    canvas.dataset.frame = String(index);
  }

  const spriteLoad = Promise.all(spriteCanvases.map(canvas => new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      spriteImages.set(canvas, image);
      drawFrame(canvas, image, 0);
      resolve();
    };
    image.onerror = () => reject(new Error(`Sprint sprite unavailable: ${canvas.dataset.spriteSrc}`));
    image.src = canvas.dataset.spriteSrc;
  }))).then(() => {
    runner.dataset.spriteState = 'ready';
    setFrame(frame);
  }).catch(() => {
    runner.dataset.spriteState = 'error';
  });
  let paused = reduced.matches || document.documentElement.dataset.motion === 'paused';
  let currentX = 18;
  let direction = 1;
  let frame = 0;
  let lastFrameAt = 0;
  let lastTick = 0;
  let lastScrollY = scrollY;
  let raf = 0;
  let running = false;
  let lastSprintSection = '';
  let sprintCount = 0;
  let cameoActive = false;
  const sprintDurationMs = 5500;
  const frameIntervalMs = 145;
  const sprintCast = ['julie', 'black-cat', 'grey-cat', 'julie-cats'];

  function leftPark() { return 18; }
  function rightPark() { return Math.max(18, innerWidth - runner.offsetWidth - 18); }
  function offscreenStart() { return direction > 0 ? -runner.offsetWidth - 18 : innerWidth + 18; }
  function offscreenFinish() { return direction > 0 ? innerWidth + 18 : -runner.offsetWidth - 18; }

  function place(x) {
    currentX = x;
    runner.style.setProperty('--julie-runner-x', `${currentX.toFixed(2)}px`);
  }

  function setFrame(index) {
    const [x, y] = framePositions[index % framePositions.length];
    sprite.style.setProperty('--julie-frame-x', x);
    sprite.style.setProperty('--julie-frame-y', y);
    runner.style.setProperty('--cat-frame-x', x);
    runner.style.setProperty('--cat-frame-y', y);
    spriteCanvases.forEach(canvas => {
      const image = spriteImages.get(canvas);
      if (image) drawFrame(canvas, image, index % framePositions.length);
    });
  }

  function setRunning(next) {
    running = next;
    runner.classList.toggle('is-running', next);
    runner.classList.toggle('is-resting', !next);
    if (!next) setFrame(0);
  }

  function currentSectionId() {
    const focusY = innerHeight * .46;
    let closest = sections[0];
    let closestDistance = Infinity;
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= focusY && rect.bottom >= focusY) return section.id;
      const distance = Math.abs((rect.top + rect.bottom) / 2 - focusY);
      if (distance < closestDistance) {
        closest = section;
        closestDistance = distance;
      }
    }
    return closest?.id || 'home';
  }

  function setContext(sectionId) {
    const role = sectionRoles[sectionId] || 'studio';
    runner.dataset.section = sectionId;
    if (runner.dataset.role === role) return;
    runner.dataset.role = role;
    contextPortrait.src = roleProfiles[role];
  }

  function greet() {
    place(rightPark());
    setRunning(false);
  }

  function showCatCameo(cast) {
    if (cameoActive || paused || !cast.includes('cat')) return;
    const source = cast === 'grey-cat' ? greyCatSprite : blackCatSprite;
    const image = spriteImages.get(source);
    if (!image) return;
    catCameo.dataset.cat = cast === 'grey-cat' ? 'grey-cat' : 'black-cat';
    drawFrame(catCameoSprite, image, cast === 'grey-cat' ? 7 : 5);
    cameoActive = true;
    catCameo.classList.remove('is-jumping');
    void catCameo.offsetWidth;
    catCameo.classList.add('is-jumping');
  }

  catCameo.addEventListener('animationend', event => {
    if (event.animationName !== 'cat-center-cameo') return;
    catCameo.classList.remove('is-jumping');
    cameoActive = false;
  });

  function startSprint() {
    direction = 1;
    runner.dataset.direction = 'right';
    runner.dataset.cast = sprintCast[sprintCount % sprintCast.length];
    sprintCount += 1;
    place(offscreenStart());
    frame = 0;
    lastFrameAt = 0;
    setFrame(frame);
    setRunning(true);
    lastTick = 0;
    if (!raf) raf = requestAnimationFrame(animate);
  }

  function animate(now) {
    raf = 0;
    if (paused || document.hidden) return;
    if (running) {
      const elapsed = lastTick ? Math.min(34, now - lastTick) : 16;
      lastTick = now;
      const sprintDistance = innerWidth + (runner.offsetWidth * 2) + 36;
      place(currentX + direction * (sprintDistance / sprintDurationMs) * elapsed);
      if (!lastFrameAt) lastFrameAt = now;
      if (now - lastFrameAt >= frameIntervalMs) {
        frame = (frame + 1) % framePositions.length;
        setFrame(frame);
        lastFrameAt += frameIntervalMs;
      }
      const finished = direction > 0 ? currentX >= offscreenFinish() : currentX <= offscreenFinish();
      if (finished) {
        showCatCameo(runner.dataset.cast);
        greet();
      }
      else raf = requestAnimationFrame(animate);
    }
  }

  function move() {
    const deltaY = scrollY - lastScrollY;
    lastScrollY = scrollY;
    if (paused || Math.abs(deltaY) < 2) return;
    const sectionId = currentSectionId();
    setContext(sectionId);
    if (!running && sectionId !== lastSprintSection) {
      lastSprintSection = sectionId;
      startSprint();
    }
  }

  function setMotion(nextPaused) {
    paused = nextPaused || reduced.matches;
    runner.hidden = paused;
    if (paused) {
      cancelAnimationFrame(raf);
      raf = 0;
      catCameo.classList.remove('is-jumping');
      cameoActive = false;
    } else {
      runner.hidden = false;
      runner.classList.add('is-ready');
      greet();
    }
  }

  addEventListener('scroll', move, { passive: true });
  addEventListener('resize', () => { if (!running) place(rightPark()); }, { passive: true });
  document.addEventListener('site-motion-change', event => setMotion(Boolean(event.detail?.paused)));
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !running) greet(); });
  reduced.addEventListener?.('change', () => setMotion(false));
  setContext(currentSectionId());
  setFrame(0);
  setMotion(paused);
})();
