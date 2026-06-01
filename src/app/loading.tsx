export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-background py-12">
      <div className="container-base grid gap-6">
        <div className="h-10 w-56 animate-pulse rounded-full bg-surface-2" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card card-pad space-y-4">
            <div className="h-4 w-24 animate-pulse rounded-full bg-surface-2" />
            <div className="h-12 w-4/5 animate-pulse rounded-2xl bg-surface-2" />
            <div className="h-4 w-full animate-pulse rounded-full bg-surface-2" />
            <div className="h-4 w-5/6 animate-pulse rounded-full bg-surface-2" />
            <div className="flex gap-3 pt-4">
              <div className="h-12 w-40 animate-pulse rounded-full bg-surface-2" />
              <div className="h-12 w-44 animate-pulse rounded-full bg-surface-2" />
            </div>
          </div>
          <div className="card card-pad">
            <div className="h-80 animate-pulse rounded-2xl bg-surface-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
