import { getTranslations, setRequestLocale } from "next-intl/server";
import { QuoteForm } from "@/components/sections/QuoteForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Devis" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function DevisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="py-section-padding px-margin-mobile md:px-gutter">
      <QuoteForm />
    </div>
  );
}
