import { SITE_URL } from "./libraryData";

export function buildArticleJsonLd({
  slug,
  headline,
  description,
  datePublished,
  dateModified,
}: {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${SITE_URL}/library/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        description,
        url,
        datePublished,
        dateModified,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        isPartOf: { "@id": `${SITE_URL}/library#library` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Library", item: `${SITE_URL}/library` },
          { "@type": "ListItem", position: 3, name: headline, item: url },
        ],
      },
    ],
  };
}
