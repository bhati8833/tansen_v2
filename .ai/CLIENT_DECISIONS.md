# Client Decisions Log — Tansen Sangeet Mahavidyalaya Website

## Architecture Decisions

### 1. Next.js App Router
- **Decision**: Use Next.js App Router (not Pages Router)
- **Rationale**: Modern React patterns, server components, better SEO
- **Impact**: All routing uses `src/app/` directory structure

### 2. Static Export
- **Decision**: Static site generation with `output: 'export'`
- **Rationale**: No server costs, fast CDN delivery, simple deployment
- **Impact**: No server-side features (API routes, ISR, middleware)

### 3. Tailwind CSS v4
- **Decision**: Tailwind CSS for styling (not CSS modules, styled-components)
- **Rationale**: Rapid development, consistent design system, utility-first
- **Impact**: All styling via Tailwind classes in JSX

### 4. Data Layer Architecture
- **Decision**: Centralized data modules in `src/data/`
- **Rationale**: Single source of truth, easy content updates, type-safe
- **Impact**: All content in TypeScript files, not CMS or markdown

### 5. Course Template System
- **Decision**: Data-driven `CoursePageTemplate` component
- **Rationale**: Consistency across 8 courses, easy to add new courses
- **Impact**: Add new course = add data object to `course-details.ts`

### 6. Icon Libraries
- **Decision**: lucide-react (primary) + react-icons (social icons only)
- **Rationale**: lucide-react for UI icons, react-icons for brand icons
- **Impact**: Two icon imports, but minimal overhead

### 7. No Global State Management
- **Decision**: No Redux, Zustand, or Context API
- **Rationale**: Static site with minimal interactive state
- **Impact**: Each component manages its own state locally

### 8. Google Fonts via next/font
- **Decision**: Self-host Google Fonts via `next/font`
- **Rationale**: Better performance, no external requests, FOUT prevention
- **Impact**: 4 fonts loaded with CSS variable system

## Design Decisions

### 9. Dark Hero Pattern
- **Decision**: All page heroes use `#0A101C` dark background
- **Rationale**: Premium feel, consistent branding, visual hierarchy
- **Impact**: Every page starts with dark hero section

### 10. Gold Accent Color
- **Decision**: `#D4952B` / `#E37216` as primary accent
- **Rationale**: Premium, warm, educational feel
- **Impact**: CTAs, badges, highlights use gold/orange

### 11. Mobile-First Design
- **Decision**: Design for mobile first, enhance for desktop
- **Rationale**: Primary audience accesses via mobile
- **Impact**: All responsive classes use mobile-first breakpoints

## Content Decisions

### 12. Hindi-English Mix
- **Decision**: Primarily English content with Indian context
- **Rationale**: Broader reach, professional appearance
- **Impact**: All UI text in English, cultural context preserved

### 13. 8 Course Pages
- **Decision**: Individual pages for each course
- **Rationale**: SEO benefit, detailed information, conversion focused
- **Impact**: 8 detailed course pages + 4 category pages

### 14. Celebrity Testimonials
- **Decision**: Feature celebrity endorsements prominently
- **Rationale**: Build credibility and trust
- **Impact**: Homepage testimonials section with 5 celebrities
