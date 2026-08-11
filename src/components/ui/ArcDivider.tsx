"use client";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// A soft, sweeping contour line used sparingly between major sections
// instead of a harsh straight rule. Purely decorative, no scroll-jacking.
export default function ArcDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" style={{ background: "#F4F7FA", padding: "clamp(16px,3.4vh,32px) 0", overflow: "hidden" }}>
      <svg
        viewBox="0 0 1200 90" preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "clamp(30px,4.4vw,54px)", transform: flip ? "scaleY(-1)" : undefined }}
      >
        <motion.path
          d="M0 55 C 220 12, 420 82, 640 46 C 860 8, 1000 68, 1200 34"
          fill="none" stroke="rgba(80,133,165,0.30)" strokeWidth="1.4" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease }}
        />
      </svg>
    </div>
  );
}
