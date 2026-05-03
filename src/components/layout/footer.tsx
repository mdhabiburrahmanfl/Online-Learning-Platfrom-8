import Link from "next/link";

import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo showTagline={false} />
          <p className="max-w-md text-sm leading-7 text-slate-600">
            A modern online learning platform for students who want practical,
            career-focused growth across development, design, marketing, and
            digital skills.
          </p>
          <div className="space-y-1 text-sm text-slate-600">
            <p>Email: hello@skillsphere.dev</p>
            <p>Phone: +880 1700-000000</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Explore
          </h4>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/my-profile">My Profile</Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Legal & Social
          </h4>
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
