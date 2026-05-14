"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  "Nationality",
  "Residency",
  "Salary",
  "Employment",
  "Property",
];

export function EligibilityCheckerClient() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nationality: "",
    residency: "",
    salary: "",
    employment: "",
    propertyValue: "",
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
    return false;
  }, [form, step]);

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <PageHeader
        eyebrow="Eligibility check"
        title="See how quickly you can qualify"
        description="Answer five short questions and we will match you to the best UAE mortgage options."
      />

      <section className="section bg-ink-900">
        <div className="mx-auto max-w-4xl container-pad">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>
                Step {step + 1} of {steps.length}
              </span>
              <span>{progress}% complete</span>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-white/10">
              <div
                className="h-1 rounded-full bg-gold-500"
                style={{ width: `${progress}%` }}
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
                    <h3 className="text-xl font-semibold text-slate-50">
                      What is your nationality?
                    </h3>
                    <select
                      aria-label="Nationality"
                      value={form.nationality}
                      onChange={(event) =>
                        update("nationality", event.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100"
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
                    <h3 className="text-xl font-semibold text-slate-50">
                      Are you a UAE resident?
                    </h3>
                    <select
                      aria-label="Residency"
                      value={form.residency}
                      onChange={(event) => update("residency", event.target.value)}
                      className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100"
                    >
                      <option value="">Select status</option>
                      <option value="Resident">Resident</option>
                      <option value="Non-resident">Non-resident</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-50">
                      What is your monthly salary (AED)?
                    </h3>
                    <Input
                      type="number"
                      min={0}
                      value={form.salary}
                      onChange={(event) => update("salary", event.target.value)}
                      placeholder="e.g. 25000"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-50">
                      Employment type
                    </h3>
                    <select
                      aria-label="Employment type"
                      value={form.employment}
                      onChange={(event) =>
                        update("employment", event.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-100"
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
                    <h3 className="text-xl font-semibold text-slate-50">
                      Expected property value (AED)
                    </h3>
                    <Input
                      type="number"
                      min={0}
                      value={form.propertyValue}
                      onChange={(event) =>
                        update("propertyValue", event.target.value)
                      }
                      placeholder="e.g. 2200000"
                    />
                    <div className="rounded-2xl border border-white/10 bg-ink-800 p-4 text-sm text-muted">
                      <p className="text-slate-100">Summary</p>
                      <div className="mt-2 grid gap-1">
                        <span>Nationality: {form.nationality || "-"}</span>
                        <span>Residency: {form.residency || "-"}</span>
                        <span>Salary: {form.salary || "-"} AED</span>
                        <span>Employment: {form.employment || "-"}</span>
                        <span>Property: {form.propertyValue || "-"} AED</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button
                variant="outline"
                onClick={back}
                disabled={step === 0}
              >
                Back
              </Button>
              {step < steps.length - 1 ? (
                <Button onClick={next} disabled={!stepValid}>
                  Next
                </Button>
              ) : (
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => router.push("/contact")}
                  disabled={!stepValid}
                >
                  Get Expert Consultation
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
