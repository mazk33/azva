import { cn } from "@/lib/utils";

type GeometryFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function GeometryFrame({
  children,
  className,
}: GeometryFrameProps) {
  return (
    <div
      className={cn(
        "card-azva relative block aspect-square w-full overflow-hidden",
        "min-h-[340px] sm:min-h-[440px] lg:min-h-[560px]",
        className
      )}
    >
      <div className="absolute inset-4 rounded-[24px] border border-[var(--azva-border)] sm:inset-7 sm:rounded-[28px] lg:inset-10 lg:rounded-[32px]" />

      <div className="absolute bottom-8 right-8 h-44 w-44 rounded-full bg-[var(--azva-primary)]/10 blur-3xl sm:bottom-12 sm:right-12 sm:h-56 sm:w-56 lg:bottom-16 lg:right-16 lg:h-72 lg:w-72" />

      <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-9 lg:p-16">
        {children}
      </div>
    </div>
  );
}