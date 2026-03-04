"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import clsx from "clsx";
import { getLectureSummaries } from "@/services/lecture-service";

const tabs = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const lectures = getLectureSummaries(activeTab);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2">
        {tabs.map((tab) => (
          <button
            className={clsx(
              "rounded-xl px-4 py-2 text-sm font-semibold transition",
              activeTab === tab
                ? "bg-teal-700 text-white shadow"
                : "text-slate-700 hover:bg-slate-100"
            )}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {lectures.map((item) => (
          <Card key={item.question}>
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Question</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.question}</h3>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Answer</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.answer}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
