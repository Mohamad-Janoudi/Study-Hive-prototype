"use client";

import { Card } from "@/components/ui/Card";
import { useTranslation } from "react-i18next";

type FeatureItem = {
  title: string;
  description: string;
};

export function FeaturesSection() {
  const { t } = useTranslation("common");
  const features = t("features.items", { returnObjects: true }) as FeatureItem[];

  return (
    <section className="px-4 py-16 sm:px-6" id="features">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <h2 className="display-font text-3xl font-bold text-slate-900 dark:text-slate-100">
            {t("features.heading")}
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            {t("features.subheading")}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card className="transition-transform duration-200 hover:-translate-y-1" key={feature.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
