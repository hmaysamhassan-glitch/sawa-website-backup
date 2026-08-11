"use client";
import Link from "next/link";
import ArticleHero from "@/components/library/ArticleHero";
import {
  ArticleFAQ, ArticleCTA, RelatedArticles, PullQuote,
  proseH2, proseH3, proseP, INK, STEEL, MID, BORDER,
} from "@/components/library/ArticleAtoms";
import Comparator from "./Comparator";
import JourneyDiagram from "./JourneyDiagram";

const FAQS = [
  {
    q: "Do I need marketing automation software for lifecycle email?",
    a: "You need something that can watch behavior and trigger sends automatically, whether that's a full marketing automation platform, your CRM, or your email service provider's automation features. You don't need enterprise software to start; you need reliable trigger data.",
  },
  {
    q: "How many emails should a nurture sequence have?",
    a: "Most work well with 3 to 7 emails, long enough to build real context, short enough that most people finish it. The right number depends on how considered the decision is, not a fixed rule.",
  },
  {
    q: "Can lifecycle emails and nurture sequences overlap?",
    a: "Yes, and they often should. A nurture sequence can pause or branch based on a lifecycle trigger, for example if someone visits your pricing page mid-sequence, that's a signal worth acting on immediately rather than waiting for the next scheduled email.",
  },
  {
    q: "Is a welcome sequence a nurture sequence or lifecycle email?",
    a: "A welcome sequence is a specific kind of nurture sequence: triggered once by a subscribe event, then it runs on its own fixed timeline. It has some lifecycle-like qualities (it's triggered by an event) but behaves like a nurture sequence once it starts. See our full breakdown of what a B2B welcome sequence should include.",
  },
];

