/**
 * Zentrale Inhalte der Marketing-Seite.
 *
 * Texte, Navigation und Links stehen bewusst hier und nicht in den Komponenten:
 * So passt du die Seite an, ohne JSX anzufassen.
 */

export const siteConfig = {
  name: "HORTTIA by Veikko",
  tagline: "lässt Wissen wachsen",
  description:
    "HORTTIA ist deine Wissenszentrale für den Garten: Foto-Diagnose, Zonenkonflikte erkennen, Giesserinnerungen nach echtem Wetter und ein Foto-Journal für Pflanzen und Tiere.",
  /** Ohne Slash am Ende. Wird für Metadata, Sitemap und OG-Tags genutzt. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marketing-page-navy.vercel.app",
  /** Ziel aller "Starten"-Buttons — hier die echte App-URL eintragen. */
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://veikkosgarten.vercel.app",
  locale: "de_DE",
  contactEmail: "veikko@gmx.ch",
} as const;

export const mainNav = [
  { label: "Funktionen", href: "/features" },
  { label: "So funktioniert's", href: "/#so-gehts" },
  { label: "Stimmen", href: "/#stimmen" },
  { label: "FAQ", href: "/faq" },
] as const;

export const primaryCta = {
  label: "Demo ansehen",
  href: siteConfig.appUrl,
} as const;

export const secondaryCta = {
  label: "Funktionen ansehen",
  href: "/features",
} as const;

/** Kurzform der Marke fürs Logo (Header/Footer) — ohne "by Veikko". */
export const brandMark = "HORTTIA";

export const heroBadge = "Neu: Plant Doc — Pflanzendiagnose per Foto";

export type Feature = {
  icon:
    | "sprout"
    | "map"
    | "droplets"
    | "cloudSun"
    | "camera"
    | "scan"
    | "stethoscope"
    | "flaskConical"
    | "alertTriangle"
    | "pawPrint"
    | "brain";
  title: string;
  description: string;
  accent: "care" | "soil" | "water" | "sun" | "bloom" | "sage" | "clay" | "moss";
};

export const features: Feature[] = [
  {
    icon: "sprout",
    title: "Jede Pflanze mit Steckbrief",
    description:
      "Standort, Giessrhythmus, Schnittzeitpunkt und Notizen — alles zu einer Pflanze an einem Ort statt verstreut in Notizzetteln.",
    accent: "care",
  },
  {
    icon: "stethoscope",
    title: "Plant Doc: Diagnose per Foto",
    description:
      "Fotografiere die betroffene Stelle: Plant Doc vergleicht die Symptome mit dem Wetter der letzten Tage, nennt die wahrscheinlichste Ursache und gibt dir Schritt für Schritt vor, was jetzt zu tun ist.",
    accent: "clay",
  },
  {
    icon: "flaskConical",
    title: "Bodencheck je Zone",
    description:
      "Ein paar einfache Handgriffe im Garten genügen: Der geführte Bodencheck lässt dich Bodenart, Wasseraufnahme und pH-Wert direkt vor Ort testen und wertet die Ergebnisse sofort aus — die Grundlage für jede Standort- und Pflanzenwahl.",
    accent: "moss",
  },
  {
    icon: "map",
    title: "Zonen statt Zettelwirtschaft",
    description:
      "Hochbeet, Gewächshaus, Vorgarten: Ordne Pflanzen den Bereichen zu, in denen sie wirklich stehen, und sortiere sie per Drag & Drop.",
    accent: "soil",
  },
  {
    icon: "droplets",
    title: "Giessen im richtigen Moment",
    description:
      "Ein Tipp aufs Giesskannen-Symbol, und der nächste Termin verschiebt sich automatisch. Was Aufmerksamkeit braucht, steht ganz oben.",
    accent: "water",
  },
  {
    icon: "cloudSun",
    title: "Wetter, das mitdenkt",
    description:
      "Hat es geregnet, wird die Erinnerung leiser. Kommt Frost, wird sie lauter. Die Vorhersage fliesst direkt in deine Aufgaben ein.",
    accent: "sun",
  },
  {
    icon: "camera",
    title: "Foto-Journal über Jahre",
    description:
      "Fotografiere dieselbe Ecke im März und im Juli. Jedes Foto bekommt automatisch ein Datum — bei älteren Aufnahmen passt du es einfach manuell an, damit der Vergleich stimmt.",
    accent: "bloom",
  },
  {
    icon: "scan",
    title: "Pflanze erkennen per Foto",
    description:
      "Unbekannter Sämling? Foto machen, Art bestimmen lassen. Liegt die Erkennung daneben, korrigierst du sie manuell in Sekunden — Pflegehinweise werden automatisch nachgeladen.",
    accent: "sage",
  },
  {
    icon: "alertTriangle",
    title: "Zonen-Konflikte erkennen",
    description:
      "HORTTIA prüft automatisch, ob sich Pflanzen in derselben Zone um Licht, Wasser oder Platz in die Quere kommen oder der Boden nicht passt — und macht dich darauf aufmerksam, bevor es im Beet sichtbar wird.",
    accent: "sun",
  },
  {
    icon: "pawPrint",
    title: "Auch die Tiere im Blick",
    description:
      "Igel, Vögel, Nützlinge: Erfasse Tiere genauso wie Pflanzen — mit Foto, Art-Erkennung und Zuordnung zu ihrer Zone.",
    accent: "care",
  },
  {
    icon: "brain",
    title: "Dein eigenes Garten-Quiz",
    description:
      "10 zufällige Fragen zu deinen eigenen Pflanzen und Tieren: Fotos erkennen, lateinische Namen zuordnen, Zonen-Zugehörigkeit erraten — statt generischem Pflanzenwissen.",
    accent: "moss",
  },
];

