import { getDashboardStats, getRecentApplications } from "@/lib/data";

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div
      className="rounded-xl p-6 text-white"
      style={{ backgroundColor: color }}
    >
      <p className="text-sm font-medium opacity-80">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

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

export default async function AdminDashboardPage() {
  const [stats, recent] = await Promise.all([
    getDashboardStats(),
    getRecentApplications(10),
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Jobs" value={stats.totalJobs} color="#0A1628" />
        <StatCard label="Open Jobs" value={stats.openJobs} color="#1A6CF6" />
        <StatCard
          label="Total Applications"
          value={stats.totalApplications}
          color="#7E22CE"
        />
        <StatCard
          label="New This Week"
          value={stats.recentApplications}
          color="#15803D"
        />
      </div>

      {/* Recent applications */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Recent Applications</h2>
        </div>
        {recent.length === 0 ? (
          <p className="px-6 py-8 text-sm text-gray-500 text-center">
            No applications yet.
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
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recent.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">
                      {app.name}
                    </td>
                    <td className="px-6 py-3 text-gray-600">{app.email}</td>
                    <td className="px-6 py-3 text-gray-600">
                      {app.job.title}
                    </td>
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
