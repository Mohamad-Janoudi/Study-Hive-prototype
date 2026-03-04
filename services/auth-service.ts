import bcrypt from "bcryptjs";
import { createUser, findUserByEmail, sanitizeUser } from "@/lib/mock-db";

export async function registerUser(input: {
  name: string;
  email: string;
  password: string;
}) {
  const existingUser = findUserByEmail(input.email);

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = createUser({
    name: input.name,
    email: input.email,
    passwordHash
  });

  return sanitizeUser(user);
}

export async function loginUser(input: { email: string; password: string }) {
  const user = findUserByEmail(input.email);

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isValid = await bcrypt.compare(input.password, user.passwordHash);

  if (!isValid) {
    throw new Error("Invalid email or password.");
  }

  return sanitizeUser(user);
}
