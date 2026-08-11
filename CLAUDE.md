# Sawa Website — Handoff Document

This file is a complete handoff for whichever Claude account picks up this project next. It exists because the project is being transferred to a new account. Read this fully before making any changes.

---

## 1. What Sawa Is

Sawa is a **white-glove B2B marketing partner / AI-native marketing consultancy**. Its positioning has gone through several identity shifts historically (an old MBA-admissions identity, then a creator-only identity) — **the current, correct identity is B2B-focused, owned-audience marketing.** Do not mix in the older identities.

Sawa does three things for B2B companies:
1. **Grow** the right email audience (not just a bigger list — lead magnets, signup pages, LinkedIn-to-email, partnerships, audience growth experiments).
2. **Engage** that audience (newsletters, LinkedIn content, welcome emails, editorial planning — content people actually keep reading).
3. **Convert** that audience into business (nurture emails, campaigns, launch emails, re-engagement emails, sequences that turn interest into a real conversation/meeting).

Sawa is **a marketing partner, not software.** It works inside whatever email platform/CRM/content tools the client already uses. AI helps the team move faster (research, first drafts, repurposing), but strategy/voice/messaging decisions are made by people — this is an explicit differentiator, not a footnote.

Tagline: **"Build an audience you actually own."**

---

## 2. What We're Trying to Accomplish With the Website

- A homepage that clearly explains what Sawa does (Grow/Engage/Convert) without marketing jargon.
- A premium, editorial, technical, "console-like" visual identity — not a generic AI-generated SaaS template.
- A homepage that reads as **art-directed at every viewport width**, not a desktop design that was shrunk.
- A `/library` (blog) section that builds topical authority for SEO/AEO/GEO and demonstrates real expertise.
- Realistic, concrete example content throughout (real-sounding lead magnets, newsletter issues, nurture sequences) rather than generic abstract UI mockups.

---

## 3. Current Homepage Structure and Section Order

The homepage lives at `src/app/lp/page.tsx` and is re-exported as the site root via `src/app/page.tsx` (`// The short one-pager LP is the homepage. The full marketing site lives at /full.`). **`/lp/page.tsx` is the live homepage — do not confuse it with the old, unused `/full` page or the many legacy/unused section components still sitting in `src/components/sections/` (see §16).**

Current section order (confirmed, in this exact sequence):

1. **Hero** (`SawaHero.tsx`) — headline + supporting copy + CTAs + the `AudienceJourney` scene (id="hero")
2. **System / "We solve three things"** (`SystemTabs.tsx`) — the Grow/Engage/Convert sphere (id="system")
3. **Our Solution** (`OurSolution.tsx`) — the three deliverables in depth, with realistic example artifacts (id="solution")
4. **How We Work / Operating Model** (`OperatingModel.tsx`) — "Getting started" box + 4 stages: Learn/Plan/Create/Run (id="operating-model")
5. **Library preview** (`LibraryPreview.tsx`) — 3 real articles from `/library` (id="library")
6. **FAQ** (`SawaFAQ.tsx`) (id="faq")
7. **Final CTA** (`FinalCTA.tsx`) (id="book")

Nav (`SawaNav.tsx`) and Footer (`SawaFooter.tsx`) wrap the whole page.

This structure was arrived at deliberately: the user explicitly asked to simplify the homepage down to only these sections and said **"Remove the other homepage sections for now. Do not redesign the individual sections yet."** The marquee/transition banner that used to sit between Hero and System was later **explicitly removed completely** per user request — do not add it back.

---

## 4. Current Copy and Positioning Decisions

- Hero headline: **"Grow a B2B audience that converts into revenue."** — must render as **exactly 2 lines** at desktop width, with **"revenue."** highlighted using a blue highlighter-marker effect (a rounded color swipe behind the text, not just blue-colored text).
- Hero supporting copy: "Sawa is an AI-native marketing consultancy. We grow your email audience, create the content that keeps it engaged, and run the campaigns that turn it into revenue."
- Voice/copy rules (established repeatedly, still in force):
  - Plain, direct, no marketing jargon. Banned phrases: "owned reach," "compounding," "audience engine," "conversion flow," "pipeline activation," and similar buzzwords.
  - Avoid over-repeating "B2B" across the page.
  - **No em dashes anywhere in rendered copy** — only allowed inside `//` or `{/* */}` code comments. This is swept and checked after every content change via `grep -n "—" <file> | grep -v "//\|{/\*"`.
  - Do not fabricate named testimonials, client names, or "verified" real results/case studies.
  - Illustrative UI numbers (subscriber counts, open rates, download counts, etc.) are allowed but must read as plausible/illustrative examples, never as claimed real Sawa/client results.
