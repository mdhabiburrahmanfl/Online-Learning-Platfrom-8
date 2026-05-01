import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { PageShell } from "@/components/shared/page-shell";
import { AuthToaster } from "@/components/shared/auth-toaster";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillSphere | Modern Online Learning Platform",
  description:
    "Explore expert-led courses, enroll in skill-based programs, and grow with a modern online learning experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[#fffdf7] font-sans text-slate-900 antialiased">
        <PageShell>{children}</PageShell>
        <AuthToaster />
      </body>
    </html>
  );
}
