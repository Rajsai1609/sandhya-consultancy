export default function Loading() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--brand-gray)" }}>
      {/* Navbar skeleton */}
      <div className="h-16 bg-white border-b border-gray-100 flex items-center px-6">
        <div className="h-6 w-32 rounded-md bg-gray-200 animate-pulse" />
        <div className="ml-auto flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 w-16 rounded-md bg-gray-200 animate-pulse" />
          ))}
        </div>
      </div>

      {/* Hero skeleton */}
      <div
        className="py-24 px-6 flex flex-col items-center gap-4"
        style={{ backgroundColor: "var(--brand-navy)" }}
      >
        <div className="h-10 w-96 max-w-full rounded-lg bg-white/10 animate-pulse" />
        <div className="h-5 w-72 max-w-full rounded-lg bg-white/10 animate-pulse" />
        <div className="mt-2 h-10 w-36 rounded-full bg-white/10 animate-pulse" />
      </div>

      {/* Content skeleton: 3 cards */}
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="h-7 w-48 rounded-lg bg-gray-300 animate-pulse mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 flex flex-col gap-3"
            >
              <div className="h-5 w-3/4 rounded-md bg-gray-200 animate-pulse" />
              <div className="h-4 w-full rounded-md bg-gray-100 animate-pulse" />
              <div className="h-4 w-5/6 rounded-md bg-gray-100 animate-pulse" />
              <div className="h-4 w-4/6 rounded-md bg-gray-100 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
