import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 transition duration-200 focus-visible:border-gold-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/30 focus-visible:shadow-[0_0_0_4px_rgba(184,137,62,0.12)]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
