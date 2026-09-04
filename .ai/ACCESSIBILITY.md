# Accessibility Standards — Tansen Sangeet Mahavidyalaya Website

## Current Compliance

### Semantic HTML

- [x] `<header>`, `<main>`, `<footer>` landmarks in layout
- [x] `<nav>` for navigation
- [x] `<h1>` through `<h6>` heading hierarchy
- [x] `<article>` for blog posts
- [x] `<section>` for content sections
- [x] `<form>` for contact form
- [x] `<button>` for interactive elements
- [x] `<a>` for links

### ARIA Attributes

- [x] `aria-label` on icon-only buttons (search, close, menu)
- [x] `aria-expanded` on accordion triggers
- [x] `aria-hidden="true"` on decorative elements
- [x] `role="dialog"` on modals (lightbox, mobile menu)
- [ ] `aria-live` regions for dynamic content (missing)
- [ ] `aria-describedby` for form error messages (missing)

### Keyboard Navigation

- [x] Tab order follows visual layout
- [x] Focus states visible on buttons and links
- [x] Escape key closes modals/mobile menu
- [x] Enter/Space activates buttons
- [ ] Skip-to-content link (missing)
- [ ] Focus trap in modals (partial)

### Images

- [x] Alt text on `next/image` components
- [ ] Decorative images use empty alt (needs audit)
- [ ] Complex images have detailed descriptions (needs audit)

### Color & Contrast

- [ ] WCAG AA contrast ratios (needs audit)
- [ ] Don't rely on color alone for information (needs audit)
- [ ] Focus indicators have sufficient contrast (needs audit)

### Forms

- [x] Labels on form inputs
- [x] Required field indicators
- [ ] Error messages associated with fields via `aria-describedby`
- [ ] Form validation announcements for screen readers
- [ ] Logical tab order through form fields

## Recommendations

1. Add skip-to-content link
2. Implement focus trapping in modals
3. Add `aria-live` regions for form submission status
4. Audit color contrast ratios
5. Add `aria-describedby` for form validation errors
6. Test with screen readers (NVDA, VoiceOver)
7. Add reduced-motion media query support
