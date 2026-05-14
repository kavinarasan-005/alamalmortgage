import { processSteps } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function ProcessSteps() {
  return (
    <section className="section bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Our process
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Structured, transparent, and fast
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-gold-400">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
