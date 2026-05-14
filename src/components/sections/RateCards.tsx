import { rateCards } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function RateCards() {
  return (
    <section className="section-tight bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                  Live mortgage rates
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-50">
                  Today&apos;s indicative rates
                </h2>
              </div>
              <span className="text-xs text-muted">
                Updated daily. Final rates depend on profile.
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {rateCards.map((rate) => (
                <div
                  key={rate.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5"
                >
                  <div className="text-sm text-muted">{rate.title}</div>
                  <div className="mt-3 text-3xl font-semibold text-gold-400">
                    {rate.rate}
                  </div>
                  <div className="mt-2 text-xs text-muted">{rate.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
