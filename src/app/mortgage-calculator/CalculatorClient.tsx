"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { PageHeader } from "@/components/site/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculateMonthlyPayment, formatAED } from "@/lib/mortgage";
import { cn } from "@/lib/utils";

export function CalculatorClient() {
  const [price, setPrice] = useState(2600000);
  const [downPayment, setDownPayment] = useState(520000);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(4.2);

  const loanAmount = Math.max(price - downPayment, 0);
  const monthlyPayment = useMemo(
    () => calculateMonthlyPayment(loanAmount, rate, years),
    [loanAmount, rate, years]
  );
  const totalPayable = monthlyPayment * years * 12;
  const totalInterest = Math.max(totalPayable - loanAmount, 0);

  return (
    <div>
      <PageHeader
        eyebrow="Mortgage calculator"
        title="Understand your monthly repayment before you commit"
        description="Adjust property price, down payment, tenure, and interest rate for a real-time estimate."
      />

      <section className="section bg-ink-900">
        <div className="mx-auto grid max-w-6xl gap-10 container-pad lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <label className="text-sm text-muted">
              Property value (AED)
              <Input
                type="number"
                min={0}
                value={price}
                onChange={(event) => setPrice(Number(event.target.value) || 0)}
                className="mt-2"
              />
              <input
                type="range"
                aria-label="Property value slider"
                min={500000}
                max={10000000}
                step={50000}
                value={price}
                onChange={(event) => setPrice(Number(event.target.value) || 0)}
                className="mt-4 w-full"
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
              <input
                type="range"
                aria-label="Down payment slider"
                min={100000}
                max={price}
                step={25000}
                value={downPayment}
                onChange={(event) =>
                  setDownPayment(Number(event.target.value) || 0)
                }
                className="mt-4 w-full"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-muted">
                Loan tenure (years)
                <Input
                  type="number"
                  min={5}
                  max={35}
                  value={years}
                  onChange={(event) => setYears(Number(event.target.value) || 0)}
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
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-ink-800 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Your estimate
              </p>
              <div className="mt-4 text-3xl font-semibold text-slate-50">
                {formatAED(monthlyPayment)}
              </div>
              <p className="mt-2 text-sm text-muted">Estimated monthly payment</p>
              <div className="mt-6 grid gap-4 text-sm text-muted">
                <div className="flex items-center justify-between">
                  <span>Loan amount</span>
                  <span className="text-slate-100">
                    {formatAED(loanAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total interest</span>
                  <span className="text-slate-100">
                    {formatAED(totalInterest)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total payable</span>
                  <span className="text-slate-100">
                    {formatAED(totalPayable)}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-slate-50">
                Ready for a precise quote?
              </h3>
              <p className="mt-3 text-sm text-muted">
                Provide your profile and we will match you to the strongest
                banks for your situation.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/eligibility-checker"
                  className={cn(buttonVariants({ className: "w-full" }))}
                >
                  Start eligibility check
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "secondary", className: "w-full" })
                  )}
                >
                  Speak with an advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
