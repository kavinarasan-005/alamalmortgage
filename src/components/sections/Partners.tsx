"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { itemFadeUp, staggerContainer } from "@/lib/motion";

export function Partners() {
  return (
    <section className="section-tight bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="flex flex-col gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p className="eyebrow" variants={itemFadeUp}>
              Trusted partner network
            </motion.p>
            <motion.p
              className="heading-2 font-semibold text-slate-900"
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
