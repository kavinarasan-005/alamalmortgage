"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/data/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink-900/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between container-pad">
        <Link href="/" className="flex items-center gap-2">
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
              className="text-sm text-slate-200 transition hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/eligibility-checker"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Get Pre-Qualified
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
          >
            Book Consultation
          </Link>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-ink-900/95 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-slate-200 transition hover:text-gold-400"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/eligibility-checker"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Get Pre-Qualified
                </Link>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "primary" }))}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
