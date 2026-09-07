"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="max-w-xl mx-auto text-center py-12">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("successTitle")}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label className="font-label-sm text-label-sm text-on-surface block mb-2">{t("nameLabel")}</label>
        <Input type="text" placeholder={t("namePlaceholder")} required />
      </div>
      <div>
        <label className="font-label-sm text-label-sm text-on-surface block mb-2">{t("emailLabel")}</label>
        <Input type="email" placeholder={t("emailPlaceholder")} required />
      </div>
      <div>
        <label className="font-label-sm text-label-sm text-on-surface block mb-2">{t("phoneLabel")}</label>
        <Input type="tel" placeholder={t("phonePlaceholder")} />
      </div>
      <div>
        <label className="font-label-sm text-label-sm text-on-surface block mb-2">{t("messageLabel")}</label>
        <textarea
          required
          rows={4}
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-on-surface focus:outline-none focus:border-technical-blue focus:ring-2 focus:ring-technical-blue/20 transition-shadow"
          placeholder={t("messagePlaceholder")}
        />
      </div>
      <Button type="submit" variant="secondary" className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
