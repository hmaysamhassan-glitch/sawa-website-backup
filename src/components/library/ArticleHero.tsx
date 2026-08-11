"use client";
import { motion } from "framer-motion";
import { Breadcrumb, ArticleKicker, ArticleByline, DirectAnswer, INK, DIM, ease } from "./ArticleAtoms";

export default function ArticleHero({
  type, readTime, title, dek, updated, directAnswer,
}: {
  type: string;
  readTime: string;
  title: string;
  dek: string;
  updated: string;
  directAnswer: React.ReactNode;
}) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(20px,4vw,32px)" }}>
      <Breadcrumb title={title} />
      <ArticleKicker type={type} readTime={readTime} />

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        style={{
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: "clamp(2rem,4.4vw,3.2rem)",
          fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.08,
          color: INK, margin: "0 0 12px",
        }}
      >{title}</motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55, ease }}
        style={{
          fontFamily: "var(--font-geist),sans-serif", fontSize: "clamp(1.05rem,1.6vw,1.25rem)",
          lineHeight: 1.5, color: DIM, margin: 0,
        }}
      >{dek}</motion.p>

      <ArticleByline updated={updated} />

      <div style={{ marginTop: 36 }}>
        <DirectAnswer>{directAnswer}</DirectAnswer>
      </div>
    </div>
  );
}
