"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type AuthMode = "login" | "signup";

type FormValues = {
  name?: string;
  email: string;
  password: string;
};

type AuthFormProps = {
  mode: AuthMode;
};

export function AuthForm({ mode }: AuthFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);

    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    const data = (await response.json()) as { error?: string };

    if (!response.ok) {
      setServerError(data.error ?? "Authentication failed.");
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  };

  return (
    <Card className="soft-card w-full max-w-md p-8">
      <h1 className="display-font text-2xl font-bold text-slate-900">
        {mode === "login" ? "Welcome back" : "Create your account"}
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        {mode === "login"
          ? "Log in to continue your university prep."
          : "Start getting structured Q&A lecture summaries."}
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {mode === "signup" && (
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="name">
              Full name
            </label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-teal-500 transition focus:ring-2"
              id="name"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "At least 2 characters" }
              })}
            />
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>}
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-teal-500 transition focus:ring-2"
            id="email"
            placeholder="student@university.edu"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" }
            })}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-teal-500 transition focus:ring-2"
            id="password"
            placeholder="At least 8 characters"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "At least 8 characters" }
            })}
          />
          {errors.password && <p className="mt-1 text-xs text-rose-600">{errors.password.message}</p>}
        </div>

        {serverError && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{serverError}</p>}

        <Button disabled={isSubmitting} fullWidth type="submit">
          {isSubmitting ? "Please wait..." : mode === "login" ? "Login" : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-sm text-slate-600">
        {mode === "login" ? "No account yet?" : "Already have an account?"}{" "}
        <Link
          className="font-semibold text-teal-700 transition hover:text-teal-800"
          href={mode === "login" ? "/auth/signup" : "/auth/login"}
        >
          {mode === "login" ? "Sign up" : "Log in"}
        </Link>
      </p>
    </Card>
  );
}
