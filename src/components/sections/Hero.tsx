"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LeadForm } from "@/components/sections/LeadForm";
import { cn } from "@/lib/utils";
import { ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="section-hero bg-hero relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 dark:opacity-20"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
      </div>
      <div className="relative z-10 container-base grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={itemFadeUp}>
            <Badge variant="gold" className="gap-2">
              <Sparkle className="h-3 w-3" />
              UAE Mortgage Specialists
            </Badge>
          </motion.div>
          <motion.h1 variants={itemFadeUp} className="heading-1 font-semibold tracking-tight">
            UAE mortgages made clear, fast, and bank-ready
          </motion.h1>
          <motion.p variants={itemFadeUp} className="text-lead">
            We compare 20+ UAE banks, package your file, and guide you from
            pre-approval to offer letter with clear next steps.
          </motion.p>
          <motion.div variants={itemFadeUp} className="flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={ctaPulse.hover} whileTap={{ scale: 0.98 }}>
              <Link
                href="/eligibility-checker"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                Get Pre-Qualified
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={ctaPulse.hover} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={itemFadeUp} className="grid gap-4 pt-4 sm:grid-cols-3">
            {[
              "24-48h pre-approval",
              "Clear rate comparisons",
              "One dedicated advisor",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.35 }}
                className="card-soft card-pad-sm text-sm text-muted"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/20 blur-2xl" />
          <LeadForm variant="hero" />
          <div className="mt-4 card card-pad-sm text-sm text-muted">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">
              Average approval time
            </div>
            <div className="mt-2 text-2xl font-semibold text-foreground">
              24-48 Hours
            </div>
            <div className="text-sm text-muted">
              With complete documentation and bank-ready packaging.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
