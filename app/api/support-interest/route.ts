import { NextResponse } from "next/server";
import { supportSchema } from "@/lib/validation/support";
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

  const parsed = supportSchema.safeParse(payload);
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
  const submissionSource = source(request, "support");
  const ua = userAgent(request);
  const hashedIp = ipHash(request);

  const emailBody = formatSubmission("Strong Tower — Support interest", {
    "First name": parsed.data.firstName,
    Email: parsed.data.email,
    Country: parsed.data.country,
    "Interest type": parsed.data.interestType,
    Message: parsed.data.message || "(none)",
    "Consent given": parsed.data.consent ? "yes" : "no",
    Source: submissionSource,
    "Submitted at": submittedAt,
  });

  const [emailResult, sheetsResult] = await Promise.all([
    sendEmail({
      to: process.env.MAIL_TO_SUPPORT ?? "",
      subject: `Support interest — ${parsed.data.firstName} (${parsed.data.interestType})`,
      text: emailBody,
    }),
    appendRow(sheetTargets().support, [
      submittedAt,
      parsed.data.firstName,
      parsed.data.email,
      parsed.data.country,
      parsed.data.interestType,
      parsed.data.message ?? "",
      submissionSource,
      ua,
      hashedIp,
    ]),
  ]);

  return persistenceResponse(emailResult, sheetsResult);
}
