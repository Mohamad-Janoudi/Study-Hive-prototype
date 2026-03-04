import clsx from "clsx";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.06)]",
        className
      )}
      {...props}
    />
  );
}
