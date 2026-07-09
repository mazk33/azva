import { cn } from "@/lib/utils";

export function ConstructionMark({ className }: { className?: string }) {
  return (
    <div className={cn("mb-6 flex items-center gap-3", className)}>
      <span className="h-px w-10 bg-[var(--azva-accent)]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--azva-accent)]" />
      <span className="h-px w-4 bg-[var(--azva-border)]" />
    </div>
  );
}