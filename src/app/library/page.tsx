import type { Metadata } from "next";
import ArticleShell from "@/components/library/ArticleShell";
import { LIBRARY_ARTICLES, SITE_URL } from "@/components/library/libraryData";
import LibraryIndexBody from "./LibraryIndexBody";

export const metadata: Metadata = {
  title: "The Sawa Library",
  description:
    "Frameworks, comparisons, and tools on owned-audience strategy, B2B newsletters, nurture sequences, lifecycle email, and welcome sequences.",
  alternates: { canonical: `${SITE_URL}/library` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/library`,
    title: "The Sawa Library",
    description:
      "Frameworks, comparisons, and tools on owned-audience strategy, B2B newsletters, nurture sequences, lifecycle email, and welcome sequences.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/library#library`,
      name: "The Sawa Library",
      description:
        "Frameworks, comparisons, and tools on owned-audience strategy, B2B newsletters, nurture sequences, lifecycle email, and welcome sequences.",
      url: `${SITE_URL}/library`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      hasPart: LIBRARY_ARTICLES.map((a) => ({
        "@type": "Article",
        headline: a.title,
        url: `${SITE_URL}/library/${a.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Library", item: `${SITE_URL}/library` },
      ],
    },
  ],
};

export default function LibraryIndexPage() {
  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LibraryIndexBody />
    </ArticleShell>
  );
}
