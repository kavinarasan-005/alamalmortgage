"use client";

import { motion } from "framer-motion";

import { partners } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function Partners() {
  return (
    <section className="section-tight bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p className="text-xs uppercase tracking-[0.3em] text-gold-400" variants={itemFadeUp}>
              Trusted bank partners
            </motion.p>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-5">
              {partners.map((partner) => (
                <motion.div
                  key={partner}
                  variants={itemFadeUp}
                  whileHover={cardHover.hover}
                  initial="rest"
                  animate="rest"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(7,17,32,0.35)]"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
