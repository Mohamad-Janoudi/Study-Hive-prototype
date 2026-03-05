"use client";

import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/layout/Navbar";
import { DashboardTabs } from "@/features/lectures/DashboardTabs";

export function DashboardContent() {
  const { t } = useTranslation("common");

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="display-font text-3xl font-bold text-slate-900 dark:text-slate-100">
            {t("dashboard.heading")}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{t("dashboard.description")}</p>
        </div>
        <DashboardTabs />
      </div>
    </main>
  );
}
