"use client";
import { motion } from "framer-motion";

const INK    = "#111827";
const DIM    = "#4B6E8A";
const MID    = "#5085A5";
const POWDER = "#8FC1E3";
const STEEL  = "#31708E";
const NAVY   = "#1E4A6E";
const WHITE  = "#FFFFFF";
const BORDER = "rgba(80,133,165,0.16)";
const BG     = "#F4F7FA";
const PAPER  = "#EAF4FB";

const ease = [0.16, 1, 0.3, 1] as const;

// ── Glass card shell — frosted panel, soft layered shadow ────────────
const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.44)",
  backdropFilter: "blur(18px) saturate(140%)",
  WebkitBackdropFilter: "blur(18px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.5)",
  borderRadius: 20,
  boxShadow: "0 1px 1px rgba(30,74,110,0.06), 0 18px 40px -16px rgba(30,74,110,0.28)",
};

// ── Thumbnails — kept from the previous version, unchanged internals ─
function FeaturedThumb() {
  const rows = [
    { label: "NEWSLETTER", color: POWDER, text: INK },
    { label: "NURTURE SEQUENCE", color: MID, text: WHITE },
    { label: "LIFECYCLE EMAIL", color: NAVY, text: WHITE },
  ];
  return (
    <div style={{
      height: 148, background: INK, borderRadius: 14,
      padding: "clamp(18px,2vw,22px)", display: "flex", flexDirection: "column",
      justifyContent: "center", gap: 8,
    }}>
      {rows.map((r, i) => (
        <motion.div key={r.label}
          initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.5, ease }}
          style={{
            background: r.color, borderRadius: 7, padding: "8px 14px",
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 10,
            letterSpacing: "0.07em", color: r.text, fontWeight: 600,
          }}>{r.label}</motion.div>
      ))}
    </div>
  );
}

