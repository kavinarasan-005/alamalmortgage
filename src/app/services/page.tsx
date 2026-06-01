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

      <section className="section bg-ink-850">
        <div className="container-base">
          <div className="grid gap-8">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="card card-pad"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    <h2 className="heading-3 font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-body">{service.summary}</p>
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
                    <p className="eyebrow">
                      Benefits
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-gold-500">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="eyebrow">
                      Eligibility
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-gold-500">
                      {service.eligibility.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="eyebrow">
                      Process
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-gold-500">
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
