import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 container-pad md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-50">
            Al Amal Mortgage
          </h3>
          <p className="text-sm text-muted">
            Premium UAE mortgage consultancy helping residents and investors
            secure approvals with clarity, speed, and confidence.
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-200">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" /> +971 55 123 4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400" />
              hello@alamalmortgage.ae
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" />
              DIFC, Dubai, United Arab Emirates
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Explore
          </h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
            Compliance
          </h4>
          <p className="text-sm text-muted">
            Al Amal Mortgage is a licensed mortgage consultancy in the UAE.
            All mortgage approvals are subject to bank underwriting and
            regulatory compliance.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted">
        2026 Al Amal Mortgage. All rights reserved.
      </div>
    </footer>
  );
}
