import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  if (!whatsappLink) return null;
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-10px_rgba(15,41,37,.7)] ring-2 ring-white sm:bottom-6 sm:right-6 sm:h-14 sm:w-14">
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
