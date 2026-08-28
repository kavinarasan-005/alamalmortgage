"use client";

import { motion } from "framer-motion";

import { keyFeatures } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function KeyFeatures() {
  return (
    <section className="section bg-ink-850" aria-labelledby="key-features">
      <div className="container-base">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Key features</p>
            <h2 id="key-features" className="heading-2 font-semibold">
              What you get with Al Amal Mortgage
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemFadeUp}
                  whileHover={cardHover.hover}
                  initial="rest"
                  animate="rest"
                  className="card card-pad-md transition-shadow duration-200 hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
