import { NextResponse } from "next/server";

import { demoCredentials } from "@/lib/demo-credentials";
import {
  getDefaultDemoUser,
  getDemoSessionCookieName,
  serializeDemoUser,
} from "@/lib/demo-session";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null;

  if (
    body?.email !== demoCredentials.email ||
    body?.password !== demoCredentials.password
  ) {
    return NextResponse.json(
      { message: "Use the prepared demo account to continue." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(getDemoSessionCookieName(), serializeDemoUser(getDefaultDemoUser()), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
