# Master Operating Manual & Reverse-Engineering System

**Project:** Tansen Sangeet Mahavidyalaya — Production Next.js Recreation  
**Source Website:** https://www.tansensangeet.com/  
**Target Stack:** Next.js 14+ (App Router), React, TypeScript, Tailwind CSS, Lucide Icons, Framer Motion  
**Reference Layout Architecture:** WordPress + Elementor Page Builder  
**Primary Mandate:** 100% Visual and Behavioral Photocopy of the Source Website in Next.js + React.

---

## 1. Master Task Objective & Scope Definition

Rebuild the official website of Tansen Sangeet Mahavidyalaya (https://www.tansensangeet.com/) inside the Next.js project. The objective of Phase 1 is strictly an exact, pixel-accurate, structurally sound, and responsive Next.js recreation of the live website's visual design, layout hierarchy, geometry, spacing, navigation, sections, cards, typography, imagery, and interactions.

---

## 2. Project Initialization Commands

**Run these commands first to bootstrap the project:**

```bash
# Step 1: Create Next.js project
npx create-next-app@latest tansen-v1 --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Step 2: Navigate to project
cd tansen-v1

# Step 3: Install dependencies
npm install framer-motion lucide-react

# Step 4: Create asset directories
mkdir -p public/assets/{hero,courses,logo,gallery,icons,testimonials,centers,backgrounds}

# Step 5: Create component directories
mkdir -p src/components/{layout,sections,ui,cards,common}

# Step 6: Create data directory
mkdir -p src/data

# Step 7: Create types directory
mkdir -p src/types

# Step 8: Start dev server
npm run dev
```

---

## 3. Six-Phase Master Project Roadmap

### Phase 1 — Exact Visual & Behavioral Photocopy (Current Focus)
Full visual recreation of all pages, sections, responsive layouts across 11 viewports, and local assets. Rendered output matches WordPress + Elementor pixel-for-pixel without copying messy Elementor code. Zero SEO, security, backend, database, analytics, or performance audit overhead during this phase.

### Phase 2 — Functional & Data Integration
Form handling, dynamic data models, headless CMS/Database wiring, server actions, transactional email API, and CRM integration.

### Phase 3 — Technical SEO & Structured Data
Route metadata, OpenGraph cards, Schema.org JSON-LD (EducationalOrganization, Course, FAQPage), XML sitemaps, robots.txt, canonical URLs, and Google Search Console readiness.

### Phase 4 — Performance & Core Web Vitals
Advanced image optimization (WebP/AVIF), bundle splitting, dynamic code imports, caching strategies, and Lighthouse score optimization (>95).

### Phase 5 — Security Hardening
Content Security Policy (CSP), CORS headers, rate limiting, dependency vulnerability audits, input sanitization, and API route protection.

### Phase 6 — Production Deployment & Analytics
Analytics instrumentation (GA4, Meta Pixel), error tracking (Sentry), CI/CD pipelines, production deployment, and post-launch monitoring.

---

## 4. Phase 1 Strict Exclusions (DO NOT EXECUTE)

| Category | Exclusion |
|----------|-----------|
| **SEO** | Do NOT write custom meta titles, meta descriptions, Schema markup, sitemaps, robots.txt, or canonical tags. |
| **Security** | Do NOT configure CSP headers, rate limiters, or dependency security audits. |
| **Analytics** | Do NOT install GA4, Meta Pixel, or event conversion tracking. |
| **Performance** | Do NOT spend time on Core Web Vitals audits, Lighthouse score chasing, or advanced caching layers. |
| **Backend/Database** | Do NOT set up databases, CMS instances, authentication systems, or backend email processing. |
| **Infrastructure** | Do NOT configure deployment pipelines, log aggregators, or error tracking services. |

---

## 5. Phase 1 Core Workflow — The 10 Mandatory Focus Areas

1. **Source Discovery:** Crawl and discover all public pages and routes.
2. **Page Discovery:** Map all internal pages (Header, Top bar, Nav, Dropdowns, Mega menus, Homepage, About, Courses, Course Detail, Gallery, Blog, Centers, Franchise, Contact, FAQ, Footer, Terms).
3. **DOM / Layout Inspection:** Extract exact computed box model dimensions and geometry.
4. **Asset Discovery & Localization:** Download and organize all source assets into `/public/assets/`.
5. **Typography Extraction:** Extract exact font-family, weight, size, line-height, and letter-spacing (do not assume defaults).
6. **Color Extraction:** Extract exact brand Hex/RGB tokens.
7. **Responsive Behavior Extraction:** Inspect and reproduce behavior across all 11 target viewports.
8. **React Implementation:** Clean semantic components, CSS Grid/Flexbox, and decoupled static data in `src/data/*.ts`.
9. **Visual Comparison:** Side-by-side comparison (Offline `scrap/index.html` vs Next.js Local).
10. **Visual Correction & Root-Cause Fixing:** Eliminate layout bugs, horizontal overflow, and empty right-side whitespace at the container architecture level.

---

## 6. Data Extraction Workflow (Manual + Automation)

### Step 1: Manual Extraction via Chrome DevTools

**Open Chrome DevTools:** Press F12 or Right-click → Inspect

**Extract Text Content:**
```javascript
// Run in Console tab
document.body.innerText
```

**Extract All Image URLs:**
```javascript
// Run in Console tab
Array.from(document.querySelectorAll('img')).map(i => ({src: i.src, alt: i.alt, width: i.width, height: i.height}))
```

**Extract All Links:**
```javascript
// Run in Console tab
Array.from(document.querySelectorAll('a')).map(a => ({href: a.href, text: a.textContent.trim()}))
```

**Extract Colors:**
```javascript
// Run in Console tab
const styles = getComputedStyle(document.body);
console.log('Body BG:', styles.backgroundColor);
console.log('Body Color:', styles.color);
console.log('Body Font:', styles.fontFamily);
```

**Extract Fonts:**
```javascript
// Run in Console tab
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(h => {
  const styles = getComputedStyle(h);
  console.log(h.tagName, {
    font: styles.fontFamily,
    size: styles.fontSize,
    weight: styles.fontWeight,
    color: styles.color
  });
});
```

### Step 2: Automated Extraction Script

Create `scripts/extract-data.js`:
```javascript
const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractWebsiteData() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('https://www.tansensangeet.com/', { waitUntil: 'networkidle2' });
  
  // Extract images
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    }));
  });
  
  // Extract text content
  const content = await page.evaluate(() => {
    return {
      title: document.title,
      h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent.trim()),
      h2: Array.from(document.querySelectorAll('h2')).map(h => h.textContent.trim()),
      h3: Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim()),
    };
  });
  
  // Extract colors
  const colors = await page.evaluate(() => {
    const elements = document.querySelectorAll('*');
    const colorSet = new Set();
    elements.forEach(el => {
      const styles = getComputedStyle(el);
      colorSet.add(styles.backgroundColor);
      colorSet.add(styles.color);
    });
    return Array.from(colorSet).filter(c => c !== 'rgba(0, 0, 0, 0)');
  });
  
  fs.writeFileSync('src/data/extracted-images.json', JSON.stringify(images, null, 2));
  fs.writeFileSync('src/data/extracted-content.json', JSON.stringify(content, null, 2));
  fs.writeFileSync('src/data/extracted-colors.json', JSON.stringify(colors, null, 2));
  
  await browser.close();
  console.log('Data extraction complete!');
}

extractWebsiteData();
```

**Run the script:**
```bash
npm install puppeteer
node scripts/extract-data.js
```

---

## 7. Visual Reference Setup (Offline `scrap/` Folder)

> **PRIMARY REFERENCE: Use `scrap/index.html` as your main visual reference.**

Since the screenshots folder is empty, use the downloaded offline website as your primary visual reference. This is actually MORE useful than static screenshots because you can inspect live DOM elements.

### Step 1: Open Offline Website in Browser

```bash
# Open the downloaded HTML file in browser
# File path: /home/shiva/tansen_v1/scrap/index.html
# OR copy to a local server:
cd scrap && python3 -m http.server 8080
# Then open: http://localhost:8080
```

### Step 2: Capture Screenshots (Optional - For Documentation)

If you want to take screenshots for documentation, use these commands:

```bash
# Full page overview
browse screenshot screenshots/00-full-page-desktop.png

# Top Bar + Header
browse js "window.scrollTo(0, 0)"
browse screenshot screenshots/01-topbar-header.png

# Hero Section
browse js "window.scrollTo(0, 173)"
browse screenshot screenshots/02-hero-section.png

# Statistics Section
browse js "window.scrollTo(0, 700)"
browse screenshot screenshots/03-stats-section.png

# Popular Courses Section
browse js "window.scrollTo(0, 887)"
browse screenshot screenshots/04-courses-section.png

# Why Choose Us Section
browse js "window.scrollTo(0, 1544)"
browse screenshot screenshots/05-why-choose-us.png

# Testimonials + Celebrity Section
browse js "window.scrollTo(0, 1924)"
browse screenshot screenshots/06-testimonials.png

# Gallery Section
browse js "window.scrollTo(0, 2521)"
browse screenshot screenshots/07-gallery.png

# Accreditation Section
browse js "window.scrollTo(0, 2963)"
browse screenshot screenshots/08-accreditation.png

# Our Presence + Franchise Section
browse js "window.scrollTo(0, 3446)"
browse screenshot screenshots/09-presence-franchise.png

# CTA / Book Demo Section
browse js "window.scrollTo(0, 3827)"
browse screenshot screenshots/10-cta-section.png

# Footer
browse js "window.scrollTo(0, 4122)"
browse screenshot screenshots/11-footer.png
```

### Step 3: Extract CSS Measurements via JavaScript

While on each section in the browser, extract exact computed styles:

```bash
# Extract all section measurements
browse js "JSON.stringify({
  topBar: {bg: getComputedStyle(document.querySelector('.elementor-element-70695b0')).backgroundColor, height: document.querySelector('.elementor-element-70695b0').offsetHeight},
  header: {bg: getComputedStyle(document.querySelector('.elementor-element-fa6de26')).backgroundColor, height: document.querySelector('.elementor-element-fa6de26').offsetHeight},
  logo: {width: document.querySelector('.elementor-element-b2cf51f img').width, height: document.querySelector('.elementor-element-b2cf51f img').height},
  navLink: {font: getComputedStyle(document.querySelector('.elementor-item')).fontFamily, size: getComputedStyle(document.querySelector('.elementor-item')).fontSize, color: getComputedStyle(document.querySelector('.elementor-item')).color},
  heroHeight: document.querySelector('.elementor-element-69ef41f').offsetHeight,
  statsBg: getComputedStyle(document.querySelector('.elementor-element-3793114')).backgroundColor,
  footerBg: getComputedStyle(document.querySelector('.elementor-element-5b00700')).backgroundColor
})"

# Extract button styles
browse js "JSON.stringify(Array.from(document.querySelectorAll('.elementor-button')).slice(0,3).map(btn => ({text: btn.textContent.trim(), bg: getComputedStyle(btn).backgroundColor, color: getComputedStyle(btn).color, padding: getComputedStyle(btn).padding, borderRadius: getComputedStyle(btn).borderRadius})))"

# Extract heading fonts
browse js "JSON.stringify({h2: {font: getComputedStyle(document.querySelector('h2')).fontFamily, size: getComputedStyle(document.querySelector('h2')).fontSize, weight: getComputedStyle(document.querySelector('h2')).fontWeight}, h3: {font: getComputedStyle(document.querySelector('h3')).fontFamily, size: getComputedStyle(document.querySelector('h3')).fontSize, weight: getComputedStyle(document.querySelector('h3')).fontWeight}})"
```

### Visual Reference Checklist

Before proceeding to code, verify you have:

| # | Reference | Source | Status |
|---|-----------|--------|--------|
| 1 | Full page HTML | `scrap/index.html` | ✅ |
| 2 | Top bar + Header | `scrap/index.html` (scroll to top) | ✅ |
| 3 | Hero section | `scrap/index.html` (scroll to hero) | ✅ |
| 4 | Statistics section | `scrap/index.html` (scroll to stats) | ✅ |
| 5 | Popular courses | `scrap/index.html` (scroll to courses) | ✅ |
| 6 | Why choose us | `scrap/index.html` (scroll to section) | ✅ |
| 7 | Testimonials + Celebrity | `scrap/index.html` (scroll to testimonials) | ✅ |
| 8 | Gallery | `scrap/index.html` (scroll to gallery) | ✅ |
| 9 | Accreditation | `scrap/index.html` (scroll to logos) | ✅ |
| 10 | Presence + Franchise | `scrap/index.html` (scroll to section) | ✅ |
| 11 | CTA section | `scrap/index.html` (scroll to CTA) | ✅ |
| 12 | Footer | `scrap/index.html` (scroll to bottom) | ✅ |
| 13 | All images | `scrap/images/` (50 files) | ✅ |
| 14 | All CSS | `scrap/css/` (45 files) | ✅ |
| 15 | All JS | `scrap/js/` (20 files) | ✅ |

> **Do NOT skip this step.** The `scrap/` folder is your primary reference for pixel-perfect recreation. Every component you build must match the offline website visually.

---

## 8. Offline Reference Assets (Merged `scrap/` Folder)

A complete offline mirror of the website has been merged into `./scrap/`:

```
scrap/                              # Merged from both downloads (12MB total)
├── index.html                      # Full Elementor DOM (263KB)
├── css/                            # 45 CSS files (Elementor, theme, responsive)
├── js/                             # 20 JS files (jQuery, Elementor, carousels)
├── fonts/                          # 59 font files (Roboto, Poppins, etc.)
├── images/                         # 50 images (originals + 1024x1024 versions)
│   ├── tansen-logo-1.jpeg          # Logo (original)
│   ├── tansen-logo-1-1024x402.jpeg # Logo (1024px wide)
│   ├── fev.png                     # Favicon
│   ├── guitar.jpg                  # Course image (original)
│   ├── guitar-1024x1024.jpg        # Course image (1024px)
│   ├── dance.jpg                   # Course image
│   ├── Drum.jpg                    # Course image
│   ├── fine-arts.jpg               # Course image
│   ├── tabla.jpg                   # Course image
│   ├── Harmonium.jpg               # Course image
│   ├── Vocal-Music.jpg             # Course image
│   ├── Western-Dance.jpg           # Course image
│   ├── keyboard.jpg                # Course image
│   ├── anu-kapoor.jpg              # Testimonial
│   ├── saroj_khan.jpg              # Testimonial
│   ├── master-ji.jpg               # Testimonial
│   ├── gallery-1.jpg to gallery-10.jpg  # Gallery (10 images)
│   ├── slider-1.jpg, slider-2.jpg, slider-3.jpg  # Hero sliders
│   ├── centers.png                 # Accreditation logo
│   ├── iso-certified.webp          # ISO certification
│   ├── trinity.webp                # Trinity certification
│   ├── ugc.webp                    # UGC certification
│   ├── pracheen.webp               # Pracheen certification
│   ├── prayag.webp                 # Prayag certification
│   ├── unnamed.png, unnamed-1.png, unnamed-2.png  # Additional logos
│   └── Music-School-Near-Me-...jpg # SEO image
└── plugins/
    └── chaty/                      # WhatsApp chat widget plugin
```

### Usage for AI Agent:
1. **Visual Reference:** Open `scrap/index.html` in browser for offline inspection
2. **CSS Extraction:** Run `grep -r "color\|font\|padding\|margin" scrap/css/` to extract exact values
3. **Image Assets:** Copy from `scrap/images/` to `public/assets/` (already downloaded, no hotlinking)
4. **DOM Structure:** Inspect `scrap/index.html` for exact Elementor container hierarchy and class names
5. **WhatsApp Widget:** Reference `scrap/plugins/chaty/` for chat integration logic

> **Note:** This is the HOMEPAGE only. Other pages (About, Courses, Contact, Gallery, Blog, Centers, Franchise, FAQ) still require live site visit.

---

## 9. Image Setup Script (From Local `scrap/` Folder)

**IMPORTANT:** All images are already downloaded in `./scrap/images/`. Use this script to copy them to your Next.js project:

Create `scripts/setup-images.js`:
```javascript
const fs = require('fs');
const path = require('path');

// Source: Local scrap folder (already downloaded)
const SOURCE_DIR = path.join(__dirname, '..', 'scrap', 'images');

// Destination: Next.js public assets
const DEST_DIR = path.join(__dirname, '..', 'public', 'assets');

// Image mapping (source filename → destination category/filename)
const IMAGE_MAP = {
  // Hero/Slider images
  'slider-1.jpg': 'hero/slider-1.jpg',
  'slider-2.jpg': 'hero/slider-2.jpg',
  'slider-3.jpg': 'hero/slider-3.jpg',
  'guitar.jpg': 'hero/guitar.jpg',
  'guitar-1024x1024.jpg': 'hero/guitar-1024x1024.jpg',
  
  // Logo
  'tansen-logo-1.jpeg': 'logo/tansen-logo-1.jpeg',
  'tansen-logo-1-1024x402.jpeg': 'logo/tansen-logo-1-1024x402.jpeg',
  'fev.png': 'logo/fev.png',
  
  // Course images
  'Vocal-Music.jpg': 'courses/Vocal-Music.jpg',
  'Vocal-Music-1024x1024.jpg': 'courses/Vocal-Music-1024x1024.jpg',
  'dance.jpg': 'courses/dance.jpg',
  'dance-1024x1024.jpg': 'courses/dance-1024x1024.jpg',
  'Drum.jpg': 'courses/Drum.jpg',
  'Drum-1024x1024.jpg': 'courses/Drum-1024x1024.jpg',
  'fine-arts.jpg': 'courses/fine-arts.jpg',
  'fine-arts-1024x1024.jpg': 'courses/fine-arts-1024x1024.jpg',
  'guitar.jpg': 'courses/guitar.jpg',
  'guitar-1024x1024.jpg': 'courses/guitar-1024x1024.jpg',
  'Harmonium.jpg': 'courses/Harmonium.jpg',
  'Harmonium-1024x1024.jpg': 'courses/Harmonium-1024x1024.jpg',
  'tabla.jpg': 'courses/tabla.jpg',
  'tabla-1024x1024.jpg': 'courses/tabla-1024x1024.jpg',
  'keyboard.jpg': 'courses/keyboard.jpg',
  'keyboard-1024x1024.jpg': 'courses/keyboard-1024x1024.jpg',
  'Western-Dance.jpg': 'courses/Western-Dance.jpg',
  'Western-Dance-1024x1024.jpg': 'courses/Western-Dance-1024x1024.jpg',
  
  // Testimonial images
  'anu-kapoor.jpg': 'testimonials/anu-kapoor.jpg',
  'saroj_khan.jpg': 'testimonials/saroj_khan.jpg',
  'master-ji.jpg': 'testimonials/master-ji.jpg',
  
  // Gallery images
  'gallery-1.jpg': 'gallery/gallery-1.jpg',
  'gallery-2.jpg': 'gallery/gallery-2.jpg',
  'gallery-3.jpg': 'gallery/gallery-3.jpg',
  'gallery-4.jpg': 'gallery/gallery-4.jpg',
  'gallery-5.jpg': 'gallery/gallery-5.jpg',
  'gallery-6.jpg': 'gallery/gallery-6.jpg',
  'gallery-7.jpg': 'gallery/gallery-7.jpg',
  'gallery-8.jpg': 'gallery/gallery-8.jpg',
  'gallery-9.jpg': 'gallery/gallery-9.jpg',
  'gallery-10.jpg': 'gallery/gallery-10.jpg',
  
  // Accreditation/Logo images
  'centers.png': 'logos/centers.png',
  'iso-certified.webp': 'logos/iso-certified.webp',
  'trinity.webp': 'logos/trinity.webp',
  'ugc.webp': 'logos/ugc.webp',
  'pracheen.webp': 'logos/pracheen.webp',
  'prayag.webp': 'logos/prayag.webp',
  'unnamed.png': 'logos/unnamed.png',
  'unnamed-1.png': 'logos/unnamed-1.png',
  'unnamed-2.png': 'logos/unnamed-2.png',
  'Music-School-Near-Me-–-Tansen-Sangeet-Mahavidyalaya.jpg': 'logos/Music-School-Near-Me.jpg',
};

function copyImage(source, dest) {
  return new Promise((resolve, reject) => {
    const sourcePath = path.join(SOURCE_DIR, source);
    const destPath = path.join(DEST_DIR, dest);
    
    // Create destination directory
    const destDir = path.dirname(destPath);
    fs.mkdirSync(destDir, { recursive: true });
    
    // Copy file
    fs.copyFile(sourcePath, destPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function setupImages() {
  console.log('Setting up images from local scrap folder...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [source, dest] of Object.entries(IMAGE_MAP)) {
    try {
      await copyImage(source, dest);
      console.log(`✓ ${source} → ${dest}`);
      successCount++;
    } catch (err) {
      console.error(`✗ ${source}: ${err.message}`);
      failCount++;
    }
  }
  
  console.log(`\nDone! ${successCount} copied, ${failCount} failed.`);
}

setupImages();
```

**Run the script:**
```bash
node scripts/setup-images.js
```

> **Note:** Images are already downloaded in `./scrap/images/`. This script simply copies them to the correct locations in your Next.js project.

---

## 10. Color Token Extraction

Extract exact colors from the live website and add to `src/data/colors.ts`:

```typescript
// src/data/colors.ts
export const colors = {
  // Primary Brand Colors
  primary: {
    gold: '#CF9531',           // Main brand gold/orange (from live site links)
    goldHover: '#b8842b',      // Darker gold for hover
    goldLight: '#e8b84a',      // Light gold for accents
  },
  
  // Secondary Colors
  secondary: {
    green: '#25D366',          // WhatsApp green
    greenHover: '#1da851',     // WhatsApp green hover
  },
  
  // Background Colors
  background: {
    white: '#ffffff',
    topBarBg: '#FBF3E8',       // Top bar: light beige (rgb(251, 243, 232))
    galleryBg: '#FCF7F1',      // Gallery section: cream (rgb(252, 247, 241))
    light: '#f8f9fa',
    dark: '#0A101C',           // Footer bg: dark navy (rgb(10, 16, 28))
    darker: '#0D131F',         // Copyright bar: slightly lighter navy (rgb(13, 19, 31))
    card: '#ffffff',
    cardHover: '#f5f5f5',
  },
  
  // Text Colors
  text: {
    primary: '#333333',        // Main body text (rgb(51, 51, 51))
    secondary: '#666666',      // Secondary text
    muted: '#999999',          // Muted text
    white: '#ffffff',          // White text (footer, hero overlays)
    link: '#CF9531',           // Link color: gold/orange
    linkHover: '#b8842b',      // Link hover: darker gold
  },
  
  // Border Colors
  border: {
    light: '#e5e7eb',
    medium: '#d1d5db',
    dark: '#9ca3af',
  },
  
  // Overlay Colors
  overlay: {
    dark: 'rgba(0, 0, 0, 0.5)',
    light: 'rgba(255, 255, 255, 0.9)',
    gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
  },
  
  // Status Colors
  status: {
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  }
};
```

---

## 11. Font Configuration

Configure fonts in `src/app/layout.tsx`:

```typescript
// src/app/layout.tsx
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';

// Body font: Roboto (all body text, paragraphs, buttons)
const roboto = Roboto({ 
  subsets: ['latin'], 
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700']
});

// Heading font: Poppins (all headings, nav links, titles)
const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: 'Tansen Sangeet Mahavidyalaya',
  description: 'Best Music & Dance Academy in Delhi | Since 1988',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body className="font-roboto antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 12. Tailwind Configuration

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E37216',
          'orange-hover': '#c96213',
          'orange-light': '#f5a623',
          green: '#25D366',
          'green-hover': '#1da851',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          lighter: '#2d2d2d',
        }
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        'roboto-slab': ['var(--font-roboto-slab)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 13. First Rule — Inspect Before Coding

Before modifying or creating any code, inspect the live website thoroughly at https://www.tansensangeet.com/. Inspect it across all 11 standard viewports:

| # | Viewport | Description |
|---|----------|-------------|
| 1 | 1920 × 1080 | Full HD Desktop |
| 2 | 1728 × 1117 | Retina / Large Desktop |
| 3 | 1536 × 864 | Standard High-DPI Laptop |
| 4 | 1440 × 900 | MacBook Pro / Standard Desktop |
| 5 | 1366 × 768 | Standard Laptop |
| 6 | 1280 × 720 | Small Desktop / HD |
| 7 | 1024 × 768 | Tablet Landscape |
| 8 | 768 × 1024 | Tablet Portrait |
| 9 | 480 × 800 | Large Mobile |
| 10 | 390 × 844 | Standard Modern Mobile |
| 11 | 375 × 812 | Compact Mobile |

> **Important:** Do not rely solely on static screenshots. The offline `scrap/index.html` DOM and computed styles are the primary source of truth. Screenshots serve as visual verification artifacts.

---

## 14. Source Tech Stack — WordPress + Elementor Reverse Engineering

The original website is constructed with WordPress and the Elementor Page Builder. Translate Elementor's nested container and column architecture into clean, semantic React components and Tailwind CSS / CSS Modules.

**Inspect rendered DOM structures:**
- `.elementor-section`
- `.elementor-container`
- `.e-con`
- `.elementor-column`
- `.elementor-widget-wrap`

> **Golden Rule:** COPY THE RENDERED RESULT, NOT THE ELEMENTOR CODE. Do not generate a messy jungle of nested Elementor classes in React.

**Transform:**
- Elementor Section → `<section className="w-full ...">`
- Elementor Container → `<div className="container mx-auto ...">`
- Elementor Columns / Widgets → Semantic UI components with CSS Grid / Flexbox.

---

## 15. No Estimation / Guesswork — Compute Exact Box-Model Values

For every major section and component, determine and record the actual computed CSS properties directly from the browser DOM:

- Width, max-width, min-width
- Height, min-height
- Section padding-top and padding-bottom
- Margin-top, margin-bottom, margin-inline
- Gap (row-gap, column-gap)
- Heading margin-bottom and paragraph margins
- Card padding, border-radius, and box-shadow
- Exact font sizes, line heights, letter spacings, and font weights

> **Do not guess or assume approximate values** (e.g., assuming a 1240px container without verifying source computed metrics).

---

## 16. Global Container System & Horizontal Alignment

The Next.js project must eliminate the critical layout regression where content collapses to the left while leaving a massive empty white gap on the right on wide desktop viewports (>= 1440px).

**Root Cause:** Fixed pixel widths or asymmetric margins without centered container constraints (`mx-auto`).

**Mandate:** Establish a centralized container component:

```typescript
// src/components/layout/Container.tsx

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

export function Container({ 
  size = 'lg', 
  className = '', 
  children 
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-[800px]',
    md: 'max-w-[1024px]',
    lg: 'max-w-[1240px]',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
}
```

**Verification:** Always verify that left margin equals right margin on wide displays.

---

## 17. Root Layout — HTML, Body, and Root Box Sizing

Audit and establish root styles in `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Universal Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Root Reset */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

/* Prevent Horizontal Overflow Masking */
body {
  overflow-x: hidden;
}

/* Antialiasing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom Scrollbar (optional) */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

---

## 18. Next.js Modular Directory & Component Architecture

Structure the Next.js application cleanly using modern App Router patterns:

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with fonts & providers
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles
│   ├── about-us/page.tsx             # About Us
│   ├── courses/
│   │   ├── page.tsx                  # Courses Directory
│   │   └── [slug]/page.tsx           # Parameterized Course Detail Template
│   ├── taanz-centers/page.tsx        # Centers Directory
│   ├── achievements/page.tsx         # Achievements Showcase
│   ├── gallery/page.tsx              # Media Gallery
│   ├── franchise/page.tsx            # Franchise Opportunity
│   ├── faq/page.tsx                  # FAQ Directory
│   ├── blog/
│   │   ├── page.tsx                  # Blog Listing
│   │   └── [slug]/page.tsx           # Single Blog Post Template
│   └── contact-us/page.tsx           # Contact Details & Enquiry
├── components/
│   ├── layout/                       # Header, TopBar, Footer, Container, Navigation, Drawer
│   ├── sections/                     # Hero, CoursesGrid, Stats, Inspiration, BlogGrid, FAQ
│   ├── ui/                           # Button, Badge, Card, Accordion, Modal, Tabs, Input
│   ├── cards/                        # CourseCard, BlogCard, ExpertCard, StatCard, CenterCard
│   └── common/                       # Logo, SocialLinks, Breadcrumbs, FloatingActions
├── data/                             # Decoupled static data (courses.ts, centers.ts, faq.ts, etc.)
├── types/                            # TypeScript interfaces & types
├── hooks/                            # Custom React hooks
├── lib/                              # Utility functions
└── scripts/                          # Build scripts, data extraction scripts
```

Decouple dynamic WordPress content into typed static files in `src/data/` for immediate rendering.

### Actual Website Content Data (Extracted from Live Site)

```typescript
// src/data/site-content.ts
export const siteContent = {
  // Site Info
  site: {
    name: 'Tansen Sangeet Mahavidyalaya',
    tagline: 'Best Music & Dance Academy in Delhi | Since 1988',
    phone: '+91-977-396-5448',
    email: 'info.tansensangeet2@gmail.com',
    address: 'A-1/87, Sector-16, Rohini, Delhi-110089, India',
  },

  // Navigation Items
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Courses', href: '/our-courses' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonial', href: '/testimonial' },
    { label: 'Franchise', href: '/franchise' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' },
  ],

  // Courses (9 total)
  courses: [
    {
      id: 1,
      title: 'Vocal Singing',
      slug: 'vocal-singing-course',
      image: '/assets/courses/singing.jpg',
      description: 'Learn classical and modern vocal techniques from expert instructors.',
    },
    {
      id: 2,
      title: 'Dance',
      slug: 'dance-course',
      image: '/assets/courses/dance.jpg',
      description: 'Master various dance forms including Bollywood, Hip-Hop, and Classical.',
    },
    {
      id: 3,
      title: 'Drum',
      slug: 'drum-course',
      image: '/assets/courses/Drum.jpg',
      description: 'Learn rhythm and percussion from professional drummers.',
    },
    {
      id: 4,
      title: 'Fine Arts',
      slug: 'fine-arts-course',
      image: '/assets/courses/fine-arts.jpg',
      description: 'Explore your creativity with painting, drawing, and mixed media.',
    },
    {
      id: 5,
      title: 'Guitar',
      slug: 'guitar-course',
      image: '/assets/courses/guitar.jpg',
      description: 'Master acoustic and electric guitar from beginner to advanced.',
    },
    {
      id: 6,
      title: 'Harmonium',
      slug: 'harmonium-course',
      image: '/assets/courses/harmonium.jpg',
      description: 'Learn the art of harmonium playing for devotional and classical music.',
    },
    {
      id: 7,
      title: 'Tabla',
      slug: 'tabla-course',
      image: '/assets/courses/tabla.jpg',
      description: 'Master the rhythmic foundation of Indian classical music.',
    },
    {
      id: 8,
      title: 'Painting',
      slug: 'painting-course',
      image: '/assets/courses/painting.jpg',
      description: 'Express yourself through various painting techniques and styles.',
    },
    {
      id: 9,
      title: 'Acting',
      slug: 'acting-course',
      image: '/assets/courses/acting.jpg',
      description: 'Develop your acting skills for stage and screen.',
    },
  ],

  // Testimonials (3)
  testimonials: [
    {
      id: 1,
      name: 'Anu Kapoor',
      image: '/assets/testimonials/anu-kapoor.jpg',
      quote: 'Tansen Sangeet Mahavidyalaya is doing excellent work in nurturing talent.',
    },
    {
      id: 2,
      name: 'Neha Kakkar',
      image: '/assets/testimonials/neha-kakkar.jpg',
      quote: 'A great platform for aspiring musicians and dancers.',
    },
    {
      id: 3,
      name: 'Abu Malik',
      image: '/assets/testimonials/abu-malik.jpg',
      quote: 'I recommend Tansen to anyone serious about music education.',
    },
  ],

  // Footer Content
  footer: {
    description: 'Tansen Sangeet Mahavidyalaya is a premier music and dance academy in Delhi, nurturing talent since 1988.',
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Courses', href: '/our-courses' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    courses: [
      { label: 'Vocal Singing', href: '/vocal-singing-course' },
      { label: 'Dance', href: '/dance-course' },
      { label: 'Guitar', href: '/guitar-course' },
      { label: 'Tabla', href: '/tabla-course' },
      { label: 'Drum', href: '/drum-course' },
    ],
    socialLinks: [
      { label: 'Facebook', href: 'https://www.facebook.com/tansensangetmahavidyalaya', icon: 'FaFacebookF' },
      { label: 'LinkedIn', href: 'https://in.linkedin.com/company/tansen-sangeet-mahavidyalaya---india', icon: 'FaLinkedinIn' },
      { label: 'YouTube', href: 'https://www.youtube.com/@tansensangeetmahavidyalaya3467', icon: 'FaYoutube' },
      { label: 'Twitter', href: 'http://x.com/tansen_in', icon: 'FaTwitter' },
      { label: 'Instagram', href: 'https://www.instagram.com/tansensangeet_mahavidyalayaa/', icon: 'FaInstagram' },
    ],
    copyright: '© 2024 Tansen Sangeet Mahavidyalaya. All Rights Reserved.',
  },

  // Stats (animated counters)
  stats: [
    { label: 'Students', value: 15000, suffix: '+' },
    { label: 'Courses', value: 50, suffix: '+' },
    { label: 'Centers', value: 20, suffix: '+' },
    { label: 'Experience', value: 35, suffix: '+' },
  ],
};
```

---

## 19. Component Code Examples

### TopBar Component

```typescript
// src/components/layout/TopBar.tsx
import { Phone, Mail, Calendar, Music } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export function TopBar() {
  return (
    <div className="bg-dark text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-brand-orange" />
              <span className="text-sm">Admissions Open for 2026-2027</span>
            </div>
            <a 
              href="#book-demo" 
              className="flex items-center gap-2 text-sm hover:text-brand-orange transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free Demo Class Today!</span>
            </a>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="mailto:info.tansensangeet2@gmail.com" className="flex items-center gap-2 text-sm hover:text-brand-orange transition-colors">
                <Mail className="w-4 h-4" />
                <span>info.tansensangeet2@gmail.com</span>
              </a>
              <a href="tel:+919773965448" className="flex items-center gap-2 text-sm hover:text-brand-orange transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91-977-396-5448</span>
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/tansensangetmahavidyalaya" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://in.linkedin.com/company/tansen-sangeet-mahavidyalaya---india" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@tansensangeetmahavidyalaya3467" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="http://x.com/tansen_in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/tansensangeet_mahavidyalayaa/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### MainNav Component

```typescript
// src/components/layout/MainNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const menuItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about-us',
    children: [
      { label: 'Our Story', href: '/ours-story' },
      { label: 'Our Legacy', href: '/our-legacy' },
    ]
  },
  { 
    label: 'Our Courses', 
    href: '/our-courses',
    children: [
      { label: 'Vocal Singing Course', href: '/vocal-singing-course' },
      { label: 'Guitar Classes', href: '/guitar-classes' },
      { label: 'Fine Arts Course', href: '/fine-arts-course' },
      { label: 'Keyboard Course', href: '/keyboard-course' },
      { label: 'Indian Classical Dance', href: '/indian-classical-dance' },
      { label: 'Western Dance Classes', href: '/western-dance-classes' },
      { label: 'Harmonium Classes', href: '/harmonium-classes' },
      { label: 'Tabla Classes', href: '/tabla-classes' },
      { label: 'Drum Classes', href: '/drum-classes' },
    ]
  },
  { label: 'Taanz Centers', href: '/taanz-centers' },
  { 
    label: 'Our Achievement', 
    href: '/our-achievement',
    children: [
      { label: 'Our Inspiration & Experts', href: '/our-inspiration-experts' },
    ]
  },
  { 
    label: 'Gallery', 
    href: '#',
    children: [
      { label: 'Our Video Gallery', href: '/our-video-gallery' },
      { label: 'Our Photo Gallery', href: '/our-photo-gallery' },
    ]
  },
  { label: 'Own TSM Franchise', href: '/own-tsm-franchise' },
  { label: 'Contact Us', href: '/contact-us' },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/assets/logo/tansen-logo-1.jpeg" 
              alt="Tansen Sangeet Mahavidyalaya" 
              width={200}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-brand-orange transition-colors font-medium"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 animate-fade-in">
                    {item.children.map((child) => (
                      <Link 
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link 
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-brand-orange font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link 
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-gray-600 hover:text-brand-orange"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
```

### Header Component

```typescript
// src/components/layout/Header.tsx
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <MainNav />
    </header>
  );
}
```

### Hero Section Component

```typescript
// src/components/sections/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/assets/hero/hero-banner-1.jpg',
    title: "India's Most Trusted",
    subtitle: 'Music & Dance Academy',
    tagline: 'Academy Since 1972',
    description: 'Nurturing Talent. Building Confidence. Creating Futures.',
    stats: [
      { value: '50+', label: 'Years of Legacy' },
      { value: '1,50,000+', label: 'Happy Students' },
      { value: '125+', label: 'Centers' },
      { value: '100+', label: 'Cities' },
    ]
  },
  {
    id: 2,
    image: '/assets/hero/hero-banner-2.jpg',
    title: "India's Most Trusted",
    subtitle: 'Indian Classical Dance',
    tagline: 'Academy Since 1972',
    description: 'Discover Passion. Master Skills. Achieve Excellence.',
    stats: [
      { value: '50+', label: 'Years of Legacy' },
      { value: '1,00,000+', label: 'Happy Students' },
      { value: '125+', label: 'Centers' },
      { value: '23+', label: 'Cities' },
    ]
  },
  {
    id: 3,
    image: '/assets/hero/hero-banner-3.jpg',
    title: "India's Most Trusted",
    subtitle: 'Create. Imagine. Inspire.',
    tagline: 'Academy Since 1972',
    description: 'Inspiring Creativity. Building Confidence. Shaping Futures.',
    stats: [
      { value: '50+', label: 'Years of Legacy' },
      { value: '1,00,000+', label: 'Happy Students' },
      { value: '125+', label: 'Centers' },
      { value: '23+', label: 'Cities' },
    ]
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <Image 
        src={slide.image}
        alt={slide.subtitle}
        fill
        className="object-cover transition-opacity duration-500"
        priority
        sizes="100vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-white text-lg mb-2">
              <span className="text-brand-orange">—</span> {slide.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              {slide.subtitle}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-4 animate-slide-up">
              {slide.tagline}
            </h2>
            <p className="text-gray-200 text-lg mb-8 animate-slide-up">
              {slide.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {slide.stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl md:text-3xl font-bold text-brand-orange">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#book-demo"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                BOOK FREE DEMO
              </a>
              <a 
                href="/our-courses"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors text-center flex items-center justify-center gap-2"
              >
                EXPLORE COURSES
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-orange hover:bg-brand-orange-hover text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-orange hover:bg-brand-orange-hover text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-brand-orange' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
```

### Footer Component

```typescript
// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';

const popularCourses = [
  { label: 'Vocal Singing', href: '/vocal-singing-course' },
  { label: 'Guitar', href: '/guitar-classes' },
  { label: 'Keyboard', href: '/keyboard-course' },
  { label: 'Kathak', href: '/indian-classical-dance' },
  { label: 'Western Dance', href: '/western-dance-classes' },
  { label: 'Fine Arts', href: '/fine-arts-course' },
];

const quickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Taanz Centers', href: '/taanz-centers' },
  { label: 'Franchise', href: '/own-tsm-franchise' },
  { label: 'Gallery', href: '/our-photo-gallery' },
  { label: 'Achievements', href: '/our-achievement' },
  { label: 'FAQs', href: '/faq' },
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/tansensangetmahavidyalaya', label: 'Facebook' },
  { icon: FaLinkedinIn, href: 'https://in.linkedin.com/company/tansen-sangeet-mahavidyalaya---india', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@tansensangeetmahavidyalaya3467', label: 'YouTube' },
  { icon: FaTwitter, href: 'http://x.com/tansen_in', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/tansensangeet_mahavidyalayaa/', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/assets/logo/tansen-logo-1.jpeg" 
                alt="Tansen Sangeet Mahavidyalaya" 
                width={180}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Tansen Sangeet Mahavidyalaya is one of India's most trusted music and dance academies, 
              nurturing talent since 1972 with over 125 centers across 100+ cities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {popularCourses.map((course) => (
                <li key={course.label}>
                  <Link 
                    href={course.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Tansen Sangeet Mahavidyalaya,<br />
                  Sector 106, Gurugram,<br />
                  Haryana - 122006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a href="tel:+919773965448" className="text-gray-400 hover:text-brand-orange transition-colors">
                  +91-977-396-5448
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a href="mailto:info.tansensangeet2@gmail.com" className="text-gray-400 hover:text-brand-orange transition-colors">
                  info.tansensangeet2@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Sub Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tansen Sangeet Mahavidyalaya. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-brand-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-500 hover:text-brand-orange transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-brand-orange transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### CourseCard Component

```typescript
// src/components/cards/CourseCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  duration?: string;
}

export function CourseCard({ title, category, description, image, slug, duration }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {duration && (
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
            {duration}
          </span>
        )}
        
        <Link 
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all"
        >
          Explore Course
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
```

### Stats Section Component

```typescript
// src/components/sections/Stats.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Shield, value: 50, suffix: '+', label: 'Years of Legacy' },
  { icon: Users, value: 150000, suffix: '+', label: 'Happy Students' },
  { icon: MapPin, value: 125, suffix: '+', label: 'Centers Across India' },
  { icon: Award, value: 25, suffix: '+', label: 'Professional Courses' },
];

function formatNumber(num: number): string {
  if (num >= 100000) {
    return (num / 1000).toFixed(0) + ',000';
  }
  return num.toLocaleString('en-IN');
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-brand-orange">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 text-brand-orange mx-auto mb-4" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### FloatingAction Component

```typescript
// src/components/common/FloatingAction.tsx
'use client';

import { MessageCircle, Phone } from 'lucide-react';

export function FloatingAction() {
  const whatsappUrl = 'https://wa.me/919773965448?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      
      {/* Book Free Demo Button */}
      <a
        href="#book-demo"
        className="w-14 h-14 bg-brand-orange hover:bg-brand-orange-hover rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Book Free Demo"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
```

### Root Layout

```typescript
// src/app/layout.tsx
import { Roboto, Roboto_Slab, Poppins, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingAction } from '@/components/common/FloatingAction';
import './globals.css';

const roboto = Roboto({ 
  subsets: ['latin'], 
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700']
});

const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'], 
  variable: '--font-roboto-slab',
  weight: ['400', '700']
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['400', '700']
});

export const metadata = {
  title: 'Tansen Sangeet Mahavidyalaya - Best Music & Dance Academy',
  description: 'Join the Best Music and Dance Academy in Sector 106 Gurugram. Learn Kathak, Western Dance, Guitar, Drums, Vocal, Keyboard & Fine Arts from expert teachers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`
      ${roboto.variable} 
      ${robotoSlab.variable} 
      ${poppins.variable} 
      ${playfair.variable}
    `}>
      <body className="font-roboto antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingAction />
      </body>
    </html>
  );
}
```

### Homepage

```typescript
// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { CourseSearch } from '@/components/sections/CourseSearch';
import { CoursesGrid } from '@/components/sections/CoursesGrid';
import { Inspiration } from '@/components/sections/Inspiration';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { Accreditation } from '@/components/sections/Accreditation';
import { FAQ } from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CourseSearch />
      <CoursesGrid />
      <Inspiration />
      <BlogGrid />
      <Accreditation />
      <FAQ />
    </>
  );
}
```

---

## 20. Build Order Dependencies

Follow this exact build order:

```
Step 1: Project Setup
  ↓
Step 2: Root Layout + Global Styles
  ↓
Step 3: TopBar Component
  ↓
Step 4: MainNav Component
  ↓
Step 5: Header (TopBar + MainNav)
  ↓
Step 6: Hero Section
  ↓
Step 7: Course Search Bar
  ↓
Step 8: Our Courses Grid
  ↓
Step 9: Statistics Section
  ↓
Step 10: Inspiration & Experts
  ↓
Step 11: Blog Section
  ↓
Step 12: Accreditation Logos
  ↓
Step 13: FAQ Section
  ↓
Step 14: Footer
  ↓
Step 15: Floating Action Buttons
  ↓
Step 16: Interior Pages (About, Courses, Contact, etc.)
  ↓
Step 17: Mobile Responsive Optimization
  ↓
Step 18: Visual QA & Comparison (scrap/index.html vs Next.js)
```

---

## 21. Verification Scripts

### Automated Horizontal Overflow Check

```javascript
// scripts/check-overflow.js
(() => {
  const docWidth = document.documentElement.clientWidth;
  const scrollWidth = document.documentElement.scrollWidth;
  
  if (scrollWidth > docWidth) {
    console.error(`HORIZONTAL OVERFLOW DETECTED: scrollWidth (${scrollWidth}px) > clientWidth (${docWidth}px)`);
    
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth || rect.width > docWidth) {
        console.warn('Overflowing element:', el, 'Width:', rect.width, 'Right:', rect.right);
      }
    });
  } else {
    console.log('NO OVERFLOW: Document layout width is clean.');
  }
})();
```

### Container Alignment Check

```javascript
// scripts/check-alignment.js
(() => {
  const sections = ['header', 'main', 'footer'];
  const results = [];
  
  sections.forEach(tag => {
    const el = document.querySelector(tag);
    if (el) {
      const rect = el.getBoundingClientRect();
      results.push({
        section: tag,
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width)
      });
    }
  });
  
  console.table(results);
  
  // Check if all left edges align
  const leftEdges = results.map(r => r.left);
  const allLeftAligned = leftEdges.every(l => l === leftEdges[0]);
  
  if (allLeftAligned) {
    console.log('✓ All sections are left-aligned');
  } else {
    console.warn('✗ Sections have different left alignments');
  }
})();
```

### Visual Comparison Script

```javascript
// scripts/visual-comparison.js
// Run this in browser console on both source and local site
(() => {
  const data = {
    url: window.location.href,
    title: document.title,
    sections: [],
    colors: [],
    fonts: []
  };
  
  // Extract sections
  document.querySelectorAll('section, header, footer, nav').forEach(el => {
    const styles = getComputedStyle(el);
    data.sections.push({
      tag: el.tagName,
      classes: el.className.substring(0, 100),
      bg: styles.backgroundColor,
      padding: styles.padding
    });
  });
  
  // Extract unique colors
  const colorSet = new Set();
  document.querySelectorAll('*').forEach(el => {
    const styles = getComputedStyle(el);
    colorSet.add(styles.backgroundColor);
    colorSet.add(styles.color);
  });
  data.colors = Array.from(colorSet).filter(c => c !== 'rgba(0, 0, 0, 0)').slice(0, 20);
  
  // Extract fonts
  const fontSet = new Set();
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span').forEach(el => {
    fontSet.add(getComputedStyle(el).fontFamily);
  });
  data.fonts = Array.from(fontSet);
  
  console.log(JSON.stringify(data, null, 2));
  return data;
})();
```

---

## 22. Manual Verification Checklist

### Pre-Build Checklist
- [ ] Project initialized with `npx create-next-app`
- [ ] Dependencies installed (framer-motion, lucide-react)
- [ ] Asset directories created
- [ ] Global styles configured
- [ ] Tailwind config updated
- [ ] Fonts loaded in layout.tsx

### Component Checklist
- [ ] TopBar component created
- [ ] MainNav component created
- [ ] Header component created
- [ ] Hero section created
- [ ] Course Search Bar created
- [ ] Courses Grid created
- [ ] Stats section created
- [ ] Inspiration section created
- [ ] Blog section created
- [ ] Accreditation section created
- [ ] FAQ section created
- [ ] Footer component created
- [ ] Floating Action buttons created

### Page Checklist
- [ ] Homepage (/) created
- [ ] About Us (/about-us) created
- [ ] Our Courses (/our-courses) created
- [ ] Course Detail (/courses/[slug]) created
- [ ] Taanz Centers (/taanz-centers) created
- [ ] Gallery (/our-photo-gallery) created
- [ ] Contact Us (/contact-us) created
- [ ] FAQ (/faq) created

### Visual Checklist
- [ ] Logo matches source (exact dimensions)
- [ ] Colors match source (exact hex values)
- [ ] Fonts match source (exact font families)
- [ ] Spacing matches source (exact padding/margins)
- [ ] Images load correctly
- [ ] No horizontal overflow on mobile
- [ ] No empty right space on desktop
- [ ] Sticky header works
- [ ] Dropdown menus work
- [ ] Hero slider works
- [ ] Animations work
- [ ] Hover effects work

### Responsive Checklist
- [ ] 1920px viewport - no issues
- [ ] 1440px viewport - no issues
- [ ] 1366px viewport - no issues
- [ ] 1024px viewport - no issues
- [ ] 768px viewport - hamburger menu active
- [ ] 390px viewport - no issues
- [ ] 375px viewport - no issues

### Performance Checklist
- [ ] Images optimized with next/image
- [ ] No unused imports
- [ ] No console errors
- [ ] No hydration mismatches
- [ ] Build succeeds without errors

---

## 23. Error Recovery Procedures

| Error | Cause | Solution |
|-------|-------|----------|
| **Hydration Mismatch** | Server/client render mismatch | Check `useEffect` usage, ensure conditional rendering with `useState` |
| **TypeScript Error** | Type mismatch | Run `npx tsc --noEmit` to identify, fix type definitions |
| **Build Failure** | Compilation error | Run `npm run build`, check error log, fix syntax |
| **Image Not Loading** | Wrong path | Verify path in `/public/assets/`, check filename case |
| **Style Not Applied** | Tailwind not processing | Check `tailwind.config.js` content paths, restart dev server |
| **Font Not Loading** | Import error | Verify font name in `next/font/google`, check variable setup |
| **API Route Error** | Server-side issue | Check API route file, verify request/response handling |
| **CORS Error** | Cross-origin issue | Configure `next.config.js` headers |
| **Module Not Found** | Import path error | Check `@/` alias in `tsconfig.json`, verify file exists |
| **Memory Leak** | Cleanup missing | Add cleanup in `useEffect` return function |

---

## 24. Inspection Protocol — Detailed DOM Analysis

Before modifying or creating any code, inspect the live website thoroughly at https://www.tansensangeet.com/. Inspect it across all 11 standard viewports:

| # | Viewport | Description |
|---|----------|-------------|
| 1 | 1920 × 1080 | Full HD Desktop |
| 2 | 1728 × 1117 | Retina / Large Desktop |
| 3 | 1536 × 864 | Standard High-DPI Laptop |
| 4 | 1440 × 900 | MacBook Pro / Standard Desktop |
| 5 | 1366 × 768 | Standard Laptop |
| 6 | 1280 × 720 | Small Desktop / HD |
| 7 | 1024 × 768 | Tablet Landscape |
| 8 | 768 × 1024 | Tablet Portrait |
| 9 | 480 × 800 | Large Mobile |
| 10 | 390 × 844 | Standard Modern Mobile |
| 11 | 375 × 812 | Compact Mobile |

> **Important:** Do not rely solely on static screenshots. The offline `scrap/index.html` DOM and computed styles are the primary source of truth. Screenshots serve as visual verification artifacts.

---

## 25. Elementor Class Structure — Reverse Engineering

The original website is constructed with WordPress and the Elementor Page Builder. Translate Elementor's nested container and column architecture into clean, semantic React components and Tailwind CSS / CSS Modules.

**Inspect rendered DOM structures:**
- `.elementor-section`
- `.elementor-container`
- `.e-con`
- `.elementor-column`
- `.elementor-widget-wrap`

> **Golden Rule:** COPY THE RENDERED RESULT, NOT THE ELEMENTOR CODE. Do not generate a messy jungle of nested Elementor classes in React.

**Transform:**
- Elementor Section → `<section className="w-full ...">`
- Elementor Container → `<div className="container mx-auto ...">`
- Elementor Columns / Widgets → Semantic UI components with CSS Grid / Flexbox.

---

## 26. Box-Model Computation — Padding, Margin & Border

For every major section and component, determine and record the actual computed CSS properties directly from the browser DOM:

- Width, max-width, min-width
- Height, min-height
- Section padding-top and padding-bottom
- Margin-top, margin-bottom, margin-inline
- Gap (row-gap, column-gap)
- Heading margin-bottom and paragraph margins
- Card padding, border-radius, and box-shadow
- Exact font sizes, line heights, letter spacings, and font weights

> **Do not guess or assume approximate values** (e.g., assuming a 1240px container without verifying source computed metrics).

---

## 27. Container Width & Breakpoint System

The Next.js project must eliminate the critical layout regression where content collapses to the left while leaving a massive empty white gap on the right on wide desktop viewports (>= 1440px).

**Root Cause:** Fixed pixel widths or asymmetric margins without centered container constraints (`mx-auto`).

**Mandate:** Establish a centralized container component:

```typescript
// src/components/layout/Container.tsx

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

export function Container({ 
  size = 'lg', 
  className = '', 
  children 
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-[800px]',
    md: 'max-w-[1024px]',
    lg: 'max-w-[1240px]',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
}
```

**Verification:** Always verify that left margin equals right margin on wide displays.

---

## 28. HTML Structure — Body, Main & Section Elements

Audit and establish root styles in `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Universal Box Sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Root Reset */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

/* Prevent Horizontal Overflow Masking */
body {
  overflow-x: hidden;
}

/* Antialiasing */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom Scrollbar (optional) */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

---

## 29. Component Architecture — File Naming & Exports

Structure the Next.js application cleanly using modern App Router patterns:

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with fonts & providers
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles
│   ├── about-us/page.tsx             # About Us
│   ├── courses/
│   │   ├── page.tsx                  # Courses Directory
│   │   └── [slug]/page.tsx           # Parameterized Course Detail Template
│   ├── taanz-centers/page.tsx        # Centers Directory
│   ├── achievements/page.tsx         # Achievements Showcase
│   ├── gallery/page.tsx              # Media Gallery
│   ├── franchise/page.tsx            # Franchise Opportunity
│   ├── faq/page.tsx                  # FAQ Directory
│   ├── blog/
│   │   ├── page.tsx                  # Blog Listing
│   │   └── [slug]/page.tsx           # Single Blog Post Template
│   └── contact-us/page.tsx           # Contact Details & Enquiry
├── components/
│   ├── layout/                       # Header, TopBar, Footer, Container, Navigation, Drawer
│   ├── sections/                     # Hero, CoursesGrid, Stats, Inspiration, BlogGrid, FAQ
│   ├── ui/                           # Button, Badge, Card, Accordion, Modal, Tabs, Input
│   ├── cards/                        # CourseCard, BlogCard, ExpertCard, StatCard, CenterCard
│   └── common/                       # Logo, SocialLinks, Breadcrumbs, FloatingActions
├── data/                             # Decoupled static data (courses.ts, centers.ts, faq.ts, etc.)
├── types/                            # TypeScript interfaces & types
├── hooks/                            # Custom React hooks
├── lib/                              # Utility functions
└── scripts/                          # Build scripts, data extraction scripts
```

Decouple dynamic WordPress content into typed static files in `src/data/` for immediate rendering.

---

## 30. Multi-Viewport Responsive Design Specification

The website must render flawlessly across 11 defined viewports:

| # | Viewport | Description |
|---|----------|-------------|
| 1 | 1920 × 1080 | Full HD Desktop |
| 2 | 1728 × 1117 | Large Desktop |
| 3 | 1536 × 864 | Standard Laptop |
| 4 | 1440 × 900 | MacBook Pro |
| 5 | 1366 × 768 | Standard Laptop |
| 6 | 1280 × 720 | Small Desktop / HD |
| 7 | 1024 × 768 | Tablet Landscape |
| 8 | 768 × 1024 | Tablet Portrait (Hamburger active, stacked layout) |
| 9 | 480 × 800 | Large Mobile (1-column cards) |
| 10 | 390 × 844 | Standard Mobile |
| 11 | 375 × 812 | Compact Mobile |

---

## 31. Typography System Extraction & Font Loading Strategy

Do NOT guess or assume font families (such as Poppins or Open Sans) without verifying from live DOM:

- Inspect source `font-family`, `font-weight`, `font-size`, `line-height`, and `letter-spacing`
- Configure Google Fonts in `src/app/layout.tsx` using `next/font/google` based on exact measured source fonts
- Map heading and body font variables across all components

---

## 32. Design Token Extraction — Color System & CSS Variables

Extract exact Hex/RGB values from the live stylesheet:

- Primary Brand Color
- Secondary Accent Color
- Background Light Canvas Color
- Card Background Color
- Heading Text Color
- Body Text Color
- Muted & Border Colors
- Hover, Active, and Overlay Colors

> **Do NOT invent "similar" colors. Use exact extracted tokens.**

---

## 33. Spacing & Padding Rhythm System

Inspect and reproduce exact vertical and horizontal rhythm:

- Section Top & Bottom Padding
- Heading Margins & Paragraph Gaps
- Card Grid Row and Column Gaps
- Button Padding and Icon Spacing

---

## 34. Asset Inventory & High-Resolution Asset Pipeline

Organize all source media into `/public/assets/`:

```
public/assets/
├── logo/
├── hero/
├── courses/
├── gallery/
├── testimonials/
├── centers/
├── icons/
└── backgrounds/
```

- Download actual source images; do NOT use generic placeholder images if source assets are accessible
- Maintain permanent local copies to prevent external CDN/hotlinking errors

---

## 35. Next.js Image Optimization (`next/image`) & Display Sizing

- Measure natural vs displayed dimensions, aspect ratio, `object-fit`, and `object-position`
- Use `next/image` with `fill` inside relative aspect-ratio wrappers or set explicit `width` and `height`
- Apply `priority={true}` to above-the-fold assets (Logo, Hero)

---

## 36. Accessibility in Phase 1 (Foundational HTML & Contrast)

- Use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Ensure all text-on-background combinations meet basic readability contrast
- Maintain logical heading hierarchy (H1 → H2 → H3)

> **Note:** Comprehensive WCAG 2.1 AA compliance audits and testing are deferred to Phase 5.

---

## 37. Performance in Phase 1 (Clean Architecture)

- Maintain lightweight component trees and zero CSS bloat
- Avoid bulky, unnecessary third-party libraries

> **Note:** Core Web Vitals audits and Lighthouse score optimization (>95) are deferred to Phase 4.

---

## 38. Interaction & Animation Dynamics

- Inspect and reproduce live animations (fades, carousels, accordions, counters, sticky headers)

> **Rule:** If an animation does NOT exist on the source website, do NOT invent or add it in React.

---

## 39. Visual QA & Cross-Device Comparison

Execute the mandatory visual verification loop:

```
OFFLINE scrap/index.html → Open in Browser
              ↓
NEXT.JS LOCAL              → Open in Browser (localhost:3000)
              ↓
COMPARE SIDE-BY-SIDE
              ↓
IDENTIFY MISMATCHES
              ↓
DIAGNOSE ROOT CAUSE
              ↓
APPLY ARCHITECTURAL FIX
              ↓
RE-COMPARE & VERIFY
```

> **Primary Reference:** Use `scrap/index.html` as the source of truth. Compare visually with your Next.js implementation.

---

## 40. Container Alignment & Symmetry Verification Test

Verify alignment symmetry at 1920px and 1440px viewports:

```
TopBar Left Edge === MainNav Left Edge === Hero Left Edge === Course Grid Left Edge === Footer Left Edge
TopBar Right Edge === MainNav Right Edge === Hero Right Edge === Course Grid Right Edge === Footer Right Edge
```

**Maximum allowable deviation:** <= 2px

---

## 41. Component Interface & Props Typing

Define TypeScript interfaces for all component props:

```typescript
// src/types/index.ts
export interface TopBarProps {
  className?: string;
}

export interface MainNavProps {
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface HeroProps {
  className?: string;
}

export interface StatsProps {
  className?: string;
}

export interface CourseCardProps {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  className?: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  image: string;
  quote: string;
  className?: string;
}

export interface FooterProps {
  className?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
```

---

## 42. Strict Ban on Random CSS Hacks & Offset Patches

**Strictly forbidden practices:**

- `margin-left: 250px;` or `margin-left: 15vw;` to force center alignment
- `left: 20%;` on static elements
- `transform: translateX(300px);` to align grids
- Arbitrary `width: 1800px;` causing horizontal scrollbars
- Using `overflow: hidden` on body to mask layout bugs
- `!important` overrides masking CSS specificity flaws

---

## 43. Scalable Site Architecture Beyond the Homepage

- Shared master layout (Header, TopBar, Footer, FloatingActions)
- Reusable UI component library (Container, Button, Card, SectionHeading)
- Centralized typed data layer (`src/data/`) feeding all routes

---

## 44. Phase 1 Route & Metadata Strategy

- Provide clean static title strings matching page names in `src/app/**/page.tsx`

> **Note:** Comprehensive Schema.org JSON-LD, OpenGraph, and XML Sitemaps are deferred to Phase 3.

---

## 45. Final Acceptance Criteria & Verification Checklist

The implementation is approved ONLY when:

- [ ] Complete visual photocopy of https://www.tansensangeet.com/ across desktop and mobile
- [ ] Build order verified: TopBar/Header → Navigation → Hero → Sections → Footer → Interior Pages → Mobile → QA
- [ ] Zero empty right-side whitespace on wide viewports (1920px, 1728px, 1440px)
- [ ] Zero horizontal overflow on mobile viewports (390px, 375px)
- [ ] Clean browser console (zero errors, zero hydration mismatches)

> **Rule:** Never declare a section complete simply because it "looks close".

---

## 46. Final Post-Implementation Audit Report Format

Upon completion of Phase 1, generate a structured audit report containing:

1. Discovered Source URLs vs Implemented Next.js Routes Mapping
2. Source → React Component Architecture Mapping
3. Localized Asset Mapping in `/public/assets/`
4. Multi-Viewport Visual Verification Matrix across 11 viewports (using scrap/index.html)
5. Remaining Visual Differences & Next Steps for Phase 2
