import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// ── UI Font: Geist ──────────────────────────────────────────
// Technical precision. Designed for screens. From Vercel.
// Invisible at body size — the mark of a great UI font.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// ── System Font: Geist Mono ─────────────────────────────────
// VOICE 02 — SYSTEM. Metadata, section numbers, status, node
// labels, tool output. The technical counterpoint to the
// editorial display voice. This contrast is a core Sawa signature.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

// ── Display Font: Inter ─────────────────────────────────────
// The industry standard. Used by Linear, Vercel, Notion, Figma.
// Neutral, precise, extremely readable at all sizes.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Canonical production base URL. Used to resolve relative OG/Twitter
// image paths into absolute URLs.
const SITE_URL = "https://www.startsawa.com";

const TAGLINE = "Build an audience you actually own.";
const DESCRIPTION =
  "Sawa helps B2B companies grow their email list, create newsletters and content, and run email campaigns that keep them in front of the right people.";

// ── SEO Metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sawa: Build an Audience You Actually Own",
    template: "%s | Sawa",
  },
  description: DESCRIPTION,
  keywords: [
    "B2B marketing partner",
    "owned audience",
    "audience growth",
    "B2B newsletter",
    "content systems",
    "email sequences",
    "lifecycle marketing",
    "AI-native marketing",
    "demand generation",
    "B2B email marketing",
  ],
  authors: [{ name: "Sawa" }],
  creator: "Sawa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sawa",
    title: "Sawa: Build an Audience You Actually Own",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sawa: Build an audience you actually own.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sawa: Build an Audience You Actually Own",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAF8",
};

// ── Structured Data (JSON-LD) ────────────────────────────────
// Organization + WebSite + Service, combined in a single @graph so
// search engines and AI answer engines understand what Sawa is,
// who it serves, and what it offers. Describes the current B2B,
// owned-audience identity — not the legacy creator-only positioning.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Sawa",
      url: SITE_URL,
      description:
        "Sawa helps B2B companies grow their email audience, create newsletters and content, and run email campaigns.",
      logo: `${SITE_URL}/icon.svg`,
      slogan: "Build an audience you actually own.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Sawa",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Owned-audience marketing systems for B2B",
      serviceType: "B2B marketing",
      description:
        "Sawa embeds with B2B teams to grow the right email audience, build the content and newsletter systems that keep it engaged, and run the sequences and campaigns that turn attention into pipeline.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "B2B companies",
      },
    },
  ],
};

// ── Root Layout ──────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
