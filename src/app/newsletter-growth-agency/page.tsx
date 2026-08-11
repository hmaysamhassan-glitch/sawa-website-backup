import type { Metadata } from "next";
import LandingPage, { type LandingContent } from "@/components/seo/LandingPage";

export const metadata: Metadata = {
  title: "Newsletter Growth Agency",
  description:
    "Sawa is a newsletter growth agency for creators and founder-led brands. We grow your subscriber list, run your newsletter, and turn readers into revenue. Book a call.",
  alternates: { canonical: "/newsletter-growth-agency" },
  openGraph: {
    type: "website",
    url: "/newsletter-growth-agency",
    siteName: "Sawa",
    title: "Newsletter Growth Agency | Sawa",
    description:
      "A newsletter growth agency that runs the whole thing — subscriber growth, weekly production, and monetization for creators and founder-led brands.",
    images: ["/og-image.png"],
  },
};

const content: LandingContent = {
  slug: "newsletter-growth-agency",
  eyebrow: "Newsletter growth agency",
  h1: "A newsletter growth agency that runs the whole thing",
  subhead:
    "Most agencies grow your list and leave the rest to you. Sawa grows the list and runs the newsletter and turns those readers into revenue — one partner, one accountable outcome.",
  serviceName: "Newsletter growth agency",
  serviceDescription:
    "Sawa is a newsletter growth agency for creators and founder-led brands. We grow subscriber lists through capture, referrals, and cross-promotion, run weekly production, and monetize the audience.",
  sections: [
    {
      h: "Who this is for",
      body: "For anyone whose newsletter should be bigger — and should be making money.",
      bullets: [
        { t: "Creators with a newsletter", d: "who've plateaued and want real, compounding subscriber growth." },
        { t: "Founder-led brands", d: "using a newsletter as a top-of-funnel and retention channel." },
        { t: "People starting from zero", d: "who want the list built right from day one, not patched later." },
      ],
    },
    {
      h: "What a newsletter growth partner actually does",
      body: "Growth is more than an opt-in box. We build the full engine.",
      bullets: [
        { t: "Acquisition", d: "on-site capture, lead magnets, referral loops, cross-promos, and paid where it pays." },
        { t: "Retention", d: "a newsletter people actually open, so the list you grow doesn't quietly churn." },
        { t: "Production", d: "we plan, write, and send every issue so growth never stalls on a missed week." },
        { t: "Monetization", d: "we turn subscribers into revenue through launches, offers, and sponsorships." },
      ],
    },
    {
      h: "Our growth approach",
      steps: [
        { t: "Fix the leaks first", d: "we tune capture and deliverability so the subscribers you have don't slip away." },
        { t: "Turn on acquisition", d: "referrals, lead magnets, and cross-promotions that bring the right readers in." },
        { t: "Compound it", d: "every issue and every launch feeds the next, so growth builds on itself." },
      ],
    },
    {
      h: "Beyond growth: turning subscribers into revenue",
      body: "A bigger list only matters if it earns. We treat every subscriber as future revenue — mapping offers, launches, and sponsorships to your audience so the list pays for itself and then some.",
    },
    {
      h: "Why Sawa instead of a typical agency",
      bullets: [
        { t: "End to end, not hand-offs", d: "growth, production, and monetization live with one team." },
        { t: "Accountable to revenue", d: "we measure success in dollars, not just subscriber count." },
        { t: "Your list, your voice", d: "we write as you, and the audience and data are always yours." },
      ],
    },
  ],
  faqs: [
    {
      q: "How fast can you grow my newsletter?",
      a: "It depends on your starting point and niche, but most partners see meaningful, steady growth within the first couple of months once capture, referrals, and cross-promotions are running. We favor durable growth over spikes that churn.",
    },
    {
      q: "How do you actually grow a newsletter?",
      a: "A mix of on-site capture, lead magnets, referral programs, cross-promotions with other creators, and paid acquisition where the numbers work — paired with a newsletter good enough that new subscribers stay.",
    },
    {
      q: "Do you work with brand-new newsletters?",
      a: "Yes. Starting from zero is often easier because we can build the growth engine and sending setup correctly from the start, rather than fixing it later.",
    },
    {
      q: "Is this different from a course or coaching program?",
      a: "Completely. Sawa is done-for-you — we do the work and run the channel. You're not learning to do it yourself; you're hiring a team that already does.",
    },
    {
      q: "What does it cost?",
      a: "Pricing depends on scope — growth-only versus full production and monetization. The fastest way to get a number is a short intro call where we scope it to your goals.",
    },
  ],
  related: [
    { href: "/email-marketing-for-creators", label: "Email marketing for creators", desc: "Full email channel, run for creators." },
    { href: "/done-for-you-email-marketing", label: "Done-for-you email marketing", desc: "We own strategy through execution." },
    { href: "/", label: "Sawa home", desc: "See how Sawa turns your audience into revenue." },
  ],
};

export default function Page() {
  return <LandingPage content={content} />;
}
