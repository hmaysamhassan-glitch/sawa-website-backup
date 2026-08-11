"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LIBRARY_ARTICLES } from "./libraryData";

// ── Shared palette — identical to the rest of the site ──────────────────────
export const INK    = "#111827";
export const DIM     = "#4B6E8A";
export const MID     = "#5085A5";
export const STEEL   = "#31708E";
export const NAVY    = "#1E4A6E";
export const POWDER  = "#8FC1E3";
export const FAINT   = "#8FC1E3";
export const WHITE   = "#FFFFFF";
export const PAPER   = "#EAF4FB";
export const BG      = "#F4F7FA";
export const BORDER  = "rgba(80,133,165,0.16)";

export const ease = [0.16, 1, 0.3, 1] as const;

// ── Breadcrumb ────────────────────────────────────────────────────────────
export function Breadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" style={{
      display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
      fontFamily: "var(--font-geist-mono),monospace", fontSize: 11,
      letterSpacing: "0.04em", color: DIM, marginBottom: 28,
    }}>
      <Link href="/" style={{ color: DIM, textDecoration: "none" }}>Home</Link>
      <span style={{ opacity: 0.5 }}>/</span>
      <Link href="/library" style={{ color: DIM, textDecoration: "none" }}>Library</Link>
      <span style={{ opacity: 0.5 }}>/</span>
      <span style={{ color: INK }}>{title}</span>
    </nav>
  );
}

// ── Eyebrow / kicker row ─────────────────────────────────────────────────
export function ArticleKicker({ type, readTime }: { type: string; readTime: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
      fontFamily: "var(--font-geist-mono),monospace", fontSize: 10.5,
      letterSpacing: "0.12em", textTransform: "uppercase", color: STEEL,
    }}>
      <span style={{
        padding: "4px 10px", borderRadius: 4, border: `1px solid ${BORDER}`,
        background: "rgba(80,133,165,0.06)",
      }}>{type}</span>
      <span style={{ color: MID }}>Sawa Library</span>
      <span style={{ width: 1, height: 12, background: BORDER }} />
      <span style={{ color: MID }}>{readTime}</span>
    </div>
  );
}

