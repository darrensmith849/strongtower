import { createHash } from "node:crypto";

/**
 * Server-only helpers for extracting non-sensitive request metadata
 * to attach to form submissions. We deliberately do not store raw IP
 * addresses — only a salted, truncated SHA-256 hash useful for spam
 * de-duplication but not for forensic identification.
 *
 * The salt is a constant project-local string. Rotating it (by editing
 * this file) invalidates older hashes — fine for the current Phase 2
 * use case where Sheets rows are reviewed by hand.
 */

const IP_HASH_SALT = "strong-tower-v1";
const USER_AGENT_MAX_LENGTH = 200;

/** Pulls the first client IP from the standard proxy headers, if present. */
function clientIp(request: Request): string | null {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return null;
}

/**
 * Returns a 16-char hex hash of the client IP combined with a static
 * salt. Returns an empty string when no IP header is present. Never
 * returns or logs the raw IP.
 */
export function ipHash(request: Request): string {
  const ip = clientIp(request);
  if (!ip) return "";
  return createHash("sha256")
    .update(IP_HASH_SALT)
    .update(":")
    .update(ip)
    .digest("hex")
    .slice(0, 16);
}

/** Returns a truncated user-agent string, or empty if absent. */
export function userAgent(request: Request): string {
  const ua = request.headers.get("user-agent") ?? "";
  return ua.slice(0, USER_AGENT_MAX_LENGTH);
}

/**
 * A coarse "where did this submission come from" label, useful when
 * the same Sheet is fed from multiple deployments (preview vs prod).
 * Falls back to the form name when no host header is present.
 */
export function source(request: Request, formName: string): string {
  const host = request.headers.get("host");
  return host ? `${host}/${formName}` : formName;
}
