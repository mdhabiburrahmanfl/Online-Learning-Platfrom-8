import { LoadingGrid } from "@/components/shared/loading-grid";

export default function CoursesLoading() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
        <div className="mt-4 h-8 w-2/3 animate-pulse rounded-full bg-slate-200" />
        <div className="mt-4 h-12 w-full animate-pulse rounded-full bg-slate-200" />
      </div>
      <LoadingGrid />
    </div>
  );
}
