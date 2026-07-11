import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionClosing } from "@/components/ui/section-closing";

export const metadata = {
  title: "Operational Leverage Is Not Found. It Is Designed. | AZVA",
  description:
    "Why enterprise transformation depends less on ambition and more on alignment between strategy, systems, people, and execution.",
};

const principles = [
  {
    title: "Design the operating logic first.",
    copy: "Clarify how decisions, accountability, information, and execution should work before automating the activity around them.",
  },
  {
    title: "Treat exceptions as design evidence.",
    copy: "Repeated workarounds are not merely operational noise. They reveal where the operating model is incomplete or misaligned.",
  },
  {
    title: "Measure capability, not activity.",
    copy: "The goal is not more initiatives. It is an organization that can make stronger decisions and execute them consistently.",
  },
];

export default function OperationalLeverageNotePage() {
  return (
    <main>
      <Navbar />

      <article>
        <header className="pb-20 pt-[calc(88px+3rem)] sm:pb-24 sm:pt-[calc(88px+4rem)] lg:pb-28 lg:pt-[calc(88px+5rem)]">
          <div className="container-azva">
            <p className="eyebrow mb-8">Operating Note</p>
            <h1 className="display-lg max-w-5xl">
              Operational leverage is not found. It is designed.
            </h1>
            <p className="body-lg mt-10 max-w-[760px]">
              Transformation creates enduring value when strategy, systems,
              people, technology, and execution are intentionally designed to
              reinforce one another.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[rgba(14,14,14,0.52)]">
              <span>AZVA Perspectives</span>
              <span aria-hidden="true">•</span>
              <span>6 minute read</span>
            </div>
          </div>
        </header>

        <ArticleSection label="The premise">
          <p>
            Organizations often speak about operational leverage as though it
            is hidden somewhere inside the business, waiting to be uncovered by
            the right technology, cost program, or transformation initiative.
          </p>
          <p>
            That framing is incomplete. Technology can expose inefficiency,
            reduce friction, and increase throughput. It cannot, by itself,
            create a coherent operating model.
          </p>
          <p>
            Leverage emerges when the organization is deliberately designed so
            that each decision, process, role, system, and incentive strengthens
            the others.
          </p>
        </ArticleSection>

        <ArticleSection label="The pattern">
          <p>
            Many transformation programs begin with tools. They automate
            fragments of work while leaving the underlying decision rights,
            information flows, exception handling, and accountability unchanged.
          </p>
          <p>
            The result may be local efficiency without enterprise leverage. Work
            moves faster, but the organization remains dependent on manual
            coordination, individual memory, and recurring intervention.
          </p>
          <blockquote className="border-l-2 border-[var(--azva-accent)] py-2 pl-7 font-[var(--font-fraunces)] text-3xl italic leading-tight tracking-[-0.04em] text-[var(--azva-primary)] sm:text-4xl">
            Automation scales the operating model that already exists. It does
            not correct its direction.
          </blockquote>
          <p>
            This is why the most valuable transformation questions are not
            initially technical. They concern what must be standardized, where
            judgment belongs, which exceptions are legitimate, and how
            performance should be measured.
          </p>
        </ArticleSection>

        <section className="azva-chapter py-20 sm:py-24">
          <div className="container-azva">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">Three operating principles</p>
              <h2 className="heading-xl">Leverage follows coherent design.</h2>
            </div>

            <div className="mt-16 divide-y divide-[var(--azva-border)] border-y border-[var(--azva-border)]">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="grid gap-5 py-9 md:grid-cols-[0.15fr_0.35fr_0.5fr] md:gap-7"
                >
                  <p className="text-sm text-[var(--azva-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl font-medium tracking-[-0.05em] text-[var(--azva-primary)]">
                    {principle.title}
                  </h3>
                  <p className="body-md max-w-2xl">{principle.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ArticleSection label="The implication">
          <p>
            Sustainable operational leverage is not a single productivity gain.
            It is the compounding effect of clearer decisions, repeatable
            execution, better information, and systems that reduce unnecessary
            dependence on individual intervention.
          </p>
          <p>
            The work therefore begins with alignment. Once the organization
            knows what it is optimizing toward and how its operating model should
            support that direction, technology can amplify the design rather
            than compensate for its absence.
          </p>
          <p className="font-medium text-[var(--azva-primary)]">
            Operational leverage is not discovered after transformation. It is
            designed into the organization before scale.
          </p>
        </ArticleSection>

        <div className="container-azva py-10">
          <Link href="/perspectives" className="azva-institutional-link">
            ← Return to Perspectives
          </Link>
        </div>
      </article>

      <SectionClosing>Scale follows structure.</SectionClosing>
      <Footer />
    </main>
  );
}

function ArticleSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="azva-chapter py-20 sm:py-24">
      <div className="container-azva grid gap-12 lg:grid-cols-[0.28fr_0.72fr]">
        <aside>
          <p className="eyebrow">{label}</p>
        </aside>
        <div className="max-w-[720px] space-y-7 text-[1.1rem] leading-8 text-[rgba(14,14,14,0.76)] sm:text-[1.18rem] sm:leading-9">
          {children}
        </div>
      </div>
    </section>
  );
}
