import { NextResponse } from "next/server";

import { getDemoSessionCookieName } from "@/lib/demo-session";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(getDemoSessionCookieName(), "", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 0,
  });

  return response;
}
