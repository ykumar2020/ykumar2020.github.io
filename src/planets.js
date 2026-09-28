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
  canvas.setAttribute('aria-hidden', 'true');
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
      ocean: [[3, 28, 80], [0, 163, 211], [45, 255, 205]],
      ember: [[80, 5, 49], [233, 22, 137], [255, 145, 220]],
      gas: [[83, 34, 13], [240, 144, 24], [255, 231, 90]],
      ice: [[49, 11, 98], [140, 53, 237], [229, 153, 255]],
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
        if (kind === 'ocean' && n > .18) { low = colors[2]; high = [134, 255, 229]; }
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

  const auraCanvas = document.createElement('canvas'); auraCanvas.width = auraCanvas.height = 128;
  const auraContext = auraCanvas.getContext('2d');
  const auraGradient = auraContext.createRadialGradient(64, 64, 0, 64, 64, 64);
  auraGradient.addColorStop(0, '#ffffffaa'); auraGradient.addColorStop(.32, '#ffffffbb');
  auraGradient.addColorStop(.46, '#ffffff55'); auraGradient.addColorStop(.72, '#ffffff12');
  auraGradient.addColorStop(1, '#ffffff00');
  auraContext.fillStyle = auraGradient; auraContext.fillRect(0, 0, 128, 128);
  const auraTexture = new THREE.CanvasTexture(auraCanvas);

  const specs = [
    { neon: 0x18f7ff, kind: 'ocean', size: .65, orbit: 3, phase: 2.35, speed: .17 },
    { neon: 0xff37be, kind: 'ember', size: .5, orbit: 4.55, phase: .55, speed: .12 },
    { neon: 0xffd84c, kind: 'gas', size: 1.0, orbit: 6.5, phase: -.8, speed: .075 },
    { neon: 0xb569ff, kind: 'ice', size: .73, orbit: 8.45, phase: 3.7, speed: .05 }
  ];
  const planets = specs.map(spec => {
    const group = new THREE.Group();
    const surface = new THREE.Mesh(sphere, new THREE.MeshStandardMaterial({ map: texture(spec.kind), roughness: .55, metalness: .12, emissive: spec.neon, emissiveIntensity: .3 }));
    surface.scale.setScalar(spec.size); surface.rotation.z = .16;
    group.add(surface); system.add(group);
    // An illuminated atmospheric rim follows the sphere in view space.
    const atmosphere = new THREE.Mesh(sphere, new THREE.ShaderMaterial({
      uniforms: { tint: { value: new THREE.Color(spec.neon) }, strength: { value: .75 } },
      vertexShader: `varying vec3 vNormal; varying vec3 vEye;
        void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal); vEye = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform vec3 tint; uniform float strength; varying vec3 vNormal; varying vec3 vEye;
        void main() { float rim = pow(1.0 - max(dot(normalize(vNormal), normalize(vEye)), 0.0), 2.2);
          gl_FragColor = vec4(tint, rim * strength); }`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    }));
    atmosphere.scale.setScalar(spec.size * 1.075); group.add(atmosphere);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: auraTexture,
      color: spec.neon, transparent: true, opacity: .45, blending: THREE.AdditiveBlending,
      depthWrite: false, toneMapped: false }));
    halo.scale.setScalar(spec.size * 5); group.add(halo);
    if (spec.kind === 'gas') {
      const rings = new THREE.Group(); rings.rotation.x = Math.PI / 2 - .3; rings.rotation.y = .25;
      for (const [inner, outer, color, opacity] of [[1.35, 1.62, 0xffa340, .8], [1.68, 1.98, 0xffdf61, .95], [2.03, 2.2, 0xff55cf, .75]]) {
        rings.add(new THREE.Mesh(new THREE.RingGeometry(inner, outer, 96), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity, toneMapped: false })));
      }
      group.add(rings);
    }
    const points = Array.from({ length: 160 }, (_, i) => {
      const angle = i / 160 * Math.PI * 2;
      return new THREE.Vector3(Math.cos(angle) * spec.orbit, 0, Math.sin(angle) * spec.orbit);
    });
    system.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: spec.neon, transparent: true, opacity: .4, toneMapped: false })));
    return { ...spec, group, surface, atmosphere, halo };
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
  const starfield = new THREE.Points(stars, new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `uniform float time; varying float brightness;
      void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0);
        brightness = .08 + .92 * pow(.5 + .5 * sin(time * 1.6 + position.x * 4.0 + position.y * 2.0), 2.0);
        gl_PointSize = clamp(280.0 / -mv.z, 3.0, 8.0);
        gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying float brightness;
      void main() { vec2 uv = abs(gl_PointCoord - .5) * 2.0;
        float core = exp(-8.0 * dot(uv,uv));
        float rays = exp(-25.0 * min(uv.x,uv.y)) * pow(1.0-max(uv.x,uv.y),2.0);
        vec3 tint = mix(vec3(.45,.8,1.0),vec3(1.0,.92,.65),brightness);
        gl_FragColor = vec4(tint, min(1.0, core + rays * .75) * brightness); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  scene.add(starfield);

  let paused = motion.matches, visible = false, lost = false;
  let yaw = 0, elevation = .68, zoom = 1, elapsed = 0, frame = 0, previous = 0;

  function updateCamera() {
    const distance = Math.max(20, 18 / camera.aspect) * zoom;
    camera.position.set(Math.sin(yaw) * Math.cos(elevation) * distance, Math.sin(elevation) * distance, Math.cos(yaw) * Math.cos(elevation) * distance);
    camera.lookAt(0, 0, 0);
  }
  function render() {
    if (lost) return;
    planets.forEach(p => {
      const a = p.phase + elapsed * p.speed;
      p.group.position.set(Math.cos(a) * p.orbit, 0, Math.sin(a) * p.orbit);
      p.surface.rotation.y = elapsed * .16;
      // Staggered, smooth 3.5-second light pulses; pause freezes every effect.
      const pulse = .5 + .5 * Math.sin(elapsed * 1.8 + p.phase * 2);
      p.surface.material.emissiveIntensity = .18 + pulse * .3;
      p.atmosphere.material.uniforms.strength.value = .5 + pulse * .45;
      p.halo.material.opacity = .26 + pulse * .36;
      p.halo.scale.setScalar(p.size * (4.8 + pulse * .6));
    });
    sun.rotation.y = elapsed * .05;
    glow.material.opacity = .65 + .25 * Math.sin(elapsed * 1.1);
    starfield.material.uniforms.time.value = elapsed;
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
    toggle.textContent = paused ? 'Play motion' : 'Pause motion';
    toggle.setAttribute('aria-pressed', String(paused));
    root.dataset.motion = paused ? 'paused' : 'playing';
    status.textContent = paused ? 'Motion paused' : 'Orbits in motion';
    if (!paused && visible && !document.hidden && !lost) frame = requestAnimationFrame(tick);
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    camera.aspect = width / height; camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5, Math.sqrt(2000000 / (width * height))));
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
    if (action === 'left') yaw += .18;
    if (action === 'right') yaw -= .18;
    if (action === 'in') zoom = Math.max(.7, zoom - .13);
    if (action === 'out') zoom = Math.min(1.7, zoom + .13);
    if (action === 'reset') { yaw = 0; elevation = .68; zoom = 1; elapsed = 0; }
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
