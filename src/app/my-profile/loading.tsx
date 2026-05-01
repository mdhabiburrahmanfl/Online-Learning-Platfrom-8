export default function MyProfileLoading() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/80">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="min-h-72 animate-pulse rounded-[2rem] bg-slate-200" />
        <div className="space-y-5">
          <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
          <div className="h-8 w-2/3 animate-pulse rounded-full bg-slate-200" />
          <div className="h-48 w-full animate-pulse rounded-[1.5rem] bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
