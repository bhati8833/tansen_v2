# Performance Standards — Tansen Sangeet Mahavidyalaya Website

## Current Optimizations

### Static Generation

- Full SSG via `output: 'export'` in next.config.ts
- Pre-rendered HTML for all pages
- No server-side rendering at request time

### Image Optimization

- All images use `next/image` component
- Automatic WebP conversion
- Responsive `sizes` attribute on hero/detail images
- `priority` loading on above-the-fold images
- Lazy loading by default

### Font Optimization

- Google Fonts loaded via `next/font` (self-hosted)
- `display: 'swap'` on all fonts
- CSS variable system for font access
- 4 fonts loaded (Roboto, Roboto Slab, Poppins, Playfair Display)

### CSS

- Tailwind CSS v4 with PostCSS
- Utility-first approach (minimal custom CSS)
- Only 5 keyframe animations defined
- No CSS-in-JS runtime

## Performance Concerns

### Unused Dependencies

- `framer-motion` (^13.1.1) is installed but not imported anywhere
- Adds ~40KB gzipped to bundle size unnecessarily

### Component Architecture

- 15 of 19 components are client components
- Client components add JavaScript bundle size
- Consider converting static sections to server components

### Image Assets

- Images in `public/` not optimized before build
- No image compression pipeline
- Gallery images could benefit from blur placeholders

### Bundle Size

- `react-icons` imported for social media icons (large library)
- Only 6 icons used from react-icons (FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter, FaInstagram, FaWhatsapp)
- Consider importing individual icons or using SVG directly

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | ~1.2s (SSG) |
| Largest Contentful Paint | < 2.5s | ~2.0s (SSG) |
| Cumulative Layout Shift | < 0.1 | ~0.05 |
| Total Blocking Time | < 200ms | ~150ms |
| Bundle Size (JS) | < 200KB | ~180KB estimated |

## Recommendations

1. Remove `framer-motion` dependency (unused)
2. Import specific icons from `react-icons/fa6` instead of full library
3. Add blur placeholders to `next/image` for LCP images
4. Convert more section components to server components
5. Consider dynamic imports for below-the-fold sections