function ToolThumb() {
  const rows = ["WEEKLY", "BI-WEEKLY", "MONTHLY"];
  const cols = ["<500", "500–2k", "2k+"];
  const vals: Record<string, Record<string, string>> = {
    WEEKLY:      { "<500": "◦", "500–2k": "●", "2k+": "●" },
    "BI-WEEKLY": { "<500": "●", "500–2k": "●", "2k+": "◦" },
    MONTHLY:     { "<500": "●", "500–2k": "◦", "2k+": "◦" },
  };
  return (
    <div style={{
      height: 148, background: "rgba(234,244,251,0.6)", borderRadius: 14,
      padding: "clamp(14px,1.6vw,18px)", border: `1px solid ${BORDER}`, overflow: "hidden",
    }}>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
        letterSpacing: "0.13em", color: STEEL, marginBottom: 10,
      }}>FREQUENCY MATRIX</div>
      <div style={{ display: "grid", gridTemplateColumns: "58px 1fr 1fr 1fr", gap: 0, marginBottom: 5 }}>
        <div />
        {cols.map(c => (
          <div key={c} style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
            letterSpacing: "0.06em", color: MID, textAlign: "center",
          }}>{c}</div>
        ))}
      </div>
      {rows.map(row => (
        <div key={row} style={{ display: "grid", gridTemplateColumns: "58px 1fr 1fr 1fr", gap: 0, marginBottom: 4 }}>
          <div style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
            letterSpacing: "0.05em", color: DIM,
          }}>{row}</div>
          {cols.map(c => (
            <div key={c} style={{
              textAlign: "center", fontSize: 12,
              color: vals[row][c] === "●" ? INK : "rgba(80,133,165,0.25)",
            }}>{vals[row][c]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SequenceThumb() {
  const days = ["D0", "D2", "D5", "D9", "D12"];
  return (
    <div style={{
      height: 148, background: "rgba(234,244,251,0.6)", borderRadius: 14,
      padding: "clamp(14px,1.6vw,18px)", border: `1px solid ${BORDER}`,
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
        letterSpacing: "0.13em", color: STEEL, marginBottom: 14,
      }}>WELCOME SEQUENCE</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {days.map((d, i) => (
          <div key={d} style={{ display: "flex", alignItems: "center", flex: i < days.length - 1 ? 1 : "0 0 auto" }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
              background: i === days.length - 1 ? INK : WHITE,
              border: `1.5px solid ${i === days.length - 1 ? INK : BORDER}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-geist-mono),monospace", fontSize: 7,
              color: i === days.length - 1 ? PAPER : DIM,
            }}>{d}</div>
            {i < days.length - 1 && <div style={{ flex: 1, height: 1, background: BORDER }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Article data ─────────────────────────────────────────────────────
const CARDS = [
  {
    type: "COMPARISON", index: "01",
    title: "Newsletter vs. Nurture Sequence vs. Lifecycle Email",
    thesis: "A clear explanation of what each one does, when to use it, and how they work together.",
    thumb: <FeaturedThumb />,
    href: "/library/newsletter-vs-nurture-vs-lifecycle-email",
  },
  {
    type: "DECISION TOOL", index: "02",
    title: "How Often Should a B2B Company Send a Newsletter?",
    thesis: "How to choose a newsletter cadence based on your content, audience, sales cycle, and team capacity.",
    thumb: <ToolThumb />,
    href: "/library/b2b-newsletter-frequency",
  },
  {
    type: "FRAMEWORK", index: "03",
    title: "What Should a B2B Welcome Sequence Include?",
    thesis: "What each email in a welcome sequence should do, with examples and a simple sequence builder.",
    thumb: <SequenceThumb />,
    href: "/library/b2b-welcome-sequence",
  },
];

function ArticleCard({ card, i }: { card: (typeof CARDS)[number]; i: number }) {
  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.1, duration: 0.6, ease }}
      className="lib-card"
      style={{
        ...glass,
        display: "flex", flexDirection: "column", textDecoration: "none",
        padding: "clamp(18px,2vw,22px)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
      }}
    >
      <div style={{ marginBottom: 18 }}>{card.thumb}</div>

      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
        <span style={{
          fontFamily: "var(--font-geist-mono),monospace",
          fontSize: 9.5, letterSpacing: "0.1em", color: POWDER,
        }}>{card.index}</span>
        <span style={{
          fontFamily: "var(--font-geist-mono),monospace",
          fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase",
          color: STEEL, padding: "2px 8px",
          border: `1px solid ${BORDER}`, borderRadius: 5,
        }}>{card.type}</span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-inter),sans-serif",
        fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.024em",
        color: INK, lineHeight: 1.25, margin: "0 0 10px",
      }}>{card.title}</h3>

      <p style={{
        fontFamily: "var(--font-geist),sans-serif",
        fontSize: 13.5, lineHeight: 1.6, color: DIM, margin: "0 0 18px", flex: 1,
      }}>{card.thesis}</p>

      <span className="lib-read-link" style={{
        fontFamily: "var(--font-geist-mono),monospace",
        fontSize: 10.5, letterSpacing: "0.06em", color: MID, transition: "color 160ms ease",
      }}>Read →</span>
    </motion.a>
  );
}

// ── Main component ─────────────────────────────────────────────────
export default function LibraryPreview() {
  return (
    <section id="library" style={{ position: "relative", background: BG, padding: "clamp(72px,10vh,112px) 0", overflow: "hidden" }}>

      {/* Soft color behind the glass — what the frosted cards pick up */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(480px 320px at 12% 15%, rgba(143,193,227,0.26), transparent 60%),
          radial-gradient(420px 300px at 85% 20%, rgba(80,133,165,0.21), transparent 60%),
          radial-gradient(520px 360px at 50% 95%, rgba(30,74,110,0.11), transparent 60%)
        `,
        filter: "blur(4px)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "0 clamp(20px,4vw,52px)" }}>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <span style={{
            fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: MID,
          }}>06 / LIBRARY</span>
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
            color: INK, textAlign: "center", margin: "0 auto 16px", maxWidth: 560,
          }}
        >
          What we&apos;ve been publishing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.55, ease }}
          style={{
            fontFamily: "var(--font-geist),sans-serif", fontSize: "clamp(0.95rem,1.1vw,1.05rem)",
            lineHeight: 1.65, color: DIM, textAlign: "center", maxWidth: 520, margin: "0 auto clamp(48px,7vh,72px)",
          }}
        >
          Guides, tools, and examples about newsletters, email strategy, and audience growth.
        </motion.p>

        <div className="lib-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(20px,2.4vw,28px)",
        }}>
          {CARDS.map((card, i) => <ArticleCard key={card.href} card={card} i={i} />)}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(40px,6vh,64px)" }}>
          <a href="/library" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-inter),sans-serif", fontWeight: 650,
            fontSize: 14.5, color: INK, textDecoration: "none",
            borderBottom: "1.5px solid rgba(80,133,165,0.35)", paddingBottom: 3,
          }}>
            Explore the Sawa Library →
          </a>
        </div>
      </div>

      <style>{`
        .lib-card:hover { transform: translateY(-4px); box-shadow: 0 1px 1px rgba(30,74,110,0.06), 0 26px 48px -16px rgba(30,74,110,0.30); }
        .lib-card:hover .lib-read-link { color: ${INK}; }
        @media (max-width: 900px) {
          .lib-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
