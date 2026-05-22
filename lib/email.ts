import { Resend } from "resend";

type SendArgs = {
  to: string;
  subject: string;
  text: string;
};

export type SendResult =
  | { ok: true; delivered: boolean; reason?: string }
  | { ok: false; error: string };

let cachedClient: Resend | null = null;

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cachedClient) cachedClient = new Resend(key);
  return cachedClient;
}

export async function sendEmail({ to, subject, text }: SendArgs): Promise<SendResult> {
  const client = getClient();
  const from = process.env.MAIL_FROM;

  if (!client || !from) {
    // Dev-safe no-op: log to server console so submissions can still be reviewed
    // during local development without RESEND_API_KEY configured.
    console.warn(
      "[email] RESEND_API_KEY or MAIL_FROM missing — logging submission instead.",
    );
    console.warn("[email] to:", to);
    console.warn("[email] subject:", subject);
    console.warn("[email] body:\n" + text);
    return {
      ok: true,
      delivered: false,
      reason: "email-not-configured",
    };
  }

  try {
    const result = await client.emails.send({ from, to, subject, text });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true, delivered: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown email error";
    return { ok: false, error: message };
  }
}

export function formatSubmission(
  title: string,
  fields: Record<string, string | string[] | undefined>,
): string {
  const lines = [title, "=".repeat(title.length), ""];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) {
      continue;
    }
    const display = Array.isArray(value) ? value.join(", ") : value;
    lines.push(`${key}: ${display}`);
  }
  return lines.join("\n");
}
