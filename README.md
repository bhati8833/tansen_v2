# Tansen Sangeet Mahavidyalaya – Next.js Web Application

A modern, high-performance web application recreation of **Tansen Sangeet Mahavidyalaya** (India's largest music & dance school with 125+ centers in 18+ cities and 50+ years of legacy).

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

## 📌 Primary Site Specifications

- **Tagline**: `India's largest music & dance school`
- **Navigation Menu**: `About` | `Courses` | `Affiliation` | `Our Achievement` | `Blog` | `Gallery` | `Contact`
- **Legacy & Core Pillars**:
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
- **Contact Us Information**:
  - **Address**: `NS-16, Block-C, Sushant Lok Phase-1, Sector-43, Gurugram, Haryana-122009`
  - **Phone**: `98180 83588` (`+91 98180 83588`)
  - **Email**: `Tansengurugram43@gmail.com`

---

## 🛠️ Project Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 & PostCSS |
| **Icons** | Lucide React & React Icons |
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
│   │   ├── courses.ts          # 9 Music, Dance & Fine Arts courses data
│   │   ├── faq.ts              # Frequently Asked Questions data
│   │   ├── site-content.ts     # Navigation, Taglines, Contact & General content
│   │   └── testimonials.ts     # Student & parent testimonials data
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions & helpers
│   └── types/                  # TypeScript interface definitions
├── public/                     # Static media & image assets
├── prompt.md                   # Master Operating Manual & UI Specification
├── AGENTS.md                   # AI Agent guidance & Next.js conventions
├── CLAUDE.md                   # Claude / AI Assistant developer guide
├── docs/                       # System design & deployment specifications
└── package.json                # Project dependencies & scripts
```

---

## 📜 Available Scripts

- `npm run dev` – Starts the Next.js Turbopack development server on `http://localhost:3000`.
- `npm run build` – Builds the static production export bundle in `out/`.
- `python3 deploy_v2.py` – Empties remote target `public_html/tansengurugram` and syncs static build files to `tansengurugram.com`.

---

## 📄 Documentation References

- [`prompt.md`](file:///home/shiva/tansen_v1/prompt.md) – Comprehensive Master Operating Manual.
- [`AGENTS.md`](file:///home/shiva/tansen_v1/AGENTS.md) – Next.js agent execution rules and repository guidelines.
- [`CLAUDE.md`](file:///home/shiva/tansen_v1/CLAUDE.md) – Quick reference guide for AI developer workflows.
- [`docs/DEPLOYMENT_AND_ACCESS.md`](file:///home/shiva/tansen_v1/docs/DEPLOYMENT_AND_ACCESS.md) – Deployment & access details.
