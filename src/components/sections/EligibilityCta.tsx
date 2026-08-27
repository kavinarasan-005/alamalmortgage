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
              <p className="eyebrow">Value Proposition</p>
              <h2 className="heading-2 font-semibold">
                Expert Guidance to Remove the Guesswork from UAE Property Loans
              </h2>
              <p className="text-body">
                Navigating the UAE mortgage landscape can feel overwhelming with fluctuating interest rates, strict down payment rules, and complex bank paperwork. At Al Amal Mortgage, we simplify every phase of property financing.
Whether you are a first-time homebuyer in Dubai, an equity release adviser, or a business owner seeking commercial financing, our dedicated advisors act as your trusted advocate. We compare live rates across major UAE financial institutions to deliver tailored home loan solutions that match your financial goals.
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
