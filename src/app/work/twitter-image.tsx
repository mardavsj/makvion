import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Concept projects for a clinic, a restaurant and a D2C brand.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Our work", "Concept projects for a clinic, a restaurant and a D2C brand.");
}
