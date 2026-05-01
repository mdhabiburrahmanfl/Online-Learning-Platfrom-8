import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center rounded-[2.5rem] border border-slate-200 bg-white px-8 py-16 text-center shadow-xl shadow-slate-200/70">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
        This learning path does not exist
      </h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        The page you requested could not be found. Explore the available
        courses or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Go Home
        </Link>
        <Link
          href="/courses"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
