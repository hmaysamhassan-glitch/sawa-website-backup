import type { Metadata } from "next";
import ArticleShell from "@/components/library/ArticleShell";
import { buildArticleJsonLd } from "@/components/library/articleJsonLd";
import { SITE_URL } from "@/components/library/libraryData";
import ArticleBody from "./ArticleBody";

const TITLE = "What Should a B2B Welcome Sequence Include?";
const DESCRIPTION =
  "A six-job framework for new subscribers: confirm the trade, set expectations, prove value fast, build credibility, handle the objection, and ask for one next step. Includes a sequence builder and a before/after rewrite.";
const SLUG = "b2b-welcome-sequence";

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
