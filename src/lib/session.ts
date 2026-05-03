import { headers } from "next/headers";

import { isDemoAuthServer } from "@/lib/auth-mode";
import { getDemoSession } from "@/lib/demo-session";

export async function getServerSession() {
  if (isDemoAuthServer()) {
    return getDemoSession();
  }

  try {
    const { auth } = await import("@/lib/auth");

    return await auth.api.getSession({
      headers: await headers(),
    });
  } catch {
    return getDemoSession();
  }
}
