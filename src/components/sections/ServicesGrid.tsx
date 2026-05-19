"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { services } from "@/data/site";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { cardHover, itemFadeUp, staggerContainer } from "@/lib/motion";

export function ServicesGrid() {
  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Mortgage options for every property type
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Home, investment, and commercial financing with clear
                eligibility guidance and straightforward bank comparisons.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-slate-600 transition hover:text-slate-900 lg:inline-flex"
            >
              View all services
            </Link>
          </div>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemFadeUp} whileHover={cardHover.hover} initial="rest" animate="rest">
                <Card className="h-full border border-slate-200 bg-white p-6 transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex text-sm font-semibold text-slate-700 transition duration-200 hover:translate-x-1"
                  >
                    Explore details
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
