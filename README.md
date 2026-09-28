# Julie Kumar — academic website

Live site: https://ykumar2020.github.io/

A responsive academic portfolio built with Tailwind CSS 4, semantic HTML, and small vanilla JavaScript enhancements. The dark space theme uses gold, coral, and blue accents inspired by Lightning CSS. All styling is compiled locally; there is no browser-side Tailwind CDN or runtime framework.

## Edit and preview

- Edit template.html for biography, research, teaching, experience, and service.
- Edit data/publications.json for selected publications. Preserve accepted/published status and publisher links.
- Install Node.js 22+ and Python 3, then run `npm ci` once.
- Run `npm run build` to regenerate index.html and compile/minify styles.css. Commit both outputs together with source changes.
- Run python -m http.server 8091 and open http://localhost:8091/.
- Edit `src/tailwind.css` for Tailwind theme tokens and component utilities, and script.js for filters/navigation. Do not edit generated styles.css directly.
- `npm run watch:css` rebuilds styles during design work; `npm run preview` serves the site locally.
- Replace documents/Yulia-Kumar-CV.pdf when the CV changes. Keep personal contact details appropriate for public release.

GitHub Pages serves the root of the main branch. The .nojekyll file disables Jekyll processing. Pushing main updates the site.

## Included behavior

Mobile navigation; keyboard focus and skip link; native expandable teaching sections; research filters, text search, and progressive publication loading; citation copy; reduced-motion support; print styles; metadata, sitemap, favicon, and social preview. The full selected bibliography remains in HTML and is readable without JavaScript.

## Content and assets

Content is based on the owner-supplied 2026 CV, 2025 non-teaching effectiveness statement, and NSF synergistic activities statement. Education uses the newer CV's 2026 M.S. listing and explicitly marks the ECE Ph.D. as in progress.

The website uses the preferred display name Julie Kumar. Publications, the CV, and structured academic identity retain Yulia Kumar; structured data also records Julie as the alternate name.

The supplied CV lists accepted 2026 papers; these are not represented as already published. Selected publications are not a complete bibliography or a citation metric. The internal non-teaching statement is not published as a document.

Portrait source: the owner's supplied photo, IMG_2946 (1).jpeg, updated September 28, 2026. The web asset preserves the photograph, applies its recorded orientation, and is resized and compressed for loading speed with camera metadata omitted. CSS frames the photograph responsively. Original project illustrations are CSS/SVG diagrams and are decorative rather than experimental results.

This is a personal site. Institutional logos are not used. Contact is the public university email.
