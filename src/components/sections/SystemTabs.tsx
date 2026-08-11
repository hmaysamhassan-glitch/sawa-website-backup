"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Palette — matches section 02 (Owned vs Rented) ───────────────────────────
const BG     = "#F4F7FA";
const INK    = "#111827";
const NAVY   = "#1E4A6E";
const STEEL  = "#31708E";
const MID    = "#5085A5";
const POWDER = "#8FC1E3";
const CB     = "rgba(80,133,165,0.14)";

// ── Content ───────────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: "GROW", num: "01",
    head: "Build the right email audience.",
  },
  {
    id: "ENGAGE", num: "02",
    head: "Create newsletters and content people want to keep reading.",
  },
  {
    id: "CONVERT", num: "03",
    head: "Use email campaigns and nurture to turn interest into action.",
  },
] as const;

// Angles: top / bottom-left / bottom-right — the same order as the cycle.
// Positions are calibrated to the orbit ring in AudienceGlobe (cx 230, cy 222,
// rx 228.8, ry 70.4 in the 460×460 viewBox), with a small outward nudge so the
// label text clears the ring line and node dot.
const LABEL_POS = [
  { label: "GROW",    x: "50%", y: "25%",   anchor: "middle" as const, angle: -90 },
  { label: "ENGAGE",  x: "0%",  y: "58.5%", anchor: "start"  as const, angle: 155 },
  { label: "CONVERT", x: "100%", y: "58.5%", anchor: "end"    as const, angle: 25  },
];

// Round to a fixed precision so trig output can't drift a bit between the
// server and client JS engines and trip a hydration mismatch.
const r2 = (n: number) => Math.round(n * 1000) / 1000;

// Deterministic fibonacci-sphere point field — an "audience" of dots scattered
// across the globe's surface, denser toward the center, thinning at the rim.
// Fixed formula (no Math.random) so server and client render identically.
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const SURFACE_DOTS = Array.from({ length: 130 }, (_, i) => {
  const yy = 1 - (i / 129) * 2;
  const radius = Math.sqrt(Math.max(0, 1 - yy * yy));
  const theta = GOLDEN_ANGLE * i;
  return { x: r2(Math.cos(theta) * radius), y: r2(yy), z: r2(Math.sin(theta) * radius) };
}).filter(p => p.z > -0.08);

