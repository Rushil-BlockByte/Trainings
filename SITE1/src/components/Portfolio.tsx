"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, FolderKanban } from "lucide-react";
import { portfolioItems } from "@/data/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="section border-y border-white/10 bg-black/25">
      <div className="container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="display mt-5 max-w-3xl text-4xl font-black uppercase leading-[1.02] sm:text-5xl">
              Future case studies with a serious spine.
            </h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#ffb84d]/35 bg-[#ffb84d]/10 px-3 py-2 text-sm font-bold text-[#ffb84d]">
            <Clock3 size={16} />
            Publishing roadmap
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="panel group block p-6 transition hover:border-[#00f0d4]/45"
            >
              <div className="flex items-start justify-between gap-5">
                <FolderKanban size={24} className="text-[#00f0d4]" />
                <ArrowUpRight
                  size={19}
                  className="text-[#68727d] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00f0d4]"
                />
              </div>
              <h3 className="mt-7 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9aa3ad]">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#9aa3ad]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
