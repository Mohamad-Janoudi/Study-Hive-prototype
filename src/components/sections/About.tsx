"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation("common");

  return (
    <section className="px-4 py-16 sm:px-6" id="about">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        <Image
          alt={t("about.heading")}
          className="h-[320px] w-full rounded-3xl object-cover shadow-xl transition ease-out dark:shadow-[0_30px_80px_rgba(2,6,23,0.65)]"
          height={900}
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80"
          width={1400}
        />
        <div>
          <h2 className="display-font text-3xl font-bold text-slate-900 dark:text-slate-100">
            {t("about.heading")}
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{t("about.paragraphOne")}</p>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{t("about.paragraphTwo")}</p>
        </div>
      </div>
    </section>
  );
}
