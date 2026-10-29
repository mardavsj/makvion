import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Makvion Technologies",
    short_name: "Makvion",
    description: "Websites, online stores, web apps and Android apps for businesses in India and worldwide.",
    start_url: "/",
    display: "browser",
    background_color: "#faf8f3",
    theme_color: "#2c7469",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
