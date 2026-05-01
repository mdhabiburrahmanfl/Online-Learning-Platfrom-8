import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#fffdf7]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.28),_transparent_45%),radial-gradient(circle_at_right,_rgba(20,184,166,0.16),_transparent_28%)]" />
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
