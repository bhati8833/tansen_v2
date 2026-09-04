# Architecture — Tansen Sangeet Mahavidyalaya Website

## Folder Structure

```
tansen_v1/
├── .ai/                    # AI agent documentation (this folder)
├── docs/                   # Content reference documents
│   └── tansen_website_content.md
├── public/                 # Static assets (images, logos)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout (Header + Footer + FloatingAction)
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles + Tailwind
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog index + [slug] detail
│   │   ├── contact/        # Contact page (server wrapper + client child)
│   │   ├── courses/        # Courses index + [category]/[slug] dynamic
│   │   ├── faq/            # FAQ page
│   │   ├── gallery/        # Gallery page
│   │   ├── terms/          # Terms & Conditions
│   │   ├── privacy/        # Privacy Policy
│   │   ├── cookie-policy/  # Cookie Policy
│   │   └── disclaimer/     # Disclaimer
│   ├── components/
│   │   ├── cards/          # Reusable card components
│   │   ├── common/         # Shared utilities (FloatingAction)
│   │   ├── courses/        # Course page templates
│   │   ├── layout/         # Header, Footer, TopBar, MainNav, Container
│   │   ├── sections/       # Homepage section components
│   │   └── ui/             # (Empty - no primitives yet)
│   ├── data/               # All content/data modules
│   ├── hooks/              # Custom React hooks (empty)
│   ├── lib/                # Utility functions (empty)
│   ├── scripts/            # Build scripts (empty)
│   └── types/              # TypeScript type definitions (empty)
├── AGENTS.md               # Next.js agent rules
├── CLAUDE.md               # References AGENTS.md
├── design.md               # Course page design system spec
├── package.json
└── tsconfig.json
```

## Routing

All routes are defined via the App Router file-system convention:

| Route | File | Type | Description |
|-------|------|------|-------------|
| `/` | `app/page.tsx` | Server | Homepage |
| `/about` | `app/about/page.tsx` | Server | About page |
| `/courses` | `app/courses/page.tsx` | Client | All courses listing |
| `/courses/[category]` | `app/courses/[category]/page.tsx` | Server | Category page |
| `/courses/[category]/[slug]` | `app/courses/[category]/[slug]/page.tsx` | Server | Course detail |
| `/blog` | `app/blog/page.tsx` | Client | Blog listing |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Server | Blog post detail |
| `/contact` | `app/contact/page.tsx` | Server (wraps client) | Contact page |
| `/faq` | `app/faq/page.tsx` | Client | FAQ page |
| `/gallery` | `app/gallery/page.tsx` | Client | Gallery page |
| `/terms` | `app/terms/page.tsx` | Server | Terms & Conditions |
| `/privacy` | `app/privacy/page.tsx` | Server | Privacy Policy |
| `/cookie-policy` | `app/cookie-policy/page.tsx` | Server | Cookie Policy |
| `/disclaimer` | `app/disclaimer/page.tsx` | Server | Disclaimer |

## Data Flow

```
src/data/ (content modules)
    ↓ imported by
src/app/ (pages) or src/components/ (components)
    ↓ renders
Browser (HTML + CSS + minimal client-side state)
```

### Data Layer

7 centralized data modules in `src/data/`:

| File | Exports | Used By |
|------|---------|---------|
| `site-content.ts` | `siteContent` (navigation, footer, contact, social, stats) | Layout, Header, Footer, Contact, Legal pages |
| `courses.ts` | `courses[]`, `courseCategories[]` | Courses listing, category pages, CourseCard |
| `course-details.ts` | `detailedCoursesData` (8 detailed course objects) | CoursePageTemplate |
| `about.ts` | `aboutData` | About page |
| `blog.ts` | `blogPosts[]` | Blog listing, blog detail |
| `faq.ts` | `faqs[]`, `homeFaqs[]`, page headers/footers | FAQ page, Homepage FAQ section |
| `testimonials.ts` | `testimonials[]`, `celebrities[]` | Testimonials section |

### Client-Side State

Minimal client-side state — only for interactive features:
- **Blog**: search query, tag filter
- **FAQ**: search query, category filter, accordion open state
- **Gallery**: category filter, lightbox state
- **Courses**: search query, category filter
- **Contact**: form fields, submission state
- **Header**: scroll position, mobile menu, dropdown menu

No global state management (Redux, Zustand, etc.) — each page manages its own state locally.

## Static Generation

The site uses `generateStaticParams` for dynamic routes:
- `/courses/[category]` — generates all 4 category pages
- `/courses/[category]/[slug]` — generates all 8 course detail pages
- `/blog/[slug]` — generates all 3 blog post pages

## Layout System

```
layout.tsx (root)
├── <Header />
│   ├── TopBar (admissions notice, contact, social)
│   └── MainNav (logo, nav items, mega menu, mobile menu)
├── <main>{children}</main>
├── <Footer />
│   ├── Brand column
│   ├── Quick Links
│   ├── Course Categories
│   └── Contact Info
└── <FloatingAction /> (WhatsApp button)
```

## Shared Patterns

### Dark Hero Pattern
Every page uses a dark `#0A101C` hero section with:
- Decorative radial gradient grid overlay
- Breadcrumb navigation
- Gold accent text
- Page title and subtitle

### Legal Pages Layout
Terms, Privacy, Cookie Policy, and Disclaimer share:
- Two-column layout (sticky TOC sidebar + article body)
- Numbered sections
- Amber warning callouts
- Contact card at bottom
- Related policy links
