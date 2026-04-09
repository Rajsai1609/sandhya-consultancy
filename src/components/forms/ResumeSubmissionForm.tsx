"use client";

import { useState, useRef } from "react";
import { FaUpload, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTS = ".pdf,.doc,.docx";

type Status = "idle" | "loading" | "success" | "error";

export default function ResumeSubmissionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");
    if (!file) {
      setFileName("");
      return;
    }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setFileError("Only PDF, DOC, and DOCX files are accepted.");
      e.target.value = "";
      setFileName("");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError("File must be smaller than 5 MB.");
      e.target.value = "";
      setFileName("");
      return;
    }
    setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fileError) return;

    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/resume-submissions", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Submission failed. Please try again.");
      }

      setStatus("success");
      formRef.current?.reset();
      setFileName("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <FaCheckCircle size={48} style={{ color: "var(--brand-blue)" }} />
        <h3 className="text-xl font-bold" style={{ color: "var(--brand-navy)" }}>
          Resume Submitted!
        </h3>
        <p className="text-sm" style={{ color: "var(--brand-muted)" }}>
          Thank you for your interest. Our team will review your profile and
          reach out if there&apos;s a matching opportunity.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold underline"
          style={{ color: "var(--brand-blue)" }}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
            Full Name <span style={{ color: "var(--brand-blue)" }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
            Email Address <span style={{ color: "var(--brand-blue)" }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+1 (555) 000-0000"
          className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your skills, experience, or the type of role you're looking for..."
          className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-blue-100 transition resize-none"
        />
      </div>

      {/* Resume upload */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--brand-navy)" }}>
          Resume
        </label>
        <label
          className={`flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-lg border-2 border-dashed cursor-pointer transition-colors duration-200 ${
            fileError
              ? "border-red-400 bg-red-50"
              : "border-gray-200 hover:border-[var(--brand-blue)] hover:bg-blue-50"
          }`}
        >
          <FaUpload size={20} style={{ color: fileError ? "#EF4444" : "var(--brand-blue)" }} />
          <span className="text-sm text-center" style={{ color: "var(--brand-muted)" }}>
            {fileName ? (
              <span className="font-medium" style={{ color: "var(--brand-navy)" }}>
                {fileName}
              </span>
            ) : (
              <>
                <span className="font-medium" style={{ color: "var(--brand-blue)" }}>
                  Click to upload
                </span>{" "}
                or drag and drop
              </>
            )}
          </span>
          <span className="text-xs" style={{ color: "var(--brand-muted)" }}>
            PDF, DOC, DOCX — max 5 MB
          </span>
          <input
            type="file"
            name="file"
            accept={ACCEPTED_EXTS}
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {fileError && (
          <p className="flex items-center gap-1.5 text-xs text-red-500">
            <FaExclamationCircle size={12} /> {fileError}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
          <FaExclamationCircle size={14} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !!fileError}
        className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:opacity-90 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "var(--brand-blue)" }}
      >
        {status === "loading" ? (
          <>
            <FaSpinner className="animate-spin" size={14} />
            Submitting…
          </>
        ) : (
          "Submit Resume"
        )}
      </button>
    </form>
  );
}
