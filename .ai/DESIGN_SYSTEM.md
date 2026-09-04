# Design System — Tansen Sangeet Mahavidyalaya Website

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand-orange` | `#E37216` | Primary brand, CTAs, accents, badges |
| `--color-brand-gold` | `#CF9531` | Secondary gold, hover states |
| `--color-brand-green` | `#25D366` | WhatsApp, success states |
| `--color-dark` | `#0A101C` | Hero backgrounds, footer, dark sections |
| `--color-cream` | `#FCF7F1` | Gallery bg, alternate section bg |
| `--color-cream-light` | `#FDF9F3` | TopBar, WhyChooseUs bg |
| `--color-text` | `#333333` | Body text (default) |

### Extended Palette (from Tailwind classes)

| Color | Tailwind | Usage |
|-------|----------|-------|
| White | `bg-white` | Primary content bg |
| Gray 50 | `bg-gray-50` | Alternate sections |
| Gray 100 | `bg-gray-100` | Subtle backgrounds |
| Gray 200 | `border-gray-200` | Borders |
| Gray 500 | `text-gray-500` | Secondary text |
| Gray 600 | `text-gray-600` | Body secondary |
| Gray 700 | `text-gray-700` | Body primary |
| Gray 800 | `text-gray-800` | Dark text |
| Gray 900 | `text-gray-900` | Headings |
| Amber 50 | `bg-amber-50` | Warning callouts |
| Amber 100 | `bg-amber-100` | Icon backgrounds |
| Orange 50 | `bg-orange-50` | Brand tint |
| Orange 100 | `bg-orange-100` | Card accents |
| Orange 500 | `text-orange-500` | Links, highlights |
| Orange 600 | `text-orange-600` | Hover links |

## Typography

### Font Stack

| Element | Font | Weights |
|---------|------|---------|
| Body | Roboto | 300, 400, 500, 700 |
| Headings (H1, H2) | Poppins | 600, 700 |
| Display/Accent | Playfair Display | 400, 600, 700 |
| Monospace/Labels | Roboto Slab | 400, 600, 700 |

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (page title) | 2.5rem (40px) / mobile: 2rem | 700 | 1.2 |
| H2 (section title) | 2rem (32px) / mobile: 1.5rem | 700 | 1.3 |
| H3 (card title) | 1.25rem (20px) | 600 | 1.4 |
| Body | 1rem (16px) | 400 | 1.6 |
| Small/Label | 0.875rem (14px) | 500 | 1.5 |
| Tagline | 0.75rem (12px) | 600 | 1.4 (uppercase, letter-spacing) |

## Spacing & Layout

### Container

```css
.container-site {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1rem;        /* mobile */
  padding: 0 1.5rem;      /* sm */
  padding: 0 2rem;        /* lg */
}
```

### Section Spacing

| Breakpoint | Vertical Padding |
|------------|-----------------|
| Mobile | `py-12` (48px) |
| Tablet | `py-16` (64px) |
| Desktop | `py-20` (80px) |

### Grid Systems

| Context | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Course cards | 3 cols | 2 cols | 1 col |
| Learning modules | 3 cols | 2 cols | 1 col |
| Feature cards | 3 cols | 2 cols | 1 col |
| Gallery | 5 cols | 3 cols | 2 cols |
| Footer | 4 columns | 2 columns | 1 column |

## Components

### Buttons

| Type | Style | Usage |
|------|-------|-------|
| Primary | `bg-[#E37216] text-white rounded-full px-8 py-3 hover:bg-[#c96213]` | "Book Free Demo" |
| Secondary | `border-2 border-[#E37216] text-[#E37216] rounded-full px-8 py-3 hover:bg-[#E37216] hover:text-white` | "Enquire Now" |
| White | `bg-white text-[#E37216] rounded-full px-8 py-3` | On dark backgrounds |
| Ghost | `text-gray-600 hover:text-[#E37216]` | Navigation links |

### Cards

All cards share:
- `rounded-xl` border radius
- `shadow-sm` default, `shadow-md` on hover
- `hover:-translate-y-1` lift effect
- `transition-all duration-300`
- Consistent padding (`p-6` or `p-8`)

### Hero Section Pattern

Every page hero uses:
- `bg-[#0A101C]` dark background
- Radial gradient grid overlay (CSS `radial-gradient`)
- Decorative blurred circles
- Breadcrumb with `ChevronRight` separators
- Gold accent text (`text-[#D4952B]` or `text-amber-400`)
- Title in white, subtitle in gray-300

### Section Tag

```css
.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #E37216;
  background: rgba(227, 114, 22, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
}
```

## Animations

| Animation | CSS | Duration | Usage |
|-----------|-----|----------|-------|
| fadeIn | opacity 0→1 | 0.5s | Page sections |
| slideUp | translateY(20px)→0 | 0.5s | Section entrance |
| slideDown | translateY(-10px)→0 | 0.3s | Dropdown menus |
| scaleIn | scale(0.95)→1 | 0.3s | Card hover |
| marquee | translateX(0)→-50% | 30s infinite | Scrolling text |
| animate-ping | scale 1→2, opacity 1→0 | 1s infinite | WhatsApp pulse |
| Hover lift | translateY(0)→-4px | 0.3s | Cards |

## Responsive Breakpoints

| Prefix | Min Width | Device |
|--------|-----------|--------|
| (default) | 0px | Mobile |
| `sm:` | 640px | Large mobile |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

## Dark Section Pattern

Used for heroes, footers, and CTA sections:
- Background: `#0A101C`
- Text: white / gray-300
- Accent: `#E37216` (orange) or `#D4952B` (gold)
- Decorative: radial gradient grid overlay with subtle lines
