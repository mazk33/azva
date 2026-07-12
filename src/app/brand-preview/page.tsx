import {
  AzvaCoreMark,
  AzvaMarkAxis,
  AzvaMarkConvergence,
  AzvaMarkMonogram,
} from "@/components/brand";

const marks = [
  {
    name: "Current Core",
    description: "Existing rounded operating-core mark.",
    component: AzvaCoreMark,
  },
  {
    name: "Convergence",
    description: "Multiple dimensions resolving around a central axis.",
    component: AzvaMarkConvergence,
  },
  {
    name: "Axis",
    description: "The copper diagonal becomes the organizing principle.",
    component: AzvaMarkAxis,
  },
  {
    name: "Monogram",
    description: "A compact AZ-derived identity mark.",
    component: AzvaMarkMonogram,
  },
];

export default function BrandPreviewPage() {
  return (
    <main className="min-h-screen bg-[var(--azva-canvas)] py-24">
      <div className="container-azva">
        <p className="eyebrow mb-6">AZVA Design Language</p>
        <h1 className="heading-xl max-w-4xl">
          Core mark exploration.
        </h1>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {marks.map(({ name, description, component: Mark }) => (
            <article
              key={name}
              className="rounded-[32px] border border-[var(--azva-border)] p-8"
            >
              <div className="flex min-h-[320px] items-center justify-center rounded-[24px] border border-[var(--azva-border)]">
                <Mark className="h-40 w-40" />
              </div>

              <h2 className="mt-8 text-3xl font-medium tracking-[-0.05em] text-[var(--azva-primary)]">
                {name}
              </h2>

              <p className="body-md mt-3">{description}</p>

              <div className="mt-8 flex items-end gap-8">
                <Mark className="h-24 w-24" animated={false} />
                <Mark className="h-12 w-12" animated={false} />
                <Mark className="h-6 w-6" animated={false} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}