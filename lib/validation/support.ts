import { z } from "zod";
import { countries } from "./waitlist";

export { countries };

export const supportInterestOptions = [
  "one-time gift",
  "monthly supporter",
  "sponsor a protected device",
  "sponsor a church pilot",
  "volunteer technical skills",
  "church or ministry partner",
] as const;

export const supportSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80, "Too long"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  country: z.string().min(1, "Country is required").max(80, "Too long"),
  interestType: z.enum(supportInterestOptions, {
    message: "Tell us how you would like to support",
  }),
  message: z
    .string()
    .max(500, "Please keep it under 500 characters")
    .optional()
    .default(""),
  consent: z.literal(true, {
    message: "Please confirm you agree to be contacted",
  }),
  website: z.string().optional().default(""),
});

export type SupportInput = z.input<typeof supportSchema>;
