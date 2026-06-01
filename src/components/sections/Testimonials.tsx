"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { itemFadeUp, staggerContainer } from "@/lib/motion";

const JOTFORM_BASE_SRC =
  "https://www.jotform.com/s/umd/8750d17d263/for-embedded-widget.js";
const JOTFORM_WIDGET_SRC =
  "https://www.jotform.com/website-widgets/embed/019cd74ef66b7bf7bc191340667dcb25485d";
const JOTFORM_WIDGET_ID = "JFWebsiteWidget-019cd74ef66b7bf7bc191340667dcb25485d";

// Google Business profile – search link reliably lands on the reviews panel
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Al+Amal+Mortgage+Consultancy+Dubai&ibp=htl;reviews";

export function Testimonials() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;
    if (container.dataset.loaded === "true") return;
    container.dataset.loaded = "true";

    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const existing = document.querySelector(
          `script[src="${src}"]`
        ) as HTMLScriptElement | null;

        if (existing) {
          const isLoaded =
            existing.dataset.loaded === "true" ||
            existing.getAttribute("data-loaded") === "true";
          if (isLoaded) { resolve(); return; }
          existing.addEventListener("load", () => resolve(), { once: true });
          const fallback = window.setTimeout(() => resolve(), 1500);
          existing.addEventListener("load", () => window.clearTimeout(fallback), { once: true });
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.loaded = "false";
        script.addEventListener("load", () => { script.dataset.loaded = "true"; resolve(); }, { once: true });
        container.appendChild(script);
      });

    void loadScript(JOTFORM_BASE_SRC).then(() => loadScript(JOTFORM_WIDGET_SRC));
  }, []);

  // Intercept any "load more" / "see more" clicks inside the widget and
  // redirect to the Google reviews page instead of staying on the page.
  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const text = target.textContent?.toLowerCase() ?? "";
      const isLoadMore =
        text.includes("load more") ||
        text.includes("see more") ||
        text.includes("show more") ||
        target.closest("[class*='load']") !== null ||
        target.closest("[class*='more']") !== null;

      if (isLoadMore) {
        e.preventDefault();
        e.stopPropagation();
        window.open(GOOGLE_REVIEWS_URL, "_blank", "noopener,noreferrer");
      }
    };

    container.addEventListener("click", handleClick, true);
    return () => container.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <section className="section bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="flex flex-wrap items-end justify-between gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <motion.p className="eyebrow" variants={itemFadeUp}>
                Google reviews
              </motion.p>
              <motion.h2
                className="mt-4 heading-2 font-semibold"
                variants={itemFadeUp}
              >
                Real feedback from UAE homeowners
              </motion.h2>
            </div>

            {/* Rating badge */}
            <motion.div variants={itemFadeUp} className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.9</span>
              <span className="text-sm text-muted">on Google</span>
            </motion.div>
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="mt-10 card card-pad-md">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted">Powered by Google Reviews</p>
              <Link
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-500"
              >
                See all reviews
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-6 w-full min-h-[400px]" ref={widgetRef}>
              <div id={JOTFORM_WIDGET_ID} />
            </div>

            {/* Prominent fallback CTA for "load more" */}
            <div className="mt-6 flex justify-center border-t border-border pt-6">
              <Link
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-500/30 px-5 py-2.5 text-sm font-semibold text-gold-500 transition-colors hover:bg-gold-500/20"
              >
                <Star className="h-4 w-4 fill-gold-500" />
                Read more reviews on Google
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
