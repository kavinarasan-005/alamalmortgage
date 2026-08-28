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

export interface ServiceCta {
  label: string;
  href: string;
}

export interface ServiceWhyChooseUs {
  /** Section label, e.g. "Why Choose Al Amal Mortgage for Commercial Financing". */
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Short card description, shown on the services index and homepage grid. */
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  overview: string[];
  benefits: string[];
  eligibility: string[];
  process: string[];
  faq: ServiceFaq[];
  cta: ServiceCta;
  secondaryCta?: ServiceCta;
  /** Falls back to the shared homepage copy when omitted. */
  whyChooseUs?: ServiceWhyChooseUs;
  seo: ServiceSeo;
}

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80";

const WHY_CHOOSE_HEADING = "Advice That Removes the Guesswork";

export const services: Service[] = [
  {
    slug: "residential-mortgage",
    title: "Residential Mortgages",
    icon: Home,
    shortDescription:
      "Move into your dream home or invest in Dubai residential property with flexible terms and low down payment options.",
    heroTitle:
      "Residential Mortgage Solutions for Homebuyers in Dubai and the UAE",
    heroDescription: "Turn Your UAE Homeownership Dream Into Reality",
    overview: [
      "Buying a villa in Dubai, an apartment in Abu Dhabi, or expanding your residential investment portfolio requires the right mortgage setup. Al Amal Mortgage bridges the gap between you and top UAE banks, ensuring you secure maximum Loan-to-Value (LTV) at the lowest available fixed or variable interest rates.",
      "Buying a home is a major financial decision, and choosing the right mortgage can make a noticeable difference to the cost of owning it. If you are comparing a home loan in Dubai, moving from renting to owning, or planning a residential property investment, Al Amal Mortgage helps you understand your options before you commit to a lender. We compare available mortgage solutions across UAE banks and help organise your application around your income, property and financial circumstances.",
    ],
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
    whyChooseUs: {
      eyebrow: "Why Choose Al Amal Mortgage",
      heading: WHY_CHOOSE_HEADING,
      paragraphs: [
        "Securing a home loan in the UAE shouldn't feel like navigating a maze of hidden terms, varying interest rates, and endless paperwork. At Al Amal Mortgage, we eliminate the ambiguity from home financing. We evaluate market-wide options, break down complex terms, and handle every step of the submission process so you can secure your property on time and with complete confidence.",
      ],
    },
    faq: [
      {
        question:
          "What documents are needed to apply for a residential mortgage in Dubai?",
        answer:
          "Salaried applicants usually need a valid passport, Emirates ID, last 6 months' bank statements, and a salary certificate. Self-employed applicants require trade license copies, 6-12 months' business bank statements, and audited financial reports.",
      },
      {
        question: "Can I choose between fixed and variable interest rates?",
        answer:
          "Yes. You can opt for fixed rates for 1 to 5 years for payment predictability, or variable rates tied to EIBOR (Emirates Interbank Offered Rate) to take advantage of market movements.",
      },
      {
        question: "What is the maximum loan tenure for a home loan in the UAE?",
        answer:
          "The maximum tenure allowed by the UAE Central Bank is 25 years, up to the age of 65 for salaried individuals or 70 for self-employed individuals.",
      },
      {
        question: "Can expats apply for a home loan in the UAE?",
        answer:
          "Yes. UAE banks offer mortgage options for eligible expatriate residents, subject to the lender's income, property, affordability and documentation requirements.",
      },
      {
        question:
          "Should I compare more than one bank before choosing a mortgage?",
        answer:
          "Comparing lenders can help you understand differences in rates, fees, loan-to-value, fixed periods and repayment conditions before selecting an option.",
      },
    ],
    cta: {
      label: "Check Your Home Loan Eligibility in 2 Minutes",
      href: "/eligibility-checker",
    },
    secondaryCta: {
      label: "Speak With an Al Amal Mortgage Consultant",
      href: "/contact",
    },
    seo: {
      metaTitle: "Residential Mortgage Dubai & UAE | Low Rate Home Loans",
      metaDescription:
        "Get residential home loans in Dubai with low interest rates and fast approvals. Fixed and variable rate options for UAE expats and nationals.",
      ogTitle: "Residential Mortgage Dubai & UAE | Home Loan Options",
      ogDescription:
        "Get residential home loans in Dubai with low interest rates and fast approvals. Fixed and variable rate options for UAE expats and nationals.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "commercial-mortgage",
    title: "Commercial Mortgages",
    icon: Building2,
    shortDescription:
      "Customized funding strategies for offices, retail units, warehouses, and commercial developments.",
    heroTitle:
      "Commercial Mortgage Solutions for Businesses in Dubai and the UAE",
    heroDescription:
      "Empower Your Corporate Growth with Custom Property Financing",
    overview: [
      "Acquiring commercial space is a critical milestone for growing companies and real estate investors. Al Amal Mortgage offers specialized commercial finance solutions for purchasing offices, commercial buildings, retail units, and industrial facilities across the UAE.",
      "Buying commercial property is a different financial decision from purchasing a home. A business needs to consider cash flow, property use, existing liabilities and the long-term purpose of the asset. Al Amal Mortgage helps businesses and investors explore commercial mortgage options for offices, retail units, warehouses, mixed-use properties and other eligible commercial assets across the UAE.",
    ],
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
    whyChooseUs: {
      eyebrow: "Why Choose Al Amal Mortgage for Commercial Financing",
      heading: WHY_CHOOSE_HEADING,
      paragraphs: [
        "Commercial real estate financing in the UAE demands speed, structure, and institutional clarity. Financing offices, retail spaces, warehouses, or mixed-use assets involves navigating complex bank underwriting, corporate income assessments, variable Loan-to-Value (LTV) limits, and strict valuation requirements.",
        "At Al Amal Mortgage, we eliminate the friction from commercial property financing. We compare real bank offers, explain the trade-offs, and keep paperwork moving so you can close on time. We align lender criteria with your business growth goals so you can evaluate borrowing scenarios using our advanced mortgage calculator and secure your commercial asset with full financial confidence.",
      ],
    },
    faq: [
      {
        question:
          "What types of commercial properties can be mortgaged in the UAE?",
        answer:
          "We finance office spaces, retail storefronts, industrial warehouses, commercial buildings, mixed-use assets, and plots designated for commercial development.",
      },
      {
        question: "What down payment is required for commercial property loans?",
        answer:
          "Commercial real estate financing typically requires a 20% to 40% down payment depending on the company's financial profile, asset type, and lease stability.",
      },
      {
        question:
          "Can start-ups or new companies apply for commercial property financing?",
        answer:
          "Banks generally require companies to have at least 2 to 3 years of audited financials. However, options exist for established business owners setting up a new UAE holding entity.",
      },
      {
        question: "What commercial properties can be financed in the UAE?",
        answer:
          "Depending on lender policy, commercial finance may be available for offices, retail units, warehouses, commercial buildings, mixed-use properties and certain development or land assets.",
      },
      {
        question: "How much deposit is required for a commercial mortgage?",
        answer:
          "The required contribution varies according to the lender, property type, company financials, lease profile and other risk factors.",
      },
      {
        question: "Can an SME apply for commercial property finance?",
        answer:
          "Established businesses may be eligible, subject to lender requirements around trading history, financial performance, documentation and the proposed property.",
      },
    ],
    cta: { label: "Discuss Commercial Finance", href: "/contact" },
    secondaryCta: {
      label: "Request a Corporate Mortgage Proposal",
      href: "/contact",
    },
    seo: {
      metaTitle: "Commercial Mortgage Dubai | Business Property Loans UAE",
      metaDescription:
        "Commercial property loans in Dubai and UAE for offices, retail spaces, and warehouses. Custom finance structures for corporate growth.",
      ogTitle: "Commercial Mortgage Dubai | Business Property Loans UAE",
      ogDescription:
        "Commercial property loans in Dubai and UAE for offices, retail spaces, and warehouses. Custom finance structures for corporate growth.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "refinancing",
    title: "Refinance & Loan Buyout",
    icon: RefreshCcw,
    shortDescription:
      "Switch your current high-rate mortgage, reduce monthly EMIs, or release equity from your existing UAE property.",
    heroTitle: "Mortgage Refinance and Loan Buyout Solutions in Dubai",
    heroDescription:
      "Switch Banks, Cut Monthly Payments, and Unlock Property Cash",
    overview: [
      "If your current mortgage interest rate has increased or your fixed period has expired, you do not have to settle for high monthly EMIs. With our mortgage refinance and buyout services, Al Amal Mortgage transfers your loan to a lender offering lower rates, better terms, or cash equity release options.",
      "Your existing mortgage may have made sense when you first took it out, but your circumstances can change. Your fixed-rate period may have ended, rates may have moved, or the value of your property may have increased. In these situations, mortgage refinance in Dubai can be worth reviewing. Mortgage helps property owners compare the cost of staying with their current lender against the potential benefits of refinancing or completing a loan buyout.",
    ],
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
    whyChooseUs: {
      eyebrow: "Why Choose Al Amal Mortgage?",
      heading: WHY_CHOOSE_HEADING,
      paragraphs: [
        "Switching mortgage providers or unlocking equity from your property should lighten your financial burden—not add administrative stress.",
        "At Al Amal Mortgage, we transform a complex banking procedure into a streamlined, high-yield financial upgrade. We audit your current home loan against live UAE market data, compute exact net savings after exit costs, and run the buyout transfer end-to-end so you secure superior terms without delay.",
      ],
    },
    faq: [
      {
        question:
          "Are there early settlement fees when refinancing a mortgage in the UAE?",
        answer:
          "Yes, early settlement fees are capped by the UAE Central Bank at 1% of the outstanding loan balance or AED 10,000 (whichever is lower). We perform a cost-benefit calculation to ensure refinancing delivers clear net savings.",
      },
      {
        question:
          "How much cash equity can I release from my mortgaged property?",
        answer:
          "You can release up to 80% of the property's current market value for UAE residents (minus any outstanding mortgage balance), depending on your income profile and property appraisal.",
      },
      {
        question: "How long does the mortgage buyout process take?",
        answer:
          "A standard loan buyout takes around 2 to 4 weeks, including bank pre-approval, liability letter issuance from your existing bank, and property re-valuation.",
      },
      {
        question: "What is a mortgage buyout in the UAE?",
        answer:
          "A mortgage buyout generally means a new lender settles your existing home loan and replaces it with a new mortgage facility under the new lender's terms.",
      },
      {
        question: "Can refinancing reduce my monthly mortgage payment?",
        answer:
          "It may, depending on the new rate, outstanding balance, remaining tenure, fees and other loan conditions. A full cost comparison is important before making the switch.",
      },
      {
        question: "Can I release equity while refinancing?",
        answer:
          "Potentially. Equity release depends on property value, outstanding borrowing, income, affordability and the lender's criteria.",
      },
    ],
    cta: {
      label: "Calculate Your Refinance Savings",
      href: "/mortgage-calculator",
    },
    secondaryCta: {
      label: "Speak with a Buyout Specialist",
      href: "/contact",
    },
    seo: {
      metaTitle: "Mortgage Refinance & Loan Buyout Dubai | Lower Your Rates",
      metaDescription:
        "Refinance your home loan in the UAE or opt for a mortgage buyout to reduce monthly payments, switch banks, or release cash equity.",
      ogTitle: "Mortgage Refinance & Loan Buyout Dubai | Al Amal Mortgage",
      ogDescription:
        "Refinance your home loan in the UAE or opt for a mortgage buyout to reduce monthly payments, switch banks, or release cash equity.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "non-resident-mortgage",
    title: "Non-Resident Mortgages",
    icon: Globe2,
    shortDescription:
      "Premier property financing solutions for international investors expanding their real estate portfolio in the UAE.",
    heroTitle: "Non-Resident Mortgage Solutions for Overseas Property Buyers",
    heroDescription: "Invest in Dubai Real Estate from Anywhere in the World",
    overview: [
      "Dubai remains one of the world's most lucrative real estate markets. Overseas investors and non-residents can take advantage of mortgage financing options without needing UAE residency. Al Amal Mortgage provides dedicated global advisory, coordinating with UAE lenders who specialize in international income profiles.",
      "Buying property in Dubai from abroad is possible, but arranging finance from another country can feel more complicated than a standard UAE resident mortgage. Income may be earned in a different currency, documents may come from overseas institutions, and each lender can have its own approach to non-resident applications. Al Amal Mortgage helps overseas buyers understand the available mortgage route before moving forward with a Dubai property purchase.",
    ],
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
    whyChooseUs: {
      eyebrow: "Why Choose Al Amal Mortgage for Non-Resident Financing",
      heading: WHY_CHOOSE_HEADING,
      paragraphs: [
        "Securing a UAE mortgage as an overseas investor or non-resident should be clear, predictable, and stress-free. Cross-border financing introduces complex requirements—from international income verification to multi-currency valuations and strict down payment ratios.",
        "At Al Amal Mortgage, we eliminate the friction from international home financing. We benchmark real bank offers across the UAE market, explain the hidden trade-offs, and handle cross-border paperwork so you can move at UAE speed and close on time. Whether you are funding a brand-new overseas property acquisition or optimizing an existing international asset through strategic mortgage refinancing, we ensure you secure the most competitive financial structure available.",
      ],
    },
    faq: [
      {
        question:
          "Do I need to visit Dubai to get mortgage pre-approval as a non-resident?",
        answer:
          "No. Initial pre-approvals can be secured fully online while you are abroad. You only need to visit the UAE for final property transfer and signing, or designate a legal Power of Attorney (POA).",
      },
      {
        question:
          "What is the maximum Loan-to-Value (LTV) ratio for non-resident mortgages?",
        answer:
          "Non-resident buyers can typically obtain 50% to 70% LTV financing depending on the lender, property valuation, and country of residence.",
      },
      {
        question:
          "Can I use rental income from my Dubai property to qualify for the loan?",
        answer:
          "While primary qualification relies on your personal or business income in your home country, projected rental yields in Dubai can help demonstrate long-term affordability to UAE banks.",
      },
      {
        question: "Can a non-resident get a mortgage to buy property in Dubai?",
        answer:
          "Eligible non-residents may be able to obtain property finance from UAE lenders. Approval depends on the lender, borrower profile, property and supporting documentation.",
      },
      {
        question:
          "Do I have to travel to Dubai to start a non-resident mortgage application?",
        answer:
          "Initial application and pre-approval stages may often be handled remotely. Final property and legal steps can have separate requirements.",
      },
      {
        question: "What documents might an overseas buyer need?",
        answer:
          "Requirements vary, but lenders may request identification, proof of income, bank statements, employment or business records and other documents relevant to the applicant's country of residence.",
      },
    ],
    cta: {
      label: "Get Non-Resident Pre-Approval",
      href: "/eligibility-checker",
    },
    secondaryCta: {
      label: "Book International Consultation",
      href: "/contact",
    },
    seo: {
      metaTitle:
        "Non-Resident Mortgage Dubai | Property Loans for Overseas Buyers",
      metaDescription:
        "Secure Dubai property financing as an overseas investor. Special mortgage solutions for non-resident buyers with competitive LTV ratios.",
      ogTitle:
        "Non-Resident Mortgage Dubai | Property Finance for Overseas Buyers",
      ogDescription:
        "Secure Dubai property financing as an overseas investor. Special mortgage solutions for non-resident buyers with competitive LTV ratios.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "equity-release",
    title: "Equity Release",
    icon: Coins,
    shortDescription:
      "Unlock liquid cash tied up in fully paid or partially mortgaged UAE properties to invest elsewhere.",
    heroTitle: "Release equity from your owned property",
    heroDescription:
      "Unlock liquid cash tied up in fully paid or partially mortgaged UAE properties to invest elsewhere.",
    overview: [
      "Monetize owned property to fund investments or business growth. We structure the loan against your existing property so you can redeploy capital without selling.",
    ],
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
    cta: { label: "Unlock My Equity", href: "/contact" },
    seo: {
      metaTitle: "Equity Release in the UAE | Al Amal Mortgage",
      metaDescription:
        "Release equity from your owned UAE property to fund investments or business growth with competitive rates.",
      ogTitle: "Equity Release in the UAE",
      ogDescription:
        "Monetize owned property to fund investments or business growth.",
      ogImage: DEFAULT_OG_IMAGE,
    },
  },
  {
    slug: "off-plan-financing",
    title: "Off-Plan Financing",
    icon: Construction,
    shortDescription:
      "Strategic handover financing structured around developer construction milestones.",
    heroTitle: "Off-plan financing aligned with handover",
    heroDescription:
      "Strategic handover financing structured around developer construction milestones.",
    overview: [
      "Align financing with developer milestones and handover schedules. We coordinate with your developer and bank so payments and approvals stay in sync through handover.",
    ],
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
    cta: { label: "Plan My Off-plan Mortgage", href: "/contact" },
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
