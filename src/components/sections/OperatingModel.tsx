"use client";
import { motion } from "framer-motion";

// ── Palette — identical tokens to every other section (no dark surface) ──────
const BG     = "#F4F7FA";
const INK    = "#111827";
const NAVY   = "#1E4A6E";
const STEEL  = "#31708E";
const MID    = "#5085A5";
const POWDER = "#8FC1E3";
const DIM    = "#4B6E8A";
const BORDER = "rgba(80,133,165,0.16)";

const ease = [0.16, 1, 0.3, 1] as const;

// ── The four stages — no fixed timeline, just the order of the work ────────
const STAGES = [
  {
    n: "01", id: "LEARN", color: POWDER,
    copy: "We learn your business, audience, offer, voice, and what you are already doing.",
  },
  {
    n: "02", id: "PLAN", color: MID,
    copy: "We decide what needs to be built and how the work should fit together.",
  },
  {
    n: "03", id: "CREATE", color: STEEL,
    copy: "We create the newsletters, content, lead-generation assets, and email campaigns.",
  },
  {
    n: "04", id: "RUN", color: NAVY,
    copy: "We help publish, send, review performance, and improve the work over time.",
  },
] as const;

function StageColumn({ stage, i }: { stage: (typeof STAGES)[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.08, duration: 0.5, ease }}
      className="om-col"
      style={{
        borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
        padding: "clamp(18px,2.2vw,24px) clamp(18px,2.2vw,24px)",
      }}
    >
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 11,
        letterSpacing: "0.08em", color: DIM, marginBottom: 14,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: stage.color, flexShrink: 0 }} />
        STAGE {stage.n}
      </div>
      <h3 style={{
        fontFamily: "var(--font-inter),sans-serif", fontSize: "1.5rem", fontWeight: 800,
        letterSpacing: "-0.03em", color: STEEL, margin: "0 0 12px",
      }}>{stage.id}</h3>
      <p style={{
        fontFamily: "var(--font-geist),sans-serif", fontSize: 14.5, lineHeight: 1.66,
        color: DIM, margin: 0,
      }}>{stage.copy}</p>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────
export default function OperatingModel() {
  return (
    <section id="operating-model" style={{ position: "relative", background: BG, borderTop: `1px solid ${BORDER}`, padding: "clamp(72px,10vh,112px) 0", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(460px 300px at 10% 20%, rgba(143,193,227,0.24), transparent 60%),
          radial-gradient(420px 300px at 90% 30%, rgba(80,133,165,0.20), transparent 60%),
          radial-gradient(520px 340px at 50% 100%, rgba(30,74,110,0.11), transparent 60%)
        `,
        filter: "blur(4px)",
      }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <span style={{
            fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: MID,
          }}>04 / HOW WE WORK</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: "clamp(1.9rem,3.4vw,2.9rem)",
            fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.036em",
            color: INK, textAlign: "center", margin: "0 auto 16px", maxWidth: 640,
          }}
        >
          How we work with your team.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55, ease }}
          style={{
            fontFamily: "var(--font-geist),sans-serif", fontSize: "clamp(0.95rem,1.1vw,1.05rem)",
            lineHeight: 1.65, color: DIM, textAlign: "center", maxWidth: 600, margin: "0 auto clamp(48px,7vh,72px)",
          }}
        >
          Not a fixed timeline. Four stages we move through together, alongside your team, at the pace the work needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          style={{
            background: "rgba(255,255,255,0.44)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: 18,
            boxShadow: "0 1px 1px rgba(30,74,110,0.06), 0 18px 40px -16px rgba(30,74,110,0.28)",
            overflow: "hidden",
            marginBottom: "clamp(20px,3vw,28px)",
            position: "relative",
          }}
        >
          <div style={{ padding: "18px clamp(18px,2.2vw,24px) 0" }}>
            <span style={{
              display: "inline-flex", alignItems: "center",
              fontFamily: "var(--font-geist-mono),monospace", fontSize: 11,
              letterSpacing: "0.08em", color: STEEL,
              border: `1px solid ${BORDER}`, borderRadius: 999,
              padding: "5px 12px",
            }}>
              GETTING STARTED
            </span>
          </div>

          <div className="om-pre-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div className="om-col" style={{ padding: "14px clamp(18px,2.2vw,24px) clamp(18px,2.2vw,24px)" }}>
              <h4 style={{
                fontFamily: "var(--font-inter),sans-serif", fontSize: "1.15rem", fontWeight: 800,
                letterSpacing: "-0.02em", color: INK, margin: "0 0 8px",
              }}>Your team</h4>
              <p style={{
                fontFamily: "var(--font-geist),sans-serif", fontSize: 14.5, lineHeight: 1.6,
                color: DIM, margin: 0,
              }}>
                Share access to what you already have: your website, past sends, brand voice, and any audience data. Tell us what has worked and what hasn&apos;t.
              </p>
            </div>
            <div className="om-col" style={{
              borderLeft: `1px solid ${BORDER}`,
              padding: "14px clamp(18px,2.2vw,24px) clamp(18px,2.2vw,24px)",
            }}>
              <h4 style={{
                fontFamily: "var(--font-inter),sans-serif", fontSize: "1.15rem", fontWeight: 800,
                letterSpacing: "-0.02em", color: INK, margin: "0 0 8px",
              }}>Our team</h4>
              <p style={{
                fontFamily: "var(--font-geist),sans-serif", fontSize: 14.5, lineHeight: 1.6,
                color: DIM, margin: 0,
              }}>
                We review everything you send over, study your audience, and come to the first conversation with an informed point of view on where to start.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          style={{
            background: "rgba(255,255,255,0.44)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: 18,
            boxShadow: "0 1px 1px rgba(30,74,110,0.06), 0 18px 40px -16px rgba(30,74,110,0.28)",
            overflow: "hidden",
          }}
        >
          <div className="om-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {STAGES.map((s, i) => <StageColumn key={s.n} stage={s} i={i} />)}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .om-grid { grid-template-columns: 1fr !important; }
          .om-pre-grid { grid-template-columns: 1fr !important; }
          .om-col { border-left: none !important; border-top: 1px solid ${BORDER}; }
          .om-col:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}
