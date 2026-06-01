import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-base grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/al-amal-logo.png"
              alt="Al Amal Mortgage"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-slate-200 bg-white object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Al Amal Mortgage
              </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Mortgage Consultant LLC
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            Premium UAE mortgage consultancy helping residents and investors
            secure approvals with clarity, speed, and confidence.
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-500" /> Landline: +971 4 254
              5150
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-500" /> Mobile: +971 55 470
              1475
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-500" />
              info@alamalmortgage.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-500" />
              Po Box 121520 Office 242, Sultan Business Center, Oud Metha,
              Dubai UAE
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Explore
          </h4>
          <nav className="flex flex-col gap-2 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Compliance
          </h4>
          <p className="text-sm text-slate-600">
            Al Amal Mortgage is a licensed mortgage consultancy in the UAE.
            All mortgage approvals are subject to bank underwriting and
            regulatory compliance.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        2026 Al Amal Mortgage. All rights reserved.
      </div>
    </footer>
  );
}
