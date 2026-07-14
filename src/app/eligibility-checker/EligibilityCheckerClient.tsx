"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Phone, User } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitToFormSubmit } from "@/lib/formSubmit";

const steps = [
  "Nationality",
  "Residency",
  "Income",
  "Employment",
  "Property",
  "Contact",
];

export function EligibilityCheckerClient() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    nationality: "",
    residency: "",
    income: "",
    employment: "",
    propertyValue: "",
    name: "",
    phone: "",
  });
  const [incomeError, setIncomeError] = useState("");
  const [propertyValueError, setPropertyValueError] = useState("");

  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step]
  );

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const stepValid = useMemo(() => {
    if (step === 0) return form.nationality.length > 0;
    if (step === 1) return form.residency.length > 0;
    if (step === 2) return Number(form.income) >= 10000;
    if (step === 3) return form.employment.length > 0;
    if (step === 4) return Number(form.propertyValue) >= 450000;
    if (step === 5) return form.name.trim().length > 1 && form.phone.trim().length >= 7;
    return false;
  }, [form, step]);

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    if (!stepValid || loading) return;

    setLoading(true);
    setSubmitError("");

    const result = await submitToFormSubmit(
      {
        Name: form.name,
        Phone: form.phone,
        Nationality: form.nationality,
        Residency: form.residency,
        "Monthly Income (AED)": form.income,
        "Employment Type": form.employment,
        "Property Value (AED)": form.propertyValue,
      },
      { subject: "New eligibility check lead" }
    );

    setLoading(false);

    if (!result.ok) {
      setSubmitError(
        result.needsActivation
          ? "We could not deliver this request yet. Please call 800-2060 or WhatsApp +971 55 470 1475 and our team will help you immediately."
          : result.message
      );
      return;
    }

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
                  <span>Income: AED {Number(form.income).toLocaleString()}/month</span>
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
                      What is your monthly income (AED)?
                    </h3>
                    <Input
                      type="number"
                      min={0}
                      value={form.income}
                      onChange={(e) => {
                        update("income", e.target.value);
                        setIncomeError(
                          e.target.value && Number(e.target.value) < 10000
                            ? "Minimum income required is AED 10,000."
                            : ""
                        );
                      }}
                      placeholder="e.g. 25000"
                    />
                    {incomeError && (
                      <p className="text-sm text-red-500">{incomeError}</p>
                    )}
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
                      onChange={(e) => {
                        update("propertyValue", e.target.value);
                        setPropertyValueError(
                          e.target.value && Number(e.target.value) < 450000
                            ? "Minimum property value required is AED 450,000."
                            : ""
                        );
                      }}
                      placeholder="e.g. 2200000"
                    />
                    {propertyValueError && (
                      <p className="text-sm text-red-500">{propertyValueError}</p>
                    )}
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
                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 focus-within:border-gold-500/60 focus-within:ring-4 focus-within:ring-gold-500/10 transition-shadow duration-200">
                      <User className="h-4 w-4 shrink-0 text-muted" />
                      <input
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        className="h-11 w-full bg-transparent text-sm text-foreground placeholder:text-muted outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 focus-within:border-gold-500/60 focus-within:ring-4 focus-within:ring-gold-500/10 transition-shadow duration-200">
                      <Phone className="h-4 w-4 shrink-0 text-muted" />
                      <input
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="Phone number (e.g. +971 55 123 4567)"
                        autoComplete="tel"
                        required
                        className="h-11 w-full bg-transparent text-sm text-foreground placeholder:text-muted outline-none"
                      />
                    </div>
                    <div className="card-soft card-pad-sm text-sm text-muted">
                      <p className="font-semibold text-foreground mb-2">Your profile</p>
                      <div className="grid gap-1">
                        <span>Nationality: {form.nationality}</span>
                        <span>Residency: {form.residency}</span>
                        <span>Income: AED {Number(form.income).toLocaleString()}/month</span>
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
                  className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end"
                  whileHover={shouldReduceMotion || !stepValid || loading ? undefined : { scale: 1.01 }}
                  whileTap={shouldReduceMotion || !stepValid || loading ? undefined : { scale: 0.98 }}
                >
                  {submitError ? (
                    <p className="max-w-sm text-right text-sm text-red-500" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                  <Button
                    className="w-full sm:w-auto"
                    onClick={handleSubmit}
                    disabled={!stepValid || loading}
                  >
                    {loading ? "Sending…" : "Get My Options"}
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
