import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

export function Button({
  className,
  variant = "primary",
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:cursor-not-allowed disabled:opacity-60",
        {
        "bg-teal-700 text-white shadow-lg shadow-teal-900/20 hover:-translate-y-0.5 hover:bg-teal-800 dark:bg-teal-500 dark:shadow-teal-500/40 dark:hover:bg-teal-400":
          variant === "primary",
        "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-800 dark:hover:bg-slate-800/80":
          variant === "secondary",
        "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60": variant === "ghost",
          "w-full": fullWidth
        },
        className
      )}
      {...props}
    />
  );
}
