import { Factory, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MoyenneTensionPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function MoyenneTensionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("MoyenneTensionPage");
  const features = t.raw("features") as string[];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding pt-[120px]">
      <div className="flex flex-col items-start gap-6 max-w-3xl">
        <div className="w-12 h-12 bg-primary-fixed rounded flex items-center justify-center text-technical-blue">
          <Factory size={32} />
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary">{t("title")}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">{t("description")}</p>
        <ul className="list-disc list-inside font-body-md text-body-md text-on-surface-variant space-y-2">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Link href="/devis">
          <Button variant="primary" className="mt-4 flex items-center gap-2">
            {t("cta")} <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
