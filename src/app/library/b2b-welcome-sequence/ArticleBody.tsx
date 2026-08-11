"use client";
import Link from "next/link";
import ArticleHero from "@/components/library/ArticleHero";
import {
  ArticleFAQ, ArticleCTA, RelatedArticles, PullQuote,
  proseH2, proseH3, proseP, INK, STEEL, MID, DIM, BORDER, WHITE,
} from "@/components/library/ArticleAtoms";
import WelcomeSequenceBuilder from "./WelcomeSequenceBuilder";
import BeforeAfterRewrite from "./BeforeAfterRewrite";

const JOBS = [
  { n: "01", title: "Confirm the trade", body: "Deliver exactly what was promised, immediately, with no extra steps to get it." },
  { n: "02", title: "Set expectations", body: "Tell them what they'll get, how often, and from whom, so nothing that follows is a surprise." },
  { n: "03", title: "Prove value fast", body: "Give one genuinely useful thing before asking for anything in return." },
  { n: "04", title: "Build credibility", body: "Show specific evidence that paying attention to you is worth their time." },
  { n: "05", title: "Handle the real objection", body: "Name the hesitation directly instead of hoping it never comes up." },
  { n: "06", title: "Ask for the next step", body: "Make one specific, low-friction ask, not several competing ones." },
];

const BREAKDOWN = [
  { email: "Day 0", job: "Confirm + set expectations", say: "Deliver the resource or access immediately; name what's coming next and how often.", notSay: "A generic \"thanks for subscribing\" with no specifics.", cta: "None, or a simple link to the resource itself." },
  { email: "Day 2", job: "Prove value fast", say: "One sharp, specific, immediately useful insight tied to why they subscribed.", notSay: "A recap of your whole product or company.", cta: "Soft: \"reply if this was useful.\"" },
  { email: "Day 5", job: "Build credibility", say: "A specific result or case, named and concrete.", notSay: "Vague claims like \"trusted by many companies.\"", cta: "\"See how it worked for a similar team.\"" },
  { email: "Day 9", job: "Address the objection", say: "Name the real hesitation, cost, time, or risk, directly.", notSay: "Ignore it and hope it doesn't surface.", cta: "\"Here's how we handle [objection].\"" },
  { email: "Day 12", job: "Ask for the next step", say: "One specific, low-friction ask.", notSay: "Multiple competing calls to action.", cta: "\"Book a 15-minute call.\"" },
];

const FAQS = [
  {
    q: "Does every subscriber need a full five-email welcome sequence?",
    a: "No. A quick, low-cost decision often only needs two or three emails: confirm the trade, prove value fast, ask for the next step. The credibility and objection-handling emails earn their place when the purchase is considered enough that people need more before they'll act.",
  },
  {
    q: "Should a welcome sequence sell, or just introduce?",
    a: "Both, in sequence. Early emails should introduce and prove value with no ask attached. The ask belongs at the end, once you've earned it, not in the first email someone receives from you.",
  },
  {
    q: "What if someone doesn't open any of the welcome emails?",
    a: "That's a signal, not a failure to fix with more emails. If open rates on the welcome sequence are low, the fastest lever is usually the subject line and the delivery of the initial promise, not adding more sends chasing the same silent subscriber.",
  },
];

