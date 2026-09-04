# QA Checklist — Tansen Sangeet Mahavidyalaya Website

## Functional Testing

### Homepage
- [ ] Hero slider auto-advances every 5s
- [ ] Hero slider manual navigation (prev/next arrows, dots)
- [ ] Courses carousel scrolls horizontally
- [ ] Courses carousel auto-scrolls
- [ ] All course cards link to correct detail pages
- [ ] Testimonials slider works (student + celebrity)
- [ ] Gallery images open in lightbox
- [ ] Lightbox closes on X button or backdrop click
- [ ] FAQ accordion opens/closes correctly
- [ ] Book Free Demo CTA links to contact page
- [ ] All navigation links work

### Course Pages
- [ ] Course listing shows all 8 courses
- [ ] Search filter works
- [ ] Category filter works
- [ ] Empty state shows when no results
- [ ] Course detail pages render correctly
- [ ] Breadcrumbs show correct hierarchy
- [ ] Learning modules display correctly
- [ ] FAQ accordions work on course pages
- [ ] CTA buttons link to contact page
- [ ] All 8 courses have detail pages

### Contact Page
- [ ] Form fields accept input
- [ ] Form validation works (required fields)
- [ ] Form submission shows success state
- [ ] "Submit Another Enquiry" resets form
- [ ] Quick enquiry cards pre-fill form
- [ ] Google Maps embed loads
- [ ] Mobile sticky bar appears on mobile
- [ ] Phone links work (tel:)
- [ ] WhatsApp link works

### FAQ Page
- [ ] All 23 FAQs display
- [ ] Category filter works
- [ ] Search filter works
- [ ] Accordion opens/closes
- [ ] Sticky filter bar works on scroll
- [ ] Reset filters button works

### Gallery Page
- [ ] All 10 images display
- [ ] Category filter works
- [ ] Lightbox opens/closes
- [ ] Image hover effects work

### Legal Pages
- [ ] All 4 legal pages render
- [ ] Sticky TOC sidebar works
- [ ] Section links scroll correctly
- [ ] Contact cards display correctly
- [ ] Related policy links work

## Responsive Testing

### Mobile (< 768px)
- [ ] Header collapses to hamburger menu
- [ ] Mobile menu opens/closes
- [ ] Hero sections stack vertically
- [ ] Course cards display in single column
- [ ] Footer stacks to single column
- [ ] Contact sticky bar appears
- [ ] All text readable without horizontal scroll
- [ ] Touch interactions work (swipe, tap)

### Tablet (768px - 1024px)
- [ ] Header shows full navigation
- [ ] Course cards display in 2 columns
- [ ] Footer shows 2-column layout
- [ ] All content properly spaced

### Desktop (> 1024px)
- [ ] Header mega menu works
- [ ] Course cards display in 3 columns
- [ ] Footer shows 4-column layout
- [ ] All hover effects work

## SEO Testing

- [ ] Unique title on every page
- [ ] Meta description on every page
- [ ] OpenGraph tags present
- [ ] JSON-LD structured data valid
- [ ] Breadcrumbs display correctly
- [ ] URLs are clean and hierarchical
- [ ] Images have alt text
- [ ] Single H1 per page
- [ ] Heading hierarchy correct

## Performance Testing

- [ ] Page load time < 3s on 3G
- [ ] Images load with next/image optimization
- [ ] Fonts load without FOUT
- [ ] No unused JavaScript (framer-motion check)
- [ ] No console errors
- [ ] No broken images

## Accessibility Testing

- [ ] Tab navigation works
- [ ] Focus states visible
- [ ] Screen reader can navigate
- [ ] Form labels accessible
- [ ] Color contrast sufficient
- [ ] Images have alt text
- [ ] Keyboard can operate all interactive elements
