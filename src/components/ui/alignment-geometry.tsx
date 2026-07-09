export function AlignmentGeometry() {
  return (
    <div className="card-azva relative hidden min-h-[560px] overflow-hidden lg:block">
      <div className="absolute inset-10 rounded-[32px] border border-[var(--azva-border)]" />

      <div className="absolute left-10 top-10 h-px w-2/3 bg-[var(--azva-border)]" />
      <div className="absolute bottom-10 right-10 h-px w-2/3 bg-[var(--azva-border)]" />
      <div className="absolute left-1/2 top-10 h-[calc(100%-80px)] w-px bg-[var(--azva-border)]" />

      <div className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-[var(--azva-accent)]" />
      <div className="absolute right-[22%] top-[34%] h-3 w-3 rounded-full bg-[var(--azva-moss)]" />
      <div className="absolute bottom-[24%] left-[32%] h-3 w-3 rounded-full bg-[var(--azva-primary)]" />

      <div className="absolute left-[24%] top-[30%] h-40 w-40 rounded-[36px] border border-[var(--azva-moss)]/70" />
      <div className="absolute right-[18%] top-[24%] h-44 w-44 rounded-[36px] border border-[var(--azva-accent)]/60" />
      <div className="absolute bottom-[18%] left-[42%] h-48 w-48 rounded-[40px] bg-[var(--azva-primary)]" />

      <div className="absolute bottom-[20%] left-[18%] h-px w-[64%] rotate-[-12deg] bg-[var(--azva-accent)]/50" />
      <div className="absolute left-[30%] top-[24%] h-px w-[48%] rotate-[18deg] bg-[var(--azva-moss)]/45" />

      <div className="absolute bottom-20 right-16 h-72 w-72 rounded-full bg-[var(--azva-primary)]/10 blur-3xl" />
    </div>
  );
}