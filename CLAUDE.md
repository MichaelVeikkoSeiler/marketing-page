@AGENTS.md

# GartenApp — Marketing-Seite

Statische Landingpage für die GartenApp. **Nur Marketing** — die App selbst liegt in
einem eigenen Projekt. Hier gibt es bewusst keine Datenbank, keine Auth und keine
API-Routen. Wenn eine Aufgabe danach klingt, ist sie vermutlich im falschen Repo.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript · Deployment auf Vercel.

## Befehle

```bash
npm run dev     # Dev-Server auf :3000
npm run build   # Production-Build — muss vor jedem Push grün sein
npm run lint    # ESLint
```

## Aufbau

```
app/
  layout.tsx           Root-Layout: Fonts, Metadata, Header/Footer, Skip-Link
  page.tsx             Startseite — reiht nur die Sections aneinander
  globals.css          Tailwind-Import + Design-Tokens in @theme
  opengraph-image.tsx  Share-Bild, per Code generiert
  icon.tsx             Favicon, per Code generiert
  sitemap.ts robots.ts SEO-Dateien
  impressum/ datenschutz/
components/
  layout/              SiteHeader (Client, Burger-Menü), SiteFooter, Logo
  sections/            Hero, Features, HowItWorks, Testimonials, Faq, Cta, AppPreview
  ui/                  Container, Section/SectionHeading, ButtonLink, LegalPage
lib/
  site-config.ts       Sämtliche Texte, Navigation, Links
  cn.ts                Klassen zusammenfügen
```

## Konventionen

**Texte gehören in `lib/site-config.ts`, nicht ins JSX.** Neue Feature-Kachel, neue
FAQ-Frage, geänderte Headline: alles dort. Die Section-Komponenten mappen nur.

**Server Components sind der Default.** `"use client"` steht aktuell nur in
`site-header.tsx` (State fürs Burger-Menü). Wenn eine neue Section Interaktivität
braucht, isoliere den Client-Teil in eine eigene kleine Komponente, statt eine
ganze Section zum Client zu machen. Das FAQ zeigt die Alternative: `<details>`
klappt ohne JavaScript auf.

**Farben kommen aus `@theme` in `globals.css`**, nicht aus beliebigen Hex-Werten im
JSX. Eine neue Farbe ist eine Zeile dort und wird automatisch zu `bg-*`/`text-*`.
Tailwind v4 hat keine `tailwind.config.js` — suche nicht danach.

**Akzentfarben sind Paare.** Fläche und Schrift gehören zusammen (`bg-water` +
`text-water-text`). Kombiniere sie nicht über Kreuz, sonst leidet der Kontrast.

**Abstände über `<Section>`.** Nicht `py-20` von Hand an neue Sections schreiben —
`Section` setzt den vertikalen Rhythmus, `Container` die Seitenbreite.

**Kein Dark Mode.** Die warme Palette ist bewusst hell und einfarbig. Baue keinen
`dark:`-Zweig ein, ohne dass das vorher besprochen ist.

**Links:** interne Routen über `next/link`, Anker und externe URLs über `<a>`.
`ButtonLink` entscheidet das schon anhand des `href`.

## Vor dem Livegang

Diese Punkte sind absichtlich als Platzhalter angelegt und müssen ersetzt werden:

- **`testimonials` in `site-config.ts` sind erfunden.** Vor Veröffentlichung durch
  echte, freigegebene Zitate ersetzen oder die Section streichen — erfundene
  Kundenstimmen sind in Deutschland abmahnfähig.
- **Impressum und Datenschutz sind Gerüste**, keine Rechtsberatung.
- **`NEXT_PUBLIC_SITE_URL` und `NEXT_PUBLIC_APP_URL`** in Vercel setzen, sonst
  zeigen Canonical-Tags, Sitemap und alle CTA-Buttons auf `*.example`.
- **`AppPreview`** ist ein nachgebautes Mockup. Sobald es echte Screenshots gibt,
  gegen `next/image` tauschen.

## Deployment

Vercel, ohne Sonderkonfiguration — `next build` reicht. Der Ordner war ursprünglich
mit dem Vercel-Projekt *gartenapp* verknüpft; die Verknüpfung wurde entfernt.
Beim ersten Deploy ein **eigenes** Projekt anlegen, sonst wird die App überschrieben.

Deploys laufen automatisch über Vercels Git-Integration: Push auf `origin/main`
→ neuer Build → neuer Deploy. Commits/Pushes nur nach Rückfrage beim Nutzer.
