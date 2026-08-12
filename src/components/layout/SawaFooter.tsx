const INK    = "#111827";
const DIM    = "#4B6E8A";
const FAINT  = "#8FC1E3";
const BORDER = "rgba(80,133,165,0.14)";
const CANVAS = "#F4F7FA";

function FooterCol({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: 9,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: FAINT,
        marginBottom: 16,
      }}>
        {heading}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: 13.5,
              color: DIM,
              textDecoration: "none",
              letterSpacing: "-0.005em",
              transition: "color 150ms ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = INK; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = DIM; }}
            >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function SawaLogoMark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="26" height="18" viewBox="0 0 42 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" fill={INK}/>
        <circle cx="28" cy="14" r="12" fill={INK} opacity="0.22"/>
        <path d="M21 3.5C25 6.2 25 21.8 21 24.5C17 21.8 17 6.2 21 3.5Z" fill={INK} opacity="0.45"/>
      </svg>
      <span style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 15,
        fontWeight: 600,
        color: INK,
        letterSpacing: "-0.04em",
      }}>
        sawa
      </span>
      {/* Signature arc — echoes the hero wordmark, a quiet brand tie */}
      <svg width="34" height="8" viewBox="0 0 34 8" fill="none" aria-hidden="true"
        style={{ marginLeft: 2, marginBottom: 3 }}>
        <path d="M0 6 Q17 1 33 4.5" stroke={FAINT} strokeOpacity="0.5"
          strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function SawaFooter() {
  return (
    <footer
      style={{
        background: CANVAS,
        borderTop: `1px solid ${BORDER}`,
        position: "relative",
        overflow: "hidden",
      }}
      role="contentinfo"
    >
      {/* Quiet brand mark — the sawa glyph, whisper-faint, bleeding off the corner */}
      <div aria-hidden style={{
        position: "absolute", right: "clamp(-36px,-1vw,-8px)", bottom: "clamp(-48px,-4vw,-20px)",
        pointerEvents: "none", userSelect: "none", zIndex: 0,
      }}>
        <svg width="300" height="200" viewBox="0 0 42 28" fill="none">
          <circle cx="14" cy="14" r="12" fill={FAINT} opacity="0.12" />
          <circle cx="28" cy="14" r="12" fill={FAINT} opacity="0.08" />
          <path d="M21 3.5C25 6.2 25 21.8 21 24.5C17 21.8 17 6.2 21 3.5Z" fill={FAINT} opacity="0.14" />
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "48px clamp(20px,4vw,48px) 40px" }}>
        {/* Main footer grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "clamp(24px,4vw,64px)",
          marginBottom: 48,
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <SawaLogoMark />
            <p style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: 13,
              lineHeight: 1.65,
              color: DIM,
              marginTop: 16,
              maxWidth: 280,
            }}>
              Sawa helps B2B companies grow their email audience, create newsletters
              and content, and run email campaigns.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <a href="https://www.linkedin.com/company/start-sawa" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                color: DIM,
                textDecoration: "none",
                transition: "border-color 160ms ease, color 160ms ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = INK; (e.currentTarget as HTMLElement).style.color = INK; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BORDER; (e.currentTarget as HTMLElement).style.color = DIM; }}
                aria-label="Sawa on LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <FooterCol heading="What we do" links={[
            { label: "Grow your email list", href: "/#grow" },
            { label: "Create content", href: "/#engage" },
            { label: "Email campaigns", href: "/#convert" },
          ]} />

          <FooterCol heading="Library" links={[
            { label: "All insights", href: "/library" },
            { label: "Newsletter vs. nurture vs. lifecycle", href: "/library/newsletter-vs-nurture-vs-lifecycle-email" },
            { label: "Newsletter cadence", href: "/library/b2b-newsletter-frequency" },
            { label: "Welcome sequences", href: "/library/b2b-welcome-sequence" },
          ]} />

          <FooterCol heading="Company" links={[
            { label: "About", href: "/#about" },
            { label: "Work", href: "/#work" },
            { label: "Book a call", href: "/#book" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]} />
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${BORDER}`,
          paddingTop: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            color: FAINT,
            letterSpacing: "0.05em",
          }}>
            © 2025 START SAWA · HUMAN-LED · BUILT FOR B2B
          </span>
          <a href="mailto:hello@startsawa.com" style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            color: FAINT,
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "color 150ms ease",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = INK; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = FAINT; }}
          >
            hello@startsawa.com
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}
