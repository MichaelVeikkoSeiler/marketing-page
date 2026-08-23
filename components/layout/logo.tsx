import Image from "next/image";
import Link from "next/link";
import { brandMark } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 font-display text-[29px] font-medium text-forest"
    >
      <Image
        src="/logo.png"
        alt=""
        width={53}
        height={53}
        className="h-[53px] w-[53px] rounded-xl"
        priority
      />
      {brandMark}
    </Link>
  );
}
