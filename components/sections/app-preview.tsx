import { CloudSun, Droplets, Leaf, Scissors } from "lucide-react";

const tasks = [
  {
    icon: Droplets,
    label: "Tomaten 'Ochsenherz'",
    detail: "Gießen — 3 Tage überfällig",
    tone: "bg-water text-water-text",
  },
  {
    icon: Scissors,
    label: "Lavendel",
    detail: "Rückschnitt nach der Blüte",
    tone: "bg-bloom text-bloom-text",
  },
  {
    icon: Leaf,
    label: "Basilikum",
    detail: "Alles gut — nächster Check Freitag",
    tone: "bg-care text-care-text",
  },
];

/**
 * Platzhalter-Mockup der App. Bewusst als Markup statt als Screenshot,
 * damit es scharf bleibt und ohne Bild-Assets funktioniert.
 * Ersetze es später durch ein <Image> mit echtem Screenshot.
 */
export function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-sage/30 blur-2xl"
      />
      <div className="rounded-[2.5rem] border border-line bg-warm-white p-3 shadow-xl shadow-forest/10">
        <div className="rounded-[2rem] bg-cream p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-dark">
                Heute
              </p>
              <p className="font-display text-xl font-bold text-forest">
                Dein Garten
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-sun px-3 py-1.5 text-xs font-semibold text-sun-text">
              <CloudSun className="h-4 w-4" aria-hidden />
              21°C
            </div>
          </div>

          <ul className="mt-5 space-y-3">
            {tasks.map((task) => (
              <li
                key={task.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-warm-white p-3"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${task.tone}`}
                >
                  <task.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-forest">
                    {task.label}
                  </span>
                  <span className="block truncate text-xs text-forest-muted">
                    {task.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-5 rounded-2xl bg-sage/25 p-3 text-center text-xs text-forest-muted">
            Regen am Donnerstag — zwei Erinnerungen wurden verschoben.
          </p>
        </div>
      </div>
    </div>
  );
}
