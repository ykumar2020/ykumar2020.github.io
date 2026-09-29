# Julie Kumar ? Cyber-Academic Grid

Live site: https://ykumar2020.github.io/

A static academic portfolio built with Tailwind CSS 4, semantic HTML, vanilla JavaScript, and Three.js. The cybernetic visual identity uses obsidian, cyan and amber while keeping publication text on quiet, high-contrast surfaces. GitHub Pages serves the root of `main`.

## Build and preview

Requirements: Node.js 22+ and Python 3.

```sh
npm ci
npm run build
npm run preview
```

Open http://localhost:8091/. Commit generated `index.html`, `styles.css`, and `assets/planets.js` along with their sources. Pushing `main` publishes through GitHub Pages.

## Design system and templates

- `src/tailwind.css`: Tailwind configuration and palette tokens.
- `src/cyber.css`: modular CSS variables, layout, glass panels, chamfers, corner accents, responsive rules and print styles.
- `template.html`: hero, credentials, biography, research, teaching and service templates. Edit this rather than generated `index.html`.
- `build.py`: publication component renderer, including status badges, source links and expandable BibTeX.
- `data/publications.json`: authoritative input for the 77 bibliography records.
- `script.js`: progressive enhancement for navigation, photos, research domains, filters and the optional network.

Reusable surfaces: `.glass-panel` uses `rgba(13,19,31,.85)` with 12px blur; `.chamfer` applies a 45-degree clip; `.cyber-frame` provides cyan/amber corner strokes. Focus outlines are preserved on interactive project links. Use `--cyan`, `--amber`, `--violet`, `--ink`, `--muted` and `--border` for new components. Body and publication text use a system sans-serif at 16px or above. Self-hosted Orbitron supplies display headings; Space Grotesk supplies labels and secondary headings. Font licenses are in `assets/fonts`.

## Drop-in Three.js module

`src/academic-visuals.js` exports `mountAcademicVisuals()`. `src/planets.js` is the bundle entry point (the legacy filename is retained for deployment compatibility). After building:

```js
import { mountAcademicVisuals } from './assets/planets.js';
const visuals = mountAcademicVisuals();
visuals.setDomain(0);
```

The matching HTML hosts and controls are included in `template.html`: `#grid-scene`, `#node-scene`, `#motion-toggle`, and optional `#network-scene`. The default script already mounts the module; do not mount it twice. `setRecords(records, onSelect)` updates the optional network, and `selectRecord(id)` highlights a record. Records require `id`, `topic`, `title` and `year`; supported topics match the bibliography filters.

- Hero: perspective cyan grid, slow data packets and gentle fine-pointer parallax.
- Research: draggable wireframe with a branching amber axis; rotate/reset buttons provide a keyboard alternative. It is illustrative geometry, not a computed medial-axis result or experimental evidence.
- Publications: an optional lazily created 3D topic constellation, with an equivalent record selector and chronological list. Lines encode topic membership, never citations, influence or semantic similarity. The filters and selected record are shared between views.
- Each canvas has a 30 fps maximum and pixel ratio `Math.min(devicePixelRatio, 1.5)`.
- IntersectionObserver uses threshold 0.05. Offscreen scenes and hidden tabs cancel the animation callback entirely.
- Reduced motion starts with a still frame. Explicit resume is available; preference changes update all scene controls. No continuous rendering is scheduled while paused. Resizing and deliberate inspection can draw a new still.
- Context loss displays CSS/SVG fallbacks and restoration reinstates the renderer. No-JavaScript readers see the static grid, mesh and complete academic content.

There are no analytics, remote runtime libraries, external font requests or postprocessing passes. The old `src/intelligence-field.js` and plasma SVGs remain as historical source assets; they are not imported or loaded by the redesigned site.

## Academic content integrity

All 77 CV entries are preserved, including posters, preprints and incomplete work. The record count is not a count of unique studies. Accepted work remains distinct from published work. Public links use only the existing recorded destinations; unavailable PDFs or code are not invented. The bibliography retains the academic name Yulia Kumar and earlier publications under Yulia Rossikova, while the site displays the preferred name Julie Kumar.

BibTeX drawers export generic `@misc` entries from known metadata. This deliberately avoids guessing whether a CV entry is a journal article or conference paper. The drawer states that missing fields and publication types are not inferred. Use the publisher's official export when more complete metadata is needed.

Biography, education, appointments and service are based on the owner-supplied 2026 CV, 2025 non-teaching evidence and NSF synergistic activities document. The ECE Ph.D. is explicitly in progress; the existing Ph.D. in Finance is retained. The private non-teaching evidence document is not published. Credentials use text badges rather than institutional logos.

