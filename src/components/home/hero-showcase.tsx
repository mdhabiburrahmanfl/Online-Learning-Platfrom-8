"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useState } from "react";

const heroPhotos = [
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Students learning productively on laptops in a modern workspace",
    title: "Build real projects",
    tag: "Development Track",
    detail: "Hands-on lessons designed to turn tutorials into portfolio-ready work.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative designer working on an interface and visual layouts",
    title: "Design with clarity",
    tag: "Design Lab",
    detail: "UI systems, storytelling, and visual thinking packed into guided modules.",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Data and marketing dashboards shown on a professional desk setup",
    title: "Grow with strategy",
    tag: "Marketing Sprint",
    detail: "Learn the tools, analytics, and frameworks teams actually use to scale.",
  },
];

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateSlide = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % heroPhotos.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      rotateSlide();
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const activePhoto = heroPhotos[activeIndex];

  return (
    <div className="hover-dark-card animate__animated animate__fadeInRight rounded-[2.25rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-5">
      <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.2),_transparent_32%)]" />
        <div className="relative h-[24rem] sm:h-[28rem]">
          {heroPhotos.map((photo, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={photo.src}
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.06] opacity-0"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              </div>
            );
          })}

          <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">
            <div className="rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
              Live Learning Preview
            </div>
            <div className="hover-soft-card rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-3 text-right text-white backdrop-blur">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-200">
                Completion Rate
              </p>
              <p className="mt-2 text-2xl font-semibold">92%</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <div className="hover-soft-card max-w-md rounded-[1.75rem] border border-white/15 bg-slate-950/45 p-5 text-white backdrop-blur">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-amber-300">
                {activePhoto.tag}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[2rem]">
                {activePhoto.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {activePhoto.detail}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
        <div className="grid grid-cols-3 gap-3">
          {heroPhotos.map((photo, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={photo.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group hover-soft-card overflow-hidden rounded-[1.35rem] border transition ${
                  isActive
                    ? "border-amber-300 shadow-lg shadow-amber-300/20"
                    : "border-white/10 hover:border-white/25"
                }`}
                aria-label={`Show ${photo.title}`}
              >
                <div className="relative h-24">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 12vw"
                    className={`object-cover transition duration-500 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition ${
                      isActive
                        ? "bg-slate-950/15"
                        : "bg-slate-950/40 group-hover:bg-slate-950/25"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="hover-soft-card flex min-h-[8.5rem] flex-col items-center justify-center rounded-[1.4rem] bg-amber-300 px-3 py-4 text-center text-slate-950 sm:px-4">
            <p className="max-w-[5.8rem] text-balance text-[0.58rem] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-slate-700 sm:text-[0.62rem] md:text-[0.68rem]">
              Active Courses
            </p>
            <p className="mt-2 text-[2rem] font-semibold sm:text-[2.1rem]">
              120+
            </p>
          </div>
          <div className="hover-soft-card flex min-h-[8.5rem] flex-col items-center justify-center rounded-[1.4rem] bg-white/10 px-3 py-4 text-center text-white sm:px-4">
            <p className="max-w-[5.8rem] text-balance text-[0.58rem] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-slate-200 sm:text-[0.62rem] md:text-[0.68rem]">
              Expert Mentors
            </p>
            <p className="mt-2 text-[2rem] font-semibold sm:text-[2.1rem]">35</p>
          </div>
          <div className="hover-soft-card flex min-h-[8.5rem] flex-col items-center justify-center rounded-[1.4rem] bg-teal-400 px-3 py-4 text-center text-slate-950 sm:px-4">
            <p className="max-w-[5.8rem] text-balance text-[0.58rem] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-slate-700 sm:text-[0.62rem] md:text-[0.68rem]">
              Learner Support
            </p>
            <p className="mt-2 text-[2rem] font-semibold sm:text-[2.1rem]">
              24/7
            </p>
          </div>
          <div className="hover-soft-card flex min-h-[8.5rem] flex-col items-center justify-center rounded-[1.4rem] bg-white/10 px-3 py-4 text-center text-white sm:px-4">
            <p className="max-w-[5.8rem] text-balance text-[0.58rem] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-slate-200 sm:text-[0.62rem] md:text-[0.68rem]">
              Programs
            </p>
            <p className="mt-2 text-[2rem] font-semibold sm:text-[2.1rem]">8+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
