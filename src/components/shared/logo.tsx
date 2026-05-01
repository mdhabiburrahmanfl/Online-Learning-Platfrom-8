import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-amber-300/40 transition-transform duration-300 group-hover:-rotate-6">
        S
      </div>
      <div className="space-y-0.5">
        <p className="text-lg font-semibold tracking-tight text-slate-950">
          SkillSphere
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Learn with momentum
        </p>
      </div>
    </Link>
  );
}
