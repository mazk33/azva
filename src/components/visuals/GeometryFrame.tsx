export function GeometryFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-azva relative hidden min-h-[560px] overflow-hidden lg:block">
      <div className="absolute inset-10 rounded-[32px] border border-[var(--azva-border)]" />
      <div className="absolute bottom-16 right-16 h-72 w-72 rounded-full bg-[var(--azva-primary)]/10 blur-3xl" />
      <div className="absolute inset-0 flex items-center justify-center p-16">
        {children}
      </div>
    </div>
  );
}