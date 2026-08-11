"use client";
import { motion } from "framer-motion";

/* ── Palette — matches the rest of the site ──────────────────────────── */
const INK    = "#111827";
const DIM    = "#4B6E8A";
const MID    = "#5085A5";
const STEEL  = "#31708E";
const NAVY   = "#1E4A6E";
const POWDER = "#8FC1E3";
const PAPER  = "#EAF4FB";
const WHITE  = "#FFFFFF";
const BG     = "#F4F7FA";
const CB     = "rgba(80,133,165,0.18)";

const ease = [0.16, 1, 0.3, 1] as const;

/* ── A single "document" card — the unit the cascade is built from ──── */
type CardData = {
  tag: string;
  dot: string;
  headline: string;
  sub?: string;
  extra?: React.ReactNode;
};

function DocCard({ tag, dot, headline, sub, extra, big }: CardData & { big?: boolean }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.44)",
      backdropFilter: "blur(18px) saturate(140%)",
      WebkitBackdropFilter: "blur(18px) saturate(140%)",
      borderRadius: 12, border: "1px solid rgba(255,255,255,0.5)",
      boxShadow: big
        ? "0 1px 1px rgba(30,74,110,0.06), 0 30px 60px -18px rgba(30,74,110,0.34)"
        : "0 1px 1px rgba(30,74,110,0.06), 0 14px 34px -12px rgba(30,74,110,0.26)",
    }}>
      {/* Window chrome — the same device motif used across the site */}
      <div style={{
        background: "rgba(234,236,240,0.7)", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid rgba(0,0,0,0.06)", borderRadius: "12px 12px 0 0",
      }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
          ))}
        </div>
      </div>

      <div style={{ padding: big ? "clamp(22px,3vw,32px)" : "18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: big ? 16 : 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: dot, flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: big ? 11 : 9.5,
            letterSpacing: "0.08em", textTransform: "uppercase", color: STEEL,
          }}>{tag}</span>
        </div>
        <div style={{
          fontFamily: "var(--font-inter),sans-serif", fontWeight: 700,
          fontSize: big ? "clamp(1.25rem,4.5cqw,1.9rem)" : "1.05rem",
          letterSpacing: "-0.02em", lineHeight: 1.18, color: INK,
          display: big ? undefined : "-webkit-box",
          WebkitLineClamp: big ? undefined : 2,
          WebkitBoxOrient: big ? undefined : "vertical",
          overflow: big ? undefined : "hidden",
        }}>{headline}</div>
        {sub && (
          <div style={{
            fontFamily: "var(--font-geist),sans-serif", fontSize: big ? 14 : 12.5,
            lineHeight: 1.55, color: DIM, marginTop: big ? 10 : 6,
          }}>{sub}</div>
        )}
        {extra && <div style={{ marginTop: big ? 20 : 12 }}>{extra}</div>}
      </div>
    </div>
  );
}

/* Small building blocks reused inside the front card of each stack —
   each one is a realistic sample of an actual deliverable, not a generic UI mock. */

function LeadMagnetPreview() {
  return (
    <div>
      <div style={{
        borderRadius: 10, background: `linear-gradient(150deg,${NAVY},#0F2A44)`,
        padding: "16px 16px 14px", marginBottom: 12,
      }}>
        <div style={{
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
          letterSpacing: "0.1em", color: POWDER, marginBottom: 8,
        }}>FREE GUIDE</div>
        <div style={{
          fontFamily: "var(--font-inter),sans-serif", fontWeight: 700, fontSize: 15,
          lineHeight: 1.25, color: PAPER,
        }}>The B2B Onboarding Playbook</div>
        <div style={{
          fontFamily: "var(--font-geist),sans-serif", fontSize: 11, color: "rgba(234,244,251,0.6)", marginTop: 6,
        }}>18 pages · 6 email templates · 4 workflow diagrams</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          borderRadius: 8, background: INK, color: PAPER, padding: "9px 14px",
          fontFamily: "var(--font-geist),sans-serif", fontSize: 12.5, fontWeight: 600,
        }}>Download the guide</span>
        <span style={{
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, color: MID,
        }}>312 downloads</span>
      </div>
    </div>
  );
}

