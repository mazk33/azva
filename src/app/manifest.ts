import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AZVA",
    short_name: "AZVA",
    description:
      "Strategic transformation, operational intelligence, venture partnerships, and PRIZM.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4EE",
    theme_color: "#1E2A38",
    icons: [
      {
        src: "/brand/azva-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}