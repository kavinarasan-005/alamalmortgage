"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";
import { submitToFormSubmit } from "@/lib/formSubmit";
import { cardHover, ctaPulse, itemFadeUp, staggerContainer } from "@/lib/motion";

interface LeadFormProps {
  variant?: "section" | "hero";
}

export function LeadForm({ variant = "section" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isHero = variant === "hero";

  const formMotionProps = isHero
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitToFormSubmit(data, {
      subject: "New lead from website",
    });

    setLoading(false);

    if (!result.ok) {
      setError(
        result.needsActivation
          ? "We could not deliver this request yet. Please call 800-2060 or WhatsApp +971 55 470 1475 and our team will help you immediately."
          : result.message
      );
      return;
    }

    setSubmitted(true);
  };

  const form = submitted ? (
    <div className="space-y-4 rounded-2xl bg-gold-500/10 px-6 py-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15">
        <CheckCircle2 className="h-7 w-7 text-gold-500" />
      </div>
      <p className="text-lg font-semibold text-foreground">Request received!</p>
      <p className="text-body">
        Thanks! Our team will be in touch shortly.
      </p>
    </div>
  ) : (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      variants={staggerContainer}
      {...formMotionProps}
    >
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
      {error ? (
        <p className="rounded-xl bg-red-500/10 px-3 py-2 text-sm text-red-500" role="alert">
          {error}
        </p>
      ) : null}
      <motion.div whileHover={ctaPulse.hover} whileTap={{ scale: 0.98 }}>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending…" : "Request consultation"}
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
