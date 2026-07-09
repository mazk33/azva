import Image from "next/image";
import Link from "next/link";

const links = [
  ["Approach", "#approach"],
  ["Capabilities", "#capabilities"],
  ["Ventures", "#ventures"],
  ["PRIZM", "#prizm"],
  ["Thinking", "#thinking"],
  ["Contact", "#contact"],
  ["Manifesto", "/manifesto"],
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--azva-border)] py-14">
      <div className="container-azva grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div>
          <Image
            src="/brand/azva-logo.png"
            alt="AZVA"
            width={150}
            height={48}
            className="h-8 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-6 text-[rgba(14,14,14,0.58)]">
            Purpose Aligned. Value Delivered.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <div className="grid gap-3">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-[rgba(14,14,14,0.62)] transition hover:text-[var(--azva-accent)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">AZVA</p>
            <p className="text-sm leading-6 text-[rgba(14,14,14,0.62)]">
              Strategy. Transformation. Operational Intelligence. Venture Partnerships.
            </p>
            <p className="mt-6 text-sm text-[rgba(14,14,14,0.45)]">
              © 2026 AZVA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}