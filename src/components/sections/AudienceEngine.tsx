"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INK    = "#111827";
const DIM    = "#4B6E8A";
const FAINT  = "#8FC1E3";
const GREEN  = "#5085A5";
const BORDER = "rgba(80,133,165,0.14)";
const CANVAS = "#F4F7FA";
const PAPER  = "#EAF4FB";

type Mode = "DEFAULT" | "GROW" | "ENGAGE" | "CONVERT";

const MODES: Mode[] = ["DEFAULT", "GROW", "ENGAGE", "CONVERT"];

// Which source nodes are "active" per mode
const MODE_SOURCES: Record<Mode, string[]> = {
  DEFAULT:  ["linkedin", "events", "search", "partners", "content"],
  GROW:     ["linkedin", "search", "partners"],
  ENGAGE:   ["linkedin", "content", "events"],
  CONVERT:  ["linkedin", "content"],
};

const MODE_OUTPUTS: Record<Mode, string[]> = {
  DEFAULT:  ["pipeline"],
  GROW:     ["pipeline"],
  ENGAGE:   ["pipeline"],
  CONVERT:  ["pipeline"],
};

const MODE_LABELS: Record<Mode, { headline: string; sub: string; tags: string[] }> = {
  DEFAULT: {
    headline: "THE AUDIENCE ENGINE",
    sub: "A complete system: capture → engage → convert.",
    tags: ["Lead magnets", "Newsletter", "Sequences", "Campaigns"],
  },
  GROW: {
    headline: "01 / GROW",
    sub: "Build an email audience of the people your business actually wants.",
    tags: ["Lead magnets", "Landing pages", "LinkedIn → email", "Referrals", "Experiments"],
  },
  ENGAGE: {
    headline: "02 / ENGAGE",
    sub: "Turn expertise into content people recognize and return to.",
    tags: ["Expert interviews", "LinkedIn content", "Newsletter", "Editorial calendar"],
  },
  CONVERT: {
    headline: "03 / CONVERT",
    sub: "Build email journeys that move attention toward commercial action.",
    tags: ["Welcome", "Nurture", "Lifecycle", "Launch", "Re-engagement"],
  },
};

const SOURCES = [
  { id: "linkedin",  label: "LINKEDIN",  y: 0 },
  { id: "events",    label: "EVENTS",    y: 1 },
  { id: "search",    label: "SEARCH",    y: 2 },
  { id: "partners",  label: "PARTNERS",  y: 3 },
  { id: "content",   label: "CONTENT",   y: 4 },
];

