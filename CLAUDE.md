# CLAUDE.md – Developer & AI Assistant Guide

This document provides quick reference instructions, guidelines, and commands for developing and modifying the **Tansen Sangeet Mahavidyalaya** Next.js application.

---

## 🛠️ Essential Development Commands

```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📁 Key File Locations

- **Main Landing Page**: [`src/app/page.tsx`](file:///home/shiva/tansen_v1/src/app/page.tsx)
- **Root Layout & Fonts**: [`src/app/layout.tsx`](file:///home/shiva/tansen_v1/src/app/layout.tsx)
- **Global Styles & Tokens**: [`src/app/globals.css`](file:///home/shiva/tansen_v1/src/app/globals.css)
- **Header & Navigation**: [`src/components/layout/Header.tsx`](file:///home/shiva/tansen_v1/src/components/layout/Header.tsx)
- **Footer**: [`src/components/layout/Footer.tsx`](file:///home/shiva/tansen_v1/src/components/layout/Footer.tsx)
- **Page Sections**: [`src/components/sections/`](file:///home/shiva/tansen_v1/src/components/sections)
- **Data Schemas & Mock Data**: [`src/data/`](file:///home/shiva/tansen_v1/src/data)
- **Specification Document**: [`prompt.md`](file:///home/shiva/tansen_v1/prompt.md)
- **Agent Rules**: [`AGENTS.md`](file:///home/shiva/tansen_v1/AGENTS.md)

---

## 🎨 Code & Style Guidelines

### 1. Component Rules
- Use `'use client'` at the top of components that require client-side interactivity, state, or hooks (e.g. Framer Motion, event listeners).
- Keep component signatures clean with TypeScript interfaces defined or imported.
- Lucide React icon names: verify singular/plural icon names before importing (e.g., `Drum` not `Drums`).

### 2. Design Tokens & Styling
- Primary Brand Accent: Gold `#D4952B`
- Dark Accent: `#0A101C`
- Use custom font CSS variables defined in `layout.tsx`:
  - `var(--font-roboto-var)` for standard body copy.
  - `var(--font-poppins-var)` for section headings and cards.
  - `var(--font-roboto-slab-var)` for hero/display titles.
  - `var(--font-playfair-var)` for decorative accents.

### 3. Data Flow
- Place static content, FAQs, course lists, and testimonials in [`src/data/`](file:///home/shiva/tansen_v1/src/data).
- Export type-safe interfaces alongside mock data arrays.

---

## 📑 Detailed Documentation References

- See [`README.md`](file:///home/shiva/tansen_v1/README.md) for full project architecture.
- See [`prompt.md`](file:///home/shiva/tansen_v1/prompt.md) for master reverse-engineering requirements.
- See [`AGENTS.md`](file:///home/shiva/tansen_v1/AGENTS.md) for Next.js agent execution rules.