export const steps = [
  {
    title: "Zonen anlegen",
    description:
      "Bilde deinen Garten in wenigen Minuten ab — ein Bereich pro Beet, Balkonkasten oder Fensterbank.",
  },
  {
    title: "Pflanzen und Tiere hinzufügen",
    description:
      "Per Suche oder Foto. Pflegehinweise und Giessrhythmus werden vorausgefüllt, du korrigierst nur, was abweicht.",
  },
  {
    title: "Kurz reinschauen",
    description:
      "Die Startseite zeigt jeden Morgen, was heute dran ist. Erledigt abhaken — den Rest macht die App.",
  },
] as const;

/**
 * ACHTUNG: Erfundene Beispieltexte als Platzhalter für das Layout.
 * Vor dem Livegang durch echte, freigegebene Zitate ersetzen oder die
 * Section entfernen — erfundene Kundenstimmen sind Wettbewerbsverstoss.
 */
export const testimonials = [
  {
    quote:
      "Ich habe drei Jahre lang Basilikum ertränkt. Seit die App das Wetter mitrechnet, überlebt er den Sommer.",
    name: "Alina R.",
    role: "Balkongärtnerin, Leipzig",
  },
  {
    quote:
      "Wir teilen uns den Garten zu viert. Endlich weiss jeder, wer zuletzt gegossen hat — ohne Gruppenchat.",
    name: "Tobias M.",
    role: "Gemeinschaftsgarten Nord",
  },
  {
    quote:
      "Das Foto-Journal ist mein Lieblingsteil. Der Vergleich April zu August ist jedes Jahr aufs Neue verblüffend.",
    name: "Christina W.",
    role: "Schrebergarten seit 2019",
  },
] as const;

export const faqs = [
  {
    question: "Was kostet HORTTIA?",
    answer:
      "Der Einstieg ist kostenlos und umfasst unbegrenzt Pflanzen, Zonen und Giesserinnerungen. Kostenpflichtige Zusatzfunktionen kündigst du jederzeit zum Monatsende.",
  },
  {
    question: "Brauche ich einen Account?",
    answer:
      "Für die Nutzung auf einem Gerät nicht. Sobald du deinen Garten mit anderen teilen oder auf mehreren Geräten synchronisieren willst, legst du einen Account an.",
  },
  {
    question: "Funktioniert die App auch ohne Internet?",
    answer:
      "Pflanzen und Notizen kannst du offline erfassen. Wetterdaten und Pflanzenerkennung brauchen eine Verbindung und werden nachgeladen, sobald du wieder online bist.",
  },
  {
    question: "Woher kommen die Wetterdaten?",
    answer:
      "Aus einem offenen Wetterdienst, abgefragt für deinen Standort. Es wird nur die Position deines Gartens verwendet, nicht dein laufender Aufenthaltsort.",
  },
  {
    question: "Was passiert mit meinen Fotos?",
    answer:
      "Sie liegen in deinem Garten-Account und werden nicht zu Werbezwecken ausgewertet. Du kannst sie jederzeit einzeln oder komplett löschen.",
  },
  {
    question: "Gibt es die App für iOS und Android?",
    answer:
      "HORTTIA läuft im Browser und lässt sich auf beiden Systemen zum Startbildschirm hinzufügen.",
  },
] as const;

export const footerNav = [
  {
    title: "Produkt",
    links: [
      { label: "Funktionen", href: "/features" },
      { label: "So funktioniert's", href: "/#so-gehts" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
] as const;
