# MASTER PROMPT — Start Sawa Homepage Rebuild

You are working inside the existing Start Sawa codebase.

## Objective
Upgrade https://www.startsawa.com/ into a dramatically stronger homepage while preserving the visual DNA Ziad already likes.

Do NOT make a totally different brand. Treat the existing site as version 1 of a strong idea:
- dark, premium atmosphere
- data-console / system UI
- compact status labels and technical details
- Grow / Newsletter / Campaign visual language

The job is to make that idea feel 10x more complete, intelligent, premium, interactive, credible, and B2B-specific.

Use these project skills throughout:
- /sawa-art-director
- /sawa-motion-interactions
- /sawa-aeo-technical
- /sawa-quality-gate

If 21st.dev MCP / shadcn skills are connected, use them as implementation accelerators and reference sources, not as a substitute for design judgment. If Higgsfield is connected, use it only for one or two bespoke ambient/brand assets when they improve the page; do not let generated imagery take over the site.

---

## Step 0 — Audit before editing
First inspect:
- current page/component tree
- current typography
- color tokens
- spacing
- current animation system
- existing reusable UI
- routing and metadata
- current mobile behavior

Write a short internal audit before changing files:
1. What must be preserved.
2. What currently feels incomplete.
3. Which existing components can be evolved rather than replaced.

Then implement.

---

# POSITIONING TO IMPLEMENT

## Core category
Sawa is a white-glove, AI-native marketing partner for B2B companies.

The AI-native part describes **how we operate**; do not make it the only reason to buy.

## Core customer problem
B2B teams create attention on channels they do not own, have inconsistent systems for staying in front of their ICP, and often underuse the email audience they already have.

## Core promise
Sawa helps B2B companies:
1. GROW an owned email audience.
2. ENGAGE it with repeatable content/newsletter systems.
3. CONVERT it with email sequences and campaigns.

## Brand thesis
**Own your audience. Turn attention into revenue.**

## Hero copy
Eyebrow:
AI-NATIVE. HUMAN-LED. BUILT FOR B2B.

H1:
Own your audience.
Turn attention into revenue.

Supporting copy:
Sawa embeds with B2B teams to grow the right email list, build the content system that keeps it engaged, and run the sequences and campaigns that turn attention into pipeline.

Primary CTA:
Book an intro call

Secondary CTA:
See how the system works

Small trust line:
White-glove strategy + execution. Built to ramp fast inside your team.

Do not invent prices, client names, logos, or performance metrics.

---

# NAVIGATION / SITE ARCHITECTURE

Build a real sticky navigation, not a logo + one button.

Desktop:
- Sawa logo
- What we do ▾
- How it works
- Work
- Library ▾
- About
- Book intro call [primary CTA]

“What we do” dropdown:
- Grow your audience
  Build high-quality email acquisition systems.
- Content systems
  Turn expertise into LinkedIn + newsletter content that compounds.
- Email sequences & campaigns
  Welcome, nurture, lifecycle, launches, and conversion campaigns.

“Library” dropdown:
- All insights
- Owned audience
- List growth
- Newsletters
- Lifecycle + nurture
- Copy + conversion
- Tools

Mobile:
intentional drawer navigation, not a squeezed desktop menu.

Footer:
repeat primary IA + FAQ + Privacy + Terms + LinkedIn/contact + concise entity sentence:
“Sawa is a white-glove B2B marketing partner specializing in owned-audience growth, content systems, newsletters, and email sequences.”

Do not create empty pages just to make the nav look large. If a route is not ready today, link to an anchored homepage section or a real Library filter state until its dedicated page is built.

---

# HOMEPAGE EXPERIENCE

## 1 — Hero: the live Audience Engine
Preserve the current system-console concept, but evolve it.

Desktop layout:
- strong editorial copy on left
- interactive “Audience Engine” on right

The visual should show:
Rented attention sources → owned email audience → engagement → conversion

Use three existing conceptual modes:
GROW / ENGAGE / CONVERT

When the user changes mode:
- GROW highlights lead magnets, opt-ins, referral loops, source channels.
- ENGAGE highlights expert input, content engine, newsletter cadence.
- CONVERT highlights welcome/nurture/campaign sequences and pipeline actions.

Use moving nodes/lines, status labels, subtle counters only where they are examples—not fake business results.
Avoid a generic fake SaaS dashboard.

## 2 — Credibility strip
Headline:
Built by operators, not a content mill.

Use only approved/verified facts from the project content. Ziad supplied these ideas, but verify before shipping exact wording:
- team experience running large-scale marketing campaigns
- startup/founder/operator experience
- Harvard network/team context
If exact numeric claims are not verifiable in the repo/content, use qualitative wording or leave them out.

## 3 — Core thesis: rented attention vs owned audience
Headline:
Your followers are rented. Your email list is yours.

Build an interactive visual:
left = platform logos / algorithms / shifting reach
right = owned subscriber graph / direct relationship / repeatable nurture

As the user scrolls, attention moves from rented platforms into the Sawa-owned audience system.

Copy should explain why Sawa begins with audience ownership rather than “posting more.”

CTA:
Explore the owned-audience guide
Link to the first launch article.

