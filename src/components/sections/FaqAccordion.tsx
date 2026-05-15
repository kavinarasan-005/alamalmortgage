"use client";

import { motion } from "framer-motion";

import { faqs } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function FaqAccordion() {
  return (
    <section className="section bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <motion.div
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemFadeUp}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                FAQs
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Mortgage questions, simplified
              </h2>
              <p className="mt-4 text-muted">
                Clear, bank-aligned answers so you can move forward with
                confidence.
              </p>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  variants={itemFadeUp}
                  whileHover={cardHover.hover}
                  initial="rest"
                  animate="rest"
                  className="transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(7,17,32,0.35)]"
                >
                  <details className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-50">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm text-muted">{faq.answer}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
