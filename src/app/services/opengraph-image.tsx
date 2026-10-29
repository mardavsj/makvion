import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Websites, online stores, web apps & Android apps.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Services", "Websites, online stores, web apps & Android apps.");
}
