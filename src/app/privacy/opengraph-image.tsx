import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Privacy Policy: how we collect, use and protect your data.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Legal", "Privacy Policy: how we collect, use and protect your data.");
}
