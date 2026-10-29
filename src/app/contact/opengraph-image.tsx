import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Get a free quote for your website or app.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Contact", "Get a free quote for your website or app.");
}
