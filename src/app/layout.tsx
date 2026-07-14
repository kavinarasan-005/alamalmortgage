import type { Metadata, Viewport } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { MotionProvider, PageTransition } from "@/components/site/AppMotionShell";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Navbar } from "@/components/site/Navbar";

const GTM_ID = "GTM-5GQC9XLG";
const GA_MEASUREMENT_ID = "G-REE5W6M568";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Al Amal Mortgage",
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
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  icons: {
    icon: [{ url: "/brand/al-amal-logo.png", type: "image/png" }],
    apple: [{ url: "/brand/al-amal-logo.png" }],
    shortcut: "/brand/al-amal-logo.png",
  },
  verification: {
    google: "bmtFd8E99YvBAfq0t1tfIQ-FilqPJ2k_cExzW93MluNQ",
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
      suppressHydrationWarning
      className={`${sora.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager — as high in <head> as possible */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full bg-background text-foreground flex flex-col pb-[env(safe-area-inset-bottom)]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-xs focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
