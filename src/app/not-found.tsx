import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className="min-h-[72vh] pt-40 md:pt-48">
        <div className="container-azva">
          <p className="eyebrow mb-8">404</p>
          <h1 className="display-lg max-w-4xl">Alignment lost.</h1>
          <p className="body-lg mt-10 max-w-[620px]">
            The page you are looking for may have moved, changed, or never existed.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/perspectives" className="btn-secondary">
              Explore Perspectives
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}