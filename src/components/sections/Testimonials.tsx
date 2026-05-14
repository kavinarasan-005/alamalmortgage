import { testimonials } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="section bg-ink-850">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Client testimonials
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Trust built through real results
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="min-w-[280px] max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm text-slate-100">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 text-sm font-semibold text-slate-50">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
