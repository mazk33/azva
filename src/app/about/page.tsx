import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionClosing } from "@/components/ui/section-closing";
import { OperatingConvergence } from "@/components/visuals";

export const metadata = {
  title: "About | AZVA",
  description:
    "AZVA exists to help leaders navigate complexity with clarity, alignment, and disciplined judgment.",
};

const experience = [
  "Enterprise transformation",
  "AI, automation, and operational intelligence",
  "Founder-led growth",
  "Strategic advisory",
  "Venture building",
  "Systems-led execution",
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="pb-24 pt-[calc(88px+3rem)] sm:pb-28 sm:pt-[calc(88px+4rem)] lg:pb-32 lg:pt-[calc(88px+5rem)]">
        <div className="container-azva">
          <p className="eyebrow mb-8">About</p>

          <h1 className="display-lg max-w-5xl">
            Built from experience. Driven by purpose.
          </h1>

          <p className="body-lg mt-10 max-w-[680px]">
            AZVA helps leaders bring strategy, judgment, systems, technology,
            capital, and execution into one coherent operating model.
          </p>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="Philosophy"
            title="The greatest competitive advantage is alignment."
            index="01"
          />

          <div className="space-y-6 body-lg">
            <p>
              Organizations rarely fail because they lack effort. They struggle
              when purpose, people, systems, technology, and capital move in
              different directions.
            </p>

            <p>
              AZVA was created to help leaders restore that alignment and turn
              complexity into focused, durable value creation.
            </p>

            <p>
              The work is strategic, but it is also human. Better decisions
              require clear systems, disciplined execution, and values that can
              withstand pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid items-start gap-14 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              label="Operating Logic"
              title="Enduring value emerges through operating convergence."
              index="02"
            />

            <p className="body-lg mt-8 max-w-2xl">
              AZVA brings operating experience, strategic judgment,
              organizational alignment, and disciplined execution into one
              coherent operating model designed to create enduring value.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[560px] xl:mt-[4.2rem] xl:justify-self-end">
            <OperatingConvergence />
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:gap-16">
          <div className="mx-auto w-full max-w-[380px] lg:mx-0">
            <div className="relative overflow-hidden rounded-[34px] border border-[var(--azva-border)] bg-[var(--azva-canvas)] p-4 sm:p-5">
              <div className="pointer-events-none absolute inset-8 rounded-[24px] border border-white/35" />

              <Image
                src="/brand/maz-headshot.png"
                alt="Mazhar Khan"
                width={420}
                height={525}
                className="
        aspect-[4/5]
        w-full
        rounded-[24px]
        object-cover
        object-[50%_24%]
        brightness-[1.04]
        contrast-[0.94]
        saturate-[0.96]
      "
                priority
              />
            </div>
          </div>

          <div>
            <SectionHeader label="Founder" title="Mazhar Khan" index="03" />

            <div className="mt-8 space-y-6 body-lg">
              <p>
                Mazhar Khan is a strategist and operator with experience across
                enterprise transformation, AI and automation initiatives,
                operational reinvention, founder-led growth, and strategic
                advisory.
              </p>

              <p>
                His work sits at the intersection of systems thinking,
                technology-enabled execution, and conscious leadership. AZVA
                reflects that intersection.
              </p>

              <p>
                The practice was built for leaders who want to grow with clarity,
                act with integrity, and create value that lasts.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {experience.map((item) => (
                <div
                  key={item}
                  className="border-t border-[var(--azva-border)] py-4 text-lg tracking-[-0.03em] text-[var(--azva-primary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionClosing>
        Alignment is the highest form of leverage.
      </SectionClosing>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader label="Connect" title="Start with clarity." index="04" />

            <p className="body-lg mt-8 max-w-2xl">
              If you are building, transforming, investing, or deciding through
              complexity, AZVA exists to help sharpen the path forward.
            </p>
          </div>

          <Link href="/connect" className="btn-primary w-fit">
            Start the Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
