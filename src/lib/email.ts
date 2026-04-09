import nodemailer from "nodemailer";
import type { ContactFormData, JobApplicationData, ResumeSubmissionData } from "./validators";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const from = process.env.EMAIL_FROM!;

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await transporter.sendMail({
    from,
    to: process.env.EMAIL_TO_CONTACT,
    subject: `New Contact Inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}

export async function sendJobApplicationEmail(
  data: JobApplicationData,
  jobTitle: string
): Promise<void> {
  await transporter.sendMail({
    from,
    to: process.env.EMAIL_TO_CAREERS,
    subject: `New Application for ${jobTitle} — ${data.name}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Position:</strong> ${jobTitle}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${
        data.coverLetter
          ? `<p><strong>Cover Letter:</strong></p><p>${data.coverLetter.replace(/\n/g, "<br>")}</p>`
          : ""
      }
    `,
  });
}

export async function sendResumeSubmissionEmail(
  data: ResumeSubmissionData
): Promise<void> {
  await transporter.sendMail({
    from,
    to: process.env.EMAIL_TO_CAREERS,
    subject: `Resume Submission from ${data.name}`,
    html: `
      <h2>New Resume Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      ${
        data.message
          ? `<p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, "<br>")}</p>`
          : ""
      }
    `,
  });
}
