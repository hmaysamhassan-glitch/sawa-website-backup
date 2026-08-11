import type { Metadata } from "next";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";

export const metadata: Metadata = {
  title: "Email Marketing for Creators",
  description:
    "Sawa runs email for creators end-to-end — we grow your list, send your newsletter every week, and turn your audience into predictable revenue. Book an intro call.",
  alternates: { canonical: "/email-marketing-for-creators" },
  openGraph: {
    type: "website",
    url: "/email-marketing-for-creators",
    siteName: "Sawa",
    title: "Email Marketing for Creators | Sawa",
    description:
      "Done-for-you email for creators: list growth, weekly newsletters, launches, and revenue. You create — Sawa handles the inbox.",
    images: ["/og-image.png"],
  },
};

const content: LandingContent = {
  slug: "email-marketing-for-creators",
  eyebrow: "Email marketing for creators",
  h1: "Email marketing for creators, done for you",
  subhead:
    "You built the audience. Sawa turns it into a revenue channel — we grow your list, write and send your newsletter, and run your launches, so email stops being the thing you never get to.",
  serviceName: "Email marketing for creators",
  serviceDescription:
    "Sawa is a done-for-you email partner for creators. We grow your list, run your weekly newsletter, build automations, and manage product launches — turning your audience into predictable revenue.",
  sections: [
    {
      h: "Who this is for",
      body: "If you have an audience but email is the channel you keep meaning to get to, this is for you.",
      bullets: [
        { t: "Creators and newsletter writers", d: "with an engaged following who want email to actually earn." },
        { t: "Founder-led and personal brands", d: "where your name is the brand and your time is the bottleneck." },
        { t: "Course, product, and community sellers", d: "who launch to their list and want every launch to land." },
      ],
    },
    {
      h: "What Sawa runs for you",
      body: "Not advice or a template pack. We own the channel end to end.",
      bullets: [
        { t: "List growth", d: "capture on your site, lead magnets, referrals, and cross-promotions that add the right subscribers." },
        { t: "Weekly newsletter", d: "we plan, write, design, and send it in your voice — every week, without you chasing it." },
        { t: "Automations", d: "welcome, nurture, and re-engagement flows that work while you sleep." },
        { t: "Product launches", d: "full launch sequences that turn a drop into a revenue event." },
        { t: "Deliverability and reporting", d: "we keep you landing in the inbox and report on what drives revenue." },
      ],
    },
    {
      h: "How it works",
      steps: [
        { t: "Audit and strategy", d: "we map your audience, offers, and current setup, then build the plan." },
        { t: "We build and run it", d: "list growth, newsletter, and automations go live — and stay live, run by us." },
        { t: "You create, we report", d: "you keep making what you make; we grow the list and show you the revenue." },
      ],
    },
    {
      h: "Why creators work with Sawa",
      body: "Most agencies hand you tasks. Sawa is an email revenue partner — we own the outcome, not a checklist.",
      bullets: [
        { t: "One channel, fully owned", d: "strategy, copy, design, sends, and growth all under one roof." },
        { t: "Revenue-focused, not vanity", d: "we optimize for money in the bank, not open-rate screenshots." },
        { t: "Your voice, your list", d: "we write as you, and your audience and data always belong to you." },
      ],
    },
  ],
  faqs: [
    {
      q: "What does email marketing for creators actually involve?",
      a: "Everything from growing your subscriber list to writing and sending your newsletter, building automations, and running launches. Sawa handles the full channel so you can stay focused on creating.",
    },
    {
      q: "Do I need a big audience to work with Sawa?",
      a: "No. What matters more than raw size is an engaged audience and something to sell — a product, course, membership, or sponsorships. We help you grow the list from there.",
    },
    {
      q: "Which email platforms do you work with?",
      a: "We work in the tools creators already use, including Beehiiv, Kit (ConvertKit), Klaviyo, and similar platforms. If you haven't picked one yet, we'll recommend the right fit.",
    },
    {
      q: "Do you write the newsletter for me?",
      a: "Yes. We plan, write, and design your newsletter in your voice, then send it on schedule. You review as much or as little as you want.",
    },
    {
      q: "How soon will I see results?",
      a: "List growth and automation wins usually show up in the first few weeks. Revenue builds as your list grows and your launches compound over the following months.",
    },
  ],
  related: [
    { href: "/newsletter-growth-agency", label: "Newsletter growth agency", desc: "Grow your subscriber list and keep readers engaged." },
    { href: "/done-for-you-email-marketing", label: "Done-for-you email marketing", desc: "We own your entire email channel, end to end." },
    { href: "/", label: "Sawa home", desc: "See how Sawa turns your audience into revenue." },
  ],
};

export default function Page() {
  return <LandingPage content={content} />;
}
