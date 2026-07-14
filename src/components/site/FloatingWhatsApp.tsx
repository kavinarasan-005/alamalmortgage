"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/971554701475";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.828.744 5.58 2.156 7.99L.06 31.94l8.146-2.13A15.9 15.9 0 0 0 16.004 32C24.84 32 32 24.837 32 16S24.84 0 16.004 0Zm0 29.09a13.02 13.02 0 0 1-6.647-1.82l-.477-.283-4.833 1.263 1.29-4.71-.31-.483A13.03 13.03 0 0 1 2.91 16c0-7.22 5.876-13.09 13.094-13.09 7.217 0 13.093 5.87 13.093 13.09 0 7.221-5.876 13.09-13.093 13.09Zm7.183-9.805c-.393-.197-2.325-1.147-2.686-1.278-.36-.132-.622-.197-.884.197-.262.393-1.015 1.278-1.245 1.54-.23.263-.459.296-.851.099-.393-.197-1.657-.611-3.157-1.949-1.167-1.04-1.955-2.326-2.185-2.719-.229-.393-.024-.606.197-.803.196-.175.437-.459.655-.688.219-.23.29-.393.436-.656.146-.263.073-.492-.041-.688-.115-.197-1.036-2.494-1.42-3.415-.375-.898-.756-.776-1.037-.79-.263-.014-.564-.017-.865-.017-.301 0-.79.113-1.203.575-.413.462-1.575 1.539-1.575 3.752 0 2.213 1.61 4.351 1.834 4.65.223.296 3.076 4.677 7.446 6.37 4.37 1.694 4.37 1.129 5.156 1.06.786-.07 2.554-1.048 2.912-2.06.359-1.011.359-1.874.251-2.06-.108-.185-.393-.296-.788-.493Z" />
    </svg>
  );
}

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
        <WhatsAppIcon className="relative h-6 w-6" />
      </Link>
    </motion.div>
  );
}
