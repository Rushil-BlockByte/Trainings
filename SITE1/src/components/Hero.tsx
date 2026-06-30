"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Gauge, ShieldCheck, TerminalSquare } from "lucide-react";
import { siteConfig, snapshot } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-18">
      <Image
        src={siteConfig.heroImage}
        alt="Abstract secure API gateway infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#07080a_0%,rgba(7,8,10,0.94)_28%,rgba(7,8,10,0.58)_58%,rgba(7,8,10,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,10,0.2)_0%,#07080a_100%)]" />
      <div className="scanline" />

      <div className="container relative z-10 grid min-h-[calc(100svh-72px)] items-center py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-3 rounded-lg border border-[#00f0d4]/35 bg-[#00f0d4]/10 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00f0d4]"
          >
            <ShieldCheck size={15} />
            Secure middleware specialist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="display max-w-4xl text-6xl font-black uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl"
          >
            <p className="text-2xl font-extrabold text-[#f2f5f7] sm:text-3xl">
              {siteConfig.title}
            </p>
            <p className="mt-4 text-lg leading-8 text-[#b6bec7]">{siteConfig.signal}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#journey" className="button-primary">
              View Career Journey
              <ArrowDown size={17} />
            </a>
            <a href={siteConfig.resumePath} target="_blank" rel="noreferrer" className="button-secondary">
              <Download size={17} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
            className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {snapshot.map((item) => (
              <div key={item.label} className="hard-panel px-4 py-4">
                <p className="display text-2xl font-black text-[#00f0d4]">{item.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#9aa3ad]">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="absolute bottom-8 right-0 hidden w-[390px] border-l border-[#00f0d4]/35 bg-[#07080a]/70 p-5 backdrop-blur-md lg:block"
        >
          <div className="accent-rule mb-4" />
          <div className="grid grid-cols-[auto_1fr] gap-4">
            <TerminalSquare className="mt-1 text-[#00f0d4]" size={22} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#ffb84d]">
                Current operating mode
              </p>
              <p className="mt-2 text-sm leading-6 text-[#c9d0d7]">
                Banking-grade API governance, gateway policy implementation, SSL/TLS,
                controlled releases, and production support for critical integrations.
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#68727d]">
            <Gauge size={15} className="text-[#ff4d5e]" />
            Built for change windows, audits, and traffic that cannot fail
          </div>
        </motion.div>
      </div>
    </section>
  );
}
