import Link from "next/link";

import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  buttonLabel?: string;
};

export function CourseCard({
  course,
  buttonLabel = "View Details",
}: CourseCardProps) {
  return (
    <article className="group hover-lift-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
          {course.category}
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <span>{course.instructor}</span>
          <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-800">
            {course.rating.toFixed(1)} / 5
          </span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            {course.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-7 text-slate-600">
            {course.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <Link
          href={`/courses/${course.id}`}
          className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {buttonLabel}
        </Link>
      </div>
    </article>
  );
}
