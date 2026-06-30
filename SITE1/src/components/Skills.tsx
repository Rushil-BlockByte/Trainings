"use client";

import { motion } from "framer-motion";
import { GraduationCap, Layers3 } from "lucide-react";
import { education, expertise } from "@/data/site";

export function Skills() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Expertise</p>
            <h2 className="display mt-5 text-4xl font-black uppercase leading-[1.02] sm:text-5xl">
              Technical stack with operational bite.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#9aa3ad]">
            Rushil&apos;s profile is strongest where implementation detail meets uptime:
            secure gateways, API lifecycle governance, transformations, logging,
            troubleshooting, and controlled enterprise change.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {expertise.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="panel p-6"
            >
              <div className="flex items-center gap-3">
                <Layers3 size={21} className="text-[#00f0d4]" />
                <h3 className="text-lg font-black text-white">{group.category}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-[#c9d0d7]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap size={22} className="text-[#ffb84d]" />
            <h3 className="text-xl font-black text-white">Education</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article key={item.degree} className="hard-panel p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#ffb84d]">
                  {item.period}
                </p>
                <h4 className="mt-3 text-base font-black leading-6 text-white">{item.degree}</h4>
                <p className="mt-3 text-sm leading-6 text-[#9aa3ad]">{item.school}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#68727d]">
                  {item.institution}
                </p>
                <p className="mt-4 font-mono text-sm font-bold text-[#00f0d4]">{item.score}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
