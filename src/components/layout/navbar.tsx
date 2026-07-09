"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Approach", href: "/#approach" },
  { label: "Disciplines", href: "/#disciplines" },
  { label: "Ventures", href: "/ventures" },
  { label: "PRIZM", href: "/prizm" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--azva-border)] bg-[var(--azva-canvas)]/85 backdrop-blur-xl">
      <div className="container-azva flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/brand/azva-logo.png"
            alt="AZVA"
            width={168}
            height={52}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-14 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-normal transition",
                  active
                    ? "text-[var(--azva-primary)]"
                    : "text-[rgba(14,14,14,0.58)] hover:text-[var(--azva-accent)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/connect" variant="text" className="px-0">
            Start the Conversation
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--azva-border)] text-[var(--azva-primary)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-24 z-40 bg-[var(--azva-canvas)] lg:hidden">
          <div className="container-azva flex min-h-[calc(100vh-96px)] flex-col justify-between py-10">
            <nav className="grid gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--azva-border)] pb-5 text-4xl font-medium tracking-[-0.06em] text-[var(--azva-primary)] transition hover:text-[var(--azva-accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-[var(--azva-border)] pt-8">
              <p className="mb-6 max-w-sm font-[var(--font-fraunces)] text-3xl italic leading-tight text-[var(--azva-primary)]">
                Better organizations begin with better alignment.
              </p>

              <Link
                href="/connect"
                onClick={() => setOpen(false)}
                className="btn-primary"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}