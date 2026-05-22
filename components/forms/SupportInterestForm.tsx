"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  countries,
  supportInterestOptions,
  supportSchema,
  type SupportInput,
} from "@/lib/validation/support";
import { CTAButton } from "@/components/primitives/CTAButton";
import { FormError, FormHelp, FormLabel, errorRing, inputClass } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function SupportInterestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SupportInput>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      firstName: "",
      email: "",
      country: "",
      message: "",
      website: "",
    },
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const message = watch("message") ?? "";

  const onSubmit = async (data: SupportInput) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/support-interest", {
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
        title="Thank you for standing with this mission."
        message="We will be in touch as donation pathways open. Your willingness to help is itself an encouragement."
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
            {...register("firstName")}
          />
          <FormError>{errors.firstName?.message}</FormError>
        </div>
        <div>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={cn("mt-2", inputClass, errors.email && errorRing)}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FormError>{errors.email?.message}</FormError>
        </div>
      </div>

      <div>
        <FormLabel htmlFor="country" required>Country</FormLabel>
        <select
          id="country"
          className={cn("mt-2", inputClass, errors.country && errorRing)}
          aria-invalid={!!errors.country}
          defaultValue=""
          {...register("country")}
        >
          <option value="" disabled>Choose a country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <FormError>{errors.country?.message}</FormError>
      </div>

      <div>
        <FormLabel htmlFor="interestType" required>How would you like to support?</FormLabel>
        <select
          id="interestType"
          className={cn("mt-2", inputClass, errors.interestType && errorRing)}
          aria-invalid={!!errors.interestType}
          defaultValue=""
          {...register("interestType")}
        >
          <option value="" disabled>Choose one</option>
          {supportInterestOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <FormError>{errors.interestType?.message}</FormError>
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
      </div>

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
            I agree to be contacted about supporting Strong Tower. I can ask to be removed at any time.
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
          Payment processing is not live yet. We will not ask for card details.
        </p>
        <CTAButton type="submit" size="md" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Register interest"}
        </CTAButton>
      </div>
    </form>
  );
}
