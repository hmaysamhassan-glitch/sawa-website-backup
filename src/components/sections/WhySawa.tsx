"use client";
import { motion } from "framer-motion";

const INK    = "#111827";
const DIM    = "#4B6E8A";
const STEEL  = "#31708E";
const MID    = "#5085A5";
const POWDER = "#8FC1E3";
const NAVY   = "#1E4A6E";
const BORDER = "rgba(80,133,165,0.16)";
const BG     = "#F4F7FA";
const WHITE  = "#FFFFFF";

const ease = [0.16, 1, 0.3, 1] as const;

// ── Floating-artifact compositions — one distinct "proof" per card ───────────

function PartnerArtifact() {
  return (
    <div style={{ position: "relative", height: 168 }}>
      <div style={{
        position: "absolute", top: 6, left: 4, width: 190,
        background: WHITE, borderRadius: 10, border: `1px solid ${BORDER}`,
        boxShadow: "0 14px 32px rgba(30,74,110,0.12)",
        padding: "12px 14px", transform: "rotate(-3deg)",
      }}>
        <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 8, letterSpacing: "0.10em", color: STEEL, marginBottom: 5 }}>CADENCE</div>
        <div style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 12.5, fontWeight: 650, color: INK }}>Weekly working session</div>
      </div>
      <div style={{
        position: "absolute", bottom: 4, right: 0, width: 208,
        background: NAVY, borderRadius: 10,
        boxShadow: "0 16px 34px rgba(30,74,110,0.28)",
        padding: "13px 15px", transform: "rotate(2deg)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: `linear-gradient(135deg,${MID},${POWDER})`, flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 8, letterSpacing: "0.08em", color: POWDER }}>SAWA · IN YOUR SLACK</span>
        </div>
        <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 12, color: WHITE, lineHeight: 1.4 }}>
          “On it, draft ready by Thursday.”
        </div>
      </div>
    </div>
  );
}

function EditorialArtifact() {
  return (
    <div style={{ position: "relative", height: 168 }}>
      <div style={{
        position: "absolute", top: 2, left: 8, width: 200,
        background: WHITE, borderRadius: 10, overflow: "hidden",
        boxShadow: "0 14px 32px rgba(30,74,110,0.12)", border: `1px solid ${BORDER}`,
        transform: "rotate(-2deg)",
      }}>
        <div style={{ background: "#EAECF0", padding: "6px 9px", display: "flex", gap: 4 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => <div key={c} style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ padding: "10px 12px" }}>
          <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 7.5, letterSpacing: "0.10em", color: STEEL, marginBottom: 4 }}>THE WEEKLY BRIEF</div>
          <div style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 12, fontWeight: 650, color: INK }}>Issue #12 · draft</div>
        </div>
      </div>
      <div style={{
        position: "absolute", bottom: 2, right: 2, width: 178,
        background: NAVY, borderRadius: 10,
        boxShadow: "0 16px 34px rgba(30,74,110,0.28)",
        padding: "12px 14px", transform: "rotate(3deg)",
      }}>
        <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 7.5, letterSpacing: "0.10em", color: POWDER, marginBottom: 5 }}>VOICE & TONE</div>
        <div style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 12, fontWeight: 650, color: WHITE }}>Direct. Confident. No fluff.</div>
      </div>
    </div>
  );
}

