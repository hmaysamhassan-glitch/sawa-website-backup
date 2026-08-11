// Single source of truth for Sawa Library article metadata.
// Used by the /library index, nav/footer links, related-article
// modules, and each article's own page for consistent cross-links.

export type LibraryArticle = {
  slug: string;
  type: "COMPARISON" | "DECISION TOOL" | "FRAMEWORK";
  index: string;
  title: string;
  dek: string;
  thesis: string;
};

export const SITE_URL = "https://www.startsawa.com";

export const LIBRARY_ARTICLES: LibraryArticle[] = [
  {
    slug: "newsletter-vs-nurture-vs-lifecycle-email",
    type: "COMPARISON",
    index: "01",
    title: "Newsletter vs. Nurture Sequence vs. Lifecycle Email",
    dek: "What's the difference?",
    thesis: "Three formats people constantly confuse, defined precisely and compared side by side.",
  },
  {
    slug: "b2b-newsletter-frequency",
    type: "DECISION TOOL",
    index: "02",
    title: "How Often Should a B2B Company Send a Newsletter?",
    dek: "A framework, not a rule.",
    thesis: "The four factors that actually set your cadence, plus a tool that gives you a starting answer.",
  },
  {
    slug: "b2b-welcome-sequence",
    type: "FRAMEWORK",
    index: "03",
    title: "What Should a B2B Welcome Sequence Include?",
    dek: "Earn the second open.",
    thesis: "A six-job framework for new subscribers, not existing customers, with a real before/after rewrite.",
  },
];

export function getArticle(slug: string): LibraryArticle | undefined {
  return LIBRARY_ARTICLES.find((a) => a.slug === slug);
}

export function libraryUrl(slug: string) {
  return `${SITE_URL}/library/${slug}`;
}
