"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Home, Factory, Leaf, Upload, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    installType: "",
    surface: "",
    facture: "",
    gouvernorat: "",
    nom: "",
    telephone: "",
    email: "",
  });
  const t = useTranslations("Devis");

  const installTypes = [
    { value: "residentiel", icon: Home, label: t("step1.residentielLabel"), desc: t("step1.residentielDesc") },
    { value: "industriel", icon: Factory, label: t("step1.industrielLabel"), desc: t("step1.industrielDesc") },
    { value: "agricole", icon: Leaf, label: t("step1.agricoleLabel"), desc: t("step1.agricoleDesc") },
  ];

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && !formData.installType) {
      alert(t("alertSelectType"));
      return;
    }
    if (currentStep < 4) setCurrentStep((s) => s + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("alertSubmitted"));
  };

  return (
    <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="w-full bg-surface-variant h-1">
        <div
          className="bg-secondary-container h-1 transition-all duration-300"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
      <div className="p-8 md:p-12">
        <div className="mb-8 text-center">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
            {t("title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {currentStep === 1 && (
            <div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6">
                {t("step1.heading")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {installTypes.map((type) => (
                  <label key={type.value} className="cursor-pointer group relative">
                    <input
                      type="radio"
                      name="install_type"
                      value={type.value}
                      checked={formData.installType === type.value}
                      onChange={(e) => updateField("installType", e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="h-full p-6 border border-outline-variant/50 rounded-lg peer-checked:border-technical-blue peer-checked:bg-surface-gray transition-all group-hover:border-primary-container flex flex-col items-center text-center">
                      <type.icon size={40} className="text-technical-blue mb-4" />
                      <span className="font-label-sm text-label-sm text-on-surface block mb-2">{type.label}</span>
                      <span className="font-body-md text-body-md text-on-surface-variant text-sm">{type.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6">
                {t("step2.heading")}
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                    {t("step2.surfaceLabel")}
                  </label>
                  <Input
                    type="number"
                    placeholder={t("step2.surfacePlaceholder")}
                    value={formData.surface}
                    onChange={(e) => updateField("surface", e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                    {t("step2.factureLabel")}
                  </label>
                  <Input
                    type="number"
                    placeholder={t("step2.facturePlaceholder")}
                    value={formData.facture}
                    onChange={(e) => updateField("facture", e.target.value)}
                  />
                </div>
                <div className="border border-dashed border-outline-variant rounded-lg p-6 text-center bg-surface-gray mt-4">
                  <Upload size={32} className="text-outline mx-auto mb-2" />
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">{t("step2.uploadText")}</p>
                  <Button type="button" variant="outline" size="sm">
                    {t("step2.uploadButton")}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6">
                {t("step3.heading")}
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                    {t("step3.gouvernoratLabel")}
                  </label>
                  <Select
                    value={formData.gouvernorat}
                    onChange={(e) => updateField("gouvernorat", e.target.value)}
                  >
                    <option value="">{t("step3.gouvernoratPlaceholder")}</option>
                    <option value="tunis">{t("step3.tunis")}</option>
                    <option value="sfax">{t("step3.sfax")}</option>
                    <option value="sousse">{t("step3.sousse")}</option>
                    <option value="monastir">{t("step3.monastir")}</option>
                    <option value="mahdia">{t("step3.mahdia")}</option>
                    <option value="autres">{t("step3.autres")}</option>
                  </Select>
                </div>
                <div className="h-64 rounded-lg overflow-hidden relative">
                  <div
                    className="bg-cover bg-center w-full h-full absolute inset-0"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDe3EAdJTzQXYdT19R8NFGmFEJ19_bXocClYmgATP9xScacBOdUp78k36upobBKvQWHVaBB-8IEzWOSisi7lEfmi5rMZnqrW83NnLD4yUUS3ne4CC5ymgX9UzOxS-ID8wJsSt5J5s5K4fcq1BGuL69n_Ps75PoxHWVt33D10YlIbCrx9j12ktJXcumNDptVkBUiyxEAVe-G7AezW4vfb_L9zaog0sS0L3R8j7gYqtcY9nc999EZt_Xy4A')" }}
                  />
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center pointer-events-none">
                    <MapPin size={48} className="text-primary drop-shadow-md" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="font-headline-md text-headline-md text-primary-container mb-6">
                {t("step4.heading")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                    {t("step4.nameLabel")}
                  </label>
                  <Input
                    type="text"
                    placeholder={t("step4.namePlaceholder")}
                    value={formData.nom}
                    onChange={(e) => updateField("nom", e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                    {t("step4.phoneLabel")}
                  </label>
                  <Input
                    type="tel"
                    placeholder={t("step4.phonePlaceholder")}
                    value={formData.telephone}
                    onChange={(e) => updateField("telephone", e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="font-label-sm text-label-sm text-on-surface block mb-2">
                    {t("step4.emailLabel")}
                  </label>
                  <Input
                    type="email"
                    placeholder={t("step4.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-outline-variant/30">
            <Button
              type="button"
              variant="ghost"
              onClick={handlePrev}
              className={cn(currentStep === 1 && "hidden")}
            >
              {t("back")}
            </Button>
            {currentStep < 4 ? (
              <Button type="button" variant="primary" onClick={handleNext} className="ml-auto rtl:ml-0 rtl:mr-auto">
                {t("next")}
              </Button>
            ) : (
              <Button type="submit" variant="secondary" className="ml-auto rtl:ml-0 rtl:mr-auto">
                {t("submit")}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
