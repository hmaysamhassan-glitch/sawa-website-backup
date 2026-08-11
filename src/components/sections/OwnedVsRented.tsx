"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Palette ──────────────────────────────────────────────────────────────────
const BG     = "#F4F7FA";
const INK    = "#111827";
const NAVY   = "#1E4A6E";
const STEEL  = "#31708E";
const MID    = "#5085A5";
const POWDER = "#8FC1E3";
const WHITE  = "#FFFFFF";
const CB     = "rgba(80,133,165,0.14)";

// ── Cards ────────────────────────────────────────────────────────────────────

function LinkedInCard() {
  return (
    <div style={{
      width: 272, background: WHITE, borderRadius: 14,
      boxShadow: "0 4px 20px rgba(30,74,110,0.12), 0 1px 3px rgba(0,0,0,0.06)",
      padding: "16px 18px", border: `1px solid ${CB}`,
      fontFamily: "var(--font-geist),sans-serif",
    }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 11 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(135deg,${MID},${NAVY})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: WHITE, fontSize: 14, fontWeight: 700,
        }}>S</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>Sarah Chen</div>
          <div style={{ fontSize: 9.5, color: "#8C9BB1", marginTop: 1 }}>Head of Growth · 3h ago</div>
        </div>
        <div style={{ width: 24, height: 24, borderRadius: 5, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill={WHITE}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>
      </div>
      <p style={{ fontSize: 11.5, lineHeight: 1.58, color: INK, margin: "0 0 10px" }}>
        Just published our latest thinking on audience growth. Take a look. 🧵
      </p>
      <div style={{ display: "flex", gap: 14, fontSize: 9.5, color: "#8C9BB1", borderTop: `1px solid rgba(0,0,0,0.06)`, paddingTop: 9 }}>
        <span>👍 142</span><span>💬 23</span><span style={{ marginLeft: "auto" }}>→ Share</span>
      </div>
    </div>
  );
}

function SearchCard() {
  return (
    <div style={{
      width: 232, background: WHITE, borderRadius: 11,
      boxShadow: "0 4px 20px rgba(30,74,110,0.10), 0 1px 3px rgba(0,0,0,0.05)",
      padding: "13px 15px", border: `1px solid ${CB}`,
      fontFamily: "var(--font-geist),sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#4285F4" strokeWidth="2"/>
          <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: 9, color: "#5F6368" }}>google.com · Organic · #1</span>
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#1558D6", marginBottom: 5, lineHeight: 1.35 }}>
        The Guide to Growing an<br />Email Audience You Own →
      </div>
      <div style={{ fontSize: 9.5, color: "#4D5156", lineHeight: 1.5 }}>
        A practical guide for teams building a list they actually own.
      </div>
      <div style={{ fontSize: 9, color: "#188038", marginTop: 6, fontWeight: 500 }}>↑ 3,200 monthly visits</div>
    </div>
  );
}

function EventCard() {
  return (
    <div style={{
      width: 204, background: NAVY, borderRadius: 14,
      boxShadow: `0 8px 28px rgba(30,74,110,0.32), 0 2px 6px rgba(0,0,0,0.10)`,
      padding: "17px 19px", fontFamily: "var(--font-geist),sans-serif",
    }}>
      <div style={{ fontSize: 7.5, letterSpacing: "0.14em", textTransform: "uppercase", color: POWDER, marginBottom: 9, fontFamily: "var(--font-geist-mono),monospace" }}>INDUSTRY SUMMIT · 2025</div>
      <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.03em", color: WHITE, lineHeight: 1.2, marginBottom: 9 }}>Demand Gen<br />Conference</div>
      <div style={{ fontSize: 9.5, color: "rgba(143,193,227,0.72)", marginBottom: 15 }}>Oct 14–16 · Austin, TX</div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 10, fontWeight: 600, color: WHITE,
        background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
        padding: "6px 12px", borderRadius: 7,
      }}>Register Free →</div>
    </div>
  );
}

function AdCard() {
  return (
    <div style={{
      width: 222, background: WHITE, borderRadius: 11,
      boxShadow: "0 4px 20px rgba(30,74,110,0.10), 0 1px 3px rgba(0,0,0,0.05)",
      overflow: "hidden", border: `1px solid ${CB}`,
      fontFamily: "var(--font-geist),sans-serif",
    }}>
      <div style={{
        height: 68, background: `linear-gradient(135deg,${MID} 0%,${POWDER} 100%)`,
        display: "flex", alignItems: "flex-start", padding: "8px 11px",
      }}>
        <span style={{
          fontSize: 7.5, letterSpacing: "0.10em", color: "rgba(255,255,255,0.90)",
          background: "rgba(0,0,0,0.22)", padding: "2px 8px", borderRadius: 3,
          fontFamily: "var(--font-geist-mono),monospace",
        }}>SPONSORED</span>
      </div>
      <div style={{ padding: "11px 13px" }}>
        <div style={{ fontSize: 11.5, fontWeight: 600, color: INK, marginBottom: 4 }}>Reach 80,000 buyers</div>
        <div style={{ fontSize: 9.5, color: "#8C9BB1" }}>Newsletter sponsorship · From $1,800/issue</div>
      </div>
    </div>
  );
}

