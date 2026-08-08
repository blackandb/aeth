# BLACK& — Institutional Website

The public institutional website for **BLACK&**, an Intelligence Company Builder. The site explains the organization, operating model, portfolio, technologies, industries, governance, research, and opportunity routes through permanent, citation-ready pages.

## Principles

- direct institutional answers before promotional language;
- verified facts separated from approved positioning and disclosed limitations;
- permanent canonical routes for search engines, journalists, researchers, and AI retrieval systems;
- structured entity relationships and JSON-LD;
- no unsupported performance, ownership, customer, regulatory, or deployment claims;
- accessible, responsive executive presentation with reduced-motion support.

## Main surfaces

| Area | Routes |
| --- | --- |
| Company | `/company`, facts, leadership, governance, history, trust, contact |
| Model | `/model` and the intelligence-to-long-term-ownership process |
| Companies | `/companies` and individual public portfolio profiles |
| Technologies | `/technologies`, capability profiles, responsible AI, security, data governance |
| Industries | `/industries` and seven sector perspectives |
| Research | `/research`, standards, reports, briefs, and interactive web editions |
| News and insights | `/newsroom`, `/insights`, and dated institutional developments |
| Opportunities | `/opportunities` and defined founder, technology, research, capital, and institutional routes |

Institutional page records live in `src/lib/institutional-content.ts` and render through `src/components/institutional-page.tsx`. Research metadata lives in `src/lib/research-papers.ts`.

## Technology

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion, GSAP, and Lenis
- Vercel-compatible production output

## Local development

```bash
git clone <repository-url> blackand-website
cd blackand-website
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

Before publishing a factual change, update the fact base and claims registry in `docs/`, then ensure the public copy preserves the correct evidence or limitation language.

## Documentation

- `docs/BLACK-INSTITUTIONAL-FACT-BASE.md` — verified facts, approved positioning, and unresolved facts
- `docs/BLACK-CLAIMS-REGISTRY.md` — claim classification and review status
- `docs/BLACK-INSTITUTIONAL-DELIVERY.md` — information architecture and publication model
- `docs/BLACK-MANAGEMENT-QUESTIONNAIRE.md` — outstanding management inputs
- `BLACK-STYLE-REBUILD.md` — visual-system summary
- `AI_ARCHITECTURE.md` — implementation architecture and AI-assisted workflow

## License

[MIT](./LICENSE)
