"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

import { navLinks } from "@/data/site";
import { services } from "@/data/services";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { cn } from "@/lib/utils";
import { itemFadeUp, staggerContainer } from "@/lib/motion";

const serviceLinks = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const servicesActive = pathname.startsWith("/services");

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
              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-menu"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={cn(
                        "relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors duration-200",
                        servicesActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                      {servicesActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gold-500"
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id="services-menu"
                          role="menu"
                          initial={
                            shouldReduceMotion
                              ? false
                              : { opacity: 0, y: 6 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2"
                        >
                          <div className="overflow-hidden rounded-2xl border border-border bg-[var(--header-bg)] shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-md">
                            <div className="flex flex-col p-2">
                              <Link
                                href="/services"
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className={cn(
                                  "rounded-xl px-3 py-2 text-[13px] font-medium transition-colors",
                                  pathname === "/services"
                                    ? "bg-gold-500/10 text-gold-500"
                                    : "text-foreground hover:bg-surface-2"
                                )}
                              >
                                All services
                              </Link>
                              <div className="my-1 h-px bg-border" />
                              {serviceLinks.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  role="menuitem"
                                  onClick={() => setServicesOpen(false)}
                                  className={cn(
                                    "rounded-xl px-3 py-2 text-[13px] font-medium transition-colors",
                                    pathname === service.href
                                      ? "bg-gold-500/10 text-gold-500"
                                      : "text-muted hover:bg-surface-2 hover:text-foreground"
                                  )}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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
              {navLinks.map((link) => {
                if (link.href === "/services") {
                  return (
                    <motion.div key={link.href} variants={itemFadeUp}>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        onClick={() =>
                          setMobileServicesOpen((prev) => !prev)
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-base font-medium transition-colors duration-200",
                          servicesActive
                            ? "bg-gold-500/10 text-gold-500"
                            : "text-foreground hover:bg-surface-2"
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-2 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
                              <Link
                                href="/services"
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                  pathname === "/services"
                                    ? "text-gold-500"
                                    : "text-muted hover:text-foreground"
                                )}
                              >
                                All services
                              </Link>
                              {serviceLinks.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setOpen(false)}
                                  className={cn(
                                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    pathname === service.href
                                      ? "text-gold-500"
                                      : "text-muted hover:text-foreground"
                                  )}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
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
                );
              })}

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
