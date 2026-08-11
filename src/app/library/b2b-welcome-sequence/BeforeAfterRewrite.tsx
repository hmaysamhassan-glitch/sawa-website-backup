"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INK, DIM, MID, STEEL, NAVY, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

const VERSIONS = {
  before: {
    label: "Generic",
    color: MID,
    subject: "Welcome to our newsletter!",
    body: [
      "Hi there,",
      "Thanks for signing up! We're excited to have you on board.",
      "You'll receive updates from us regularly. In the meantime, feel free to check out our website and follow us on social media.",
      "Talk soon!",
    ],
  },
  after: {
    label: "Rewritten",
    color: STEEL,
    subject: "Here's your guide, plus what to expect",
    body: [
      "Hi Priya,",
      "Here's the pricing-page teardown you requested: [link].",
      "Over the next two weeks I'll send you three real examples of B2B teams fixing the exact mistakes in that guide, one email at a time, no fluff.",
      "Want to skip ahead? Reply and tell me what you're working on.",
      "Marcus, Sawa",
    ],
  },
};

const ANNOTATIONS = [
  "Names the actual thing delivered, not a generic \"thanks for signing up.\"",
  "Sets a concrete expectation, what's coming, how many, how often, instead of vague \"updates.\"",
  "One clear next step. The generic version points to \"the website,\" which isn't a step at all.",
];

export default function BeforeAfterRewrite() {
  const [active, setActive] = useState<"before" | "after">("before");
  const v = VERSIONS[active];

  return (
    <div style={{ margin: "28px 0 40px" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {(Object.keys(VERSIONS) as (keyof typeof VERSIONS)[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            style={{
              flex: 1, padding: "12px 8px", borderRadius: 10, cursor: "pointer",
              fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, fontWeight: 650,
              border: `1.5px solid ${active === key ? VERSIONS[key].color : BORDER}`,
              background: active === key ? VERSIONS[key].color : WHITE,
              color: active === key ? WHITE : DIM,
              transition: "all 0.2s ease",
            }}
          >
            {VERSIONS[key].label}
          </button>
        ))}
      </div>

      <div style={{
        borderRadius: 14, border: `1px solid ${BORDER}`, background: WHITE, overflow: "hidden",
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.26, ease }}
          >
            <div style={{
              padding: "12px 20px", borderBottom: `1px solid ${BORDER}`,
              display: "flex", flexDirection: "column", gap: 3,
            }}>
              <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 10, letterSpacing: "0.06em", color: DIM }}>SUBJECT</span>
              <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 15, fontWeight: 650, color: INK }}>{v.subject}</span>
            </div>
            <div style={{ padding: "18px 20px" }}>
              {v.body.map((line, i) => (
                <p key={i} style={{
                  fontFamily: "var(--font-geist),sans-serif", fontSize: 14, lineHeight: 1.65,
                  color: "#374151", margin: i < v.body.length - 1 ? "0 0 12px" : 0,
                }}>{line}</p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
        {ANNOTATIONS.map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{
              flexShrink: 0, width: 18, height: 18, borderRadius: "50%", background: "rgba(49,112,142,0.1)",
              color: STEEL, fontFamily: "var(--font-geist-mono),monospace", fontSize: 10, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2,
            }}>{i + 1}</span>
            <span style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, lineHeight: 1.55, color: DIM }}>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
