# TODOS

Deferred items surfaced during the website icon audit + eng review (2026-09-09).

## Icon-mapper consolidation (deferred from this cleanup PR)

- **Where:** `src/components/courses/CourseCard.tsx:9` (`categoryIcons` Record), `src/components/courses/CoursePageTemplate.tsx` (`iconMap` Record), `src/components/layout/Hero.tsx:253`, `Stats.tsx:29`, `WhyChooseUs.tsx:60`, `src/app/about/page.tsx:319`, `src/app/contact/ContactClient.tsx:927` (inline icon arrays).
- **What:** 4+ separate icon-mapper patterns mapping overlapping keys (Music, Sparkles, Award, etc.) live in parallel. Consolidate into one shared icon-map module so course/category → icon resolution is defined in a single place.
- **Why deferred:** Expands the tiny icon-cleanup far beyond its scope (human ~1 day / CC ~30 min). Surface only if the duplication causes a real bug or a new course type needs a new icon.
- **Status:** open
