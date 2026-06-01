"use client";

import { useEffect } from "react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

/**
 * Global motion provider. Honours the user's "reduce motion" OS setting for
 * every framer-motion animation in the tree. Persistent chrome (navbar,
 * footer) lives outside the page transition so it never re-mounts on route
 * changes.
 */
export function MotionProvider({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/**
 * Lightweight per-route enter transition. Keyed on the pathname so each page
 * fades/slides in on navigation. We intentionally avoid `AnimatePresence`
 * with `mode="wait"` here: in the App Router that pattern delays mounting the
 * new page until the old page's exit animation resolves, which can leave
 * navigation feeling unresponsive. A keyed enter-only animation is smooth and
 * never blocks clicks.
 */
export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Instantly reset scroll position to the very top whenever the route changes.
  // `behavior: "instant"` avoids the half-way-up artifact caused by smooth
  // scroll being applied before the new page has fully mounted.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
