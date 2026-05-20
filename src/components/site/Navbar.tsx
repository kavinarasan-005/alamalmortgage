"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";

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
        "sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur",
        scrolled && "shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
      )}
      animate={{ y: 0 }}
      initial={false}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto max-w-6xl container-pad">
        <div className="hidden items-center justify-end gap-4 py-2 text-xs text-slate-600 lg:flex">
          <a
            href="tel:+97142545150"
            className="inline-flex items-center gap-2 transition hover:text-slate-900"
          >
            <Phone className="h-3.5 w-3.5 text-gold-500" />
            Landline: +971 4 254 5150
          </a>
          <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
          <a
            href="tel:+971554701475"
            className="inline-flex items-center gap-2 transition hover:text-slate-900"
          >
            <Phone className="h-3.5 w-3.5 text-gold-500" />
            Mobile: +971 55 470 1475
          </a>
          <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
          <a
            href="mailto:info@alamalmortgage.com"
            className="inline-flex items-center gap-2 transition hover:text-slate-900"
          >
            <Mail className="h-3.5 w-3.5 text-gold-500" />
            info@alamalmortgage.com
          </a>
        </div>
        <div className="flex h-20 items-center gap-8">
          <Link href="/" className="flex items-center gap-4 whitespace-nowrap transition hover:opacity-90">
            <Image
              src="/brand/al-amal-logo.png"
              alt="Al Amal Mortgage"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full border border-slate-200 bg-white object-contain"
            />
            <div className="flex flex-col">
              <span className="text-[19px] font-semibold leading-[1.1] text-slate-900">
                Al Amal Mortgage
              </span>
              <span className="text-[12px] uppercase tracking-[0.22em] leading-[1.2] text-slate-500">
                UAE Mortgage Advisory
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
            <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm leading-none text-slate-600 transition duration-200 hover:text-slate-900 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            </nav>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4 whitespace-nowrap">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : ctaPulse.hover}
                initial="rest"
                animate="rest"
              >
                <Link
                  href="/eligibility-checker"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "h-10 leading-none"
                  )}
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
                  className={cn(
                    buttonVariants({ variant: "primary", size: "sm" }),
                    "h-10 leading-none"
                  )}
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="border-t border-slate-200 bg-white/95 lg:hidden"
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
              <motion.div
                variants={itemFadeUp}
                className="flex flex-col gap-2 text-sm text-slate-600"
              >
                <a
                  href="tel:+97142545150"
                  className="inline-flex items-center gap-2 hover:text-slate-900"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  Landline: +971 4 254 5150
                </a>
                <a
                  href="tel:+971554701475"
                  className="inline-flex items-center gap-2 hover:text-slate-900"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  Mobile: +971 55 470 1475
                </a>
                <a
                  href="mailto:info@alamalmortgage.com"
                  className="inline-flex items-center gap-2 hover:text-slate-900"
                >
                  <Mail className="h-4 w-4 text-gold-500" />
                  info@alamalmortgage.com
                </a>
              </motion.div>
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemFadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-slate-700 transition duration-200 hover:translate-x-1 hover:text-slate-900"
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
