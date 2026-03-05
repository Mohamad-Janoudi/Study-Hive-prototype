"use client";

import dynamic from "next/dynamic";

const SignupContent = dynamic(() => import("./SignupContent").then((mod) => mod.SignupContent), {
  ssr: false
});

export function SignupPageEntry() {
  return <SignupContent />;
}
