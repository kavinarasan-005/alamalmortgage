import {
  BadgeCheck,
  Building2,
  Coins,
  Construction,
  Globe2,
  Home,
  RefreshCcw,
  ShieldCheck,
  Timer,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Calculator", href: "/mortgage-calculator" },
  { label: "Eligibility", href: "/eligibility-checker" },
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

export const services = [
  {
    title: "Residential Mortgage",
    description: "Home purchase and investment mortgages matched to you.",
    icon: Home,
  },
  {
    title: "Commercial Mortgage",
    description: "Financing for offices, retail, and mixed-use assets.",
    icon: Building2,
  },
  {
    title: "Refinance / Buyout",
    description: "Switch rates or unlock equity with a buyout.",
    icon: RefreshCcw,
  },
  {
    title: "Non-resident Mortgage",
    description: "UAE mortgages for international buyers.",
    icon: Globe2,
  },
  {
    title: "Equity Release",
    description: "Release equity from owned property.",
    icon: Coins,
  },
  {
    title: "Off-plan Financing",
    description: "Financing aligned with developer milestones.",
    icon: Construction,
  },
];

export const serviceDetails = [
  {
    title: "Residential Mortgage",
    summary:
      "From first-time buyers to seasoned investors, we secure approvals with clear guidance.",
    benefits: [
      "Access to fixed and variable rates",
      "Fast pre-approval and valuation support",
      "Mortgage structuring for joint applicants",
    ],
    eligibility: [
      "Salaried or self-employed applicants",
      "Minimum salary AED 15,000",
      "UAE resident and non-resident options",
    ],
    process: [
      "Profile assessment and bank matching",
      "Document collection and pre-approval",
      "Valuation, offer, and disbursement",
    ],
    cta: "Get Pre-Qualified",
  },
  {
    title: "Commercial Mortgage",
    summary:
      "Finance office, retail, or warehouse assets with structured repayment plans.",
    benefits: [
      "Tailored LTV for income-producing assets",
      "Flexible repayment terms",
      "Cash-flow aligned underwriting",
    ],
    eligibility: [
      "Registered business with audited statements",
      "Property located in approved UAE zones",
      "Business vintage of 2+ years",
    ],
    process: [
      "Commercial viability review",
      "Bank proposal and term sheet",
      "Legal documentation and drawdown",
    ],
    cta: "Book a Strategy Call",
  },
  {
    title: "Refinance / Buyout",
    summary:
      "Switch to a better rate, lower monthly payments, or unlock equity.",
    benefits: [
      "Reduce interest rate exposure",
      "Consolidate liabilities",
      "Access cash for renovation or expansion",
    ],
    eligibility: [
      "12+ months repayment history",
      "Property valuation available",
      "No major late payments",
    ],
    process: [
      "Rate benchmarking",
      "Buyout approval and settlement",
      "New facility setup",
    ],
    cta: "Compare My Rate",
  },
  {
    title: "Non-resident Mortgage",
    summary:
      "Purchase UAE property with international income assessments and currency options.",
    benefits: [
      "Flexible currency structures",
      "Cross-border income verification",
      "Dedicated relationship manager",
    ],
    eligibility: [
      "Valid passport and residency proof",
      "International income documentation",
      "Minimum down payment 40%",
    ],
    process: [
      "Profile assessment and bank shortlist",
      "Document verification",
      "Approval and transfer",
    ],
    cta: "Start International Review",
  },
  {
    title: "Equity Release",
    summary:
      "Monetize owned property to fund investments or business growth.",
    benefits: [
      "Competitive rates on existing properties",
      "Flexible use of released cash",
      "Access to multiple lenders",
    ],
    eligibility: [
      "Property with clear title deed",
      "Stable income history",
      "Acceptable debt-to-income ratio",
    ],
    process: [
      "Property valuation",
      "Loan structuring and approval",
      "Funds release",
    ],
    cta: "Unlock My Equity",
  },
  {
    title: "Off-plan Financing",
    summary:
      "Align financing with developer milestones and handover schedules.",
    benefits: [
      "Structured milestone payments",
      "Handover-ready approvals",
      "Developer coordination",
    ],
    eligibility: [
      "Approved developer and project",
      "Minimum income AED 20,000",
      "UAE resident or qualifying non-resident",
    ],
    process: [
      "Project assessment",
      "Pre-approval and commitment",
      "Final disbursement at handover",
    ],
    cta: "Plan My Off-plan Mortgage",
  },
];

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
    question: "Do you charge consultation fees?",
    answer:
      "No. Our consultation is free and we are paid by partner banks upon successful disbursement.",
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
