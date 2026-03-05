"use client";

import { Card } from "@/components/ui/Card";
import { useTranslation } from "react-i18next";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialsSection() {
  const { t } = useTranslation("common");
  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  return (
    <section className="px-4 py-16 sm:px-6" id="testimonials">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="display-font text-3xl font-bold text-slate-900 dark:text-slate-100">
          {t("testimonials.heading")}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 font-semibold text-slate-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
