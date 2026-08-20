import type { Metadata } from "next";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { faqs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Häufig gestellte Fragen zu HORTTIA: Kosten, Account, Offline-Nutzung, Wetterdaten, Fotos und Plattformverfügbarkeit.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Häufig gestellte Fragen zu HORTTIA: Kosten, Account, Offline-Nutzung, Wetterdaten, Fotos und Plattformverfügbarkeit.",
    url: `${siteConfig.url}/faq`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      {/* Statisches JSON-LD aus siteConfig, keine Nutzereingaben — Standardmuster für strukturierte Daten in Next.js. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Faq />
      <Cta />
    </>
  );
}
