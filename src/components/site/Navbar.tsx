"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/data/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur",
        scrolled
          ? "border-white/12 bg-ink-900/92 shadow-[0_12px_40px_rgba(7,17,32,0.45)]"
          : "border-white/10 bg-ink-900/80"
      )}
      animate={{ y: 0 }}
      initial={false}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between container-pad">
        <Link href="/" className="flex items-center gap-2 transition hover:opacity-90">
          <span className="text-xl font-semibold text-slate-50">
            Al Amal Mortgage
          </span>
          <span className="hidden rounded-full border border-gold-500/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-400 sm:inline-flex">
            UAE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.div
            whileHover={shouldReduceMotion ? undefined : ctaPulse.hover}
            initial="rest"
            animate="rest"
          >
            <Link
              href="/eligibility-checker"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Get Pre-Qualified
            </Link>
          </motion.div>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : ctaPulse.hover}
            initial="rest"
            animate="rest"
          >
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        <motion.div whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="border-t border-white/10 bg-ink-900/95 lg:hidden"
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="flex flex-col gap-4 px-6 py-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemFadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-slate-200 transition duration-200 hover:translate-x-1 hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div className="flex flex-col gap-3 pt-4" variants={itemFadeUp}>
                <Link
                  href="/eligibility-checker"
                  className={cn(buttonVariants({ variant: "outline" }))}
                  onClick={() => setOpen(false)}
                >
                  Get Pre-Qualified
                </Link>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "primary" }))}
                  onClick={() => setOpen(false)}
                >
                  Book Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
