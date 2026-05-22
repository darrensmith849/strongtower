"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  countries,
  deviceOptions,
  interestLevelOptions,
  joiningAsOptions,
  waitlistSchema,
  type WaitlistInput,
} from "@/lib/validation/waitlist";
import { CTAButton } from "@/components/primitives/CTAButton";
import { FormError, FormHelp, FormLabel, errorRing, inputClass } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function PilotWaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      email: "",
      country: "",
      devices: [],
      message: "",
      website: "",
    },
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const message = watch("message") ?? "";

  const onSubmit = async (data: WaitlistInput) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || body?.ok === false) {
        setErrorMessage(
          body?.error ?? "Something went wrong. Please try again shortly.",
        );
        setStatus("error");
        return;
      }
      reset();
      setStatus("success");
    } catch {
      setErrorMessage(
        "We could not reach the server. Please check your connection and try again.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <FormSuccess
        title="Thank you for joining the founding pilot."
        message="Your response has been received."
        paragraphs={[
          "We are gathering early pilot participants before deeper protection layers are built. We may contact you about next steps.",
          "In the meantime, please pray for this mission, read a guide or two, or share Strong Tower with someone who needs it.",
        ]}
        links={[
          { href: "/resources", label: "Read the resource hub" },
          { href: "/support", label: "Support the mission" },
          { href: "/for-churches", label: "For churches & ministries" },
        ]}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FormLabel htmlFor="firstName" required>First name</FormLabel>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className={cn("mt-2", inputClass, errors.firstName && errorRing)}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            {...register("firstName")}
          />
          <FormError id="firstName-error">{errors.firstName?.message}</FormError>
        </div>
        <div>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={cn("mt-2", inputClass, errors.email && errorRing)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FormError id="email-error">{errors.email?.message}</FormError>
        </div>
      </div>

      <div>
        <FormLabel htmlFor="country" required>Country</FormLabel>
        <select
          id="country"
          className={cn("mt-2", inputClass, errors.country && errorRing)}
          aria-invalid={!!errors.country}
          aria-describedby={errors.country ? "country-error" : undefined}
          defaultValue=""
          {...register("country")}
        >
          <option value="" disabled>Choose a country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <FormError id="country-error">{errors.country?.message}</FormError>
      </div>

      <fieldset>
        <FormLabel htmlFor="joiningAs" required>I am joining as</FormLabel>
        <select
          id="joiningAs"
          className={cn("mt-2", inputClass, errors.joiningAs && errorRing)}
          aria-invalid={!!errors.joiningAs}
          aria-describedby={errors.joiningAs ? "joiningAs-error" : undefined}
          defaultValue=""
          {...register("joiningAs")}
        >
          <option value="" disabled>Choose one</option>
          {joiningAsOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <FormError id="joiningAs-error">{errors.joiningAs?.message}</FormError>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-foreground">
          Devices needing protection
        </legend>
        <FormHelp>Select all that apply.</FormHelp>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {deviceOptions.map((device) => (
            <label
              key={device}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-2 text-sm text-foreground/85 transition-colors hover:border-border-gold hover:text-foreground has-[:checked]:border-border-gold has-[:checked]:bg-gold/[0.06] has-[:checked]:text-foreground"
            >
              <input
                type="checkbox"
                value={device}
                className="h-4 w-4 accent-gold"
                {...register("devices")}
              />
              {device}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <FormLabel htmlFor="interestLevel" required>Level of interest</FormLabel>
        <select
          id="interestLevel"
          className={cn("mt-2", inputClass, errors.interestLevel && errorRing)}
          aria-invalid={!!errors.interestLevel}
          aria-describedby={errors.interestLevel ? "interestLevel-error" : undefined}
          defaultValue=""
          {...register("interestLevel")}
        >
          <option value="" disabled>Choose one</option>
          {interestLevelOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <FormError id="interestLevel-error">{errors.interestLevel?.message}</FormError>
      </div>

      <div>
        <FormLabel htmlFor="message">Short message (optional)</FormLabel>
        <textarea
          id="message"
          rows={4}
          maxLength={500}
          className={cn("mt-2", inputClass, errors.message && errorRing)}
          aria-describedby="message-help"
          {...register("message")}
        />
        <FormHelp id="message-help">
          {message.length}/500 — anything you want us to know.
        </FormHelp>
        <FormError>{errors.message?.message}</FormError>
      </div>

      {/* Honeypot field — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground/85">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-gold"
            aria-invalid={!!errors.consent}
            {...register("consent")}
          />
          <span>
            I agree to be contacted about the Strong Tower pilot. I can ask to be removed
            at any time.
          </span>
        </label>
        <FormError>{errors.consent?.message}</FormError>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="rounded-md border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100"
        >
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We never log what you watched. We only collect what we need to walk with you.
        </p>
        <CTAButton type="submit" size="md" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Join the pilot"}
        </CTAButton>
      </div>
    </form>
  );
}
