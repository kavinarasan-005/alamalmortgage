import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DubaiBanner() {
  return (
    <section className="section-tight">
      <div className="container-base">
        <Reveal>
          <div className="group relative min-h-[320px] overflow-hidden rounded-[var(--radius-card)] border border-border shadow-[var(--shadow-soft)] sm:min-h-[360px]">
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
              alt="Dubai skyline at golden hour featuring the Burj Khalifa"
              fill
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="object-cover transition-transform duration-[1.6s] ease-out will-change-transform group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-950/60 to-slate-950/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(184,137,62,0.35),transparent_55%)]" />

            <div className="relative z-10 max-w-2xl px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-gold-400" />
                Headquartered in Dubai
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                On-the-ground expertise across the UAE property market
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                From Downtown Dubai to Abu Dhabi and the Northern Emirates, our
                advisors know local lenders, valuations, and developer
                milestones, so your mortgage moves at the speed of the market.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
                >
                  Talk to a Dubai advisor
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
                  )}
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
