"use client";

import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("./HomeContent").then((mod) => mod.HomeContent), {
  ssr: false
});

export function HomePageEntry() {
  return <HomeContent />;
}
