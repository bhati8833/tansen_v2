# CLAUDE.md – Developer & AI Assistant Guide

This document provides quick reference instructions, guidelines, and commands for developing and modifying the **Tansen Sangeet Mahavidyalaya** Next.js application.

---

## 🛠️ Essential Development Commands

```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Build static production export
npm run build

# Deploy to tansengurugram.com (empties server & uploads build)
python3 deploy_v2.py
```

---

## 📌 Active Site Content Specifications

- **Tagline**: `India's largest music & dance school`
- **Header Menu**: `About` | `Courses` | `Affiliation` | `Our Achievement` | `Blog` | `Gallery` | `Contact`
- **Key Statistics**:
  - `50+ Years of Legacy`
  - `1,00,000+ Students Trained`
  - `ISO 9001:2008 Certified Institute`
  - `125+ Centers in 18+ Cities`
  - `Online Courses Available`
  - `Offline Campus Classes`
- **Our Courses (9 Disciplines)**:
  1. Western Dance
  2. Classical Dance
  3. Vocal Music
  4. Keyboard
  5. Drums
  6. Guitar
  7. Fine Arts
  8. Harmonium
  9. Tabla
- **Course Specifications**:
  - Duration: `3 Months Onwards (for all courses)`
  - Age: `3+ (for all courses)`
- **Contact Details**:
  - **Address**: `NS-16, Block-C, Sushant Lok Phase-1, Sector-43, Gurugram, Haryana-122009`
  - **Phone**: `98180 83588`
  - **Email**: `Tansengurugram43@gmail.com`

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
