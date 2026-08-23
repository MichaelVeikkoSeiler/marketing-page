import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "app/icon.png"),
).toString("base64")}`;

/**
 * Vorschaubild beim Teilen (WhatsApp, Slack, LinkedIn, ...).
 * Wird zur Build-Zeit gerendert — nur Inline-Styles, kein Tailwind.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #f7f5ef 0%, #dfe8dc 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 34,
            fontWeight: 700,
            color: "#7e9b7a",
          }}
        >
          <img
            src={logoDataUrl}
            width={56}
            height={56}
            style={{ borderRadius: 18 }}
            alt=""
          />
          {siteConfig.name}
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#354039",
          }}
        >
          {siteConfig.tagline}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#6b7568",
          }}
        >
          Pflanzen & Tiere erfassen · Standort & Boden verstehen · Pflege &
          Wetter im Blick
        </div>
      </div>
    ),
    size,
  );
}
