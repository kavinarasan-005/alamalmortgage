"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { cardHover, ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

const FORM_ENDPOINT = "https://formsubmit.co/ayush@alamalmortgage.com";

interface LeadFormProps {
  variant?: "section" | "hero";
}

export function LeadForm({ variant = "section" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isHero = variant === "hero";

  const formMotionProps = isHero
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } };

  const form = submitted ? (
    <div className="space-y-3 py-4 text-center">
      <p className="text-lg font-semibold text-gold-500">Request received!</p>
      <p className="text-body">
        Thanks! Our team will be in touch shortly.
      </p>
    </div>
  ) : (
    <motion.form
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={() => {
        setTimeout(() => setSubmitted(true), 100);
      }}
      className="space-y-4"
      variants={staggerContainer}
      {...formMotionProps}
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value="New lead from website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_next" value="https://alamalmortgage.ae" />

      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
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
        className="field-select"
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
        <Button type="submit" className="w-full">
          Request consultation
        </Button>
      </motion.div>
      <p className="text-xs text-muted">
        By submitting, you agree to receive communication from Al Amal
        Mortgage. We will never share your details.
      </p>
    </motion.form>
  );

  if (isHero) {
    return (
      <motion.div
        className="card card-pad-md"
        whileHover={cardHover.hover}
        initial="rest"
        animate="rest"
      >
        <div className="space-y-2 pb-4">
          <p className="eyebrow">
            Free consultation
          </p>
          <h3 className="heading-3 font-semibold text-foreground">
            Talk to a mortgage advisor today
          </h3>
          <p className="text-body">
            Share your details and we will respond within 30 minutes during
            working hours.
          </p>
        </div>
        {form}
      </motion.div>
    );
  }

  return (
    <section className="section bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="card card-pad grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
            whileHover={cardHover.hover}
            initial="rest"
            animate="rest"
          >
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="eyebrow">
                Free consultation
              </p>
              <motion.h2
                variants={itemFadeUp}
                className="heading-2 font-semibold"
              >
                Talk to a mortgage advisor today
              </motion.h2>
              <motion.p variants={itemFadeUp} className="text-body">
                We respond within 30 minutes during working hours with your
                eligibility review and the next steps.
              </motion.p>
              <motion.div
                variants={itemFadeUp}
                className="card-soft card-pad-sm text-sm text-foreground"
              >
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-gold-500" />
                  Instant callback available for urgent cases.
                </div>
              </motion.div>
            </motion.div>

            {form}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
