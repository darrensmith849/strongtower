"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  contactSubjectOptions,
  type ContactInput,
} from "@/lib/validation/contact";
import { CTAButton } from "@/components/primitives/CTAButton";
import { FormError, FormHelp, FormLabel, errorRing, inputClass } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const message = watch("message") ?? "";

  const onSubmit = async (data: ContactInput) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
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
        title="Thank you — your message has been sent."
        message="We read every message and will respond as soon as we can. For urgent pastoral matters, please also reach out to a trusted local pastor or church leader."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <div>
        <FormLabel htmlFor="name" required>Name</FormLabel>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={cn("mt-2", inputClass, errors.name && errorRing)}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        <FormError>{errors.name?.message}</FormError>
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
      <div>
        <FormLabel htmlFor="subject" required>Subject</FormLabel>
        <select
          id="subject"
          className={cn("mt-2", inputClass, errors.subject && errorRing)}
          aria-invalid={!!errors.subject}
          defaultValue=""
          {...register("subject")}
        >
          <option value="" disabled>Choose one</option>
          {contactSubjectOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <FormError>{errors.subject?.message}</FormError>
      </div>
      <div>
        <FormLabel htmlFor="message" required>Message</FormLabel>
        <textarea
          id="message"
          rows={6}
          maxLength={1000}
          className={cn("mt-2", inputClass, errors.message && errorRing)}
          aria-invalid={!!errors.message}
          aria-describedby="message-help"
          {...register("message")}
        />
        <FormHelp id="message-help">{message.length}/1000</FormHelp>
        <FormError>{errors.message?.message}</FormError>
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
            I agree to be contacted in reply to this message.
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
          We respect your privacy. See the Privacy promise for details.
        </p>
        <CTAButton type="submit" size="md" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </CTAButton>
      </div>
    </form>
  );
}
