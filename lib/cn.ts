/**
 * Klassen zusammenfügen und Falsy-Werte verwerfen.
 *
 * Bewusst ohne clsx/tailwind-merge: Für eine Marketing-Seite reicht das,
 * und das Grundgerüst bleibt abhängigkeitsfrei.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
