"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

export function EligibilityCta() {
  return (
    <section className="section-tight bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="card card-pad grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="space-y-4" variants={itemFadeUp}>
              <p className="eyebrow">Free eligibility check</p>
              <h2 className="heading-2 font-semibold">
                Find out if you qualify in under 2 minutes
              </h2>
              <p className="text-body">
                Answer a few quick questions about your income, residency, and
                property goals — our advisors will call you with personalised
                mortgage options.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                {[
                  { icon: Clock, text: "Takes 2 minutes" },
                  { icon: ShieldCheck, text: "No documents needed" },
                  { icon: CheckCircle2, text: "Free & no obligation" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 text-sm text-muted"
                  >
                    <Icon className="h-4 w-4 text-gold-500" />
                    {text}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 text-center lg:items-end lg:text-right"
              variants={itemFadeUp}
            >
              <motion.div whileHover={ctaPulse.hover} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/eligibility-checker"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "gap-2"
                  )}
                >
                  Check My Eligibility
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <p className="text-xs text-muted">
                Advisors respond within 30 minutes during working hours
              </p>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
