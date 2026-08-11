"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LIBRARY_ARTICLES,
} from "@/components/library/libraryData";
import { INK, DIM, MID, STEEL, POWDER, WHITE, BORDER, ease } from "@/components/library/ArticleAtoms";

export default function LibraryIndexBody() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(24px,4vh,48px) clamp(20px,4vw,52px) clamp(80px,10vh,120px)" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <span style={{
          fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, letterSpacing: "0.13em",
          textTransform: "uppercase", color: MID,
        }}>THE SAWA LIBRARY</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
        style={{
          fontFamily: "var(--font-inter),sans-serif", fontSize: "clamp(2.1rem,4vw,3.4rem)",
          fontWeight: 700, letterSpacing: "-0.038em", lineHeight: 1.08,
          color: INK, textAlign: "center", margin: "0 auto 18px", maxWidth: 700,
        }}
      >We show our work.</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.55, ease }}
        style={{
          fontFamily: "var(--font-geist),sans-serif", fontSize: "clamp(1rem,1.2vw,1.15rem)",
          lineHeight: 1.62, color: DIM, textAlign: "center", maxWidth: 620, margin: "0 auto clamp(52px,7vh,76px)",
        }}
      >
        Frameworks, comparisons, and tools on owned-audience strategy, newsletters, nurture,
        and lifecycle email. Built for B2B teams thinking seriously about this, not generic advice.
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="lib-index-grid">
        {LIBRARY_ARTICLES.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -5, boxShadow: "0 14px 36px rgba(30,74,110,0.12)" }}
            transition={{ delay: i * 0.08, duration: 0.55, ease }}
          >
            <Link href={`/library/${a.slug}`} style={{
              display: "flex", flexDirection: "column", height: "100%", textDecoration: "none",
              background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 18,
              padding: "28px 24px 24px", boxShadow: "0 4px 24px rgba(30,74,110,0.06)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span style={{
                  fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, letterSpacing: "0.10em",
                  color: STEEL, padding: "3px 8px", border: `1px solid ${BORDER}`, borderRadius: 5,
                }}>{a.type}</span>
                <span style={{ fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, color: POWDER }}>{a.index}</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-inter),sans-serif", fontSize: "1.28rem", fontWeight: 700,
                letterSpacing: "-0.025em", color: INK, lineHeight: 1.28, margin: "0 0 8px",
              }}>{a.title}</h2>
              <div style={{
                fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, fontWeight: 600, color: STEEL, marginBottom: 12,
              }}>{a.dek}</div>
              <p style={{
                fontFamily: "var(--font-geist),sans-serif", fontSize: 14, lineHeight: 1.6, color: DIM,
                margin: "0 0 20px", flex: 1,
              }}>{a.thesis}</p>
              <span style={{
                fontFamily: "var(--font-geist),sans-serif", fontSize: 13.5, fontWeight: 650, color: INK,
              }}>Read the guide →</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .lib-index-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