function PartnerCard() {
  return (
    <div style={{
      width: 214, background: WHITE, borderRadius: 11,
      boxShadow: "0 4px 20px rgba(30,74,110,0.10), 0 1px 3px rgba(0,0,0,0.05)",
      overflow: "hidden", border: `1px solid ${CB}`,
      fontFamily: "var(--font-geist),sans-serif",
    }}>
      <div style={{ height: 52, background: `linear-gradient(135deg,${STEEL},${NAVY})`, display: "flex", alignItems: "flex-end", padding: "0 13px 9px" }}>
        <span style={{ fontSize: 7.5, letterSpacing: "0.09em", textTransform: "uppercase", color: "rgba(143,193,227,0.88)", fontFamily: "var(--font-geist-mono),monospace" }}>Partner Content</span>
      </div>
      <div style={{ padding: "10px 13px" }}>
        <div style={{ fontSize: 11.5, fontWeight: 600, color: INK, lineHeight: 1.35, marginBottom: 4 }}>Why Your Content Isn&apos;t Converting</div>
        <div style={{ fontSize: 9.5, color: "#8C9BB1" }}>foundationinc.co · 4 min read</div>
      </div>
    </div>
  );
}

// ── Browser device (left side — always fully shown) ───────────────────────────

function BrowserDevice() {
  const emails = [
    { from: "Sawa Newsletter · Issue #12", subject: "The content model that scales without a team", unread: true },
    { from: "Welcome Series · 1/4",        subject: "You're in. Here's what happens next →",        unread: true },
    { from: "Nurture · Day 7",             subject: "A few examples worth seeing",                  unread: false },
    { from: "Campaign",                    subject: "New this month",                               unread: false },
  ];

  return (
    <div style={{
      width: "clamp(340px,38vw,488px)", background: WHITE, borderRadius: 14,
      boxShadow: `0 40px 100px rgba(13,27,42,0.28), 0 12px 32px rgba(30,74,110,0.18), inset 0 0 0 1px rgba(80,133,165,0.18)`,
      overflow: "hidden", fontFamily: "var(--font-geist),sans-serif",
    }}>
      {/* Browser chrome */}
      <div style={{ background: "#EAECF0", padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid rgba(0,0,0,0.08)` }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, background: WHITE, borderRadius: 5, height: 24, display: "flex", alignItems: "center", padding: "0 10px", gap: 6, border: `1px solid rgba(0,0,0,0.09)` }}>
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#8C9BB1" strokeWidth="1.2"/>
            <path d="M4 6h4M6 4v4" stroke="#8C9BB1" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: 9.5, color: "#8C9BB1" }}>yourbrand.com/newsletter</span>
        </div>
      </div>

      {/* Navy header */}
      <div style={{ background: NAVY, padding: "18px 22px 16px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 8.5, letterSpacing: "0.13em", textTransform: "uppercase", color: POWDER, fontFamily: "var(--font-geist-mono),monospace", marginBottom: 3 }}>YOUR AUDIENCE</div>
          <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.04em", color: WHITE, fontFamily: "var(--font-inter),sans-serif" }}>The Weekly Brief</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.05em", color: WHITE, lineHeight: 1 }}>4,200</div>
          <div style={{ fontSize: 7.5, color: POWDER, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 3 }}>subscribers</div>
          <div style={{ fontSize: 8, color: "rgba(143,193,227,0.52)", marginTop: 2 }}>+84 this week</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", background: "#EAF4FB", borderBottom: `1px solid ${CB}` }}>
        {[["68%", "Open Rate"], ["14%", "CTR"], ["Direct", "Reach"]].map(([val, label], i) => (
          <div key={label} style={{
            flex: 1, padding: "10px 4px", textAlign: "center",
            borderRight: i < 2 ? `1px solid ${CB}` : "none",
          }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, letterSpacing: "-0.02em", fontFamily: "var(--font-inter),sans-serif" }}>{val}</div>
            <div style={{ fontSize: 7, color: MID, letterSpacing: "0.07em", textTransform: "uppercase", marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Email list */}
      {emails.map((email, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 + i * 0.10, duration: 0.40, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: "11px 18px", borderBottom: `1px solid rgba(0,0,0,0.04)`,
            background: email.unread ? "rgba(143,193,227,0.05)" : WHITE,
            display: "flex", gap: 12, alignItems: "center",
          }}
        >
          <div style={{
            width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
            background: email.unread ? STEEL : "transparent",
            border: email.unread ? "none" : `1.5px solid ${CB}`,
          }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 8, color: email.unread ? STEEL : "#8C9BB1", marginBottom: 2, letterSpacing: "0.01em", fontFamily: "var(--font-geist-mono),monospace" }}>{email.from}</div>
            <div style={{ fontSize: 11, fontWeight: email.unread ? 600 : 400, color: INK, letterSpacing: "-0.01em", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{email.subject}</div>
          </div>
        </motion.div>
      ))}

      {/* Direct reach badge */}
      <div style={{ padding: "11px 18px", background: "rgba(49,112,142,0.06)", borderTop: `1px solid ${CB}`, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: STEEL }} />
        <span style={{ fontSize: 8.5, color: STEEL, fontFamily: "var(--font-geist-mono),monospace", letterSpacing: "0.05em" }}>NO ALGORITHM DECIDES WHO SEES THIS</span>
      </div>
    </div>
  );
}

// ── Copy that auto-rotates ────────────────────────────────────────────────────

const COPY = [
  {
    label: "DISCOVERY",
    h: <>Attention can start<br />anywhere.</>,
    p: "LinkedIn, search, events, and paid media can all help people discover you.",
  },
  {
    label: "FIRST STEP",
    h: <>Turn a visitor into<br />a subscriber.</>,
    p: "One clear offer, one click. That's what turns a visitor into someone you can contact directly.",
  },
  {
    label: "DIRECT LINE",
    h: <>The relationship<br /><span style={{ color: STEEL }}>shouldn&apos;t end there.</span></>,
    p: "Email gives you a direct way to stay in touch, with no algorithm deciding whether they see it.",
  },
];

// ── Card layout config ────────────────────────────────────────────────────────

const CARD_CONFIGS = [
  { top: "10%", left: "53%", rotate: -6, zIndex: 6, fc: "ovr-fa", delay: 0.10 },
  { top: "5%",  left: "73%", rotate:  5, zIndex: 4, fc: "ovr-fb", delay: 0.18 },
  { top: "43%", left: "56%", rotate: -4, zIndex: 4, fc: "ovr-fc", delay: 0.26 },
  { top: "40%", left: "75%", rotate:  4, zIndex: 4, fc: "ovr-fb", delay: 0.34 },
  { top: "67%", left: "61%", rotate: -3, zIndex: 4, fc: "ovr-fa", delay: 0.42 },
] as const;

// ── Directional path: borrowed attention → capture → owned audience ─────────
// viewBox is 1000x1000 with preserveAspectRatio="none" so path coordinates
// map 1:1 with the percentage positions used by the cards/browser above.
function CaptureArrow({ active }: { active: boolean }) {
  const ease = [0.16, 1, 0.3, 1] as const;
  return (
    <>
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 5, pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="capture-grad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={POWDER} />
            <stop offset="100%" stopColor={STEEL} />
          </linearGradient>
        </defs>
        <motion.path
          d="M600,230 C430,130 385,300 372,430"
          fill="none"
          stroke="url(#capture-grad)"
          strokeWidth={active ? 5 : 3.4}
          strokeLinecap="round"
          style={{ vectorEffect: "non-scaling-stroke" } as React.CSSProperties}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          animate={{ opacity: active ? 1 : 0.85 }}
          transition={{ pathLength: { duration: 1.1, delay: 0.5, ease }, opacity: { duration: 0.4 } }}
        />
      </svg>

      {/* Arrowhead — its own small fixed-aspect SVG so it never distorts */}
      <motion.svg
        width={active ? 30 : 24} height={active ? 30 : 24} viewBox="0 0 24 24" fill="none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        animate={{ opacity: active ? 1 : 0.85, width: active ? 30 : 24, height: active ? 30 : 24 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        style={{
          position: "absolute", left: "37.2%", top: "43%",
          transform: "translate(-50%,-50%) rotate(120deg)",
          zIndex: 5, pointerEvents: "none",
        }}
      >
        <path d="M3 12 L19 12 M12 5 L19 12 L12 19" stroke={STEEL} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function OwnedVsRented() {
  const [copyStage, setCopyStage] = useState(0);

  // Rotate copy every 15 seconds
  useEffect(() => {
    const id = setInterval(() => setCopyStage(s => (s + 1) % 3), 15_000);
    return () => clearInterval(id);
  }, []);

  const ease = [0.16, 1, 0.3, 1] as const;

  const CARDS = [
    <LinkedInCard key="li" />,
    <SearchCard   key="se" />,
    <EventCard    key="ev" />,
    <AdCard       key="ad" />,
    <PartnerCard  key="pa" />,
  ];

  return (
    <section
      id="owned"
      style={{ minHeight: "100vh", height: "100vh", position: "relative", background: BG, overflow: "hidden" }}
    >
      {/* Atmosphere */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 65% 85% at 80% 50%, rgba(143,193,227,0.13) 0%, transparent 65%)",
      }} />

      {/* ── DIRECTIONAL PATH — borrowed attention → capture → owned audience ── */}
      <CaptureArrow active={copyStage === 1} />

      {/* Section label */}
      <div style={{
        position: "absolute", top: 64, left: "clamp(20px,4vw,52px)",
        display: "flex", alignItems: "center", gap: 12, zIndex: 10,
        fontFamily: "var(--font-geist-mono),monospace",
        fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: MID,
      }}>
        02 / WHY OWNED
        <div style={{ width: 30, height: 1, background: CB }} />
      </div>

      {/* ── ATTENTION CARDS (RIGHT) — enter on scroll-in ── */}
      {CARD_CONFIGS.map(({ top, left, rotate, zIndex, fc, delay }, i) => (
        <motion.div
          key={i}
          className={fc}
          initial={{ x: 64, opacity: 0, rotate: 0 }}
          whileInView={{ x: 0, opacity: 1, rotate }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay,
            duration: 0.80,
            type: "spring", stiffness: 72, damping: 18,
          }}
          style={{ position: "absolute", top, left, zIndex }}
        >
          <motion.div
            animate={i === 0
              ? { x: copyStage === 1 ? -66 : 0, y: copyStage === 1 ? 42 : 0, scale: copyStage === 1 ? 0.92 : 1 }
              : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {CARDS[i]}
          </motion.div>
        </motion.div>
      ))}

      {/* ── BROWSER DEVICE (LEFT) — centered vertically ── */}
      <div style={{
        position: "absolute",
        left: "clamp(24px,4vw,52px)",
        top: "43%",
        transform: "translateY(-50%)",
        zIndex: 6,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08, duration: 0.65, ease }}
        >
          <BrowserDevice />
        </motion.div>
      </div>

      {/* ── ROTATING COPY (bottom-left) ── */}
      <div style={{
        position: "absolute",
        bottom: "clamp(32px,5.5vh,64px)",
        left: "clamp(20px,4vw,52px)",
        maxWidth: "clamp(260px,30vw,420px)",
        zIndex: 7,
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={copyStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              fontFamily: "var(--font-geist-mono),monospace",
              fontSize: 8.5, letterSpacing: "0.12em", textTransform: "uppercase",
              color: MID, marginBottom: 10, display: "flex", alignItems: "center", gap: 10,
            }}>
              {COPY[copyStage].label}
              {/* Progress dots */}
              <div style={{ display: "flex", gap: 4 }}>
                {COPY.map((_, i) => (
                  <div key={i} style={{
                    width: i === copyStage ? 14 : 4, height: 4, borderRadius: 2,
                    background: i === copyStage ? STEEL : CB,
                    transition: "all 0.4s ease",
                  }} />
                ))}
              </div>
            </div>
            <h2 style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: "clamp(1.75rem,2.8vw,2.75rem)",
              fontWeight: 700, letterSpacing: "-0.044em", lineHeight: 1.07,
              color: INK, margin: 0,
            }}>
              {COPY[copyStage].h}
            </h2>
            <p style={{
              fontFamily: "var(--font-geist),sans-serif",
              fontSize: "clamp(0.875rem,1.05vw,1rem)",
              lineHeight: 1.68, color: "rgba(17,24,39,0.52)",
              margin: "13px 0 0", maxWidth: 400,
            }}>
              {COPY[copyStage].p}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes ovr-float-a { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-7px)} }
        @keyframes ovr-float-b { 0%,100%{transform:translateY(-4px)} 50%{transform:translateY(6px)} }
        @keyframes ovr-float-c { 0%,100%{transform:translateY(0px)} 33%{transform:translateY(-6px)} 66%{transform:translateY(4px)} }
        .ovr-fa > * { animation: ovr-float-a 4.4s ease-in-out infinite; }
        .ovr-fb > * { animation: ovr-float-b 5.2s ease-in-out infinite; }
        .ovr-fc > * { animation: ovr-float-c 3.9s ease-in-out infinite; }
        @media (prefers-reduced-motion:reduce) {
          .ovr-fa>*,.ovr-fb>*,.ovr-fc>* { animation:none !important; }
        }
        @media (max-width:600px) {
          #owned [style*="left: 53%"], #owned [style*="left: 73%"],
          #owned [style*="left: 56%"], #owned [style*="left: 75%"],
          #owned [style*="left: 61%"] { display:none !important; }
        }
      `}</style>
    </section>
  );
}
