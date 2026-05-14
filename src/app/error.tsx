"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-ink-900">
      <div className="max-w-md space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <h2 className="text-2xl font-semibold text-slate-50">
          Something went wrong
        </h2>
        <p className="text-sm text-muted">
          Please refresh or try again. If the issue persists, contact our team.
        </p>
        <Button onClick={() => unstable_retry()}>Try again</Button>
        <p className="text-xs text-muted">
          Error reference: {error.digest ?? "N/A"}
        </p>
      </div>
    </div>
  );
}
