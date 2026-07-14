"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { cn } from "@/lib/utils";
import { itemFadeUp, staggerContainer } from "@/lib/motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-[var(--header-bg)] backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-[0_8px_24px_rgba(15,23,42,0.10)]" : "shadow-none"
      )}
      initial={shouldReduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Top contact bar – visible from lg ── */}
      <div className="hidden border-b border-border/60 lg:block">
        <div className="container-base flex items-center justify-end gap-4 py-1.5">
          <a
            href="tel:8002060"
            className="inline-flex items-center gap-1.5 text-[11px] text-muted transition-colors hover:text-foreground"
          >
            <Phone className="h-3 w-3 text-gold-500" />
            Call: 800-2060
          </a>
          <span className="h-3.5 w-px bg-border" aria-hidden />
          <a
            href="tel:+971554701475"
            className="inline-flex items-center gap-1.5 text-[11px] text-muted transition-colors hover:text-foreground"
          >
            <Phone className="h-3 w-3 text-gold-500" />
            <span className="hidden xl:inline">Mobile: </span>
            +971 55 470 1475
          </a>
          <span className="h-3.5 w-px bg-border" aria-hidden />
          <a
            href="mailto:info@alamalmortgage.com"
            className="inline-flex items-center gap-1.5 text-[11px] text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-3 w-3 text-gold-500" />
            <span className="hidden xl:inline">info@alamalmortgage.com</span>
            <span className="xl:hidden">Email us</span>
          </a>
        </div>
      </div>

      {/* ── Main nav row ── */}
      <div className="container-base">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap transition-opacity hover:opacity-90"
          >
            <Image
              src="/brand/al-amal-logo.png"
              alt="Al Amal Mortgage"
              width={44}
              height={44}
              priority
              className="h-10 w-10 rounded-full border border-border bg-white object-contain"
            />
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground">
                Al Amal Mortgage
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.22em] leading-[1.4] text-muted">
                UAE Mortgage Advisory
              </span>
            </span>
          </Link>

          {/* Desktop nav links – visible from lg (1024 px) */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gold-500"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs – visible from lg */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <ThemeToggle />
            <span className="h-6 w-px bg-border" aria-hidden />
            <Link
              href="/eligibility-checker"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "h-9 px-3 text-[13px] leading-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 xl:px-4"
              )}
            >
              <span className="hidden xl:inline">Get Pre-Qualified</span>
              <span className="xl:hidden">Pre-Qualify</span>
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "h-9 px-3 text-[13px] leading-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 xl:px-4"
              )}
            >
              <span className="hidden xl:inline">Book Consultation</span>
              <span className="xl:hidden">Book Now</span>
            </Link>
          </div>

          {/* Mobile toggle – hidden from lg */}
          <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="transition-transform active:scale-95"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer – hidden from lg ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="overflow-hidden border-t border-border bg-[var(--header-bg)] backdrop-blur-md lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex flex-col gap-1 px-6 py-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemFadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-base font-medium transition-colors duration-200",
                      isActive(link.href)
                        ? "bg-gold-500/10 text-gold-500"
                        : "text-foreground hover:bg-surface-2"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={itemFadeUp}
                className="mt-4 flex flex-col gap-3 border-t border-border pt-4"
              >
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

              <motion.div
                variants={itemFadeUp}
                className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted"
              >
                <a
                  href="tel:8002060"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  Call: 800-2060
                </a>
                <a
                  href="tel:+971554701475"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  +971 55 470 1475
                </a>
                <a
                  href="mailto:info@alamalmortgage.com"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-gold-500" />
                  info@alamalmortgage.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
