"use client";

import { motion } from "framer-motion";

import { rateCards } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function RateCards() {
  return (
    <section className="section-tight bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="flex flex-wrap items-end justify-between gap-4" variants={itemFadeUp}>
              <div>
                <p className="eyebrow">
                  Live mortgage rates
                </p>
                <h2 className="mt-4 heading-2 font-semibold text-foreground">
                  Today&apos;s indicative rates
                </h2>
              </div>
              <span className="text-xs text-muted">
                Updated daily. Final rates depend on profile.
              </span>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {rateCards.map((rate) => (
                <motion.div
                  key={rate.title}
                  variants={itemFadeUp}
                  whileHover={cardHover.hover}
                  initial="rest"
                  animate="rest"
                  className="card card-pad-md transition-shadow duration-200 hover:shadow-card-hover"
                >
                  <div className="text-sm text-muted">{rate.title}</div>
                  <div className="mt-3 text-3xl font-semibold text-gold-500">
                    {rate.rate}
                  </div>
                  <div className="mt-2 text-xs text-muted">{rate.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
