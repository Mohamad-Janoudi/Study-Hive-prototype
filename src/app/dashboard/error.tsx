"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// basic error boundary for dashboard; will redirect to login if something goes wrong
export default function DashboardError({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Dashboard error:", error);
    // in case of SSR failure, send user to login
    router.replace("/auth/login");
  }, [error, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-center text-red-600">An error occurred. Redirecting...</p>
    </div>
  );
}
