import Database from "better-sqlite3";
import { betterAuth } from "better-auth";

import { isDemoAuthServer } from "@/lib/auth-mode";
import { getBaseUrl } from "@/lib/utils";

const database = isDemoAuthServer() ? undefined : new Database("skillsphere.db");

const socialProviders =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          prompt: "select_account" as const,
        },
      }
    : undefined;

export const auth = betterAuth({
  ...(database ? { database } : {}),
  baseURL: getBaseUrl(),
  secret: process.env.BETTER_AUTH_SECRET || "development-secret-change-me",
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders,
  trustedOrigins: [getBaseUrl()],
});
