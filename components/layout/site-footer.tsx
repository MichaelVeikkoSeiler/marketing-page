import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { footerNav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-warm-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-forest-muted">
              {siteConfig.tagline}. Gebaut für alle, die ihren Garten lieber
              giessen als verwalten.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-forest">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm text-forest-muted transition-colors hover:text-forest"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-forest-muted transition-colors hover:text-forest"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-forest-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="transition-colors hover:text-forest"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}
