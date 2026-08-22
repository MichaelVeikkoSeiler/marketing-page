import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-display text-lg font-bold text-forest"
    >
      <Image
        src="/logo.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-xl"
        priority
      />
      {siteConfig.name}
    </Link>
  );
}
