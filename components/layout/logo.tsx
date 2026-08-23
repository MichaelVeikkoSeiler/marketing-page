import Image from "next/image";
import Link from "next/link";
import { brandMark } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-display text-xl font-medium text-forest"
    >
      <Image
        src="/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 rounded-xl"
        priority
      />
      {brandMark}
    </Link>
  );
}
