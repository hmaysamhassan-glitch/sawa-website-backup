---
description: Protect and improve Sawa's SEO, AEO, GEO, crawlability, entity clarity, and machine-readable content while building highly interactive pages.
---

# Sawa AEO / GEO Technical Rules

## Entity clarity
The site must consistently communicate one current identity:
Sawa is a white-glove B2B marketing partner focused on:
1. growing an owned email audience,
2. building content/newsletter systems that engage it,
3. building email sequences and campaigns that convert it.

Do not mix this with the old MBA-admissions identity or the current creator-only positioning.

## Rendering / content
- Core article and homepage copy must be server-rendered or statically rendered in semantic HTML.
- Never hide the only meaningful answer inside canvas, animation, client-only state, or an image.
- Use one clear H1 and logical H2/H3 hierarchy.
- Important links must be real crawlable anchors.
- Interactive tools enhance the answer; they do not replace it.

## Article structure
- Put a concise direct answer near the top when the page targets a question.
- Use descriptive headings that map to real sub-questions.
- Include evidence, examples, nuance, and limitations.
- Include sources when making factual claims.
- Add author/reviewer and `datePublished` / `dateModified`.
- Add relevant internal links across the topic cluster.
- Use appropriate Article / Breadcrumb / Organization schema only when it accurately represents visible content.
- Canonical URLs, Open Graph metadata, Twitter metadata, descriptive titles, and meta descriptions.
- Generate/update sitemap.

## Old-site cleanup
Audit all legacy StartSawa URLs and old MBA-admissions pages.
For each legacy URL choose the correct action:
- 301 redirect when there is a genuine current equivalent,
- 410/delete when there is not,
- noindex only when the page must remain accessible but should not be indexed.
Remove legacy URLs from the sitemap and internal links.
Do not mass-redirect unrelated old pages to the homepage.

## AEO design rule
If an AI crawler never executes the interaction, the page should still contain a complete, useful, coherent answer.
