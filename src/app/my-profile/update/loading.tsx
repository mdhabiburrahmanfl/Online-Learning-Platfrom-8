export default function UpdateProfileLoading() {
  return (
    <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80">
      <div className="space-y-4">
        <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
        <div className="h-8 w-1/2 animate-pulse rounded-full bg-slate-200" />
        <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-12 w-40 animate-pulse rounded-full bg-slate-200" />
      </div>
    </div>
  );
}
