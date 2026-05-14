import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/Reveal";
import { stats, team, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Al Amal",
  description:
    "Learn about Al Amal Mortgage, our founder story, UAE mortgage expertise, and advisory values.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="A modern mortgage consultancy built on trust"
        description="We combine premium advisory, transparent pricing, and bank-level execution to help UAE buyers secure the right mortgage with clarity."
      />

      <section className="section bg-ink-900">
        <div className="mx-auto grid max-w-6xl gap-10 container-pad lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Our story
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Founded to simplify high-stakes mortgage decisions
              </h2>
              <p className="text-muted">
                After a decade in UAE retail banking, our founder saw borrowers
                overwhelmed by inconsistent advice and unclear requirements. Al
                Amal Mortgage was created to deliver a boutique, transparent
                advisory experience backed by real lender relationships.
              </p>
              <p className="text-muted">
                Today, we guide residents and international investors with
                tailored lender shortlists, clean documentation, and a proactive
                approval process.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card overflow-hidden rounded-3xl p-3">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
                alt="Advisory team meeting"
                width={720}
                height={720}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink-850">
        <div className="mx-auto max-w-6xl container-pad">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-2xl font-semibold text-slate-50">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-900">
        <div className="mx-auto max-w-6xl container-pad">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Leadership
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Your dedicated mortgage advisors
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-50">
                  {member.name}
                </h3>
                <p className="text-sm text-gold-400">{member.role}</p>
                <p className="mt-3 text-sm text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-850">
        <div className="mx-auto max-w-6xl container-pad">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Mission & values
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Premium experience, real outcomes
              </h2>
              <p className="mt-3 text-muted">
                We aim to elevate mortgage advisory standards in the UAE through
                strategy, transparency, and execution discipline.
              </p>
            </div>
            <div className="grid gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-50">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
