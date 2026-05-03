"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { isDemoAuthClient } from "@/lib/auth-mode";

type SocialLoginButtonProps = {
  callbackURL: string;
};

export function SocialLoginButton({ callbackURL }: SocialLoginButtonProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleGoogleLogin = () => {
    if (isDemoAuthClient()) {
      toast.error("Google login is disabled on the live demo. Use the demo login instead.");
      return;
    }

    if (!process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED) {
      toast.error("Google login is not configured yet. Add the env keys first.");
      return;
    }

    startTransition(async () => {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL,
      });

      if (error) {
        toast.error(error.message || "Google login failed.");
        router.refresh();
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={isPending}
      className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950 disabled:opacity-70"
    >
      <span className="text-base">G</span>
      {isPending ? "Connecting..." : "Continue with Google"}
    </button>
  );
}
