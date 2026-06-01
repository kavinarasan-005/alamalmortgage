import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold leading-none transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out will-change-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-60 disabled:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-500 text-white shadow-[0_18px_40px_rgba(184,137,62,0.25)] hover:bg-gold-400 hover:shadow-[0_22px_50px_rgba(184,137,62,0.35)]",
        secondary:
          "border border-border bg-surface-2 text-foreground hover:bg-gold-500/10 hover:border-gold-500/30",
        outline:
          "border border-border-strong text-foreground hover:bg-surface-2",
        ghost: "text-foreground hover:bg-surface-2",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
