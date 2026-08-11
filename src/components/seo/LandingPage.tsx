// Shared server-rendered SEO landing page.
// No "use client" — these pages are static HTML for crawlers and AI
// answer engines. Booking CTAs link to the homepage Cal.com embed (/#book),
// which doubles as the required internal link to the homepage.
import Link from "next/link";

// ── Brand tokens (match the /lp homepage: black on white) ──────
const INK = "#0A0A0A";
const SUB = "#52525B";
const MUTED = "#71717A";
const BORDER = "rgba(0,0,0,0.09)";
const SITE_URL = "https://www.startsawa.com";

const fontDisplay = "var(--font-inter), system-ui, sans-serif";
const fontBody = "var(--font-geist), system-ui, sans-serif";

// ── Content types ──────────────────────────────────────────────
export type Bullet = { t: string; d: string };
export type Section = {
  h: string;
  body?: string;
  bullets?: Bullet[];
  steps?: Bullet[];
};
export type FAQ = { q: string; a: string };
export type RelatedLink = { href: string; label: string; desc: string };

export type LandingContent = {
  slug: string; // e.g. "email-marketing-for-creators"
  eyebrow: string;
  h1: string;
  subhead: string;
  serviceName: string;
  serviceDescription: string;
  sections: Section[];
  faqs: FAQ[];
  related: RelatedLink[];
};

// ── Small UI atoms ──────────────────────────────────────────────
function Logo() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width="30" height="21" viewBox="0 0 46 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#0A0A0A" />
        <circle cx="30" cy="16" r="13" fill="#A1A1AA" />
        <path d="M23 4.5 C27.5 7.5 27.5 24.5 23 27.5 C18.5 24.5 18.5 7.5 23 4.5Z" fill="#52525B" opacity="0.9" />
      </svg>
      <span style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 600, color: INK, letterSpacing: "-0.04em" }}>
        sawa
      </span>
    </span>
  );
}

