import { faqs } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function FaqAccordion() {
  return (
    <section className="section bg-ink-900">
      <div className="mx-auto max-w-6xl container-pad">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                FAQs
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Mortgage questions, simplified
              </h2>
              <p className="mt-4 text-muted">
                Clear, bank-aligned answers so you can move forward with
                confidence.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-50">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
