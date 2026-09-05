# GartenApp — Marketing-Seite

Landingpage für die GartenApp. Next.js 16 (App Router) mit Tailwind CSS v4,
gebaut für ein Deployment auf Vercel.

## Loslegen

```bash
npm install
cp .env.example .env.local
npm run dev
```

Dann [http://localhost:3000](http://localhost:3000) öffnen.

## Inhalte ändern

Alle Texte, Navigationspunkte und Links stehen in
[`lib/site-config.ts`](lib/site-config.ts) — Headline, Features, Schritte,
Testimonials, FAQ und Footer. Für die üblichen Anpassungen musst du kein JSX
anfassen.

Die Startseite in [`app/page.tsx`](app/page.tsx) reiht nur die Sections
aneinander. Reihenfolge ändern oder eine Section entfernen: dort eine Zeile
verschieben bzw. löschen.

## Design-Tokens

Farben, Radien und Schrift stehen im `@theme`-Block in
[`app/globals.css`](app/globals.css). Tailwind v4 braucht keine
`tailwind.config.js` — jede Zeile dort wird automatisch zu Utilities
(`--color-sage` → `bg-sage`, `text-sage`, `border-sage`).

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `app/` | Routen, Layout, SEO-Dateien (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`) |
| `components/layout/` | Header mit Burger-Menü, Footer, Logo |
| `components/sections/` | Die Bausteine der Startseite |
| `components/ui/` | Container, Section, Button, Legal-Layout |
| `lib/` | Inhalte und Helfer |

## Skripte

```bash
npm run dev     # Dev-Server
npm run build   # Production-Build
npm run start   # Build lokal ausliefern
npm run lint    # ESLint
```

## Deployment auf Vercel

1. Repo pushen und auf [vercel.com/new](https://vercel.com/new) importieren.
   Next.js wird automatisch erkannt, es ist keine Konfiguration nötig.
2. Unter *Settings → Environment Variables* für **Production** setzen:

   | Variable | Wert |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | die echte Domain, ohne Slash am Ende |

   Ohne diesen Wert zeigen Canonical-Tags, `sitemap.xml` und die OG-Tags auf
   `*.example`.
3. Domain unter *Settings → Domains* verbinden.

> Beim ersten Deploy ein **neues** Vercel-Projekt anlegen. Der Ordner war früher
> mit dem Projekt *gartenapp* verknüpft; die Verknüpfung wurde entfernt.

## Vor dem Livegang

- **Testimonials ersetzen.** Die Zitate in `lib/site-config.ts` sind erfundene
  Platzhalter fürs Layout. Erfundene Kundenstimmen sind abmahnfähig — vor der
  Veröffentlichung durch echte, freigegebene Zitate ersetzen oder die Section
  entfernen.
- **Impressum und Datenschutz ausfüllen.** Beide Seiten sind Gerüste mit
  Platzhaltern und keine Rechtsberatung.
- **Screenshots einsetzen.** `components/sections/app-preview.tsx` ist ein in CSS
  nachgebautes Mockup; sobald es echte Screenshots gibt, gegen `next/image`
  tauschen.
