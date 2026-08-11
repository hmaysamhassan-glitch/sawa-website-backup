"use client";
import Link from "next/link";
import ArticleHero from "@/components/library/ArticleHero";
import {
  ArticleFAQ, ArticleCTA, RelatedArticles, PullQuote,
  proseH2, proseH3, proseP, INK, STEEL, MID, BORDER,
} from "@/components/library/ArticleAtoms";
import CadenceFinder from "./CadenceFinder";
import SignalSpectrum from "./SignalSpectrum";

const FAQS = [
  {
    q: "Should B2B and B2C cadence be different?",
    a: "Usually, yes. B2C audiences often tolerate and even expect more frequent contact, especially around promotions. B2B audiences are reading in a professional context with less patience for volume and more patience for relevance, which is why quality-per-send matters more than raw frequency.",
  },
  {
    q: "What if I don't have enough content for weekly?",
    a: "Then don't send weekly. Sending a thin, low-effort newsletter every week does more damage than sending a genuinely useful one every month. Cadence should follow your real content supply, not the other way around.",
  },
  {
    q: "Does sending less often hurt deliverability?",
    a: "Infrequent sending can hurt engagement, which indirectly affects deliverability over time, since inbox providers weigh how recipients interact with your mail. But an inconsistent, unpredictable cadence is usually worse for deliverability than a low but steady one.",
  },
];

export default function ArticleBody() {
  return (
    <article>
      <ArticleHero
        type="Decision tool"
        readTime="6 min read"
        title="How Often Should a B2B Company Send a Newsletter?"
        dek="A framework, not a rule."
        updated="August 2026"
        directAnswer={
          <>
            There&apos;s no universal ideal newsletter frequency, but most B2B companies should default to{" "}
            <strong>weekly, biweekly, or monthly</strong>, in that order of preference, based on how much
            genuinely useful content they can produce, how considered their buyer&apos;s purchase is, and who
            owns production. Sending less than monthly causes subscribers to forget who you are. Sending more
            than your content quality supports causes fatigue and unsubscribes. The right cadence is the fastest
            one you can sustain without dropping quality.
          </>
        }
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>
        <h2 style={proseH2}>The four factors that actually determine your cadence</h2>
        <p style={proseP}>
          Most advice on this stops at &quot;it depends,&quot; which is true but not useful. It depends on
          four specific things, and reasoning through them actually gets you an answer.
        </p>

        <h3 style={proseH3}>Content supply</h3>
        <p style={proseP}>
          How much genuinely useful material can you produce without padding? This is the hard ceiling.
          Cadence should follow supply, not the other way around; committing to weekly and then filling the gap
          with thin content is worse than sending less often.
        </p>

        <h3 style={proseH3}>Audience expectation</h3>
        <p style={proseP}>
          What did people sign up for? A newsletter framed as a deep monthly analysis sets a different
          expectation than one framed as a quick weekly roundup. Whatever you set, the cost of breaking it is
          higher than the cost of setting it conservatively.
        </p>

        <h3 style={proseH3}>Buying cycle length</h3>
        <p style={proseP}>
          A short, fast-moving buying cycle can tolerate, and benefits from, higher frequency, the sales
          conversation moves quickly and staying visible matters. A long, considered buying cycle with multiple
          stakeholders needs a cadence people can trust will still be relevant months from now, which usually
          means less frequent but higher-signal sends.
        </p>

        <h3 style={proseH3}>Production capacity</h3>
        <p style={proseP}>
          Who actually owns this, and how much of their time does it realistically get? A dedicated owner can
          sustain more than someone doing it alongside five other responsibilities. Be honest about this one;
          it's the factor most plans get wrong.
        </p>

        <h2 style={proseH2}>Find your starting cadence</h2>
        <p style={proseP}>
          Answer the three questions below for a recommended starting point, with the reasoning behind it.
        </p>
        <CadenceFinder />

        <PullQuote lines={["The right cadence is the fastest one", "you can sustain without dropping quality."]} />

        <h2 style={proseH2}>How to tell your cadence is wrong</h2>
        <p style={proseP}>
          Two failure modes, and they look almost identical if you only check one metric.
        </p>
        <SignalSpectrum />
        <p style={proseP}>
          For most B2B companies, sending too rarely is the bigger risk. Under monthly, subscribers genuinely
          forget why they subscribed, and re-engagement is harder than it sounds.
        </p>

        <h2 style={proseH2}>How to run a cadence experiment</h2>
        <p style={proseP}>
          If you&apos;re not sure whether to increase or decrease frequency, don&apos;t guess indefinitely.
          Run a bounded test:
        </p>
        <ol style={{ ...proseP, paddingLeft: 20, margin: "0 0 16px" }}>
          <li style={{ marginBottom: 10 }}><strong>Pick one direction and one duration.</strong> Move from monthly to biweekly, or biweekly to weekly, for 6 to 8 sends, long enough to see a real trend, short enough to reverse quickly.</li>
          <li style={{ marginBottom: 10 }}><strong>Watch opens and unsubscribes together, never alone.</strong> Either metric in isolation is misleading; the direction of both together tells you what&apos;s actually happening.</li>
          <li style={{ marginBottom: 10 }}><strong>Set a rollback trigger before you start.</strong> For example: if unsubscribes rise for three consecutive sends with flat opens, revert immediately rather than waiting out the full test.</li>
          <li style={{ marginBottom: 10 }}><strong>Don&apos;t change anything else during the test.</strong> If you also change subject line style or content format at the same time, you won&apos;t know what moved the numbers.</li>
        </ol>

        <h2 style={proseH2}>What cadence looks like at each stage of company maturity</h2>
        <p style={proseP}>
          Early-stage teams often treat weekly as the goal and feel behind if they&apos;re not there. In
          practice, a consistent monthly newsletter with real substance outperforms an inconsistent weekly one
          almost every time. Cadence should scale up as production capacity genuinely grows, not because a
          calendar says you should be further along.
        </p>

        <ArticleFAQ items={FAQS} />

        <ArticleCTA
          eyebrow="Next"
          title="What should go in the sequence new subscribers get first?"
          body="The welcome sequence runs on its own timeline, separate from your steady-state cadence. Here's the framework."
          primary={{ label: "Read the welcome sequence guide", href: "/library/b2b-welcome-sequence" }}
          secondary={{ label: "Back: the three email formats", href: "/library/newsletter-vs-nurture-vs-lifecycle-email" }}
        />

        <RelatedArticles exclude="b2b-newsletter-frequency" />

        <p style={{ ...proseP, fontSize: 13, color: MID, marginTop: 24 }}>
          Want Sawa to build and run your newsletter system?{" "}
          <Link href="/#book" style={{ color: STEEL, fontWeight: 600 }}>Book a 30-minute intro call</Link>.
        </p>
      </div>
    </article>
  );
}
