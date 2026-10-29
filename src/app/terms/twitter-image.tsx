import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Terms of Service for working with Makvion.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Legal", "Terms of Service for working with Makvion.");
}
