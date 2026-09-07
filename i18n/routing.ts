import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // All locales supported by the app.
  locales: ["fr", "en", "ar"],
  // Used when no locale matches (also the language the content was authored in).
  defaultLocale: "fr",
  // Keep the locale prefix on every path (e.g. /fr, /en, /ar) so the current
  // language is always explicit in the URL.
  localePrefix: "always",
});

export type AppLocale = (typeof routing.locales)[number];

export const localeNames: Record<AppLocale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export const rtlLocales: AppLocale[] = ["ar"];
