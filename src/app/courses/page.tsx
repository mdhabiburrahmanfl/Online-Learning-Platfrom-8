import { CoursesExplorer } from "@/components/course/courses-explorer";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return <CoursesExplorer courses={courses} />;
}
