import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-muted transition duration-200 focus-visible:border-gold-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:shadow-[0_0_0_4px_rgba(200,169,107,0.12)]",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
