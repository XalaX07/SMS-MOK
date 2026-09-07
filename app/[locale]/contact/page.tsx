import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: `${t("heading")} - SMS Solaire`,
    description: t("subheading"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding pt-[120px]">
      <div className="text-center mb-12">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
          {t("heading")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">{t("subheading")}</p>
      </div>
      <ContactSection />
    </div>
  );
}
