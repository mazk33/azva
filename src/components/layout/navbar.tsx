import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { label: "Approach", href: "#approach" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Ventures", href: "#ventures" },
  { label: "PRIZM", href: "#prizm" },
  { label: "Thinking", href: "#thinking" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--azva-border)] bg-[var(--azva-canvas)]/85 backdrop-blur-xl">
      <div className="container-azva flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/azva-logo.png"
            alt="AZVA"
            width={168}
            height={52}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-normal text-[rgba(14,14,14,0.58)] transition hover:text-[var(--azva-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" variant="text" className="px-0">
            Start the Conversation
          </ButtonLink>
        </div>

        <Link
          href="#contact"
          className="text-sm font-medium text-[var(--azva-primary)] lg:hidden"
        >
          Connect
        </Link>
      </div>
    </header>
  );
}