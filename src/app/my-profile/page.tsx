import Link from "next/link";
import { redirect } from "next/navigation";

import { getServerSession } from "@/lib/session";

export default async function MyProfilePage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?redirect=/my-profile");
  }

  return (
    <section className="mx-auto w-full max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80 sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
          <img
            src={session.user.image || "https://i.ibb.co/Fq8X8nT/avatar.png"}
            alt={session.user.name || "Profile avatar"}
            className="h-28 w-28 rounded-full object-cover ring-4 ring-white/15"
          />
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-slate-300">
            Logged In User
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            {session.user.name}
          </h1>
          <p className="mt-2 text-sm text-slate-300">{session.user.email}</p>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
              My Profile
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Manage your learner identity
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Name
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                {session.user.name}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Email
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                {session.user.email}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Image URL
              </p>
              <p className="mt-3 break-all text-sm text-slate-600">
                {session.user.image || "No image URL added yet."}
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 p-6">
            <h3 className="text-xl font-semibold text-slate-950">
              Challenge Requirement
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This profile page includes the required update flow so students
              can manage their name and image URL using Better Auth&apos;s
              `updateUser` capability.
            </p>
            <Link
              href="/my-profile/update"
              className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
