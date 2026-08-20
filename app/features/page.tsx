import type { Metadata } from "next";
import { Features } from "@/components/sections/features";
import { Cta } from "@/components/sections/cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Funktionen",
  description:
    "Alle Funktionen von HORTTIA im Überblick: Pflanzen-Steckbriefe, Plant Doc, Bodencheck, Zonen, Giesserinnerungen, Wetter-Integration und Foto-Journal.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: `Funktionen | ${siteConfig.name}`,
    description:
      "Alle Funktionen von HORTTIA im Überblick: Pflanzen-Steckbriefe, Plant Doc, Bodencheck, Zonen, Giesserinnerungen, Wetter-Integration und Foto-Journal.",
    url: `${siteConfig.url}/features`,
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Features />
      <Cta />
    </>
  );
}
