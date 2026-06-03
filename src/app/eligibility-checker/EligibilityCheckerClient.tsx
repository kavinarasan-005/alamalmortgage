"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Phone, User } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FORM_ENDPOINT = "https://formsubmit.co/ayush@alamalmortgage.com";

const steps = [
  "Nationality",
  "Residency",
  "Salary",
  "Employment",
  "Property",
  "Contact",
];

export function EligibilityCheckerClient() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nationality: "",
    residency: "",
    salary: "",
    employment: "",
    propertyValue: "",
    name: "",
    phone: "",
  });

  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step]
  );

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const stepValid = useMemo(() => {
    if (step === 0) return form.nationality.length > 0;
    if (step === 1) return form.residency.length > 0;
    if (step === 2) return Number(form.salary) > 0;
    if (step === 3) return form.employment.length > 0;
    if (step === 4) return Number(form.propertyValue) > 0;
    if (step === 5) return form.name.trim().length > 1 && form.phone.trim().length >= 7;
    return false;
  }, [form, step]);

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = () => {
    if (!stepValid) return;

    const formData = new FormData();
    formData.append("_subject", "New eligibility check lead");
    formData.append("_captcha", "false");
    formData.append("_template", "box");
    formData.append("Name", form.name);
    formData.append("Phone", form.phone);
    formData.append("Nationality", form.nationality);
    formData.append("Residency", form.residency);
    formData.append("Monthly Salary (AED)", form.salary);
    formData.append("Employment Type", form.employment);
    formData.append("Property Value (AED)", form.propertyValue);

    fetch(FORM_ENDPOINT, { method: "POST", body: formData })
      .catch(() => { /* silent fail – email still queued by FormSubmit */ });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <PageHeader
          eyebrow="Eligibility check"
          title="You're all set!"
          description="Our mortgage advisors will review your profile and contact you shortly."
        />
        <section className="section bg-ink-850">
          <div className="container-narrow">
            <motion.div
              className="card card-pad text-center space-y-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15">
                <CheckCircle2 className="h-8 w-8 text-gold-500" />
              </div>
              <h2 className="heading-2 font-semibold text-foreground">
                Thank you, {form.name.split(" ")[0]}!
              </h2>
              <p className="text-body max-w-md mx-auto">
                Based on your profile, our advisors will prepare personalised
                mortgage options for you. Expect a call within 30 minutes during
                working hours.
              </p>
              <div className="card-soft card-pad-sm max-w-sm mx-auto text-left text-sm text-muted">
                <p className="font-semibold text-foreground mb-2">Your profile summary</p>
                <div className="grid gap-1">
                  <span>Nationality: {form.nationality}</span>
                  <span>Residency: {form.residency}</span>
                  <span>Salary: AED {Number(form.salary).toLocaleString()}/month</span>
                  <span>Employment: {form.employment}</span>
                  <span>Property: AED {Number(form.propertyValue).toLocaleString()}</span>
                </div>
              </div>
              <p className="text-xs text-muted">
                Need urgent help? Call us directly at{" "}
                <a href="tel:+971554701475" className="text-gold-500 font-semibold">
                  +971 55 470 1475
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="Eligibility check"
        title="See how quickly you can qualify"
        description="Answer a few quick questions and our advisors will contact you with personalised mortgage options."
      />

      <section className="section bg-ink-850">
        <div className="container-narrow">
          <div className="card card-pad">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>
                Step {step + 1} of {steps.length}
              </span>
              <span>{progress}% complete</span>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-surface-2">
              <motion.div
                className="h-1 rounded-full bg-gold-500"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                }
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="mt-8 space-y-4"
              >
                {step === 0 && (
                  <div className="space-y-3">
                    <h3 className="heading-3 font-semibold text-foreground">
                      What is your nationality?
                    </h3>
                    <select
                      aria-label="Nationality"
                      value={form.nationality}
                      onChange={(e) => update("nationality", e.target.value)}
                      className="field-select"
                    >
                      <option value="">Select nationality</option>
                      <option value="UAE">UAE</option>
                      <option value="GCC">GCC</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-3">
                    <h3 className="heading-3 font-semibold text-foreground">
                      Are you a UAE resident?
                    </h3>
                    <select
                      aria-label="Residency"
                      value={form.residency}
                      onChange={(e) => update("residency", e.target.value)}
                      className="field-select"
                    >
                      <option value="">Select status</option>
                      <option value="Resident">Resident</option>
                      <option value="Non-resident">Non-resident</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <h3 className="heading-3 font-semibold text-foreground">
                      What is your monthly salary (AED)?
                    </h3>
                    <Input
                      type="number"
                      min={0}
                      value={form.salary}
                      onChange={(e) => update("salary", e.target.value)}
                      placeholder="e.g. 25000"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3">
                    <h3 className="heading-3 font-semibold text-foreground">
                      Employment type
                    </h3>
                    <select
                      aria-label="Employment type"
                      value={form.employment}
                      onChange={(e) => update("employment", e.target.value)}
                      className="field-select"
                    >
                      <option value="">Select employment</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Self-employed">Self-employed</option>
                      <option value="Business owner">Business owner</option>
                    </select>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-3">
                    <h3 className="heading-3 font-semibold text-foreground">
                      Expected property value (AED)
                    </h3>
                    <Input
                      type="number"
                      min={0}
                      value={form.propertyValue}
                      onChange={(e) => update("propertyValue", e.target.value)}
                      placeholder="e.g. 2200000"
                    />
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="heading-3 font-semibold text-foreground">
                        Almost done! How can we reach you?
                      </h3>
                      <p className="text-body">
                        Our mortgage advisors will review your profile and call you
                        with personalised options — usually within 30 minutes.
                      </p>
                    </div>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                      <Input
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        className="pl-11"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                      <Input
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="Phone number (e.g. +971 55 123 4567)"
                        autoComplete="tel"
                        className="pl-11"
                        required
                      />
                    </div>
                    <div className="card-soft card-pad-sm text-sm text-muted">
                      <p className="font-semibold text-foreground mb-2">Your profile</p>
                      <div className="grid gap-1">
                        <span>Nationality: {form.nationality}</span>
                        <span>Residency: {form.residency}</span>
                        <span>Salary: AED {Number(form.salary).toLocaleString()}/month</span>
                        <span>Employment: {form.employment}</span>
                        <span>Property: AED {Number(form.propertyValue).toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted">
                      By continuing, you agree to receive a call from our advisory team.
                      We never share your details with third parties.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <motion.div
                whileHover={shouldReduceMotion || step === 0 ? undefined : { scale: 1.01 }}
                whileTap={shouldReduceMotion || step === 0 ? undefined : { scale: 0.98 }}
              >
                <Button variant="outline" onClick={back} disabled={step === 0}>
                  Back
                </Button>
              </motion.div>
              {step < steps.length - 1 ? (
                <motion.div
                  whileHover={shouldReduceMotion || !stepValid ? undefined : { scale: 1.01 }}
                  whileTap={shouldReduceMotion || !stepValid ? undefined : { scale: 0.98 }}
                >
                  <Button onClick={next} disabled={!stepValid}>
                    Next
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={shouldReduceMotion || !stepValid ? undefined : { scale: 1.01 }}
                  whileTap={shouldReduceMotion || !stepValid ? undefined : { scale: 0.98 }}
                >
                  <Button
                    className="w-full sm:w-auto"
                    onClick={handleSubmit}
                    disabled={!stepValid}
                  >
                    Get My Options
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
