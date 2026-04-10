import { z } from "zod";

// Accepts UK mobile/landline: +44XXXXXXXXXX or 07XXXXXXXXX or 01/02 landlines
const ukPhoneSchema = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val || val.trim() === "") return true;
      return /^(\+44|0)[0-9\s\-]{9,13}$/.test(val.trim());
    },
    { message: "Enter a valid UK phone number (e.g. +44 7700 900000 or 07700 900000)" }
  );

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: ukPhoneSchema,
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const jobApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: ukPhoneSchema,
  coverLetter: z.string().optional(),
});

export const resumeSubmissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: ukPhoneSchema,
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type JobApplicationData = z.infer<typeof jobApplicationSchema>;
export type ResumeSubmissionData = z.infer<typeof resumeSubmissionSchema>;
