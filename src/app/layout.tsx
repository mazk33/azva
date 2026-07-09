import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";

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
    "strategy",
    "enterprise transformation",
    "operational intelligence",
    "venture partnerships",
    "PRIZM",
    "automation readiness",
    "strategic advisory",
  ],
  authors: [{ name: "AZVA" }],
  creator: "AZVA",
  publisher: "AZVA",
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
  },
  icons: {
    icon: "/brand/azva-logo.png",
    apple: "/brand/azva-logo.png",
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
        <JsonLd />
        {children}</body>
    </html>
  );
}