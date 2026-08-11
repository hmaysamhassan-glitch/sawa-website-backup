import type { Metadata } from "next";
import ArticleShell from "@/components/library/ArticleShell";
import { buildArticleJsonLd } from "@/components/library/articleJsonLd";
import { SITE_URL } from "@/components/library/libraryData";
import ArticleBody from "./ArticleBody";

const TITLE = "Newsletter vs. Nurture Sequence vs. Lifecycle Email: What's the Difference?";
const DESCRIPTION =
  "A newsletter, a nurture sequence, and lifecycle email are three different formats often confused with each other. Clear definitions, a side-by-side comparison, and which to build first.";
const SLUG = "newsletter-vs-nurture-vs-lifecycle-email";

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
