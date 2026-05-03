import { NextResponse } from "next/server";

import {
  getDefaultDemoUser,
  getDemoSessionCookieName,
  serializeDemoUser,
} from "@/lib/demo-session";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { name?: string; image?: string }
    | null;

  const nextUser = {
    ...getDefaultDemoUser(),
    name: body?.name?.trim() || getDefaultDemoUser().name,
    image: body?.image?.trim() || getDefaultDemoUser().image,
  };

  const response = NextResponse.json({ success: true });
  response.cookies.set(getDemoSessionCookieName(), serializeDemoUser(nextUser), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
