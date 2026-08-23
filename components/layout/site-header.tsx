"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { mainNav, primaryCta } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-warm-white/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-forest-muted transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          className="grid h-12 w-12 place-items-center rounded-xl text-forest ring-1 ring-line md:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-forest hover:bg-warm-white"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href={primaryCta.href}
              size="lg"
              className="mt-3 w-full"
            >
              {primaryCta.label}
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
