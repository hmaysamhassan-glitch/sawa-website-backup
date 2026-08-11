"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INK, DIM, MID, STEEL, NAVY, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

type Supply = "low" | "medium" | "high" | "veryHigh";
type Cycle = "short" | "medium" | "long";
type Owner = "dedicated" | "shared" | "solo";

const SUPPLY_OPTS: { id: Supply; label: string }[] = [
  { id: "low", label: "Less than 1 / month" },
  { id: "medium", label: "1 to 2 / month" },
  { id: "high", label: "3 to 4 / month" },
  { id: "veryHigh", label: "5+ / month" },
];
const CYCLE_OPTS: { id: Cycle; label: string }[] = [
  { id: "short", label: "Short (under 1 month)" },
  { id: "medium", label: "Medium (1 to 6 months)" },
  { id: "long", label: "Long (6+ months, multiple stakeholders)" },
];
const OWNER_OPTS: { id: Owner; label: string }[] = [
  { id: "dedicated", label: "A dedicated person or team" },
  { id: "shared", label: "Marketing, alongside other work" },
  { id: "solo", label: "A solo founder or one generalist" },
];

const SUPPLY_SCORE: Record<Supply, number> = { low: 0, medium: 1, high: 2, veryHigh: 3 };
const OWNER_SCORE: Record<Owner, number> = { dedicated: 2, shared: 1, solo: 0 };
const CYCLE_SCORE: Record<Cycle, number> = { short: 1, medium: 0, long: -1 };

function recommend(supply: Supply, cycle: Cycle, owner: Owner) {
  const score = SUPPLY_SCORE[supply] + OWNER_SCORE[owner] + CYCLE_SCORE[cycle];
  const cadence = score >= 4 ? "Weekly" : score >= 2 ? "Biweekly" : "Monthly";

  const reasons: string[] = [];
  if (supply === "low") reasons.push("your content supply is the limiting factor right now");
  if (supply === "veryHigh" || supply === "high") reasons.push("you have enough genuinely useful material to sustain a tighter cadence");
  if (owner === "solo") reasons.push("this sits on one person's plate, so the cadence needs to be sustainable without burning them out");
  if (owner === "dedicated") reasons.push("you have dedicated ownership, which removes the biggest constraint on frequency");
  if (cycle === "long") reasons.push("a long, considered buying cycle rewards staying steadily relevant over many months rather than sending often");
  if (cycle === "short") reasons.push("a short buying cycle can tolerate, and benefits from, more frequent contact");

  return { cadence, reasons: reasons.slice(0, 2) };
}

function RadioGroup<T extends string>({
  label, options, value, onChange,
}: { label: string; options: { id: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.08em",
        textTransform: "uppercase", color: STEEL, marginBottom: 10,
      }}>{label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            style={{
              display: "flex", alignItems: "center", gap: 10, textAlign: "left",
              padding: "10px 14px", borderRadius: 9, cursor: "pointer",
              border: `1.5px solid ${value === o.id ? STEEL : BORDER}`,
              background: value === o.id ? "rgba(49,112,142,0.07)" : WHITE,
              fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5,
              color: value === o.id ? INK : DIM, fontWeight: value === o.id ? 600 : 400,
              transition: "all 0.16s ease",
            }}
          >
            <span style={{
              width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
              border: `1.5px solid ${value === o.id ? STEEL : BORDER}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {value === o.id && <span style={{ width: 7, height: 7, borderRadius: "50%", background: STEEL }} />}
            </span>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CadenceFinder() {
  const [supply, setSupply] = useState<Supply>("medium");
  const [cycle, setCycle] = useState<Cycle>("medium");
  const [owner, setOwner] = useState<Owner>("shared");

  const result = useMemo(() => recommend(supply, cycle, owner), [supply, cycle, owner]);
  const angle = result.cadence === "Weekly" ? -50 : result.cadence === "Biweekly" ? 0 : 50;

  return (
    <div style={{ margin: "28px 0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px,3vw,40px)" }} className="cf-grid">
      <div>
        <RadioGroup label="How much genuinely useful content can you produce?" options={SUPPLY_OPTS} value={supply} onChange={setSupply} />
        <RadioGroup label="How long is your typical buying cycle?" options={CYCLE_OPTS} value={cycle} onChange={setCycle} />
        <RadioGroup label="Who owns sending this?" options={OWNER_OPTS} value={owner} onChange={setOwner} />
      </div>

      <div>
        <div style={{
          background: NAVY, borderRadius: 16, padding: "clamp(24px,3vw,32px)", textAlign: "center",
          position: "sticky", top: 100,
        }}>
          {/* Dial */}
          <svg width="100%" height="110" viewBox="0 0 220 110" style={{ marginBottom: 8 }}>
            <path d="M 20 100 A 90 90 0 0 1 200 100" stroke="rgba(255,255,255,0.14)" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path
              d="M 20 100 A 90 90 0 0 1 200 100"
              stroke={POWDER} strokeWidth="10" fill="none" strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={result.cadence === "Weekly" ? 0 : result.cadence === "Biweekly" ? 94 : 189}
              style={{ transition: "stroke-dashoffset 0.5s cubic-bezier(0.16,1,0.3,1)" }}
            />
            <motion.g
              animate={{ rotate: angle }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "110px 100px" }}
            >
              <line x1="110" y1="100" x2="110" y2="30" stroke={WHITE} strokeWidth="3" strokeLinecap="round" />
            </motion.g>
            <circle cx="110" cy="100" r="6" fill={WHITE} />
          </svg>

          <div style={{
            fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "rgba(143,193,227,0.65)", marginBottom: 6,
          }}>Your starting cadence</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={result.cadence}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "var(--font-inter),sans-serif", fontSize: "clamp(2rem,4vw,2.6rem)", fontWeight: 800,
                color: WHITE, letterSpacing: "-0.03em", marginBottom: 14,
              }}
            >{result.cadence}</motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={result.reasons.join("|")}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, lineHeight: 1.55,
                color: "rgba(234,244,251,0.78)", margin: 0, textAlign: "left",
              }}
            >
              This is a starting point{result.reasons.length ? ", because " : "."}
              {result.reasons.map((r, i) => (
                <span key={i}>{r}{i < result.reasons.length - 1 ? ", and " : "."}</span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .cf-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
