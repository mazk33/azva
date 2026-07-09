import { cn } from "@/lib/utils";

type QuoteBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export function QuoteBlock({ children, className }: QuoteBlockProps) {
  return (
    <div className={cn("py-10", className)}>
      <p className="max-w-4xl font-[var(--font-fraunces)] text-3xl italic leading-tight tracking-[-0.04em] text-[var(--azva-primary)] md:text-5xl">
        {children}
      </p>
    </div>
  );
}