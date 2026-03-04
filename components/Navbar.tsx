"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";

type NavbarProps = {
  authenticated?: boolean;
};

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" }
];

export function Navbar({ authenticated = false }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/auth/login");
    router.refresh();
  };

  const showMarketingLinks = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="display-font text-xl font-bold tracking-tight text-slate-900">
          Study Hive
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {showMarketingLinks &&
            navLinks.map((link) => (
              <Link
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}

          {!authenticated ? (
            <>
              <Link href="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <Button onClick={handleLogout}>Logout</Button>
          )}
        </nav>

        <button
          aria-label="Open mobile menu"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={clsx("border-t border-slate-200/60 bg-white md:hidden", !menuOpen && "hidden")}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
          {showMarketingLinks &&
            navLinks.map((link) => (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          {!authenticated ? (
            <>
              <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
                <Button className="w-full" variant="secondary">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </>
          ) : (
            <Button
              className="w-full"
              onClick={() => {
                setMenuOpen(false);
                void handleLogout();
              }}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
