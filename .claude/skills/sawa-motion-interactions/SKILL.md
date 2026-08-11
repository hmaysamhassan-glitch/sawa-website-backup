---
description: Build premium, purposeful motion and interaction for Sawa without hurting performance, accessibility, or clarity.
---

# Sawa Motion + Interaction

## Principle
Motion must **explain, reveal, orient, or reward**. Never animate only because animation is available.

## Preferred interaction vocabulary
- scroll-linked line/path drawing
- sticky scrollytelling where the visual changes as copy advances
- restrained number/state transitions
- node-flow animations for audience → email → revenue systems
- hover/focus reveals that add information
- before/after toggles
- interactive calculators and decision trees
- SVG diagrams that progressively assemble
- subtle magnetic/elastic response only on high-value CTA elements
- section entrance motion using opacity + transform, not heavy layout animation

## Technical constraints
- Default to CSS + Motion where possible. Use GSAP only when it materially simplifies a complex sequence.
- Prefer transform and opacity for animation.
- Avoid scrolljacking.
- Respect `prefers-reduced-motion`.
- All interactions must work by keyboard where applicable.
- Ensure mobile has an intentional alternative to hover and desktop scrollytelling.
- Lazy-load non-critical visual code.
- Avoid large autoplay video backgrounds unless explicitly approved.
- Interactive content must degrade gracefully: the core meaning remains in HTML if JavaScript fails.

## Quality bar
60fps on a normal modern laptop; no jank caused by decorative effects.
