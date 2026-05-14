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

      <section className="section bg-ink-900">
        <div className="mx-auto grid max-w-6xl gap-10 container-pad lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-slate-50">
                Contact details
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold-400" /> +971 55 123 4567
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gold-400" />
                  hello@alamalmortgage.ae
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold-400" />
                  Gate Avenue, DIFC, Dubai
                </div>
              </div>
              <Link
                href="https://wa.me/971551234567"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-4 py-2 text-sm font-semibold text-gold-400"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp now
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-slate-50">
                Office hours
              </h3>
              <p className="mt-3 text-sm text-muted">
                Sunday to Thursday, 9:00 AM to 7:00 PM (GST)
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Dubai office map"
                src="https://maps.google.com/maps?q=DIFC%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
