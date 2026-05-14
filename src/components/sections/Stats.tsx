import { stats } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl font-semibold text-slate-50">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
