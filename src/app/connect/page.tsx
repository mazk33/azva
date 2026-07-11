import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionClosing } from "@/components/ui/section-closing";
import { ConversationSignal } from "@/components/visuals";
import { ConversationForm } from "@/components/forms/conversation-form";

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
          <h1 className="display-lg max-w-5xl">Start with clarity.</h1>
          <p className="body-lg mt-10 max-w-[720px]">
            Every engagement begins with understanding the context before
            proposing a solution. Share the decision, challenge, or opportunity
            you are navigating.
          </p>
        </div>
      </section>

      <section className="section-azva azva-chapter">
        <div className="container-azva grid items-start gap-14 xl:grid-cols-[0.82fr_1.18fr] xl:gap-16">
          <div>
            <SectionHeader
              label="Conversation Request"
              title="Tell us what you are trying to clarify."
              index="01"
            />

            <p className="body-lg mt-8 max-w-2xl">
              AZVA works with a limited number of aligned founders, executive
              teams, investors, and organizations. A little context helps us
              determine whether and how the conversation may be useful.
            </p>

            <div className="mx-auto mt-10 w-full max-w-[460px] xl:mx-0">
              <ConversationSignal />
            </div>
          </div>

          <ConversationForm />
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
