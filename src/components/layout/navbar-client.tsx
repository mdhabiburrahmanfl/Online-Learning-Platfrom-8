"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Logo } from "@/components/shared/logo";
import { authClient } from "@/lib/auth-client";
import { isDemoAuthClient } from "@/lib/auth-mode";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" },
];

type NavbarClientProps = {
  session:
    | {
        user?: {
          name?: string;
          email?: string;
          image?: string | null;
        };
      }
    | null
    | undefined;
};

export function NavbarClient({ session }: NavbarClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const logout = () => {
    startTransition(async () => {
      if (isDemoAuthClient()) {
        const response = await fetch("/api/demo-auth/logout", {
          method: "POST",
        });

        if (!response.ok) {
          toast.error("Unable to sign out right now.");
          return;
        }

        toast.success("Signed out successfully.");
        router.push("/");
        router.refresh();
        return;
      }

      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Unable to sign out right now.");
        return;
      }

      toast.success("Signed out successfully.");
      router.push("/");
      router.refresh();
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <button
          type="button"
          className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 lg:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          Menu
        </button>
        <div
          className={cn(
            "absolute left-4 right-4 top-full mt-3 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/80 lg:static lg:mt-0 lg:flex lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none",
            isMenuOpen ? "block" : "hidden lg:flex",
          )}
        >
          <nav className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-2">
            {links.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 lg:mt-0 lg:flex-row lg:items-center lg:border-t-0 lg:pt-0">
            {session?.user ? (
              <>
                <div className="flex items-center gap-3 rounded-full bg-amber-50 px-3 py-2">
                  <img
                    src={session.user.image || "https://i.ibb.co/Fq8X8nT/avatar.png"}
                    alt={session.user.name || "User avatar"}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-slate-500">{session.user.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600 disabled:opacity-70"
                  onClick={logout}
                  disabled={isPending}
                >
                  {isPending ? "Logging out..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#115e59]"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
