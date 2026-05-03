import { NavbarClient } from "@/components/layout/navbar-client";
import { getServerSession } from "@/lib/session";

export async function Navbar() {
  const session = await getServerSession();

  return <NavbarClient session={session} />;
}
