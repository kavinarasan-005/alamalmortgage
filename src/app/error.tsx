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
      <div className="card card-pad max-w-md space-y-4 text-center">
        <h2 className="heading-3 font-semibold text-slate-900">
          Something went wrong
        </h2>
        <p className="text-body">
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
