import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/971551234567";

export function FloatingWhatsApp() {
  return (
    <Link
      href={WHATSAPP_LINK}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white shadow-[0_18px_40px_rgba(184,137,62,0.35)] transition hover:scale-105"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer noopener"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  );
}
