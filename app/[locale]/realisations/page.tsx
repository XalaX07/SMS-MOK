import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "RealisationsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function RealisationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("RealisationsPage");

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding pt-[120px]">
      <section className="text-center mb-16">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-4">
          {t("heading")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">{t("subheading")}</p>
      </section>
      <ProjectsGallery />
    </main>
  );
}
