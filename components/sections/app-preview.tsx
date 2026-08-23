import Image from "next/image";

/** Echter Screenshot des HORTTIA-Dashboards. */
export function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-sage/30 blur-2xl"
      />
      <Image
        src="/screenshots/dashboard.png"
        alt="HORTTIA-Dashboard: Übersicht des Gartens mit Aufgaben, die Aufmerksamkeit brauchen"
        width={710}
        height={1474}
        className="mx-auto h-auto w-full max-w-[280px]"
        priority
      />
    </div>
  );
}
