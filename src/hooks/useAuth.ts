"use client";

import { useRouter } from "next/navigation";

// simple hook encapsulating logout behavior used across ui components
export function useAuth() {
    const router = useRouter();

    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        // navigate back to login and refresh client state
        router.replace("/auth/login");
        router.refresh();
    };

    return { logout };
}
