"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ctaPulse, imageHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="bg-hero">
      <div className="mx-auto grid max-w-6xl items-center gap-12 py-20 container-pad lg:grid-cols-[1.1fr_0.9fr]">
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
          <motion.h1 variants={itemFadeUp} className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Unlock Your Dream Property with UAE&apos;s Trusted Mortgage Experts
          </motion.h1>
          <motion.p variants={itemFadeUp} className="text-lg text-muted">
            Premium mortgage advisory for residents and global investors. We
            compare leading UAE banks, structure your file, and secure approvals
            with speed and transparency.
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
              "Fast approvals",
              "Transparent process",
              "Dedicated advisor",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.35 }}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gold-500/20 blur-2xl" />
          <motion.div className="glass-card relative overflow-hidden rounded-3xl p-3" initial="rest" whileHover="hover" animate="rest" variants={imageHover}>
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
              alt="Dubai skyline"
              width={720}
              height={840}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </motion.div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-ink-800/90 px-6 py-4 shadow-lg lg:absolute lg:-bottom-6 lg:left-8 lg:right-8 lg:mt-0">
            <div className="text-xs uppercase tracking-[0.2em] text-gold-400">
              Average approval time
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-50">
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
