"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculateMonthlyPayment, formatAED } from "@/lib/mortgage";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { cardHover, ctaPulse } from "@/lib/motion";

export function CalculatorPreview() {
  const [price, setPrice] = useState(2200000);
  const [downPayment, setDownPayment] = useState(440000);
  const [rate, setRate] = useState(4.1);
  const years = 25;

  const monthly = useMemo(() => {
    const principal = Math.max(price - downPayment, 0);
    return calculateMonthlyPayment(principal, rate, years);
  }, [price, downPayment, rate, years]);

  return (
    <section className="section bg-ink-900">
      <div className="mx-auto grid max-w-6xl items-center gap-10 container-pad lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
              Mortgage calculator
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Estimate your monthly payment in seconds
            </h2>
            <p className="text-muted">
              Quick visibility on affordability before you speak with an
              advisor. Full calculator includes adjustable tenure and
              eligibility guidance.
            </p>
            <motion.div whileHover={ctaPulse.hover} whileTap={{ scale: 0.98 }}>
              <Link
                href="/mortgage-calculator"
                className={cn(buttonVariants({ variant: "secondary" }))}
              >
                Open full calculator
              </Link>
            </motion.div>
          </div>
        </Reveal>

        <Reveal>
          <motion.div className="glass-card rounded-3xl p-8" whileHover={cardHover.hover} initial="rest" animate="rest">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted">
                Property value (AED)
                <Input
                  type="number"
                  min={0}
                  value={price}
                  onChange={(event) =>
                    setPrice(Number(event.target.value) || 0)
                  }
                  className="mt-2"
                />
              </label>
              <label className="text-sm text-muted">
                Down payment (AED)
                <Input
                  type="number"
                  min={0}
                  value={downPayment}
                  onChange={(event) =>
                    setDownPayment(Number(event.target.value) || 0)
                  }
                  className="mt-2"
                />
              </label>
              <label className="text-sm text-muted">
                Interest rate (%)
                <Input
                  type="number"
                  step="0.1"
                  min={0}
                  value={rate}
                  onChange={(event) => setRate(Number(event.target.value) || 0)}
                  className="mt-2"
                />
              </label>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-gold-400">
                  Estimated monthly
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-50">
                  {formatAED(monthly)}
                </div>
                <div className="text-xs text-muted">25-year term</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-muted">
              Estimates only. Final terms depend on bank approval.
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
