import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-base grid gap-10 py-10 sm:py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/al-amal-logo.png"
              alt="Al Amal Mortgage"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-border bg-white object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Al Amal Mortgage
              </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Mortgage Consultant LLC
              </p>
            </div>
          </div>
          <p className="text-sm text-muted">
            Premium UAE mortgage consultancy helping residents and investors
            secure approvals with clarity, speed, and confidence.
          </p>
          <div className="flex flex-col gap-1 text-sm text-muted">
            <a
              href="tel:8002060"
              className="flex items-center gap-2 rounded-lg py-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold-500" />
              Call: 800-2060
            </a>
            <a
              href="tel:+971554701475"
              className="flex items-center gap-2 rounded-lg py-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold-500" />
              Mobile: +971 55 470 1475
            </a>
            <a
              href="mailto:info@alamalmortgage.com"
              className="flex items-center gap-2 rounded-lg py-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold-500" />
              <span className="break-all">info@alamalmortgage.com</span>
            </a>
            <span className="flex items-start gap-2 py-1.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>
                Office 201, Sultan Business Center, Oud Metha, Dubai UAE
                <br />
                PO Box 121520
              </span>
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Explore
          </h4>
          <nav className="flex flex-col gap-1 text-sm text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1.5 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Compliance
          </h4>
          <p className="text-sm text-muted">
            Al Amal Mortgage is a licensed mortgage consultancy in the UAE.
            All mortgage approvals are subject to bank underwriting and
            regulatory compliance.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted">
        © 2026 Al Amal Mortgage. All rights reserved.
      </div>
    </footer>
  );
}
