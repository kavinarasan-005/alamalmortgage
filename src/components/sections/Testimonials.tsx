"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { itemFadeUp, staggerContainer } from "@/lib/motion";

const JOTFORM_BASE_SRC =
  "https://www.jotform.com/s/umd/8750d17d263/for-embedded-widget.js";
const JOTFORM_WIDGET_SRC =
  "https://www.jotform.com/website-widgets/embed/019cd74ef66b7bf7bc191340667dcb25485d";
const JOTFORM_WIDGET_ID = "JFWebsiteWidget-019cd74ef66b7bf7bc191340667dcb25485d";

export function Testimonials() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) {
      return;
    }

    if (container.dataset.loaded === "true") {
      return;
    }

    container.dataset.loaded = "true";

    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const existing = document.querySelector(
          `script[src=\"${src}\"]`
        ) as HTMLScriptElement | null;

        if (existing) {
          const isLoaded =
            existing.dataset.loaded === "true" ||
            existing.getAttribute("data-loaded") === "true";

          if (isLoaded) {
            resolve();
            return;
          }

          existing.addEventListener("load", () => resolve(), { once: true });

          const fallback = window.setTimeout(() => resolve(), 1500);
          existing.addEventListener(
            "load",
            () => window.clearTimeout(fallback),
            { once: true }
          );
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.dataset.loaded = "false";
        script.addEventListener(
          "load",
          () => {
            script.dataset.loaded = "true";
            resolve();
          },
          { once: true }
        );
        container.appendChild(script);
      });

    void loadScript(JOTFORM_BASE_SRC).then(() => loadScript(JOTFORM_WIDGET_SRC));
  }, []);

  return (
    <section className="section bg-ink-850">
      <div className="container-base">
        <Reveal>
          <motion.div
            className="flex items-end justify-between gap-4"
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
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="mt-10 card card-pad-md">
            <div className="text-sm text-muted">
              Powered by Google Reviews
            </div>
            <div className="mt-6 w-full min-h-[400px]" ref={widgetRef}>
              <div id={JOTFORM_WIDGET_ID} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
