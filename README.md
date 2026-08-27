# Tansen Sangeet Mahavidyalaya – Next.js Web Application

A modern, high-performance web application recreation of **Tansen Sangeet Mahavidyalaya** (India's premier music and dance academy with 125+ centers and 50+ years of excellence).

Built using Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Project Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 & PostCSS |
| **Icons** | Lucide React & React Icons |
| **Animations** | Framer Motion |
| **Fonts** | Next Google Fonts (Roboto, Roboto Slab, Poppins, Playfair Display) |

---

## 📁 Directory Structure

```text
tansen_v1/
├── src/
│   ├── app/                    # Next.js App Router pages & layout
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global CSS styles & font variables
│   │   ├── layout.tsx          # Root layout with Header, Footer & Floating CTA
│   │   └── page.tsx            # Main landing page assembling all sections
│   ├── components/
│   │   ├── cards/              # Reusable card components (e.g., CourseCard)
│   │   ├── common/             # Common UI controls (e.g., FloatingAction)
│   │   ├── layout/             # Layout components (Header, TopBar, MainNav, Footer, Container)
│   │   ├── sections/           # Page sections (Hero, CoursesGrid, WhyChooseUs, etc.)
│   │   └── ui/                 # Atomic UI components
│   ├── data/                   # Static content & mock data schemas
│   │   ├── courses.ts          # Music, Dance & Fine Arts courses data
│   │   ├── faq.ts              # Frequently Asked Questions data
│   │   ├── site-content.ts     # General website content & info
│   │   └── testimonials.ts     # Student & parent testimonials data
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions & helpers
│   ├── scripts/                # Utility & build scripts
│   └── types/                  # TypeScript interface definitions
├── public/                     # Static media & image assets
├── prompt.md                   # Master Operating Manual & UI Specification
├── AGENTS.md                   # AI Agent guidance & Next.js conventions
├── CLAUDE.md                   # Claude / AI Assistant developer guide
└── package.json                # Project dependencies & scripts
```

---

## ✨ Features & Component Breakdown

- **TopBar & MainNav Header**: Announcement banner, contact hotline, center locator, franchise inquiry, and responsive multi-level navigation bar.
- **Hero Section**: High-impact banner with call-to-actions, highlight badges, and promotional messaging.
- **Courses Grid**: Categorized course showcase (Vocal, Classical Dance, Western Dance, Fine Arts, Tabla, Guitar, Keyboard, Harmonium, Drums) with floating category badges.
- **Why Choose Us**: Feature highlights (50+ Years Legacy, UGC Recognized Diplomas, Certified Trainers, Performance Platforms).
- **Testimonials**: Interactive feedback slider showcasing student and parent success stories.
- **Gallery**: High-resolution image and video showcase of performances, events, and classroom sessions.
- **Accreditation**: Board affiliations (Pracheen Kala Kendra, Prayag Sangeet Samiti, Trinity College London, etc.).
- **Pan-India Presence**: Interactive center finder highlighting 125+ locations across India.
- **Franchise Opportunities**: Business model highlights and franchise inquiry CTA.
- **Book a Free Demo**: Lead generation form for scheduling trial classes.
- **FAQ Section**: Accordion list covering admissions, examinations, course duration, and certification.
- **Floating Action Controls**: Quick contact widgets for instant phone calls and WhatsApp messaging.

---

## 🎨 Design System & Typography

### Color Palette
- **Primary Gold**: `#D4952B`
- **Dark Primary / Backgrounds**: `#0A101C`
- **Neutral Dark Text**: `#333333`
- **Muted Gray**: `#666666`
- **Border & Subtle Accents**: `#E5E7EB` / `#FFF8ED`

### Typography (Google Fonts via `next/font`)
- `var(--font-roboto-var)`: Default body copy
- `var(--font-roboto-slab-var)`: Structural headings
- `var(--font-poppins-var)`: UI labels, badges & card titles
- `var(--font-playfair-var)`: Decorative display headers

---

## 📜 Available Scripts

- `npm run dev` – Starts the Next.js Turbopack development server on `http://localhost:3000`.
- `npm run build` – Builds the production application bundle.
- `npm run start` – Runs the built production server locally.
- `npm run lint` – Runs ESLint code quality checks.

---

## 📄 Documentation References

- [`prompt.md`](file:///home/shiva/tansen_v1/prompt.md) – Comprehensive Master Operating Manual and design recreation specification.
- [`AGENTS.md`](file:///home/shiva/tansen_v1/AGENTS.md) – Next.js agent execution rules and repository guidelines.
- [`CLAUDE.md`](file:///home/shiva/tansen_v1/CLAUDE.md) – Quick reference guide for AI developer workflows.