// ── A premium orbiting-ring globe with a Grow → Engage → Convert cycle ───────
function AudienceGlobe({ active }: { active: number }) {
  const cx = 230, cy = 222, R = 176;
  const tickAngles = [-90, -45, 0, 45, 90, 135, 180, -135];

  const pt = (angleDeg: number, r: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: r2(cx + r * Math.cos(rad)), y: r2(cy + r * Math.sin(rad)) };
  };

  // The orbit ring — a tilted ellipse that carries the three stage nodes,
  // like a satellite path around the globe rather than a lumpy triangle.
  const ringRx = R * 1.3, ringRy = R * 0.4;
  const ringPt = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: r2(cx + ringRx * Math.cos(rad)), y: r2(cy + ringRy * Math.sin(rad)) };
  };
  const nodeAngles = LABEL_POS.map(l => l.angle);
  const ringSegs = nodeAngles.map((a0, i) => {
    const a1 = nodeAngles[(i + 1) % nodeAngles.length];
    let d = a1 - a0;
    d = ((d + 180) % 360 + 360) % 360 - 180;
    const mid = a0 + d / 2;
    return { p0: ringPt(a0), p1: ringPt(a1), ctrl: ringPt(mid) };
  });
  const fullRingPath = `M ${ringPt(0).x} ${ringPt(0).y} ` +
    Array.from({ length: 24 }, (_, i) => ringPt((i + 1) * 15))
      .map(p => `L ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 460 460" style={{ width: "100%", height: "100%", overflow: "visible" }}>
      <defs>
        <radialGradient id="sys-sph-g" cx="36%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#D6EBFA" />
          <stop offset="16%"  stopColor="#BFE0F5" />
          <stop offset="34%"  stopColor={POWDER} />
          <stop offset="56%"  stopColor={MID} />
          <stop offset="76%"  stopColor={STEEL} />
          <stop offset="92%"  stopColor={NAVY} />
          <stop offset="100%" stopColor="#0A1E33" />
        </radialGradient>
        <radialGradient id="sys-specular" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sys-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(143,193,227,0.26)" />
          <stop offset="60%" stopColor="rgba(80,133,165,0.10)" />
          <stop offset="100%" stopColor="rgba(80,133,165,0)" />
        </radialGradient>
        <radialGradient id="sys-ground" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="rgba(30,74,110,0.22)" />
          <stop offset="100%" stopColor="rgba(30,74,110,0)" />
        </radialGradient>
        <linearGradient id="sys-ring-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor={POWDER} stopOpacity="0.9" />
          <stop offset="50%"  stopColor={MID} stopOpacity="0.55" />
          <stop offset="100%" stopColor={NAVY} stopOpacity="0.9" />
        </linearGradient>
        <clipPath id="sys-sph-c"><circle cx={cx} cy={cy} r={R} /></clipPath>
        <marker id="sys-arrow-dim" viewBox="0 0 10 10" refX="6.5" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill="rgba(30,74,110,0.28)" />
        </marker>
        <marker id="sys-arrow-active" viewBox="0 0 10 10" refX="6.5" refY="5" markerWidth="7.5" markerHeight="7.5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill={STEEL} />
        </marker>
      </defs>

      {/* Ground shadow */}
      <ellipse cx={cx} cy={cy + R + 20} rx={R * 0.6} ry={11} fill="url(#sys-ground)" />

      {/* Ambient atmosphere */}
      <circle cx={cx} cy={cy} r={R + 70} fill="url(#sys-halo)" />

      {/* Back half of the orbit ring — passes behind the sphere */}
      <path d={fullRingPath} fill="none" stroke="url(#sys-ring-g)" strokeWidth="1" strokeDasharray="1 4.5" opacity="0.5" />

      <circle cx={cx} cy={cy} r={R} fill="url(#sys-sph-g)" />

      {/* Audience point-field — a scattered dot texture standing in for the lat/long mesh */}
      <g clipPath="url(#sys-sph-c)">
        {SURFACE_DOTS.map((d, i) => {
          const px = cx + d.x * R * 0.97;
          const py = cy + d.y * R * 0.97;
          const depth = (d.z + 0.08) / 1.08;
          return (
            <circle key={i} cx={px} cy={py} r={0.55 + depth * 0.95}
              fill="#FFFFFF" opacity={0.1 + depth * 0.4} />
          );
        })}
        {/* Two faint parallels to still hint at a globe, without a full grid */}
        <ellipse cx={cx} cy={cy} rx={R * 0.98} ry={R * 0.26} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />
        <ellipse cx={cx} cy={cy - R * 0.4} rx={R * 0.86} ry={R * 0.2} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
      </g>

      {/* Specular sheen — premium glass read */}
      <ellipse clipPath="url(#sys-sph-c)" cx={cx - R * 0.3} cy={cy - R * 0.34} rx={R * 0.5} ry={R * 0.38} fill="url(#sys-specular)" />

      {/* Rim */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(14,39,64,0.4)" strokeWidth="1.3" />
      <circle cx={cx} cy={cy} r={R + 2.5} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />

      {/* HUD tick marks — technical instrument feel */}
      {tickAngles.map(a => {
        const inner = pt(a, R + 6);
        const outer = pt(a, R + 13);
        return <line key={a} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="rgba(30,74,110,0.3)" strokeWidth="1.1" strokeLinecap="round" />;
      })}

      {/* Front half of the orbit ring, with the active Grow → Engage → Convert arc highlighted */}
      {ringSegs.map((s, i) => {
        const isActive = i === active;
        return (
          <path key={i}
            d={`M ${s.p0.x} ${s.p0.y} Q ${s.ctrl.x} ${s.ctrl.y} ${s.p1.x} ${s.p1.y}`}
            fill="none"
            stroke={isActive ? STEEL : "rgba(30,74,110,0.2)"}
            strokeWidth={isActive ? 2.1 : 1}
            strokeDasharray={isActive ? undefined : "1 5"}
            strokeLinecap="round"
            markerEnd={isActive ? "url(#sys-arrow-active)" : "url(#sys-arrow-dim)"}
            style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease" }}
          />
        );
      })}

      {/* Traveling pulse along the ring — shows the cycle is alive */}
      <circle r="3.4" fill={POWDER} className="sys-cycle-dot" style={{ filter: "drop-shadow(0 0 4px rgba(143,193,227,0.9))" }}>
        <animateMotion dur="9s" repeatCount="indefinite" path={fullRingPath} rotate="auto" />
      </circle>

      {/* Nodes */}
      {LABEL_POS.map(({ label, angle }, i) => {
        const isActive = i === active;
        const p = ringPt(angle);
        return (
          <g key={label}>
            {isActive && <circle cx={p.x} cy={p.y} r="12" fill="none" stroke="rgba(49,112,142,0.32)" strokeWidth="1.4" />}
            <circle cx={p.x} cy={p.y} r={isActive ? 6 : 3.4} fill={isActive ? STEEL : "rgba(30,74,110,0.28)"} style={{ transition: "all 0.4s ease" }} />
          </g>
        );
      })}
    </svg>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function SystemTabs() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 3), 4_500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="system" style={{ position: "relative", background: BG, padding: "clamp(72px,10vh,120px) 0", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(460px 300px at 12% 15%, rgba(143,193,227,0.24), transparent 60%),
          radial-gradient(420px 300px at 88% 25%, rgba(80,133,165,0.20), transparent 60%),
          radial-gradient(520px 340px at 50% 100%, rgba(30,74,110,0.11), transparent 60%)
        `,
        filter: "blur(4px)",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative" }}
      >
        <div style={{
          fontFamily: "var(--font-geist-mono),monospace",
          fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: MID,
          display: "flex", alignItems: "center", gap: 12,
          padding: "0 clamp(20px,4vw,52px)", marginBottom: 40,
        }}>
          03 / SYSTEM
          <div style={{ width: 36, height: 1, background: CB }} />
        </div>

        <div style={{ textAlign: "center", padding: "0 clamp(20px,4vw,52px)" }}>
          <h2 style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: "clamp(2.3rem,4.8vw,4.1rem)",
            fontWeight: 700, letterSpacing: "-0.042em", lineHeight: 1.04,
            color: INK, margin: 0,
          }}>
            We solve three things.
          </h2>
        </div>

        <div style={{
          position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
          margin: "16px auto 8px",
        }}>
          <div style={{ width: "min(60vh,540px)", height: "min(60vh,540px)", position: "relative" }}>
            <AudienceGlobe active={active} />
            {LABEL_POS.map(({ label, x, y, anchor }, i) => (
              <div key={label} style={{
                position: "absolute", left: x, top: y,
                transform: anchor === "middle" ? "translate(-50%,-50%)"
                  : anchor === "start" ? "translate(0,-50%)" : "translate(-100%,-50%)",
                background: i === active ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)",
                backdropFilter: "blur(12px) saturate(140%)",
                WebkitBackdropFilter: "blur(12px) saturate(140%)",
                border: i === active ? "1px solid rgba(255,255,255,0.6)" : "1px solid rgba(255,255,255,0.35)",
                borderRadius: 999,
                padding: i === active ? "6px 16px" : "5px 12px",
                boxShadow: i === active
                  ? "0 1px 1px rgba(30,74,110,0.05), 0 10px 24px -10px rgba(30,74,110,0.28)"
                  : "0 1px 1px rgba(30,74,110,0.04), 0 6px 16px -10px rgba(30,74,110,0.2)",
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: i === active ? 23 : 18,
                letterSpacing: "-0.01em",
                fontWeight: i === active ? 800 : 650,
                color: i === active ? NAVY : "rgba(30,74,110,0.42)",
                transition: "all 0.4s ease",
                whiteSpace: "nowrap",
              }}>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Big, bold, one stage at a time — cycles with the sphere above it */}
        <div style={{
          textAlign: "center", padding: "0 clamp(20px,4vw,52px)",
          minHeight: "clamp(120px,16vw,160px)",
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={STAGES[active].id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                fontFamily: "var(--font-geist-mono),monospace",
                fontSize: 11, letterSpacing: "0.16em",
                color: STEEL, marginBottom: 12,
              }}>
                {STAGES[active].num} / {STAGES[active].id}
              </div>
              <div style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: "clamp(1.6rem,3.2vw,2.4rem)",
                fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15,
                color: INK, maxWidth: 560, margin: "0 auto",
              }}>
                {STAGES[active].head}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <style>{`
        .sys-grid-spin { animation: sys-grid-spin 200s linear infinite; }
        @keyframes sys-grid-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sys-grid-spin { animation: none !important; }
          .sys-cycle-dot animateMotion { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
