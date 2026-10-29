import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: A web & app studio in Pune, building for India and the world.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("About us", "A web & app studio in Pune, building for India and the world.");
}