## 4 — One system. Three engines.
A high-design section for:
GROW
ENGAGE
CONVERT

Each engine should have:
- one-line outcome
- what Sawa actually builds
- 3-5 concrete deliverables/examples
- an interactive miniature visual
- a “best for” problem statement

Suggested copy direction:

GROW
Build an email audience concentrated with people you actually want to reach.
Lead magnets · landing pages · referral loops · channel-to-email funnels · growth experiments

ENGAGE
Turn your expertise into a content system people recognize and return to.
SME interviews · LinkedIn systems · newsletters · editorial calendars · content repurposing

CONVERT
Build the email journeys that move attention toward revenue.
Welcome · nurture · lifecycle · launches · re-engagement · campaigns

## 5 — How Sawa plugs in
Headline:
White-glove enough to feel in-house. Fast enough not to hire a team.

Build a visual 30-day ramp as a proposed framework:
Week 1 — ICP + voice + systems
Week 2 — growth/content architecture
Week 3 — campaigns + production
Week 4 — live operating cadence

IMPORTANT: because Ziad said “within a month we understand your voice and tone and are ready to run,” present this as the operating concept, but make the labels easy to edit if he wants to refine the exact process.

## 6 — Work / proof
Use the existing verified case study content already present in the project where possible.
Do not invent more results.

Make case studies feel editorial:
- problem
- system built
- measurable outcome
- visual timeline / system diagram
- link to full case study when available

If only one case study is verified, make one excellent case-study feature rather than faking a carousel of six.

## 7 — Interactive diagnosis
Headline:
Where is your audience engine leaking?

A short 3-5 question diagnostic:
- Are you consistently adding qualified contacts?
- Are you publishing something your ICP expects?
- Do new subscribers enter a welcome/nurture path?
- Can you attribute content/email to pipeline?
- Does the system run without founder heroics?

Return a result:
Growth gap / Engagement gap / Conversion gap / System gap

CTA:
Talk to Sawa about the gap

This is a lead-generation interaction, not a gimmick.

## 8 — Why Sawa
Do not make a generic “why us” grid.

Use a comparison system showing the tradeoffs among:
- build in-house
- freelancers
- generic agency
- AI tools alone
- Sawa

Compare on:
- strategic ownership
- speed to ramp
- depth of context
- cross-channel system
- execution capacity

Keep claims qualitative and defensible.

Headline direction:
AI gives us leverage. Expertise tells it what to do.

Use Ziad's key idea:
The value is years of operator expertise, playbooks, judgment, and the ability to ramp into a team's voice quickly—not merely access to AI.

## 9 — Library preview
Headline:
We show our work.

Feature the four launch pieces:
1. What Is an Owned Audience?
2. Should Your B2B Company Start a Newsletter?
3. How Often Should a B2B Company Send a Newsletter?
4. How Valuable Is Your Email List?

Cards should feel like editorial covers, not blog thumbnails.
Show the interaction type:
VISUAL GUIDE / SCORECARD / CALCULATOR / TOOL

CTA:
Explore the Sawa Library

## 10 — FAQ
Use concise, direct answers. Suggested questions:
- What exactly does Sawa do?
- Who is Sawa for?
- Is Sawa software?
- How is Sawa different from a traditional marketing agency?
- How quickly can Sawa ramp into our team?
- Do you only do newsletters?
- Can Sawa work with our existing marketing team?
- How does AI fit into Sawa's work?

Do not invent pricing.

## 11 — Final CTA
Headline:
Stop renting all of your attention.

Supporting:
Build an audience your company can reach whenever it wants—and a system that gives people a reason to keep listening.

CTA:
Book an intro call

---

# VISUAL / INTERACTION LANGUAGE

The page should feel like:
**premium editorial × live marketing operating system**

Use:
- existing Sawa dark palette
- warm off-white typography
- existing accent token
- subtle grid/linework
- monospaced system metadata paired with strong editorial display type
- beautiful diagrams
- progressive reveal
- animated connection paths
- purposeful hover states
- sticky visual sections where useful
- polished microcopy

Do not use random gradients, generic illustration packs, or a new visual language unrelated to the current site.

---

# TECHNICAL / AEO REQUIREMENTS

1. Update title/meta away from “influencers and creators” to the approved B2B positioning.
2. Audit and clean old MBA-admissions URLs and metadata.
3. Core homepage copy must render as semantic HTML.
4. Use proper heading hierarchy.
5. Add Organization/Service structured data where truthful.
6. Update sitemap and canonicals.
7. Preserve crawlable anchor links.
8. Add strong internal links to the four launch articles.
9. Do not hide meaningful content inside animation-only components.
10. Implement reduced-motion fallback.
11. Mobile must feel designed, not merely stacked.
12. Run the Sawa quality gate before finishing.

---

# DEFINITION OF DONE

Do not stop at “components are coded.”

Finish only when:
- homepage builds successfully
- desktop + mobile reviewed
- navigation works
- current visual DNA is clearly recognizable
- copy is B2B-aligned
- Grow / Engage / Convert are clear within 10 seconds
- at least one interactive system diagram is polished
- Library preview is live
- old creator-only metadata is updated
- no obvious legacy MBA links remain in current IA
- no invented proof
- no console errors
- reduced motion works
