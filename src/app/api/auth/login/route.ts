import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validators";
import { loginUser } from "@/features/auth/service";
import { authCookieName, authCookieOptions, signAuthToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = loginSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: parsedBody.error.issues[0]?.message ?? "Invalid request" },
        { status: 400 }
      );
    }

    const user = await loginUser(parsedBody.data);
    const token = await signAuthToken({
      sub: user.id,
      name: user.name,
      email: user.email
    });

    const response = NextResponse.json({ user });
    response.cookies.set(authCookieName, token, authCookieOptions);

    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to login";
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
