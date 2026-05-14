import { trustSignals } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function WhyChooseUs() {
  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Why choose Al Amal
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Premium advisory, built for confident decisions
              </h2>
              <p className="text-muted">
                We combine expert advisory, real-time rate benchmarking, and a
                white-glove experience to make mortgages feel effortless.
              </p>
            </div>
            <div className="grid gap-4">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-50">
                          {signal.title}
                        </h3>
                        <p className="text-sm text-muted">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
