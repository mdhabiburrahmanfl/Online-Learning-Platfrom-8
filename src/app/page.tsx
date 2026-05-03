import Link from "next/link";

import { CourseCard } from "@/components/course/course-card";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPopularCourses, getTrendingCourses } from "@/lib/courses";

const learningTips = [
  {
    title: "Study in sprints",
    description:
      "Break lessons into focused 25-minute blocks and capture one actionable takeaway after each session.",
  },
  {
    title: "Build with what you learn",
    description:
      "Apply every new concept to a mini project so your portfolio grows alongside your confidence.",
  },
  {
    title: "Protect your calendar",
    description:
      "Schedule repeat learning slots each week and treat them like real meetings with your future self.",
  },
];

const instructors = [
  {
    name: "John Doe",
    specialty: "Full-Stack Systems",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sophia Lee",
    specialty: "Product Design",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ava Chen",
    specialty: "Growth Marketing",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ethan Walker",
    specialty: "Advanced Frontend",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
];

export default async function HomePage() {
  const [popularCourses, trendingCourses] = await Promise.all([
    getPopularCourses(),
    getTrendingCourses(),
  ]);

  return (
    <div className="space-y-24 pb-8">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 px-6 py-16 text-white shadow-2xl shadow-slate-300/40 sm:px-10 lg:px-14">
        <div className="absolute -right-24 -top-16 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="grid items-center gap-12 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
              Modern learning paths for ambitious builders
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Upgrade Your Skills Today and learn with real momentum.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Learn from industry experts, watch practical lessons, and enroll
                in curated programs across development, design, analytics, and
                marketing.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                Explore Courses
              </Link>
              <Link
                href="/register"
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Start Learning
              </Link>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Popular Courses"
          title="Top-rated programs students keep recommending"
          description="These three courses are currently leading the platform based on rating and learner excitement."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hover-lift-card rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Learning Tips"
            title="Simple habits that make online study stick"
            description="A strong system beats random motivation. These habits help learners stay consistent."
          />
        </div>
        <div className="grid gap-5">
          {learningTips.map((tip, index) => (
            <div
              key={tip.title}
              className="hover-lift-card rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-semibold text-amber-800">
                  0{index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {tip.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Top Instructors"
          title="Meet the mentors behind high-impact lessons"
          description="Skilled professionals bringing practical experience into every module."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {instructors.map((instructor) => (
            <article
              key={instructor.name}
              className="group hover-lift-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-semibold text-slate-950">
                  {instructor.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-[#0f766e]">
                  {instructor.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Trending Courses"
          title="Fresh releases shaping what learners explore next"
          description="Newly featured programs with practical, portfolio-driven outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} buttonLabel="See Course" />
          ))}
        </div>
      </section>
    </div>
  );
}
