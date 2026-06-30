"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, CheckCircle2 } from "lucide-react";
import { careerJourney } from "@/data/site";

export function CareerJourney() {
  return (
    <section id="journey" className="section border-y border-white/10 bg-black/20">
      <div className="container">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Career Journey</p>
            <h2 className="display mt-5 max-w-3xl text-4xl font-black uppercase leading-[1.02] sm:text-5xl">
              From gateway engineering to senior integration delivery.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#9aa3ad]">
            A resume-backed timeline across financial services, healthcare, education,
            public sector, and transport operations.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-gradient-to-b from-[#00f0d4] via-white/20 to-transparent md:block" />

          <div className="space-y-5">
            {careerJourney.map((role, index) => (
              <motion.article
                key={role.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="relative md:pl-14"
              >
                <span className="absolute left-0 top-7 hidden h-9 w-9 place-items-center rounded-lg border border-[#00f0d4]/40 bg-[#07100f] text-xs font-black text-[#00f0d4] md:grid">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="panel overflow-hidden">
                  <div className="grid gap-5 border-b border-white/10 p-6 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-[#9aa3ad]">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays size={14} className="text-[#ffb84d]" />
                          {role.period}
                        </span>
                        {index === 0 ? (
                          <span className="rounded-lg border border-[#00f0d4]/30 bg-[#00f0d4]/10 px-2 py-1 text-[#00f0d4]">
                            Current
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-4 text-2xl font-black text-white">{role.position}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#b6bec7]">
                        <Building2 size={16} className="text-[#00f0d4]" />
                        {role.company}
                      </p>
                    </div>

                    <div className="hard-panel min-w-[260px] p-4">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffb84d]">
                        Client / Focus
                      </p>
                      <p className="mt-2 text-sm font-extrabold text-white">{role.client}</p>
                      <p className="mt-1 text-sm leading-6 text-[#9aa3ad]">{role.focus}</p>
                    </div>
                  </div>

                  <ul className="grid gap-3 p-6 lg:grid-cols-2">
                    {role.impact.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#b6bec7]">
                        <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#00f0d4]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
