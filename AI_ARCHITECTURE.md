# AI Architecture & Development Log

## Overview
This document details the AI-assisted development methodology used to build **AETH** — an intelligent website platform and SaaS MVP built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Methodology: Design-to-Code Scaffolding
AETH was constructed using a visual-first AI approach, bridging the gap between product design and production-ready code.
1. **Design System First:** I used Claude to generate a rigid Tailwind CSS design system (colors, typography, spacing) before touching any component logic.
2. **Animation Orchestration:** Framer Motion animations were iteratively refined using AI to ensure 60fps performance and avoid layout shifts.
3. **Route Scaffolding:** Over 20 production routes were scaffolded systematically, moving from dumb UI components to smart, data-fetching layouts.

## Key Architectural Decisions

### Responsive Layouts & Framer Motion
AI struggles with complex layout animations because it lacks visual feedback. To solve this, I defined a strict `AnimationVariant` schema in TypeScript. The LLM was constrained to only use these predefined variants, resulting in consistent scroll-triggered animations across all 20 routes without visual glitches.

### Server Components vs. Client Components
To maximize performance, I enforced a strict rule for the AI: "Default to React Server Components. Only add `'use client'` if `framer-motion` or React hooks are required." This resulted in a highly optimized bundle size despite the rich interactivity.
