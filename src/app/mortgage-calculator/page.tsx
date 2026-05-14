import type { Metadata } from "next";

import { CalculatorClient } from "@/app/mortgage-calculator/CalculatorClient";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description:
    "Use the Al Amal Mortgage calculator to estimate monthly payments, loan size, and interest based on UAE rates.",
  alternates: {
    canonical: "/mortgage-calculator",
  },
};

export default function MortgageCalculatorPage() {
  return <CalculatorClient />;
}
