import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { ContactFormClient } from "@/app/contact/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Al Amal Mortgage for UAE mortgage advice, WhatsApp consultation, and office details.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let&apos;s secure your mortgage with confidence"
        description="Book a free consultation or WhatsApp us for a fast eligibility review."
      />

      <section className="section bg-ink-850">
        <div className="container-base grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="card card-pad-md">
              <h3 className="heading-3 font-semibold text-foreground">
                Contact details
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <a
                  href="tel:+97142545150"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                  Landline: +971 4 254 5150
                </a>
                <a
                  href="tel:+971554701475"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                  Mobile: +971 55 470 1475
                </a>
                <a
                  href="mailto:info@alamalmortgage.com"
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                  info@alamalmortgage.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  <span>
                    Office 242, Sultan Business Center, Oud Metha, Dubai UAE
                    <br />
                    PO Box 121520
                  </span>
                </div>
              </div>
              <Link
                href="https://wa.me/971554701475"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-semibold text-foreground transition hover:border-gold-500/50 hover:bg-gold-500/10"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp now
              </Link>
            </div>

            <div className="card card-pad-md">
              <h3 className="heading-3 font-semibold text-foreground">
                Office hours
              </h3>
              <p className="mt-3 text-body">
                Monday to Friday, 9:00 AM to 5:00 PM (GST)
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Dubai office map"
                src="https://maps.google.com/maps?q=Sultan%20Business%20Center%20Oud%20Metha%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <ContactFormClient />
        </div>
      </section>
    </div>
  );
}
