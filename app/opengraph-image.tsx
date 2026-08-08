import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#a8bea5",
            }}
          />
          {siteConfig.name}
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#354039",
          }}
        >
          Dein Garten, endlich im Überblick
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#6b7568",
          }}
        >
          Giesserinnerungen nach echtem Wetter · Zonen · Foto-Journal
        </div>
      </div>
    ),
    size,
  );
}
