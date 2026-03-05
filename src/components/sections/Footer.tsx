"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white px-4 py-8 sm:px-6 transition-colors duration-200 dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-slate-600 transition-colors duration-200 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>{t("footer.rights", { year })}</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-slate-900 dark:hover:text-white" href="/auth/login">
            {t("footer.login")}
          </Link>
          <Link className="hover:text-slate-900 dark:hover:text-white" href="/auth/signup">
            {t("footer.signup")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