- "Our Solution" section copy was explicitly reworked to stop being generic/repetitive. Each deliverable's headline and body must now reference a **specific, concrete, realistic example** (see §5), not vague outcome statements like "Build the right email audience."

---

## 5. The Grow / Engage / Convert Structure

This is the core mental model of the entire site and must be preserved everywhere:

| Stage | What it means | Real deliverables |
|---|---|---|
| **01 / GROW** | Build the right email audience | Lead magnets, signup pages, LinkedIn-to-email, audience growth experiments, partnerships and distribution |
| **02 / ENGAGE** | Give people a reason to keep reading | Newsletters, LinkedIn content, welcome emails, editorial planning |
| **03 / CONVERT** | Turn interest into action | Nurture emails, campaigns, launch emails, re-engagement emails, sequences toward the next step |

This 3-part structure appears in at least three places on the homepage and must stay consistent:
1. The sphere in `SystemTabs.tsx` (cycles GROW → ENGAGE → CONVERT automatically, an orbiting ring around a glass-orb globe).
2. `OurSolution.tsx` — one full block per stage, alternating visual side (left/right) per deliverable, with **realistic example artifacts** now written for each:
   - **GROW**: "The B2B Onboarding Playbook" lead magnet (18 pages, 6 templates, 4 diagrams, download CTA, illustrative download count), backed by a partnership placement card and a LinkedIn-to-email conversion card.
   - **ENGAGE**: Newsletter "Issue 47" with subject line "Why your best customers go quiet before they churn," send cadence/open rate, plus two prior issues shown with subject lines + open rates, backed by a welcome-email card and a repurposed-LinkedIn-post card.
   - **CONVERT**: A 3-email nurture sequence (Day 1 / Day 4 / Day 9, each with a real subject line) ending in an illustrative "14 meetings booked" result, backed by a re-engagement card and a launch-email card.
3. `AudienceJourney.tsx` inside the hero — the three-stage physical "journey" scene (see §7).

---

## 6. Design Style and References We've Been Using

**North star (from the `sawa-art-director` skill):** editorial intelligence meets a live operating console. Premium, sharp, technical, alive, confident not loud, bespoke not template-driven.

