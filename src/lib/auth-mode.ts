export function isDemoAuthServer() {
  return process.env.VERCEL === "1";
}

export function isDemoAuthClient() {
  if (typeof window === "undefined") {
    return false;
  }

  return !["localhost", "127.0.0.1"].includes(window.location.hostname);
}
