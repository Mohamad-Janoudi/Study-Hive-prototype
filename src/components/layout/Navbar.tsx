"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";
import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation("common");
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const authenticated = Boolean(user);
  const showMarketingLinks = pathname === "/";
  const isArabic = language === "ar";
  const nextLanguage = isArabic ? "en" : "ar";
  const languageButtonLabel =
    nextLanguage === "ar" ? t("navbar.languageSwitchToArabic") : t("navbar.languageSwitchToEnglish");
  const menuAriaLabel = menuOpen ? t("navbar.closeMenu") : t("navbar.openMenu");

  const navLinks = [
    { href: "#features", label: t("navbar.features") },
    { href: "#about", label: t("navbar.about") },
    { href: "#testimonials", label: t("navbar.testimonials") }
  ];

  const handleLanguageToggle = () => {
    changeLanguage(nextLanguage);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur transition-colors duration-200 dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="display-font text-xl font-bold tracking-tight text-slate-900 transition-colors dark:text-slate-100"
        >
          {t("navbar.brand")}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {showMarketingLinks &&
            navLinks.map((link) => (
              <Link
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}

          <div className="flex items-center gap-2">
            <button
              aria-label={theme === "dark" ? t("navbar.lightMode") : t("navbar.darkMode")}
              onClick={toggleTheme}
              type="button"
              className="flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800/70"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Button
              variant="ghost"
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200"
              onClick={handleLanguageToggle}
            >
              {languageButtonLabel}
            </Button>
          </div>

          {!authenticated ? (
            <>
              <Link href="/auth/login">
                <Button variant="ghost">{t("navbar.login")}</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>{t("navbar.signup")}</Button>
              </Link>
            </>
          ) : (
            <Button onClick={logout}>{t("navbar.logout")}</Button>
          )}
        </nav>

        <button
          aria-label={menuAriaLabel}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={clsx(
          "border-t border-slate-200/60 bg-white/90 transition-colors duration-200 dark:border-slate-800/60 dark:bg-slate-950/80 md:hidden",
          !menuOpen && "hidden"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 rounded-b-3xl px-4 py-4 sm:px-6">
          {showMarketingLinks &&
            navLinks.map((link) => (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          <div className="flex flex-wrap items-center gap-2">
            <button
              aria-label={theme === "dark" ? t("navbar.lightMode") : t("navbar.darkMode")}
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              type="button"
              className="flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800/70"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button
              variant="ghost"
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200"
              onClick={() => {
                handleLanguageToggle();
                setMenuOpen(false);
              }}
            >
              {languageButtonLabel}
            </Button>
          </div>

          {!authenticated ? (
            <>
              <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
                <Button className="w-full" variant="secondary">
                  {t("navbar.login")}
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full">{t("navbar.signup")}</Button>
              </Link>
            </>
          ) : (
            <Button
              className="w-full"
              onClick={() => {
                setMenuOpen(false);
                void logout();
              }}
            >
              {t("navbar.logout")}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
