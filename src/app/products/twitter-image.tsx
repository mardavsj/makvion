import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Websites With Punch & Lost Seahorse.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Our products", "Websites With Punch & Lost Seahorse.");
}
