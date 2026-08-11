"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPO = [0.16, 1, 0.3, 1] as const;

const INK     = "#111827";
const CANVAS  = "#F4F7FA";
const BORDER  = "rgba(80,133,165,0.14)";
const DIM     = "#4B6E8A";
const FAINT   = "#8FC1E3";

// ── Types ────────────────────────────────────────────────────
type NavItem = {
  label: string;
  href: string;
  dropdown?: { sys: string; title: string; blurb: string; href: string }[];
};

// ── Nav Structure ─────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  {
    label: "What we do",
    href: "/#system",
    dropdown: [
      {
        sys: "01 / GROW",
        title: "Grow your audience",
        blurb: "Build an email list of the right people.",
        href: "/#grow",
      },
      {
        sys: "02 / ENGAGE",
        title: "Create content",
        blurb: "Newsletters and content that keep your audience coming back.",
        href: "/#engage",
      },
      {
        sys: "03 / CONVERT",
        title: "Email sequences & campaigns",
        blurb: "Email sequences and campaigns that turn interest into customers.",
        href: "/#convert",
      },
    ],
  },
  {
    label: "How it works",
    href: "/#operating-model",
  },
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "Library",
    href: "/library",
    dropdown: [
      {
        sys: "ALL",
        title: "All insights",
        blurb: "The full Sawa intelligence library.",
        href: "/library",
      },
      {
        sys: "COMPARISON",
        title: "Owned audience formats",
        blurb: "Newsletter vs. nurture sequence vs. lifecycle email.",
        href: "/library/newsletter-vs-nurture-vs-lifecycle-email",
      },
      {
        sys: "TOOL",
        title: "Newsletter cadence",
        blurb: "How often to send, with a tool that gives you a starting answer.",
        href: "/library/b2b-newsletter-frequency",
      },
      {
        sys: "FRAMEWORK",
        title: "Welcome sequences",
        blurb: "What a B2B welcome sequence should include, email by email.",
        href: "/library/b2b-welcome-sequence",
      },
    ],
  },
  {
    label: "About",
    href: "/#about",
  },
];

// ── Logo ──────────────────────────────────────────────────────
function SawaLogo() {
  return (
    <a
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {/* Logomark: two overlapping circles forming a venn — "together" */}
      <svg width="28" height="19" viewBox="0 0 42 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" fill={INK} />
        <circle cx="28" cy="14" r="12" fill={INK} opacity="0.22" />
        <path
          d="M21 3.5C25 6.2 25 21.8 21 24.5C17 21.8 17 6.2 21 3.5Z"
          fill={INK}
          opacity="0.45"
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: 17,
          fontWeight: 600,
          color: INK,
          letterSpacing: "-0.04em",
        }}
      >
        sawa
      </span>
    </a>
  );
}

