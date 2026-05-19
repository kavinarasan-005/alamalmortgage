"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { cardHover, ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

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
          <motion.div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:grid-cols-[1.1fr_0.9fr]" whileHover={cardHover.hover} initial="rest" animate="rest">
            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Free consultation
              </p>
              <motion.h2 variants={itemFadeUp} className="text-3xl font-semibold sm:text-4xl">
                Talk to a mortgage advisor today
              </motion.h2>
              <motion.p variants={itemFadeUp} className="text-slate-600">
                We respond within 30 minutes during working hours with your
                eligibility review and the next steps.
              </motion.p>
              <motion.div variants={itemFadeUp} className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-gold-500" />
                  Instant callback available for urgent cases.
                </div>
              </motion.div>
            </motion.div>

            <motion.form onSubmit={handleSubmit} className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
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
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 transition duration-200 focus-visible:border-gold-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/30 focus-visible:shadow-[0_0_0_4px_rgba(184,137,62,0.12)]"
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
              <motion.div whileHover={ctaPulse.hover} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full" disabled={submitted}>
                  {submitted ? "Request received" : "Request consultation"}
                </Button>
              </motion.div>
              <p className="text-xs text-slate-500">
                By submitting, you agree to receive communication from Al Amal
                Mortgage. We will never share your details.
              </p>
              {submitted ? (
                <p className="text-xs text-gold-500" role="status">
                  Thanks! Our team will be in touch shortly.
                </p>
              ) : null}
            </motion.form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
