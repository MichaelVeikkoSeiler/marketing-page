import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p className="rounded-card bg-sun/40 p-4 text-sun-text">
        Platzhalter — dieser Text ist keine Rechtsberatung. Vor dem Livegang
        durch eine auf dein Angebot zugeschnittene Erklärung ersetzen.
      </p>

      <h2>Verantwortliche Stelle</h2>
      <p>
        Vorname Nachname, Straße Hausnummer, PLZ Ort.
        <br />
        Kontakt:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
        technisch notwendige Server-Logs verarbeitet (IP-Adresse, Zeitpunkt,
        aufgerufene Seite, User-Agent). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO — unser berechtigtes Interesse am sicheren Betrieb.
      </p>

      <h2>Schriften</h2>
      <p>
        Schriften werden über <code>next/font</code> selbst ausgeliefert. Es
        entsteht keine Verbindung zu Google-Servern.
      </p>

      <h2>Cookies und Tracking</h2>
      <p>
        Diese Seite setzt in der Grundkonfiguration keine Cookies und bindet
        kein Analyse-Tool ein. Sobald du Analytics ergänzt, brauchst du hier
        einen Abschnitt dazu — und je nach Tool ein Einwilligungsbanner.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem kannst
        du dich bei einer Datenschutz-Aufsichtsbehörde beschweren.
      </p>
    </LegalPage>
  );
}
