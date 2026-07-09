import { cn } from "@/lib/utils";

type ConstructionMarkProps = {
  index?: string;
  dark?: boolean;
  className?: string;
};

export function ConstructionMark({
  index,
  dark = false,
  className,
}: ConstructionMarkProps) {
  return (
    <div className={cn("mb-6 flex items-center gap-4", className)}>
      {index ? (
        <span
          className={cn(
            "text-xs tracking-[0.22em]",
            dark ? "text-white/46" : "text-[rgba(14,14,14,0.42)]"
          )}
        >
          {index}
        </span>
      ) : null}

      <span
        className={cn(
          "h-px w-12",
          dark ? "bg-white/24" : "bg-[var(--azva-border)]"
        )}
      />

      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          dark ? "bg-[var(--azva-accent)]" : "bg-[var(--azva-accent)]"
        )}
      />
    </div>
  );
}