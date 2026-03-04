import { NextResponse } from "next/server";
import { authCookieName, authCookieOptions } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(authCookieName, "", {
    ...authCookieOptions,
    maxAge: 0
  });

  return response;
}
