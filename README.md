# Julie Kumar — academic website

Live site: https://ykumar2020.github.io/

A responsive academic portfolio built with Tailwind CSS 4, semantic HTML, and small vanilla JavaScript enhancements. The dark space theme uses gold, coral, and blue accents inspired by Lightning CSS. All styling is compiled locally; there is no browser-side Tailwind CDN or runtime framework.

## Edit and preview

- Edit template.html for biography, research, teaching, experience, and service.
- Edit data/publications.json for the complete bibliography. Preserve accepted/published status and publisher links.
- Install Node.js 22+ and Python 3, then run `npm ci` once.
- Run `npm run build` to regenerate index.html and compile/minify styles.css. Commit both outputs together with source changes.
- Run python -m http.server 8091 and open http://localhost:8091/.
- Edit `src/tailwind.css` for Tailwind theme tokens and component utilities, and script.js for filters/navigation. Do not edit generated styles.css directly.
- `npm run watch:css` rebuilds styles during design work; `npm run preview` serves the site locally.
- Replace documents/Yulia-Kumar-CV.pdf when the CV changes. Keep personal contact details appropriate for public release.

GitHub Pages serves the root of the main branch. The .nojekyll file disables Jekyll processing. Pushing main updates the site.

## Included behavior

Mobile navigation; keyboard focus and skip link; native expandable teaching sections; research filters, text search, and progressive publication loading; citation copy; reduced-motion support; print styles; metadata, sitemap, favicon, and social preview. The full bibliography remains in HTML and is readable without JavaScript.

## Content and assets

Content is based on the owner-supplied 2026 CV, 2025 non-teaching effectiveness statement, and NSF synergistic activities statement. Education uses the newer CV's 2026 M.S. listing and explicitly marks the ECE Ph.D. as in progress.

The website uses the preferred display name Julie Kumar. Publications, the CV, and structured academic identity retain Yulia Kumar; structured data also records Julie as the alternate name.

The supplied CV lists accepted 2026 papers; these are not represented as already published. All 77 CV entries are included, with additional preprint-version links from ORCID and citation details checked against DOI metadata where available. Year and status filters and a show-all control make the catalog accessible. Bibliography records include related versions and are not a count of distinct studies or a citation metric. Google Scholar was rate-limited during the September 28 check. The internal non-teaching statement is not published as a document.

Portrait source: the owner's supplied photo, IMG_2946 (1).jpeg, updated September 28, 2026. The web asset preserves the photograph, applies its recorded orientation, and is resized and compressed for loading speed with camera metadata omitted. CSS frames the photograph responsively. Original project illustrations are CSS/SVG diagrams and are decorative rather than experimental results.

This is a personal site. Institutional logos are not used. Contact is the public university email.

## Intelligence field

`src/intelligence-field.js` creates a procedural Three.js visual metaphor for distributed intelligence, exported through `src/planets.js` and bundled into `assets/planets.js`. Five translucent violet/cyan energy spheres drift independently along slow bounded paths with smooth reversals. There is no central planet or solar orbit. Fractal cloud shaders, luminous cores, fine filaments, surface particles, and brief signals between nearby spheres provide the ASI-inspired appearance. This is artwork, not a scientific depiction of ASI.

The fixed edge-to-edge canvas covers every section and never captures clicks or scrolling. Mobile displays use three smaller spheres. Rendering caps at 30 fps, pixel ratio 1.5 and 1.6 million pixels. Hidden tabs stop rendering. Reduced-motion preference starts everything paused; pause, field-position, size and reset controls remain available. A matching static SVG appears without JavaScript or WebGL and after context loss. All textures and effects are generated locally; there are no extra remote assets.

## Photo carousel

The homepage rotates through the owner-supplied IMG_2946 (1).jpeg, IMG_0013.jpeg, and IMG_5495.jpeg photographs. The 3:4 frame preserves the portrait composition. WebP assets apply EXIF orientation and omit camera metadata. A two-stage 3D flip runs every eight seconds, with previous/next and play/pause controls. Hover, focus, off-screen position, and hidden tabs suspend autoplay. Manual navigation pauses autoplay; reduced-motion preference starts paused and removes flipping. The initial photo remains readable without JavaScript. The social preview retains the first photo.

## Typography

Orbitron variable font gives the name and section headings a futuristic character; Space Grotesk provides readable body text and secondary headings. Both WOFF2 files are self-hosted in `assets/fonts/`, with their SIL Open Font License files, and preloaded on the homepage. Source: the Google Fonts repository, `ofl/orbitron` and `ofl/spacegrotesk`.

## Neon scene and expanded photos

The carousel includes six supplied photographs. Added IMG_9760.jpeg (atrium), IMG_3802.jpeg (MIT sign), and IMG_0793.jpeg (research posters). Original image content is preserved, orientation normalized, and camera metadata omitted. The landscape MIT photo uses contain framing to retain both the sign and Julie. Slide counts and announcements derive from the slide collection.

The September 29 intelligence-field revision replaces the earlier emissive planets and rings with free-floating plasma spheres. Pause and reduced-motion settings freeze the field, filaments, signal particles and star twinkles together.

## Skills cube and star twinkles

The research-area cards are replaced by a six-face CSS 3D cube with icons, skills, and accompanying explanations. Automatic turns occur every 5.5 seconds while visible; hover, keyboard focus, hidden tabs, and reduced-motion preference suspend automatic rotation. Previous/next, direct skill selection, arrow keys, and pause/play work without dragging. All six descriptions remain readable without JavaScript and in print. The starfield includes larger shader glints and staggered CSS sparkles tied to the background pause control.
