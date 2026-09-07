import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");

  const quickLinks = [
    { href: "/basse-tension", label: t("services") },
    { href: "/realisations", label: t("realisations") },
    { href: "/devis", label: t("devisSimulateur") },
  ];

  const infoLinks = [
    { href: "/contact", label: t("contactUs") },
    { href: "#", label: t("mentionsLegales") },
    { href: "#", label: t("politiqueConfidentialite") },
  ];

  return (
    <footer className="bg-primary text-on-primary border-t border-primary-container">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4 max-w-sm">
          <span className="font-headline-md text-headline-md font-bold">{nav("brand")}</span>
          <p className="font-body-md text-body-md text-on-primary/80">{t("copyright")}</p>
        </div>

        <div className="flex flex-col gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label-sm text-label-sm text-on-primary/80 hover:text-secondary-fixed transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {infoLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-sm text-label-sm text-on-primary/80 hover:text-secondary-fixed transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
