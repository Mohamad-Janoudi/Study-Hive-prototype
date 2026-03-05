import { UserRecord } from "@/types/user";

declare global {
  var studyHiveUsers: UserRecord[] | undefined;
}

const users = global.studyHiveUsers ?? [];

if (!global.studyHiveUsers) {
  global.studyHiveUsers = users;
}

export function findUserByEmail(email: string): UserRecord | undefined {
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export function createUser(user: Omit<UserRecord, "id" | "createdAt">): UserRecord {
  const newUser: UserRecord = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...user
  };

  users.push(newUser);
  return newUser;
}

export function sanitizeUser(user: UserRecord) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  };
}
