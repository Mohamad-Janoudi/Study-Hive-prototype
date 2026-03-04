export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="h-8 w-72 animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-3 h-5 w-96 animate-pulse rounded-lg bg-slate-200" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className="h-48 animate-pulse rounded-2xl bg-slate-200" key={idx} />
        ))}
      </div>
    </div>
  );
}
