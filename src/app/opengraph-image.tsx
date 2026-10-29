import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: More customers, from a website that sells while you sleep.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Makvion", "More customers, from a website that sells while you sleep.");
}
