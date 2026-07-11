import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionClosing } from "@/components/ui/section-closing";
import { ConversationSignal } from "@/components/visuals";

export const metadata = {
  title: "Connect | AZVA",
  description:
    "Start a conversation with AZVA about strategy, transformation, operational intelligence, venture partnerships, or PRIZM.",
};

const paths = [
  "Strategic advisory",
  "Enterprise transformation",
  "Operational intelligence",
  "Venture partnerships",
  "PRIZM access",
  "General inquiry",
];

export default function ConnectPage() {
  return (
    <main>
      <Navbar />

      <section className="pb-24 pt-[calc(88px+3rem)] sm:pb-28 sm:pt-[calc(88px+4rem)] lg:pb-32 lg:pt-[calc(88px+5rem)]">
        <div className="container-azva">
          <p className="eyebrow mb-8">Connect</p>

          <h1 className="display-lg max-w-5xl">
            Start with clarity.
          </h1>

          <p className="body-lg mt-10 max-w-[680px]">
            Whether you are building, transforming, investing, or deciding
            through complexity, the first conversation begins with alignment.
          </p>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid items-start gap-14 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              label="Inquiry"
              title="Tell us what you are trying to clarify."
              index="01"
            />

            <div className="mt-8 space-y-8">
              <p className="body-lg max-w-2xl">
                AZVA works with a limited number of aligned leaders, companies,
                investors, and ventures. Share the context, the decision, or the
                opportunity you are navigating.
              </p>

              <Link href="mailto:hello@azva.us" className="btn-primary w-fit">
                hello@azva.us
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[560px] xl:mt-[4.2rem] xl:justify-self-end">
            <ConversationSignal />
          </div>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva">
          <SectionHeader
            label="Areas"
            title="Where the conversation may begin."
            index="02"
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paths.map((item) => (
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

      <SectionClosing>
        The right conversation creates the right path.
      </SectionClosing>

      <Footer />
    </main>
  );
}
