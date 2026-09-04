# Requirements — Tansen Sangeet Mahavidyalaya Website

## Functional Requirements

### 1. Homepage

- [x] Hero image slider (6 slides, auto-advance every 5s, manual controls)
- [x] Floating stat badges (50+ Years, 1 Lakh+ Students, ISO Certified, etc.)
- [x] Courses horizontal scroll carousel with auto-scroll
- [x] Why Choose Us feature grid (6 cards)
- [x] Testimonials dual slider (student quotes + celebrity recognition)
- [x] Gallery preview (10 images with lightbox)
- [x] Accreditation logos (5 organizations)
- [x] Book Free Demo CTA section
- [x] FAQ accordion (8 questions)

### 2. Course Pages

- [x] Course listing page with search + category filter
- [x] Category pages (4 categories)
- [x] Course detail pages (8 courses)
- [x] Unified template system (`CoursePageTemplate`)
- [x] Fallback data generation for courses without custom content
- [x] Each course page has: Hero, Intro, What Is, Learning Modules, Highlights, Who Can Join, Why Choose, Learning Journey, Schedule, Certification, Gallery, FAQ, CTA

### 3. About Page

- [x] 13 content sections
- [x] Legacy/founders section
- [x] Vision & Mission cards
- [x] Course categories display
- [x] Student-focused methodology pipeline
- [x] Certifications/affiliations
- [x] Contact information card

### 4. Blog

- [x] Blog listing with search + tag filter
- [x] Blog detail pages with `generateStaticParams`
- [x] Featured article highlight
- [x] Dynamic metadata per post

### 5. Contact

- [x] Enquiry form (9 fields: name, phone, email, age, course, enquiry type, preferred contact, message, consent)
- [x] Quick enquiry cards (4 types)
- [x] Contact cards (call, email, visit)
- [x] Google Maps embed
- [x] Course listing for enquiry
- [x] FAQ accordion
- [x] Mobile sticky bottom bar (Call/WhatsApp/Demo)
- [x] JSON-LD schemas (LocalBusiness, BreadcrumbList, FAQPage)

### 6. FAQ

- [x] 23 FAQs with category filter
- [x] Search functionality
- [x] Accordion with animated chevron
- [x] Sticky filter bar
- [x] Contact cards for follow-up

### 7. Gallery

- [x] Category filter (6 categories)
- [x] Lightbox modal
- [x] Image hover effects
- [x] 10 gallery items

### 8. Legal Pages

- [x] Terms & Conditions (22 sections)
- [x] Privacy Policy (20 sections)
- [x] Cookie Policy (15 sections)
- [x] Disclaimer (15 sections)
- [x] Shared layout: sticky TOC sidebar + article body
- [x] JSON-LD schemas (BreadcrumbList, WebPage)
- [x] Canonical URLs

## SEO Requirements

- [x] Unique metadata for all legal/contact/about pages
- [x] Dynamic `generateMetadata` for course detail and blog pages
- [x] OpenGraph tags on all pages
- [x] JSON-LD structured data on course, contact, and legal pages
- [x] Breadcrumb navigation on all pages
- [x] SEO-friendly URLs (`/courses/{category}/{course-slug}`)
- [x] Single H1 per page
- [x] Logical heading hierarchy

## Performance Requirements

- [x] Static site generation (SSG)
- [x] Next.js Image optimization
- [x] Font optimization via `next/font`
- [x] Mobile-first responsive design
- [ ] No unused JavaScript (Framer Motion installed but unused)
- [ ] No unused CSS

## Accessibility Requirements

- [x] Semantic HTML structure
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation support
- [x] Focus states on buttons/links
- [x] Alt text on images
- [ ] Color contrast compliance (needs audit)
- [ ] Screen reader testing (needs audit)

## Missing / Incomplete

- [ ] No actual API integration for form submission (simulated with setTimeout)
- [ ] No analytics/tracking integration
- [ ] No sitemap.xml generation
- [ ] No robots.txt
- [ ] No 404 custom page
- [ ] No image optimization pipeline (public/ assets not optimized)
- [ ] Blog posts only 3 (content gap)
- [ ] Gallery items hardcoded (should be data-driven)
- [ ] Testimonials hardcoded (should be data-driven)
- [ ] WhyChooseUs features hardcoded (should be data-driven)
- [ ] Hero slides hardcoded (should be data-driven)
