import { createJob } from "@/app/admin/actions";
import JobFormFields from "@/components/admin/JobFormFields";

export default function NewJobPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Job</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <form action={createJob} className="flex flex-col gap-6">
          <JobFormFields />
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "var(--brand-blue)" }}
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
