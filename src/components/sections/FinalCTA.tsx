"use client";
import { motion } from "framer-motion";

const CREAM  = "#EAF4FB";
const STONE  = "#8FC1E3";
const FAINT  = "rgba(143,193,227,0.35)";
const DIM    = "rgba(234,244,251,0.55)";
const BORDER = "rgba(143,193,227,0.12)";

// ── Arriving arrow — path-completion motif ─────────────────────────

function ArrivingArrow() {
  return (
    <motion.svg
      width="420" height="72" viewBox="0 0 420 72" fill="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      aria-hidden="true"
      style={{ display: "block", margin: "0 auto 40px", width: "clamp(280px,34vw,420px)", height: "auto" }}
    >
      {/* The journey path — sweeps in from left */}
      <motion.path
        d="M 0 56 C 80 56 106 18 184 24 C 262 30 290 62 368 48 C 392 44 406 34 420 27"
        stroke={STONE} strokeWidth="2.6" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        opacity={0.85}
      />
      {/* Arrow head at end */}
      <motion.path
        d="M405 21 L420 27 L407 35"
        stroke={STONE} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.3 }}
        opacity={0.9}
      />
      {/* Milestone dots along the path */}
      {[
        { cx: 0,   cy: 56, label: "CHANNELS" },
        { cx: 184, cy: 24, label: "AUDIENCE"  },
        { cx: 420, cy: 27, label: "OWNED"     },
      ].map(({ cx, cy, label }, i) => (
        <motion.g key={label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.30 + 0.10, duration: 0.30 }}>
          <circle cx={cx} cy={cy} r={4} fill={i === 2 ? STONE : "rgba(143,193,227,0.55)"} />
          <text x={cx} y={i === 0 ? cy + 20 : cy - 14}
            textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"}
            fill={i === 2 ? STONE : "rgba(234,244,251,0.62)"}
            fontFamily="var(--font-geist-mono),monospace"
            fontWeight={i === 2 ? 600 : 400}
            fontSize="10.5" letterSpacing="0.1em">{label}</text>
        </motion.g>
      ))}
    </motion.svg>
  );
}

// ── Main component ────────────────────────────────────────────────

export default function FinalCTA() {
  return (
    <section
      id="book"
      style={{
        background: "#0A0A0A",
        borderTop: `1px solid ${BORDER}`,
        padding: "clamp(64px,10vh,120px) clamp(20px,4vw,48px)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Very subtle warm radial glow — center */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(49,112,142,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* SAWA brand signature — huge, low-contrast, partially cropped */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{
          position: "absolute", left: "50%", bottom: "-9%", transform: "translateX(-50%)",
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: "clamp(9rem,24vw,20rem)", fontWeight: 800, letterSpacing: "-0.05em",
          color: "transparent", WebkitTextStroke: "1px rgba(143,193,227,0.10)",
          whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none", zIndex: 0, lineHeight: 1,
        }}
      >
        SAWA
      </motion.div>

      <div style={{
        maxWidth: 680, margin: "0 auto",
        textAlign: "center", position: "relative", zIndex: 1,
      }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase",
            color: "rgba(143,193,227,0.28)", marginBottom: 40,
          }}>
          07 / START
        </motion.div>

        {/* Arriving arrow visual */}
        <ArrivingArrow />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.10, duration: 0.60, ease: [0.16,1,0.3,1] }}
          style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: "clamp(2rem,5vw,3.75rem)",
            fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.042em",
            color: CREAM, marginBottom: 20, margin: "0 0 20px",
          }}>
          Build an audience<br />you can reach directly.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.55, ease: [0.16,1,0.3,1] }}
          style={{
            fontFamily: "var(--font-geist),sans-serif",
            fontSize: "clamp(0.9375rem,1.4vw,1.0625rem)",
            lineHeight: 1.72, color: DIM,
            maxWidth: 520, margin: "0 auto 40px",
          }}>
          Sawa helps you grow your email list, create useful content,
          and stay in touch with the people you want to reach.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26, duration: 0.5, ease: [0.16,1,0.3,1] }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#book"
            data-cal-namespace="book-a-call"
            data-cal-link="zakaria-laajily-dqkhjn/30min"
            data-cal-config='{"layout":"month_view"}'
            className="btn-primary"
            style={{ fontSize: 15, padding: "13px 28px" }}
          >
            Book an intro call
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#system" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 28px",
            background: "transparent",
            border: `1px solid rgba(143,193,227,0.16)`,
            borderRadius: 4,
            color: "rgba(234,244,251,0.68)",
            fontSize: 14.5, fontWeight: 500, letterSpacing: "-0.01em",
            textDecoration: "none",
            fontFamily: "var(--font-geist),sans-serif",
            transition: "border-color 180ms ease, color 180ms ease",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(143,193,227,0.36)";
              (e.currentTarget as HTMLElement).style.color = CREAM;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(143,193,227,0.16)";
              (e.currentTarget as HTMLElement).style.color = "rgba(234,244,251,0.68)";
            }}
          >
            See how it works
          </a>
        </motion.div>

        {/* Supporting note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.40, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 10.5, letterSpacing: "0.04em",
            color: "rgba(143,193,227,0.24)", marginTop: 24,
          }}>
          30-min intro call · No commitment · No pitch deck
        </motion.p>
      </div>
    </section>
  );
}
