export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-ink-900">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-gold-500 border-t-transparent" />
        Loading your experience...
      </div>
    </div>
  );
}
