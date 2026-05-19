"use client";

import { motion } from "framer-motion";

import { rateCards } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function RateCards() {
  return (
    <section className="section-tight bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="flex items-end justify-between gap-4" variants={itemFadeUp}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Live mortgage rates
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                  Today&apos;s indicative rates
                </h2>
              </div>
              <span className="text-xs text-slate-500">
                Updated daily. Final rates depend on profile.
              </span>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3">
              {rateCards.map((rate) => (
                <motion.div
                  key={rate.title}
                  variants={itemFadeUp}
                  whileHover={cardHover.hover}
                  initial="rest"
                  animate="rest"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                >
                  <div className="text-sm text-slate-500">{rate.title}</div>
                  <div className="mt-3 text-3xl font-semibold text-gold-500">
                    {rate.rate}
                  </div>
                  <div className="mt-2 text-xs text-slate-500">{rate.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
