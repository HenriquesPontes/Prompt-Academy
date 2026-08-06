import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://skribe.app/sitemap.xml",
    host: "https://skribe.app",
  };
}
