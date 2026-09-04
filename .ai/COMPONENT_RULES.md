# Component Rules — Tansen Sangeet Mahavidyalaya Website

## Component Organization

```
src/components/
├── cards/           # Reusable card components
│   └── CourseCard.tsx
├── common/          # Shared utilities
│   └── FloatingAction.tsx
├── courses/         # Course page templates
│   ├── CoursePageTemplate.tsx    # Data-driven template (preferred)
│   ├── ClassicalVocalContent.tsx # Hardcoded variant (legacy)
│   └── FineArtsContent.tsx      # Hardcoded variant (legacy)
├── layout/          # Structural components
│   ├── Header.tsx    # Composes TopBar + MainNav
│   ├── TopBar.tsx    # Server component
│   ├── MainNav.tsx   # Client component (mega menu)
│   ├── Footer.tsx    # Client component
│   └── Container.tsx # Server component (width utility)
└── sections/        # Homepage sections
    ├── Hero.tsx         # Image slider + stats
    ├── CoursesGrid.tsx  # Horizontal scroll carousel
    ├── WhyChooseUs.tsx  # Feature grid (server)
    ├── Testimonials.tsx # Dual slider
    ├── Stats.tsx        # Stats bar
    ├── FAQ.tsx          # Accordion FAQ
    ├── Gallery.tsx      # Photo grid + lightbox
    ├── BookDemo.tsx     # CTA section (server)
    └── Accreditation.tsx # Logo grid (server)
```

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `CourseCard`, `FloatingAction` |
| Files | PascalCase | `CourseCard.tsx`, `MainNav.tsx` |
| Data files | kebab-case | `course-details.ts`, `site-content.ts` |
| Types/interfaces | PascalCase | `Course`, `BlogPost`, `DetailedCourseData` |
| Constants | camelCase or UPPER_SNAKE | `courseCategories`, `BROWSE_READY` |

## Server vs Client Components

### Server Components (4 total)

| Component | File | Why Server |
|-----------|------|-----------|
| `TopBar` | `layout/TopBar.tsx` | Static content, no interactivity |
| `Container` | `layout/Container.tsx` | Pure presentational |
| `WhyChooseUs` | `sections/WhyChooseUs.tsx` | Static feature cards |
| `Accreditation` | `sections/Accreditation.tsx` | Static logo grid |

### Client Components (15 total)

All interactive components use `'use client'`:
- Components with `useState` (accordions, menus, filters, sliders)
- Components with event handlers (click, scroll, hover)
- Components with browser APIs (scroll listener)

### Pattern: Server Wrapper + Client Child

Contact page uses this pattern:
```tsx
// page.tsx (Server) — metadata, JSON-LD, wraps client
export default function ContactPage() {
  return <ContactClient />;
}

// ContactClient.tsx (Client) — all interactive UI
'use client';
export default function ContactClient() { ... }
```

## Data Import Patterns

### Pattern 1: Centralized data modules (preferred)

```tsx
import { courses } from '@/data/courses';
import { siteContent } from '@/data/site-content';
```

### Pattern 2: Inline data (used in some components)

```tsx
// Hero.tsx — slides and stats are hardcoded arrays
const slides = [
  { tagline: '...', title: '...', ... },
  // ...
];
```

### Components using centralized data:
- `CourseCard` → `@/data/courses`
- `CoursesGrid` → `@/data/courses`
- `MainNav` → `@/data/site-content`
- `Footer` → `@/data/site-content`
- `FloatingAction` → `@/data/site-content`
- `Stats` → `@/data/site-content`
- `FAQ` → `@/data/faq`
- `CoursePageTemplate` → `@/data/course-details`

### Components with inline data:
- `Hero` (slides, stats)
- `WhyChooseUs` (features)
- `Accreditation` (logos)
- `Testimonials` (quotes, celebrities)
- `Gallery` (images)

## Course Page Template System

### Preferred approach: `CoursePageTemplate`

Data-driven component that accepts `DetailedCourseData`:

```tsx
<CoursePageTemplate data={detailedCoursesData[slug]} />
```

### Legacy approach (hardcoded)

`ClassicalVocalContent` and `FineArtsContent` are 700-800 line hardcoded variants of the same layout. These predate the template and should eventually be migrated.

### Fallback data generation

`courses/[category]/[slug]/page.tsx` generates fallback data for courses that don't have entries in `detailedCoursesData`, ensuring every course has a detail page.

## Component API

### CourseCard

```tsx
interface CourseCardProps {
  title: string;
  category: string;
  image: string;
  fullSlug: string;
}
```

### Container

```tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'; // default: 'lg'
  className?: string;
  children: React.ReactNode;
}
```

### CoursePageTemplate

```tsx
interface CoursePageTemplateProps {
  data: DetailedCourseData; // See course-details.ts for full shape
}
```

## Styling Rules

1. Use Tailwind utility classes exclusively
2. No CSS modules or styled-components
3. Global styles only in `globals.css` for keyframes and utilities
4. Use `container-site` class for page width constraint
5. Use `@/components/layout/Container` component for alternative sizing
6. All colors reference brand tokens or Tailwind palette
7. Responsive: mobile-first with `sm:`, `md:`, `lg:`, `xl:` prefixes

## Icon Usage

| Library | Import | Usage |
|---------|--------|-------|
| lucide-react | `import { Icon } from 'lucide-react'` | All UI icons (90% of usage) |
| react-icons/fa6 | `import { FaWhatsapp } from 'react-icons/fa6'` | Social media icons |

Common lucide icons used: `ChevronRight`, `ChevronDown`, `ArrowRight`, `CheckCircle2`, `Phone`, `Mail`, `MapPin`, `Clock`, `Award`, `Users`, `Star`, `Search`, `X`, `Menu`.
