"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function ProcessSteps() {
  return (
    <section className="section bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemFadeUp}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Our process
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Structured, transparent, and fast
              </h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemFadeUp}
                  whileHover={cardHover.hover}
                  initial="rest"
                  animate="rest"
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(7,17,32,0.35)]"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-gold-400">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
