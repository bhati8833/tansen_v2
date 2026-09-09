# Font Migration — Implementation & Responsive QA Report

**Date:** 2026-09-09
**Approveal basis:** D1–D3 decisions from plan-eng-review (two-font system, token-remap + selective serif, no third font).
**Verdict:** Typography migration complete and QA-approved.

## 1. Final architecture

- **DM Sans (Variable, WOFF2)** — all UI: body, nav, buttons, H3/card titles, labels, badges, legal/blog pages.
- **Spectral (static weights 400/500/600/700 + italic 400, WOFF2)** — editorial voice: Home hero, About page (hero + major section H2s), Courses heroes/taglines + major section H2s, testimonial quote.
- Both fonts **self-hosted** in `src/fonts/`, loaded via `next/font/local`. No Google Fonts CDN, no `next/font/google`, no external CSS font import.
- Legacy utility classes (`font-poppins`, `font-roboto`, `font-playfair`, `font-roboto-slab`) are **not rewritten** — they are remapped at the token level:
  - `--font-poppins` / `--font-roboto` → DM Sans
  - `--font-playfair` / `--font-roboto-slab` → Spectral
  - New semantic tokens `--font-sans`, `--font-serif`
  - `:root` aliases `--font-roboto-var` / `--font-poppins-var` → `var(--font-dm-sans-var)`, `--font-playfair-var` → `var(--font-spectral-var)` (covers 11 inline `var()` usages incl. CourseCard, MainNav, StudentSuccessStories).

### Spectral variable-font constraint (documented)
Google Fonts ships **no canonical variable build of Spectral** (static weights only).
Self-hosted as static WOFF2s; only DM Sans is a true variable font. Non-issue for rendering: weights load on demand, measured CLS = 0.

## 2. Files changed

| File | Change |
|---|---|
| `src/fonts/` (new) | `DM-Sans-Variable.woff2` (62.5 KB), `Spectral-{Regular,Medium,SemiBold,Bold}.woff2`, `Spectral-Italic.woff2` |
| `src/app/layout.tsx` | `next/font/google` imports removed; `dmSans` + `spectral` via `next/font/local`; `<html>`/`<body>` wiring |
| `src/app/globals.css` | `@theme` font-token remap, `--font-sans`/`--font-serif`, `:root` aliases, `fadeIn` keyframe restored |
| `src/components/sections/Hero.tsx` | h1/h2 → `var(--font-spectral-var)` |
| `src/app/about/page.tsx` | hero H1+tagline + all major section H2s → `font-serif` |
| `src/components/courses/CoursePageTemplate.tsx` | hero H1s+taglines + major section H2s → `font-serif` |
| `src/app/courses/[category]/page.tsx` | category hero H1 → `font-serif` |

**Deliberately DM Sans:** FAQ, Terms, Privacy, Disclaimer, Cookie Policy, Blog (legal/informational, not editorial).

## 3. Regression repaired mid-migration
- `fadeIn` keyframe body was accidentally deleted during an unrelated edit; restored (`0% {opacity:0} / 100% {opacity:1}`) and verified present in built CSS.
- One About-page line collapse during an edit was caught and repaired before build.

## 4. Build & static export
- `npm run build` **passes** (Next.js 16.3.3, 29/29 static pages).
- Project is `output: 'export'` → production artifact is the static `out/` directory.
- 6 WOFF2s self-hosted in `out/_next/static/media/`; **zero** `fonts.gstatic.com` / `fonts.googleapis.com` references anywhere in build output.
- Lint: no new issues from migration. 4 pre-existing errors (unrelated): `scripts/copy-updated-photos.js` (`require` imports ×2), `about/page.tsx:319` (`no-explicit-any`), `contact/ContactClient.tsx` (empty interface).

## 5. Responsive QA method
Headless Chrome (puppeteer) against the **static export** served on a local port — 10 pages × 6 viewports (320/375/768/1024/1440/1920) = 60 loads. Instrumented: `document.fonts`, CLS (PerformanceObserver layout-shift), document/element horizontal overflow, clipped/collapsed text, wrong-font headings (regex Poppins/Roboto/Playfair), console/page errors, failed & external requests, hero H1 geometry. Plus PNG pixel-sanity analysis of 22 full-page screenshots (blank-band / contrast / ink coverage). Note: prior run on the dev server was superseded by the static-export run (the canonical production artifact).

## 6. QA results — all viewports PASS

| Check | Result |
|---|---|
| HTTP status (60/60 loads) | 200 |
| `document.fonts.status` | `loaded` on every page |
| External font requests | **0** |
| Failed requests | 0 |
| Console / page errors | 0 |
| CLS (layout-shift) | **0.000** everywhere |
| Document-level horizontal scroll | none (scrollWidth == clientWidth at all 6 viewports) |
| Clipped / collapsed text | 0 |
| Wrong-font headings | 0 (nothing resolves to Poppins/Roboto/Playfair) |
| Hero H1 | always in-viewport, wraps cleanly, correct family at every viewport |
| Screenshot pixel sanity | no blank, no low-contrast, no uniform blank bands |

**H1 family attestation (all 6 viewports):** `spectral` → home, about, cat-music, detail-classical-vocal, detail-keyboard-piano, courses-creative; `dmSans` → courses, faq, contact, privacy. Body/nav/buttons/H3 are `dmSans` everywhere.

**Flagged items reviewed & resolved as intended design (not defects):**
- Home snap-carousel cards, decorative gradient blobs, pulsing WhatsApp halo → absolutely-positioned/decorative, no document overflow.
- `/courses/` and `/faq/` filter chips at 320 → swipeable `overflow-x-auto` rows (standard mobile pattern).
- Vertical-clip scan hits → image `object-cover` card wrappers (intended cropping) and About hero section's internal decorative blob inside its `overflow-hidden` box. **No text is clipped.**

## 7. Remaining limitations
- Devanagari (D3): **N/A for current content** — codebase has zero Hindi/Sanskrit/Devanagari strings. CSS fallback stack only; a Devanagari webfont would be added if such content is introduced.
- 4 pre-existing lint errors (listed above) — unrelated to fonts, not fixed (out of scope).
- Screenshots saved at `/tmp/opencode/qashots/` for optional human visual confirmation.

## 8. Out of scope (unchanged)
Colors, images, content, section structure, spacing, animation, navigation, component architecture were **not** modified during QA — only font-migration-caused defects would have been fixed; none were found.