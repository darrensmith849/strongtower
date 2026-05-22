import { NextResponse } from "next/server";
import { supportSchema } from "@/lib/validation/support";
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

  const body = formatSubmission("Strong Tower — Support interest", {
    "First name": parsed.data.firstName,
    Email: parsed.data.email,
    Country: parsed.data.country,
    "Interest type": parsed.data.interestType,
    Message: parsed.data.message || "(none)",
    "Consent given": parsed.data.consent ? "yes" : "no",
    "Submitted at": new Date().toISOString(),
  });

  const to = process.env.MAIL_TO_SUPPORT ?? "";
  const result = await sendEmail({
    to,
    subject: `Support interest — ${parsed.data.firstName} (${parsed.data.interestType})`,
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
