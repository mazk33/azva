import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azva.us"),
  title: {
    default: "AZVA | Purpose Aligned. Value Delivered.",
    template: "%s | AZVA",
  },
  description:
    "AZVA partners with founders, executives, investors, and enterprises to align strategy, operations, technology, and capital into enduring value.",
  keywords: [
    "strategic advisory",
    "enterprise transformation",
    "operational intelligence",
    "venture partnerships",
    "PRIZM",
    "automation readiness",
  ],
  authors: [{ name: "AZVA", url: "https://azva.us" }],
  creator: "AZVA",
  publisher: "AZVA",
  category: "business",
  alternates: {
    canonical: "https://azva.us",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azva.us",
    siteName: "AZVA",
    title: "AZVA | Purpose Aligned. Value Delivered.",
    description:
      "Strategic transformation, operational intelligence, venture partnerships, and PRIZM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZVA | Purpose Aligned. Value Delivered.",
    description:
      "Strategic transformation, operational intelligence, venture partnerships, and PRIZM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  applicationName: "AZVA",
};

export const viewport = {
  themeColor: "#1E2A38",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a href="#main-content" className="azva-skip-link">
          Skip to main content
        </a>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AZVA",
            url: "https://azva.us",
            logo: "https://azva.us/brand/azva-logo.png",
            description:
              "AZVA aligns strategy, operations, technology, and capital into enduring value.",
            founder: {
              "@type": "Person",
              name: "Mazhar Khan",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}