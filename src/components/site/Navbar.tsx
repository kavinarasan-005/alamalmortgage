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
import { ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-[var(--header-bg)] backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
      )}
      animate={{ y: 0 }}
      initial={false}
      transition={{ duration: 0.2 }}
    >
      <div className="hidden border-b border-border/70 lg:block">
        <div className="container-base flex items-center justify-end gap-4 py-2 text-xs text-muted">
          <a
            href="tel:+97142545150"
            className="inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5 text-gold-500" />
            +971 4 254 5150
          </a>
          <span className="h-4 w-px bg-border" aria-hidden />
          <a
            href="tel:+971554701475"
            className="inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5 text-gold-500" />
            +971 55 470 1475
          </a>
          <span className="h-4 w-px bg-border" aria-hidden />
          <a
            href="mailto:info@alamalmortgage.com"
            className="inline-flex items-center gap-2 transition hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5 text-gold-500" />
            info@alamalmortgage.com
          </a>
        </div>
      </div>

      <div className="container-base">
        <div className="flex h-18 items-center gap-6 py-3 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 whitespace-nowrap transition hover:opacity-90"
          >
            <Image
              src="/brand/al-amal-logo.png"
              alt="Al Amal Mortgage"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full border border-border bg-white object-contain"
            />
            <span className="flex flex-col">
              <span className="text-[18px] font-semibold leading-[1.1] text-foreground">
                Al Amal Mortgage
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] leading-[1.3] text-muted">
                UAE Mortgage Advisory
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold-500"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 border-l border-border pl-4 lg:flex">
            <ThemeToggle />
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

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <motion.div whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}>
              <Button
                variant="ghost"
                size="sm"
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="overflow-hidden border-t border-border bg-[var(--header-bg)] backdrop-blur-md lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
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
                  href="tel:+97142545150"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  +971 4 254 5150
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
