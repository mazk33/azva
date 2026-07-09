export function SectionClosing({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-azva py-20 md:py-28">
      <p className="max-w-4xl font-[var(--font-fraunces)] text-4xl italic leading-tight tracking-[-0.04em] text-[var(--azva-primary)] md:text-6xl">
        {children}
      </p>
    </div>
  );
}