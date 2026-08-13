import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-warm-white hover:bg-forest/90",
  secondary:
    "bg-warm-white text-forest ring-1 ring-line hover:bg-warm-white/70 hover:ring-sage-dark",
  ghost: "text-forest hover:bg-warm-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/**
 * Auf einer Marketing-Seite ist praktisch jeder Button ein Link.
 * Interne Ziele über next/link, Anker und externe URLs über <a>.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternalRoute = href.startsWith("/");

  if (isInternalRoute) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
