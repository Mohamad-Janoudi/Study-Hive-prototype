"use client";

import { Navbar } from "@/components/layout/Navbar";
import { AuthForm } from "@/features/auth/AuthForm";

export function SignupContent() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="grid min-h-[calc(100vh-65px)] place-items-center px-4 py-10 sm:px-6">
        <AuthForm mode="signup" />
      </section>
    </main>
  );
}
