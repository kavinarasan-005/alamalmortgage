import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { EligibilityCta } from "@/components/sections/EligibilityCta";
import { Stats } from "@/components/sections/Stats";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Partners } from "@/components/sections/Partners";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { DubaiBanner } from "@/components/sections/DubaiBanner";
import { CalculatorPreview } from "@/components/sections/CalculatorPreview";
import { RateCards } from "@/components/sections/RateCards";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Best Mortgage Consultant in Dubai & UAE | Al Amal Mortgage",
  },
  description:
    "Compare 20+ UAE banks and get fast 24-48h mortgage pre-approvals with Al Amal Mortgage. Residential, commercial, refinance, and non-resident financing.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <EligibilityCta />
      <Stats />
      <ValueProposition />
      <Partners />
      <ServicesGrid />
      <DubaiBanner />
      <CalculatorPreview />
      <RateCards />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <FaqAccordion />
    </>
  );
}
