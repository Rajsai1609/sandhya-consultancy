import { notFound } from "next/navigation";
import { getApplicationById } from "@/lib/data";
import { updateApplicationStage, addApplicationNote } from "@/app/admin/actions";
import Link from "next/link";

const STAGES = ["new", "reviewing", "shortlisted", "rejected", "hired"];

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
      className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white capitalize"
      style={{ backgroundColor: color }}
    >
      {stage}
    </span>
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const app = await getApplicationById(id);
  if (!app) notFound();

  const updateStageWithId = updateApplicationStage.bind(null, app.id);
  const addNoteWithId = addApplicationNote.bind(null, app.id);

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/admin/applications" className="hover:underline text-blue-600">
          Applications
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{app.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Left: applicant details */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-1">{app.name}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Applied for{" "}
              <span className="font-medium text-gray-700">{app.job.title}</span>{" "}
              · {formatDate(app.createdAt)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-500 mb-0.5">Email</p>
                <a
                  href={`mailto:${app.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {app.email}
                </a>
              </div>
              {app.phone && (
                <div>
                  <p className="font-medium text-gray-500 mb-0.5">Phone</p>
                  <a href={`tel:${app.phone}`} className="text-gray-900">
                    {app.phone}
                  </a>
                </div>
              )}
              {app.resumeUrl && (
                <div>
                  <p className="font-medium text-gray-500 mb-0.5">Resume</p>
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          </div>

          {app.coverLetter && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-3">Cover Letter</h2>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {app.coverLetter}
              </p>
            </div>
          )}
        </div>

        {/* Right: stage + notes */}
        <div className="flex flex-col gap-4">
          {/* Stage */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-3">Stage</h2>
            <div className="mb-4">
              <StageBadge stage={app.stage} />
            </div>
            <form action={updateStageWithId} className="flex flex-col gap-2">
              <select
                name="stage"
                defaultValue={app.stage}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {STAGES.map((s) => (
                  <option key={s} value={s} className="capitalize">
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                Update Stage
              </button>
            </form>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900 mb-3">Notes</h2>
            {app.notes && (
              <p className="text-sm text-gray-700 mb-3 whitespace-pre-line">
                {app.notes}
              </p>
            )}
            <form action={addNoteWithId} className="flex flex-col gap-2">
              <textarea
                name="note"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                placeholder="Add a note..."
              />
              <button
                type="submit"
                className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "var(--brand-navy)" }}
              >
                Save Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
