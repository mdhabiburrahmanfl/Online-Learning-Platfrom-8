import { auth } from "@/lib/auth";
import { demoCredentials } from "@/lib/demo-credentials";
import { getBaseUrl } from "@/lib/utils";

function getDemoHeaders() {
  const baseUrl = new URL(getBaseUrl());

  return new Headers({
    host: baseUrl.host,
    "x-forwarded-host": baseUrl.host,
    "x-forwarded-proto": baseUrl.protocol.replace(":", ""),
  });
}

export async function ensureDemoUser() {
  try {
    await auth.api.signUpEmail({
      body: demoCredentials,
      headers: getDemoHeaders(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message.toLowerCase() : String(error).toLowerCase();

    if (message.includes("exists") || message.includes("already")) {
      return;
    }

    throw error;
  }
}
