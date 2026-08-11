"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import AudienceJourney from "./AudienceJourney";

const BG       = "#F4F7FA";
const INK      = "#111827";
const DIM      = "#4B6E8A";
const WHITE    = "#FFFFFF";

// ── Sawa Arrow motif ────────────────────────────────────────────
function SawaArrowSVG({
  width = 22,
  color = BG,
  strokeWidth = 1.4,
}: {
  width?: number;
  color?: string;
  strokeWidth?: number;
}) {
  const h = Math.round(width * 0.55);
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`}
      fill="none" aria-hidden="true" style={{ display: "inline-block", flexShrink: 0 }}>
      <path d={`M1 ${h * 0.72} Q${width * 0.45} ${h * 0.18} ${width - 3} ${h * 0.42}`}
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d={`M${width-3} ${h*0.42} L${width-8} ${h*0.15} M${width-3} ${h*0.42} L${width-9} ${h*0.62}`}
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ── Intro splash — bold dark scene that dissolves into the hero ──
function IntroSplash() {
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <motion.div
      key="sawa-intro"
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "linear-gradient(160deg, #0A1420, #05080D)",
        overflow: "hidden", pointerEvents: "none",
      }}
      exit={{ opacity: 0, y: -28 }}
      transition={{ duration: 0.5, ease: [0.55, 0, 1, 1] }}
    >
      {/* Ambient glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(143,193,227,0.12) 0%, transparent 60%)",
      }} />

      {/* Drawing arc — the same brand motif used on the wordmark elsewhere */}
      <motion.svg
        style={{ position: "absolute", top: "20%", left: "clamp(20px,5vw,56px)" }}
        width="220" height="34" viewBox="0 0 220 34" fill="none" aria-hidden="true"
      >
        <motion.path
          d="M0 24 Q110 4 218 18"
          stroke="rgba(143,193,227,0.30)" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
        />
      </motion.svg>

      {/* Giant overlapping wordmark */}
      <div style={{
        position: "absolute", bottom: "clamp(8%,11vh,15%)", left: "clamp(20px,5vw,56px)",
        zIndex: 3,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease }}
          style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: "clamp(4.2rem,13vw,10.5rem)", fontWeight: 800,
            letterSpacing: "-0.05em", color: "#F5F6F8", lineHeight: 0.86,
            userSelect: "none",
          }}
        >SAWA</motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.55, ease }}
          style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: "clamp(1.6rem,4.6vw,3.1rem)", fontWeight: 600,
            letterSpacing: "-0.03em", color: "#8FC1E3", lineHeight: 1,
            marginTop: "clamp(-0.3em,-1vw,-0.15em)",
          }}
        >Own your audience.</motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(143,193,227,0.55)", marginTop: 16,
          }}
        >B2B Audience + Email</motion.div>
      </div>
    </motion.div>
  );
}

// ── Main ────────────────────────────────────────────────────────
export default function SawaHero() {
  const prefersReduced = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "hero">(
    prefersReduced ? "hero" : "intro"
  );
  const [play, setPlay] = useState(prefersReduced ? true : false);
  const ease = [0.16, 1, 0.3, 1] as const;

  useEffect(() => {
    if (prefersReduced) return;
    const t1 = setTimeout(() => setPhase("hero"), 1750);
    const t2 = setTimeout(() => setPlay(true), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [prefersReduced]);

  return (
    <>
      {/* ── SAWA INTRO OVERLAY — bold dark splash, dissolves into the hero ── */}
      <AnimatePresence>
        {phase === "intro" && <IntroSplash />}
      </AnimatePresence>

      {/* ── HERO SECTION ── */}
      <section
        id="hero"
        aria-label="Hero"
        style={{
          background: BG,
          display: "flex",
          flexDirection: "column",
          padding: "clamp(88px,11vh,128px) clamp(20px,4.4vw,60px) clamp(64px,9vh,110px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          background: `
            radial-gradient(460px 300px at 10% 12%, rgba(143,193,227,0.24), transparent 60%),
            radial-gradient(420px 300px at 90% 20%, rgba(80,133,165,0.20), transparent 60%),
            radial-gradient(520px 340px at 50% 100%, rgba(30,74,110,0.11), transparent 60%)
          `,
          filter: "blur(4px)",
        }} />

        {/* Brand stamp */}
        <div style={{
          marginBottom: "clamp(20px,3vh,36px)",
          display: "flex", alignItems: "baseline", gap: 14,
        }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={play ? { opacity: 1 } : {}}
            transition={{ duration: 0.28, ease }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)",
              fontWeight: 700, letterSpacing: "-0.05em",
              color: INK, lineHeight: 1, display: "inline-block",
            }}
          >SAWA</motion.span>

          <svg width="48" height="10" viewBox="0 0 48 10" fill="none"
            aria-hidden="true" style={{ marginBottom: 4 }}>
            <motion.path d="M0 8 Q24 2 46 6"
              stroke="rgba(80,133,165,0.20)"
              strokeWidth="1.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={play ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ delay: 0.18, duration: 0.44, ease: [0.16, 1, 0.3, 1] }} />
          </svg>
        </div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }} animate={play ? { opacity: 1 } : {}}
          transition={{ duration: 0.38, delay: 0.12, ease }}
          style={{ marginBottom: "clamp(18px,2.5vh,28px)" }}
        >
          <span style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10, letterSpacing: "0.11em",
            textTransform: "uppercase", color: DIM,
          }}>B2B Audience + Email</span>
        </motion.div>

        {/* Headline block — headline left, copy + CTAs right */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: "clamp(24px,4vw,64px)",
            alignItems: "end",
            maxWidth: 1340,
          }}
        >
            <h1 style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700, margin: 0, color: INK,
              fontSize: "clamp(2.3rem,3.6vw,4.2rem)",
              lineHeight: 1.05, letterSpacing: "-0.044em",
            }}>
              {/* Line 1 */}
              <div style={{ overflow: "hidden" }}>
                <motion.div
                  initial={{ y: "108%" }} animate={play ? { y: "0%" } : {}}
                  transition={{ duration: 0.62, delay: 0.18, ease }}>
                  Grow a B2B audience
                </motion.div>
              </div>

              {/* Line 2 — a blue highlighter-style mark behind "revenue", not italic */}
              <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}>
                <motion.div
                  initial={{ y: "108%" }} animate={play ? { y: "0%" } : {}}
                  transition={{ duration: 0.62, delay: 0.30, ease }}>
                  that converts into{" "}
                  <span style={{
                    display: "inline-block", position: "relative",
                    padding: "0 0.1em",
                  }}>
                    <span aria-hidden style={{
                      position: "absolute", left: "-0.06em", right: "-0.06em",
                      bottom: "0.02em", top: "0.32em",
                      background: "rgba(143,193,227,0.55)",
                      borderRadius: "3px 8px 3px 8px",
                      zIndex: 0,
                    }} />
                    <span style={{ position: "relative", zIndex: 1 }}>revenue.</span>
                  </span>
                </motion.div>
              </div>
            </h1>

          {/* RIGHT: supporting copy + CTAs */}
          <div style={{ paddingBottom: "clamp(4px,1vh,12px)" }}>
            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={play ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.64, ease }}
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(0.98rem,1vw + 0.6rem,1.3rem)", lineHeight: 1.7,
                color: DIM, maxWidth: 500,
                marginTop: 0,
                marginBottom: "clamp(24px,3.4vh,36px)",
              }}
            >
              Sawa is an AI-native marketing consultancy. We grow your
              email audience, create the content that keeps it engaged,
              and run the campaigns that turn it into revenue.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={play ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.78, ease }}
              style={{
                display: "flex", alignItems: "center",
                gap: "clamp(20px,3vw,32px)", flexWrap: "wrap",
              }}
            >
              <a
                href="#book"
                data-cal-namespace="book-a-call"
                data-cal-link="zakaria-laajily-dqkhjn/30min"
                data-cal-config='{"layout":"month_view"}'
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "13px 22px",
                  background: INK, color: BG,
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "clamp(14px,0.35vw + 12px,16px)", fontWeight: 600, letterSpacing: "-0.01em",
                  borderRadius: 3, textDecoration: "none",
                  border: `1.5px solid ${INK}`,
                  transition: "background 160ms ease, transform 130ms ease, box-shadow 160ms ease",
                  cursor: "pointer", whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#1E4A6E";
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "0 6px 20px rgba(30,74,110,0.24)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = INK;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                Book an intro
                <SawaArrowSVG width={20} color={BG} strokeWidth={1.4} />
              </a>

              <a
                href="#system"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "clamp(14px,0.35vw + 12px,16px)", fontWeight: 500, color: DIM,
                  textDecoration: "none", letterSpacing: "-0.005em",
                  transition: "color 140ms ease", cursor: "pointer",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = INK; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = DIM; }}
              >
                See how it works ↓
              </a>
            </motion.div>
          </div>
        </div>

        {/* The journey — full width beneath the headline block */}
        <div style={{
          maxWidth: 1340, width: "100%",
          marginTop: "clamp(56px,9vh,120px)",
        }}>
          <AudienceJourney />
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: clamp(20px,4vw,32px) !important; }
        }
      `}</style>
    </>
  );
}
