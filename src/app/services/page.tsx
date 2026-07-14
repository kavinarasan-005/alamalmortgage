import type { Metadata } from "next";

import { PageHeader } from "@/components/site/PageHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

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

      <main>
        <section className="section bg-ink-850" aria-labelledby="all-services">
          <div className="container-base">
            <h2 id="all-services" className="sr-only">
              All mortgage services
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
