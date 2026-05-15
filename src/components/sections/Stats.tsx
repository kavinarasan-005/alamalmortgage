"use client";

import { stats } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function Stats() {
  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <motion.div
            className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:grid-cols-2 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemFadeUp}
                whileHover={cardHover.hover}
                initial="rest"
                animate="rest"
                className="space-y-2 rounded-2xl p-2"
              >
                <div className="text-3xl font-semibold text-slate-50">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
