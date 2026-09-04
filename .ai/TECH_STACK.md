# Tech Stack — Tansen Sangeet Mahavidyalaya Website

## Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.3.3 | React framework (App Router) |
| React | 19.2.8 | UI library |
| React DOM | 19.2.8 | DOM rendering |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first CSS |
| @tailwindcss/postcss | ^4 | PostCSS integration |

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| framer-motion | ^13.1.1 | Animation library (installed but NOT currently used) |
| lucide-react | ^1.34.0 | Icon library (primary icon set) |
| react-icons | ^5.7.0 | Additional icons (Facebook, YouTube, WhatsApp, Instagram, X/Twitter) |

## Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @types/node | ^20 | Node.js types |
| @types/react | ^19 | React types |
| @types/react-dom | ^19 | React DOM types |
| eslint | ^9 | Linting |
| eslint-config-next | 16.3.3 | Next.js ESLint config |

## Google Fonts (loaded via next/font)

| Font | Weights | CSS Variable | Usage |
|------|---------|--------------|-------|
| Roboto | 300, 400, 500, 700 | `--font-roboto-var` | Body text (primary) |
| Roboto Slab | 400, 600, 700 | `--font-roboto-slab-var` | Headings (secondary) |
| Poppins | 300, 400, 500, 600, 700 | `--font-poppins-var` | UI elements |
| Playfair Display | 400, 600, 700 | `--font-playfair-var` | Accent/display |

## Build & Deploy

```bash
# Development
npm run dev        # Next.js dev server

# Production build
npm run build      # Generates static export in /out
npm run start      # Production server

# Lint
npm run lint       # ESLint check
```

## Static Export

The site is configured for static export (`output: 'export'` in next.config.ts). The `out/` directory contains the production build ready for deployment.

## Environment Variables

`.env.local` contains:
- Site configuration values
- No API keys or secrets (form submission is simulated)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Custom scrollbar styling (webkit)
