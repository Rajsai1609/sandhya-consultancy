"use client";

import { deleteJob } from "@/app/admin/actions";

export default function DeleteJobButton({ jobId }: { jobId: string }) {
  async function handleClick() {
    if (!window.confirm("Delete this job?")) return;
    await deleteJob(jobId);
  }

  return (
    <button
      onClick={handleClick}
      className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
    >
      Delete
    </button>
  );
}
