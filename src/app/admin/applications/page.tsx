export const dynamic = "force-dynamic";

import Link from "next/link";
import { getAllApplications } from "@/lib/data";
import type { Prisma } from "@prisma/client";

type ApplicationWithJob = Prisma.JobApplicationGetPayload<{
  include: { job: true };
}>;

const STAGES = ["all", "new", "reviewing", "shortlisted", "rejected", "hired"];

const STAGE_COLORS: Record<string, string> = {
  new: "#1A6CF6",
  reviewing: "#D97706",
  shortlisted: "#7E22CE",
  rejected: "#DC2626",
  hired: "#15803D",
};

function StageBadge({ stage }: { stage: string }) {
  const color = STAGE_COLORS[stage] ?? "#6B7280";
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white capitalize"
      style={{ backgroundColor: color }}
    >
      {stage}
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

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ stage?: string }>;
}) {
  const { stage: stageParam } = await searchParams;
  const activeStage = STAGES.includes(stageParam ?? "") ? (stageParam ?? "all") : "all";

  const all = await getAllApplications();

  const filtered: ApplicationWithJob[] =
    activeStage === "all"
      ? all
      : all.filter((a) => a.stage === activeStage);

  const countByStage = Object.fromEntries(
    STAGES.map((s) => [
      s,
      s === "all" ? all.length : all.filter((a) => a.stage === s).length,
    ])
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Applications</h1>

      {/* Stage filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {STAGES.map((s) => (
          <Link
            key={s}
            href={s === "all" ? "/admin/applications" : `/admin/applications?stage=${s}`}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors capitalize"
            style={{
              backgroundColor: activeStage === s ? "var(--brand-blue)" : "#E2E8F0",
              color: activeStage === s ? "#fff" : "#475569",
            }}
          >
            {s}
            <span
              className="rounded-full px-1.5 py-0.5 text-xs"
              style={{
                backgroundColor: activeStage === s ? "rgba(255,255,255,0.25)" : "#CBD5E1",
                color: activeStage === s ? "#fff" : "#475569",
              }}
            >
              {countByStage[s]}
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {filtered.length === 0 ? (
          <p className="px-6 py-8 text-sm text-gray-500 text-center">
            No applications in this stage.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Job Title</th>
                  <th className="px-6 py-3">Stage</th>
                  <th className="px-6 py-3">Date Applied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3">
                      <Link
                        href={`/admin/applications/${app.id}`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {app.name}
                      </Link>
                    </td>
                    <td className="px-6 py-3 text-gray-600">{app.email}</td>
                    <td className="px-6 py-3 text-gray-600">{app.job.title}</td>
                    <td className="px-6 py-3">
                      <StageBadge stage={app.stage} />
                    </td>
                    <td className="px-6 py-3 text-gray-500">
                      {formatDate(app.createdAt)}
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
