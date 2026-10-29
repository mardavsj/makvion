import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Free call, written quote, approved design, milestone build.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("How we work", "Free call, written quote, approved design, milestone build.");
}