Core visual language:
- Palette: cool blues/navys — `INK #111827`, `DIM #4B6E8A`, `MID #5085A5`, `STEEL #31708E`, `NAVY #1E4A6E`, `POWDER #8FC1E3`, `PAPER #EAF4FB`, `BG #F4F7FA`, plus rgba border/glass tokens.
- Fonts: `Inter` (display/headlines), `Geist` (body), `Geist Mono` (labels, metadata, status text — this mono/display contrast is a deliberate, core Sawa signature per `src/app/layout.tsx` comments).
- **Glass/frosted card treatment** applied site-wide: `background: rgba(255,255,255,~0.4-0.5)`, `backdropFilter: blur(...) saturate(...)`, soft translucent border, layered soft shadow (not hard drop shadows). This replaced earlier flat white cards and a neo-brutalist bold-black-border/offset-shadow style that was tried and explicitly reverted in favor of glass.
- Soft blurred radial-gradient "color blobs" behind sections (3-gradient recipe: two lighter blobs top corners + one darker blob at bottom) applied consistently across Hero, System, Our Solution, Operating Model, Library — this was an explicit ask ("make sure the background... is applied throughout the entire homepage").
- Numbered circular badges (colored per stage, escalating POWDER → MID → STEEL) used as step/stage indicators in `OurSolution.tsx`, `OperatingModel.tsx`, and `AudienceJourney.tsx` step panels.
- Browser-chrome-style "window" mockup cards (red/yellow/green dots + URL bar) used throughout for realistic UI artifact previews (inspired partly by Fletch PMM's cascading-document-stack pattern, referenced explicitly during the "Our Solution" redesign).
- References explicitly used as inspiration: **Fletch PMM** (fletchpmm.com) for the "Our Solution" deliverable-card cascade and the "How we work" bold-bordered process card; Vercel/Linear/Stripe for restraint and typography; The Pudding for story-specific visual ideas; Growth.Design for progressive visual teaching; 21st.dev for component inspiration (adapted into Sawa's system, never copied wholesale).

---

## 7. What the User Likes Visually

- The **frosted-glass card treatment** (once tuned to be faint/subtle) — explicitly approved and extended site-wide.
- The **sphere** in `SystemTabs.tsx` after its redesign: a richer glass-orb gradient, a deterministic scattered "audience" dot-field texture across the surface (fibonacci-sphere distribution, not `Math.random`), and an elegant tilted **orbiting ring** (Saturn-ring style) carrying the GROW/ENGAGE/CONVERT nodes, with a dashed back-half passing behind the globe and a traveling pulse dot along the front.
- **Shadowed/outlined "step panels"** wrapping each of the 3 stages in the hero's `AudienceJourney` scene, so the scene reads unambiguously as a 3-step process rather than one continuous blur — but made **very faint and blended** (low opacity, soft border, soft shadow) once the user saw the first, too-bold version.
- **Realistic, concrete example content** over generic abstract mockups — actual lead-magnet titles, actual newsletter subject lines, actual sequence day-by-day copy, rather than filler text like "Get the guide" / "Grow through audiences you already trust."
- Numbered badge + colored dot step indicators.
- Blue highlighter-marker effect on emphasized headline words (not just changing text color).
- Illustrative UI mockups with believable numbers (subscriber counts, open rates) as long as they're not framed as verified real results.

---

## 8. What the User Has Repeatedly Said They Dislike (READ BEFORE TOUCHING)

- **Redundant/repetitive labeling.** "STEP X OF 03" text labels were added twice (once in `OurSolution.tsx`, once in `AudienceJourney.tsx`) and **explicitly removed both times** after the user said to remove them — keep only the numbered circle badge + title, no "STEP X OF 03 ·" text.
- **Stark white, high-contrast card outlines.** The first version of the `AudienceJourney` step panels was near-opaque white with a strong shadow — the user asked to make them "even more faint and blended" **twice** in a row. Current values are intentionally very subtle (`background: rgba(224,238,250,0.16)`, `border: rgba(80,133,165,0.08)`, soft `boxShadow`).
- **Generic, repetitive copy across the three Grow/Engage/Convert blocks** — e.g. headlines like "Build the right email audience." / "Give people a reason to keep reading." were called out as repeating the same structure with no specificity. Copy must reference concrete, specific examples.
- **Visual elements that don't scale with their actual container** — flagged explicitly: "avoid relying too heavily on vw for typography and object sizing," "make sure absolute-positioned visual elements respond to their container rather than the full viewport." (This led to converting the `OurSolution` doc-stack cascade from `vw`-based offsets to CSS container-query units — see §10.)
- **Desktop design simply shrunk down for narrower/mid-size viewports** — the user was explicit: "do not just proportionally shrink the entire composition," it should "feel art-directed at every width."
- **Large empty/dead visual space.** Called out specifically when the compact inbox box in `AudienceJourney` left a big gap next to the stats column — fixed by centering the group instead of stretching it across a grid.
- **Marquee/kinetic banner between Hero and System** — built up over multiple iterations, then **explicitly removed completely**. Do not re-add.
- **The middle "big box" in the hero visual taking up too much space** — the `InboxWindow` component was explicitly shrunk (capped at `maxWidth: 420`, smaller type/padding) after the user said "I don't want the visual to take a lot of space."

---

## 9. Important Animation and Scrolling Preferences

From the `sawa-motion-interactions` skill and reinforced by direct user feedback:

- **Motion must explain, reveal, orient, or reward.** Never animate purely for decoration.
- **No scroll-jacking, ever.** All reveals are `whileInView` fade/slide-ins (Framer Motion), never pinned/scroll-progress-driven scenes.
- Preferred vocabulary: scroll-linked path drawing (`pathLength` animation), sticky-free entrance reveals (`opacity` + `transform`, not layout properties), restrained number count-ups (`useCounter` hook pattern already in `AudienceJourney.tsx`), SVG diagrams that progressively assemble, hover/focus reveals that add information.
- Default to CSS + Framer Motion; only reach for something heavier if it materially simplifies a complex sequence.
- Prefer animating `transform` and `opacity` — **never** animate `width`, `height`, `padding`, or `margin` (this trips the project's `impeccable` design-review hook's `layout-transition` rule and causes real jank). One historical false positive (an SVG `stroke-width` transition in `SystemTabs.tsx`) was reviewed and explicitly accepted as non-applicable since it's an SVG presentation attribute, not a CSS box-model property — don't re-flag that specific case without re-reviewing it.
- Respect `prefers-reduced-motion` everywhere (already wired into `AudienceJourney.tsx`'s `useCounter`, `SystemTabs.tsx`'s grid spin/cycle dot, `SawaHero.tsx`'s intro splash and marquee-era code).
- The traveling "person" dot along the hero's ribbon path, and the traveling pulse along the sphere's orbit ring, are both intentional signature motifs — keep them.

---

## 10. Current Responsive Design Issues and Decisions

- A full responsive audit was done across **1440 / 1200 / 1024 / 768px**. The 1440px layout is the approved baseline and must be preserved exactly.
- **Real bug found and fixed:** the `OurSolution` cascading doc-stack cards were overlapping into the next deliverable's copy between ~860–1040px. Root causes and fixes:
  - The stack breakpoint (`.ds-row` flex-direction switch) was raised from `860px` to **`1040px`** to skip the cramped side-by-side squeeze range entirely.
  - Back-card headlines are now capped to 2 lines via `-webkit-line-clamp` so height is bounded regardless of width.
  - The cascade's offset values were switched from viewport-relative (`vw`, wrong — scales against the whole browser width, not the actual column) to **CSS container query units (`cqw`, via `containerType: "inline-size"` on the `DocStack` wrapper)** — this is the correct, general pattern for any future "absolutely positioned element that should scale with its own container" work.
  - The stacked visual is capped at `max-width: 640px` and centered so it doesn't sprawl edge-to-edge on mid-width screens.
- Hero paragraph/CTA text was disproportionately small next to the huge headline on wide screens (capped at a small fixed max size while the headline scaled way up) — fixed by giving the paragraph and CTA labels their own `clamp()` that scales further before capping.
- **Known environment quirk, not a real bug:** this dev environment's browser-automation tooling frequently produces stale/blank/misleading screenshots and scroll positions (scroll not landing where expected, screenshots occasionally rendering blank even though the DOM/computed styles are correct). When verifying visual changes, cross-check with `getBoundingClientRect()` / `getComputedStyle()` / DOM text content via JS, not screenshots alone, and don't chase phantom "bugs" that only show up in the screenshot tool.
- **Known environment quirk, not a real bug:** stale Turbopack HMR occasionally serves phantom compile errors referencing long-deleted code (e.g. `StrategyCard is not defined`, `OwnedVsRented is not defined`). Fix: `preview_stop` → `rm -rf .next` (occasionally also `node_modules/.cache`) → `preview_start`, then verify in a **fresh browser tab** (old tabs can retain stale console history).
- One real hydration bug was found and fixed: the sphere's new "audience dot field" used raw `Math.sin`/`Math.cos` output as SVG coordinates/opacity, which is not guaranteed bit-identical across server/client JS engines and caused a hydration mismatch. Fixed with a shared `r2()` rounding helper (round to 3 decimals) applied to all trig-derived coordinates in `SystemTabs.tsx`. **If you add more procedurally-generated visuals (dot fields, generated paths, etc.), round the numeric output before it hits JSX attributes.**
- Mobile headline wrapping: the hero headline is guaranteed 2 lines at desktop widths, but at 375px it naturally wraps to more lines since the font can't shrink further without hurting readability — this was flagged as acceptable/expected, not fixed. Revisit only if explicitly asked.

---

## 11. Current Library/Blog Strategy

- Route: `/library` (index at `src/app/library/page.tsx`, driven by `LibraryIndexBody.tsx`).
- Single source of truth for article metadata: `src/components/library/libraryData.ts` (`LIBRARY_ARTICLES` array) — always update this file when adding/removing articles, since nav, footer, related-article modules, and the homepage `LibraryPreview` all read from it.
- Shared article chrome: `ArticleShell.tsx` (nav + footer wrapper), `ArticleHero.tsx`, `ArticleAtoms.tsx` (shared style tokens/components), `articleJsonLd.ts` (Article schema generator).
- Each article route has its own `page.tsx` + `ArticleBody.tsx` + one or more bespoke interactive components (see §13).
- The homepage `LibraryPreview.tsx` section shows exactly the 3 real articles below in a simple 3-card equal-width glass-card grid (redesigned away from an earlier asymmetric "oversized overlapping headline" layout per explicit request for something "simple and clean").

---

## 12. Our SEO, AEO, and GEO Strategy

Governed by the `sawa-aeo-technical` skill. Key rules already implemented and to be maintained:

- **Entity clarity**: every page must consistently communicate the current B2B/owned-audience identity (`src/app/layout.tsx` JSON-LD `@graph` = Organization + WebSite + Service, describing exactly this). Never let old MBA-admissions or creator-only identity language leak back in.
- **Core content must be server/statically rendered, semantic HTML** — never hide the primary answer inside canvas/animation/client-only state/an image. Interactive tools enhance the answer, they don't replace it.
- One clear `<h1>`, logical H2/H3 hierarchy, real crawlable `<a>` links.
- Articles put a concise direct answer near the top when targeting a question, use descriptive headings mapped to real sub-questions, include evidence/examples/nuance/limitations, cite sources for factual claims, and carry Article/Breadcrumb/Organization schema only when it accurately reflects visible content.
- Full technical SEO plumbing already in place: canonical URLs via `metadataBase`, Open Graph + Twitter metadata, descriptive per-page titles via the `%s | Sawa` template, `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt`.
- Legacy-URL cleanup rule (for when old StartSawa/MBA-admissions URLs are dealt with): 301 redirect only where a genuine current equivalent exists, 410/delete otherwise, noindex only if the page must stay reachable but shouldn't be indexed. Never mass-redirect unrelated old pages to the homepage. Remove legacy URLs from the sitemap and internal links.
- **AEO design rule**: if an AI crawler never executes the interaction, the page must still contain a complete, useful, coherent answer in the static HTML.

---

## 13. The First 3 Blogs We Are Planning (Already Built)

These three articles are live and are the current full extent of the Library:

1. **`newsletter-vs-nurture-vs-lifecycle-email`** (COMPARISON, index 01)
   Title: "Newsletter vs. Nurture Sequence vs. Lifecycle Email"
   Dek: "What's the difference?"
   Thesis: Three formats people constantly confuse, defined precisely and compared side by side.
   Bespoke components: `Comparator.tsx`, `JourneyDiagram.tsx`.

2. **`b2b-newsletter-frequency`** (DECISION TOOL, index 02)
   Title: "How Often Should a B2B Company Send a Newsletter?"
   Dek: "A framework, not a rule."
   Thesis: The four factors that actually set your cadence, plus a tool that gives a starting answer.
   Bespoke components: `CadenceFinder.tsx` (interactive), `SignalSpectrum.tsx`.

3. **`b2b-welcome-sequence`** (FRAMEWORK, index 03)
   Title: "What Should a B2B Welcome Sequence Include?"
   Dek: "Earn the second open."
   Thesis: A six-job framework for new subscribers, not existing customers, with a real before/after rewrite.
   Bespoke components: `WelcomeSequenceBuilder.tsx` (interactive), `BeforeAfterRewrite.tsx`.

No further articles have been planned or scoped yet beyond these three.

---

## 14. The Rules We Created for How Blogs Should Be Structured

- Each article gets its own folder under `src/app/library/<slug>/` with `page.tsx` (metadata + JSON-LD + shell) and `ArticleBody.tsx` (the actual content), plus any bespoke interactive component(s) specific to that article's teaching device (a comparator, a decision tool, a builder, etc.) — **one distinct interactive "teaching device" per article**, not shared generic widgets.
- Register every article in `libraryData.ts` (`LIBRARY_ARTICLES`) — this is the single source of truth consumed everywhere (index, nav, footer, homepage preview, cross-links).
- Article `type` is one of `"COMPARISON" | "DECISION TOOL" | "FRAMEWORK"` (extend the union in `libraryData.ts` if a genuinely new type is needed).
- Follow the AEO content rules in §12: direct answer up top, descriptive headings mapped to real sub-questions, evidence/nuance/limitations included, sources cited for factual claims.
- Interactive content must degrade gracefully — the core meaning must remain in static HTML if JS fails (per `sawa-motion-interactions` and `sawa-aeo-technical`).
- Same voice/copy rules as the rest of the site apply: no em dashes, no jargon, no fabricated results/testimonials, illustrative-only numbers where used.

---

## 15. Current Technical Setup

- **Framework**: Next.js 16.2.6 (App Router), React 19.2.4, TypeScript 5.
- **Styling**: inline React `style` objects with shared hex-color-token consts per file (no Tailwind classes in the components actively used on the homepage, despite Tailwind 4 + `@tailwindcss/postcss` being installed — Tailwind appears to be a leftover dependency, not the active styling approach for the live pages).
- **Animation**: `framer-motion` (`motion`, `AnimatePresence`, `whileInView`).
- **Booking**: `@calcom/embed-react` (Cal.com embed, initialized in `src/app/lp/page.tsx`'s `useEffect`).
- **Analytics**: `@vercel/analytics`.
- **Supabase**: `@supabase/supabase-js` is installed and `src/lib/supabase.ts` exists, but there was no evidence during this session of it being actively wired into any current homepage/library flow — verify before assuming it's live.
- **Dev server**: `npm run dev` (Next dev / Turbopack). This environment's preview tooling starts it via a named `dev` config; if you hit stale-HMR phantom errors, see the fix in §10.
- **Build**: `npm run build` — note this environment's sandboxed Bash tool has **no DNS/network access**, so `next/font`'s Google Fonts fetch fails there (`Could not resolve host`). This is a sandbox-only limitation, not a real bug — the actual dev server (a separate process with real network access) renders fine. Rely on `tsc --noEmit` + `eslint` + live browser verification instead of `npm run build` inside the sandboxed shell.
- **Verification routine used throughout this project** (follow it for every change):
  1. `npx tsc --noEmit` and `npx eslint <changed files>` — must be clean (pre-existing unrelated warnings like an unused `WHITE` const in `SawaHero.tsx` are fine to leave).
  2. `grep -n "—" <file> | grep -v "//\|{/\*"` — must return nothing (em-dash sweep).
  3. Visual verification via the live dev server in the Browser pane at both desktop (1440px) and mobile (375px), checking `read_console_messages` for real errors.

---

## 16. Important Files/Components in the Repo

**Live homepage stack** (all under `src/components/sections/` unless noted):
- `src/app/lp/page.tsx` — the homepage composition (imports and orders every section).
- `src/app/page.tsx` — re-exports `lp/page.tsx` as the site root.
- `SawaHero.tsx` — hero section (headline, copy, CTAs, intro splash animation). Renders `AudienceJourney`.
- `AudienceJourney.tsx` — the hero's 3-step "physical journey" scene (discovery cards → email audience panel → business outcome cards), wrapped in `stepPanel`-style shadowed boxes, connected by a bezier "ribbon" path with a traveling dot.
- `SystemTabs.tsx` — the Grow/Engage/Convert sphere with orbiting ring.
- `OurSolution.tsx` — the three deliverables in depth, alternating layout, realistic example artifacts (`DocStack`/`DocCard` cascade).
- `OperatingModel.tsx` — "How we work" section (Getting Started box + Learn/Plan/Create/Run 4-stage grid), styled after Fletch PMM's process card.
- `LibraryPreview.tsx` — homepage's 3-article glass-card preview grid.
- `SawaFAQ.tsx`, `FinalCTA.tsx` — unchanged/stable, left alone through most of this project's iteration.
- `src/components/layout/SawaNav.tsx`, `SawaFooter.tsx` — nav and footer used site-wide (including on article pages via `ArticleShell.tsx`).

**Library/blog stack**: see §11 and §13/14 above.

**Legacy/unused files — do not assume these are live, and do not edit them expecting it to affect the site** (found during `find src -name "*.tsx"` but never referenced by `lp/page.tsx`): `src/app/full/page.tsx` and a long tail of `src/components/sections/*.tsx` files with generic names — `Hero.tsx`, `CTA.tsx`, `Differentiation.tsx`, `EmailFlows.tsx`, `FAQ.tsx`, `LifecycleScroll.tsx`, `OwnedVsRented.tsx`, `Problem.tsx`, `ProblemFlows.tsx`, `Process.tsx`, `Results.tsx`, `Services.tsx`, `Solution.tsx`, `Stats.tsx`, `StickyServices.tsx`, `Testimonials.tsx`, `WhySawa.tsx`, `AudienceEngine.tsx`, plus `src/components/layout/Footer.tsx`/`Navigation.tsx` (older, superseded by `SawaFooter`/`SawaNav`), and most of `src/components/ui/*` (`AmbientBackground`, `CustomCursor`, `TiltCard`, `WorkflowAnimation`, `interactive-image-accordion`, `the-infinite-grid*`, `TabShowcase`) plus `src/components/seo/LandingPage.tsx`. **Confirm with the user before deleting any of these** — some may be intentionally preserved for reuse; `OwnedVsRented.tsx` in particular was explicitly kept on disk after removal from the page ("remove the component from the homepage entirely" — files still exist, just unused).

**Other homepage variants**: `email-marketing-for-creators`, `done-for-you-email-marketing`, `newsletter-growth-agency` under `src/app/` — status/purpose not established during this session; do not assume they're linked from the live homepage without checking.

---

## 17. Tools, Skills, and MCPs Currently Being Used

**Skills installed under `.claude/skills/`** relevant to this project (most useful ones bolded):
- **`sawa-art-director`** — the primary north-star skill for any Sawa design work (see §6).
- **`sawa-motion-interactions`** — motion/animation rules (see §9).
- **`sawa-aeo-technical`** — SEO/AEO/GEO rules (see §12).
- **`sawa-editorial-experience`** — turning articles into highly-designed, interactive, concise, AEO-friendly, shareable editorial experiences. Use this when building future `/library` articles.
- **`sawa-quality-gate`** — final QA checklist (brand fidelity, responsive behavior, accessibility, performance, credibility, SEO/AEO, interaction quality) — run this mentally (or literally invoke it) before considering any Sawa page "done."
- `impeccable` — general design-review/critique skill with an active auto-hook that flags potential design issues (e.g. layout-property animations) after edits. Findings must be triaged: fix real issues, or explicitly document false positives with reasoning (never silently suppress).
- Other generic design/animation skills present but not Sawa-specific (`animate`, `apple-design`, `emil-design-eng`, `minimalist-ui`, `redesign-existing-projects`, etc.) — available if needed but the `sawa-*` skills take priority for this project.

**MCP servers configured** (`.mcp.json`): `21st` (21st.dev component/design MCP) and `shadcn` (shadcn component registry MCP). Neither was actively used for the work in this session — the whole project uses hand-rolled inline-styled React, not shadcn components.

**Browser automation**: this session used the Claude Browser pane tools (`preview_start`/`navigate`/`computer`/`read_page`/`javascript_tool`/`read_console_messages`) to run the dev server and visually verify every change at multiple breakpoints. See §10 for the known quirks of this tooling in this environment.

---

## 18. Work That Has Already Been Completed

- Homepage simplified and locked to the 7-section structure in §3.
- Hero rebuilt multiple times: physical "journey" scene visual, 2-line headline with blue highlighter effect on "revenue.", marquee banner removed entirely, `InboxWindow` shrunk to stop dominating the layout, discovery/business-outcome cards filled with realistic example content (a LinkedIn DM, a designed YouTube thumbnail with an illustrated presenter silhouette, a Google-style search result, an X/Twitter post, a reply/meeting/opportunity/revenue card set with a real calendar showing actual dates).
- `SystemTabs.tsx` sphere fully redesigned: richer glass-orb gradient, deterministic audience dot-field, orbiting-ring Grow/Engage/Convert cycle replacing the old triangular loop, glass-pill label backings so labels stay legible over the sphere at every state.
- `OurSolution.tsx` rebuilt multiple times: from a wireframe cascade → glass cascade → Fletch-style stacked layout → Fletch-style alternating side-by-side layout (final) → responsive-bug fixes (container queries, line-clamp, raised breakpoint) → full content rework with realistic, specific example artifacts and copy (§5) → numbered step badges added, "STEP X OF 03" text removed.
- `OperatingModel.tsx` rebuilt to a Fletch-style bold-bordered process card, then converted to the site-wide glass treatment, "Getting Started" box added, spacing tightened after "too empty" feedback.
- `LibraryPreview.tsx` rebuilt from an asymmetric oversized-headline layout to a simple 3-card equal-width glass grid with soft background blobs.
- Site-wide glass-card treatment applied consistently (Hero, System, Our Solution, Operating Model, Library), then dimmed twice per feedback, then further dimmed specifically in the `AudienceJourney` step panels per the most recent feedback.
- Site-wide soft background gradient-blob treatment applied consistently across all light sections.
- Full responsive audit and fix pass across 1440/1200/1024/768px (see §10).
- Em-dash sweep and voice/jargon audit performed repeatedly and is part of the standing verification routine.
- Library/blog infrastructure and 3 initial articles built and linked (see §11/13).
- SEO/AEO technical foundation in place (see §12).

---

## 19. Work That Is Unfinished

- No further Library articles beyond the first 3 have been scoped or written.
- `OwnedVsRented.tsx` and the long tail of legacy section components (§16) have never been triaged — nobody has decided whether to delete them, repurpose them, or leave them as-is.
- The "Getting started" content in `OperatingModel.tsx` and other homepage copy has not been re-audited against the newer "realistic examples" standard that `OurSolution.tsx` now holds — it may be worth a consistency pass.
- No decision has been made about the `email-marketing-for-creators`, `done-for-you-email-marketing`, `newsletter-growth-agency` routes under `src/app/` — purpose, live status, and whether they need the same design/copy quality bar were never established.
- Supabase integration status is unverified (see §15) — nobody confirmed whether it's actively used (e.g. for a waitlist, contact form, or CMS) or a leftover dependency.
- Legacy-URL redirect/cleanup work described in the AEO strategy (§12) has not been started.

---

## 20. Bugs or Design Issues Still Remaining

- Mobile hero headline naturally wraps beyond 2 lines at narrow widths (~375px) — flagged as acceptable, not actually fixed. If "2 lines only" is later required at all widths, this needs a font-size or copy-length solution.
- The many legacy/unused section files in `src/components/sections/` and `src/app/full/page.tsx` add noise to the codebase and could confuse a future contributor into editing the wrong file (this document exists partly to prevent that — see §16 before touching any section file with a generic name).
- No automated visual regression testing exists — every verification pass in this project was manual (browser screenshots + DOM checks). A future contributor should be aware there's no safety net beyond `tsc`/`eslint`/manual checks.

---

## 21. What We Were Working On Immediately Before This Handoff

The most recent substantive work was a full rework of the **"Our Solution" section** (§5, §18) to replace generic/abstract UI mockups with realistic, specific, written example content — a real lead magnet, a real newsletter issue, and a real nurture sequence, each with concrete copy and illustrative stats — plus removing the redundant "STEP X OF 03" label there for consistency with the earlier `AudienceJourney` fix. That work was completed, verified (type-check, lint, em-dash sweep, live browser check at desktop and mobile, zero console errors), and confirmed working immediately before this handoff document was requested.

---

## 22. The Next 5 Things the Next Claude Should Work On

1. **Triage the legacy/unused files** in `src/components/sections/` and `src/app/full/page.tsx` (§16, §19) — confirm with the user whether to delete, archive, or repurpose them, rather than leaving them as a trap for future edits.
2. **Scope and write the next Library articles** beyond the first 3 (§13) — following the same one-bespoke-interactive-device-per-article pattern and AEO content rules (§14), and registering them in `libraryData.ts`.
3. **Consistency pass on remaining homepage copy** (FAQ, Final CTA, Operating Model's "Getting Started" box) against the "realistic, specific, non-generic" copy bar that `OurSolution.tsx` now sets — see if anything still reads as generic/repetitive.
4. **Resolve the status of the other landing-page routes** (`email-marketing-for-creators`, `done-for-you-email-marketing`, `newsletter-growth-agency`) — are they live, linked, on-brand, and up to the current design/copy standard?
5. **Start the legacy-URL SEO cleanup** described in §12 (audit old StartSawa/MBA-admissions URLs, apply the correct redirect/410/noindex decision per URL, and remove dead links from the sitemap) if/when the old site's URL list becomes available.

---

## DO NOT REGRESS

These are settled decisions. Do not undo them without an explicit new instruction from the user.

1. **Do not re-add the marquee/kinetic transition banner** between the Hero and System sections. It was built up over multiple iterations and then explicitly, completely removed.
2. **Do not re-add "STEP X OF 03"-style redundant text labels.** Numbered circle badge + title only, in both `OurSolution.tsx` and `AudienceJourney.tsx`. This was asked for twice.
3. **Do not make the `AudienceJourney` step panels (or any similar "outline box") stark white / high-opacity / heavy-shadow again.** They must stay faint and blended (current values: `background: rgba(224,238,250,0.16)`, `border: rgba(80,133,165,0.08)`, soft shadow). This was tuned down twice after explicit feedback.
4. **Do not revert `OurSolution.tsx`'s example content back to generic/abstract copy.** The lead magnet, newsletter issue, and nurture sequence examples (§5) are the explicit fix for a repeated complaint about generic, repetitive copy. Any future content changes should stay just as specific and concrete.
5. **Do not swap the `OurSolution.tsx` cascade's container-relative (`cqw`) sizing back to plain `vw`.** That was a real bug (cards overlapping at ~860–1040px) with a specific, correct fix. Any new absolutely-positioned element that should scale with its own container should follow the same `containerType: "inline-size"` + `cqw` pattern, not `vw`.
6. **Do not lower the `OurSolution.tsx` side-by-side/stacked breakpoint back to 860px.** It must stay at 1040px to avoid the cramped squeeze range.
7. **Do not shrink the homepage proportionally for narrower desktop/tablet widths.** Each width should feel deliberately art-directed (adjusted column proportions, spacing, and visual sizing), never a naive scale-down of the 1440px layout. The 1440px layout itself must be preserved as the approved baseline.
8. **Do not resize/re-expand the hero's `InboxWindow`** back to full column width. It's intentionally capped (`maxWidth: 420`) after explicit "don't want the visual to take a lot of space" feedback.
9. **Do not re-introduce em dashes into rendered copy**, and do not reintroduce banned marketing jargon ("owned reach," "compounding," "audience engine," "conversion flow," "pipeline activation," etc.) or fabricated named testimonials/verified results.
10. **Do not scroll-jack or pin sections.** All motion stays `whileInView` fade/slide-based, respecting `prefers-reduced-motion`.
11. **Do not animate `width`/`height`/`padding`/`margin`.** Animate `transform`/`opacity` only (except the one documented, reviewed false-positive: the SVG `stroke-width` transition in `SystemTabs.tsx`'s arc paths).
12. **Do not mix in the old MBA-admissions or creator-only identity language.** The current identity is B2B, owned-audience marketing, consistently, everywhere (see `layout.tsx` JSON-LD as the canonical description).
13. **Do not treat blank/stale browser-tool screenshots or phantom stale-HMR compile errors as real bugs** without first re-verifying via DOM/computed-style checks and a fresh tab / cache-cleared dev server restart (§10). Don't "fix" code in response to a tooling artifact.
