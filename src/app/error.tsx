"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <Navbar />

      <section className="min-h-[72vh] pt-40 md:pt-48">
        <div className="container-azva">
          <p className="eyebrow mb-8">Error</p>

          <h1 className="display-lg max-w-4xl">
            Clarity interrupted.
          </h1>

          <p className="body-lg mt-10 max-w-[620px]">
            Something unexpected happened. You can try again or return to the
            AZVA homepage.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button type="button" onClick={reset} className="btn-primary">
              Try Again
            </button>

            <Link href="/" className="btn-secondary">
              Return Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}