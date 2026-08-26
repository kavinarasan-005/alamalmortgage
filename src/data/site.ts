import { BadgeCheck, ShieldCheck, Timer } from "lucide-react";

export const navLinks = [
  { label: "Eligibility", href: "/eligibility-checker" },
  { label: "Services", href: "/services" },
  { label: "Calculator", href: "/mortgage-calculator" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "20+", label: "UAE bank partners" },
  { value: "500+", label: "Clients helped" },
  { value: "54+", label: "Verified Google reviews" },
  { value: "4.9/5", label: "Google rating" },
];

export const trustSignals = [
  {
    title: "Fast approvals",
    description: "Most pre-approvals in 24-48 hours once docs are ready.",
    icon: Timer,
  },
  {
    title: "Transparent process",
    description: "Clear fees, timeline, and one point of contact.",
    icon: ShieldCheck,
  },
  {
    title: "Bank-ready files",
    description: "We package your file to reduce bank follow-ups.",
    icon: BadgeCheck,
  },
];

// Per-service data (title, benefits, eligibility, process, FAQ, SEO, etc.)
// now lives in `src/data/services.ts`, the single source of truth used by
// the services index page and the `/services/[slug]` template.

export const processSteps = [
  {
    title: "Discovery call",
    description:
      "Share your goals, property type, and financial profile in 15 minutes.",
  },
  {
    title: "Bank matching",
    description:
      "We shortlist the best lenders and pre-qualify your application.",
  },
  {
    title: "Approval & valuation",
    description:
      "We manage valuations, approvals, and compliance documentation.",
  },
  {
    title: "Final offer",
    description: "Sign your offer letter, and we handle the disbursement.",
  },
];

export const faqs = [
  {
    question: "How much down payment do I need in the UAE?",
    answer:
      "UAE residents typically require 20% for properties under AED 5 million. Non-residents usually need 40% or more depending on the bank.",
  },
  {
    question: "How long does mortgage approval take?",
    answer:
      "Most pre-approvals are issued within 24-48 hours once documents are complete. Final approval depends on valuation and compliance checks.",
  },
  {
    question: "Can I refinance before my fixed term ends?",
    answer:
      "Yes, but early settlement fees may apply. We compare options to ensure refinancing still delivers net savings.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Typically Emirates ID/passport, salary certificate, bank statements, and property documents. We send a full checklist after onboarding.",
  },
];

export const team = [
  {
    name: "Ankur Sachdeva",
    role: "Senior Mortgage Advisor",
    bio: "Specialises in residential mortgages and investment property financing across the UAE, guiding clients from first inquiry to final disbursement.",
  },
  {
    name: "Sayed Harice Ali",
    role: "Mortgage Advisor",
    bio: "Known for turning complex applications into smooth, stress-free approvals. Clients praise his responsiveness and step-by-step guidance throughout the process.",
  },
  {
    name: "Adham Alfreehat",
    role: "Mortgage Advisor",
    bio: "Dedicated to delivering clear, transparent advice on residential and commercial financing, helping clients navigate every step with confidence.",
  },
];

export const values = [
  {
    title: "Client-first strategy",
    description: "We structure financing around your long-term wealth goals.",
  },
  {
    title: "Data-driven advice",
    description:
      "Real-time rate comparisons and transparent lender recommendations.",
  },
  {
    title: "Luxury-level service",
    description: "White-glove support from first call to handover.",
  },
];

export const rateCards = [
  {
    title: "Fixed 3-Year",
    rate: "3.95%",
    detail: "For salaried UAE residents",
  },
  {
    title: "Self-employed Buyout",
    rate: "3.95%",
    detail: "For self-employed (buyout only)",
  },
  {
    title: "Non-resident",
    rate: "5.10%",
    detail: "International income profiles",
  },
];
