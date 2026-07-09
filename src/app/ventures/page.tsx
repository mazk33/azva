import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionClosing } from "@/components/ui/section-closing";

export const metadata = {
  title: "Ventures | AZVA",
  description:
    "AZVA selectively partners with founders and leadership teams where values, ambition, and execution are deeply aligned.",
};

const partnershipModes = [
  {
    title: "Strategic Advisory",
    copy: "Focused guidance for founders navigating growth, positioning, partnerships, operations, and capital readiness.",
  },
  {
    title: "Advisory Equity",
    copy: "Selective long-term advisory participation where AZVA contributes time, judgment, and strategic operating support.",
  },
  {
    title: "Strategic Partnerships",
    copy: "Helping aligned ventures access relationships, channels, collaborators, and commercial pathways.",
  },
  {
    title: "Capital Readiness",
    copy: "Preparing the venture narrative, operating logic, and investment case before investor conversations begin.",
  },
  {
    title: "Investor Mediation",
    copy: "Selective introductions and investor mediation where appropriate, aligned, and legally structured.",
  },
  {
    title: "Direct Investment",
    copy: "Personal participation in exceptional opportunities where conviction, capability, and alignment are clear.",
  },
];

const filters = [
  "Values-led founders",
  "Clear problem-market fit",
  "Operational seriousness",
  "Long-term orientation",
  "Ethical ambition",
  "High-conviction execution",
];

export default function VenturesPage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-[72vh] pt-40 md:pt-48">
        <div className="container-azva">
          <p className="eyebrow mb-8">Ventures</p>

          <h1 className="display-lg max-w-5xl">
            Capital. Capability. Conviction.
          </h1>

          <p className="body-lg mt-10 max-w-[680px]">
            AZVA selectively partners with founders and leadership teams where
            values, ambition, and execution are deeply aligned.
          </p>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            label="Principle"
            title="Some opportunities deserve more than advice."
            index="01"
          />

          <div className="space-y-6 body-lg">
            <p>
              AZVA does not approach ventures as transactional fundraising work.
              Capital is one part of the equation, but not the first.
            </p>

            <p>
              The work begins with alignment: the founder, the market, the
              operating model, the strategy, and the values underneath the
              business.
            </p>

            <p>
              When that alignment is strong, AZVA may participate beyond
              advisory through equity, strategic partnerships, investor
              mediation, or direct investment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva">
          <SectionHeader
            label="Modes"
            title="How AZVA participates."
            index="02"
          />

          <div className="mt-20 divide-y divide-[var(--azva-border)] border-y border-[var(--azva-border)]">
            {partnershipModes.map((item, index) => (
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
            label="Selection"
            title="AZVA works with alignment, not volume."
            index="03"
            theme="dark"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {filters.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/12 bg-white/[0.04] p-6 text-xl tracking-[-0.03em] text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              label="Conversation"
              title="Build what deserves to endure."
              index="04"
            />

            <p className="body-lg mt-8 max-w-2xl">
              If the opportunity is aligned, AZVA can help clarify the strategy,
              strengthen the operating story, prepare for capital conversations,
              and identify the right path forward.
            </p>
          </div>

          <Link href="mailto:hello@azva.us" className="btn-primary w-fit">
            Start the Conversation
          </Link>
        </div>
      </section>

      <SectionClosing>
        We do not invest in ideas. We invest in conviction, capability, and
        alignment.
      </SectionClosing>

      <Footer />
    </main>
  );
}