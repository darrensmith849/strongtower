import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendEmail, formatSubmission } from "@/lib/email";
import { appendRow, sheetTargets } from "@/lib/google-sheets";
import { ipHash, source, userAgent } from "@/lib/request-meta";
import { persistenceResponse } from "@/lib/persistence-response";

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

  const submittedAt = new Date().toISOString();
  const submissionSource = source(request, "contact");
  const ua = userAgent(request);
  const hashedIp = ipHash(request);

  const emailBody = formatSubmission("Strong Tower — Contact form", {
    Name: parsed.data.name,
    Email: parsed.data.email,
    Subject: parsed.data.subject,
    Message: parsed.data.message,
    "Consent given": parsed.data.consent ? "yes" : "no",
    Source: submissionSource,
    "Submitted at": submittedAt,
  });

  const [emailResult, sheetsResult] = await Promise.all([
    sendEmail({
      to: process.env.MAIL_TO_CONTACT ?? "",
      subject: `Contact — ${parsed.data.subject} — ${parsed.data.name}`,
      text: emailBody,
    }),
    appendRow(sheetTargets().contact, [
      submittedAt,
      parsed.data.name,
      parsed.data.email,
      parsed.data.subject,
      parsed.data.message,
      submissionSource,
      ua,
      hashedIp,
    ]),
  ]);

  return persistenceResponse(emailResult, sheetsResult);
}
