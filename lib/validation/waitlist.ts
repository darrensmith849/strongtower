import { z } from "zod";

export const joiningAsOptions = [
  "individual",
  "parent",
  "church leader",
  "accountability partner",
  "donor",
  "technical volunteer",
] as const;

export const deviceOptions = [
  "iPhone",
  "Android",
  "Mac",
  "Windows",
  "router",
  "family network",
] as const;

export const interestLevelOptions = [
  "personal help",
  "family protection",
  "church pilot",
  "donor support",
  "technical help",
] as const;

export const countries = [
  "South Africa",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "Ireland",
  "Other",
] as const;

export const waitlistSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(80, "Too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  country: z
    .string()
    .min(1, "Country is required")
    .max(80, "Too long"),
  joiningAs: z.enum(joiningAsOptions, {
    message: "Tell us how you are joining",
  }),
  devices: z.array(z.enum(deviceOptions)).default([]),
  interestLevel: z.enum(interestLevelOptions, {
    message: "Tell us your level of interest",
  }),
  message: z.string().max(500, "Please keep it under 500 characters").optional().default(""),
  consent: z.literal(true, {
    message: "Please confirm you agree to be contacted",
  }),
  // Honeypot — should always be empty; the route silently 200s if filled
  website: z.string().optional().default(""),
});

export type WaitlistInput = z.input<typeof waitlistSchema>;
