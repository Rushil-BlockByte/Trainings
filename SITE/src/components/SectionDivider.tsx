"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
        className="h-px origin-left bg-gradient-to-r from-[#00e5c7]/40 via-white/10 to-transparent"
      />
    </div>
  );
}
