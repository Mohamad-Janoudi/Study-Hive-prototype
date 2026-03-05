import { AUTH_COOKIE_NAME, JWT_EXPIRATION, getJwtSecret } from "@/lib/env";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

export type AuthTokenPayload = JWTPayload & {
  sub: string;
  email: string;
  name: string;
};

const secretKey = new TextEncoder().encode(getJwtSecret());

export async function signAuthToken(payload: AuthTokenPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRATION)
    .sign(secretKey);
}

export async function verifyAuthToken(token: string) {
  const { payload } = await jwtVerify(token, secretKey, {
    algorithms: ["HS256"]
  });

  return payload as AuthTokenPayload;
}

export const authCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7
};

export const authCookieName = AUTH_COOKIE_NAME;
