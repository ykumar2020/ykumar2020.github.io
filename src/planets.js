import * as THREE from 'three';

// A decorative, imagined planetary system. Sizes, distances and speeds are artistic.
export function mountPlanets(root) {
  const host = root.querySelector('.planet-viewport');
  const buttons = root.querySelector('.planet-controls');
  const toggle = root.querySelector('[data-orbit="pause"]');
  const status = root.querySelector('.planet-status');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 160);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    root.dataset.state = 'fallback';
    status.textContent = 'Still view';
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0x090b12, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', 'Interactive 3D scene: four imagined planets orbit a golden star.');
  canvas.setAttribute('aria-describedby', 'planet-instructions');
  host.append(canvas);

  const system = new THREE.Group();
  scene.add(system);
  scene.add(new THREE.AmbientLight(0x859bc5, 1.15));
  const key = new THREE.PointLight(0xffd590, 70, 55, 1.7);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xb1dfff, 1.3);
  fill.position.set(-6, 8, 10);
  scene.add(fill);

  function texture(kind) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 256;
    const ctx = c.getContext('2d');
    const data = ctx.createImageData(c.width, c.height);
    const palettes = {
      ocean: [[12, 56, 123], [35, 142, 193], [91, 153, 94]],
      ember: [[72, 22, 19], [191, 64, 34], [239, 141, 81]],
      gas: [[108, 71, 41], [221, 177, 107], [255, 229, 166]],
      ice: [[47, 45, 109], [127, 133, 206], [213, 217, 255]],
      sun: [[255, 131, 17], [255, 199, 49], [255, 241, 160]]
    };
    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < 512; x++) {
        const u = x / 512 * Math.PI * 2, v = y / 256 * Math.PI;
        const a = Math.sin(u * 5 + Math.cos(v * 7)) * Math.sin(v * 6 + Math.cos(u * 3));
        const n = (a + .35 * Math.sin(u * 17 + v * 23) + .14 * Math.sin(u * 47 - v * 31)) / 1.49;
        let t = (n + 1) / 2;
        if (kind === 'gas' || kind === 'ice') t = (Math.sin(v * (kind === 'gas' ? 36 : 16) + a * 2) + 1) / 2;
        const colors = palettes[kind];
        let low = colors[0], high = colors[1];
        if (kind === 'ocean' && n > .18) { low = colors[2]; high = [166, 184, 117]; }
        else if (t > .55) { low = colors[1]; high = colors[2]; t = (t - .55) / .45; }
        const polar = kind === 'ocean' && (y < 15 || y > 241);
        const i = (y * 512 + x) * 4;
        for (let k = 0; k < 3; k++) data.data[i + k] = polar ? 223 : low[k] + (high[k] - low[k]) * t;
        data.data[i + 3] = 255;
      }
    }
    ctx.putImageData(data, 0, 0);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  const sphere = new THREE.SphereGeometry(1, 48, 32);
  const sun = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ map: texture('sun'), color: 0xffdf86, toneMapped: false }));
  sun.scale.setScalar(.94); system.add(sun);
  const glowCanvas = document.createElement('canvas'); glowCanvas.width = glowCanvas.height = 128;
  const glowContext = glowCanvas.getContext('2d');
  const gradient = glowContext.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, '#fff6c4'); gradient.addColorStop(.18, '#ffcf5488');
  gradient.addColorStop(.45, '#ffae272b'); gradient.addColorStop(1, '#ffa00000');
  glowContext.fillStyle = gradient; glowContext.fillRect(0, 0, 128, 128);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(glowCanvas), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  glow.scale.set(5.8, 5.8, 1); system.add(glow);

  const specs = [
    { kind: 'ocean', size: .65, orbit: 3, phase: 2.35, speed: .17 },
    { kind: 'ember', size: .5, orbit: 4.55, phase: .55, speed: .12 },
    { kind: 'gas', size: 1.0, orbit: 6.5, phase: -.8, speed: .075 },
    { kind: 'ice', size: .73, orbit: 8.45, phase: 3.7, speed: .05 }
  ];
  const planets = specs.map(spec => {
    const group = new THREE.Group();
    const surface = new THREE.Mesh(sphere, new THREE.MeshStandardMaterial({ map: texture(spec.kind), roughness: .83, metalness: .02 }));
    surface.scale.setScalar(spec.size); surface.rotation.z = .16;
    group.add(surface); system.add(group);
    if (spec.kind === 'gas') {
      const rings = new THREE.Group(); rings.rotation.x = Math.PI / 2 - .3; rings.rotation.y = .25;
      for (const [inner, outer, color, opacity] of [[1.35, 1.62, 0xb9a08b, .75], [1.68, 1.98, 0xe1c399, .88], [2.03, 2.2, 0x89795f, .65]]) {
        rings.add(new THREE.Mesh(new THREE.RingGeometry(inner, outer, 96), new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity, roughness: 1 })));
      }
      group.add(rings);
    }
    const points = Array.from({ length: 160 }, (_, i) => {
      const angle = i / 160 * Math.PI * 2;
      return new THREE.Vector3(Math.cos(angle) * spec.orbit, 0, Math.sin(angle) * spec.orbit);
    });
    system.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: spec.kind === 'gas' ? 0xffd36c : 0x7999c8, transparent: true, opacity: .24 })));
    return { ...spec, group, surface };
  });

  let seed = 77;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const positions = new Float32Array(650 * 3);
  for (let i = 0; i < 650; i++) {
    positions[i * 3] = (random() - .5) * 100;
    positions[i * 3 + 1] = (random() - .5) * 65;
    positions[i * 3 + 2] = -25 - random() * 35;
  }
  const stars = new THREE.BufferGeometry(); stars.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xb2cfff, size: .055, transparent: true, opacity: .8, sizeAttenuation: true })));

  let paused = motion.matches, visible = false, lost = false;
  let yaw = 0, elevation = .68, zoom = 1, elapsed = 0, frame = 0, previous = 0;
  let dragging = null;
  function updateCamera() {
    const distance = Math.max(23, 18 / camera.aspect) * zoom;
    camera.position.set(Math.sin(yaw) * Math.cos(elevation) * distance, Math.sin(elevation) * distance, Math.cos(yaw) * Math.cos(elevation) * distance);
    camera.lookAt(0, 0, 0);
  }
  function render() {
    if (lost) return;
    planets.forEach(p => {
      const a = p.phase + elapsed * p.speed;
      p.group.position.set(Math.cos(a) * p.orbit, 0, Math.sin(a) * p.orbit);
      p.surface.rotation.y = elapsed * .16;
    });
    sun.rotation.y = elapsed * .05;
    updateCamera(); renderer.render(scene, camera);
  }
  function tick(now) {
    frame = 0;
    if (!paused && visible && !document.hidden && !lost) {
      if (now - previous >= 1000 / 30) {
        elapsed += Math.min((now - previous) / 1000, .06); previous = now; render();
      }
      frame = requestAnimationFrame(tick);
    }
  }
  function sync() {
    cancelAnimationFrame(frame); frame = 0; previous = performance.now();
    toggle.textContent = paused ? 'Play orbits' : 'Pause orbits';
    toggle.setAttribute('aria-pressed', String(paused));
    root.dataset.motion = paused ? 'paused' : 'playing';
    status.textContent = paused ? 'Motion paused' : 'Orbits in motion';
    if (!paused && visible && !document.hidden && !lost) frame = requestAnimationFrame(tick);
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    camera.aspect = width / height; camera.updateProjectionMatrix();
    renderer.setSize(width, height); render();
  }
  const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host);
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .05 });
  observer.observe(host);
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', () => { paused = motion.matches; sync(); render(); });
  buttons.addEventListener('click', e => {
    const action = e.target.closest('[data-orbit]')?.dataset.orbit;
    if (action === 'pause') { paused = !paused; sync(); }
    if (action === 'in') zoom = Math.max(.7, zoom - .13);
    if (action === 'out') zoom = Math.min(1.7, zoom + .13);
    if (action === 'reset') { yaw = 0; elevation = .68; zoom = 1; elapsed = 0; }
    render();
  });
  canvas.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    dragging = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    if (!dragging) return;
    yaw -= (e.clientX - dragging.x) * .006;
    if (e.pointerType !== 'touch') elevation = THREE.MathUtils.clamp(elevation + (e.clientY - dragging.y) * .004, .18, 1.3);
    dragging = { x: e.clientX, y: e.clientY }; render();
  });
  const release = () => { dragging = null; };
  canvas.addEventListener('pointerup', release); canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('lostpointercapture', release);
  canvas.addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '-', '=', 'Home'].includes(e.key)) return;
    e.preventDefault();
    if (e.key === 'ArrowLeft') yaw += .12;
    if (e.key === 'ArrowRight') yaw -= .12;
    if (e.key === 'ArrowUp') elevation = Math.min(1.3, elevation + .1);
    if (e.key === 'ArrowDown') elevation = Math.max(.18, elevation - .1);
    if (e.key === '+' || e.key === '=') zoom = Math.max(.7, zoom - .13);
    if (e.key === '-') zoom = Math.min(1.7, zoom + .13);
    if (e.key === 'Home') { yaw = 0; elevation = .68; zoom = 1; }
    render();
  });
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault(); lost = true; sync(); root.dataset.state = 'fallback'; buttons.hidden = true; status.textContent = 'Still view';
  });
  canvas.addEventListener('webglcontextrestored', () => {
    lost = false; root.dataset.state = 'ready'; buttons.hidden = false; resize(); sync();
  });
  root.dataset.state = 'ready'; buttons.hidden = false; resize(); sync();
}
