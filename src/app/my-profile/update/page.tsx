import { redirect } from "next/navigation";

import { ProfileUpdateForm } from "@/components/profile/profile-update-form";
import { getServerSession } from "@/lib/session";

export default async function UpdateProfilePage() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?redirect=/my-profile/update");
  }

  return (
    <div className="py-8">
      <ProfileUpdateForm
        defaultName={session.user.name || ""}
        defaultImage={session.user.image || ""}
      />
    </div>
  );
}
