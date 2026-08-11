"use client";
import { motion } from "framer-motion";
import { INK, DIM, MID, STEEL, NAVY, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

const STEPS = [
  { label: "Subscribes to your newsletter", tag: "NURTURE STARTS", color: MID, note: "A 4-email nurture sequence begins, building context on who you are." },
  { label: "Reads the newsletter for 3 months", tag: "NEWSLETTER, ONGOING", color: POWDER, note: "The relationship stays warm in the background. No trigger, just the calendar." },
  { label: "Visits your pricing page twice in a week", tag: "LIFECYCLE TRIGGERED", color: STEEL, note: "A behavior-triggered email fires: relevant, timely, specific to that action." },
  { label: "Replies, books a call", tag: "HANDOFF TO SALES", color: NAVY, note: "The newsletter keeps running. It never had to \"convert\" anyone." },
];

export default function JourneyDiagram() {
  return (
    <div style={{ margin: "24px 0 8px" }}>
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: 15, top: 8, bottom: 8, width: 2,
          background: `linear-gradient(180deg, ${MID}, ${POWDER}, ${STEEL}, ${NAVY})`, borderRadius: 2,
        }} />
        {STEPS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.5, ease }}
            style={{ display: "flex", gap: 18, position: "relative", paddingBottom: i < STEPS.length - 1 ? 26 : 0 }}
          >
            <div style={{
              flexShrink: 0, width: 32, height: 32, borderRadius: "50%", background: s.color,
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
              fontFamily: "var(--font-geist-mono),monospace", fontSize: 12, fontWeight: 700,
              color: s.color === POWDER ? INK : WHITE,
            }}>{i + 1}</div>
            <div style={{ paddingTop: 3 }}>
              <div style={{
                fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, letterSpacing: "0.08em",
                color: s.color === POWDER ? STEEL : s.color, marginBottom: 4,
              }}>{s.tag}</div>
              <div style={{
                fontFamily: "var(--font-inter),sans-serif", fontSize: 15.5, fontWeight: 650,
                color: INK, marginBottom: 4,
              }}>{s.label}</div>
              <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, lineHeight: 1.55, color: DIM, maxWidth: 480 }}>
                {s.note}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
