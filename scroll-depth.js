(() => {
  'use strict';

  const canvas = document.querySelector('#scroll-depth-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const depthSelector = [
    '.section-top', '.section-heading', '.project-heading',
    '.julie-app-card', '.lego-gallery', '.flagship-card',
    '.project-card', '.paper', '.teaching-case',
    '.opportunity-grid article'
  ].join(',');
  const planes = [...document.querySelectorAll(depthSelector)];
  const colors = ['#ff5570', '#67d8ff', '#ffbd66'];
  let userPaused = localStorage.getItem('julie-site-motion') !== 'playing';
  let paused = userPaused || reducedMotion.matches;
  let target = scrollFraction();
  let current = target;
  let frame = 0;
  let width = 0;
  let height = 0;
  let observer;

  const points = Array.from({ length: 42 }, (_, index) => {
    const lane = index % 3;
    const step = Math.floor(index / 3);
    const angle = step * .73 + lane * (Math.PI * 2 / 3);
    return {
      angle,
      lane,
      radius: .7 + lane * .22 + Math.sin(index * 1.71) * .08,
      y: (step / 13 - .5) * 6.3,
      z: Math.sin(angle * .77) * .65,
      size: 1.15 + (index % 5) * .24
    };
  });

  function scrollFraction() {
    const range = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    return Math.max(0, Math.min(1, scrollY / range));
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 1.6);
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(current);
  }

  function project(point, progress) {
    const spin = progress * Math.PI * 5.5;
    const angle = point.angle + spin;
    const x = Math.cos(angle) * point.radius;
    const z = Math.sin(angle) * point.radius + point.z + 3.2;
    const travel = ((progress * 8.4 + point.y + 4.2) % 8.4) - 4.2;
    const focal = 3.8 / Math.max(1.35, z);
    return {
      x: width * .67 + x * width * .25 * focal,
      y: height * .5 + travel * height * .13 * focal,
      scale: Math.max(.28, Math.min(1.5, focal)),
      lane: point.lane,
      size: point.size
    };
  }

  function draw(progress) {
    ctx.clearRect(0, 0, width, height);
    if (paused || reducedMotion.matches || width < 2 || height < 2) return;
    const projected = points.map(point => project(point, progress));

    ctx.lineWidth = .7;
    for (let index = 3; index < projected.length; index += 1) {
      const point = projected[index];
      const previous = projected[index - 3];
      const alpha = Math.min(.34, .08 + point.scale * .12);
      const gradient = ctx.createLinearGradient(previous.x, previous.y, point.x, point.y);
      gradient.addColorStop(0, `${colors[point.lane]}00`);
      gradient.addColorStop(1, `${colors[point.lane]}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`);
      ctx.strokeStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(previous.x, previous.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }

    // Each three-node cross-section is a ring around the helix axis. Connecting
    // the rings makes the perspective change legible as the scroll position
    // rotates the structure, rather than reading as a flat particle field.
    ctx.lineWidth = .55;
    for (let index = 0; index < projected.length - 2; index += 3) {
      const ring = projected.slice(index, index + 3);
      ctx.strokeStyle = `rgba(255, 202, 214, ${(.045 + ring[0].scale * .035).toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(ring[0].x, ring[0].y);
      ctx.lineTo(ring[1].x, ring[1].y);
      ctx.lineTo(ring[2].x, ring[2].y);
      ctx.closePath();
      ctx.stroke();
    }

    projected.forEach((point, index) => {
      const radius = point.size * point.scale;
      ctx.fillStyle = colors[point.lane];
      ctx.globalAlpha = Math.min(.82, .2 + point.scale * .34);
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
      if (index % 6 === 0) {
        ctx.globalAlpha = .13;
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius * 4.3, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
  }

  function updatePlaneTilt() {
    const center = innerHeight * .5;
    planes.forEach(plane => {
      if (!plane.classList.contains('depth-visible')) return;
      const rect = plane.getBoundingClientRect();
      const distance = Math.max(-1, Math.min(1, (rect.top + rect.height * .5 - center) / innerHeight));
      plane.style.setProperty('--depth-scroll-tilt', `${(distance * -2.8).toFixed(2)}deg`);
    });
  }

  function animate() {
    frame = 0;
    current += (target - current) * .13;
    if (Math.abs(target - current) < .0002) current = target;
    draw(current);
    updatePlaneTilt();
    if (current !== target) frame = requestAnimationFrame(animate);
  }

  function schedule() {
    target = scrollFraction();
    if (!frame) frame = requestAnimationFrame(animate);
  }

  function setMotion(nextPaused) {
    userPaused = nextPaused;
    paused = userPaused || reducedMotion.matches;
    root.dataset.scrollDepth = reducedMotion.matches ? 'reduced' : 'ready';
    canvas.dataset.motion = paused ? 'paused' : 'playing';
    if (paused) {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      ctx.clearRect(0, 0, width, height);
    } else {
      schedule();
    }
  }

  planes.forEach((plane, index) => {
    plane.classList.add('depth-plane');
    plane.style.setProperty('--depth-side', index % 2 ? '-1' : '1');
  });
  root.dataset.scrollDepth = reducedMotion.matches ? 'reduced' : 'ready';

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('depth-visible');
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: .08 });
    planes.forEach(plane => observer.observe(plane));
  } else {
    planes.forEach(plane => plane.classList.add('depth-visible'));
  }

  addEventListener('resize', resize, { passive: true });
  addEventListener('scroll', schedule, { passive: true });
  document.addEventListener('site-motion-change', event => setMotion(Boolean(event.detail?.paused)));
  reducedMotion.addEventListener?.('change', () => setMotion(userPaused));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else if (!document.hidden && !paused) schedule();
  });

  resize();
  setMotion(userPaused);
})();
