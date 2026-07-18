"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// El menú móvil se cierra con onClick en los enlaces (ver más abajo).
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur supports-[backdrop-filter]:bg-navy/85"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo tone="white" />

        {/* Navegación desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-white/85 transition-colors hover:text-gold",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300",
                    active ? "text-gold after:w-full" : "after:w-0 hover:after:w-full",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href={site.hero.primaryCta.href} size="sm">
            {site.hero.primaryCta.label}
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Panel móvil */}
      <div
        className={cn(
          "overflow-hidden bg-navy/98 backdrop-blur transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 hover:text-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-3">
            <Button href={site.hero.primaryCta.href} className="w-full">
              {site.hero.primaryCta.label}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
