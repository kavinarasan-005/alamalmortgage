import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Partners } from "@/components/sections/Partners";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CalculatorPreview } from "@/components/sections/CalculatorPreview";
import { RateCards } from "@/components/sections/RateCards";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "UAE Mortgage Consultancy",
  description:
    "Premium mortgage advisory for UAE residents and global investors. Compare 20+ banks and secure fast approvals with Al Amal Mortgage.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Partners />
      <ServicesGrid />
      <CalculatorPreview />
      <RateCards />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <FaqAccordion />
      <LeadForm />
    </>
  );
}
