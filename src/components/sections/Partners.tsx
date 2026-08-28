"use client";

import { motion } from "framer-motion";

import { partnerBanks } from "@/data/site";
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
              className="heading-2 font-semibold text-foreground"
              variants={itemFadeUp}
            >
              Partner with over 20+ banks in the UAE
            </motion.p>
          </motion.div>
        </Reveal>
      </div>

      <Reveal>
        <div className="marquee mt-8">
          {/* The list is rendered twice so the track can loop seamlessly; the
              duplicate is hidden from assistive tech. */}
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="marquee-track"
              aria-hidden={copy === 1 || undefined}
            >
              {partnerBanks.map((bank) => (
                <li
                  key={bank}
                  className="card-soft card-pad-sm flex min-w-max items-center justify-center whitespace-nowrap px-6 text-sm font-medium text-muted"
                >
                  {bank}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
