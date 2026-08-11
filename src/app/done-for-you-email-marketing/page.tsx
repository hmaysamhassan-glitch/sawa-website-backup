import type { Metadata } from "next";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";

export const metadata: Metadata = {
  title: "Done-for-You Email Marketing",
  description:
    "Done-for-you email marketing for creators and founder-led brands. Sawa owns your email channel end-to-end — strategy, list growth, newsletters, launches, and revenue.",
  alternates: { canonical: "/done-for-you-email-marketing" },
  openGraph: {
    type: "website",
    url: "/done-for-you-email-marketing",
    siteName: "Sawa",
    title: "Done-for-You Email Marketing | Sawa",
    description:
      "Sawa owns your email channel end-to-end — strategy, list growth, weekly newsletters, automations, and launches. You stay in your zone; we run the inbox.",
    images: ["/og-image.png"],
  },
};

const content: LandingContent = {
  slug: "done-for-you-email-marketing",
  eyebrow: "Done-for-you email marketing",
  h1: "Done-for-you email marketing, run start to finish",
  subhead:
    "Not a tool to learn or a freelancer to manage. Sawa takes the whole email channel off your plate — strategy, list growth, newsletters, automations, and launches — and runs it as your team.",
  serviceName: "Done-for-you email marketing",
  serviceDescription:
    "Sawa provides done-for-you email marketing for creators and founder-led brands, owning the channel end-to-end: strategy, list growth, weekly newsletters, automations, launches, copy, deliverability, and reporting.",
  sections: [
    {
      h: "Who this is for",
      body: "For people who know email should be working harder and don't want to be the one making it happen.",
      bullets: [
        { t: "Busy creators and founders", d: "whose time is better spent on the product and the audience than on the inbox." },
        { t: "Teams without an email owner", d: "who need the channel run properly without another hire." },
        { t: "Brands leaving money in email", d: "with a list that isn't being worked the way it should be." },
      ],
    },
    {
      h: "What “done-for-you” means at Sawa",
      body: "It means you don't touch the machinery. We take the goal, build the system, and run it — you stay the creative and strategic voice, not the operator.",
    },
    {
      h: "Everything we handle",
      bullets: [
        { t: "Strategy", d: "the plan for how email earns — audience, offers, calendar, and targets." },
        { t: "List growth", d: "capture, lead magnets, referrals, and cross-promotions that add real subscribers." },
        { t: "Weekly newsletters", d: "planned, written, designed, and sent in your voice, on schedule." },
        { t: "Automations", d: "welcome, nurture, and win-back flows that run continuously." },
        { t: "Launches", d: "full campaign sequences that make product drops land." },
        { t: "Deliverability and reporting", d: "inbox placement, list health, and clear reporting on revenue." },
      ],
    },
    {
      h: "How onboarding works",
      steps: [
        { t: "Intro call and audit", d: "we learn your audience and goals and review your current setup." },
        { t: "Build the system", d: "we set up growth, newsletter, and automations and align on your voice." },
        { t: "Go live and run it", d: "we take over sending and growth, and report on what's driving revenue." },
      ],
    },
    {
      h: "What stays yours",
      body: "Done-for-you never means handing over control.",
      bullets: [
        { t: "Your list", d: "subscribers are yours — on your platform, exportable anytime." },
        { t: "Your voice", d: "we write as you, and you approve the standard as much as you want." },
        { t: "Your data", d: "full visibility into performance, with nothing locked behind us." },
      ],
    },
  ],
  faqs: [
    {
      q: "What does done-for-you email marketing include?",
      a: "The whole channel: strategy, list growth, weekly newsletters, automations, launch campaigns, copywriting, deliverability, and reporting. You set the direction; Sawa does the work.",
    },
    {
      q: "Who owns my email list and data?",
      a: "You do, always. Your subscribers live on your platform under your account, and you can export your list and see your data at any time.",
    },
    {
      q: "How much of my time does it take?",
      a: "Very little. After onboarding, most clients spend a short amount of time each week reviewing and approving. The point is to take email off your plate, not add to it.",
    },
    {
      q: "What platforms do you work with?",
      a: "The ones creators and brands already use — Beehiiv, Kit (ConvertKit), Klaviyo, and similar. If you're not set up yet, we'll recommend and configure the right platform.",
    },
    {
      q: "Is there a long contract?",
      a: "We keep terms straightforward and scope the engagement to your goals. We'll walk through exactly how it works on the intro call — no surprises.",
    },
  ],
  related: [
    { href: "/email-marketing-for-creators", label: "Email marketing for creators", desc: "The full email channel, run for creators." },
    { href: "/newsletter-growth-agency", label: "Newsletter growth agency", desc: "Grow your list and keep readers engaged." },
    { href: "/", label: "Sawa home", desc: "See how Sawa turns your audience into revenue." },
  ],
};

export default function Page() {
  return <LandingPage content={content} />;
}
