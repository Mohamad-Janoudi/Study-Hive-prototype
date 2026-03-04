import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authCookieName, verifyAuthToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(authCookieName)?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const payload = await verifyAuthToken(token);
    return NextResponse.json({
      user: {
        id: payload.sub,
        email: payload.email,
        name: payload.name
      }
    });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
