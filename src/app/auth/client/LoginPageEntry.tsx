"use client";

import dynamic from "next/dynamic";

const LoginContent = dynamic(() => import("./LoginContent").then((mod) => mod.LoginContent), {
  ssr: false
});

export function LoginPageEntry() {
  return <LoginContent />;
}
