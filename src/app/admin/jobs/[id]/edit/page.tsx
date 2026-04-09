export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateJob } from "@/app/admin/actions";
import JobFormFields from "@/components/admin/JobFormFields";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) notFound();

  const updateJobWithId = updateJob.bind(null, job.id);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Job</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <form action={updateJobWithId} className="flex flex-col gap-6">
          <JobFormFields defaults={job} />
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
