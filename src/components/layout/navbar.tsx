import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Approach", href: "#approach" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Ventures", href: "#ventures" },
  { label: "PRIZM", href: "#prizm" },
  { label: "Perspective", href: "#perspective" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--azva-border)] bg-[var(--azva-canvas)]/85 backdrop-blur-xl">
      <div className="container-azva flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/azva-logo.png"
            alt="AZVA"
            width={180}
            height={56}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[rgba(14,14,14,0.68)] transition hover:text-[var(--azva-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="hidden text-sm font-medium text-[var(--azva-primary)] underline-offset-8 transition hover:text-[var(--azva-accent)] md:block">
          Start the Conversation
        </Link>
      </div>
    </header>
  );
}