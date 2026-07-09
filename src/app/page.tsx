import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { SectionClosing } from "@/components/ui/section-closing";
import { FadeIn, Reveal, Lift } from "@/components/ui/fade-in";
import { AlignmentGeometry } from "@/components/ui/alignment-geometry";

const capabilities = [
  {
    title: "Strategic Advisory",
    copy: "High-consequence decisions need more than analysis. AZVA helps leaders clarify direction, evaluate tradeoffs, and move with disciplined conviction.",
  },
  {
    title: "Enterprise Transformation",
    copy: "Transformation succeeds when strategy, systems, people, and execution reinforce one another. AZVA designs operating models built for coherence and scale.",
  },
  {
    title: "Operational Intelligence",
    copy: "We help organizations make better decisions by connecting data, automation, AI, and human judgment into practical operating systems.",
  },
  {
    title: "Venture Partnerships",
    copy: "For selected founders, AZVA works beyond advisory, supporting strategy, partnerships, investment readiness, and long-term value creation.",
  },
  {
    title: "Proprietary Intelligence",
    copy: "AZVA develops frameworks and platforms that turn complex operational questions into measurable insight, beginning with PRIZM.",
  },
];

const principles = [
  ["Think in systems.", "Every decision belongs to a larger operating environment."],
  ["Align before you optimize.", "Technology should accelerate strategy, not compensate for its absence."],
  ["Measure what matters.", "Transformation is measured by enduring capability, not activity."],
  ["Build for resilience.", "Organizations should become stronger through change, not dependent on it."],
];

const prizmScores = [
  ["AFI", "Automation Feasibility Index"],
  ["AVI", "Automation Value Index"],
  ["ARI", "Automation Realization Index"],
  ["ACI", "Automation Confidence Index"],
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="min-h-[92vh] pt-40 md:min-h-screen md:pt-48">
        <div className="container-azva grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div>
              <p className="eyebrow mb-8">AZVA</p>

              <h1 className="display-xl max-w-5xl">
                Purpose
                <br />
                Aligned.
                <br />
                <span className="font-[var(--font-fraunces)] italic text-[var(--azva-accent)]">
                  Value
                </span>
                <br />
                Delivered.
              </h1>

              <p className="body-lg mt-10 max-w-[540px]">
                AZVA partners with founders, executives, investors, and enterprises to
                align strategy, operations, technology, and capital into enduring value.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="#contact">Start the Conversation</ButtonLink>
                <ButtonLink href="#thinking" variant="secondary">
                  Explore Our Thinking
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          <Reveal delay={0.12}>
            <AlignmentGeometry />
          </Reveal>
        </div>
      </section>

      <FadeIn>
        <section id="approach" className="section-azva azva-chapter border-t border-[var(--azva-border)]">
          <div className="container-azva grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="eyebrow">Approach</p>
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
      </FadeIn>

      <FadeIn>
        <section id="disciplines" className="section-azva azva-chapter border-t border-[var(--azva-border)]">
          <div className="container-azva">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">Disciplines</p>
              <h2 className="heading-xl">The disciplines behind enduring value.</h2>
            </div>

            <div className="mt-20 divide-y divide-[var(--azva-border)] border-y border-[var(--azva-border)]">
              {capabilities.map((item, index) => (
                <Lift
                  key={item.title}
                  className="grid gap-4 py-9 md:gap-6 md:py-10 md:grid-cols-[0.15fr_0.35fr_0.5fr] md:items-start"
                >
                  <div className="text-sm text-[var(--azva-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl font-medium tracking-[-0.05em] text-[var(--azva-primary)]">
                    {item.title}
                  </h3>
                  <p className="body-md max-w-2xl">{item.copy}</p>
                </Lift>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="thinking" className="section-azva azva-chapter dark-section">
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
      </FadeIn>

      <FadeIn>
        <section id="ventures" className="section-azva azva-chapter">
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
      </FadeIn>

      <FadeIn>
        <section id="prizm" className="section-azva azva-chapter bg-[var(--azva-primary)] text-[var(--azva-canvas)]">
          <div className="container-azva">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow mb-6 text-[var(--azva-accent)]">PRIZM™</p>
                <h2 className="heading-xl text-[var(--azva-canvas)]">
                  Quantifying confidence in operational intelligence.
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-8 text-white/72">
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

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {prizmScores.map(([score, label]) => (
                <div
                  key={score}
                  className="rounded-[28px] border border-white/12 bg-white/[0.04] p-6"
                >
                  <div className="text-5xl font-semibold tracking-[-0.07em] text-[var(--azva-canvas)]">
                    {score}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="about" className="section-azva azva-chapter">
          <div className="container-azva grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Image
                src="/brand/maz-headshot.jpeg"
                alt="Mazhar Khan"
                width={420}
                height={560}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow mb-6">Founder</p>
              <h2 className="heading-xl">Built from experience. Driven by purpose.</h2>
              <div className="mt-8 space-y-6 body-lg">
                <p>
                  AZVA is the culmination of decades spent leading enterprise transformation, AI
                  initiatives, operational reinvention, and strategic growth across startups, global
                  organizations, and founder-led businesses.
                </p>
                <p>
                  It was built on a simple belief: the greatest competitive advantage is alignment.
                </p>
                <p>
                  When purpose, people, systems, and execution move together, sustainable value
                  follows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <Reveal>
        <section id="perspectives" className="section-azva azva-chapter">
          <div className="container-azva grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow mb-6">Perspectives</p>
              <h2 className="heading-xl">Ideas that sharpen judgment.</h2>
            </div>

            <div className="border-y border-[var(--azva-border)] py-10">
              <p className="text-sm text-[var(--azva-accent)]">Operating Note</p>

              <h3 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.055em] text-[var(--azva-primary)] md:text-5xl">
                Operational leverage is not found. It is designed.
              </h3>

              <p className="body-md mt-6 max-w-2xl">
                A short perspective on why enterprise transformation depends less on ambition and more on alignment between strategy, systems, and execution.
              </p>

              <a href="/perspectives" className="azva-institutional-link mt-8">
                Read the note →
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <SectionClosing>
        Better organizations begin with better alignment.
      </SectionClosing>

      <FadeIn>
        <section id="contact" className="section-azva azva-chapter border-t border-[var(--azva-border)]">
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

            <ButtonLink href="mailto:hello@azva.us" className="w-fit">
              Start the Conversation
            </ButtonLink>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </main>
  );
}