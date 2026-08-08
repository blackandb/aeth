# BLACK& Website — Architecture and Development Log

## Purpose

This repository implements the public institutional source for BLACK&. Its architecture is designed to serve human readers, search engines, and AI retrieval systems from the same reviewed content model.

## Content architecture

Institutional content is centralized in `src/lib/institutional-content.ts`. Each record defines a canonical path, page type, direct opening answer, differentiated sections, review date, related sources, and evidence or limitation language.

`src/components/institutional-page.tsx` renders those records consistently with breadcrumbs, page navigation, source relationships, citation guidance, correction details, and JSON-LD. Route-specific pages are reserved for surfaces that need a distinct layout, such as the homepage, research index, newsroom, contact, and legal pages.

Research metadata is centralized in `src/lib/research-papers.ts`. Published papers have permanent report pages and web-reader editions in `public/research/read/`.

## Rendering decisions

- React Server Components are the default.
- Client Components are limited to interaction, animation, and browser APIs.
- Institutional catch-all routes are statically generated from the reviewed path registry.
- Metadata, canonical URLs, sitemap entries, and structured data derive from the same content records.
- Protected dashboard and login surfaces are excluded from public indexing.

## Visual and interaction system

The interface uses a near-black executive canvas, restrained silver accents, fine borders, responsive typography, pointer-aware ambient light, and reduced-motion fallbacks. Animation is progressive enhancement and must not hide content or weaken navigation.

## AI-assisted development rules

AI assistance may accelerate implementation, audits, and structured-content maintenance, but it must not invent institutional facts. Any new factual claim must be classified against `docs/BLACK-INSTITUTIONAL-FACT-BASE.md` and `docs/BLACK-CLAIMS-REGISTRY.md` before publication. Unknown ownership, performance, customer, regulatory, deployment, or leadership details remain explicitly undisclosed until approved evidence exists.

## Verification

Changes should pass:

```bash
npm run lint
npm run build
```

Content changes also require a route, metadata, canonical, internal-link, structured-data, and evidence-language review.
