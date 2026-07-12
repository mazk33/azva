import type { Metadata } from "next";

export const siteConfig = {
  name: "AZVA",
  url: "https://azva.us",
  title: "AZVA | Purpose Aligned. Value Delivered.",
  description:
    "AZVA partners with founders, executives, investors, and enterprises to align strategy, operations, technology, and capital into enduring value.",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
