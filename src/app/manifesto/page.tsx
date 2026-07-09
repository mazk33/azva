import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionClosing } from "@/components/ui/section-closing";

export const metadata = {
  title: "Manifesto | AZVA",
  description:
    "The AZVA manifesto on alignment, strategy, systems thinking, operational intelligence, and enduring value.",
};

const principles = [
  {
    title: "Alignment before acceleration.",
    copy: "Speed compounds the direction already chosen. Without alignment, acceleration only creates more expensive motion.",
  },
  {
    title: "Strategy must become operational.",
    copy: "A strategy that cannot shape decisions, systems, behavior, and execution rhythm is not yet a strategy. It is a statement.",
  },
  {
    title: "Technology amplifies direction.",
    copy: "AI, automation, and data systems create durable value only when they serve a coherent operating logic.",
  },
  {
    title: "Capital follows clarity.",
    copy: "Investment is most powerful when it accelerates a business that already understands its purpose, model, and path to value.",
  },
  {
    title: "Values are operating infrastructure.",
    copy: "Integrity, trust, and discipline are not soft principles. They are the conditions that allow complex organizations to endure.",
  },
];

export default function ManifestoPage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-[78vh] pt-40 md:pt-48">
        <div className="container-azva">
          <p className="eyebrow mb-8">Manifesto</p>

          <h1 className="display-lg max-w-5xl">
            Better organizations begin with better alignment.
          </h1>

          <p className="body-lg mt-10 max-w-[680px]">
            AZVA was built on a simple conviction: enduring value is created
            when purpose, strategy, people, systems, technology, and capital
            move in coherence.
          </p>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="Belief"
            title="Strategy alone does not transform organizations."
            index="01"
          />

          <div className="space-y-6 body-lg">
            <p>
              Organizations do not fail only because their ideas are weak. They
              fail because ambition, execution, incentives, systems, and
              judgment drift apart.
            </p>

            <p>
              AZVA exists to restore coherence. The work begins by clarifying
              what matters, then aligning the operating system around it.
            </p>

            <p>
              This is the discipline behind every engagement, every framework,
              every venture relationship, and every product we build.
            </p>
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva">
          <SectionHeader
            label="Principles"
            title="The operating beliefs behind AZVA."
            index="02"
          />

          <div className="mt-20 divide-y divide-[var(--azva-border)] border-y border-[var(--azva-border)]">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-6 py-10 md:grid-cols-[0.15fr_0.35fr_0.5fr] md:items-start"
              >
                <p className="text-sm text-[var(--azva-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="text-3xl font-medium tracking-[-0.05em] text-[var(--azva-primary)]">
                  {item.title}
                </h2>

                <p className="body-md max-w-2xl">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter bg-[var(--azva-primary)] text-[var(--azva-canvas)]">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="Commitment"
            title="We build for what should endure."
            index="03"
            theme="dark"
          />

          <div className="space-y-6 text-lg leading-8 text-white/72">
            <p>
              AZVA does not exist to create activity. It exists to create
              clarity, operating discipline, intelligent systems, and value that
              compounds responsibly.
            </p>

            <p>
              We work with leaders who understand that growth without alignment
              becomes fragility, and that the most important decisions are rarely
              the loudest ones.
            </p>
          </div>
        </div>
      </section>

      <SectionClosing>
        Alignment is the highest form of leverage.
      </SectionClosing>

      <Footer />
    </main>
  );
}