function BookButton({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" }) {
  const pad = size === "sm" ? "9px 20px" : "14px 28px";
  const fs = size === "sm" ? 13 : 15;
  return (
    <Link
      href="/#book"
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: INK, color: "#fff", borderRadius: 100,
        padding: pad, fontSize: fs, fontWeight: 600, letterSpacing: "-0.01em",
        fontFamily: fontBody, textDecoration: "none",
      }}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

// ── JSON-LD: Service + FAQPage + BreadcrumbList ─────────────────
function jsonLd(content: LandingContent) {
  const url = `${SITE_URL}/${content.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.serviceName,
        serviceType: "Email marketing",
        description: content.serviceDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: content.serviceName, item: url },
        ],
      },
    ],
  };
}

// ── Page ────────────────────────────────────────────────────────
export default function LandingPage({ content }: { content: LandingContent }) {
  return (
    <div style={{ background: "#FFFFFF", color: INK, minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(content)) }}
      />

      {/* NAV */}
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 clamp(20px, 5vw, 40px)", height: 64,
          background: "rgba(255,255,255,0.9)", backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Link href="/" aria-label="Sawa home" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <BookButton size="sm">Book intro call</BookButton>
      </header>

      <main>
        {/* HERO */}
        <section style={{ padding: "clamp(64px, 10vw, 112px) clamp(20px, 5vw, 40px) 56px", maxWidth: 860, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(10,10,10,0.05)", border: `1px solid ${BORDER}`,
              borderRadius: 100, padding: "5px 14px", marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "block" }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: INK, letterSpacing: "0.02em", fontFamily: fontBody }}>
              {content.eyebrow}
            </span>
          </span>

          <h1
            style={{
              fontSize: "clamp(34px, 5.5vw, 56px)", fontWeight: 700, lineHeight: 1.06,
              letterSpacing: "-0.04em", color: INK, fontFamily: fontDisplay, margin: "0 0 22px",
            }}
          >
            {content.h1}
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.7, color: SUB, maxWidth: 620, fontFamily: fontBody, margin: "0 0 32px" }}>
            {content.subhead}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
            <BookButton>Book an intro call</BookButton>
            <span style={{ fontSize: 13, color: MUTED, fontFamily: fontBody }}>
              30-min intro call · No commitment
            </span>
          </div>
        </section>

        {/* SECTIONS */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
          {content.sections.map((s, i) => (
            <section
              key={i}
              style={{ padding: "40px 0", borderTop: `1px solid ${BORDER}` }}
            >
              <h2
                style={{
                  fontSize: "clamp(24px, 3.4vw, 32px)", fontWeight: 700, letterSpacing: "-0.03em",
                  color: INK, fontFamily: fontDisplay, margin: "0 0 16px",
                }}
              >
                {s.h}
              </h2>

              {s.body && (
                <p style={{ fontSize: 17, lineHeight: 1.75, color: SUB, fontFamily: fontBody, margin: "0 0 8px", maxWidth: 680 }}>
                  {s.body}
                </p>
              )}

              {s.bullets && (
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "grid", gap: 14 }}>
                  {s.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop: 3, flexShrink: 0 }} aria-hidden="true">
                        <circle cx="9" cy="9" r="9" fill="#0A0A0A" />
                        <path d="M5 9.2l2.6 2.4L13 6.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontFamily: fontBody, fontSize: 16, lineHeight: 1.6, color: SUB }}>
                        <strong style={{ color: INK, fontWeight: 600 }}>{b.t}.</strong> {b.d}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {s.steps && (
                <ol style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "grid", gap: 16, counterReset: "step" }}>
                  {s.steps.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span
                        style={{
                          flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                          background: INK, color: "#fff", display: "inline-flex",
                          alignItems: "center", justifyContent: "center", fontSize: 13,
                          fontWeight: 600, fontFamily: fontBody,
                        }}
                      >
                        {j + 1}
                      </span>
                      <span style={{ fontFamily: fontBody, fontSize: 16, lineHeight: 1.6, color: SUB }}>
                        <strong style={{ color: INK, fontWeight: 600 }}>{b.t}.</strong> {b.d}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>

        {/* FAQ */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "48px clamp(20px, 5vw, 40px)", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "clamp(26px, 3.6vw, 34px)", fontWeight: 700, letterSpacing: "-0.03em", color: INK, fontFamily: fontDisplay, margin: "0 0 24px" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {content.faqs.map((f, i) => (
              <details
                key={i}
                style={{ border: `1px solid ${BORDER}`, borderRadius: 14, padding: "18px 20px", background: "#fff" }}
              >
                <summary
                  style={{
                    cursor: "pointer", listStyle: "none", fontFamily: fontDisplay,
                    fontSize: 17, fontWeight: 600, color: INK, letterSpacing: "-0.01em",
                  }}
                >
                  {f.q}
                </summary>
                <p style={{ fontFamily: fontBody, fontSize: 16, lineHeight: 1.7, color: SUB, margin: "12px 0 0" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "clamp(20px, 5vw, 40px)" }}>
          <div
            style={{
              maxWidth: 860, margin: "0 auto", background: INK, borderRadius: 28,
              padding: "clamp(36px, 6vw, 64px)", textAlign: "center", color: "#fff",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", fontFamily: fontDisplay, margin: "0 0 14px", color: "#fff" }}>
              Let&apos;s turn your audience into revenue
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", fontFamily: fontBody, maxWidth: 520, margin: "0 auto 28px" }}>
              Book a 30-minute intro call. We&apos;ll look at your audience and email setup and show you exactly where the revenue is.
            </p>
            <Link
              href="/#book"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fff", color: INK, borderRadius: 100,
                padding: "14px 30px", fontSize: 15, fontWeight: 600,
                letterSpacing: "-0.01em", fontFamily: fontBody, textDecoration: "none",
              }}
            >
              Book an intro call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* RELATED / INTERNAL LINKS */}
        <section style={{ maxWidth: 860, margin: "0 auto", padding: "24px clamp(20px, 5vw, 40px) 8px" }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: MUTED, fontFamily: fontBody, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>
            Related
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {content.related.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                style={{
                  display: "block", border: `1px solid ${BORDER}`, borderRadius: 14,
                  padding: "16px 18px", textDecoration: "none", background: "#fff",
                }}
              >
                <span style={{ display: "block", fontFamily: fontDisplay, fontSize: 16, fontWeight: 600, color: INK, letterSpacing: "-0.01em", marginBottom: 4 }}>
                  {r.label}
                </span>
                <span style={{ display: "block", fontFamily: fontBody, fontSize: 14, lineHeight: 1.5, color: MUTED }}>
                  {r.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, marginTop: 40, padding: "32px clamp(20px, 5vw, 40px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" aria-label="Sawa home" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            <Link href="/" style={{ fontFamily: fontBody, fontSize: 14, color: SUB, textDecoration: "none" }}>Home</Link>
            <Link href="/email-marketing-for-creators" style={{ fontFamily: fontBody, fontSize: 14, color: SUB, textDecoration: "none" }}>For creators</Link>
            <Link href="/newsletter-growth-agency" style={{ fontFamily: fontBody, fontSize: 14, color: SUB, textDecoration: "none" }}>Newsletter growth</Link>
            <Link href="/done-for-you-email-marketing" style={{ fontFamily: fontBody, fontSize: 14, color: SUB, textDecoration: "none" }}>Done-for-you</Link>
            <Link href="/#book" style={{ fontFamily: fontBody, fontSize: 14, color: INK, fontWeight: 600, textDecoration: "none" }}>Book a call</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
