import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendEmail, formatSubmission } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const body = formatSubmission("Strong Tower — Contact form", {
    Name: parsed.data.name,
    Email: parsed.data.email,
    Subject: parsed.data.subject,
    Message: parsed.data.message,
    "Consent given": parsed.data.consent ? "yes" : "no",
    "Submitted at": new Date().toISOString(),
  });

  const to = process.env.MAIL_TO_CONTACT ?? "";
  const result = await sendEmail({
    to,
    subject: `Contact — ${parsed.data.subject} — ${parsed.data.name}`,
    text: body,
  });

  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "We could not send your submission. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    delivered: result.delivered,
  });
}
