import { redirect } from "next/navigation";

import { RegisterForm } from "@/components/auth/register-form";
import { getServerSession } from "@/lib/session";

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="flex flex-1 items-center justify-center py-10">
      <RegisterForm />
    </div>
  );
}
