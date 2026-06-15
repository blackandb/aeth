# AETH — Built for the AI Era

[![Deploy with Vercel](https://img.shields.io/badge/Vercel-Live-00F0FF?style=flat&logo=vercel&logoColor=white)](https://aeth-iota.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

An intelligent website platform designed for the post-search internet. AETH helps founders build web presences that work simultaneously for human visitors, AI systems, and search engines.

**[Live Demo](https://aeth-iota.vercel.app)** · **[Repository](https://github.com/mksvlbv/aeth)**

---

## Preview

> Homepage hero with real-time telemetry panel, scroll-triggered animations, and monolith visual.

![AETH Homepage](https://aeth-iota.vercel.app/opengraph-image)

---

## Overview

AETH is a full-stack product concept and MVP — a modern SaaS marketing site with a functional dashboard, blog, and 20 production routes. Built to demonstrate frontend engineering, product design, and UI/UX thinking.

## Features

- **20 production routes** — marketing site, dashboard, blog, legal pages, auth
- **Dashboard HUD** — 3 views (overview, editor, settings) with live clock, widgets, AI assistant panel
- **Scroll animations** — Framer Motion fade-ins triggered on viewport entry
- **Responsive** — fully tested at 375px (mobile) and 1440px (desktop)
- **SEO-ready** — unique `<title>` and `<meta description>` on every page
- **OG Image** — dynamic Open Graph image for social sharing
- **Blog with content** — 2 full articles + 4 stub cards with dynamic routing
- **Dark theme** — custom design system with cyan/red accents, monospace labels
- **Card micro-interactions** — hover glow, lift, and border transitions
- **Branded 404** — custom not-found page matching design language

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, React 19) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Typography** | Inter + IBM Plex Mono |
| **Icons** | Lucide React |
| **Deploy** | Vercel |

## Pages (20 routes)

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, 9 content sections, scroll animations |
| `/features` | Product architecture — 5-layer system stack |
| `/how-it-works` | 4-step process with metrics |
| `/pricing` | 3-tier pricing cards |
| `/about` | Origin, mission, values |
| `/blog` | Article grid (6 posts) |
| `/blog/[slug]` | Dynamic blog posts |
| `/changelog` | Version history |
| `/contact` | Book a Demo form |
| `/login` | Auth screen with demo skip |
| `/dashboard` | System overview — 7 HUD widgets, live clock |
| `/dashboard/editor` | Visual block editor + AI assistant |
| `/dashboard/settings` | Account, config, notifications |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `404` | Branded not-found page |

## Getting Started

```bash
git clone https://github.com/mksvlbv/aeth.git
cd aeth
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── dashboard/        # Dashboard (overview, editor, settings)
│   ├── blog/             # Blog + dynamic [slug] posts
│   ├── contact/          # Book a Demo form
│   └── ...               # All other routes
├── components/
│   ├── sections/         # Homepage sections (hero, shift, benefits, etc.)
│   ├── navbar.tsx        # Responsive navbar with active states
│   ├── footer.tsx        # Site footer with links
│   ├── fade-in.tsx       # Scroll-triggered animation wrapper
│   └── site-shell.tsx    # Layout shell (navbar + footer)
```

## Design Decisions

- **Dark-on-dark palette** — `#050505` bg, `#00F0FF` cyan, `#FF2D55` red — inspired by developer tool aesthetics
- **Monospace labels** — IBM Plex Mono for system labels and data points, creating a technical/engineering feel
- **Dashboard as product demo** — HUD-style layout with live clock, real metrics, and AI assistant to demonstrate product depth
- **Mobile-first responsive** — all marketing pages tested on 375px; dashboard shows "desktop recommended" on mobile

## What I Learned

- Building a complete SaaS product site from concept to deploy
- Next.js 16 App Router patterns: layouts, dynamic routes, metadata API, OG image generation
- Tailwind CSS v4 with custom design tokens and `@theme` directive
- Framer Motion scroll-triggered animations with `whileInView` and viewport detection
- Responsive design across 14 unique page layouts
- Git workflow and Vercel CI/CD pipeline

## License

[MIT](./LICENSE)

## Author

**Maksym Volobuiev** — [GitHub](https://github.com/mksvlbv)
