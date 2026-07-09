import { cn } from "@/lib/utils";
import { ConstructionMark } from "@/components/ui/construction-mark";

type SectionHeaderProps = {
  label: string;
  title: string;
  copy?: string;
  align?: "left" | "split";
  theme?: "light" | "dark";
  index?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  copy,
  align = "left",
  theme = "light",
  index,
  className,
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  const eyebrowClass = cn(
    "eyebrow mb-6",
    isDark ? "text-[var(--azva-accent)]" : ""
  );

  const titleClass = cn(
    "heading-xl",
    isDark ? "text-[var(--azva-canvas)]" : "text-[var(--azva-primary)]"
  );

  const copyClass = cn(
    "body-lg mt-8 max-w-3xl",
    isDark ? "text-white/70" : ""
  );

  if (align === "split") {
    return (
      <div className={cn("grid gap-10 lg:grid-cols-[0.8fr_1.2fr]", className)}>
        <div>
          <ConstructionMark index={index} dark={isDark} />
          <p className={eyebrowClass}>{label}</p>
        </div>

        <div>
          <h2 className={titleClass}>{title}</h2>
          {copy ? <p className={copyClass}>{copy}</p> : null}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("max-w-3xl", className)}>
      <ConstructionMark index={index} dark={isDark} />
      <p className={eyebrowClass}>{label}</p>
      <h2 className={titleClass}>{title}</h2>
      {copy ? <p className={copyClass}>{copy}</p> : null}
    </div>
  );
}