"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { SocialLoginButton } from "@/components/auth/social-login-button";

export function LoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    startTransition(async () => {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: redirectTo,
      });

      if (error) {
        setErrorMessage(error.message || "Invalid email or password.");
        toast.error(error.message || "Login failed.");
        return;
      }

      toast.success("Welcome back.");
      router.push(redirectTo);
      router.refresh();
    });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-amber-100">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
          Welcome Back
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Login to SkillSphere
        </h1>
        <p className="text-sm leading-7 text-slate-500">
          Access your saved learning path and protected course details.
        </p>
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        {errorMessage && (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-600">
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          or
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <SocialLoginButton callbackURL={redirectTo} />

      <p className="mt-6 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-[#0f766e]">
          Register
        </Link>
      </p>
    </div>
  );
}
