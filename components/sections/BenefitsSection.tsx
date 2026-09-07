import { useTranslations } from "next-intl";
import { Leaf, Banknote, Settings2 } from "lucide-react";

const icons = [Leaf, Banknote, Settings2];

export function BenefitsSection() {
  const t = useTranslations("Benefits");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="py-section-padding bg-surface-gray px-margin-mobile md:px-gutter">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            {t("heading")}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">{t("subheading")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.title}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 hover:border-technical-blue/50 transition-colors flex flex-col gap-4"
              >
                <Icon size={40} className="text-technical-blue" />
                <h3 className="font-headline-md text-headline-md text-primary">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
