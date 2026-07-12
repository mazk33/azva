import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { MetricCard } from "@/components/ui/metric-card";
import { SectionClosing } from "@/components/ui/section-closing";
import { ButtonLink } from "@/components/ui/button";
import { ConfidenceMatrix } from "@/components/brand";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "PRIZM | Operational Intelligence",
  description: "PRIZM is AZVA's proprietary framework for evaluating automation readiness, transformation potential, and unrealized enterprise value.",
  path: "/prizm",
});


const indices = [
  {
    metric: "AFI",
    label: "Automation Feasibility Index",
    copy: "How automatable are the underlying operational processes?",
  },
  {
    metric: "AVI",
    label: "Automation Value Index",
    copy: "What measurable economic and operational value can be unlocked?",
  },
  {
    metric: "ARI",
    label: "Automation Realization Index",
    copy: "What return can be expected relative to implementation effort and cost?",
  },
  {
    metric: "ACI",
    label: "Automation Confidence Index",
    copy: "A composite view of automation maturity, readiness, and value potential.",
  },
];

const useCases = [
  "M&A and investment diligence",
  "Enterprise transformation planning",
  "Automation roadmap prioritization",
  "Operational value discovery",
  "Portfolio-level benchmarking",
  "Public automation maturity signaling",
];

export default function PrizmPage() {
  return (
    <main id="main-content">
      <Navbar />

      <section className="bg-[var(--azva-primary)] text-[var(--azva-canvas)]">
        <div className="container-azva pb-20 pt-[calc(88px+2.5rem)] sm:pb-24 sm:pt-[calc(88px+3rem)] lg:pb-24 lg:pt-[calc(88px+3.5rem)]">
          <div className="grid gap-14 xl:grid-cols-[1.12fr_0.88fr] xl:items-start xl:gap-16">
            <div className="max-w-3xl">
              <p className="eyebrow mb-7 text-[var(--azva-accent)]">
                PRIZM™
              </p>

              <h1 className="max-w-[760px] text-[clamp(3.4rem,6.1vw,6.35rem)] font-medium leading-[0.94] tracking-[-0.075em] text-[var(--azva-canvas)]">
                Quantifying confidence in operational intelligence.
              </h1>

              <p className="mt-8 max-w-[660px] text-lg leading-8 text-white/72 sm:text-xl sm:leading-9">
                PRIZM™ is AZVA&apos;s proprietary framework for evaluating automation
                readiness, transformation potential, and unrealized enterprise value.
              </p>

              <div className="mt-8">
                <ButtonLink
                  href="/connect"
                  variant="secondary"
                  className="border-white/30 bg-[var(--azva-canvas)] text-[var(--azva-primary)] hover:border-[var(--azva-accent)] hover:bg-white"
                >
                  Request Access
                </ButtonLink>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[560px] xl:mt-[4.2rem] xl:justify-self-end">
              <ConfidenceMatrix />
            </div>
          </div>

          <div className="mt-20 border-t border-white/12 pt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {indices.map((item) => (
                <MetricCard
                  key={item.metric}
                  metric={item.metric}
                  label={item.label}
                  dark
                  elevated
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="Purpose"
            title="Operational complexity needs measurable clarity."
            index="01"
          />

          <div className="space-y-6 body-lg">
            <p>
              Most organizations know automation can create value. Few can quantify
              where that value sits, how feasible it is to capture, or whether the
              investment case is strong enough to act.
            </p>

            <p>
              PRIZM translates process-level operational data into decision-grade
              intelligence for leadership teams, investors, and transformation
              operators.
            </p>
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva">
          <SectionHeader
            label="Framework"
            title="Four indices. One confidence view."
            index="02"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {indices.map((item) => (
              <div key={item.metric} className="card-azva p-6">
                <MetricCard metric={item.metric} label={item.label} />
                <p className="body-md mt-6">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter bg-[var(--azva-primary)] text-[var(--azva-canvas)]">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="How It Works"
            title="From process data to transformation intelligence."
            index="03"
            theme="dark"
          />

          <div className="grid gap-4">
            {[
              ["01", "Capture process-level operating data."],
              ["02", "Score feasibility, value, and realization potential."],
              ["03", "Surface process, function, and company-level insights."],
              ["04", "Prioritize action through a measurable automation confidence view."],
            ].map(([step, copy]) => (
              <div
                key={step}
                className="rounded-[28px] border border-white/12 bg-white/[0.04] p-6"
              >
                <p className="text-sm text-[var(--azva-accent)]">{step}</p>
                <p className="mt-4 text-xl leading-8 text-white/78">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="Applications"
            title="Built for transformation and investment environments."
            index="04"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="border-t border-[var(--azva-border)] py-6 text-xl tracking-[-0.03em] text-[var(--azva-primary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="request-access" className="section-azva azva-chapter">
        <div className="container-azva grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              label="Access"
              title="Evaluate automation potential with greater confidence."
              index="05"
            />

            <p className="body-lg mt-8 max-w-2xl">
              PRIZM is currently available through selected AZVA advisory and
              transformation engagements.
            </p>
          </div>

          <ButtonLink
            href="#request-access"
            variant="secondary"
            className="border-white/30 bg-[var(--azva-canvas)] text-[var(--azva-primary)] hover:border-[var(--azva-accent)] hover:bg-white"
          >
            Request Access
          </ButtonLink>
        </div>
      </section>

      <SectionClosing>
        Intelligence becomes valuable when it changes the quality of decisions.
      </SectionClosing>

      <Footer />
    </main>
  );
}