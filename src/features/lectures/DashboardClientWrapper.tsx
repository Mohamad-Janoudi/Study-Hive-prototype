"use client";

import dynamic from "next/dynamic";

const DashboardContent = dynamic(
  () => import("@/features/lectures/DashboardContent").then((mod) => mod.DashboardContent),
  { ssr: false }
);

export function DashboardClientWrapper() {
  return <DashboardContent />;
}
