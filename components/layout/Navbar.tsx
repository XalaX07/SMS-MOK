"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Nav");

  const navLinks = [
    { href: "/basse-tension", label: t("basseTension") },
    { href: "/moyenne-tension", label: t("moyenneTension") },
    { href: "/pompage-solaire", label: t("pompageSolaire") },
    { href: "/realisations", label: t("realisations") },
    { href: "/devis", label: t("simulateur") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter md:px-margin-mobile flex justify-between items-center py-4">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          {t("brand")}
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body-md text-body-md font-medium transition-colors duration-200 pb-1",
                pathname === link.href
                  ? "text-primary border-b-2 border-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button variant="secondary" size="sm">
              {t("contact")}
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t("toggleMenu")}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-gutter py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-body-md text-body-md font-medium py-2",
                pathname === link.href ? "text-primary font-bold" : "text-on-surface-variant"
              )}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher className="py-2" />
          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            <Button variant="secondary" size="sm" className="w-full">
              {t("contact")}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
