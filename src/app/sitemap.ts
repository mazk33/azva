import type { MetadataRoute } from "next";

const baseUrl = "https://azva.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/ventures",
    "/prizm",
    "/perspectives",
    "/perspectives/operational-leverage-is-designed",
    "/connect",
    "/manifesto",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/perspectives" || route.startsWith("/perspectives/")
        ? "monthly"
        : "yearly",
    priority: route === "" ? 1 : route === "/prizm" ? 0.9 : 0.7,
  }));
}