"use client";

import { motion } from "framer-motion";

import { trustSignals } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function WhyChooseUs() {
  return (
    <section className="section bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="space-y-4" variants={itemFadeUp}>
              <p className="eyebrow">
                Why choose Al Amal
              </p>
              <h2 className="heading-2 font-semibold">
                Advice that removes the guesswork
              </h2>
              <p className="text-body">
                We compare real bank offers, explain the trade-offs, and keep
                paperwork moving so you can close on time.
              </p>
            </motion.div>
            <div className="grid gap-4">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <motion.div
                    key={signal.title}
                    variants={itemFadeUp}
                    whileHover={cardHover.hover}
                    initial="rest"
                    animate="rest"
                    className="card card-pad-md transition-shadow duration-200 hover:shadow-card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {signal.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
