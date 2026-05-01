import courses from "@/data/courses.json";
import type { Course } from "@/types/course";

const curriculum = [
  "Welcome and learning roadmap",
  "Core concepts and hands-on project setup",
  "Guided practice with real-world exercises",
  "Capstone implementation review",
  "Career tips and next-step resources",
];

async function delay() {
  await new Promise((resolve) => setTimeout(resolve, 300));
}

export async function getCourses() {
  await delay();
  return courses as Course[];
}

export async function getCourseById(id: number) {
  await delay();
  return (courses as Course[]).find((course) => course.id === id) ?? null;
}

export async function getPopularCourses() {
  const allCourses = await getCourses();
  return [...allCourses].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export async function getTrendingCourses() {
  const allCourses = await getCourses();
  return [...allCourses].sort((a, b) => b.id - a.id).slice(0, 4);
}

export function getCurriculum() {
  return curriculum;
}
