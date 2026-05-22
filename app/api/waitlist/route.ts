import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation/waitlist";
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

  const parsed = waitlistSchema.safeParse(payload);
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
    // Honeypot tripped — pretend success silently
    return NextResponse.json({ ok: true });
  }

  const submittedAt = new Date().toISOString();
  const submissionSource = source(request, "pilot");
  const ua = userAgent(request);
  const hashedIp = ipHash(request);

  const emailBody = formatSubmission("Strong Tower — Pilot waitlist signup", {
    "First name": parsed.data.firstName,
    Email: parsed.data.email,
    Country: parsed.data.country,
    "Joining as": parsed.data.joiningAs,
    Devices: parsed.data.devices,
    "Level of interest": parsed.data.interestLevel,
    Message: parsed.data.message || "(none)",
    "Consent given": parsed.data.consent ? "yes" : "no",
    Source: submissionSource,
    "Submitted at": submittedAt,
  });

  const [emailResult, sheetsResult] = await Promise.all([
    sendEmail({
      to: process.env.MAIL_TO_PILOT ?? "",
      subject: `Pilot waitlist — ${parsed.data.firstName} (${parsed.data.joiningAs})`,
      text: emailBody,
    }),
    appendRow(sheetTargets().pilot, [
      submittedAt,
      parsed.data.firstName,
      parsed.data.email,
      parsed.data.country,
      parsed.data.joiningAs,
      parsed.data.devices.join(", "),
      parsed.data.interestLevel,
      parsed.data.message ?? "",
      submissionSource,
      ua,
      hashedIp,
    ]),
  ]);

  return persistenceResponse(emailResult, sheetsResult);
}
