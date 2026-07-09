import type { MetadataRoute } from "next";

const routes = ["", "/perspectives", "/prizm", "/ventures", "/about", "/connect"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://azva.us${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}