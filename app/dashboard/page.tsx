import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authCookieName, verifyAuthToken } from "@/lib/auth";
import { Navbar } from "@/components/Navbar";
import { DashboardTabs } from "@/components/DashboardTabs";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(authCookieName)?.value;

  if (!token) {
    redirect("/auth/login");
  }

  try {
    await verifyAuthToken(token);
  } catch {
    redirect("/auth/login");
  }

  return (
    <main className="min-h-screen">
      <Navbar authenticated />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="display-font text-3xl font-bold text-slate-900">Your Study Dashboard</h1>
          <p className="mt-2 text-slate-600">
            Browse lecture summaries in Q&A format across all five academic years.
          </p>
        </div>
        <DashboardTabs />
      </div>
    </main>
  );
}
