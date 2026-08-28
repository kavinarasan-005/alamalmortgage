"use client";

import { motion } from "framer-motion";

import { trustSignals } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

interface WhyChooseUsProps {
  /** Section label. Service pages pass their own "Why Choose ... for X" line. */
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
}

const DEFAULT_EYEBROW = "Why choose Al Amal";
const DEFAULT_HEADING = "Advice that removes the guesswork";
const DEFAULT_PARAGRAPHS = [
  "We compare real bank offers across 20+ UAE lenders, explain every trade-off, and keep your paperwork moving seamlessly so you can close on time. Enjoy 24–48 hour pre-approvals, completely transparent fees, dedicated single-point contacts, and bank-ready files that eliminate processing delays.",
];

export function WhyChooseUs({
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  paragraphs = DEFAULT_PARAGRAPHS,
}: WhyChooseUsProps = {}) {
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
            <motion.div className="space-y-4" variants={itemFadeUp}>
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="heading-2 font-semibold">{heading}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <div className="grid gap-4">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <motion.div
                    key={signal.title}
                    variants={itemFadeUp}
                    whileHover={cardHover.hover}
                    initial="rest"
                    animate="rest"
                    className="card card-pad-md transition-shadow duration-200 hover:shadow-card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {signal.title}
                        </h3>
                        <p className="text-sm text-muted">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
