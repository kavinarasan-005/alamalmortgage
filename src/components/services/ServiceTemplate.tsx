import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/sections/LeadForm";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { cn } from "@/lib/utils";
import { getRelatedServices, type Service } from "@/data/services";

interface ServiceTemplateProps {
  service: Service;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  const relatedServices = getRelatedServices(service.slug);

  return (
    <div>
      <header>
        <section className="section-hero bg-hero">
          <div className="container-base">
            <Badge variant="gold">Services</Badge>
            <div className="mt-6 max-w-3xl space-y-4">
              <h1 className="heading-1 font-semibold tracking-tight">
                {service.heroTitle}
              </h1>
              <p className="text-lead">{service.heroDescription}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={service.cta.href}
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                {service.cta.label}
              </Link>
              {service.secondaryCta ? (
                <Link
                  href={service.secondaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                  )}
                >
                  {service.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section bg-ink-850" aria-labelledby="service-overview">
          <div className="container-base">
            <Reveal>
              <div className="max-w-3xl space-y-4">
                <p className="eyebrow">Overview</p>
                <h2 id="service-overview" className="heading-2 font-semibold">
                  About {service.title.toLowerCase()}
                </h2>
                {service.overview.map((paragraph) => (
                  <p key={paragraph} className="text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section bg-ink-850">
          <div className="container-base">
            <article className="card card-pad">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3">
                  <p className="eyebrow">Benefits</p>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-gold-500">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="eyebrow">Eligibility</p>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-gold-500">
                    {service.eligibility.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="eyebrow">Process</p>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-gold-500">
                    {service.process.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <WhyChooseUs {...service.whyChooseUs} />

        <section className="section bg-ink-850" aria-labelledby="service-faq">
          <div className="container-base">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div>
                  <p className="eyebrow">FAQs</p>
                  <h2 id="service-faq" className="mt-4 heading-2 font-semibold">
                    {service.title} questions, answered
                  </h2>
                  <p className="mt-4 text-body">
                    Clear, bank-aligned answers so you can move forward with
                    confidence.
                  </p>
                </div>
              </Reveal>
              <div className="space-y-4">
                {service.faq.map((item) => (
                  <Reveal key={item.question}>
                    <details className="card card-pad-md transition-shadow duration-200 hover:shadow-card-hover">
                      <summary className="cursor-pointer text-sm font-semibold text-foreground">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm text-muted">{item.answer}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LeadForm />

        <section className="section bg-ink-850" aria-labelledby="related-services">
          <div className="container-base">
            <Reveal>
              <div>
                <p className="eyebrow">Related services</p>
                <h2 id="related-services" className="mt-4 heading-2 font-semibold">
                  Explore other mortgage solutions
                </h2>
              </div>
            </Reveal>
            <nav
              aria-label="Related services"
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {relatedServices.map((related) => {
                const Icon = related.icon;
                return (
                  <Reveal key={related.slug}>
                    <ServiceCard
                      icon={<Icon className="h-6 w-6" />}
                      title={related.title}
                      description={related.shortDescription}
                      href={`/services/${related.slug}`}
                    />
                  </Reveal>
                );
              })}
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
}
