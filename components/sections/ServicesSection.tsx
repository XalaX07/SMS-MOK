import { useTranslations } from "next-intl";
import { Home, Factory, Droplets, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Home, key: "basseTension", href: "/basse-tension" },
  { icon: Factory, key: "moyenneTension", href: "/moyenne-tension" },
  { icon: Droplets, key: "pompageSolaire", href: "/pompage-solaire" },
] as const;

export function ServicesSection() {
  const t = useTranslations("Services");

  return (
    <section className="py-section-padding px-margin-mobile md:px-gutter bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            {t("heading")}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">{t("subheading")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.key} className="hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow">
              <CardContent className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-primary-fixed rounded flex items-center justify-center text-technical-blue mb-2">
                  <service.icon size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">{t(`${service.key}.title`)}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  {t(`${service.key}.description`)}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-label-sm text-label-sm text-technical-blue mt-4 group hover:text-primary transition-colors"
                >
                  {t("learnMore")}
                  <ArrowRight size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
