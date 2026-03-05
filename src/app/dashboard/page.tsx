import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authCookieName, verifyAuthToken } from "@/lib/auth";
import { DashboardClientWrapper } from "@/features/lectures/DashboardClientWrapper";

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

  return <DashboardClientWrapper />;
}