// SVG Audience Engine diagram
function EngineDiagram({ mode }: { mode: Mode }) {
  const activeSrcs = MODE_SOURCES[mode];
  const pulsing = useRef(0);

  // Packet stagger offsets — declarative via SVG animateMotion begin attr

  // Layout constants
  const W = 480, H = 320;
  const srcX = 40, ownX = 200, midX = 290, outX = 420;
  const srcYs = [40, 90, 140, 190, 240];
  const ownY = 140;
  const midYs = [90, 140, 190];
  const pipeY = 140;

  // Path from source to owned audience node
  function srcPath(y: number) {
    const cx = (srcX + ownX) / 2;
    return `M${srcX + 28},${y} C${cx},${y} ${cx},${ownY} ${ownX - 22},${ownY}`;
  }
  // Path from owned → mid nodes
  function toMidPath(toY: number) {
    const cx = (ownX + midX) / 2;
    return `M${ownX + 22},${ownY} C${cx},${ownY} ${cx},${toY} ${midX - 20},${toY}`;
  }
  // Path from mid → pipeline
  function toPipePath(fromY: number) {
    const cx = (midX + outX) / 2;
    return `M${midX + 20},${fromY} C${cx},${fromY} ${cx},${pipeY} ${outX - 20},${pipeY}`;
  }

  function isActive(id: string) {
    return mode === "DEFAULT" || activeSrcs.includes(id);
  }

  function pointOnPath(t: number, path: string): { x: number; y: number } | null {
    // Simplified: linear interpolation along cubic bezier control points
    // We'll use SVG getTotalLength via inline element instead — use approx
    const p = t;
    // Approximate: just return lerp for now (real impl uses SVGPath)
    return null;
  }

  const midLabels = ["GROW", "ENGAGE", "CONVERT"];
  const midColors: Record<Mode, number[]> = {
    DEFAULT: [0, 1, 2],
    GROW:    [0],
    ENGAGE:  [1],
    CONVERT: [2],
  };
  const activeMid = mode === "DEFAULT" ? [0, 1, 2] : midColors[mode];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="100%"
      style={{ overflow: "visible", maxHeight: 340 }}
      aria-label="Audience Engine system diagram"
      role="img"
    >
      {/* Grid background lines */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`vg${i}`} x1={i*60+20} y1={0} x2={i*60+20} y2={H}
          stroke={BORDER} strokeWidth="0.5" />
      ))}
      {[0,1,2,3,4,5].map(i => (
        <line key={`hg${i}`} x1={0} y1={i*60+20} x2={W} y2={i*60+20}
          stroke={BORDER} strokeWidth="0.5" />
      ))}

      {/* === Source → Owned paths === */}
      {SOURCES.map((src, i) => {
        const active = isActive(src.id);
        const d = srcPath(srcYs[i]);
        return (
          <g key={src.id}>
            <path d={d} fill="none"
              stroke={active ? (mode === "DEFAULT" ? INK : GREEN) : BORDER}
              strokeWidth={active ? 1.2 : 0.8}
              strokeDasharray={active ? "none" : "3 3"}
              opacity={active ? 0.7 : 0.35}
              style={{ transition: "stroke 400ms ease, opacity 400ms ease" }}
            />
            {/* Animated signal packet on active paths */}
            {active && mode !== "DEFAULT" && (
              <AnimatedPacket d={d} begin={`-${(i * 0.44).toFixed(2)}s`} color={GREEN} />
            )}
          </g>
        );
      })}

      {/* === Source nodes === */}
      {SOURCES.map((src, i) => {
        const active = isActive(src.id);
        return (
          <g key={`sn-${src.id}`}>
            <rect
              x={srcX - 28} y={srcYs[i] - 11}
              width={56} height={22}
              rx={3}
              fill={active ? (mode !== "DEFAULT" ? GREEN : INK) : PAPER}
              stroke={active ? (mode !== "DEFAULT" ? GREEN : INK) : BORDER}
              strokeWidth={0.8}
              style={{ transition: "fill 400ms ease, stroke 400ms ease" }}
            />
            <text
              x={srcX} y={srcYs[i] + 4.5}
              textAnchor="middle"
              fontSize={7.5}
              fontFamily="var(--font-geist-mono), monospace"
              letterSpacing="0.05em"
              fill={active ? (mode !== "DEFAULT" ? INK : "#fff") : FAINT}
              style={{ transition: "fill 400ms ease" }}
            >
              {src.label}
            </text>
          </g>
        );
      })}

      {/* === Owned Audience node === */}
      <g>
        <rect x={ownX - 44} y={ownY - 22} width={88} height={44}
          rx={4}
          fill={INK}
          stroke={mode !== "DEFAULT" ? GREEN : INK}
          strokeWidth={mode !== "DEFAULT" ? 1.5 : 1}
          style={{ transition: "stroke 400ms ease" }}
        />
        <text x={ownX} y={ownY - 6} textAnchor="middle"
          fontSize={7} fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="0.06em" fill={FAINT}>OWNED</text>
        <text x={ownX} y={ownY + 8} textAnchor="middle"
          fontSize={8.5} fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="0.04em" fill="#fff" fontWeight="500">AUDIENCE</text>
        {/* Live pulse */}
        <circle cx={ownX + 28} cy={ownY - 14} r={3.5} fill={GREEN} />
      </g>

      {/* === Owned → mid paths === */}
      {midYs.map((y, i) => {
        const active = activeMid.includes(i);
        const d = toMidPath(y);
        return (
          <g key={`om${i}`}>
            <path d={d} fill="none"
              stroke={active ? (mode !== "DEFAULT" ? GREEN : INK) : BORDER}
              strokeWidth={active ? 1.2 : 0.8}
              opacity={active ? 0.7 : 0.3}
              style={{ transition: "stroke 400ms ease, opacity 400ms ease" }}
            />
            {active && mode !== "DEFAULT" && (
              <AnimatedPacket d={d} begin={`-${(i * 0.55).toFixed(2)}s`} color={GREEN} />
            )}
          </g>
        );
      })}

      {/* === Mid nodes (GROW / ENGAGE / CONVERT) === */}
      {midYs.map((y, i) => {
        const active = activeMid.includes(i);
        const lbl = midLabels[i];
        return (
          <g key={`mn${i}`}>
            <rect x={midX - 30} y={y - 14} width={60} height={28}
              rx={3}
              fill={active && mode !== "DEFAULT" ? GREEN : active ? "#E8E8E4" : PAPER}
              stroke={active ? (mode !== "DEFAULT" ? GREEN : INK) : BORDER}
              strokeWidth={0.8}
              style={{ transition: "fill 400ms ease, stroke 400ms ease" }}
            />
            <text x={midX} y={y + 4.5} textAnchor="middle"
              fontSize={8} fontFamily="var(--font-geist-mono), monospace"
              letterSpacing="0.06em"
              fill={active && mode !== "DEFAULT" ? INK : active ? INK : FAINT}
              fontWeight={active ? "500" : "400"}
              style={{ transition: "fill 400ms ease" }}
            >
              {lbl}
            </text>
          </g>
        );
      })}

      {/* === Mid → Pipeline paths === */}
      {midYs.map((y, i) => {
        const active = activeMid.includes(i);
        const d = toPipePath(y);
        return (
          <g key={`mp${i}`}>
            <path d={d} fill="none"
              stroke={active ? (mode !== "DEFAULT" ? GREEN : INK) : BORDER}
              strokeWidth={active ? 1.2 : 0.8}
              opacity={active ? 0.7 : 0.3}
              style={{ transition: "stroke 400ms ease, opacity 400ms ease" }}
            />
            {active && mode !== "DEFAULT" && (
              <AnimatedPacket d={d} begin={`-${(i * 0.66).toFixed(2)}s`} color={GREEN} />
            )}
          </g>
        );
      })}

      {/* === Pipeline output node === */}
      <g>
        <rect x={outX - 32} y={pipeY - 22} width={64} height={44}
          rx={4}
          fill={INK}
          stroke={mode !== "DEFAULT" ? GREEN : INK}
          strokeWidth={mode !== "DEFAULT" ? 1.5 : 1}
          style={{ transition: "stroke 400ms ease" }}
        />
        <text x={outX} y={pipeY - 5} textAnchor="middle"
          fontSize={6.5} fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="0.07em" fill={FAINT}>OUTPUT</text>
        <text x={outX} y={pipeY + 9} textAnchor="middle"
          fontSize={9} fontFamily="var(--font-geist-mono), monospace"
          letterSpacing="0.03em" fill="#fff" fontWeight="500">PIPELINE</text>
      </g>
    </svg>
  );
}

