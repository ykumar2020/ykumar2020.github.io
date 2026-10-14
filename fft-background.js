(() => {
  const canvas = document.querySelector('#fft-background');
  const host = canvas?.closest('.hero-shell');
  if (!canvas || !host) return;

  const context = canvas.getContext('2d', { alpha: true });
  if (!context) return;

  const sampleCount = 256;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let cssWidth = 0;
  let cssHeight = 0;
  let deviceScale = 1;
  let frame = 0;
  let running = !reducedMotion.matches;
  let visible = true;
  let phase = 0;
  let lastTime = 0;
  let trace = [];

  // A closed six-petal flower curve. The FFT below decomposes these real samples;
  // no frames or artwork from the reference video are copied into the site.
  const samples = Array.from({ length: sampleCount }, (_, index) => {
    const angle = (index / sampleCount) * Math.PI * 2;
    const radius = .53 + .18 * Math.cos(6 * angle) + .06 * Math.sin(3 * angle);
    return {
      re: radius * Math.cos(angle),
      im: radius * Math.sin(angle)
    };
  });

  function fft(values) {
    const size = values.length;
    if (size === 1) return [{ ...values[0] }];
    const even = fft(values.filter((_, index) => index % 2 === 0));
    const odd = fft(values.filter((_, index) => index % 2 === 1));
    const output = new Array(size);
    for (let index = 0; index < size / 2; index += 1) {
      const angle = (-2 * Math.PI * index) / size;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const product = {
        re: cosine * odd[index].re - sine * odd[index].im,
        im: sine * odd[index].re + cosine * odd[index].im
      };
      output[index] = {
        re: even[index].re + product.re,
        im: even[index].im + product.im
      };
      output[index + size / 2] = {
        re: even[index].re - product.re,
        im: even[index].im - product.im
      };
    }
    return output;
  }

  const coefficients = fft(samples)
    .map((value, index) => {
      const frequency = index <= sampleCount / 2 ? index : index - sampleCount;
      return {
        frequency,
        re: value.re / sampleCount,
        im: value.im / sampleCount,
        amplitude: Math.hypot(value.re, value.im) / sampleCount,
        offset: Math.atan2(value.im, value.re)
      };
    })
    .filter(term => term.amplitude > .002)
    .sort((a, b) => b.amplitude - a.amplitude)
    .slice(0, 22);

  function resize() {
    const bounds = host.getBoundingClientRect();
    cssWidth = Math.max(1, Math.round(bounds.width));
    cssHeight = Math.max(1, Math.round(bounds.height));
    deviceScale = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(cssWidth * deviceScale);
    canvas.height = Math.round(cssHeight * deviceScale);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    trace = [];
    draw(performance.now(), true);
  }

  function epicyclePoint(time, drawGuides) {
    const compact = cssWidth < 768;
    const scale = Math.min(cssHeight * (compact ? .36 : .42), cssWidth * (compact ? .42 : .27));
    let x = compact ? cssWidth * .72 : cssWidth * .78;
    let y = compact ? cssHeight * .22 : cssHeight * .47;

    coefficients.forEach((term, index) => {
      const previousX = x;
      const previousY = y;
      const radius = term.amplitude * scale;
      const angle = term.frequency * time + term.offset;
      x += radius * Math.cos(angle);
      y += radius * Math.sin(angle);

      if (!drawGuides || index > 13 || radius < 1.5) return;
      context.beginPath();
      context.arc(previousX, previousY, radius, 0, Math.PI * 2);
      context.strokeStyle = index < 3 ? 'rgba(255, 184, 92, .34)' : 'rgba(114, 203, 255, .18)';
      context.lineWidth = index < 3 ? 1.1 : .75;
      context.stroke();
      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(x, y);
      context.strokeStyle = index < 3 ? 'rgba(255, 216, 160, .62)' : 'rgba(150, 219, 255, .32)';
      context.stroke();
    });
    return { x, y };
  }

  function draw(timestamp, staticFrame = false) {
    context.clearRect(0, 0, cssWidth, cssHeight);

    if (staticFrame || reducedMotion.matches || !running) {
      context.beginPath();
      for (let index = 0; index <= sampleCount; index += 1) {
        const point = epicyclePoint((index / sampleCount) * Math.PI * 2, false);
        if (index === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.closePath();
      context.strokeStyle = 'rgba(255, 118, 148, .42)';
      context.lineWidth = 2;
      context.shadowColor = 'rgba(255, 90, 130, .45)';
      context.shadowBlur = 12;
      context.stroke();
      context.shadowBlur = 0;
      epicyclePoint(phase, true);
      return;
    }

    const elapsed = lastTime ? Math.min(timestamp - lastTime, 40) : 0;
    lastTime = timestamp;
    phase = (phase + elapsed * .00034) % (Math.PI * 2);
    const tip = epicyclePoint(phase, true);
    trace.unshift(tip);
    if (trace.length > 360) trace.pop();

    if (trace.length > 1) {
      context.beginPath();
      context.moveTo(trace[0].x, trace[0].y);
      trace.slice(1).forEach(point => context.lineTo(point.x, point.y));
      context.strokeStyle = 'rgba(255, 105, 139, .82)';
      context.lineWidth = 2.35;
      context.shadowColor = 'rgba(255, 76, 121, .72)';
      context.shadowBlur = 12;
      context.stroke();
      context.shadowBlur = 0;
    }

    context.beginPath();
    context.arc(tip.x, tip.y, 3.2, 0, Math.PI * 2);
    context.fillStyle = '#ffd08b';
    context.fill();
  }

  function loop(timestamp) {
    frame = 0;
    if (!document.hidden && visible) draw(timestamp);
    if (running && !reducedMotion.matches) frame = requestAnimationFrame(loop);
  }

  function updateMotion(paused) {
    running = !paused && !reducedMotion.matches;
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    if (running) frame = requestAnimationFrame(loop);
    else draw(performance.now(), true);
  }

  new ResizeObserver(resize).observe(host);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && running && !frame) frame = requestAnimationFrame(loop);
      if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }, { threshold: .05 }).observe(host);
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && running && visible && !frame) frame = requestAnimationFrame(loop);
  });
  document.addEventListener('site-motion-change', event => updateMotion(event.detail.paused));
  reducedMotion.addEventListener('change', () => updateMotion(false));
  resize();
  updateMotion(false);
})();