function NewsletterIssueRows() {
  const rows = [
    { issue: "ISSUE 46", subject: "The onboarding email nobody sends", stat: "61% open" },
    { issue: "ISSUE 45", subject: "What we learned from 200 sales calls", stat: "57% open" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {rows.map(r => (
        <div key={r.issue} style={{
          display: "flex", alignItems: "center", gap: 10,
          border: `1px solid ${CB}`, borderRadius: 8, padding: "9px 12px",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: STEEL, flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5, letterSpacing: "0.05em", color: MID, flexShrink: 0 }}>{r.issue}</span>
          <span style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 12, color: INK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>{r.subject}</span>
          <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5, color: STEEL, flexShrink: 0 }}>{r.stat}</span>
        </div>
      ))}
    </div>
  );
}

function SequenceRows() {
  const steps = [
    { day: "DAY 1", subject: "Thanks for joining, here's the recording" },
    { day: "DAY 4", subject: "The template we mentioned (plus two more)" },
    { day: "DAY 9", subject: "Worth a quick call?" },
  ];
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        {steps.map(s => (
          <div key={s.day} style={{
            display: "flex", alignItems: "center", gap: 10,
            border: `1px solid ${CB}`, borderRadius: 8, padding: "9px 12px",
          }}>
            <span style={{
              fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
              letterSpacing: "0.05em", color: STEEL, flexShrink: 0, width: 42,
            }}>{s.day}</span>
            <span style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 12, color: INK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.subject}</span>
          </div>
        ))}
      </div>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderRadius: 8, background: INK, color: PAPER, padding: "10px 14px",
      }}>
        <span style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 12.5, fontWeight: 600 }}>Result</span>
        <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, color: POWDER, letterSpacing: "0.04em" }}>14 MEETINGS BOOKED</span>
      </div>
    </div>
  );
}

/* ── The cascade — three cards fanned like a stack of real artifacts ── */
function DocStack({ cards, flip }: { cards: [CardData, CardData, CardData]; flip?: boolean }) {
  const side = flip ? "left" : "right";
  const otherSide = flip ? "right" : "left";
  return (
    <div style={{ position: "relative", containerType: "inline-size", paddingTop: "clamp(112px,24cqw,170px)" } as React.CSSProperties}>
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        style={{
          position: "absolute", top: 0, [side]: 0, width: "68%",
          transform: `rotate(${flip ? 3 : -3}deg)`, zIndex: 1,
        }}
      >
        <DocCard {...cards[0]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.1, duration: 0.6, ease }}
        style={{
          position: "absolute", top: "clamp(46px,11cqw,84px)", [otherSide]: 0, width: "76%",
          transform: `rotate(${flip ? -2.2 : 2.2}deg)`, zIndex: 2,
        }}
      >
        <DocCard {...cards[1]} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.2, duration: 0.65, ease }}
        style={{ position: "relative", zIndex: 3, transform: `rotate(${flip ? 1 : -1}deg)` }}
      >
        <DocCard {...cards[2]} big />
      </motion.div>
    </div>
  );
}

