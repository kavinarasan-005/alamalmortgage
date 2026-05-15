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
          <motion.div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr]" whileHover={cardHover.hover} initial="rest" animate="rest">
            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Book your consultation
              </p>
              <motion.h2 variants={itemFadeUp} className="text-3xl font-semibold sm:text-4xl">
                Speak with a senior mortgage advisor today
              </motion.h2>
              <motion.p variants={itemFadeUp} className="text-muted">
                We respond within 30 minutes during working hours with a clear
                eligibility review and bank shortlist.
              </motion.p>
              <motion.div variants={itemFadeUp} className="rounded-2xl border border-white/10 bg-ink-800 px-6 py-5 text-sm text-slate-100">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-gold-400" />
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
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100 transition duration-200 focus-visible:border-gold-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50"
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
              <p className="text-xs text-muted">
                By submitting, you agree to receive communication from Al Amal
                Mortgage. We will never share your details.
              </p>
              {submitted ? (
                <p className="text-xs text-gold-400" role="status">
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
