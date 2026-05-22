import { Resend } from "resend";

type SendArgs = {
  to: string;
  subject: string;
  text: string;
};

export type SendResult = {
  /** True when Resend env vars are present. */
  configured: boolean;
  /** True when the email was accepted by Resend. */
  delivered: boolean;
  /** Short machine-readable error tag for server-side diagnostics. */
  error?: string;
};

let cachedClient: Resend | null = null;

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!cachedClient) cachedClient = new Resend(key);
  return cachedClient;
}

export async function sendEmail({
  to,
  subject,
  text,
}: SendArgs): Promise<SendResult> {
  const client = getClient();
  const from = process.env.MAIL_FROM;

  if (!client || !from || !to) {
    // Dev-safe no-op: log the submission to the server console so it can
    // still be reviewed locally without RESEND_API_KEY configured.
    console.warn(
      "[email] Resend env vars missing — logging submission instead.",
    );
    console.warn("[email] to:", to || "(unset)");
    console.warn("[email] subject:", subject);
    console.warn("[email] body:\n" + text);
    return {
      configured: false,
      delivered: false,
      error: "not-configured",
    };
  }

  try {
    const result = await client.emails.send({ from, to, subject, text });
    if (result.error) {
      return {
        configured: true,
        delivered: false,
        error: result.error.message,
      };
    }
    return { configured: true, delivered: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    return { configured: true, delivered: false, error: message };
  }
}

export function formatSubmission(
  title: string,
  fields: Record<string, string | string[] | undefined>,
): string {
  const lines = [title, "=".repeat(title.length), ""];
  for (const [key, value] of Object.entries(fields)) {
    if (
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      continue;
    }
    const display = Array.isArray(value) ? value.join(", ") : value;
    lines.push(`${key}: ${display}`);
  }
  return lines.join("\n");
}