// A packet dot that travels along a path using animateMotion with inline path
function AnimatedPacket({ d, begin = "0s", color }: { d: string; begin?: string; color: string }) {
  return (
    <circle r={2.5} fill={color} opacity={0.8}>
      <animateMotion
        path={d}
        dur="2.2s"
        begin={begin}
        repeatCount="indefinite"
        calcMode="linear"
      />
    </circle>
  );
}

// ── Hero Section ──────────────────────────────────────────────
export default function HeroAudienceEngine() {
  const [mode, setMode] = useState<Mode>("DEFAULT");
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-cycle through modes to demonstrate the system
  useEffect(() => {
    if (userInteracted) return;
    const cycle: Mode[] = ["DEFAULT", "GROW", "ENGAGE", "CONVERT"];
    let i = 0;
    autoRef.current = setInterval(() => {
      i = (i + 1) % cycle.length;
      setMode(cycle[i]);
    }, 3200);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [userInteracted]);

  function selectMode(m: Mode) {
    setUserInteracted(true);
    if (autoRef.current) clearInterval(autoRef.current);
    setMode(m);
  }

  const info = MODE_LABELS[mode];

  return (
    <section
      id="hero"
      aria-label="Sawa — owned audience marketing system"
      style={{
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 58,
        background: CANVAS,
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: 0,
      }}
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${BORDER} 1px, transparent 1px),
            linear-gradient(90deg, ${BORDER} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: 0.55,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(48px, 8vh, 80px) clamp(20px, 4vw, 48px)",
          display: "grid",
          gridTemplateColumns: "43% 57%",
          gap: 0,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* LEFT — Copy */}
        <div style={{ paddingRight: "clamp(24px, 4vw, 64px)" }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
            }}
          >
            <span className="status-dot-pulse" />
            <span style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: DIM,
            }}>
              AI-Native · Human-Led · Built for B2B
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16,1,0.3,1] }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2.6rem, 5vw, 4.25rem)",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.038em",
              color: INK,
              marginBottom: 24,
            }}
          >
            Own your<br />
            audience.<br />
            <span style={{ color: GREEN }}>Turn attention</span><br />
            into revenue.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease: [0.16,1,0.3,1] }}
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)",
              lineHeight: 1.72,
              color: DIM,
              maxWidth: 400,
              marginBottom: 36,
              fontFamily: "var(--font-geist), sans-serif",
            }}
          >
            Sawa embeds with B2B teams to grow the right email audience,
            build the content system that keeps it engaged, and run the
            sequences and campaigns that turn attention into pipeline.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5, ease: [0.16,1,0.3,1] }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}
          >
            <a href="#book" className="btn-primary">
              Book an intro call
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#system" className="btn-ghost">
              See how it works
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 10.5,
              color: FAINT,
              letterSpacing: "0.03em",
            }}
          >
            White-glove strategy + execution. Built to ramp fast inside your team.
          </motion.p>
        </div>

        {/* RIGHT — Audience Engine */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease: [0.16,1,0.3,1] }}
          style={{
            borderLeft: `1px solid ${BORDER}`,
            paddingLeft: "clamp(24px, 4vw, 48px)",
          }}
        >
          {/* Engine header */}
          <div style={{ marginBottom: 20 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16,1,0.3,1] }}
              >
                <div style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: mode !== "DEFAULT" ? GREEN : "#4B6E8A",
                  marginBottom: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: mode !== "DEFAULT" ? GREEN : "#8FC1E3", flexShrink: 0 }} />
                  {info.headline}
                </div>
                <p style={{
                  fontSize: 13,
                  color: DIM,
                  lineHeight: 1.5,
                  fontFamily: "var(--font-geist), sans-serif",
                  marginBottom: 10,
                }}>
                  {info.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Tag pills */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mode + "-tags"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
              >
                {info.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9.5,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    border: `1px solid ${mode !== "DEFAULT" ? GREEN : BORDER}`,
                    borderRadius: 2,
                    color: mode !== "DEFAULT" ? GREEN : FAINT,
                    background: mode !== "DEFAULT" ? "rgba(34,197,94,0.06)" : "transparent",
                    transition: "all 300ms ease",
                  }}>
                    {tag}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SVG Diagram */}
          <div style={{
            background: PAPER,
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            padding: "20px 16px",
            marginBottom: 16,
          }}>
            <EngineDiagram mode={mode} />
          </div>

          {/* Mode selector */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 6,
          }}>
            {MODES.map(m => (
              <button
                key={m}
                onClick={() => selectMode(m)}
                aria-pressed={mode === m}
                style={{
                  background: mode === m ? INK : "transparent",
                  border: `1px solid ${mode === m ? INK : BORDER}`,
                  borderRadius: 3,
                  padding: "6px 4px",
                  cursor: "pointer",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: mode === m ? "#fff" : FAINT,
                  transition: "all 180ms ease",
                }}
              >
                {m === "DEFAULT" ? "ALL" : m}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            border-left: none !important;
            border-top: 1px solid ${BORDER};
            padding-left: 0 !important;
            padding-top: 32px;
          }
        }
      `}</style>
    </section>
  );
}
