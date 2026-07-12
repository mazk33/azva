import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AZVA",
    short_name: "AZVA",
    description:
      "Purpose Aligned. Value Delivered.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F4EE",
    theme_color: "#1E2A38",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
