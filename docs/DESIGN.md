# Design System — Tansen Sangeet Mahavidyalaya (V2)

**Status:** Active — source of truth for all V2 UI work
**Framework:** Next.js 15 App Router · Tailwind CSS v4 (`@theme` tokens) · Static export
**Aesthetic:** Warm-Light Modern Academy — energetic editorial, not classical museum
**Approved:** 2026-08-24 via `/design-consultation` (user-approved preview at `/tmp/tansen-design-preview.html`)

---

## Product Context

- **What this is:** Marketing website for Tansen Sangeet Mahavidyalaya, Sector 106 Gurugram — music & dance school founded 1972
- **Who it's for:** Parents (primary) and students in Gurugram searching for music/dance classes
- **Goal:** Admissions enquiries — calls, WhatsApp, trial-class bookings
- **Positioning:** "India's largest Music & Dance school" — modern multi-genre academy, NOT classical-only heritage
- **SEO reality:** Aggregators (UrbanPro/JustDial) own "near me" queries; this site wins on brand + conversion + long-tail course pages

## Memorable Thing

> **"50 years nurturing confident young performers."** — verifiable legacy (est. 1972) + the #1 parent outcome (confidence), promising real stage access without superlative risk. Chosen via seomachine research over "Where every child shines on stage."

### Tagline × SEO structure (hero)

- **H1 carries the keyword:** `Music & Dance Classes in Gurugram, Sector 106`
- **Tagline sits below as sub-headline:** `50 years nurturing confident young performers.` (Satoshi 700, stone or ink)
- Never use the tagline as H1 — Google needs category + location in the primary heading
- Title tag formula: `Tansen Sangeet Mahavidyalaya | Music & Dance Classes Gurugram Sector 106 | 50+ Years Legacy`

Every design decision serves this: warm light feels welcoming (parents trust it), marigold feels festive Indian (stage/garlands), mono data ticks feel institutional (credible numbers).

---

## Color System (Tailwind v4 `@theme`)

Warm-light FIRST. No dark mode. Dark ink used only as accent surfaces (footer, CTA strip, featured card).

```css
@theme {
  --color-cream: #FBF7EF;        /* primary page background */
  --color-cream-deep: #F3ECDD;   /* alternating section background */
  --color-card: #FFFDF8;         /* card surface */
  --color-ink: #211D17;          /* primary text + dark surfaces */
  --color-marigold: #D86800;     /* primary accent — sampled from brand logo — header bg, kickers, active states */
  --color-marigold-deep: #A64E00;/* hover / pressed states */
  --color-brand-blue: #0088C4;   /* secondary accent — sampled from logo — nav buttons, links, CTAs */
  --color-brand-blue-deep: #006A99;/* hover / pressed states */
  --color-gold-soft: #F0C987;    /* highlights on dark ink surfaces */
  --color-stone: #7A7266;        /* muted text, labels */
  --color-line: rgba(33, 29, 23, 0.10);      /* borders on light */
  --color-line-inverse: rgba(251, 247, 239, 0.12); /* borders on dark */
}
```

### Usage Rules

