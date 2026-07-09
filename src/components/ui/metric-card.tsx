import { cn } from "@/lib/utils";

type MetricCardProps = {
  metric: string;
  label: string;
  dark?: boolean;
  className?: string;
};

export function MetricCard({ metric, label, dark = false, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border p-6",
        dark
          ? "border-white/12 bg-white/[0.04]"
          : "border-[var(--azva-border)] bg-[var(--azva-surface)]/60",
        className
      )}
    >
      <div
        className={cn(
          "text-5xl font-semibold tracking-[-0.07em]",
          dark ? "text-[var(--azva-canvas)]" : "text-[var(--azva-primary)]"
        )}
      >
        {metric}
      </div>
      <p
        className={cn(
          "mt-4 text-sm leading-6",
          dark ? "text-white/58" : "text-[rgba(14,14,14,0.58)]"
        )}
      >
        {label}
      </p>
    </div>
  );
}