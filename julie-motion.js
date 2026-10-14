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
  runner.setAttribute('aria-hidden', 'true');
  runner.innerHTML = '<div class="julie-runner-sprite"></div>';
  document.body.append(runner);

  const sprite = runner.firstElementChild;
  const framePositions = [
    ['0%', '0%'], ['33.333%', '0%'], ['66.667%', '0%'], ['100%', '0%'],
    ['0%', '100%'], ['33.333%', '100%'], ['66.667%', '100%'], ['100%', '100%']
  ];
  let paused = reduced.matches || document.documentElement.dataset.motion === 'paused';
  let currentX = -130;
  let targetX = 18;
  let direction = 1;
  let frame = 0;
  let lastFrameAt = 0;
  let raf = 0;
  let settleTimer = 0;
  let running = true;

  function desiredX() {
    const range = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const progress = Math.max(0, Math.min(1, scrollY / range));
    return 18 + progress * Math.max(0, innerWidth - runner.offsetWidth - 36);
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

  function animate(now) {
    raf = 0;
    if (paused || document.hidden) return;
    const delta = targetX - currentX;
    if (Math.abs(delta) > .35) {
      direction = Math.sign(delta) || direction;
      currentX += delta * .13;
      setRunning(true);
      runner.dataset.direction = direction < 0 ? 'left' : 'right';
      runner.style.setProperty('--julie-runner-x', `${currentX.toFixed(2)}px`);
      if (now - lastFrameAt > 82) {
        frame = (frame + 1) % framePositions.length;
        setFrame(frame);
        lastFrameAt = now;
      }
      raf = requestAnimationFrame(animate);
    } else {
      currentX = targetX;
      runner.style.setProperty('--julie-runner-x', `${currentX.toFixed(2)}px`);
      settleTimer = setTimeout(() => setRunning(false), 180);
    }
  }

  function move() {
    targetX = desiredX();
    clearTimeout(settleTimer);
    if (!paused && !raf) raf = requestAnimationFrame(animate);
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
      move();
    }
  }

  addEventListener('scroll', move, { passive: true });
  addEventListener('resize', move, { passive: true });
  document.addEventListener('site-motion-change', event => setMotion(Boolean(event.detail?.paused)));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) move(); });
  reduced.addEventListener?.('change', () => setMotion(false));
  setFrame(0);
  setMotion(paused);
})();
