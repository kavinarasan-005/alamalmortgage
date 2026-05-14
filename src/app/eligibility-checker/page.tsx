import type { Metadata } from "next";
import { EligibilityCheckerClient } from "@/app/eligibility-checker/EligibilityCheckerClient";

export const metadata: Metadata = {
  title: "Eligibility Checker",
  description:
    "Complete a quick eligibility check to see your UAE mortgage options and receive expert guidance.",
  alternates: {
    canonical: "/eligibility-checker",
  },
};

export default function EligibilityCheckerPage() {
  return <EligibilityCheckerClient />;
}
