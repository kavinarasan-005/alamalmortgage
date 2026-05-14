"use client";

import { FormEvent, useState } from "react";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Book your consultation
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Speak with a senior mortgage advisor today
              </h2>
              <p className="text-muted">
                We respond within 30 minutes during working hours with a clear
                eligibility review and bank shortlist.
              </p>
              <div className="rounded-2xl border border-white/10 bg-ink-800 px-6 py-5 text-sm text-slate-100">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-gold-400" />
                  Instant callback available for urgent cases.
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <Input
                placeholder="Full name"
                name="fullName"
                autoComplete="name"
                required
              />
              <Input
                placeholder="Email address"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
              <Input
                placeholder="Phone number"
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                required
              />
              <select
                aria-label="Mortgage type"
                name="mortgageType"
                required
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Mortgage type
                </option>
                <option>Residential mortgage</option>
                <option>Commercial mortgage</option>
                <option>Refinance / buyout</option>
                <option>Non-resident mortgage</option>
                <option>Equity release</option>
                <option>Off-plan financing</option>
              </select>
              <Textarea
                placeholder="Tell us about your property goals"
                name="message"
                maxLength={500}
              />
              <Button type="submit" className="w-full" disabled={submitted}>
                {submitted ? "Request received" : "Request consultation"}
              </Button>
              <p className="text-xs text-muted">
                By submitting, you agree to receive communication from Al Amal
                Mortgage. We will never share your details.
              </p>
              {submitted ? (
                <p className="text-xs text-gold-400" role="status">
                  Thanks! Our team will be in touch shortly.
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
