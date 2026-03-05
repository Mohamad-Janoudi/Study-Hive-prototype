"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/Card";
import clsx from "clsx";
import { getLectureSummaries } from "@/features/lectures/service";

const yearOptions = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

export function DashboardTabs() {
  const { t } = useTranslation("common");
  const tabLabels = t("dashboard.tabs", { returnObjects: true }) as string[];
  const tabs = yearOptions.map((year, index) => ({
    key: year,
    label: tabLabels[index] ?? year
  }));

  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const lectures = getLectureSummaries(activeTab);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white/80 px-2 py-2 dark:border-slate-800/60 dark:bg-slate-900/70">
        {tabs.map((tab) => (
          <button
            className={clsx(
              "rounded-xl px-4 py-2 text-sm font-semibold transition-colors",
              activeTab === tab.key
                ? "bg-teal-700 text-white shadow dark:bg-teal-500"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
            )}
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {lectures.map((item) => (
          <Card key={item.question}>
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
              {t("dashboard.questionLabel")}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t("dashboard.answerLabel")}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.answer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
