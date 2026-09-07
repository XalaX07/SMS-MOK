"use client";

import React, { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, zoneKeys, typeKeys, type ZoneKey, type TypeKey } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [activeZone, setActiveZone] = useState<ZoneKey>("all");
  const [activeType, setActiveType] = useState<TypeKey>("all");
  const t = useTranslations("Gallery");
  const tProjects = useTranslations("Projects");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const zoneMatch = activeZone === "all" || p.zoneKey === activeZone;
      const typeMatch = activeType === "all" || p.typeKey === activeType;
      return zoneMatch && typeMatch;
    });
  }, [activeZone, activeType]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between p-6 bg-surface-container-low rounded-lg border border-outline-variant/30 mb-12">
        <div className="w-full md:w-auto flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant">{t("filterZone")}</label>
          <div className="flex flex-wrap gap-2">
            {zoneKeys.map((z) => (
              <button
                key={z}
                onClick={() => setActiveZone(z)}
                className={cn(
                  "px-4 py-2 rounded-full border font-label-sm text-label-sm transition-colors",
                  activeZone === z
                    ? "bg-primary text-on-primary border-primary"
                    : "border-outline text-on-surface-variant hover:border-primary hover:text-primary"
                )}
              >
                {t(`zones.${z}`)}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-auto flex flex-col gap-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant">{t("filterType")}</label>
          <div className="flex flex-wrap gap-2">
            {typeKeys.map((ty) => (
              <button
                key={ty}
                onClick={() => setActiveType(ty)}
                className={cn(
                  "px-4 py-2 rounded-full border font-label-sm text-label-sm transition-colors",
                  activeType === ty
                    ? "bg-primary text-on-primary border-primary"
                    : "border-outline text-on-surface-variant hover:border-primary hover:text-primary"
                )}
              >
                {t(`types.${ty}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className={cn("absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full font-label-sm text-label-sm shadow-md", project.badgeColor)}>
                {tProjects(`items.${project.id}.badge`)}
              </div>
              {project.beforeAfter && (
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-sm text-label-sm shadow-md font-bold">
                  {t("beforeAfter")}
                </div>
              )}
              <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 bg-surface-container-lowest/90 backdrop-blur text-primary px-3 py-1 rounded font-label-sm text-label-sm shadow-sm flex items-center gap-1">
                <MapPin size={16} /> {t(`zones.${project.zoneKey}`)}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {tProjects(`items.${project.id}.title`)}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                {tProjects(`items.${project.id}.description`)}
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-4 mt-auto">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-outline">
                    {project.typeKey === "agricole" ? tProjects("metricFlow") : tProjects("metricPower")}
                  </span>
                  <span className="font-headline-md text-[18px] text-technical-blue">{project.power}</span>
                </div>
                <div className="flex flex-col ml-auto rtl:ml-0 rtl:mr-auto">
                  <span className="text-technical-blue hover:text-primary font-label-sm text-label-sm flex items-center gap-1 cursor-pointer">
                    {t("details")} <ArrowRight size={16} className="rtl:rotate-180" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-on-surface-variant">{t("noResults")}</div>
      )}

      <div className="mt-12 text-center">
        <Button variant="outline">{t("loadMore")}</Button>
      </div>
    </div>
  );
}
