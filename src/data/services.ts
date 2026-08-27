import {
  Building2,
  Coins,
  Construction,
  Globe2,
  Home,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

/**
 * Single data source for every mortgage service. Adding a new service only
 * requires appending another object here — `ServiceTemplate` and the
 * `/services/[slug]` route render entirely from this data.
 */

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Short card description, shown on the services index and homepage grid. */
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  eligibility: string[];
  process: string[];
  faq: ServiceFaq[];
  /** Hero CTA label — links to /contact. */
  cta: string;
  seo: ServiceSeo;
}

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80";

export const services: Service[] = [
  {
    slug: "residential-mortgage",
    title: "Residential Mortgage",
    icon: Home,
    shortDescription:
      "Move into your dream home or invest in Dubai residential property with flexible terms and low down payment options.",
    heroTitle: "Residential mortgages built around your goals",
    heroDescription:
      "From first-time buyers to seasoned investors, we secure approvals with clear guidance.",
    overview:
      "From first-time buyers to seasoned investors, we secure approvals with clear guidance. We compare offers across 20+ UAE banks so you get a rate and structure that fits your budget and property plans.",
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
    faq: [
      {
        question: "What is the minimum income for a residential mortgage?",
        answer:
          "Most banks require a minimum salary of AED 15,000 per month, though this can vary by lender and profile.",
      },
      {
        question: "Can non-residents apply for a residential mortgage?",
        answer:
          "Yes, we work with banks that offer both UAE resident and non-resident residential mortgage options.",
      },
      {
        question: "How long does pre-approval take?",
        answer:
          "Most pre-approvals are issued within 24-48 hours once your documents are complete.",
      },
    ],
    cta: "Get Pre-Qualified",
    seo: {
      metaTitle: "Residential Mortgage in the UAE | Al Amal Mortgage",
      metaDescription:
        "Compare residential mortgage options from 20+ UAE banks. Fast pre-approval, transparent rates, and dedicated advisory support.",
      ogTitle: "Residential Mortgage in the UAE",
      ogDescription:
        "Home purchase and investment mortgages matched to you, with fast pre-approval and transparent guidance.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "commercial-mortgage",
    title: "Commercial Mortgages",
    icon: Building2,
    shortDescription: "Financing for offices, retail, and mixed-use assets.",
    heroTitle: "Commercial mortgages for income-producing property",
    heroDescription:
      "Customized funding strategies for offices, retail units, warehouses, and commercial developments.",
    overview:
      "Finance office, retail, or warehouse assets with structured repayment plans. Our advisors align lender terms with your business cash flow so financing supports growth rather than straining it.",
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
    faq: [
      {
        question: "What documents are required for a commercial mortgage?",
        answer:
          "Typically audited financial statements, trade license, and property documents for the asset being financed.",
      },
      {
        question: "Is there a minimum business vintage requirement?",
        answer:
          "Most lenders require the business to have been operating for at least 2 years.",
      },
      {
        question: "Which property types qualify?",
        answer:
          "Offices, retail units, and warehouses located in approved UAE zones are generally eligible.",
      },
    ],
    cta: "Book a Strategy Call",
    seo: {
      metaTitle: "Commercial Mortgage in the UAE | Al Amal Mortgage",
      metaDescription:
        "Structured commercial mortgage financing for offices, retail, and mixed-use assets in the UAE, with cash-flow aligned underwriting.",
      ogTitle: "Commercial Mortgage in the UAE",
      ogDescription:
        "Finance office, retail, or warehouse assets with structured repayment plans.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "refinancing",
    title: "Refinance & Loan Buyout",
    icon: RefreshCcw,
    shortDescription: "Switch rates or unlock equity with a buyout.",
    heroTitle: "Refinance to a better rate or unlock equity",
    heroDescription:
      "Switch your current high-rate mortgage, reduce monthly EMIs, or release equity from your existing UAE property.",
    overview:
      "Switch to a better rate, lower monthly payments, or unlock equity. We benchmark your current facility against the market and manage the buyout end-to-end.",
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
    process: ["Rate benchmarking", "Buyout approval and settlement", "New facility setup"],
    faq: [
      {
        question: "When does it make sense to refinance?",
        answer:
          "If your current rate is above market, or you want to release equity, refinancing can lower payments or free up cash.",
      },
      {
        question: "Are there early settlement fees?",
        answer:
          "Some banks apply an early settlement fee. We compare options to confirm refinancing still delivers net savings.",
      },
      {
        question: "What repayment history is required?",
        answer:
          "Most lenders look for at least 12 months of on-time repayments with no major late payments.",
      },
    ],
    cta: "Compare My Rate",
    seo: {
      metaTitle: "Mortgage Refinancing & Buyout in the UAE | Al Amal Mortgage",
      metaDescription:
        "Refinance your UAE mortgage to a better rate, consolidate liabilities, or unlock equity with a structured buyout.",
      ogTitle: "Mortgage Refinancing & Buyout in the UAE",
      ogDescription:
        "Switch to a better rate, lower monthly payments, or unlock equity.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "non-resident-mortgage",
    title: "Non-Resident Mortgages",
    icon: Globe2,
    shortDescription: "UAE mortgages for international buyers.",
    heroTitle: "UAE mortgages for international buyers",
    heroDescription:
      "Premier property financing solutions for international investors expanding their real estate portfolio in the UAE.",
    overview:
      "Purchase UAE property with international income assessments and currency options. We coordinate cross-border documentation so overseas buyers can move at UAE speed.",
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
    faq: [
      {
        question: "What down payment is required for non-residents?",
        answer:
          "Non-residents typically need a minimum down payment of 40%, depending on the bank and property.",
      },
      {
        question: "Can international income be used for assessment?",
        answer:
          "Yes, we work with banks that accept international income documentation for non-resident applicants.",
      },
      {
        question: "Do I need to visit the UAE to apply?",
        answer:
          "Many steps can be completed remotely; your relationship manager will confirm which stages require your presence.",
      },
    ],
    cta: "Start International Review",
    seo: {
      metaTitle: "Non-Resident Mortgage in the UAE | Al Amal Mortgage",
      metaDescription:
        "UAE mortgages for international buyers, with cross-border income verification and flexible currency structures.",
      ogTitle: "Non-Resident Mortgage in the UAE",
      ogDescription:
        "Purchase UAE property with international income assessments and currency options.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "equity-release",
    title: "Equity Release",
    icon: Coins,
    shortDescription: "Release equity from owned property.",
    heroTitle: "Release equity from your owned property",
    heroDescription:
      "Unlock liquid cash tied up in fully paid or partially mortgaged UAE properties to invest elsewhere.",
    overview:
      "Monetize owned property to fund investments or business growth. We structure the loan against your existing property so you can redeploy capital without selling.",
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
    process: ["Property valuation", "Loan structuring and approval", "Funds release"],
    faq: [
      {
        question: "What property qualifies for equity release?",
        answer:
          "The property must have a clear title deed and sufficient equity relative to its current valuation.",
      },
      {
        question: "What can the released funds be used for?",
        answer:
          "Released cash can typically be used flexibly, including investments, renovation, or business growth.",
      },
      {
        question: "How is the amount I can release determined?",
        answer:
          "It depends on the property valuation, your existing debt-to-income ratio, and lender policy.",
      },
    ],
    cta: "Unlock My Equity",
    seo: {
      metaTitle: "Equity Release in the UAE | Al Amal Mortgage",
      metaDescription:
        "Release equity from your owned UAE property to fund investments or business growth with competitive rates.",
      ogTitle: "Equity Release in the UAE",
      ogDescription: "Monetize owned property to fund investments or business growth.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "off-plan-financing",
    title: "Off-plan Financing",
    icon: Construction,
    shortDescription: "Financing aligned with developer milestones.",
    heroTitle: "Off-plan financing aligned with handover",
    heroDescription:
      "Strategic handover financing structured around developer construction milestones.",
    overview:
      "Align financing with developer milestones and handover schedules. We coordinate with your developer and bank so payments and approvals stay in sync through handover.",
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
    faq: [
      {
        question: "What is the minimum income for off-plan financing?",
        answer:
          "Most lenders require a minimum monthly income of AED 20,000 for off-plan financing.",
      },
      {
        question: "Does the developer need to be approved?",
        answer:
          "Yes, the project and developer must be on the financing bank's approved list.",
      },
      {
        question: "When is the final disbursement made?",
        answer:
          "The final disbursement is typically released at handover, aligned with the developer's milestone schedule.",
      },
    ],
    cta: "Plan My Off-plan Mortgage",
    seo: {
      metaTitle: "Off-Plan Property Financing in the UAE | Al Amal Mortgage",
      metaDescription:
        "Off-plan mortgage financing aligned with developer milestones and handover schedules across the UAE.",
      ogTitle: "Off-Plan Property Financing in the UAE",
      ogDescription:
        "Align financing with developer milestones and handover schedules.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, count);
}
