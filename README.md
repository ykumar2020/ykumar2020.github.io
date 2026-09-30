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

The graphics gallery includes an illuminated torus derived from the owner's HW5 parametric construction. The original six-photo carousel is retained in the opening hero. Brighter cyan grid routes, amber light paths, a circular identity mark and illuminated edges strengthen the TRON-inspired visual identity without animating publication text.

`src/graphics-work.js` contains browser adaptations of five supplied projects and the saved ray-tracing preview. `src/tron-studio.css` contains this visual layer. The shared stage scheduler retains the 30 fps cap, 1.5 pixel-ratio cap, reduced-motion still state, offscreen suspension and context-loss fallback. Each embedded study initializes near the viewport and renders only while visible.

- HW5 torus: 64 by 40 subdivisions; 5,120 triangles; 2,665 vertex records with 15,360 indices, or 15,360 non-indexed vertex records. Original radii retained; presentation colors remapped to red; checker preview instead of a missing external texture.
- HW4 swirl sphere: original latitude/longitude samples and mask/reveal formulas with red shader colors, with manual point density. Time starts after the reveal so the still preview remains visible.
- HW3 recursive graphics: Sierpinski tetrahedron, Koch outline and bounded branching fern study. The original marks the fern WIP. The browser uses a shaded red surface and pale red wireframe for the tetrahedron, a boundary outline for Koch, and a simplified line-based fern.
- HW2 orbital transforms: source periods and eccentric-radius equations, stylized material colors, exaggerated dimensions. The browser omits source image textures, spin and inclination details; it is not a complete simulation or an ephemeris.
- HW1 collisions: a 16-ball deterministic collision/particle excerpt. The complete original Processing game contains parameter controls, gradual spawning and the Golden Snitch; these are not claimed as implemented in the compact browser excerpt.
- Ray tracing: the linked public Colab notebook was downloaded and inspected, not executed. The six-second silent 960 by 540 H.264 preview is an existing local `motion_test_bezier.mp4` render, not a rerun of the notebook snapshot. Original CC0 foundation-code credits are retained.

`graphics/source-manifest.json` records input/source hashes. Source-only ZIPs preserve selected original code bytes, including comments and attributions. Native build products, logs, binaries, unrelated photographs and large texture bundles are excluded. The notebook snapshot is preserved as supplied. Fallback PNGs are screenshots of the browser-rendered default studies, not images synthesized independently of the code.

Additional verification: `python tests/check_graphics.py` checks all 15 study/mode combinations, mesh/sample counts, video load/play/pause, source downloads, responsive overflow, reduced motion, offscreen rendering and static fallback. The saved video was also fully decoded with FFmpeg. Run it alongside the general academic-site test before publishing changes.


## Redshift / The Loom

The hero now presents an original speculative ASI artwork in `src/asi-loom.js`: a slowly weaving particle field, a dark faceted core, branching signal paths and asymmetrical arcs. It is explicitly labeled a visual metaphor, not a scientific model or actual AI telemetry. The scene uses 13,500 particles on desktop and 6,500 on mobile, GPU vertex animation and instanced outer fragments. `src/redshift.css` supplies red neon decoration and high-contrast pale coral interface text; graphics-gallery colors were subsequently unified with the red interface. The shared 30 fps / 1.5 pixel-ratio caps, offscreen suspension, pause control and reduced-motion still frame apply. `assets/asi-loom-fallback.svg` is the no-WebGL fallback.


## Open crimson gallery

The six-photo carousel is back in the opening hero, starting with the atrium portrait. All six graphics projects are embedded in eight visible study panels (the three fractals have separate panels), with no project tabs. Rendering and density controls adjust a study in place. Research descriptions, the publication network and the chronological bibliography are visible together. Every graphics adapter now uses the red family, including lit shaders, particles and orbital paths. Original downloadable source files are unchanged. The saved ray-tracing video has a CSS red presentation grade; it is not a rerender. The publication network now uses coauthor portraits or initials, with explicit text labels for shared topics.

Graphics renderers initialize within 200 pixels of the viewport, render only while visible, and retain the shared motion controls. Each default view has its own screenshot fallback. Run `python tests/check_graphics.py` and `python tests/check_academic_site.py` for the open gallery layout, all modes, photo navigation, filters, source links, accessibility screening and motion behavior. The graphics check also regenerates the seven red static preview screenshots.


## Scientific-image relief displays

`src/connectome-images.js` adds two always-visible, lazily initialized image relief displays: the H01 human cortex image reported in Popular Science and FlyWire's official rendering of its 50 largest neurons. Source attribution, original image links, article links and dataset explorers appear directly below each display. The FlyWire image is the official transparent-background variant of the supplied reference; it is not an image of every neuron. Source URLs and SHA-256 hashes are in `assets/connectomes/sources.json`.

This is an artistic 2.5D presentation of 2D images: source brightness supplies shallow surface displacement; slow view oscillation and a light sweep animate the presentation. Neither hidden geometry nor neural activity is recovered. Red is the default; source RGB can be shown, and unchanged originals are linked. These images are external scientific inspirations, not Julie's research results. Tilt, zoom, visual depth, global pause, reduced-motion still state, context-loss fallback and offscreen suspension are supported. Source downloads have not been raster edited.


## Recursive growth and collaborator network

`src/recursive-studies.js` morphs parent geometry into its recursively constructed children. Tetrahedra and Koch edges transition across levels 0?4; the bounded fern grows across levels 0?7. Each has a depth slider and independent hold/resume control; the global pause and reduced-motion policy still govern automatic playback. The camera does not spin these studies automatically, so the change in geometry is visible.

`src/collaboration-network.js` replaces topic hubs with Julie at the center and coauthor portrait nodes. Eight people are shown at a time on desktop; one on phones keeps edge labels readable. The selector exposes all entries. Clicking a person shows their shared topics, portrait attribution and supporting bibliography records; publication filters also filter the graph. Counts are bibliography records, not unique studies. An unresolved initial-only author is not automatically merged with a similarly named person.

`data/collaborators.json` records aliases, publication IDs, photo source URLs and hashes. Google Scholar returned HTTP 429 during this update; the seven portraits therefore come from attributed official university profiles, not an asserted Scholar scrape. Unverified portraits use initials. One bibliography record without an explicitly listed Julie/Yulia authorship is excluded from coauthor inference. The graph does not imply collaborations between other people, or equal contribution. Topic labels inherit the bibliography's broad editorial categories.

Run `python tools/build_collaborators.py` after bibliography updates to regenerate links using the reviewed alias and portrait metadata. Run `python tests/check_collaborators_recursion.py` to check data references, photo hashes, responsive graph controls, actual geometric changes, and reduced-motion behavior.
