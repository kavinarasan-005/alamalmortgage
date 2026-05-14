import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100 placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
