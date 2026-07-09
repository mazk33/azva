export function SignalDivider() {
  return (
    <div className="container-azva py-10">
      <div className="relative h-16 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-px w-full bg-[var(--azva-border)]" />
        <div className="absolute left-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--azva-accent)]" />
        <div className="absolute left-[48%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--azva-moss)]" />
        <div className="absolute left-[78%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--azva-primary)]" />
      </div>
    </div>
  );
}