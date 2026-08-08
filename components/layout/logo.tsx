import Link from "next/link";
import { Leaf } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-lg font-bold text-forest"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-sage text-forest">
        <Leaf className="h-5 w-5" aria-hidden />
      </span>
      {siteConfig.name}
    </Link>
  );
}
