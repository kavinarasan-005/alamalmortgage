"use client";

import { motion } from "framer-motion";

import { faqs } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function FaqAccordion() {
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
            <motion.div variants={itemFadeUp}>
              <p className="eyebrow">
                FAQs
              </p>
              <h2 className="mt-4 heading-2 font-semibold">
                Mortgage questions, simplified
              </h2>
              <p className="mt-4 text-body">
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
                  className="transition-shadow duration-200 hover:shadow-card-hover"
                >
                  <details className="card card-pad-md">
                    <summary className="cursor-pointer text-sm font-semibold text-foreground">
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
