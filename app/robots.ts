import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://promptacademy.com/sitemap.xml",
    host: "https://promptacademy.com",
  };
}
