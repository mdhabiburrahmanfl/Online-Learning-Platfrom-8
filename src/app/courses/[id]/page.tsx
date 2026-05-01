import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getCourseById, getCurriculum } from "@/lib/courses";
import { getServerSession } from "@/lib/session";

type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { id } = await params;
  const session = await getServerSession();

  if (!session?.user) {
    redirect(`/login?redirect=/courses/${id}`);
  }

  const course = await getCourseById(Number(id));

  if (!course) {
    notFound();
  }

  const curriculum = getCurriculum();

  return (
    <div className="space-y-8">
      <Link
        href="/courses"
        className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
      >
        Back to courses
      </Link>
      <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 lg:grid-cols-[1.05fr_0.95fr]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full min-h-[20rem] w-full object-cover"
        />
        <div className="space-y-6 p-8 sm:p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
              Protected Course Details
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
              {course.title}
            </h1>
            <p className="text-base leading-8 text-slate-600">
              {course.description}
            </p>
          </div>
          <div className="grid gap-4 rounded-[1.75rem] bg-slate-50 p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Instructor
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {course.instructor}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Duration
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {course.duration}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Rating
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {course.rating.toFixed(1)} / 5
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Level
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {course.level}
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200 p-6">
            <h2 className="text-2xl font-semibold text-slate-950">
              Course Curriculum
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {curriculum.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-semibold text-[#0f766e]">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
