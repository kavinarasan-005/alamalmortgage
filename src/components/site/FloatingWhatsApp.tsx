"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/971554701475";

export function FloatingWhatsApp() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={WHATSAPP_LINK}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-[0_18px_40px_rgba(184,137,62,0.35)] transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer noopener"
      >
        {!shouldReduceMotion && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-gold-500/40 [animation-duration:2.4s]"
          />
        )}
        <MessageCircle className="relative h-6 w-6" />
      </Link>
    </motion.div>
  );
}
