import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Alle Crawler sind erlaubt. Die KI-Crawler stehen zusätzlich einzeln drin:
 * Ein blosses "User-Agent: *" würde sie zwar ebenfalls einschliessen, aber die
 * explizite Nennung macht beim Audit sofort sichtbar, dass sie nicht gesperrt
 * sind — manche Hosting-Defaults blocken genau diese Bots.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
