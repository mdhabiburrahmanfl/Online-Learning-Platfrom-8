"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { isDemoAuthClient } from "@/lib/auth-mode";
import { SocialLoginButton } from "@/components/auth/social-login-button";

export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    startTransition(async () => {
      if (isDemoAuthClient()) {
        toast.success("Live demo mode is ready. Please use the prepared login.");
        router.push("/login");
        router.refresh();
        return;
      }

      const { error } = await authClient.signUp.email({
        name,
        email,
        image,
        password,
        callbackURL: "/login",
      });

      if (error) {
        setErrorMessage(error.message || "Registration failed.");
        toast.error(error.message || "Registration failed.");
        return;
      }

      toast.success("Registration complete. Please login to continue.");
      router.push("/login");
      router.refresh();
    });
  };

  return (
    <div className="hover-lift-card mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-teal-100">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
          Join the Platform
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Create your SkillSphere account
        </h1>
        <p className="text-sm leading-7 text-slate-500">
          Start exploring protected learning journeys in a few steps.
        </p>
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Photo URL"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0f766e]"
          value={image}
          onChange={(event) => setImage(event.target.value)}
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
          className="w-full rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59] disabled:opacity-70"
        >
          {isPending ? "Creating account..." : "Register"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          or
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <SocialLoginButton callbackURL="/" />

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[#0f766e]">
          Login
        </Link>
      </p>
    </div>
  );
}
