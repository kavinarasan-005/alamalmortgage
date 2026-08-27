"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { staggerContainer } from "@/lib/motion";

export function ServicesGrid() {
  return (
    <section className="section bg-ink-850">
      <div className="container-base">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">
                Core Services Breakdown
              </p>
              <h2 className="mt-4 heading-2 font-semibold">
                Comprehensive UAE Mortgage Solutions
              </h2>
              <p className="mt-3 max-w-2xl text-body">
                Tailored home loans and property financing designed for residents, non-residents, and commercial investors.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-muted transition hover:text-foreground lg:inline-flex"
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
              <ServiceCard
                key={service.slug}
                icon={<Icon className="h-6 w-6" />}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
