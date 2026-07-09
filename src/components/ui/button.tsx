import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-[var(--azva-primary)] text-[var(--azva-canvas)] hover:bg-[var(--azva-accent)]",
    secondary:
      "border border-[var(--azva-border)] text-[var(--azva-primary)] hover:border-[var(--azva-accent)] hover:text-[var(--azva-accent)]",
    text:
      "text-[var(--azva-primary)] underline underline-offset-8 decoration-[var(--azva-border)] hover:text-[var(--azva-accent)] hover:decoration-[var(--azva-accent)]",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
        styles[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}