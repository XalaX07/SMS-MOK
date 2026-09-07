"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, localeNames, type AppLocale } from "@/i18n/routing";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: AppLocale) => {
    // None of this app's routes are dynamic, so switching the locale for
    // the current pathname is enough to keep the user on the same page.
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleChange(loc)}
          aria-current={loc === locale}
          className={`px-2 py-1 rounded text-label-sm font-label-sm uppercase transition-colors ${
            loc === locale
              ? "bg-primary text-on-primary"
              : "text-on-surface-variant hover:text-primary"
          }`}
          title={localeNames[loc]}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
