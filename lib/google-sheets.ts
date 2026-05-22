import { createSign } from "node:crypto";

/**
 * Zero-dependency Google Sheets append helper. Uses the service account
 * JWT-bearer OAuth flow (RFC 7523) to obtain an access token, then
 * appends rows via the Sheets REST API.
 *
 * Server-only. Never import this from a client component.
 */

export type AppendResult = {
  /** True when the env vars needed to talk to Sheets are present. */
  configured: boolean;
  /** True when a row was appended successfully. */
  saved: boolean;
  /** Short machine-readable error tag for server-side diagnostics. */
  error?: string;
};

const OAUTH_TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

type CachedToken = {
  token: string;
  expiresAt: number; // epoch seconds
};

let cachedToken: CachedToken | null = null;

function base64Url(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input) : input;
  return buf
    .toString("base64")
    .replace(/=+$/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function normalisePrivateKey(raw: string): string {
  // Vercel / .env files store the key with literal "\n" sequences.
  // PEM parsing needs real newlines.
  return raw.includes("\\n") ? raw.replace(/\\n/g, "\n") : raw;
}

function signJwt(clientEmail: string, privateKey: string): string {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: clientEmail,
    scope: SHEETS_SCOPE,
    aud: OAUTH_TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${base64Url(JSON.stringify(header))}.${base64Url(
    JSON.stringify(claim),
  )}`;
  const signature = createSign("RSA-SHA256")
    .update(unsigned)
    .sign(privateKey);
  return `${unsigned}.${base64Url(signature)}`;
}

async function getAccessToken(): Promise<{
  token: string | null;
  error?: string;
}> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  if (!clientEmail || !rawKey) {
    return { token: null, error: "not-configured" };
  }

  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.expiresAt - now > 60) {
    return { token: cachedToken.token };
  }

  let assertion: string;
  try {
    assertion = signJwt(clientEmail, normalisePrivateKey(rawKey));
  } catch (err) {
    return {
      token: null,
      error: err instanceof Error ? `jwt-sign:${err.message}` : "jwt-sign",
    };
  }

  let res: Response;
  try {
    res = await fetch(OAUTH_TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion,
      }),
    });
  } catch (err) {
    return {
      token: null,
      error: err instanceof Error ? `oauth-fetch:${err.message}` : "oauth-fetch",
    };
  }

  if (!res.ok) {
    return { token: null, error: `oauth-${res.status}` };
  }

  const data = (await res.json().catch(() => null)) as
    | { access_token?: string; expires_in?: number }
    | null;
  if (!data?.access_token) {
    return { token: null, error: "oauth-no-token" };
  }

  cachedToken = {
    token: data.access_token,
    expiresAt: now + (data.expires_in ?? 3600),
  };
  return { token: data.access_token };
}

export type SheetCell = string | number | boolean | null | undefined;

/**
 * Appends a single row to the given tab of the configured spreadsheet.
 * Returns gracefully — never throws to the caller — so a Sheets outage
 * cannot break a form submission.
 */
export async function appendRow(
  sheetName: string,
  values: SheetCell[],
): Promise<AppendResult> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!spreadsheetId || !clientEmail || !rawKey || !sheetName) {
    // Diagnostic: log which flags are present (booleans only — never values)
    // so we can pinpoint a missing env var in production. Remove after debug.
    console.warn("[sheets] not configured", {
      spreadsheetId: !!spreadsheetId,
      clientEmail: !!clientEmail,
      rawKey: !!rawKey,
      sheetName: !!sheetName,
    });
    return { configured: false, saved: false };
  }

  const { token, error: tokenError } = await getAccessToken();
  if (!token) {
    return { configured: true, saved: false, error: tokenError ?? "no-token" };
  }

  const range = `${encodeURIComponent(sheetName)}!A:Z`;
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}` +
    `/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [values.map((v) => (v == null ? "" : String(v)))],
      }),
    });
  } catch (err) {
    return {
      configured: true,
      saved: false,
      error:
        err instanceof Error ? `append-fetch:${err.message}` : "append-fetch",
    };
  }

  if (!res.ok) {
    // Invalidate cached token on 401 so the next call re-signs.
    if (res.status === 401) cachedToken = null;
    return { configured: true, saved: false, error: `append-${res.status}` };
  }

  return { configured: true, saved: true };
}

/** Names of the three target tabs, with sensible defaults. */
export function sheetTargets() {
  return {
    pilot: process.env.GOOGLE_SHEETS_PILOT_SHEET_NAME ?? "Pilot Waitlist",
    support:
      process.env.GOOGLE_SHEETS_SUPPORT_SHEET_NAME ?? "Support Interest",
    contact:
      process.env.GOOGLE_SHEETS_CONTACT_SHEET_NAME ?? "Contact Messages",
  };
}
