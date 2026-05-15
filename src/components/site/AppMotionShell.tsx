"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

import { pageTransition } from "@/lib/motion";

export function AppMotionShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} variants={pageTransition} initial="initial" animate="animate" exit="exit" className="min-h-screen">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
