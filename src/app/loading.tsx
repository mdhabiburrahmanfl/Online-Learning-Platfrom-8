export default function RootLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 text-center shadow-lg shadow-slate-200/70">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-amber-200 border-t-slate-900" />
        <p className="mt-5 text-sm font-medium text-slate-600">
          Preparing your learning space...
        </p>
      </div>
    </div>
  );
}
