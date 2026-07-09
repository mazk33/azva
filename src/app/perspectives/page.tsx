import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { EditorialCard } from "@/components/ui/editorial-card";
import { SectionClosing } from "@/components/ui/section-closing";

export const metadata = {
  title: "Perspectives | AZVA",
  description:
    "Essays, operating notes, and frameworks from AZVA on strategy, transformation, operational intelligence, venture building, and aligned execution.",
};

const perspectives = [
  {
    eyebrow: "Operating Note",
    title: "Operational leverage is not found. It is designed.",
    copy: "Why enterprise transformation depends less on ambition and more on alignment between strategy, systems, and execution.",
  },
  {
    eyebrow: "Perspective",
    title: "Technology amplifies direction.",
    copy: "AI and automation create value only when the organization knows what it is optimizing toward.",
  },
  {
    eyebrow: "Principle",
    title: "Scale follows structure.",
    copy: "Growth exposes the quality of the operating model. It rarely fixes it.",
  },
];

export default function PerspectivesPage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-[70vh] pt-40 md:pt-48">
        <div className="container-azva">
          <p className="eyebrow mb-8">Perspectives</p>

          <h1 className="display-lg max-w-5xl">
            Ideas that sharpen judgment.
          </h1>

          <p className="body-lg mt-10 max-w-[680px]">
            Essays, operating notes, and frameworks on strategy, transformation,
            operational intelligence, venture building, and the discipline of
            aligned execution.
          </p>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            label="Featured"
            title="From observation to operating principle."
            index="01"
          />

          <div>
            <EditorialCard
              eyebrow={perspectives[0].eyebrow}
              title={perspectives[0].title}
              copy={perspectives[0].copy}
            />

            <Link href="#" className="azva-institutional-link mt-8">
              Read the note →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva">
          <SectionHeader
            label="Recent Perspectives"
            title="Thinking in systems."
            index="02"
          />

          <div className="mt-16 divide-y divide-[var(--azva-border)] border-y border-[var(--azva-border)]">
            {perspectives.slice(1).map((item, index) => (
              <article
                key={item.title}
                className="grid gap-6 py-10 md:grid-cols-[0.18fr_0.42fr_0.4fr]"
              >
                <p className="text-sm text-[var(--azva-accent)]">
                  {String(index + 2).padStart(2, "0")}
                </p>

                <div>
                  <p className="mb-4 text-sm text-[rgba(14,14,14,0.48)]">
                    {item.eyebrow}
                  </p>
                  <h2 className="text-3xl font-medium tracking-[-0.05em] text-[var(--azva-primary)]">
                    {item.title}
                  </h2>
                </div>

                <p className="body-md max-w-xl">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionClosing>
        Enduring value requires disciplined thinking.
      </SectionClosing>

      <Footer />
    </main>
  );
}