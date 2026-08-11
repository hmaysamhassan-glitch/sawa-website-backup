import type { Metadata } from "next";
import ArticleShell from "@/components/library/ArticleShell";
import { buildArticleJsonLd } from "@/components/library/articleJsonLd";
import { SITE_URL } from "@/components/library/libraryData";
import ArticleBody from "./ArticleBody";

const TITLE = "How Often Should a B2B Company Send a Newsletter?";
const DESCRIPTION =
  "There's no universal ideal frequency, but a clear framework exists: content supply, audience expectation, buying cycle, and production capacity. Includes a tool that gives you a starting cadence.";
const SLUG = "b2b-newsletter-frequency";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/library/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/library/${SLUG}`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = buildArticleJsonLd({
  slug: SLUG,
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-08-09",
  dateModified: "2026-08-09",
});

export default function Page() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleBody />
    </ArticleShell>
  );
}
