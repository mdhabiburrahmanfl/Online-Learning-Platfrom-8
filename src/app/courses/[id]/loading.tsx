export default function CourseDetailsLoading() {
  return (
    <div className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="min-h-[24rem] animate-pulse bg-slate-200" />
      <div className="space-y-5 p-8">
        <div className="h-4 w-36 animate-pulse rounded-full bg-slate-200" />
        <div className="h-10 w-2/3 animate-pulse rounded-full bg-slate-200" />
        <div className="h-28 w-full animate-pulse rounded-[1.5rem] bg-slate-200" />
        <div className="h-44 w-full animate-pulse rounded-[1.5rem] bg-slate-200" />
      </div>
    </div>
  );
}
