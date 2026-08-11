"use client";
import { motion } from "framer-motion";
import { INK, DIM, MID, STEEL, NAVY, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

export default function SignalSpectrum() {
  return (
    <div style={{ margin: "24px 0 32px" }}>
      <div style={{ position: "relative", height: 10, borderRadius: 5, background: `linear-gradient(90deg, ${MID}, ${POWDER} 50%, ${STEEL})`, marginBottom: 14 }}>
        <motion.div
          initial={{ left: "50%" }}
          whileInView={{ left: "50%" }}
          viewport={{ once: true }}
          style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 18, height: 18, borderRadius: "50%", background: NAVY, border: `3px solid ${WHITE}`,
            boxShadow: "0 2px 8px rgba(30,74,110,0.35)",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ maxWidth: 220 }}>
          <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.08em", color: MID, marginBottom: 6 }}>FORGOTTEN</div>
          <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 13, lineHeight: 1.5, color: DIM }}>
            Falling opens, flat unsubscribes. You&apos;re not sending often enough to stay top of mind.
          </div>
        </div>
        <div style={{ maxWidth: 220, textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5, letterSpacing: "0.08em", color: STEEL, marginBottom: 6 }}>FATIGUED</div>
          <div style={{ fontFamily: "var(--font-geist),sans-serif", fontSize: 13, lineHeight: 1.5, color: DIM }}>
            Rising unsubscribes, flat or falling opens. You&apos;re sending more than your content quality supports.
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 10, letterSpacing: "0.06em", color: NAVY, fontWeight: 600 }}>
          HEALTHY CADENCE
        </span>
      </div>
    </div>
  );
}
