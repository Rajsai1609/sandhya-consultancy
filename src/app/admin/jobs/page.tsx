import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteJobButton from "@/components/admin/DeleteJobButton";

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  open: { bg: "#DCFCE7", text: "#15803D" },
  draft: { bg: "#FEF9C3", text: "#854D0E" },
  closed: { bg: "#F1F5F9", text: "#475569" },
};

function StatusBadge({ status }: { status: string }) {
  const colors = STATUS_COLORS[status] ?? { bg: "#F1F5F9", text: "#475569" };
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {status}
    </span>
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function AdminJobsPage() {
  const jobs = await prisma.job.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
        <Link
          href="/admin/jobs/new"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: "var(--brand-blue)" }}
        >
          + New Job
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {jobs.length === 0 ? (
          <p className="px-6 py-8 text-sm text-gray-500 text-center">
            No jobs yet.{" "}
            <Link href="/admin/jobs/new" className="text-blue-600 underline">
              Create one
            </Link>
            .
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Department</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Created</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">
                      {job.title}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {job.department || "—"}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {job.location || "—"}
                    </td>
                    <td className="px-6 py-3">
                      <StatusBadge status={job.status} />
                    </td>
                    <td className="px-6 py-3 text-gray-500">
                      {formatDate(job.createdAt)}
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/jobs/${job.id}/edit`}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          Edit
                        </Link>
                        <DeleteJobButton jobId={job.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
