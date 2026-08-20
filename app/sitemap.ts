import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/faq", "/impressum", "/datenschutz"];
  const highPriority = ["", "/features", "/faq"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: highPriority.includes(route) ? "weekly" : "yearly",
    priority: route === "" ? 1 : highPriority.includes(route) ? 0.8 : 0.3,
  }));
}
