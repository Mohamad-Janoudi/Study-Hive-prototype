"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("common");

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
      setServerError(data.error ?? t("auth.serverError"));
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  };

  return (
    <Card className="soft-card w-full max-w-md p-8">
      <h1 className="display-font text-2xl font-bold text-slate-900 dark:text-slate-100">
        {mode === "login" ? t("auth.welcomeBack") : t("auth.createAccount")}
      </h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {mode === "login" ? t("auth.loginDescription") : t("auth.signupDescription")}
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {mode === "signup" && (
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
              {t("auth.nameLabel")}
            </label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:ring-teal-400"
              id="name"
              placeholder={t("auth.namePlaceholder")}
              {...register("name", {
                required: t("auth.nameRequired"),
                minLength: { value: 2, message: t("auth.nameMinLength") }
              })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-200">{errors.name.message}</p>
            )}
          </div>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
            {t("auth.emailLabel")}
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:ring-teal-400"
            id="email"
            placeholder={t("auth.emailPlaceholder")}
            type="email"
            {...register("email", {
              required: t("auth.emailRequired"),
              pattern: { value: /\S+@\S+\.\S+/, message: t("auth.emailInvalid") }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-600 dark:text-rose-200">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="password">
            {t("auth.passwordLabel")}
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:ring-teal-400"
            id="password"
            placeholder={t("auth.passwordPlaceholder")}
            type="password"
            {...register("password", {
              required: t("auth.passwordRequired"),
              minLength: { value: 8, message: t("auth.passwordMinLength") }
            })}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-rose-600 dark:text-rose-200">{errors.password.message}</p>
          )}
        </div>

        {serverError && (
          <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-900/50 dark:text-rose-100">
            {serverError}
          </p>
        )}

        <Button disabled={isSubmitting} fullWidth type="submit">
          {isSubmitting
            ? t("auth.waiting")
            : mode === "login"
            ? t("auth.loginCta")
            : t("auth.signupCta")}
        </Button>
      </form>

      <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
        {mode === "login" ? t("auth.noAccount") : t("auth.alreadyAccount")}{" "}
        <Link
          className="font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-200"
          href={mode === "login" ? "/auth/signup" : "/auth/login"}
        >
          {mode === "login" ? t("auth.switchToSignup") : t("auth.switchToLogin")}
        </Link>
      </p>
    </Card>
  );
}
