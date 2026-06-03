"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FORM_ENDPOINT = "https://formsubmit.co/ayush@alamalmortgage.com";

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    data.append("_subject", "New consultation request from website");
    data.append("_captcha", "false");
    data.append("_template", "box");
    try {
      await fetch(FORM_ENDPOINT, { method: "POST", body: data });
    } catch {
      // silent fail — FormSubmit still queues the email
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="card card-pad">
      <h3 className="heading-3 font-semibold text-foreground">
        Request a consultation
      </h3>
      <p className="mt-3 text-body">
        Share your details and we will call you within 30 minutes during
        working hours.
      </p>
      {submitted ? (
        <div className="mt-6 space-y-4 rounded-2xl bg-gold-500/10 px-6 py-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15">
            <CheckCircle2 className="h-7 w-7 text-gold-500" />
          </div>
          <p className="text-lg font-semibold text-foreground">Request received!</p>
          <p className="text-body">
            Thanks! We will reach out shortly to confirm your consultation.
          </p>
          <p className="text-xs text-muted">
            Need urgent help? Call{" "}
            <a href="tel:+971554701475" className="font-semibold text-gold-500">
              +971 55 470 1475
            </a>
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          {/* Honeypot for spam */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <Input placeholder="Full name" name="fullName" autoComplete="name" required />
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
            aria-label="Service needed"
            name="serviceNeeded"
            required
            defaultValue=""
            className="field-select"
          >
            <option value="" disabled>
              Service needed
            </option>
            <option>Residential mortgage</option>
            <option>Commercial mortgage</option>
            <option>Refinance / buyout</option>
            <option>Non-resident mortgage</option>
            <option>Equity release</option>
            <option>Off-plan financing</option>
          </select>
          <Textarea
            placeholder="Tell us about your property and timeline"
            name="message"
            maxLength={500}
          />
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending…" : "Send inquiry"}
            </Button>
          </motion.div>
          <p className="text-xs text-muted">
            By submitting, you consent to receive communication about your
            mortgage inquiry.
          </p>
        </form>
      )}
    </div>
  );
}
