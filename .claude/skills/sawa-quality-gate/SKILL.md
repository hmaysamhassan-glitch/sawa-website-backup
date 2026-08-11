---
description: Final QA gate for Sawa pages: brand fidelity, responsive behavior, accessibility, performance, credibility, SEO/AEO, and interaction quality.
---

# Sawa Quality Gate

Run this after major page work.

## Brand / design
- Does it still feel like Sawa's current visual world?
- Does every section have a clear visual purpose?
- Any generic AI/SaaS design clichés?
- Is information density high enough to feel complete without feeling crowded?

## Credibility
- No invented clients, logos, testimonials, metrics, Harvard affiliations, revenue numbers, or case-study claims.
- Label modeled/calculated outputs clearly.
- Any team claims must come from approved Sawa content.

## Responsive
Check at minimum:
- 375px
- 768px
- 1280px
- 1440px+
No overflow, cut-off diagrams, unreadable labels, hover-only functionality, or tiny touch targets.

## Accessibility
- semantic headings
- keyboard operability
- visible focus states
- sufficient contrast
- form labels
- alt text where meaningful
- reduced-motion support

## Performance
- no unnecessary autoplay media
- lazy-load noncritical modules
- optimize images
- avoid animation-induced layout shift
- keep client JS contained

## AEO / SEO
- correct title/meta/canonical
- meaningful HTML without JS
- internal links
- sitemap inclusion
- Article/Breadcrumb schema where appropriate
- old MBA pages removed from discoverable current architecture

## Final review
Run build/tests/lint. Fix obvious console errors. Review the page in-browser at all target widths before declaring complete.