function SystemArtifact() {
  const pts = [
    { x: 90, y: 16, label: "GROW" },
    { x: 30, y: 74, label: "ENGAGE" },
    { x: 150, y: 74, label: "CONVERT" },
  ];
  return (
    <div style={{ position: "relative", height: 168 }}>
      <div style={{
        position: "absolute", top: 4, left: 10, width: 200,
        background: WHITE, borderRadius: 10, border: `1px solid ${BORDER}`,
        boxShadow: "0 14px 32px rgba(30,74,110,0.12)",
        padding: "12px 14px 8px", transform: "rotate(-2deg)",
      }}>
        <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 8, letterSpacing: "0.10em", color: STEEL, marginBottom: 4 }}>SYSTEM MAP</div>
        <svg viewBox="0 0 180 90" width="100%" height="64">
          <line x1={pts[0].x} y1={pts[0].y} x2={pts[1].x} y2={pts[1].y} stroke="rgba(49,112,142,0.35)" strokeWidth="1.2" strokeDasharray="2 3" />
          <line x1={pts[0].x} y1={pts[0].y} x2={pts[2].x} y2={pts[2].y} stroke="rgba(49,112,142,0.35)" strokeWidth="1.2" strokeDasharray="2 3" />
          <line x1={pts[1].x} y1={pts[1].y} x2={pts[2].x} y2={pts[2].y} stroke="rgba(49,112,142,0.35)" strokeWidth="1.2" strokeDasharray="2 3" />
          {pts.map(p => <circle key={p.label} cx={p.x} cy={p.y} r="4" fill={STEEL} />)}
          {pts.map(p => (
            <text key={p.label} x={p.x} y={p.y - 9} textAnchor="middle" fontSize="7.5" fontFamily="var(--font-geist-mono),monospace" fill={DIM}>{p.label}</text>
          ))}
        </svg>
      </div>
      <div style={{
        position: "absolute", bottom: 4, right: 6, width: 168,
        background: `linear-gradient(150deg,${STEEL},${NAVY})`, borderRadius: 10,
        boxShadow: "0 16px 34px rgba(30,74,110,0.28)",
        padding: "12px 14px", transform: "rotate(2deg)",
      }}>
        <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 8, letterSpacing: "0.10em", color: POWDER, marginBottom: 4 }}>ONGOING</div>
        <div style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 12, fontWeight: 650, color: WHITE }}>Not a one-time campaign</div>
      </div>
    </div>
  );
}

// ── Advantage card ─────────────────────────────────────────────────────────

const CARDS = [
  {
    title: "Work closely with your team",
    desc: "We learn your business, audience, and voice before we create anything.",
    Artifact: PartnerArtifact,
  },
  {
    title: "Strategy before output",
    desc: "We decide what is worth saying and why before turning it into content or email.",
    Artifact: EditorialArtifact,
  },
  {
    title: "Keep the work connected",
    desc: "List growth, content, newsletters, and campaigns should support the same business goals.",
    Artifact: SystemArtifact,
  },
];

function AdvantageCard({ title, desc, Artifact, i }: (typeof CARDS)[number] & { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -5, boxShadow: "0 14px 36px rgba(30,74,110,0.12)" }}
      transition={{ delay: i * 0.08, duration: 0.55, ease }}
      style={{
        background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 18,
        padding: "36px 32px 28px", display: "flex", flexDirection: "column",
        boxShadow: "0 4px 24px rgba(30,74,110,0.06)",
      }}
    >
      <h3 style={{
        fontFamily: "var(--font-inter),sans-serif", fontSize: "1.5rem", fontWeight: 700,
        letterSpacing: "-0.025em", color: INK, margin: "0 0 16px",
      }}>{title}</h3>
      <p style={{
        fontFamily: "var(--font-geist),sans-serif", fontSize: 15, lineHeight: 1.62,
        color: DIM, margin: "0 0 26px", minHeight: "3.3em",
      }}>{desc}</p>
      <div style={{ marginTop: "auto" }}>
        <Artifact />
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────

export default function WhySawa() {
  return (
    <section id="why-sawa" style={{ background: BG, borderTop: `1px solid ${BORDER}`, padding: "clamp(80px,11vh,128px) 0" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <span style={{
            fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: MID,
          }}>05 / WHY SAWA</span>
        </div>

        {/* Centered headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: "clamp(2.1rem,3.9vw,3.4rem)",
            fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.038em",
            color: INK, textAlign: "center", margin: "0 auto 18px", maxWidth: 820,
          }}
        >
          AI helps us move faster. People still make the decisions.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55, ease }}
          style={{
            fontFamily: "var(--font-geist),sans-serif", fontSize: "clamp(1rem,1.2vw,1.15rem)",
            lineHeight: 1.62, color: DIM, textAlign: "center", maxWidth: 660, margin: "0 auto clamp(52px,7vh,76px)",
          }}
        >
          We use AI to speed up parts of the work. Strategy, judgment, editing, and the final decisions
          stay human.
        </motion.p>

        {/* 3 advantage cards */}
        <div className="why-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26, marginBottom: 44 }}>
          {CARDS.map((c, i) => <AdvantageCard key={c.title} {...c} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
