"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-2xl font-semibold text-slate-50">
        Request a consultation
      </h3>
      <p className="mt-3 text-sm text-muted">
        Share your details and we will call you within 30 minutes during
        working hours.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="website"
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
          className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100"
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
        <Button type="submit" className="w-full" disabled={submitted}>
          {submitted ? "Request received" : "Send inquiry"}
        </Button>
        <p className="text-xs text-muted">
          By submitting, you consent to receive communication about your
          mortgage inquiry.
        </p>
        {submitted ? (
          <p className="text-xs text-gold-400" role="status">
            Thanks! We will reach out shortly to confirm your consultation.
          </p>
        ) : null}
      </form>
    </div>
  );
}
