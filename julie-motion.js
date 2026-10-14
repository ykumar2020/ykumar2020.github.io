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
  runner.dataset.greeting = 'one';
  runner.setAttribute('aria-hidden', 'true');
  runner.innerHTML = '<div class="julie-runner-sprite"></div><div class="julie-greeting"><img class="julie-greeting-one" src="assets/julie-greeting-one-hand-v1.webp" alt="" width="480" height="720"><img class="julie-greeting-two" src="assets/julie-greeting-two-hands-v1.webp" alt="" width="480" height="720"><span class="julie-hi">Hi!</span></div>';
  document.body.append(runner);

  const sprite = runner.querySelector('.julie-runner-sprite');
  const framePositions = [
    ['0%', '0%'], ['33.333%', '0%'], ['66.667%', '0%'], ['100%', '0%'],
    ['0%', '100%'], ['33.333%', '100%'], ['66.667%', '100%'], ['100%', '100%']
  ];
  let paused = reduced.matches || document.documentElement.dataset.motion === 'paused';
  let currentX = 18;
  let direction = 1;
  let frame = 0;
  let lastFrameAt = 0;
  let lastTick = 0;
  let lastScrollY = scrollY;
  let raf = 0;
  let running = false;
  let greetingCount = 0;

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
  }

  function setRunning(next) {
    running = next;
    runner.classList.toggle('is-running', next);
    runner.classList.toggle('is-resting', !next);
    if (!next) setFrame(0);
  }

  function greet() {
    greetingCount += 1;
    runner.dataset.greeting = greetingCount % 2 ? 'one' : 'two';
    place(direction > 0 ? rightPark() : leftPark());
    setRunning(false);
  }

  function startSprint(nextDirection) {
    direction = nextDirection;
    runner.dataset.direction = direction < 0 ? 'left' : 'right';
    place(offscreenStart());
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
      place(currentX + direction * Math.max(.72, innerWidth / 1450) * elapsed);
      if (now - lastFrameAt > 82) {
        frame = (frame + 1) % framePositions.length;
        setFrame(frame);
        lastFrameAt = now;
      }
      const finished = direction > 0 ? currentX >= offscreenFinish() : currentX <= offscreenFinish();
      if (finished) greet();
      else raf = requestAnimationFrame(animate);
    }
  }

  function move() {
    const deltaY = scrollY - lastScrollY;
    lastScrollY = scrollY;
    if (paused || Math.abs(deltaY) < 2) return;
    const nextDirection = deltaY > 0 ? 1 : -1;
    if (!running || nextDirection !== direction) startSprint(nextDirection);
  }

  function setMotion(nextPaused) {
    paused = nextPaused || reduced.matches;
    runner.hidden = paused;
    if (paused) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else {
      runner.hidden = false;
      runner.classList.add('is-ready');
      greet();
    }
  }

  addEventListener('scroll', move, { passive: true });
  addEventListener('resize', () => { if (!running) place(direction > 0 ? rightPark() : leftPark()); }, { passive: true });
  document.addEventListener('site-motion-change', event => setMotion(Boolean(event.detail?.paused)));
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !running) greet(); });
  reduced.addEventListener?.('change', () => setMotion(false));
  setFrame(0);
  setMotion(paused);
})();
