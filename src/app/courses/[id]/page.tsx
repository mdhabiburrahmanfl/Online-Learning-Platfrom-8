import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getCourseById, getCurriculum } from "@/lib/courses";
import { getServerSession } from "@/lib/session";
import type { Course } from "@/types/course";

type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

function formatBdtPrice(price: number) {
  return `Tk ${price.toLocaleString("en-BD")}`;
}

function getCourseOutcomes(course: Course) {
  return [
    `Understand the core foundations of ${course.category.toLowerCase()} through guided lessons and practical walkthroughs.`,
    `Build portfolio-ready work with step-by-step implementation support from ${course.instructor}.`,
    `Strengthen your ${course.level.toLowerCase()} skills with structured assignments and reusable workflows.`,
    `Leave with a clear next-step roadmap for advanced study, freelancing, or career growth.`,
  ];
}

function getCourseIncludes(course: Course) {
  return [
    "On-demand lesson access",
    `${course.duration} of structured learning`,
    "Downloadable practice resources",
    "Project-based curriculum",
    "Certificate-style completion path",
    "Protected full course access after login",
  ];
}

function getCourseRequirements(course: Course) {
  return [
    `A learner mindset suited for ${course.level.toLowerCase()} progress`,
    "A laptop or desktop with steady internet access",
    `Interest in ${course.category.toLowerCase()} and hands-on improvement`,
    "Time set aside for watching lessons and completing exercises",
  ];
}

function getSkillChips(course: Course) {
  const categorySkills: Record<string, string[]> = {
    Development: ["HTML", "CSS", "JavaScript", "React", "Deployment"],
    Design: ["Wireframing", "UI Systems", "Figma Thinking", "Accessibility", "Prototyping"],
    Marketing: ["SEO", "Campaign Strategy", "Analytics", "Content Planning", "Funnels"],
    Analytics: ["Dashboards", "SQL", "Reporting", "Data Cleaning", "Insights"],
    Branding: ["Positioning", "Messaging", "Audience Fit", "Visual Identity", "Storytelling"],
    Career: ["Focus Systems", "Teamwork", "Planning", "Execution", "Communication"],
  };

  return categorySkills[course.category] || [
    "Strategy",
    "Execution",
    "Projects",
    "Feedback",
    "Growth",
  ];
}

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
  const outcomes = getCourseOutcomes(course);
  const includes = getCourseIncludes(course);
  const requirements = getCourseRequirements(course);
  const skillChips = getSkillChips(course);

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
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Course Price
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {formatBdtPrice(course.price)}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {skillChips.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              What you&apos;ll learn
            </h2>
            <div className="mt-6 grid gap-4">
              {outcomes.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              Full course curriculum
            </h2>
            <ul className="mt-6 space-y-4">
              {curriculum.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0f766e] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-slate-950">
                        {item}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Designed for practical understanding and direct
                        application.
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Lesson
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f766e]">
              This Course Includes
            </p>
            <div className="mt-5 rounded-[1.5rem] bg-amber-50 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                Enrollment Price
              </p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">
                {formatBdtPrice(course.price)}
              </p>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-semibold text-[#0f766e]">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f766e]">
              Requirements
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-semibold text-amber-500">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/30 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              Instructor Spotlight
            </p>
            <h2 className="mt-4 text-2xl font-semibold">{course.instructor}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Learn directly from an instructor-led path focused on real
              workflow clarity, guided practice, and portfolio-strength
              outcomes.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-[1.4rem] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Format
                </p>
                <p className="mt-2 text-lg font-semibold">Recorded Lessons</p>
              </div>
              <div className="rounded-[1.4rem] bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Pace
                </p>
                <p className="mt-2 text-lg font-semibold">Self Guided</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
