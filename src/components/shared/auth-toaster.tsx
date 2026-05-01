"use client";

import { Toaster } from "sonner";

export function AuthToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      toastOptions={{
        classNames: {
          toast: "border border-slate-200 bg-white text-slate-900",
        },
      }}
    />
  );
}
