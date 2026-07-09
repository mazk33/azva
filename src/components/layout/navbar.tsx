"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-[10000] w-full border-b border-[var(--azva-border)] bg-[var(--azva-canvas)]/95 backdrop-blur-xl">
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-normal transition",
                  isActive(item.href)
                    ? "text-[var(--azva-primary)]"
                    : "text-[rgba(14,14,14,0.58)] hover:text-[var(--azva-accent)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/connect" variant="text" className="px-0">
              Start the Conversation
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--azva-border)] text-[var(--azva-primary)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-[var(--azva-canvas)] lg:hidden">
          <div className="container-azva flex min-h-screen flex-col pt-32 pb-8">
            <div className="mb-10">
              <p className="font-[var(--font-fraunces)] text-4xl italic leading-tight tracking-[-0.04em] text-[var(--azva-primary)]">
                Purpose Aligned.
                <br />
                Value Delivered.
              </p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[rgba(14,14,14,0.58)]">
                Strategic transformation, operational intelligence, venture partnerships, and PRIZM.
              </p>
            </div>

            <nav className="grid border-y border-[var(--azva-border)]">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group grid grid-cols-[54px_1fr] items-center border-b border-[var(--azva-border)] py-4 last:border-b-0 sm:grid-cols-[68px_1fr] sm:py-5"
                >
                  <span className="text-xs tracking-[0.22em] text-[rgba(14,14,14,0.38)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[2.55rem] font-medium leading-none tracking-[-0.07em] text-[var(--azva-primary)] transition group-hover:text-[var(--azva-accent)] sm:text-5xl">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-[var(--azva-border)] pt-8">
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
    </>
  );
}