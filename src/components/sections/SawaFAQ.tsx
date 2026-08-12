"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INK    = "#111827";
const DIM    = "#4B6E8A";
const FAINT  = "#8FC1E3";
const BORDER = "rgba(80,133,165,0.14)";
const CANVAS = "#F4F7FA";


const FAQS = [
  {
    q: "What exactly does Sawa do?",
    a: "We grow your email list, create the newsletter and content that keeps people engaged, and build the email sequences and campaigns that turn interest into customers. Strategy and execution, together.",
  },
  {
    q: "Who is Sawa for?",
    a: "B2B companies that want to build a direct relationship with their audience and turn it into more customers, without hiring an internal team from scratch or going through a slow agency process.",
  },
  {
    q: "Is Sawa software?",
    a: "No. Sawa is a marketing partner, not a piece of software. We work inside whatever email platform, CRM, or content tools you already use. There's nothing new to learn, just people doing the work with you.",
  },
  {
    q: "How is Sawa different from a traditional marketing agency?",
    a: "Traditional agencies can be slow to start and disconnected from the day-to-day of the business. We work more closely with your team. We learn your voice, audience, and offer quickly, and we act like part of your team rather than an outside vendor sending reports.",
  },
  {
    q: "How quickly can Sawa get started?",
    a: "We aim to be fully up and running within four weeks: one week to understand the business, one to plan, one to build, and one to start running it.",
  },
  {
    q: "Does Sawa only do newsletters?",
    a: "No. The newsletter is one part of the work. We also build the ways you grow your list, like lead magnets and landing pages, and we write the email sequences and campaigns that follow: welcome emails, nurture emails, launches, and re-engagement emails.",
  },
  {
    q: "Can Sawa work with our existing marketing team?",
    a: "Yes. Most of the businesses we work with already have some marketing in place. We usually focus on email and audience growth specifically, the parts that take steady, ongoing attention that's hard to maintain internally.",
  },
  {
    q: "How does AI fit into Sawa's work?",
    a: "AI helps us move faster: research, first drafts, repurposing, testing. But decisions about strategy, voice, audience, and messaging are made by people. We're not selling AI-generated marketing. We're selling the judgment that decides what's worth saying.",
  },
];

export default function SawaFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ background: CANVAS, padding: "0 0 80px" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(72px,10vh,96px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <span className="section-index">07 / FAQ</span>
          <span style={{ height: 1, flex: 1, background: BORDER, maxWidth: 80 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "4fr 8fr", gap: "clamp(32px,5vw,80px)" }} className="faq-grid">
          {/* Left heading */}
          <div style={{ paddingTop: 4 }}>
            <h2 style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: INK,
              marginBottom: 16,
            }}>
              Common questions
            </h2>
            <p style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: 14,
              lineHeight: 1.65,
              color: DIM,
              marginBottom: 24,
            }}>
              Have another question?
            </p>
            <a href="#book" className="btn-primary" style={{ fontSize: 13, padding: "9px 18px" }}>
              Book an intro call
            </a>
          </div>

          {/* Right: restrained accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "18px 0",
                    fontFamily: "var(--font-geist), sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    color: INK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    flexShrink: 0,
                    width: 16,
                    height: 16,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 3,
                    transition: "border-color 180ms ease",
                    borderColor: open === i ? INK : BORDER,
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                      style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 200ms ease" }}>
                      <path d="M4 1v6M1 4h6" stroke={open === i ? INK : FAINT} strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.16,1,0.3,1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        fontFamily: "var(--font-geist), sans-serif",
                        fontSize: 14.5,
                        lineHeight: 1.72,
                        color: DIM,
                        paddingBottom: 20,
                        paddingRight: 24,
                        margin: 0,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
