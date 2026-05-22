import { z } from "zod";

export const contactSubjectOptions = [
  "general",
  "partnership",
  "press",
  "pastoral",
  "technical",
] as const;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120, "Too long"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  subject: z.enum(contactSubjectOptions, { message: "Please choose a subject" }),
  message: z
    .string()
    .min(1, "Please write a short message")
    .max(1000, "Please keep it under 1000 characters"),
  consent: z.literal(true, {
    message: "Please confirm you agree to be contacted",
  }),
  website: z.string().optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
