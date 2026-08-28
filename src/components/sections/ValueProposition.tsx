"use client";

import { motion } from "framer-motion";

import { keyFeatures } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function ValueProposition() {
  return (
    <section className="section bg-ink-850" aria-labelledby="value-proposition">
      <div className="container-base">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Value proposition</p>
            <h2 id="value-proposition" className="heading-2 font-semibold">
              Expert Guidance to Remove the Guesswork from UAE Property Loans
            </h2>
            <p className="text-body">
              Navigating the UAE mortgage landscape can feel overwhelming with
              fluctuating interest rates, strict down payment rules, and complex
              bank paperwork. At Al Amal Mortgage, we simplify every phase of
              property financing.
            </p>
            <p className="text-body">
              Whether you are a first-time homebuyer in Dubai, an equity release
              adviser, or a business owner seeking commercial financing, our
              dedicated advisors act as your trusted advocate. We compare live
              rates across major UAE financial institutions to deliver tailored
              home loan solutions that match your financial goals.
            </p>
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
