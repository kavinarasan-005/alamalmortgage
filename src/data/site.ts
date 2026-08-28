import {
  BadgeCheck,
  ClipboardCheck,
  Landmark,
  ShieldCheck,
  Timer,
} from "lucide-react";

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

export const keyFeatures = [
  {
    title: "20+ Partner Banks",
    description:
      "Direct access to top-tier UAE lenders ensuring competitive interest rates.",
    icon: Landmark,
  },
  {
    title: "Rapid Pre-Approvals",
    description:
      "Secure bank-ready pre-approval in as fast as 24 to 48 hours.",
    icon: Timer,
  },
  {
    title: "End-to-End Handling",
    description:
      "Complete support from checklist preparation to final disbursement.",
    icon: ClipboardCheck,
  },
  {
    title: "Zero Hidden Fees",
    description:
      "Transparent advisory with clear process timelines and no surprises.",
    icon: ShieldCheck,
  },
];

// Names only for now — swap each entry for a logo asset once brand-approved
// artwork is available from the partner banks.
export const partnerBanks = [
  "Emirates NBD",
  "First Abu Dhabi Bank",
  "Abu Dhabi Commercial Bank",
  "Dubai Islamic Bank",
  "Mashreq",
  "Emirates Islamic",
  "Abu Dhabi Islamic Bank",
  "RAKBANK",
  "Commercial Bank of Dubai",
  "HSBC",
  "Standard Chartered",
  "Ajman Bank",
  "Sharjah Islamic Bank",
  "United Arab Bank",
  "National Bank of Fujairah",
  "Bank of Sharjah",
];

// Per-service data (title, benefits, eligibility, process, FAQ, SEO, etc.)
// now lives in `src/data/services.ts`, the single source of truth used by
// the services index page and the `/services/[slug]` template.

export const processSteps = [
  {
    title: "Discovery & Assessment",
    description:
      "Share your property budget, income type (salaried or self-employed), and goals with our mortgage specialist.",
  },
  {
    title: "Bank Selection & Matching",
    description:
      "We evaluate live rates across 20+ UAE banks and present you with the best loan options.",
  },
  {
    title: "Document Packaging & Pre-Approval",
    description:
      "We format your application file for instant bank compliance approval within 24 to 48 hours.",
  },
  {
    title: "Valuation & Loan Disbursement",
    description: "We coordinate property valuation, assist with final offer letter signing, and ensure smooth fund release.",
  },
];

export const faqs = [
  {
    question: "How much down payment is required for property in Dubai?",
    answer:
      "UAE residents typically require a 20% down payment for properties valued under AED 5 Million, while non-residents generally need between 30% and 40% depending on bank policies.",
  },
  {
    question: "How long does it take to get a mortgage pre-approval in UAE?",
    answer:
      "With complete documentation, Al Amal Mortgage secures your official bank pre-approval within 24 to 48 hours.",
  },
  {
    question: "Can non-residents buy property with a mortgage in Dubai?",
    answer:
      "Yes. International buyers and non-residents can secure property loans up to 60-70% Loan-to-Value (LTV) from leading UAE banks.",
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
