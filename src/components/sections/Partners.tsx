import { partners } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Partners() {
  return (
    <section className="section-tight bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
              Trusted bank partners
            </p>
            <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-5">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
