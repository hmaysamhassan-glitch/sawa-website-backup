import type { MetadataRoute } from "next";

// Canonical production base URL.
const BASE_URL = "https://www.startsawa.com";

// App Router robots file. Next.js serves this at /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
