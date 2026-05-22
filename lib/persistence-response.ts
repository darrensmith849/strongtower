import { NextResponse } from "next/server";
import type { SendResult } from "./email";
import type { AppendResult } from "./google-sheets";

/**
 * Decide the HTTP response for a form submission based on the results
 * of the two persistence paths (email + sheets). The contract:
 *
 *  - If neither is configured, return 200 with both flags false.
 *    Submissions are still logged to the server console by sendEmail.
 *  - If at least one configured path succeeded, return 200 with the
 *    individual flags so the caller can see what landed.
 *  - Only return 502 when every configured path failed — i.e. the
 *    submission would otherwise be lost.
 */
export function persistenceResponse(
  emailResult: SendResult,
  sheetsResult: AppendResult,
): NextResponse {
  const anyConfigured = emailResult.configured || sheetsResult.configured;
  const anySucceeded = emailResult.delivered || sheetsResult.saved;

  if (anyConfigured && !anySucceeded) {
    // Diagnostics only — never sent to the client.
    console.warn(
      "[persistence] all configured paths failed",
      JSON.stringify({
        email: emailResult.configured ? emailResult.error ?? "unknown" : "off",
        sheets: sheetsResult.configured
          ? sheetsResult.error ?? "unknown"
          : "off",
      }),
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not save your submission. Please try again in a few minutes, or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    delivered: emailResult.delivered,
    saved: sheetsResult.saved,
  });
}
