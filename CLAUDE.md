# CLAUDE.md — Portfolio redesign (direction "E3")

You are rebuilding **meiyuchi.com**, Angela Mei's product & UX design portfolio, to a new design called **E3**.
Read this whole file before writing code. When something here conflicts with the old site, this file wins.

## 1. Context

- Owner: **Angela Mei** (Mandarin name **Mei Yu-Chi**; surname Mei). Product & UX designer, **based in Zürich, CH**. M.S. HCI, University of Maryland; background in Finance. Open to 2026 roles.
- Hosting: GitHub Pages, custom domain in `CNAME` (meiyuchi.com). Keep `CNAME` and `.nojekyll`.
- Current live site is **hand-written static HTML**: `index.html`, `about.html`, `works.html`, `project/*.html`, shared `styles/site.css` + `styles/site.js`, images in `media/`.
- Legacy Next.js leftovers (`_next/`, `.next/`, `out/`, `node_modules/`, `*.txt` RSC files, `404.html` from Next) are not used by the hand-written pages. Do not edit them; ask Angela before deleting.
- **Never run `publish.sh`** — it deletes every file in the repo root. Never force-push.

## 2. Tech rules

- Stay **static: plain HTML + one CSS file + one small vanilla JS file**. No framework, no build step, no npm dependencies.
- Rewrite `styles/site.css` and `styles/site.js` (or create `styles/e3.css` / `styles/e3.js` and switch pages over). Keep one shared header/footer markup pattern, copied per page.
- Every page links `/styles/e3.css?v=YYYYMMDD` and `/styles/e3.js?v=YYYYMMDD`. When either file changes, bump the date on all pages at once so returning visitors don't get a cached copy.
- Fonts from Google Fonts only: `Inter Tight` (400/500/600/800), `Instrument Serif` (regular + italic), `IBM Plex Mono` (400).
- All motion must respect `prefers-reduced-motion: reduce` (disable marquee, orbit, bob, pulse, nudge, rise; show final state).
- Responsive down to 360px wide: grids collapse to one column, the header grid stacks, no horizontal scroll.
- Accessibility: real `<a>`/`<button>`, visible focus styles, `alt` text on every image, text contrast ≥ 4.5:1, decorative SVG `aria-hidden="true"`.
- Work on a branch (`redesign-e3`), commit in small steps, and let Angela review before merging to the published branch.

## 3. Visual reference

`design/home-e3.reference.html` is the approved homepage mockup. It is a design-tool file: ignore the `<x-dc>`, `<helmet>`, `support.js` and `<script type="text/x-dc">` wrapper, and read `{{accent}}` as `var(--accent)`. Use it for layout, sizes, copy and animations — rebuild it as clean semantic HTML/CSS, don't copy the inline styles verbatim.

## 4. Design tokens

```css
:root{
  --bg:#FFFFFF;
  --ink:#0A0A0A;
  --muted:#6B6B66;        /* secondary text, mono labels */
  --line:#E2E2DE;         /* hairline dividers */
  --placeholder:#F1F1EF;  /* image backgrounds */
  --row-hl:#F4F3F0;       /* highlighted archive row */
  --accent:#C4553D;       /* muted brick red — use sparingly */
  --font-sans:'Inter Tight',sans-serif;
  --font-serif:'Instrument Serif',serif;   /* italic accents only */
  --font-mono:'IBM Plex Mono',monospace;   /* 12px UPPERCASE labels */
  --pad:32px;             /* page side padding (16px on mobile) */
  --ease:cubic-bezier(.2,.8,.2,1);
}
```

- Type: giant name 800 weight, letter-spacing −0.06em, uppercase. Body 18–22px. Labels: mono 12px uppercase, often in brackets: `[ Selected work ]`, `[ Menu ]`, counters like `(01)`, `Work (05)`.
- Accent appears only on: "MEI", the italic tagline, availability dot, `[ Menu ]`, key metric (−30%), ✳ marks, the volleyball, the word "spin", the "@" in the email. Nothing else.
- No rounded cards, no shadows, no gradients. Hairlines, white space, big type.

## 5. Homepage sections (in order)

