import { cn } from "@/lib/utils";
import { ConstructionMark } from "@/components/ui/construction-mark";

type SectionHeaderProps = {
    label: string;
    title: string;
    copy?: string;
    align?: "left" | "split";
    className?: string;
};

export function SectionHeader({
    label,
    title,
    copy,
    align = "left",
    className,
}: SectionHeaderProps) {
    if (align === "split") {
        return (
            <div className={cn("grid gap-10 lg:grid-cols-[0.8fr_1.2fr]", className)}>
                <div>
                    <ConstructionMark />
                    <p className="eyebrow mb-6">{label}</p>
                </div>
                <div>
                    <h2 className="heading-xl">{title}</h2>
                    {copy ? <p className="body-lg mt-8 max-w-3xl">{copy}</p> : null}
                </div>
            </div>
        );
    }

    return (
        <div className={cn("max-w-3xl", className)}>
            <ConstructionMark />
            <p className="eyebrow mb-6">{label}</p>
            <h2 className="heading-xl">{title}</h2>
            {copy ? <p className="body-lg mt-8">{copy}</p> : null}
        </div>
    );
}