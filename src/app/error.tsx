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
    <div className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="max-w-md space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
        <h2 className="text-2xl font-semibold text-slate-900">
          Something went wrong
        </h2>
        <p className="text-sm text-slate-600">
          Please refresh or try again. If the issue persists, contact our team.
        </p>
        <Button onClick={() => unstable_retry()}>Try again</Button>
        <p className="text-xs text-slate-500">
          Error reference: {error.digest ?? "N/A"}
        </p>
      </div>
    </div>
  );
}
