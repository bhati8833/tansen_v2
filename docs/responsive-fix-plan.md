# Responsive Fix Implementation Plan

Based on audit in `docs/responsive-audit.md`. All fixes preserve desktop layouts.

---

## RESP-001 — WhatsApp Ping Animation Overflow

### Problem
`animate-ping` span with `-inset-1` extends beyond viewport boundary (100–400px right).

### Root Cause
No `overflow-hidden` on the animated element's parent `<a>` tag.

### Intended Fix
Add `overflow-hidden` to the `<a>` element containing the ping animation.

### Files Likely Affected
- `src/components/common/FloatingAction.tsx`

### Desktop Risk
None — ping animation is purely decorative and clipping is invisible.

### Mobile Behaviour
Ping ring clips to button boundary. No visual change — ring was already invisible due to `body overflow-x: hidden`.

### Verification
Confirm `overflow-hidden` class present on the `<a>` element.

---

## RESP-002 — Footer Excessive Mobile Height

### Problem
Footer reaches 1575px at 320px (2.8× desktop height of 554px).

### Root Cause
4-column grid stacks to single column with `gap-10` (2.5rem), `pt-12`, `pb-12`, and `space-y-5` internal spacing.

### Intended Fix
Reduce mobile gap to `gap-8`, reduce padding (`pt-10 sm:pt-12`, `pb-8 sm:pb-12`), reduce internal column spacing (`space-y-4 sm:space-y-5`), reduce legal bar padding (`py-5 sm:py-6`).

### Files Likely Affected
- `src/components/layout/Footer.tsx`

### Desktop Risk
None — all changes use responsive prefixes; desktop values unchanged.

### Mobile Behaviour
Footer becomes approximately 10–15% shorter on mobile. All content preserved.

### Verification
Measure footer height at 320px and 375px before/after.

---

## RESP-003 — Gallery Filter Button Overflow

### Problem
Filter buttons extend beyond viewport (left: -214, right: 534 at 320px).

### Root Cause
`overflow-x-auto` container with `whitespace-nowrap` buttons. Buttons scroll but extend beyond container.

### Intended Fix
Add `flex-wrap` to container, remove `whitespace-nowrap` from buttons. Buttons wrap to multiple lines on narrow screens.

### Files Likely Affected
- `src/app/gallery/page.tsx`

### Desktop Risk
None — on desktop, buttons fit in one row; wrapping has no effect.

### Mobile Behaviour
Buttons wrap to 2–3 rows on mobile. All buttons visible without scrolling.

### Verification
Confirm no horizontal page overflow. Confirm all filter buttons visible at 320px.

---

## RESP-004 — Blog Filter Button Overflow

### Problem
Same pattern as RESP-003. Blog filter buttons overflow at narrow viewports.

### Root Cause
Same as RESP-003.

### Intended Fix
Add `flex-wrap` to container, remove `whitespace-nowrap` from buttons.

### Files Likely Affected
- `src/app/blog/page.tsx`

### Desktop Risk
None.

### Mobile Behaviour
Buttons wrap on mobile. All visible.

### Verification
Same as RESP-003.

---

## RESP-005 — CoursePageTemplate Intro Image Fixed Height

### Problem
Intro image uses `h-[340px]` with no responsive variant. On 320px, image is 312px tall (42% of viewport).

### Root Cause
Fixed height without responsive prefix.

### Intended Fix
Change to `h-[220px] sm:h-[280px] lg:h-[340px]`.

### Files Likely Affected
- `src/components/courses/CoursePageTemplate.tsx`

### Desktop Risk
None — `lg:h-[340px]` preserves desktop height.

### Mobile Behaviour
Image is 220px on mobile (27% of 812px viewport), 280px on sm, 340px on lg+.

### Verification
Measure image container height at 320, 375, 768, 1280px.

---

## RESP-006 — CoursePageTemplate Hero Image Height

