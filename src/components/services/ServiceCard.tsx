"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cardHover, itemFadeUp } from "@/lib/motion";

interface ServiceCardProps {
  /** Pre-rendered icon element, e.g. `<Home className="h-6 w-6" />`. */
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  ctaLabel = "Explore details",
}: ServiceCardProps) {
  return (
    <motion.div variants={itemFadeUp} whileHover={cardHover.hover} initial="rest" animate="rest">
      <Card className="card-pad h-full transition-shadow duration-200 hover:shadow-card-hover">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-500">
          {icon}
        </div>
        <h3 className="mt-6 heading-3 font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-body">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex text-sm font-semibold text-gold-500 transition duration-200 hover:translate-x-1"
        >
          {ctaLabel}
        </Link>
      </Card>
    </motion.div>
  );
}
