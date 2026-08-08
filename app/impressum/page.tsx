import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage title="Impressum">
      <p className="rounded-card bg-sun/40 p-4 text-sun-text">
        Platzhalter — bitte vor dem Livegang durch deine echten Angaben nach
        § 5 DDG ersetzen.
      </p>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Vorname Nachname
        <br />
        Straße Hausnummer
        <br />
        PLZ Ort
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        <br />
        Telefon: +49 000 0000000
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Vorname Nachname
        <br />
        Anschrift wie oben
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>USt-IdNr. gemäß § 27a UStG: DE000000000</p>

      <h2>Streitschlichtung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
    </LegalPage>
  );
}
