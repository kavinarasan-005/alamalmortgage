import Link from "next/link";

import { services } from "@/data/site";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid() {
  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Mortgage solutions built around your property goals
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Residential, commercial, and investment financing with clear
                eligibility guidance and bank-aligned approvals.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-gold-400 transition hover:text-gold-500 lg:inline-flex"
            >
              View all services
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <Card className="h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex text-sm font-semibold text-gold-400"
                  >
                    Explore details
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
