import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { SectionClosing } from "@/components/ui/section-closing";
import { FadeIn, Reveal, Lift } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { EditorialCard } from "@/components/ui/editorial-card";
import { MetricCard } from "@/components/ui/metric-card";
import { AlignmentGrid, SignalDivider } from "@/components/visuals";

export const metadata = {
  title: "Perspectives | AZVA",
  description:
    "Essays, operating notes, and frameworks from AZVA on strategy, transformation, operational intelligence, venture building, and aligned execution.",
};

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

      <section className="min-h-[88vh] pt-28 md:min-h-screen md:pt-36">
        <div className="container-azva grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <div>
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

              <p className="body-lg mt-14 max-w-[490px]">
                AZVA partners with founders, executives, investors, and enterprises to
                align strategy, operations, technology, and capital into enduring value.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <ButtonLink href="#contact">Start the Conversation</ButtonLink>
                <ButtonLink href="#perspectives" variant="secondary">
                  Explore Perspectives
                </ButtonLink>
              </div>
            </div>
          </FadeIn>

          <Reveal delay={0.12} className="lg:-translate-y-12">
            <AlignmentGrid />
          </Reveal>
        </div>
      </section>
      <FadeIn>
        <section id="approach" className="section-azva azva-chapter border-t border-[var(--azva-border)]">
          <div className="container-azva">
            <SectionHeader
              label="Approach"
              title="Where purpose meets performance."
              index="01"
              copy="Organizations rarely fail because of a lack of ambition. They drift when vision, operations, technology, and leadership evolve in different directions. AZVA exists to restore alignment. We help organizations think more clearly, decide more confidently, and execute with discipline."
            />
          </div>
        </section>
      </FadeIn>
      <SignalDivider />
      <FadeIn>
        <section id="disciplines" className="section-azva azva-chapter border-t border-[var(--azva-border)]">
          <div className="container-azva">
            <SectionHeader
              label="Disciplines"
              title="The disciplines behind enduring value."
              index="02"
            />
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
            <SectionHeader
              label="How We Think"
              title="Strategy without alignment creates motion. Alignment creates momentum."
              index="03"
              theme="dark"
            />

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

      <Reveal>
        <section id="ventures" className="section-azva azva-chapter">
          <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              label="Ventures"
              title="Some opportunities deserve more than advice."
              index="04"
            />

            <div className="space-y-6 body-lg">
              <p>
                AZVA selectively partners with founders and leadership teams where values,
                ambition, and execution are deeply aligned.
              </p>

              <p>
                These relationships may extend beyond advisory into strategic partnerships,
                advisory equity, investment readiness, select investor introductions, and
                direct investment in exceptional opportunities.
              </p>

              <p className="max-w-2xl font-[var(--font-fraunces)] text-3xl italic leading-tight text-[var(--azva-primary)]">
                We do not invest in ideas. We invest in conviction, capability, and alignment.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
      <SignalDivider />
      <FadeIn>
        <section id="prizm" className="section-azva azva-chapter bg-[var(--azva-primary)] text-[var(--azva-canvas)]">
          <div className="container-azva">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeader
                label="PRIZM™"
                title="Quantifying confidence in operational intelligence."
                align="split"
                theme="dark"
                index="05"
              />
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
                <MetricCard key={score} metric={score} label={label} dark />
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
                src="/brand/maz-headshot.png"
                alt="Mazhar Khan"
                width={420}
                height={560}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <SectionHeader
                label="Founder"
                title="Built from experience. Driven by purpose."
                index="06"
              />

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
                  When purpose, people, systems, and execution move together, sustainable value follows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <Reveal>
        <section id="perspectives" className="section-azva azva-chapter">
          <div className="container-azva grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              label="Perspectives"
              title="Ideas that sharpen judgment."
              index="06"
            />

            <div>
              <EditorialCard
                eyebrow="Operating Note"
                title="Operational leverage is not found. It is designed."
                copy="A short perspective on why enterprise transformation depends less on ambition and more on alignment between strategy, systems, and execution."
              />

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