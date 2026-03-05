"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <section className="grid-fade overflow-hidden px-4 pb-20 pt-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-lg transition-colors duration-200 dark:border-slate-800/60 dark:bg-slate-950/80 dark:shadow-[0_40px_80px_rgba(15,23,42,0.6)] lg:p-10">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800 dark:bg-teal-900/60 dark:text-teal-200">
            {t("hero.badge")}
          </span>
          <h1 className="display-font text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t("hero.description")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/auth/signup">
              <Button className="w-full sm:w-auto">{t("hero.signup")}</Button>
            </Link>
            <Link href="/auth/login">
              <Button className="w-full sm:w-auto" variant="secondary">
                {t("hero.login")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -inset-6 rounded-3xl bg-teal-200/40 blur-3xl dark:bg-teal-500/30" />
          <Image
            alt={t("hero.title")}
            className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 ease-out hover:scale-105"
            height={900}
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
            width={1400}
          />
        </div>
      </div>
    </section>
  );
}
