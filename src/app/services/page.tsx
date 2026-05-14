import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/site/PageHeader";
import { serviceDetails } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mortgage Services",
  description:
    "Explore residential, commercial, refinance, non-resident, equity release, and off-plan mortgage services in the UAE.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Tailored mortgage services for every property journey"
        description="From residential loans to complex commercial structures, we align lenders, eligibility, and approvals to your goals."
      />

      <section className="section bg-ink-900">
        <div className="mx-auto max-w-6xl container-pad">
          <div className="grid gap-8">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-slate-50">
                      {service.title}
                    </h2>
                    <p className="text-muted">{service.summary}</p>
                  </div>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ variant: "secondary" }))}
                  >
                    {service.cta}
                  </Link>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                      Benefits
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                      Eligibility
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted">
                      {service.eligibility.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                      Process
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted">
                      {service.process.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
