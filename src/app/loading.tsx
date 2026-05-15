export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-ink-900 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-6 container-pad">
        <div className="h-10 w-56 animate-pulse rounded-full bg-white/8" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />
            <div className="h-12 w-4/5 animate-pulse rounded-2xl bg-white/10" />
            <div className="h-4 w-full animate-pulse rounded-full bg-white/8" />
            <div className="h-4 w-5/6 animate-pulse rounded-full bg-white/8" />
            <div className="flex gap-3 pt-4">
              <div className="h-12 w-40 animate-pulse rounded-full bg-white/10" />
              <div className="h-12 w-44 animate-pulse rounded-full bg-white/8" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-80 animate-pulse rounded-2xl bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  );
}