- Page sections alternate `bg-cream` → `bg-cream-deep` for depth
- Cards sit on `bg-card` with `border-line`
- `text-marigold` for kickers, section labels, active states
- Buttons: `bg-brand-blue text-white` primary, `bg-brand-blue-deep` hover; outline variant: `border-ink/25 text-ink`
- Header: `bg-marigold` background, nav links as blue pill buttons (`bg-brand-blue text-white`), white hamburger icon
- On dark ink surfaces: text `#CFC8BB`, muted `#9A9184`, accents `gold-soft`, marigold stays for CTAs
- NEVER standard Tailwind colors (blue/red/green) in UI chrome; semantic alert colors allowed in forms (#22c55e ok, #eab308 warn, #ef4444 error)

---

## Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display/Hero | **Satoshi** | 900, 700 | H1/H2, course names, stat numbers |
| Body | **General Sans** | 400, 500, 600 | Paragraphs, nav, buttons, forms |
| Data/Mono | **JetBrains Mono** | 400, 600 | Kickers, eyebrows, stats labels, breadcrumbs, tickers |

### Loading

```html
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700&f[]=general-sans@400,500,600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

Self-host via `next/font/local` preferred for perf; Fontshare CDN acceptable fallback. Always `display=swap`.

### Type Scale (clamp-based)

```
H1 hero:        clamp(34px, 5.6vw, 68px)   Satoshi 900, line-height 1.02, letter-spacing -0.02em
H2 section:     clamp(26px, 4vw, 42px)     Satoshi 900, line-height 1.05, letter-spacing -0.02em
H3 card:        19px                       Satoshi 700
Body large:     15–16px                    General Sans 400, line-height 1.65
Body small:     13–14px                    General Sans 400, line-height 1.55–1.7
Kicker/eyebrow: 10–11px                    JetBrains Mono 600, letter-spacing 0.16–0.22em, UPPERCASE
Stat number:    clamp(28px, 3.6vw, 40px)   Satoshi 900
```

### Kicker Pattern

Every section opens with: mono kicker (marigold, uppercase, letterspaced) followed by flex hairline (`flex:1; height:1px; bg-line`) then H2.

### Heading Highlighter (user signature)

ALL section H2s carry a **hand-painted brush-stroke highlight** behind the text — `public/images/brush-highlight.svg` (organic stroke: warm gold/marigold gradient wash `#FFBE6B → #F57C1F → #E0680A`, white sheen streaks, dry-brush underline, speckle splatter) applied as `background-image` with `[background-size:100%_100%]` + `preserveAspectRatio="none"` so it stretches to any heading length. Padding `0.3em/0.06em`, `box-decoration-clone` per wrapped line. Stark dark ink text (`text-ink`) on top for maximum contrast and 100% legibility. Applied via `SectionHeading` only.

---

## Spacing

- **Base unit:** 8px
- **Density:** spacious marketing rhythm
- **Section padding:** `clamp(48px, 7vw, 84px)` vertical
- **Container:** FULL-FLUID width — no max cap, side padding only (`clamp(20px, 4vw, 56px)`). User mandate: no wasted left/right space on wide screens.
- **Scale:** 4 / 8 / 12 / 14 / 18 / 24 / 32 / 36 / 44 / 56 / 72

## Layout

- **Approach:** hybrid — creative warmth on marketing surfaces, disciplined grids where content is dense
- **Border radius:** cards 14px, CTA strip 18px, hero frame 16px, pills/buttons 9px, round elements full
- **Responsive:** mobile-first; grids collapse 3→2→1 (courses now horizontal scroll instead); nav hides items ≥3rd under 720px

---

## Homepage Structure (locked order)

1. **Header** — fixed height via token: `--header-h` (76px mobile / 80px md+, set in globals.css). Translucent Glassmorphic Bauhaus Constructivist Header (`bg-cream/85 backdrop-blur-md border-b-2 border-ink shadow-[0_3px_0px_rgba(33,29,23,0.1)]`). Left: brand logo inside an orange geometric badge (`bg-marigold text-white border-2 border-ink shadow-[3px_3px_0px_#211D17]`) containing `taanz.svg` emblem + 2-line uppercase title ("TANSEN SANGEET / MAHAVIDYALAYA") with a blue `GURUGRAM` tag badge (`bg-[#0088C4] border border-ink shadow-[1px_1px_0px_#211D17]`). Desktop nav (md+): Bauhaus asymmetric geometric buttons (Primary Red square, Primary Blue circle/pill, Primary Yellow stark box, Marigold polygon) with stark black borders (`border-2 border-ink`) and hard offset 3D shadows (`shadow-[2.5px_2.5px_0px_#211D17]`). Mobile (<md): Bauhaus yellow square hamburger button toggling constructivist glassmorphic slide-down drawer (`bg-cream/95 backdrop-blur-md`).
2. **Hero — full-bleed image slider with 3D Trust Badge** — IMAGE ONLY slider with floating bottom-left 3D Bauhaus badge: `★ INDIA'S LARGEST MUSIC & DANCE SCHOOL`. Edge-to-edge: no container, no radius, `width:100%`. Height = `calc(100dvh - var(--header-h))` with `min-height:380px` floor — header + hero fill the first screen on every device. `object-contain` on dark ink background. Dark shade overlay. Dots + circular arrow buttons. 4 slides using landscape gallery originals (~800×533). Autoplay ~2s crossfade, pause on hover/touch.
3. **Trust & Stats — 6-card grid layout with Left-Aligned Monochrome B&W Icons**. Kicker "India's Largest Music & Dance School", H2 "One institution. Three promises." Row 1 (Core Promises): (1) **Legacy**: `50+` years teaching (`Award` icon); (2) **Students**: `1,00,000+` trained (`Users` icon); (3) **Certified**: `ISO 9001:2008` quality-certified (`ShieldCheck` icon). Row 2 (Reach & Flexibility): (4) **Presence**: `125+ Centers in 18 Cities` (`MapPin` icon); (5) **Global Reach**: `Online Interactive Classes` (`Laptop` icon); (6) **Campus Studio**: `Offline Campus Classes` (`Building2` icon). Each card formatted with mono kickers, monochrome black & white Lucide icons placed on the left side right before the numbers/titles, bold titles, and descriptive paragraphs.
4. **Our Courses — 3.5-card horizontal slider with clipart icons & autoplay**. Kicker "Our Courses", H2 "Nine crafts. One campus.", lede "Nine disciplines, each with its own graded path — from your very first note to the full stage." Horizontal smooth-scrolling carousel with **2.5s autoplay auto-sliding** (pause on hover/touch) showing **3.5 course cards per view on desktop** (`flex-[0_0_calc(100%/3.5-16px)]`), 2.5 on tablet, 1.4 on mobile. Next/Previous arrow controls in section header. Photo thumbnails replaced with **Lucide clipart icons** (`Guitar`, `Music`, `Drum`, `Mic`, `Radio`, `Sparkles`, `Flame`, `Zap`, `Palette`) in Bauhaus geometric badge containers with 3D offset shadow cards.
5. **Accreditation & Affiliations — Clean Minimal Grid**. Kicker "Accreditation & Affiliations", H2 "Certified curriculum, national standards." 4 clean, spacious logo cards (Prayag Sangeet Samiti, Prachin Kala Kendra, Trinity College London, Rockschool RSL) with delicate hairline borders, soft hover elevation, centered logo image, and minimal mono location tag. Ultra-clean and clutter-free.
6. **Embraced by Bollywood's Finest** — kicker "Our Achievement", H2 "Embraced by Bollywood's finest.", lede "Legends who have shared our stage...". 5 real celebrity photos from `public/images/celebs/` (Saroj Khan, Ismail Darbar, Annu Kapoor, Shakti Kapoor, Marzi Pestonji). Refined cards with 3D offset shadow (`shadow-[4px_4px_0px_#211D17]`), stark 2px ink borders, tag kicker, name, and role description. Clean single-row presentation with horizontal scroll.
7. **Real Google Reviews — Soft Light-Black Review Cards & Solid Black CTA**. Kicker "Google Reviews", H2 "Loved by parents in Gurugram.", lede "Real 5-star ratings & verified student feedback from our Google Maps listing." Header badge "★ 4.9 / 5.0 • 50+ REVIEWS ↗" (`border-2 border-ink shadow-[2.5px_2.5px_0px_#211D17]`) linking directly to `https://share.google/5PZYIMOBUQm3BhSTJ`. Horizontal scrollable grid of soft light-black review cards (`border-2 border-ink/30 bg-card shadow-[4px_4px_0px_rgba(33,29,23,0.12)] hover:shadow-[6px_6px_0px_rgba(33,29,23,0.22)]`) with circular avatar initials, 5 gold stars (`★ ★ ★ ★ ★`), verified checkmark, date tag, course pill badge, and quote text. Bottom soft light-black card with solid black CTA button (`border-2 border-ink bg-marigold shadow-[2.5px_2.5px_0px_#211D17]`).
8. **FAQ — Bauhaus Card Accordion Layout**. Left column: kicker "FAQ", brush-highlight H2 "What parents ask us.", stone lede, then a support card (`border-2 border-ink/30 bg-card shadow-[4px_4px_0px_rgba(33,29,23,0.12)]`) featuring a `HelpCircle` icon, "STILL DECIDING?" mono kicker, and a solid black 3D WhatsApp CTA button (`bg-[#25D366] text-white border-2 border-ink shadow-[2.5px_2.5px_0px_#211D17]`). Right column (wider): card-style accordion items — each question is a rounded-2xl bordered card with soft 3D shadow (`border-2 border-ink/30 bg-card shadow-[4px_4px_0px_rgba(33,29,23,0.12)]`), `Q01`-`Q05` mono index badges, bold font-display titles, and a square solid 3D toggle badge (`+` / rotated 45°, `border-2 border-ink shadow-[2px_2px_0px_#211D17]`) with smooth grid-rows answer expansion. Stacks on mobile.
9. **Footer — Bauhaus Constructivist Layout**. `bg-cream-deep` background with light hairline top border (`border-t border-line/60`). (a) Brand banner header featuring the **exact Header logo badge** on the left (`taanz.svg` + `TANSEN SANGEET MAHAVIDYALAYA (GURUGRAM)` with solid black border & 3D shadow `border-2 border-ink shadow-[2.5px_2.5px_0px_#211D17]`); (b) 4-column nav grid with mono marigold kickers: Quick Links · Affiliations · Our Courses · Visit Us (address, phone, email, mono operating hours badge, plus solid black 3D action buttons `border-2 border-ink shadow-[2.5px_2.5px_0px_#211D17]` for "BOOK FREE TRIAL" and "WHATSAPP US"); (c) bottom bar © left + **Brand-Colored Hover Social Icon Buttons** right (Instagram → `#E4405F`, Facebook → `#1877F2`, YouTube → `#FF0000`, WhatsApp → `#25D366` with solid 2px ink borders and 3D offset shadows `border-2 border-ink shadow-[2px_2px_0px_#211D17]`). All section boundaries transitioned with soft delicate hairline dividers (`border-b border-line/60`).

---

## System Architecture Rules

**Everything centralized. Everything modular. Everything premium.** The codebase must stay easy to update and upgrade forever.

### Centralization — single source of truth

- **Design tokens:** ONLY in `globals.css` via Tailwind v4 `@theme`. Never hardcode hex values, font names, or spacing numbers inside components.
- **Content data:** ONLY in `src/data/` (`courses.ts`, `gallery.ts`, `reviews.ts`, `site.ts`). No copy text pasted inside components — sections read from data.
- **Site config:** phone, WhatsApp, email, address, hours, nav links live ONLY in `site.ts`. Change once → updates everywhere (header, footer, schema, contact page).
- **Shared primitives:** Button, Container, SectionHeading, Kicker etc. live in `src/components/ui/`. Reuse them; never duplicate markup patterns across sections.
- **Fonts:** loaded at exactly ONE point (root layout). No per-page font imports.

### Modularity — one concern per file

- Each homepage section = its OWN component in `src/components/home/`: `HeroSlider`, `StatsBand`, `CoursesGrid`, `Affiliations`, `CelebCarousel`, `FaqAccordion`.
- Page files only COMPOSE sections — zero business logic inside pages.
- Keep every file focused (~200 lines max); extract sub-components when larger.
- Adding/removing/reordering a section touches ONE component + ONE import line. Nothing else breaks.

### Upgrade path (future-proofing)

- Change tokens or data first; components follow automatically.
- Swapping a section's design = replace one component file; layout contract stays stable.
- Any structural change gets logged in the Decisions Log table below.

### Premium quality bar (every section, no exceptions)

- A section is done only when it looks intentional on mobile AND desktop.
- Real content from `src/data/` — no lorem ipsum, no broken image paths, no unstyled default states.
- Hover/focus/active/disabled states designed for interactive elements.
- Empty/loading states handled (e.g., FAQ collapsed, carousel arrows disabled at ends).

## Motion

- **Approach:** intentional — motion aids comprehension, never decorates
- **Library budget:** ONE animation lib only. Use `motion` (already installed v13). DO NOT also use gsap + lenis together — combined JS breaks the 300KB budget. Lenis smooth-scroll: skip entirely. Current homepage needs NO animation library — hero is React state crossfade; marquees are pure CSS.
- **Marquee pattern:** only if ever re-introduced — duplicated track, `translate3d(0 → -50%)` linear infinite, duration = `item count × seconds`. Keyframes live at TOP LEVEL of globals.css (NOT inside `@theme` — tree-shaken otherwise). Pause on hover via `animation-play-state:paused`; kill with `motion-reduce:[animation:none]`. (Currently unused — courses grid is static.)
- **Specs:** enters ease-out 250–350ms; hovers 150–200ms; hero autoplay 6s crossfade; scroll reveals stagger ≤80ms, once only
- **Respect:** `prefers-reduced-motion` → kill autoplay/marquee/parallax, reveals render final state

## Responsive Rules

- **Full-screen sections:** every homepage section uses the `section-screen` utility — `min-height: calc(100dvh - var(--header-h))`, flex column, vertically centered. Each section opens as its own full screen (hero-like) on every device; `py` padding stays as safety when content runs taller.
- Mobile-first; every section verified at 360px / 768px / 1280px+ before merge
- Nav: hamburger + slide-down panel below md
- Buttons in CTA strips: full-width on mobile (`w-full sm:w-auto`)
- Card widths: fluid on phones (`min(74-80vw, …)`), clamp-based from sm up
- Type: all display sizes clamp()-based — never fixed px for headings/stats
- No horizontal page overflow anywhere; marquees contain their own overflow with edge fade masks

---

## SEO Requirements (build-blocking)

From 2026 research (seomachine):

1. **JSON-LD `@graph`:** `MusicSchool` (subtype, with geo/openingHours/priceRange) → per-course `Course` (offers INR pricing, provider ref) → `Event` (annual Samaroh) → `FAQPage` (real Q&A only — rich results dead May 2026 but feeds AI Overviews) → `Review` objects
2. **Per-course landing pages** targeting "[discipline] classes sector 106 gurugram" — 6–9 pages, each 800–1200 words: hero w/ location+CTA, syllabus levels, REAL fee range + schedule (no "contact for price"), faculty, reviews w/ fresh dates, 8–12 FAQs, embedded map
3. **Course slugs:** `/courses/[slug]` e.g. `/guitar-classes-gurugram`
4. **NAP consistency:** exact address format everywhere (Paras Dews, Sector 106, Gurugram, Haryana 122006)

## Performance Budget (hard limits)

| Metric | Target |
|---|---|
| LCP (mobile p75) | ≤ 2.5s |
| INP | ≤ 200ms |
| CLS | ≤ 0.1 |
| Total JS | < 300KB gzipped |
| Page weight | < 800KB |
| Hero images | AVIF/WebP, < 100KB each, responsive srcset |

Test target: mid-range Android, 4× CPU throttle. Images: `next/image` everywhere, static export compatible loader.

---

## Language Rule

**The entire site is built in English. All site copy — headings, taglines, buttons, course descriptions, FAQ answers, footer, meta titles/descriptions — must be English only.**

- No Hindi or Hinglish copy anywhere in the UI
- No Devanagari script anywhere on the site
- Proper nouns and musical terms stay as-is: Tansen Sangeet Mahavidyalaya, Kathak, Tabla, raga, Samaroh (event name), Prayag Sangeet Samiti
- Rationale: target parents search in English; consistent English maximizes SEO reach and brand polish

## Do NOT

- No dark mode toggle
- No Hindi/Hinglish/Devanagari copy — site is 100% English (see Language Rule)
- No purple/violet gradients, gradient buttons, 3-col icon-circle feature grids, centered-everything layouts
- No Inter/Poppins/Montserrat/Roboto/system-ui as display or body fonts
- No emoji in UI chrome
- No "contact for pricing" — fees are public
- No stock photos — gallery/celeb imagery is real and already in `public/images/`

## Codebase Map (as built — keep in sync)

```
src/
├── app/
│   ├── layout.tsx          # fonts (Fontshare+Google links), SEO metadata, Header/Footer wrap
│   ├── page.tsx            # homepage composition + MusicSchool JSON-LD
│   ├── globals.css         # @theme tokens + utilities (container-site, section-pad,
│   │                       #   section-screen, kicker)
│   ├── robots.ts / sitemap.ts  # force-static (required by output:'export')
│   └── icon.svg            # T monogram, ink bg + marigold
├── data/
│   ├── site.ts             # config: logo, contact, hours, nav, stats(3), highlights(3), affiliations(+logo paths)
│   ├── courses.ts          # 9 courses w/ slug/name/blurb/image/gallery path
│   ├── home.ts             # heroSlides(4 landscape originals), celebs(5), faqs(5)
│   └── gallery.ts          # legacy gallery items (reused by course images)
├── components/
│   ├── ui/                 # Container · Button(primary bg-brand-blue|outline|inverse-outline) ·
│   │                       #   SectionHeading(kicker+hairline+brush-highlight H2)
│   ├── layout/             # Header(translucent glassmorphic bg-cream/85, taanz.svg logo, Bauhaus geometric nav buttons) ·
│   │                       #   Footer(Bauhaus layout, exact header logo, 4-col nav, 3D action & social buttons)
│   └── home/               # HeroSlider(100dvh-header, object-contain, 2s speed) · StatsBand(6 cards: B&W icons left of titles) ·
│                           #   CoursesGrid(3.5-card slider, clipart icons, 2.5s autoplay) · Affiliations(clean 4-logo grid) ·
│                           #   CelebCarousel(5 celeb cards, 3D offset shadow) · FaqAccordion(3D cards, Q01-Q05 tags, WhatsApp card)
└── lib/utils.ts            # cn() = clsx + tailwind-merge

public/images/
├── brand/                  # taanz.svg (brand emblem)
├── gallery/                # real event/class photos (hero slides + course cards source)
│   └── original/           # landscape originals (~800×533) used by hero slider
├── celebs/                 # 5 celebrity PNGs
├── affiliations/           # 4 official logos (local — never hotlink)
└── brush-highlight.svg     # H2 paint stroke (warm gold gradient, preserveAspectRatio=none)
```

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-24 | Clean-slate rebuild; old V2 code removed (commit 15f8a1d, recoverable at dc56d79) | User wanted fresh start, repeated git confusion |
| 2026-08-24 | Rejected dark-stage aesthetic → Warm-Light Modern Academy | User: conservative parents expect warm light; brand = modern academy not classical museum |
| 2026-08-24 | Hero = pure image slider, zero text/CTA/labels inside | User explicit request ×3 refinements |
| 2026-08-24 | Stats as standalone section with heading | User wanted it visually separate from hero |
| 2026-08-24 | Courses = single-row horizontal slider replacing 3×3 grid | User wanted cards sliding in a single row |
| 2026-08-24 | 9-course catalog supersedes old 6-discipline data.ts | User-provided business truth: Guitar, Piano, Drum, Vocal, Western Vocal, Tabla, Kathak, Dance, Fine Arts |
| 2026-08-24 | One animation lib (motion); drop gsap+lenis from runtime | 300KB JS budget from SEO research |
| 2026-08-24 | System Architecture Rules added: centralized tokens/data/config, one component per section, premium quality bar | User mandate: future updates/upgrades must stay easy; every section separate + premium |
| 2026-08-24 | Container changed from max-width 1120px to full-fluid (padding-only) | User: layout must use full width, no big left/right gaps |
| 2026-08-24 | Hero full-bleed + viewport-fit (`100dvh - --header-h`, min 380px) | User: hero must touch all edges with no gap below on any device |
| 2026-08-24 | Stats redesigned as open editorial columns (huge numerals, hairline dividers) replacing bordered boxes | User called boxed version ugly |
| 2026-08-24 | Mobile hamburger nav added; per-device card/button sizing pass | User mandate: every section flexible on every device |
| 2026-08-24 | All homepage sections made viewport-height (`section-screen` utility) | User: every section should open full-screen like the hero |
| 2026-08-24 | Celebrity section converted from marquee to static grid with richer cards | User wanted the slide stopped and card size/text improved |
| 2026-08-24 | CTA strip section ("Your first class is free...") removed | User explicit request; trial CTAs remain in header + FAQ + course pages |
| 2026-08-24 | Footer redesigned: dark slab → light cream-deep with brand band, brush-highlight headline and system-consistent link columns | User: dark footer did not fit the warm-light site |
| 2026-08-26 | Logo centralized: `site.logo` → `tansen-logo.png` (283×83 transparent PNG), emblem+text replaced in Header | User: use actual brand logo image |
| 2026-08-26 | Primary accent changed from `#E4630D` to `#D86800` (sampled from logo), deep `#A64E00` | User: logo orange is the brand primary |
| 2026-08-26 | Added `--color-brand-blue: #0088C4` / `--color-brand-blue-deep: #006A99` (sampled from logo blue) | User: logo sky-blue for nav links and buttons |
| 2026-08-26 | Header: orange bg, nav links as blue pill buttons, "Book Free Trial" CTA removed, white hamburger | User: header menu blue buttons on orange bg |
| 2026-08-26 | Button primary variant: `bg-brand-blue text-white` site-wide (was `bg-marigold`) | User: all CTAs match logo blue |
| 2026-08-26 | Hero: `object-cover` → `object-contain`, 4 landscape originals (~800×533) replacing square 1024×1024 images | User: images were cropped on all sides, landscape fits better |
| 2026-08-26 | Hero slider autoplay speed updated to 2.0s crossfade (`AUTOPLAY_MS = 2000`) | User request: hero section image slide speed 2s |
| 2026-08-27 | Header & Logo design finalized: clean cream sticky header (`bg-cream/95 backdrop-blur-md`), orange marigold logo pill badge (`bg-marigold text-white rounded-full`) containing `taanz.svg` emblem + 2-line title ("TANSEN SANGEET / MAHAVIDYALAYA (GURUGRAM)") with dark sky-blue `(GURUGRAM)` subtitle tag (`#027ECE`) | User approved logo design and header structure |
| 2026-08-27 | Menu buttons & Header layout redesigned: Segmented Pill Track (`rounded-full bg-cream-deep/80 p-1.5 shadow-inner`) for desktop navigation, pill-shaped mobile hamburger button, and glassmorphic backdrop blur | Redesigned header menu buttons for high editorial polish & visual distinction |
| 2026-08-27 | Header & Navigation Buttons transformed to Bauhaus Geometric Modernism: primary color palette (Red `#EF4444`, Blue `#0088C4`, Yellow `#FACC15`, Marigold `#F56405`), stark black borders (`border-2 border-ink`), hard 3D offset shadows (`shadow-[3.5px_3.5px_0px_#211D17]`), and constructivist asymmetric shapes (Square, Circle, Box, Polygon) | Implemented explicit user request for Bauhaus geometric modernism styling |
| 2026-08-27 | Heading brush highlight SVG (`public/images/brush-highlight.svg`) updated to brand Marigold Orange gradient (`#FF7B1C → #F56405 → #D85800`) with crisp white title typography for perfect brand color harmony | User requested brush highlight color update matching logo orange |
| 2026-08-27 | StatsBand section refactored: Kathak dancer illustration image removed and stats converted into a clean 3-column grid layout with expanded descriptive details for Legacy, Students, and Certification | User request: remove dancer illustration and present stats in 3-column grid with added details |
| 2026-08-27 | StatsBand section expanded with 2nd row: added 3 feature cards for `125+ Centers in 18 Cities` (presence), `Online Interactive Classes` (global reach), and `Offline Campus Classes` (campus studio) with Bauhaus badge accents | User request: add 3 additional cards below primary stats for Centers, Online, and Offline learning |
| 2026-08-27 | Our Courses section completely redesigned into a 3.5-card horizontal slider (`flex-[0_0_calc(100%/3.5-16px)]`) with 2.5s autoplay auto-sliding (pause on hover/touch) and Lucide clipart icons (`Guitar`, `Music`, `Drum`, `Mic`, `Radio`, `Sparkles`, `Flame`, `Zap`, `Palette`) in Bauhaus geometric badges replacing photo thumbnails | User request: redesign courses into a 3.5-card slider with clipart icons & autoplay |
| 2026-08-27 | Accreditation & Affiliations section simplified to a clean, minimal, clutter-free logo card grid with soft border hover transitions and clean typography | User feedback: initial heavy 3D card redesign was too cluttered ("bhut ganda desing ho gya fix karo iss ko simple clean rakho") |
| 2026-08-27 | Our Achievement (Celeb Carousel) refined with tasteful non-aggressive styling: 3D offset shadow cards, image zoom transitions, removed STAR GUEST badge, star icon, index numbers, and header scroll arrow buttons | User request: refine Our Achievement section without aggressive redesign & remove badges/arrows |
| 2026-08-27 | Footer section redesigned into a Bauhaus Constructivist layout: added exact Header logo badge (`taanz.svg`), structured 4-column navigation, 3D offset action buttons (`BOOK FREE TRIAL`, `WHATSAPP US`), and 3D social icon buttons | User request: redesign footer with exact Header logo |
| 2026-08-27 | Why Parents Trust Us section icons updated: removed colorful background badges, converted icons to monochrome Black & White (`text-ink`), and repositioned them to the left side directly before the numbers/titles | User request: remove colorful icon backgrounds, make icons B&W, and place on left side before numbers |
| 2026-08-27 | Section headings typography fixed: updated text color back to bold dark ink (`text-ink`) and optimized brush stroke SVG gradient (`#FFBE6B → #F57C1F → #E0680A`) for crisp 100% legibility and high contrast across all sections | User feedback: section heading titles had white text making them faint/hard to read ("text white or bhut light likha huwa aa rha hai over iss ko fix karo") |
| 2026-08-27 | FAQ section redesigned into Bauhaus 3D card layout: added `Q01`-`Q05` mono index badges, 3D offset shadow cards (`shadow-[4px_4px_0px_#211D17]`), square 3D toggle badges, and a 3D WhatsApp support card | User request: redesign FAQ section |
| 2026-08-27 | Header component updated from solid cream background to translucent glassmorphism (`bg-cream/85 backdrop-blur-md`) with matching mobile drawer backdrop blur (`bg-cream/95 backdrop-blur-md`) | User request: change solid header background to transparent / glassy |
| 2026-08-27 | Section boundary dividers and header/footer border lines updated from heavy 2px solid black borders to delicate hairline dividers (`border-b border-line/60` and `border-b border-ink/15`) for smooth, elegant section transitions | User request: replace solid end section lines with light lines |
| 2026-08-27 | Tagline *"India's Largest Music & Dance School"* integrated into two key prime locations: floating 3D Bauhaus badge in Hero Slider bottom-left and section kicker in "Why Parents Trust Us" | User request: where to add "India's largest Music and dance school" statement |
| 2026-08-27 | Added new **Real Google Reviews Section** (`GoogleReviews.tsx`) featuring 5-star parent testimonials, verified Google badges, author initials, course tags, and direct CTA buttons linked to Google Maps listing (`https://share.google/5PZYIMOBUQm3BhSTJ`) | User request: add auto-updating Google Reviews section linked to share.google URL |
| 2026-08-27 | Google Reviews section cards updated from solid black to soft light black borders (`border-2 border-ink/30`) and soft subtle offset shadows (`shadow-[4px_4px_0px_rgba(33,29,23,0.12)]`) for an elegant, non-harsh look | User request: use light black instead of solid pitch black for background shadow/borders |
| 2026-08-27 | **Centralized & Uniform Card Design System**: Standardized all cards across all components (`StatsBand.tsx`, `CoursesGrid.tsx`, `Affiliations.tsx`, `CelebCarousel.tsx`, `GoogleReviews.tsx`, `FaqAccordion.tsx`) to use soft light-black border (`border-2 border-ink/30`) and soft 3D shadow (`shadow-[4px_4px_0px_rgba(33,29,23,0.12)]`). **Buttons & Logo Badges**: All interactive CTA buttons, navigation links, slider arrows, and brand logo badges (`Header.tsx` & `Footer.tsx`) retain solid black 2px borders (`border-2 border-ink`) and solid black 3D shadows (`shadow-[2.5px_2.5px_0px_#211D17]`) for high contrast and tactile feedback | User request: keep cards soft light black shadow, but make buttons & logo badges solid black |
| 2026-08-27 | Added **Gallery** button to Header navigation (`site.nav`) and built dedicated `/gallery` page (`src/app/gallery/page.tsx`) rendering all 38 original photos from `public/images/gallery/original/` with category tabs (Celebrity Events, Dance Recitals, Music & Instruments, Studio & Campus) and full-screen Lightbox modal preview | User request: add Gallery button in header menu and create gallery page with all images from /gallery/original/ |
| 2026-08-27 | Updated Header and Footer Brand Logo Badges to force a full Home page reload (`window.location.href = '/'`) when clicked while already on the Home page (`/`), ensuring instant page refresh | User bug report: logo par click karne par home page reload nahi hota fix karo |
| 2026-08-27 | Deployed Next.js V2 static export to root domain `https://tansengurugram.com` (`public_html/tansengurugram`) and completely deleted legacy `/demo` directory (`https://tansengurugram.com/demo/` → 404) | User request: deploy on tansengurugram.com and remove /demo project on tansengurugram.com/demo |






| 2026-08-27 | Header shape enhanced from flat rectangle to Organic Wave Bottom Curve SVG edge with glassmorphic backdrop blur & ambient shadow | User requested unique modern wave/non-rectangular shape replacing basic straight line box |
