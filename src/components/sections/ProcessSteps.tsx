"use client";

import { motion } from "framer-motion";

import { processSteps } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function ProcessSteps() {
  return (
    <section className="section bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemFadeUp}>
              <p className="eyebrow">
                Our process
              </p>
              <h2 className="mt-4 heading-2 font-semibold">
                A simple 4-step process
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
                  className="card card-pad-md transition-shadow duration-200 hover:shadow-card-hover"
                >
                  <div className="eyebrow">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 heading-3 font-semibold text-foreground">
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