1. **Header** — sticky, white, hairline once scrolled. Desktop: `[ Angela Mei ]` · "Product & UX Designer / Zürich, CH — {live time} CET" · nav at the right in sans 16px/500 (`Work (07) Playground (05) About Contact`, counts small mono). Phones (≤900px): `[ Angela Mei ]` + `[ Menu ]` only, which opens the full-screen overlay nav (it also shows the clock). Live clock in Europe/Zurich via `Intl.DateTimeFormat`, updates each minute. Skip the "Sound" toggle unless Angela asks for sound.
2. **Hero** — left: 3-line intro ("I design calm, human software — / from the messy middle out. / *Usually better than expected.*"); right: mono "Portfolio ’26 / M.S. HCI, Univ. of Maryland / ● Available for 2026 roles" with pulsing dot. Then the giant **ANGELA MEI** (font-size ≈ 15.4vw, wraps to two lines on narrow screens — "MEI" must never be clipped). Under it: small orbiting-dot icon + "Mei Yu-Chi — a name that means 'unexpected'" and a bobbing "Scroll ↓".
3. **Selected work** — staggered 12-col grid of 4 cases (Guide App 8 cols; Coin Toss 4 cols offset down; Pat Pet cols 2–5; Milky Way cols 7–12 offset down). Caption row in mono: `(01) Guide App · UX Research · Product · −30% editing time`. Images: subtle scale/ripple on hover (CSS only is fine; WebGL optional later).
4. **Principles marquee** — Instrument Serif italic ~96px, infinite scroll: "Clarity over cleverness ✳ Research earns the design ✳ Details carry the feeling ✳".
5. **About** — `[ About ]` label. Left: one-line SVG hand reaching up to a volleyball; the line draws in on scroll (stroke-dashoffset), the accent ball bobs. Right: "Finance taught me *systems.* HCI taught me *people.* Volleyball taught me to read the **spin** before it lands." + 3 hairline rows: Now — Product & UX design, Zürich / Study — M.S. HCI, University of Maryland / Roots — Finance.
6. **Playground** (was "Archive") — table Name · Detail · Date: Two Halves ↗ (highlight row); Aim & Hit ↗ (YouTube); Go for a Ride ↗; Galaxy Generator ↗; Student Social Life. Links: reuse URLs from current `works.html`.
7. **Footer** — `[ Contact ] — click to copy` + huge email (click copies to clipboard, shows "Copied"), then 4-col mono row: ©2026 Angela Mei · LinkedIn · GitHub · Résumé (PDF) · Back to top ↑.

## 6. Motion spec

| Element | Animation |
|---|---|
| Hero intro lines, name words | rise from 110% + fade, 0.8–1s, `--ease`, staggered 80–140ms; trigger on load |
| Section headings / cards | same rise, triggered by IntersectionObserver once |
| Availability dot | pulse 2s infinite |
| Name-meaning icon | dot orbits a dashed circle, 6s linear |
| "Scroll ↓", volleyball | bob 2.4s / 1.8s |
| "→" / "↗" arrows | nudge 5px, 1.6s |
| Marquee | translateX 0 → −50%, 30s linear, content duplicated |
| Hand line drawing | stroke-dashoffset 900 → 0, 3s on enter |

Keep it calm — nothing faster than these values, no scroll-jacking.

## 7. Other pages

- `works.html`: same header/footer; `[ Work ]` index of all 5 case studies as large rows (number, title, tags, year, thumbnail on hover) + the Playground table.
- `project/*.html`: case-study template — hero (title, role, timeline, team, tools in a mono meta grid), full-bleed cover, then sections Problem · Research · Insights · Design · Testing · Outcome, each with `[ label ]` + text column (max 680px) + full-width images; "Next project →" at the bottom. Keep the existing case-study text and images; only restyle.
- `about.html`: can redirect to the homepage About section, or reuse its layout with the longer bio from the current about page.

## 8. Content & assets

- Use existing copy from the current pages; update location everywhere from College Park, MD to **Zürich, CH** (time zone CET/CEST).
- Covers: `media/homepage/Cover_Guide.png`, `Cover_Cointoss.png` (or `.gif`), `Cover_Patpet.png`, `Cover_Milky.png`, `Cover_UserResearch.png`; archive thumbs in `media/works/` (`galaxy.png`, `goforaride.png`).
- Résumé link: keep the Google Drive URL from the current `index.html`.

## 9. Open items — ask Angela, don't invent

- Contact email address (footer shows `[your@email]` until provided).
- Years for Student Social Life, Galaxy Generator, Go for a Ride.
- Chinese characters for her name (only add if she provides them).
- Whether to delete the legacy Next.js files.

## 10. Done when

- Homepage matches `design/home-e3.reference.html` at 1440px and works cleanly at 390px.
- All pages share the new header/footer and tokens; no references to old Fraunces/theme classes remain.
- Reduced-motion and keyboard navigation both work; no console errors; Lighthouse accessibility ≥ 95.
