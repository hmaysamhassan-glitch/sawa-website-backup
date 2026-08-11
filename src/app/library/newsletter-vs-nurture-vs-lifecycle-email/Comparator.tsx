"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INK, DIM, MID, STEEL, NAVY, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

const FORMATS = [
  {
    id: "newsletter", label: "Newsletter", color: POWDER, textColor: INK,
    sentTo: "Your whole list", triggeredBy: "The calendar, not a person or event",
    timing: "Fixed schedule (weekly, biweekly, monthly)", job: "Stay relevant. Keep the relationship alive.",
    endsWhen: "It doesn't. It runs indefinitely.", example: "\"The B2B Brief: Issue #12\"",
  },
  {
    id: "nurture", label: "Nurture sequence", color: MID, textColor: WHITE,
    sentTo: "A specific segment (e.g. new leads, a webinar list)", triggeredBy: "Joining that segment",
    timing: "Fixed timeline (e.g. 5 emails over 3 weeks)", job: "Build readiness toward a specific decision.",
    endsWhen: "They convert, disengage, or the sequence completes.", example: "\"3 things to check before your renewal\"",
  },
  {
    id: "lifecycle", label: "Lifecycle email", color: NAVY, textColor: WHITE,
    sentTo: "One individual", triggeredBy: "Their behavior or status (e.g. viewing pricing, going cold)",
    timing: "Whenever the trigger fires, no fixed schedule", job: "Respond to where they are in the relationship right now.",
    endsWhen: "As long as the relationship exists.", example: "\"Still thinking about the Growth plan?\"",
  },
] as const;

const ROWS = [
  { key: "sentTo", label: "Sent to" },
  { key: "triggeredBy", label: "Triggered by" },
  { key: "timing", label: "Timing" },
  { key: "job", label: "Job" },
  { key: "endsWhen", label: "When it ends" },
  { key: "example", label: "Example" },
] as const;

export default function Comparator() {
  const [active, setActive] = useState(0);
  const current = FORMATS[active];

  return (
    <div style={{ margin: "28px 0 40px" }}>
      {/* Interactive card reveal */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }} className="cmp-tabs">
        {FORMATS.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(i)}
            style={{
              flex: 1, padding: "12px 8px", borderRadius: 10, cursor: "pointer",
              fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, fontWeight: 650,
              border: `1.5px solid ${active === i ? f.color : BORDER}`,
              background: active === i ? f.color : WHITE,
              color: active === i ? f.textColor : DIM,
              transition: "all 0.2s ease",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{
        position: "relative", borderRadius: 14, overflow: "hidden",
        border: `1px solid ${BORDER}`, background: WHITE,
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease }}
            style={{ padding: "22px 24px" }}
          >
            <div style={{
              display: "inline-block", padding: "3px 10px", borderRadius: 5, marginBottom: 16,
              background: current.color, color: current.textColor,
              fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.08em",
            }}>{current.label.toUpperCase()}</div>
            <dl style={{ display: "grid", gap: 12, margin: 0 }}>
              {ROWS.map((r) => (
                <div key={r.key} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: 12 }} className="cmp-row">
                  <dt style={{
                    fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.06em",
                    textTransform: "uppercase", color: STEEL, paddingTop: 2,
                  }}>{r.label}</dt>
                  <dd style={{
                    fontFamily: "var(--font-geist),sans-serif", fontSize: 14.5, lineHeight: 1.5,
                    color: INK, margin: 0,
                  }}>{current[r.key]}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Full reference table — always present, real semantic markup */}
      <div style={{ marginTop: 28, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
          <caption style={{
            textAlign: "left", fontFamily: "var(--font-geist-mono),monospace", fontSize: 10,
            letterSpacing: "0.08em", textTransform: "uppercase", color: DIM, marginBottom: 10, captionSide: "top",
          }}>Full comparison: newsletter vs. nurture sequence vs. lifecycle email</caption>
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: "left", padding: "8px 10px", borderBottom: `1.5px solid ${BORDER}`, color: DIM, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.05em" }}> </th>
              {FORMATS.map((f) => (
                <th key={f.id} scope="col" style={{
                  textAlign: "left", padding: "8px 10px", borderBottom: `2px solid ${f.color}`,
                  color: INK, fontFamily: "var(--font-inter),sans-serif", fontSize: 13.5, fontWeight: 700,
                }}>{f.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.key}>
                <th scope="row" style={{
                  textAlign: "left", padding: "9px 10px", borderBottom: `1px solid ${BORDER}`,
                  color: STEEL, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5,
                  letterSpacing: "0.04em", fontWeight: 500, whiteSpace: "nowrap",
                }}>{r.label}</th>
                {FORMATS.map((f) => (
                  <td key={f.id} style={{
                    padding: "9px 10px", borderBottom: `1px solid ${BORDER}`, color: "#374151",
                    fontFamily: "var(--font-geist),sans-serif", lineHeight: 1.45,
                  }}>{f[r.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .cmp-tabs { flex-direction: column; }
          .cmp-row { grid-template-columns: 1fr !important; gap: 3px !important; }
        }
      `}</style>
    </div>
  );
}
