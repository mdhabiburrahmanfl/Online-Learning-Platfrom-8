"use client";

import { useMemo, useState } from "react";

import type { Course } from "@/types/course";
import { CourseCard } from "@/components/course/course-card";

export function CoursesExplorer({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return courses;
    }

    return courses.filter((course) =>
      course.title.toLowerCase().includes(normalizedQuery),
    );
  }, [courses, query]);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
            Search Courses
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Find the right path for your next skill leap
          </h1>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            Search by course title and browse every program available on the
            platform.
          </p>
        </div>
        <label className="mt-6 flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3">
          <input
            type="text"
            placeholder="Search by course title..."
            className="w-full bg-transparent text-sm text-slate-700 outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-500">
        <p>{filteredCourses.length} courses found</p>
        <p>{query ? `Results for "${query}"` : "Showing all courses"}</p>
      </div>

      {filteredCourses.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            No matching course found
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Try another keyword like Web, React, Design, or Marketing.
          </p>
        </div>
      )}
    </div>
  );
}
