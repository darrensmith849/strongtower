import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation/waitlist";
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

  const body = formatSubmission("Strong Tower — Pilot waitlist signup", {
    "First name": parsed.data.firstName,
    Email: parsed.data.email,
    Country: parsed.data.country,
    "Joining as": parsed.data.joiningAs,
    Devices: parsed.data.devices,
    "Level of interest": parsed.data.interestLevel,
    Message: parsed.data.message || "(none)",
    "Consent given": parsed.data.consent ? "yes" : "no",
    "Submitted at": new Date().toISOString(),
  });

  const to = process.env.MAIL_TO_PILOT ?? "";
  const result = await sendEmail({
    to,
    subject: `Pilot waitlist — ${parsed.data.firstName} (${parsed.data.joiningAs})`,
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
