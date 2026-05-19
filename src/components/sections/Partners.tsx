"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { itemFadeUp, staggerContainer } from "@/lib/motion";

export function Partners() {
  return (
    <section className="section-tight bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <motion.div
            className="flex flex-col gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p className="text-xs uppercase tracking-[0.3em] text-slate-500" variants={itemFadeUp}>
              Trusted partner network
            </motion.p>
            <motion.p
              className="text-lg font-semibold text-slate-900"
              variants={itemFadeUp}
            >
              Partner with over 20+ banks in the UAE
            </motion.p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
