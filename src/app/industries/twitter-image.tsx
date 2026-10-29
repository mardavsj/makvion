import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Websites for clinics, shops, coaching institutes & startups.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Industries", "Websites for clinics, shops, coaching institutes & startups.");
}
