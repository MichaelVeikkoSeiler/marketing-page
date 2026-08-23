import type { Metadata } from "next";
import { Features } from "@/components/sections/features";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features",
  description:
    "HORTTIA als Wissenszentrale für deinen Garten: alle Features im Überblick — Pflanzen & Tiere, Plant Doc, Zonen-Konflikte, Bodencheck, Wetter-Integration, Foto-Journal und Garten-Quiz.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: `Features | ${siteConfig.name}`,
    description:
      "HORTTIA als Wissenszentrale für deinen Garten: alle Features im Überblick — Pflanzen & Tiere, Plant Doc, Zonen-Konflikte, Bodencheck, Wetter-Integration, Foto-Journal und Garten-Quiz.",
    url: `${siteConfig.url}/features`,
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Features as="h1" />
      <Cta />
    </>
  );
}
