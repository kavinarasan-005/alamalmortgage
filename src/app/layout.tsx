import type { Metadata } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { AppMotionShell } from "@/components/site/AppMotionShell";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Navbar } from "@/components/site/Navbar";

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alamalmortgage.ae";

export const metadata: Metadata = {
  title: {
    default: "Al Amal Mortgage | UAE Mortgage Consultancy",
    template: "%s | Al Amal Mortgage",
  },
  description:
    "Premium UAE mortgage consultancy helping residents and investors secure approvals, refinance, and unlock property opportunities.",
  metadataBase: new URL(siteUrl),
  applicationName: "Al Amal Mortgage",
  keywords: [
    "UAE mortgage",
    "Dubai mortgage broker",
    "mortgage consultancy",
    "home finance",
    "property finance",
    "mortgage pre-approval",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Al Amal Mortgage | UAE Mortgage Consultancy",
    description:
      "Premium UAE mortgage consultancy helping residents and investors secure approvals, refinance, and unlock property opportunities.",
    siteName: "Al Amal Mortgage",
    locale: "en_AE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
        width: 1400,
        height: 800,
        alt: "Dubai skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Amal Mortgage | UAE Mortgage Consultancy",
    description:
      "Premium UAE mortgage consultancy helping residents and investors secure approvals, refinance, and unlock property opportunities.",
    images: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink-900 text-slate-100 flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-ink-800 focus:px-4 focus:py-2 focus:text-xs focus:text-slate-100"
        >
          Skip to content
        </a>
        <AppMotionShell>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </AppMotionShell>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
