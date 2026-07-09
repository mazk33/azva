import { cn } from "@/lib/utils";

type EditorialCardProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  className?: string;
};

export function EditorialCard({
  eyebrow,
  title,
  copy,
  className,
}: EditorialCardProps) {
  return (
    <article
      className={cn(
        "border-y border-[var(--azva-border)] py-10",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-sm text-[var(--azva-accent)]">{eyebrow}</p>
      ) : null}

      <h3 className="max-w-3xl text-4xl font-medium tracking-[-0.055em] text-[var(--azva-primary)] md:text-5xl">
        {title}
      </h3>

      <p className="body-md mt-6 max-w-2xl">{copy}</p>
    </article>
  );
}