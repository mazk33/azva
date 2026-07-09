import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";

const capabilities = [
  {
    title: "Strategic Advisory",
    copy: "Helping leaders navigate high-consequence decisions with clarity, perspective, and long-term thinking.",
  },
  {
    title: "Enterprise Transformation",
    copy: "Designing organizations that scale through aligned strategy, operational excellence, and intelligent execution.",
  },
  {
    title: "Operational Intelligence",
    copy: "Building decision systems that combine data, automation, AI, and human judgment to improve performance.",
  },
  {
    title: "Venture Partnerships",
    copy: "Working selectively alongside founders where long-term alignment creates greater value than traditional consulting.",
  },
  {
    title: "Proprietary Intelligence",
    copy: "Developing frameworks and platforms that transform complexity into measurable insight.",
  },
];

const principles = [
  ["Think in systems.", "Every decision belongs to a larger operating environment."],
  ["Align before you optimize.", "Technology should accelerate strategy, not compensate for its absence."],
  ["Measure what matters.", "Transformation is measured by enduring capability, not activity."],
  ["Build for resilience.", "Organizations should become stronger through change, not dependent on it."],
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="min-h-screen pt-40">
        <div className="container-azva grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow mb-8">AZVA</p>
            <h1 className="display-xl max-w-5xl">
              Purpose Aligned.
              <br />
              <span className="font-[var(--font-fraunces)] italic text-[var(--azva-accent)]">
                Value
              </span>{" "}
              Delivered.
            </h1>

            <p className="body-lg mt-10 max-w-2xl">
              AZVA partners with founders, executives, investors, and enterprises to align strategy,
              operations, technology, and capital into enduring value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#perspective" className="btn-secondary">
                Explore Our Thinking
              </a>
            </div>
          </div>

          <div className="card-azva relative hidden min-h-[560px] overflow-hidden lg:block">
            <div className="absolute inset-8 rounded-[32px] border border-[var(--azva-border)]" />
            <div className="absolute left-12 top-16 h-40 w-40 rounded-full border border-[var(--azva-accent)]/40" />
            <div className="absolute bottom-20 right-16 h-64 w-64 rounded-full bg-[var(--azva-primary)]/10 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid h-72 w-72 rotate-45 grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[var(--azva-primary)]" />
                <div className="rounded-3xl border border-[var(--azva-accent)]" />
                <div className="rounded-3xl border border-[var(--azva-moss)]" />
                <div className="rounded-3xl bg-[var(--azva-accent)]/75" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="perspective" className="section-azva border-t border-[var(--azva-border)]">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">The AZVA Perspective</p>
          <div>
            <h2 className="heading-xl">Where purpose meets performance.</h2>
            <div className="mt-8 space-y-6 body-lg">
              <p>Organizations rarely fail because of a lack of ambition.</p>
              <p>
                They drift when vision, operations, technology, and leadership evolve in different
                directions.
              </p>
              <p>AZVA exists to restore alignment.</p>
              <p>
                We help organizations think more clearly, decide more confidently, and execute with
                discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-azva">
        <div className="container-azva">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Capabilities</p>
            <h2 className="heading-xl">How AZVA creates value.</h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="card-azva p-8">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--azva-primary)]">
                  {item.title}
                </h3>
                <p className="body-md mt-5">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="section-azva dark-section">
        <div className="container-azva">
          <p className="eyebrow mb-6 text-[var(--azva-accent)]">How We Think</p>
          <h2 className="heading-xl max-w-4xl text-[var(--azva-canvas)]">
            Strategy without alignment creates motion. Alignment creates momentum.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {principles.map(([title, copy]) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/12 bg-white/[0.04] p-8"
              >
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--azva-canvas)]">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-white/68">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="section-azva">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-6">Ventures</p>
            <h2 className="heading-xl">Some opportunities deserve more than advice.</h2>
          </div>
          <div className="space-y-6 body-lg">
            <p>
              AZVA selectively partners with founders and leadership teams where values, ambition,
              and execution are deeply aligned.
            </p>
            <p>
              These relationships may extend beyond advisory into strategic partnerships, advisory
              equity, investment readiness, select investor introductions, and direct investment in
              exceptional opportunities.
            </p>
            <p className="font-[var(--font-fraunces)] text-3xl italic leading-tight text-[var(--azva-primary)]">
              We do not invest in ideas. We invest in conviction, capability, and alignment.
            </p>
          </div>
        </div>
      </section>

      <section id="prizm" className="section-azva border-y border-[var(--azva-border)]">
        <div className="container-azva">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow mb-6">PRIZM™</p>
              <h2 className="heading-xl">Quantifying confidence in operational intelligence.</h2>
            </div>
            <div className="space-y-6 body-lg">
              <p>
                PRIZM™ is AZVA&apos;s proprietary operational intelligence framework. It evaluates
                automation readiness, transformation potential, and unrealized enterprise value
                through a structured, evidence-based methodology.
              </p>
              <p>
                By translating operational complexity into measurable insight, PRIZM helps leaders
                make better investment, transformation, and acquisition decisions with confidence.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {["AFI", "AVI", "ARI", "ACI"].map((score) => (
              <div key={score} className="card-azva p-6">
                <div className="text-4xl font-semibold tracking-[-0.06em] text-[var(--azva-primary)]">
                  {score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-azva">
        <div className="container-azva grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-6">Contact</p>
            <h2 className="heading-xl">Build with clarity.</h2>
            <p className="body-lg mt-8 max-w-2xl">
              Whether you&apos;re scaling an enterprise, transforming operations, evaluating an
              investment, or building your next venture, every enduring outcome begins with better
              decisions.
            </p>
          </div>

          <a href="mailto:hello@azva.us" className="btn-primary w-fit">
            Start the Conversation <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[var(--azva-border)] py-10">
        <div className="container-azva flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <Image
            src="/brand/azva-logo.png"
            alt="AZVA"
            width={140}
            height={44}
            className="h-8 w-auto"
          />
          <p className="text-sm text-[rgba(14,14,14,0.58)]">
            Purpose Aligned. Value Delivered.
          </p>
        </div>
      </footer>
    </main>
  );
}