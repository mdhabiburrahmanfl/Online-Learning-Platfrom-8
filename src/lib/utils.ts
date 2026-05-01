import { clsx } from "clsx";

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs);
}

export function getBaseUrl() {
  return process.env.BETTER_AUTH_URL || "http://localhost:3000";
}
