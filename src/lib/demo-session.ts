import { cookies } from "next/headers";

import { demoCredentials } from "@/lib/demo-credentials";

const DEMO_SESSION_COOKIE = "skillsphere_demo_session";

type DemoUser = {
  name: string;
  email: string;
  image?: string;
};

export function getDefaultDemoUser(): DemoUser {
  return {
    name: demoCredentials.name,
    email: demoCredentials.email,
    image: demoCredentials.image,
  };
}

export function serializeDemoUser(user: DemoUser) {
  return encodeURIComponent(JSON.stringify(user));
}

export function parseDemoUser(value: string | undefined) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(value)) as DemoUser;
  } catch {
    return null;
  }
}

export async function getDemoSession() {
  const cookieStore = await cookies();
  const rawValue = cookieStore.get(DEMO_SESSION_COOKIE)?.value;
  const demoUser = parseDemoUser(rawValue);

  if (!demoUser) {
    return null;
  }

  return {
    user: demoUser,
    session: {
      id: "demo-session",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: "demo-user",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      token: "demo-session-token",
    },
  };
}

export function getDemoSessionCookieName() {
  return DEMO_SESSION_COOKIE;
}