export default function ArticleBody() {
  return (
    <article>
      <ArticleHero
        type="Framework"
        readTime="7 min read"
        title="What Should a B2B Welcome Sequence Include?"
        dek="Earn the second open."
        updated="August 2026"
        directAnswer={
          <>
            A B2B welcome sequence should do six jobs in order: confirm the trade, set expectations, prove value
            fast, build credibility, handle the real objection, and ask for one specific next step. Most
            sequences run <strong>three to five emails</strong> over 4 to 12 days; the exact length depends on
            how considered the purchase is. It exists to earn the second open from a brand-new subscriber, not
            to sell to an existing customer.
          </>
        }
      />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>
        <h2 style={proseH2}>The six jobs a welcome sequence has to do</h2>
        <p style={proseP}>
          Not every welcome sequence needs all six, but every job it skips is a deliberate choice, not an
          accident. In order:
        </p>
        <div style={{ display: "grid", gap: 2, margin: "16px 0 8px" }}>
          {JOBS.map((j) => (
            <div key={j.n} style={{
              display: "grid", gridTemplateColumns: "44px 1fr", gap: 14,
              padding: "14px 0", borderBottom: `1px solid ${BORDER}`,
            }}>
              <span style={{
                fontFamily: "var(--font-geist-mono),monospace", fontSize: 13, fontWeight: 700, color: STEEL,
              }}>{j.n}</span>
              <div>
                <div style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 15.5, fontWeight: 650, color: INK, marginBottom: 3 }}>{j.title}</div>
                <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, lineHeight: 1.55, color: DIM }}>{j.body}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={proseH2}>Build your starting sequence</h2>
        <p style={proseP}>
          What someone subscribed for, how considered their eventual purchase is, and what you want them to do
          next all change how many emails you need and what each one has to do.
        </p>
        <WelcomeSequenceBuilder />

        <PullQuote lines={["A welcome sequence's only competitor", "is the delete button."]} />

        <h2 style={proseH2}>The full five-email breakdown</h2>
        <p style={proseP}>
          Here&apos;s the complete version, for a considered purchase that needs all six jobs. Shorter
          sequences drop the credibility and objection-handling rows, not the confirmation or the ask.
        </p>
        <div style={{ margin: "20px 0 8px", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
            <caption style={{
              textAlign: "left", fontFamily: "var(--font-geist-mono),monospace", fontSize: 10,
              letterSpacing: "0.08em", textTransform: "uppercase", color: DIM, marginBottom: 10, captionSide: "top",
            }}>Five-email welcome sequence breakdown</caption>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "left", padding: "8px 10px", borderBottom: `1.5px solid ${BORDER}`, color: DIM, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.05em" }}>Email</th>
                <th scope="col" style={{ textAlign: "left", padding: "8px 10px", borderBottom: `1.5px solid ${BORDER}`, color: DIM, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.05em" }}>Job</th>
                <th scope="col" style={{ textAlign: "left", padding: "8px 10px", borderBottom: `1.5px solid ${BORDER}`, color: DIM, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.05em" }}>What to say</th>
                <th scope="col" style={{ textAlign: "left", padding: "8px 10px", borderBottom: `1.5px solid ${BORDER}`, color: DIM, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.05em" }}>What not to say</th>
                <th scope="col" style={{ textAlign: "left", padding: "8px 10px", borderBottom: `1.5px solid ${BORDER}`, color: DIM, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.05em" }}>Possible CTA</th>
              </tr>
            </thead>
            <tbody>
              {BREAKDOWN.map((r) => (
                <tr key={r.email}>
                  <th scope="row" style={{
                    textAlign: "left", padding: "10px", borderBottom: `1px solid ${BORDER}`,
                    color: STEEL, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5,
                    letterSpacing: "0.04em", fontWeight: 500, whiteSpace: "nowrap", verticalAlign: "top",
                  }}>{r.email}</th>
                  <td style={{ padding: "10px", borderBottom: `1px solid ${BORDER}`, color: INK, fontWeight: 600, fontFamily: "var(--font-geist),sans-serif", verticalAlign: "top" }}>{r.job}</td>
                  <td style={{ padding: "10px", borderBottom: `1px solid ${BORDER}`, color: "#374151", fontFamily: "var(--font-geist),sans-serif", lineHeight: 1.45, verticalAlign: "top" }}>{r.say}</td>
                  <td style={{ padding: "10px", borderBottom: `1px solid ${BORDER}`, color: "#374151", fontFamily: "var(--font-geist),sans-serif", lineHeight: 1.45, verticalAlign: "top" }}>{r.notSay}</td>
                  <td style={{ padding: "10px", borderBottom: `1px solid ${BORDER}`, color: "#374151", fontFamily: "var(--font-geist),sans-serif", lineHeight: 1.45, verticalAlign: "top" }}>{r.cta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={proseH2}>What this looks like rewritten</h2>
        <p style={proseP}>
          Most welcome emails fail at the first job, confirming the trade, before they get anywhere near
          credibility or an ask. Toggle between a generic version and a rewrite of the same email below.
        </p>
        <BeforeAfterRewrite />

        <h2 style={proseH2}>Welcome sequence vs. nurture sequence</h2>
        <p style={proseP}>
          A welcome sequence is a specific kind of nurture sequence, one triggered once by a subscribe event
          rather than by a demo request or webinar signup. It behaves like any other nurture sequence once it
          starts: a fixed timeline, the same content in the same order for everyone in it. See the full
          breakdown of{" "}
          <Link href="/library/newsletter-vs-nurture-vs-lifecycle-email" style={{ color: STEEL, fontWeight: 600 }}>
            newsletter vs. nurture sequence vs. lifecycle email
          </Link>{" "}
          for how all three formats relate.
        </p>

        <h2 style={proseH2}>How to end a welcome sequence</h2>
        <p style={proseP}>
          A welcome sequence should have a clear last email, not a gradual fade. Two clean endings:
        </p>
        <div style={{ display: "grid", gap: 10, margin: "16px 0 8px" }}>
          {[
            { cond: "They take the next-step action", rec: "They exit the sequence and hand off to whatever that action triggers, a call, a trial, a reply thread. The sequence's job is done." },
            { cond: "They don't take it by the final email", rec: "They roll into your steady-state newsletter cadence. Nothing about the welcome sequence needs to repeat or extend indefinitely." },
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
        <p style={proseP}>
          From there, cadence takes over. See{" "}
          <Link href="/library/b2b-newsletter-frequency" style={{ color: STEEL, fontWeight: 600 }}>
            how often a B2B company should send a newsletter
          </Link>{" "}
          for the framework that governs everything after the welcome sequence ends.
        </p>

        <ArticleFAQ items={FAQS} />

        <ArticleCTA
          eyebrow="Full circle"
          title="See how the newsletter, welcome sequence, and lifecycle email work together"
          body="These aren't three separate projects. They're one system, and Sawa builds and runs all of it."
          primary={{ label: "See how Sawa works", href: "/#system" }}
          secondary={{ label: "Back: the three email formats", href: "/library/newsletter-vs-nurture-vs-lifecycle-email" }}
        />

        <RelatedArticles exclude="b2b-welcome-sequence" />

        <p style={{ ...proseP, fontSize: 13, color: MID, marginTop: 24 }}>
          Want Sawa to build and run your welcome sequence?{" "}
          <Link href="/#book" style={{ color: STEEL, fontWeight: 600 }}>Book a 30-minute intro call</Link>.
        </p>
      </div>
    </article>
  );
}
