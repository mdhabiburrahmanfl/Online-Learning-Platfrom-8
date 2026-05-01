import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/login-form";
import { getServerSession } from "@/lib/session";

type LoginPageProps = {
  searchParams: Promise<{ redirect?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  const { redirect: redirectTo } = await searchParams;

  return (
    <div className="flex flex-1 items-center justify-center py-10">
      <LoginForm redirectTo={redirectTo || "/"} />
    </div>
  );
}