export default function ArticleBody() {
  return (
    <article>
      <ArticleHero
        type="Comparison"
        readTime="7 min read"
        title="Newsletter vs. Nurture Sequence vs. Lifecycle Email: What's the Difference?"
        dek="Three formats people constantly confuse, defined precisely and compared side by side."
        updated="August 2026"
        directAnswer={
          <>
            A newsletter, a nurture sequence, and lifecycle email are three different formats often confused with
            each other. A <strong>newsletter</strong> is a recurring broadcast sent to your whole list to stay
            relevant. A <strong>nurture sequence</strong> is a planned series sent to a specific segment to build
            their readiness for a decision. <strong>Lifecycle email</strong> is triggered by an individual&apos;s
            behavior or status, responding to where they are in the relationship. Most B2B companies eventually
            need all three, and each does a different job.
          </>
        }
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>
        <h2 style={proseH2}>The three formats, precisely defined</h2>
        <p style={proseP}>
          Most confusion here isn&apos;t about the concepts, it&apos;s about the words. &quot;Drip campaign,&quot;
          &quot;nurture sequence,&quot; &quot;automation,&quot; and &quot;lifecycle marketing&quot; get used
          interchangeably across different tools and teams. Underneath the terminology, there are really only
          three distinct jobs.
        </p>

        <h3 style={proseH3}>Newsletter</h3>
        <p style={proseP}>
          A newsletter is a recurring broadcast sent to your entire list on a fixed schedule, regardless of
          who&apos;s on it or where they are in their relationship with you. Its only job is relevance: staying
          useful enough, often enough, that people don&apos;t forget why they subscribed. A newsletter doesn&apos;t
          end. It runs as long as you keep producing it.
        </p>

        <h3 style={proseH3}>Nurture sequence</h3>
        <p style={proseP}>
          A nurture sequence is a planned series of emails sent to a specific segment, usually starting when
          someone takes a defined action: downloads something, joins a webinar list, or requests a demo. Its job
          is to build readiness toward a decision by the end of the sequence. Unlike a newsletter, it has a
          beginning and an end, and it&apos;s the same content in the same order for everyone in that segment.
        </p>

        <h3 style={proseH3}>Lifecycle email</h3>
        <p style={proseP}>
          Lifecycle email is triggered by an individual&apos;s behavior or status: visiting a pricing page,
          going quiet for 60 days, upgrading a plan. There&apos;s no fixed schedule and no fixed audience. It
          responds to what one person just did, which means two people on the exact same list can receive
          completely different lifecycle emails, or none at all.
        </p>

        <h2 style={proseH2}>Compare all three side by side</h2>
        <p style={proseP}>
          Click each format below to see how it stacks up on who it&apos;s sent to, what triggers it, and when
          it ends. The full comparison also exists as a reference table underneath.
        </p>
        <Comparator />

        <PullQuote lines={["Newsletter: stay relevant.", "Nurture: build readiness.", "Lifecycle: respond to the moment."]} />

        <h2 style={proseH2}>Is a nurture sequence the same as a drip campaign?</h2>
        <p style={proseP}>
          Usually, yes. &quot;Drip campaign&quot; and &quot;nurture sequence&quot; describe the same
          mechanism, a fixed series of emails sent to a segment over time, and the industry has never
          settled on one term. If there&apos;s a distinction worth keeping, it&apos;s tone rather than
          mechanics: &quot;drip campaign&quot; tends to describe the plumbing (emails sent on a timer), while
          &quot;nurture sequence&quot; describes the intent (moving someone toward readiness). In practice,
          most teams building one are building the other.
        </p>

        <h2 style={proseH2}>How all three work in one real B2B subscriber journey</h2>
        <p style={proseP}>
          These formats aren&apos;t competing options, you don&apos;t pick one. In a working system, they run
          at the same time, each doing its own job on the same person.
        </p>
        <JourneyDiagram />

        <h2 style={proseH2}>Which one should you build first?</h2>
        <p style={proseP}>
          This is a maturity question, not a preference question. What you build first depends on what you
          already have, not which format sounds more valuable.
        </p>
        <div style={{ display: "grid", gap: 10, margin: "16px 0 8px" }}>
          {[
            { cond: "You have no list yet", rec: "Build capture first. None of these three matter until people are subscribing." },
            { cond: "You have a list but no regular content", rec: "Build the newsletter first. It's the cheapest infrastructure and the foundation everything else assumes." },
            { cond: "You have a newsletter but new subscribers go straight into the regular send", rec: "Build a nurture sequence, most commonly a welcome sequence, so first impressions aren't left to chance." },
            { cond: "You have list volume and behavioral or product data", rec: "Build lifecycle email. It needs the data infrastructure the other two don't." },
          ].map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: "14px 16px",
              border: `1px solid ${BORDER}`, borderRadius: 10, background: "rgba(80,133,165,0.04)",
            }} className="lib-decision-row">
              <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 14, color: INK, fontWeight: 600 }}>{r.cond}</div>
              <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, color: "#374151", lineHeight: 1.5 }}>→ {r.rec}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 560px) { .lib-decision-row { grid-template-columns: 1fr !important; } }`}</style>

        <h2 style={proseH2}>Common mistakes</h2>
        <ul style={{ ...proseP, paddingLeft: 20, margin: "0 0 16px" }}>
          <li style={{ marginBottom: 10 }}>Treating the newsletter as a sales channel. It erodes the one thing that makes it work: relevance without an ask.</li>
          <li style={{ marginBottom: 10 }}>Skipping nurture because &quot;we already have a newsletter.&quot; A newsletter doesn&apos;t build readiness for new subscribers who haven&apos;t decided anything yet.</li>
          <li style={{ marginBottom: 10 }}>Building lifecycle automation before you have the list volume or data to justify it. It&apos;s usually the third system you build, not the first.</li>
        </ul>

        <ArticleFAQ items={FAQS} />

        <ArticleCTA
          eyebrow="Next"
          title="How often should you actually send that newsletter?"
          body="Cadence isn't a preference, it's a capacity ceiling. Here's the framework, and a tool that gives you a starting answer."
          primary={{ label: "Read the cadence guide", href: "/library/b2b-newsletter-frequency" }}
          secondary={{ label: "See how Sawa builds all three", href: "/#system" }}
        />

        <RelatedArticles exclude="newsletter-vs-nurture-vs-lifecycle-email" />

        <p style={{ ...proseP, fontSize: 13, color: MID, marginTop: 24 }}>
          Want Sawa to build this for you?{" "}
          <Link href="/#book" style={{ color: STEEL, fontWeight: 600 }}>Book a 30-minute intro call</Link>.
        </p>
      </div>
    </article>
  );
}
