import { renderOg, ogSize } from "@/lib/og";

export const alt = "Makvion Technologies: Refund & Cancellation Policy for our projects.";
export const size = ogSize;
export const contentType = "image/png";

export default function OG() {
  return renderOg("Legal", "Refund & Cancellation Policy for our projects.");
}