## Photos and progressive enhancement

All six previously supplied photographs are preserved. The technology-exhibition portrait now opens the carousel. The original image pixels remain unchanged apart from the previously generated orientation/resize/compression; no synthetic edits are applied. The photo carousel pauses on hover, keyboard focus, offscreen position and hidden tabs. Manual navigation pauses autoplay, and reduced motion removes the flip effect and starts paused. The portrait remains readable without JavaScript.

## Verification

With the preview server running, install Python `playwright` and `requests`, then run:

```sh
python tests/check_academic_site.py
```

The test uses installed Chrome and saves screenshots and reports in ignored `qa/`. It checks publication filters and source record counts, clipboard/BibTeX, network selection and empty states, geometry controls, 320?1440px layouts, reduced motion, render rate, offscreen suspension, context loss/recovery, no-JavaScript content, print completeness and browser errors. It uses axe-core 4.10.3 for automated WCAG A/AA screening, cached locally under `qa/`; axe is not shipped to visitors. Automated checks do not constitute a full accessibility certification. Keyboard and visual checks supplement them.

Before publishing, also inspect the hero, research and publication views at desktop and mobile widths. Confirm GitHub Pages reports the new commit as built and open the live site to check asset versions and runtime behavior.


## Owner graphics gallery (September 29 update)

The graphics gallery includes an illuminated torus derived from the owner's HW5 parametric construction. The original six-photo carousel is retained in About. Brighter cyan grid routes, amber light paths, a circular identity mark and illuminated edges strengthen the TRON-inspired visual identity without animating publication text.

`src/graphics-work.js` contains browser adaptations of five supplied projects and the saved ray-tracing preview. `src/tron-studio.css` contains this visual layer. The shared stage scheduler retains the 30 fps cap, 1.5 pixel-ratio cap, reduced-motion still state, offscreen suspension and context-loss fallback. Only one project is active in the gallery's WebGL renderer.

- HW5 torus: 64 by 40 subdivisions; 5,120 triangles; 2,665 vertex records with 15,360 indices, or 15,360 non-indexed vertex records. Original radius and periodic RGB formulas retained; checker preview instead of a missing external texture.
- HW4 swirl sphere: original latitude/longitude samples and GLSL color/mask/reveal formulas, with manual point density. Time starts after the reveal so the still preview remains visible.
- HW3 recursive graphics: Sierpinski tetrahedron, Koch outline and bounded branching fern study. The original marks the fern WIP. The browser uses a normal-color surface and gold wireframe for the tetrahedron, a boundary outline for Koch, and a simplified line-based fern.
- HW2 orbital transforms: source periods and eccentric-radius equations, stylized material colors, exaggerated dimensions. The browser omits source image textures, spin and inclination details; it is not a complete simulation or an ephemeris.
- HW1 collisions: a 16-ball deterministic collision/particle excerpt. The complete original Processing game contains parameter controls, gradual spawning and the Golden Snitch; these are not claimed as implemented in the compact browser excerpt.
- Ray tracing: the linked public Colab notebook was downloaded and inspected, not executed. The six-second silent 960 by 540 H.264 preview is an existing local `motion_test_bezier.mp4` render, not a rerun of the notebook snapshot. Original CC0 foundation-code credits are retained.

`graphics/source-manifest.json` records input/source hashes. Source-only ZIPs preserve selected original code bytes, including comments and attributions. Native build products, logs, binaries, unrelated photographs and large texture bundles are excluded. The notebook snapshot is preserved as supplied. Fallback PNGs are screenshots of the browser-rendered default studies, not images synthesized independently of the code.

Additional verification: `python tests/check_graphics.py` checks all 15 study/mode combinations, mesh/sample counts, video load/play/pause, source downloads, responsive overflow, reduced motion, offscreen rendering and static fallback. The saved video was also fully decoded with FFmpeg. Run it alongside the general academic-site test before publishing changes.


## Redshift / The Loom

The hero now presents an original speculative ASI artwork in `src/asi-loom.js`: a slowly weaving particle field, a dark faceted core, branching signal paths and asymmetrical arcs. It is explicitly labeled a visual metaphor, not a scientific model or actual AI telemetry. The scene uses 13,500 particles on desktop and 6,500 on mobile, GPU vertex animation and instanced outer fragments. `src/redshift.css` supplies red neon decoration and high-contrast pale coral interface text; original graphics-gallery colors are preserved. The shared 30 fps / 1.5 pixel-ratio caps, offscreen suspension, pause control and reduced-motion still frame apply. `assets/asi-loom-fallback.svg` is the no-WebGL fallback.
