<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Tansen App – Agent Execution Rules & Architecture Guidelines

This repository contains the Next.js 16 (App Router with Turbopack) implementation of the **Tansen Sangeet Mahavidyalaya** web application.

---

## 🤖 Operational Directives for AI Agents

1. **Next.js 16 Turbopack Lock File Cleanup**:
   - If `npm run dev` or `next dev` fails with "Another next dev server is already running" when no other dev server is active, remove `.next/dev/lock` (`rm -rf .next/dev/lock`) or reset `.next/` (`rm -rf .next`) before starting the server.

2. **Lucide React Icons Verification**:
   - Always verify exact export names in `lucide-react` before importing.
   - Example: Use `Drum` (singular) instead of `Drums`.

3. **Component Architecture**:
   - Layout components reside in [`src/components/layout/`](file:///home/shiva/tansen_v1/src/components/layout).
   - Section components reside in [`src/components/sections/`](file:///home/shiva/tansen_v1/src/components/sections).
   - Card components reside in [`src/components/cards/`](file:///home/shiva/tansen_v1/src/components/cards).
   - Static datasets and mock data schemas reside in [`src/data/`](file:///home/shiva/tansen_v1/src/data).

4. **Styling & Fonts**:
   - Primary Accent Color: Gold `#D4952B`.
   - Dark Theme Accent: `#0A101C`.
   - Apply Google Fonts via custom CSS variables (`var(--font-roboto-var)`, `var(--font-poppins-var)`, `var(--font-roboto-slab-var)`, `var(--font-playfair-var)`).

5. **Frozen Home Page UI Design (STRICT)**:
   - The Home Page layout, styling, structure, and component design are **fixed & frozen**.
   - Do NOT modify the UI layout or structural CSS. Only update text content and images (`src/data/` and public assets).

6. **Localhost Verification First**:
   - Always run and test changes on `http://localhost:3000` first before declaring completion.

7. **Live Deployment Approval Required**:
   - Do NOT execute `python3 deploy_v2.py` or deploy to `tansengurugram.com` automatically.
   - Live deployment is strictly triggered only when the user explicitly requests to deploy.

8. **Reference Documentation**:
   - Master Specification: [`prompt.md`](file:///home/shiva/tansen_v1/prompt.md)
   - Project Readme: [`README.md`](file:///home/shiva/tansen_v1/README.md)
   - Claude Developer Guide: [`CLAUDE.md`](file:///home/shiva/tansen_v1/CLAUDE.md)