// ── Desktop Dropdown ──────────────────────────────────────────
function Dropdown({
  items,
  visible,
}: {
  items: NonNullable<NavItem["dropdown"]>;
  visible: boolean;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          exit={{ opacity: 0, y: -4, scaleY: 0.97 }}
          transition={{ duration: 0.18, ease: EXPO }}
          style={{
            transformOrigin: "top",
            position: "absolute",
            top: "calc(100% + 10px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: CANVAS,
            border: `1px solid ${BORDER}`,
            borderRadius: 6,
            minWidth: 300,
            boxShadow: "0 8px 32px rgba(10,10,10,0.10), 0 1px 4px rgba(10,10,10,0.06)",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {items.map((item, i) => (
            <a
              key={item.href + i}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  padding: "13px 18px",
                  borderBottom: i < items.length - 1 ? `1px solid ${BORDER}` : "none",
                  transition: `background 160ms ease`,
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(80,133,165,0.06)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: FAINT,
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {item.sys}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: INK,
                      letterSpacing: "-0.01em",
                      marginBottom: 2,
                      fontFamily: "var(--font-geist), sans-serif",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: DIM,
                      lineHeight: 1.5,
                      fontFamily: "var(--font-geist), sans-serif",
                    }}
                  >
                    {item.blurb}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Mobile Drawer ─────────────────────────────────────────────
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(30,74,110,0.18)",
              backdropFilter: "blur(2px)",
              zIndex: 99,
            }}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: EXPO }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(360px, 90vw)",
              background: CANVAS,
              borderLeft: `1px solid ${BORDER}`,
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            {/* Drawer header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
                height: 60,
                borderBottom: `1px solid ${BORDER}`,
                flexShrink: 0,
              }}
            >
              <SawaLogo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 6,
                  color: DIM,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ padding: "8px 0", flex: 1 }}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "14px 24px",
                      fontSize: 16,
                      fontWeight: 500,
                      color: INK,
                      textDecoration: "none",
                      letterSpacing: "-0.01em",
                      fontFamily: "var(--font-geist), sans-serif",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div style={{ paddingLeft: 24, background: "rgba(80,133,165,0.04)" }}>
                      {item.dropdown.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.href}
                          onClick={onClose}
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "flex-start",
                            padding: "12px 0 12px 0",
                            borderBottom: i < (item.dropdown?.length ?? 0) - 1 ? `1px solid ${BORDER}` : "none",
                            textDecoration: "none",
                            paddingRight: 24,
                          }}
                        >
                          <span style={{
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: 8.5,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            color: FAINT,
                            paddingTop: 3,
                            flexShrink: 0,
                          }}>
                            {sub.sys}
                          </span>
                          <span style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: INK,
                            fontFamily: "var(--font-geist), sans-serif",
                          }}>
                            {sub.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div style={{ padding: "20px 24px", borderTop: `1px solid ${BORDER}`, flexShrink: 0 }}>
              <a
                href="/#book"
                onClick={onClose}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Book an intro call
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Main Nav ──────────────────────────────────────────────────
export default function SawaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 140);
  }, []);

  const keepOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EXPO }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: 58,
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(20px, 4vw, 48px)",
          background: scrolled ? "rgba(244,247,250,0.94)" : CANVAS,
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? BORDER : "transparent"}`,
          transition: "background 220ms ease, border-color 220ms ease",
        }}
        role="banner"
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <SawaLogo />

          {/* Desktop nav links */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
            }}
            className="sawa-desktop-nav"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => item.dropdown && openDropdown(item.label)}
                onMouseLeave={scheduleClose}
              >
                <a
                  href={item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "6px 14px",
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: activeDropdown === item.label ? INK : DIM,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    fontFamily: "var(--font-geist), sans-serif",
                    transition: "color 160ms ease",
                    borderRadius: 4,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = INK;
                  }}
                  onMouseLeave={e => {
                    if (activeDropdown !== item.label) {
                      (e.currentTarget as HTMLAnchorElement).style.color = DIM;
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{
                        transition: "transform 180ms ease",
                        transform: activeDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.45,
                      }}
                    >
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
                {item.dropdown && (
                  <div
                    onMouseEnter={keepOpen}
                    onMouseLeave={scheduleClose}
                    style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 8 }}
                  >
                    <Dropdown items={item.dropdown} visible={activeDropdown === item.label} />
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {/* Desktop CTA */}
            <a
              href="/#book"
              className="btn-ink sawa-desktop-cta"
              style={{ fontSize: 13, padding: "7px 16px" }}
            >
              Book an intro call
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className="sawa-hamburger"
              style={{
                background: "none",
                border: `1px solid ${BORDER}`,
                borderRadius: 4,
                cursor: "pointer",
                padding: "7px 9px",
                display: "flex",
                flexDirection: "column",
                gap: 4.5,
              }}
            >
              <span style={{ display: "block", width: 18, height: 1.5, background: INK, borderRadius: 2 }} />
              <span style={{ display: "block", width: 18, height: 1.5, background: INK, borderRadius: 2, opacity: 0.5 }} />
              <span style={{ display: "block", width: 12, height: 1.5, background: INK, borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Responsive styles */}
      <style>{`
        .sawa-desktop-nav  { display: flex !important; }
        .sawa-desktop-cta  { display: inline-flex !important; }
        .sawa-hamburger    { display: none !important; }

        @media (max-width: 860px) {
          .sawa-desktop-nav { display: none !important; }
          .sawa-hamburger   { display: flex !important; }
        }
        @media (max-width: 560px) {
          .sawa-desktop-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
