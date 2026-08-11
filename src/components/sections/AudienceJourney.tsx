"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ── Palette ──────────────────────────────────────────────────────── */
const INK    = "#111827";
const DIM    = "#4B6E8A";
const MID    = "#5085A5";
const STEEL  = "#31708E";
const NAVY   = "#1E4A6E";
const POWDER = "#8FC1E3";
const PAPER  = "#EAF4FB";
const WHITE  = "#FFFFFF";
const CB     = "rgba(80,133,165,0.18)";
const MUTED  = "#E7ECF2";

const ease = [0.16, 1, 0.3, 1] as const;

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.44)",
  backdropFilter: "blur(18px) saturate(140%)",
  WebkitBackdropFilter: "blur(18px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.5)",
  borderRadius: 14,
  boxShadow: "0 1px 1px rgba(30,74,110,0.06), 0 18px 40px -16px rgba(30,74,110,0.28)",
};

/* ── Discovery objects ────────────────────────────────────────────── */

function LinkedInPost({ onCapture }: { onCapture?: boolean }) {
  return (
    <div style={{ ...card, width: "100%", padding: "16px 18px", fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(135deg,${MID},${NAVY})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-inter),sans-serif", fontSize: 12, fontWeight: 700, color: PAPER,
        }}>DM</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: INK, letterSpacing: "-0.01em" }}>Dana Morgan</div>
          <div style={{ fontSize: 10.5, color: DIM }}>VP Marketing · 2nd</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="0.7" y="0.7" width="12.6" height="12.6" rx="2.6" stroke={STEEL} strokeWidth="1.1" />
          <rect x="3.2" y="6" width="1.7" height="4.8" fill={STEEL} />
          <circle cx="4.05" cy="3.9" r="1" fill={STEEL} />
          <path d="M6.9 10.8 V6 h1.7 v0.7 A2.1 2.1 0 0 1 11.4 8.3 V10.8" stroke={STEEL} strokeWidth="1.1" fill="none" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ fontSize: 12.5, lineHeight: 1.55, color: INK }}>
        Most B2B teams lose leads because there is no follow-up system after the demo. Here is the sequence we use instead.
      </div>
      {onCapture && (
        <div style={{
          marginTop: 14, paddingTop: 12, borderTop: `1px solid ${CB}`,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: INK, color: PAPER, borderRadius: 8, padding: "9px 14px",
            fontSize: 12.5, fontWeight: 600, letterSpacing: "-0.01em",
          }}>
            Get the guide
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6.5 2.5 10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 9,
            letterSpacing: "0.08em", color: MID,
          }}>FREE</span>
        </div>
      )}
    </div>
  );
}

function YouTubeCard() {
  return (
    <div style={{ ...card, width: "100%", padding: 12, fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{
        position: "relative", width: "100%", aspectRatio: "16 / 9",
        background: `linear-gradient(150deg,#16283A 0%,#0C1826 55%,${NAVY} 100%)`,
        borderRadius: 9, overflow: "hidden",
      }}>
        {/* Illustrated "photo" — a presenter silhouette against a spotlight, standing in for a real thumbnail image */}
        <svg width="100%" height="100%" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice"
          style={{ position: "absolute", inset: 0 }} aria-hidden="true">
          <defs>
            <radialGradient id="yt-spot" cx="72%" cy="38%" r="60%">
              <stop offset="0%" stopColor="rgba(143,193,227,0.32)" />
              <stop offset="100%" stopColor="rgba(143,193,227,0)" />
            </radialGradient>
            <linearGradient id="yt-figure" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={STEEL} />
              <stop offset="100%" stopColor={NAVY} />
            </linearGradient>
          </defs>
          <rect width="160" height="90" fill="url(#yt-spot)" />
          {/* Shoulders + head silhouette, right-aligned like a talking-head thumbnail */}
          <circle cx="122" cy="40" r="15" fill="url(#yt-figure)" opacity="0.9" />
          <path d="M92 90 Q92 56 122 56 Q152 56 152 90 Z" fill="url(#yt-figure)" opacity="0.9" />
          {/* Chart motif, upper-left, like an inset graphic in a real thumbnail */}
          <polyline points="10,54 26,48 42,50 58,36 74,40 88,26" stroke={POWDER} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
        </svg>
        <div style={{
          position: "absolute", left: 12, top: 12, right: 12,
          fontFamily: "var(--font-inter),sans-serif", fontSize: 12.5, fontWeight: 800,
          letterSpacing: "-0.01em", color: PAPER, lineHeight: 1.2, maxWidth: "70%",
          textShadow: "0 2px 10px rgba(0,0,0,0.35)",
        }}>
          Why most B2B newsletters never get replies
        </div>
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 42, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.16)",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.22)",
          }}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" aria-hidden="true">
              <path d="M1.5 1.2 10.6 6.5 1.5 11.8Z" fill={PAPER} />
            </svg>
          </div>
        </div>
        <div style={{
          position: "absolute", right: 8, bottom: 8,
          background: "rgba(0,0,0,0.6)", color: PAPER, borderRadius: 4,
          padding: "2px 6px", fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
        }}>8:24</div>
      </div>
      <div style={{ marginTop: 11 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: INK, lineHeight: 1.4 }}>
          Why most B2B newsletters never get replies
        </div>
        <div style={{ fontSize: 10.5, color: DIM, marginTop: 3 }}>4.1K views · 3 weeks ago</div>
      </div>
    </div>
  );
}

