import type { NextConfig } from "next";

/**
 * Oxtinmediaconcept website configuration.
 *
 * `cacheComponents` / `partialPrefetching` (create-next-app defaults) are intentionally
 * disabled: every page on this site is static content generated from `src/content`,
 * and the classic static model lets dynamic routes use `dynamicParams = false` so unknown
 * service/project slugs return a real HTTP 404 instead of a streamed fallback.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
