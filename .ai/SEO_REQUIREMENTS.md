# SEO Requirements — Tansen Sangeet Mahavidyalaya Website

## Metadata Strategy

### Site-Wide Metadata (from layout.tsx)

```typescript
metadataBase: new URL('https://tansensangeetgurugram.com')
title: 'Tansen Sangeet Mahavidyalaya – Best Music & Dance Academy in India'
description: "Join India's most trusted music and dance academy..."
```

### Per-Page Metadata

| Page | Title | Has Canonical | Has OpenGraph |
|------|-------|:---:|:---:|
| Homepage | (inherited from layout) | No | Yes (layout) |
| About | "About Us \| Tansen Sangeet Mahavidyalaya" | No | No |
| Courses | (missing) | No | No |
| Course Detail | Dynamic via `generateMetadata` | No | Yes |
| Blog | (missing) | No | No |
| Blog Detail | Dynamic via `generateMetadata` | No | No |
| Contact | Full metadata + canonical | Yes | Yes |
| FAQ | (missing) | No | No |
| Gallery | (missing) | No | No |
| Terms | Full metadata + canonical | Yes | Yes |
| Privacy | Full metadata + canonical | Yes | Yes |
| Cookie Policy | Full metadata + canonical | Yes | Yes |
| Disclaimer | Full metadata + canonical | Yes | Yes |

### Missing Metadata

Pages without page-level metadata (relying on layout defaults):
- `/courses` — needs title + description
- `/blog` — needs title + description
- `/faq` — needs title + description
- `/gallery` — needs title + description

## URL Structure

### Clean, Hierarchical URLs

```
/courses/{category}/{course-slug}
```

Examples:
- `/courses/music/classical-vocal-singing`
- `/courses/instruments/guitar`
- `/courses/dance/kathak`
- `/courses/creative-arts/fine-arts`

### Legal Pages

```
/terms
/privacy
/cookie-policy
/disclaimer
```

### Blog

```
/blog
/blog/{slug}
```

## Structured Data (JSON-LD)

### Course Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "...",
  "description": "...",
  "provider": { "@type": "Organization", "name": "Tansen Sangeet Mahavidyalaya" }
}
```

### Contact Page

Three schemas:
1. `LocalBusiness` + `EducationalOrganization` (name, image, URL, telephone, email, address, geo, priceRange)
2. `BreadcrumbList` (Home > Contact Us)
3. `FAQPage` (8 Q&A pairs)

### Legal Pages

Two schemas each:
1. `BreadcrumbList`
2. `WebPage`

### Course Detail Pages (in CoursePageTemplate)

Three schemas:
1. `Course`
2. `BreadcrumbList`
3. `FAQPage`

## Breadcrumb System

All pages use breadcrumb navigation:

```
Home → Courses → {Category} → {Course}
Home → Blog → {Post Title}
Home → Contact Us
Home → FAQ
Home → Gallery
Home → Terms & Conditions
```

## Internal Linking

Every course page links to:
- All courses (in CTA section)
- Related courses (same category)
- About, FAQ, Contact, Book Free Demo

Footer provides universal links to all courses, legal pages, and contact.

## Image SEO

- All images use `next/image` with automatic optimization
- Alt text should describe the image content
- Cover images use `priority` loading on detail pages
- Hero images use responsive `sizes` attribute

## SEO Gaps

1. **Missing sitemap.xml** — no automated sitemap generation
2. **Missing robots.txt** — no crawl directives
3. **Incomplete metadata** — 4 pages missing page-level metadata
4. **No canonical on all pages** — only legal/contact pages have canonicals
5. **No OpenGraph on course listing/blog/FAQ/gallery** — relying on layout defaults
