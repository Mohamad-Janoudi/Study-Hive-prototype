"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export type User = { id: string; name: string; email: string } | null;

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.user) {
          setUser(data.user);
        }
      } catch {
        // ignore
      }
    }
    load();
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