// ── Byline: honest, no fabricated reviewer ───────────────────────────────
export function ArticleByline({ updated }: { updated: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, marginTop: 28,
      fontFamily: "var(--font-geist),sans-serif", fontSize: 13, color: DIM,
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
        background: `linear-gradient(135deg,${MID},${NAVY})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: WHITE, fontSize: 11, fontWeight: 700, fontFamily: "var(--font-inter),sans-serif",
      }}>S</div>
      <span>Written by the Sawa team</span>
      <span style={{ opacity: 0.4 }}>·</span>
      <span>Updated {updated}</span>
    </div>
  );
}

// ── Direct-answer callout — the AEO extraction target ─────────────────────
export function DirectAnswer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease }}
      style={{
        background: WHITE, border: `1.5px solid ${STEEL}`, borderRadius: 14,
        padding: "22px 26px", margin: "8px 0 40px", position: "relative",
        boxShadow: "0 4px 24px rgba(30,74,110,0.07)",
      }}
    >
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5,
        letterSpacing: "0.12em", textTransform: "uppercase", color: STEEL, marginBottom: 10,
        display: "flex", alignItems: "center", gap: 7,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: STEEL }} />
        Quick answer
      </div>
      <div style={{
        fontFamily: "var(--font-geist),sans-serif", fontSize: 17, lineHeight: 1.62, color: INK,
      }}>
        {children}
      </div>
    </motion.div>
  );
}

// ── Pull quote — the shareable typographic moment ─────────────────────────
export function PullQuote({ lines }: { lines: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      style={{ margin: "56px 0", padding: "8px 0" }}
    >
      {lines.map((l, i) => (
        <div key={i} style={{
          fontFamily: "var(--font-inter),sans-serif",
          fontSize: "clamp(1.6rem,4vw,2.9rem)", fontWeight: 700,
          letterSpacing: "-0.03em", lineHeight: 1.14,
          color: i === lines.length - 1 ? STEEL : INK,
        }}>{l}</div>
      ))}
    </motion.div>
  );
}

// ── FAQ accordion + FAQPage JSON-LD ────────────────────────────────────────
export type FAQItem = { q: string; a: string };

export function ArticleFAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ margin: "64px 0 8px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <h2 style={{
        fontFamily: "var(--font-inter),sans-serif", fontSize: "clamp(1.4rem,2.4vw,1.9rem)",
        fontWeight: 700, letterSpacing: "-0.03em", color: INK, margin: "0 0 20px",
      }}>Frequently asked questions</h2>
      <div>
        {items.map((faq, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                gap: 16, width: "100%", textAlign: "left", background: "none", border: "none",
                cursor: "pointer", padding: "16px 0", fontFamily: "var(--font-geist),sans-serif",
                fontSize: 15.5, fontWeight: 600, color: INK, letterSpacing: "-0.01em",
              }}
            >
              <span>{faq.q}</span>
              <span style={{
                flexShrink: 0, width: 16, height: 16, border: `1px solid ${BORDER}`,
                borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
                marginTop: 2, transition: "border-color 180ms ease",
                borderColor: open === i ? STEEL : BORDER,
              }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 200ms ease",
                }}>
                  <path d="M4 1v6M1 4h6" stroke={open === i ? STEEL : FAINT} strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={{
                    fontFamily: "var(--font-geist),sans-serif", fontSize: 14.5, lineHeight: 1.7,
                    color: DIM, paddingBottom: 18, margin: 0, maxWidth: 640,
                  }}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Related articles ────────────────────────────────────────────────────
export function RelatedArticles({ exclude }: { exclude: string }) {
  const others = LIBRARY_ARTICLES.filter((a) => a.slug !== exclude);
  return (
    <section style={{ margin: "48px 0" }}>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 10, letterSpacing: "0.1em",
        textTransform: "uppercase", color: MID, marginBottom: 16,
      }}>Related in the Sawa Library</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }} className="lib-related-grid">
        {others.map((a) => (
          <Link key={a.slug} href={`/library/${a.slug}`} style={{
            display: "block", border: `1px solid ${BORDER}`, borderRadius: 14, padding: "18px 20px",
            textDecoration: "none", background: WHITE, transition: "box-shadow 200ms ease, transform 200ms ease",
          }}
            className="lib-related-card"
          >
            <span style={{
              fontFamily: "var(--font-geist-mono),monospace", fontSize: 9, letterSpacing: "0.08em",
              color: POWDER, display: "block", marginBottom: 6,
            }}>{a.index} / {a.type}</span>
            <span style={{
              display: "block", fontFamily: "var(--font-inter),sans-serif", fontSize: 15.5,
              fontWeight: 650, color: INK, letterSpacing: "-0.015em", marginBottom: 4, lineHeight: 1.3,
            }}>{a.title}</span>
            <span style={{ display: "block", fontFamily: "var(--font-geist),sans-serif", fontSize: 12.5, color: DIM }}>
              {a.thesis}
            </span>
          </Link>
        ))}
      </div>
      <style>{`
        .lib-related-card:hover { box-shadow: 0 10px 28px rgba(30,74,110,0.10); transform: translateY(-3px); }
        @media (max-width: 700px) { .lib-related-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ── CTA block — configurable, not always "book a call" ────────────────────
export function ArticleCTA({
  eyebrow, title, body, primary, secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section style={{
      margin: "56px 0", background: NAVY, borderRadius: 20, padding: "clamp(28px,4vw,44px)",
      textAlign: "center",
    }}>
      <div style={{
        fontFamily: "var(--font-geist-mono),monospace", fontSize: 9.5, letterSpacing: "0.12em",
        textTransform: "uppercase", color: POWDER, marginBottom: 12,
      }}>{eyebrow}</div>
      <h2 style={{
        fontFamily: "var(--font-inter),sans-serif", fontSize: "clamp(1.4rem,2.6vw,2rem)",
        fontWeight: 700, letterSpacing: "-0.03em", color: WHITE, margin: "0 0 12px",
      }}>{title}</h2>
      <p style={{
        fontFamily: "var(--font-geist),sans-serif", fontSize: 14.5, lineHeight: 1.6,
        color: "rgba(234,244,251,0.72)", maxWidth: 480, margin: "0 auto 24px",
      }}>{body}</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href={primary.href} style={{
          display: "inline-flex", alignItems: "center", gap: 8, background: WHITE, color: NAVY,
          borderRadius: 8, padding: "12px 22px", fontFamily: "var(--font-geist),sans-serif",
          fontSize: 14, fontWeight: 650, textDecoration: "none",
        }}>{primary.label} →</Link>
        {secondary && (
          <Link href={secondary.href} style={{
            display: "inline-flex", alignItems: "center", gap: 8, background: "transparent",
            color: WHITE, border: "1px solid rgba(255,255,255,0.24)", borderRadius: 8,
            padding: "12px 22px", fontFamily: "var(--font-geist),sans-serif", fontSize: 14,
            fontWeight: 550, textDecoration: "none",
          }}>{secondary.label}</Link>
        )}
      </div>
    </section>
  );
}

// ── Shared prose tokens for article body copy ──────────────────────────────
export const proseH2 = {
  fontFamily: "var(--font-inter),sans-serif",
  fontSize: "clamp(1.4rem,2.6vw,2rem)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  color: INK,
  margin: "48px 0 18px",
  lineHeight: 1.2,
} as const;

export const proseH3 = {
  fontFamily: "var(--font-inter),sans-serif",
  fontSize: "clamp(1.1rem,1.8vw,1.35rem)",
  fontWeight: 650,
  letterSpacing: "-0.02em",
  color: INK,
  margin: "30px 0 12px",
} as const;

export const proseP = {
  fontFamily: "var(--font-geist),sans-serif",
  fontSize: 16,
  lineHeight: 1.75,
  color: "#374151",
  margin: "0 0 16px",
  maxWidth: 700,
} as const;
