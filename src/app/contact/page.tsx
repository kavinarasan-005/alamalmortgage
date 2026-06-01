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
              <h3 className="heading-3 font-semibold text-slate-900">
                Contact details
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold-500" /> Landline: +971 4
                  254 5150
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold-500" /> Mobile: +971 55
                  470 1475
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gold-500" />
                  info@alamalmortgage.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold-500" />
                  Po Box 121520 Office 242, Sultan Business Center, Oud Metha,
                  Dubai UAE
                </div>
              </div>
              <Link
                href="https://wa.me/971554701475"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp now
              </Link>
            </div>

            <div className="card card-pad-md">
              <h3 className="heading-3 font-semibold text-slate-900">
                Office hours
              </h3>
              <p className="mt-3 text-body">
                Sunday to Thursday, 9:00 AM to 7:00 PM (GST)
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200">
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
