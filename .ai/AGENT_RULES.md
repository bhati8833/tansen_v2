# Agent Rules — Tansen Sangeet Mahavidyalaya Website

## AI Agent Guidelines

This file provides rules and context for AI agents working on this codebase.

## Code Style

### TypeScript

- Use TypeScript for all new files
- Define interfaces for all data structures
- Use explicit return types on exported functions
- Avoid `any` type

### React Components

- Use functional components only (no class components)
- Use `'use client'` directive only when component needs interactivity
- Prefer server components for static content
- Use named exports (not default exports) for components
- Follow PascalCase naming for components

### Styling

- Use Tailwind CSS utility classes exclusively
- No CSS modules, styled-components, or inline styles (except dynamic)
- Use `container-site` class for page width constraint
- Follow responsive design patterns (mobile-first)

### Data

- Add new data to existing data files in `src/data/`
- Export TypeScript interfaces alongside data
- Keep data structures consistent with existing patterns
- Update `CONTENT_MAP.md` when adding new content

## File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `CourseCard.tsx` |
| Pages | PascalCase | `page.tsx` |
| Data files | kebab-case | `course-details.ts` |
| Types | PascalCase | `types.ts` |
| Styles | kebab-case | `globals.css` |

## Adding New Pages

1. Create directory in `src/app/`
2. Add `page.tsx` (and optionally `layout.tsx`)
3. Export `metadata` for SEO
4. Add navigation link in `site-content.ts` if needed
5. Update `CONTENT_MAP.md`
6. Add to `REQUIREMENTS.md` checklist

## Adding New Components

1. Place in appropriate `src/components/` subdirectory
2. Use `'use client'` only if needed
3. Import from `@/data/` for content
4. Use lucide-react for icons
5. Follow existing naming conventions

## Adding New Courses

1. Add course entry to `courses.ts` (short data)
2. Add detailed course data to `course-details.ts`
3. Course detail page auto-generates via `CoursePageTemplate`
4. Update `CONTENT_MAP.md` and `REQUIREMENTS.md`

## Common Pitfalls

1. **Don't use framer-motion** — it's installed but unused. Use CSS transitions instead.
2. **Don't import from react-icons** — use lucide-react for all icons except social media.
3. **Don't add API routes** — site is statically exported, no server runtime.
4. **Don't use Context API** — keep state local to components.
5. **Don't add new dependencies** without checking if existing ones cover the need.

## Testing Checklist

Before committing:
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] All pages render without errors
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] No console errors in browser
- [ ] All links work
- [ ] Images load correctly
