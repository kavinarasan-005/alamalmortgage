"use client";

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface RevealProps extends PropsWithChildren {
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay }
      }
    >
      {children}
    </motion.div>
  );
}