/* ── Content ──────────────────────────────────────────────────────────── */
const DELIVERABLES = [
  {
    n: "01", id: "GROW", color: POWDER,
    head: "A lead magnet people actually download.",
    body: "Like an 18-page onboarding playbook that pulled in hundreds of downloads and fed straight into a welcome sequence, plus the signup pages and LinkedIn plays that drive people to it.",
    items: ["Lead magnets", "Signup pages", "LinkedIn to email", "Audience growth experiments", "Partnerships and distribution"],
    cards: [
      { tag: "Partnership", dot: POWDER, headline: "Guest spot in a 40K-subscriber industry newsletter." },
      { tag: "LinkedIn to email", dot: MID, headline: "Turned a viral post into 340 email signups." },
      { tag: "Lead magnet", dot: STEEL, headline: "The B2B Onboarding Playbook", extra: <LeadMagnetPreview /> },
    ] as [CardData, CardData, CardData],
  },
  {
    n: "02", id: "ENGAGE", color: MID,
    head: "A newsletter people open every week.",
    body: "Like issue 47, sent to your list every Tuesday: we write it, design it, and send it, plus the LinkedIn content and welcome emails that keep people reading.",
    items: ["Newsletters", "LinkedIn content", "Welcome emails", "Editorial planning", "Content people come back to"],
    cards: [
      { tag: "Welcome email", dot: POWDER, headline: "First email sets expectations. 62% open rate." },
      { tag: "LinkedIn content", dot: MID, headline: "Repurposed from the issue. 1,200 reactions." },
      { tag: "Newsletter · Issue 47", dot: STEEL, headline: "Why your best customers go quiet before they churn.", sub: "Sent every Tuesday, 8:00 AM · 58% open rate", extra: <NewsletterIssueRows /> },
    ] as [CardData, CardData, CardData],
  },
  {
    n: "03", id: "CONVERT", color: STEEL,
    head: "A sequence that turns interest into a meeting.",
    body: "Like the 3-email sequence that moved a webinar list to booked calls in nine days, plus the campaigns and re-engagement emails that revive deals that have gone quiet.",
    items: ["Nurture emails", "Campaigns", "Launch emails", "Re-engagement emails", "Sequences toward the next step"],
    cards: [
      { tag: "Re-engagement", dot: POWDER, headline: "Reopened 8 deals that had gone quiet." },
      { tag: "Launch email", dot: MID, headline: "Announced a new feature to the full list. 22% clicked." },
      { tag: "Nurture sequence", dot: STEEL, headline: "From webinar to booked call in 9 days.", extra: <SequenceRows /> },
    ] as [CardData, CardData, CardData],
  },
] as const;

function DeliverableBlock({ d, i }: { d: (typeof DELIVERABLES)[number]; i: number }) {
  const visualLeft = i % 2 === 0;

  const copy = (
    <div className="ds-copy" style={{ flex: "1 1 0", minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
          background: d.color, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-inter),sans-serif", fontSize: 15, fontWeight: 800,
          color: d.color === POWDER ? INK : WHITE,
          boxShadow: "0 6px 16px -6px rgba(30,74,110,0.4)",
        }}>
          {d.n}
        </div>
        <div style={{
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5,
          letterSpacing: "0.12em", color: STEEL,
        }}>
          {d.id}
        </div>
      </div>
      <h3 style={{
        fontFamily: "var(--font-inter),sans-serif",
        fontSize: "clamp(1.7rem,2.6vw,2.4rem)",
        fontWeight: 700, letterSpacing: "-0.032em", lineHeight: 1.1,
        color: INK, margin: "0 0 18px",
      }}>
        {d.head}
      </h3>
      <p style={{
        fontFamily: "var(--font-geist),sans-serif", fontSize: 16, lineHeight: 1.68,
        color: DIM, margin: "0 0 22px", maxWidth: 440,
      }}>
        {d.body}
      </p>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "8px 16px",
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 12, color: MID,
      }}>
        {d.items.map((item, idx) => (
          <span key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {item}
            {idx < d.items.length - 1 && <span style={{ color: CB }}>·</span>}
          </span>
        ))}
      </div>
    </div>
  );

  const visual = (
    <div className="ds-visual" style={{ flex: "1 1 0", minWidth: 0 }}>
      <DocStack cards={d.cards} flip={!visualLeft} />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease }}
      className="ds-row"
      style={{
        display: "flex", flexDirection: visualLeft ? "row" : "row-reverse",
        alignItems: "center", gap: "clamp(40px,6vw,80px)",
      }}
    >
      {copy}
      {visual}
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function OurSolution() {
  return (
    <section id="solution" style={{ position: "relative", background: BG, padding: "clamp(72px,10vh,120px) 0", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(460px 300px at 10% 10%, rgba(143,193,227,0.24), transparent 60%),
          radial-gradient(420px 300px at 90% 25%, rgba(80,133,165,0.20), transparent 60%),
          radial-gradient(520px 340px at 50% 100%, rgba(30,74,110,0.11), transparent 60%)
        `,
        filter: "blur(4px)",
      }} />

      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: MID,
            marginBottom: "clamp(56px,8vh,88px)",
          }}
        >
          Our solution
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(72px,9vh,120px)" }}>
          {DELIVERABLES.map((d, i) => (
            <DeliverableBlock key={d.id} d={d} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .ds-row { flex-direction: column !important; }
          .ds-copy { order: 1 !important; width: 100%; }
          .ds-visual { order: 2 !important; width: 100%; max-width: 640px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