function SearchResult() {
  return (
    <div style={{ ...card, width: "100%", padding: "14px 16px", fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="4.4" stroke={MID} strokeWidth="1.2" />
          <line x1="9.3" y1="9.3" x2="12.8" y2="12.8" stroke={MID} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 10, color: DIM }}>b2b newsletter cadence</div>
      </div>
      <div style={{ fontSize: 9.5, color: "#1A7A3C", marginBottom: 3, letterSpacing: "-0.005em" }}>
        yourbrand.com › guides › newsletter-frequency
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#1A5DAD", lineHeight: 1.3, marginBottom: 5 }}>
        How Often Should You Send a B2B Newsletter?
      </div>
      <div style={{ fontSize: 11, color: DIM, lineHeight: 1.5 }}>
        A simple framework for choosing a send cadence based on your content and sales cycle.
      </div>
    </div>
  );
}

function XPost() {
  return (
    <div style={{ ...card, width: "100%", padding: "14px 16px", fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
        <div style={{
          width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
          background: `linear-gradient(135deg,${STEEL},${NAVY})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-inter),sans-serif", fontSize: 10, fontWeight: 700, color: PAPER,
        }}>JT</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, color: INK }}>Jordan Ide</div>
          <div style={{ fontSize: 9.5, color: DIM }}>@jordanide</div>
        </div>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "auto" }} aria-hidden="true">
          <path d="M1.8 1.8 12.2 12.2M12.2 1.8 1.8 12.2" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ fontSize: 12, lineHeight: 1.5, color: INK }}>
        Been getting real value from @yourbrand&rsquo;s newsletter the last few weeks, worth a look.
      </div>
    </div>
  );
}

/* ── The owned asset: inbox / newsletter interface ────────────────── */

const EMAILS = [
  { kind: "WELCOME EMAIL", subject: "Thanks for subscribing, here's what to expect", unread: true },
  { kind: "NEWSLETTER",    subject: "This week: fixing your follow-up sequence",      unread: true },
  { kind: "NURTURE",       subject: "A template that's worked well for our readers",  unread: false },
  { kind: "CAMPAIGN",      subject: "New pricing guide is live",                      unread: false },
];

function InboxWindow({ count }: { count: number }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.46)",
      backdropFilter: "blur(20px) saturate(140%)",
      WebkitBackdropFilter: "blur(20px) saturate(140%)",
      borderRadius: 14, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.55)",
      boxShadow: "0 1px 1px rgba(13,27,42,0.07), 0 24px 44px -16px rgba(13,27,42,0.32)",
      fontFamily: "var(--font-geist),sans-serif",
      maxWidth: 420,
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#EAECF0", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8,
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: WHITE, borderRadius: 4, height: 19,
          display: "flex", alignItems: "center", padding: "0 8px",
          border: "1px solid rgba(0,0,0,0.08)",
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5, color: "#8C9BB1",
        }}>yourbrand.com/newsletter</div>
      </div>

      {/* Audience header */}
      <div style={{
        background: NAVY, padding: "14px 16px",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 8,
            letterSpacing: "0.14em", color: POWDER, marginBottom: 6,
          }}>YOUR EMAIL AUDIENCE</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{
              fontFamily: "var(--font-inter),sans-serif", fontSize: "1.5rem",
              fontWeight: 700, letterSpacing: "-0.04em", color: PAPER, lineHeight: 1,
            }}>{count.toLocaleString()}</span>
            <span style={{
              fontFamily: "var(--font-geist),sans-serif", fontSize: 11, color: "rgba(234,244,251,0.62)",
            }}>subscribers</span>
          </div>
        </div>
        <div style={{
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 8, letterSpacing: "0.07em",
          color: POWDER, background: "rgba(143,193,227,0.14)", padding: "5px 9px", borderRadius: 5,
        }}>NO ALGORITHM IN BETWEEN</div>
      </div>

      {/* What they receive */}
      {EMAILS.map((e, i) => (
        <motion.div key={e.kind}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.09, duration: 0.4, ease }}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "9px 16px",
            borderBottom: i < EMAILS.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
            background: e.unread ? "rgba(143,193,227,0.10)" : "transparent",
          }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
            background: e.unread ? STEEL : "transparent",
            border: e.unread ? "none" : `1.5px solid ${CB}`,
          }} />
          <span style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 8,
            letterSpacing: "0.06em", color: STEEL, width: 88, flexShrink: 0,
          }}>{e.kind}</span>
          <span style={{
            fontFamily: "var(--font-geist),sans-serif", fontSize: 12,
            fontWeight: e.unread ? 600 : 400, color: INK,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>{e.subject}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Business outcome artifacts ───────────────────────────────────── */

function ReplyCard() {
  return (
    <div style={{ ...card, padding: "14px 16px", fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5.5 3 1.5 6.5 5.5 10" stroke={STEEL} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 6.5h6a4.5 4.5 0 0 1 4.5 4.5v0.5" stroke={STEEL} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, letterSpacing: "0.1em", color: STEEL }}>REPLY</span>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: INK, marginBottom: 6, letterSpacing: "-0.01em" }}>
        &ldquo;Can you send more on this?&rdquo;
      </div>
      <div style={{ fontSize: 11, color: DIM }}>Priya Shah · Head of RevOps</div>
    </div>
  );
}

function MeetingCard() {
  return (
    <div style={{ ...card, padding: "14px 16px", fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, letterSpacing: "0.1em", color: STEEL, marginBottom: 11 }}>
        MEETING BOOKED
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 11 }}>
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={`dow-${i}`} style={{
            textAlign: "center", fontFamily: "var(--font-geist-mono),monospace",
            fontSize: 7.5, color: DIM,
          }}>{d}</div>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} style={{
            aspectRatio: "1", borderRadius: 3,
            background: i === 11 ? INK : MUTED,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 8.5,
            fontWeight: i === 11 ? 700 : 400,
            color: i === 11 ? PAPER : "#8C9BB1",
          }}>{i + 12}</div>
        ))}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: INK }}>Intro call · Thu 2:00</div>
      <div style={{ fontSize: 10.5, color: DIM, marginTop: 3 }}>with Priya Shah</div>
    </div>
  );
}

function OpportunityCard() {
  return (
    <div style={{ ...card, padding: "14px 16px", fontFamily: "var(--font-geist),sans-serif" }}>
      <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, letterSpacing: "0.1em", color: STEEL, marginBottom: 11 }}>
        OPPORTUNITY
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 11 }}>
        {["Lead", "Qualified", "Proposal"].map((s, i) => (
          <span key={s} style={{
            flex: 1, textAlign: "center", borderRadius: 5, padding: "5px 0",
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 8,
            letterSpacing: "0.04em",
            background: i <= 1 ? "rgba(49,112,142,0.12)" : MUTED,
            color: i <= 1 ? STEEL : "#9AA8B8",
          }}>{s}</span>
        ))}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: INK }}>Northline Co · $18,400</div>
    </div>
  );
}

function RevenueCard() {
  return (
    <div style={{
      background: "rgba(17,24,39,0.72)",
      backdropFilter: "blur(18px) saturate(160%)",
      WebkitBackdropFilter: "blur(18px) saturate(160%)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14, padding: "16px 18px",
      boxShadow: "0 1px 1px rgba(13,27,42,0.1), 0 16px 40px -12px rgba(13,27,42,0.4)",
      fontFamily: "var(--font-geist),sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, letterSpacing: "0.12em", color: POWDER }}>
          REVENUE
        </span>
        <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 10, letterSpacing: "0.04em", color: "#7DD68C" }}>
          +18% MTD
        </span>
      </div>
      <div style={{
        fontFamily: "var(--font-inter),sans-serif", fontSize: "1.4rem", fontWeight: 700,
        letterSpacing: "-0.03em", color: PAPER, marginBottom: 10,
      }}>$42,300</div>
      <svg width="100%" height="34" viewBox="0 0 120 34" fill="none" preserveAspectRatio="none" style={{ display: "block" }}>
        <motion.path
          d="M2 30 L26 24 L50 26 L74 14 L98 10 L118 3"
          stroke={POWDER} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"
          style={{ vectorEffect: "non-scaling-stroke" } as React.CSSProperties}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease }} />
      </svg>
    </div>
  );
}

/* ── Numeric readout ──────────────────────────────────────────────── */

function useCounter(target: number, duration = 1400) {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!seen || reduced) return;
    let raf = 0, begin = 0;
    const step = (ts: number) => {
      if (!begin) begin = ts;
      const p = Math.min((ts - begin) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, target, duration, reduced]);
  // Reduced-motion users get the final value straight away, no effect needed.
  return { val: reduced ? target : val, start: () => setSeen(true) };
}

function Readout({ value, label, align = "left" }: { value: number; label: string; align?: "left" | "right" }) {
  const { val, start } = useCounter(value);
  return (
    <motion.div
      onViewportEnter={start}
      viewport={{ once: true }}
      style={{ textAlign: align }}
    >
      <div style={{
        fontFamily: "var(--font-inter),sans-serif", fontSize: "clamp(1.5rem,2.4vw,2.1rem)",
        fontWeight: 700, letterSpacing: "-0.04em", color: INK, lineHeight: 1,
      }}>{val.toLocaleString()}</div>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 9,
        letterSpacing: "0.13em", textTransform: "uppercase", color: MID, marginTop: 7,
      }}>{label}</div>
    </motion.div>
  );
}

/* ── Stage caption ────────────────────────────────────────────────── */

function StageCaption({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease }}
      style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(18px,2.4vw,26px)" }}
    >
      <span style={{
        width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: NAVY, color: PAPER,
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 12, fontWeight: 700,
      }}>{index}</span>
      <span style={{
        fontFamily: "var(--font-inter),sans-serif",
        fontSize: "clamp(1.05rem,1.7vw,1.4rem)", fontWeight: 700,
        letterSpacing: "-0.025em", color: INK,
      }}>{title}</span>
    </motion.div>
  );
}

/* ── Step panel — a shadowed box that outlines each numbered step,
   so the whole scene reads as three distinct stages, not one blur ── */
const stepPanel: React.CSSProperties = {
  position: "relative",
  background: "rgba(224,238,250,0.16)",
  backdropFilter: "blur(14px) saturate(120%)",
  WebkitBackdropFilter: "blur(14px) saturate(120%)",
  border: "1px solid rgba(80,133,165,0.08)",
  borderRadius: 24,
  boxShadow: "0 16px 36px -30px rgba(30,74,110,0.14)",
  padding: "clamp(22px,3vw,36px)",
};

/* ── The Sawa path — one bold ribbon through the whole scene ───────── */

const RIBBON_D =
  "M 150 70 C 330 130, 430 210, 600 262 C 760 310, 690 372, 600 420 C 520 462, 600 700, 600 742 C 600 812, 760 830, 1010 880";

function Ribbon({ reduced }: { reduced: boolean }) {
  return (
    <svg
      aria-hidden="true" viewBox="0 0 1200 940" preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="sawa-ribbon" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%"   stopColor={POWDER} />
          <stop offset="52%"  stopColor={MID} />
          <stop offset="100%" stopColor={NAVY} />
        </linearGradient>
      </defs>

      {/* Soft wide underlay so the ribbon reads as a physical band, not a hairline */}
      <path d={RIBBON_D} fill="none" stroke="url(#sawa-ribbon)" strokeWidth="22"
        strokeLinecap="round" strokeOpacity="0.1"
        style={{ vectorEffect: "non-scaling-stroke" } as React.CSSProperties} />

      <motion.path
        d={RIBBON_D} fill="none" stroke="url(#sawa-ribbon)" strokeWidth="8"
        strokeLinecap="round" strokeOpacity="0.9"
        style={{ vectorEffect: "non-scaling-stroke" } as React.CSSProperties}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.2, ease }}
      />

      {/* The person travelling the journey */}
      {!reduced && (
        <circle r="7" fill={WHITE} stroke={NAVY} strokeWidth="3">
          <animateMotion dur="9s" repeatCount="indefinite" path={RIBBON_D} rotate="auto" />
        </circle>
      )}
    </svg>
  );
}

/* ── Main scene ───────────────────────────────────────────────────── */

export default function AudienceJourney() {
  const reduced = useReducedMotion() ?? false;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Ribbon reduced={reduced} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── 01 · People find you ── */}
        <div style={stepPanel}>
          <StageCaption index="01" title="People find you." />
          <div className="aj-discovery" style={{
            display: "grid", gridTemplateColumns: "1.15fr 0.85fr 0.95fr 0.8fr",
            gap: "clamp(14px,1.8vw,26px)", alignItems: "start",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease }}
              style={{ transform: "rotate(-1.5deg)" }}
            ><LinkedInPost onCapture /></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.08, duration: 0.6, ease }}
              style={{ transform: "rotate(1.5deg)", marginTop: "clamp(18px,3vw,44px)" }}
            ><YouTubeCard /></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.16, duration: 0.6, ease }}
              style={{ transform: "rotate(-1deg)", marginTop: "clamp(6px,1.4vw,18px)" }}
            ><SearchResult /></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ delay: 0.24, duration: 0.6, ease }}
              style={{ transform: "rotate(1.8deg)", marginTop: "clamp(26px,4vw,62px)" }}
            ><XPost /></motion.div>
          </div>
        </div>

        {/* ── 02 · Capture ── */}
        <div style={{ marginTop: "clamp(34px,5vw,62px)", display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              background: "rgba(255,255,255,0.44)",
              backdropFilter: "blur(18px) saturate(140%)",
              WebkitBackdropFilter: "blur(18px) saturate(140%)",
              border: "1px solid rgba(255,255,255,0.5)", borderRadius: 999,
              padding: "10px 20px 10px 14px",
              boxShadow: "0 1px 1px rgba(30,74,110,0.06), 0 18px 40px -16px rgba(30,74,110,0.28)",
            }}
          >
            {/* cursor mark */}
            <span style={{
              width: 30, height: 30, borderRadius: "50%", background: PAPER,
              display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 1.6 11.2 6.6 7.2 7.5 5.8 11.6Z" fill={NAVY} />
              </svg>
            </span>
            <span style={{
              fontFamily: "var(--font-inter),sans-serif", fontSize: "clamp(0.95rem,1.3vw,1.1rem)",
              fontWeight: 650, color: INK, letterSpacing: "-0.02em",
            }}>Turn interest into a subscriber.</span>
          </motion.div>
        </div>

        {/* ── 03 · Email audience ── */}
        <div style={{ marginTop: "clamp(34px,5vw,62px)", ...stepPanel }}>
          <StageCaption index="02" title="Now you can reach them directly." />
          <div className="aj-inbox-row" style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap",
            gap: "clamp(32px,5vw,72px)", alignItems: "center",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.7, ease }}
              style={{ flex: "1 1 320px", maxWidth: 420 }}
            ><InboxWindow count={4200} /></motion.div>

            <div className="aj-readouts" style={{ display: "flex", flexDirection: "column", gap: "clamp(20px,3vw,34px)", flexShrink: 0 }}>
              <Readout value={48000} label="Reach" />
              <Readout value={4200} label="Subscribers" />
              <Readout value={126} label="Replies" />
            </div>
          </div>
        </div>

        {/* ── 04 · Business ── */}
        <div style={{ marginTop: "clamp(40px,6vw,74px)", ...stepPanel }}>
          <StageCaption index="03" title="That turns into business." />
          <div className="aj-outcomes" style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            gap: "clamp(14px,1.8vw,24px)", alignItems: "start",
          }}>
            {[
              { el: <ReplyCard />,       rot: "-1.2deg", mt: "0px" },
              { el: <MeetingCard />,     rot: "1deg",    mt: "clamp(10px,1.6vw,22px)" },
              { el: <OpportunityCard />, rot: "-0.8deg", mt: "clamp(4px,1vw,12px)" },
              { el: <RevenueCard />,     rot: "1.4deg",  mt: "clamp(16px,2.4vw,34px)" },
            ].map((o, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.09, duration: 0.6, ease }}
                style={{ transform: `rotate(${o.rot})`, marginTop: o.mt }}
              >{o.el}</motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .aj-discovery  { grid-template-columns: 1fr 1fr !important; }
          .aj-outcomes   { grid-template-columns: 1fr 1fr !important; }
          .aj-readouts   { flex-direction: row !important; justify-content: space-between; width: 100%; }
        }
        @media (max-width: 560px) {
          .aj-discovery  { grid-template-columns: 1fr !important; }
          .aj-outcomes   { grid-template-columns: 1fr !important; }
          .aj-readouts   { flex-wrap: wrap; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}