### Problem
Hero image uses `h-[320px] sm:h-[400px]`. At 320px, a 320px image is square-ish.

### Root Cause
No height for narrowest viewports.

### Intended Fix
Change to `h-[240px] sm:h-[320px] lg:h-[400px]`.

### Files Likely Affected
- `src/components/courses/CoursePageTemplate.tsx`

### Desktop Risk
None — `lg:h-[400px]` preserves desktop height.

### Mobile Behaviour
Image is 240px on 320px screens, better proportioned.

### Verification
Measure at 320, 375, 768, 1280px.

---

## RESP-007 — StudentSuccessStories Fixed Card Height

### Problem
Card uses `h-[360px] sm:h-[320px] md:h-[300px]`. Fixed height may clip quotes or leave blank space.

### Root Cause
Fixed heights instead of content-driven height.

### Intended Fix
Change to `min-h-[280px] sm:min-h-[260px] md:min-h-[240px]` with `flex flex-col`. Card grows with content.

### Files Likely Affected
- `src/components/sections/StudentSuccessStories.tsx`

### Desktop Risk
None — `min-h` is a floor, not a ceiling. Desktop content will naturally fill space.

### Mobile Behaviour
Card height adapts to content. Minimum height prevents collapse.

### Verification
Check card height at 320, 375, 1280px. Confirm no clipping.

---

## RESP-008 — Hero Section Aspect Ratio

### Problem
`aspectRatio: '1537 / 1023'` with `maxHeight: 'min(80vh, 800px)'`. At 320px, hero is 213px.

### Assessment
Low risk — DOM measurements show reasonable heights. No fix needed.

---

## RESP-009 — About Page Image Fixed Height

### Problem
Image uses `h-[360px] sm:h-[420px]`. At 320px, image is 352px (43% of viewport).

### Root Cause
No height for narrowest viewports.

### Intended Fix
Change to `h-[260px] sm:h-[340px] lg:h-[420px]`.

### Files Likely Affected
- `src/app/about/page.tsx`

### Desktop Risk
None — `lg:h-[420px]` preserves desktop height.

### Mobile Behaviour
Image is 260px on 320px screens.

### Verification
Measure at 320, 375, 1280px.

---

## RESP-010 — Gallery Lightbox Landscape

### Problem
`h-[60vh]` may be too short in landscape mode (225px at 812×375).

### Assessment
Edge case — modal requires user interaction. No fix needed.

---

## RESP-011 — Legal Page Sidebar Hidden Below lg

### Problem
Sidebar uses `hidden lg:block`. Tablet users (768–1023px) cannot access sidebar navigation.

### Root Cause
Breakpoint too restrictive.

### Intended Fix
Change to `hidden md:block` on all 4 legal pages.

### Files Likely Affected
- `src/app/privacy/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/cookie-policy/page.tsx`
- `src/app/disclaimer/page.tsx`

### Desktop Risk
None — sidebar was already visible on desktop.

### Mobile Behaviour
Sidebar visible on tablets (768px+). Hidden on phones (<768px).

### Verification
Check sidebar visibility at 768, 1024, 1280px.

---

## RESP-012 — Course Learning Modules Tall Sections

### Problem
Modules grid uses `grid-cols-1 md:grid-cols-2`. On mobile, 7–9 modules stack to 2000+ px.

### Root Cause
Single-column grid on mobile with generous spacing.

### Intended Fix
Change grid to `sm:grid-cols-2 lg:grid-cols-3` (2 columns starting at 640px instead of 768px). Reduce gap to `gap-4 sm:gap-6`. Also apply same pattern to audience cards grid.

### Files Likely Affected
- `src/components/courses/CoursePageTemplate.tsx`

### Desktop Risk
None — `lg:grid-cols-3` preserves desktop layout.

### Mobile Behaviour
Modules display in 2 columns from 640px. Section height approximately halved on wider mobile screens.

### Verification
Measure module section height at 375, 768, 1280px.
