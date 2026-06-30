"use client";

import { motion } from "framer-motion";
import { Cable, FileCheck2, LockKeyhole, Workflow } from "lucide-react";
import { aboutContent } from "@/data/site";

const principles = [
  {
    icon: Cable,
    title: "Integration depth",
    text: "MPGW, WSP, SOAP, REST, WSDL, XSD, queues, and backend orchestration.",
  },
  {
    icon: LockKeyhole,
    title: "Security discipline",
    text: "One-way and two-way SSL, SAML, OAuth providers, SSO, and gateway hardening.",
  },
  {
    icon: Workflow,
    title: "Operational control",
    text: "WebGUI, CLI, SOMA, AMP, XML Management Interface, log targets, and probes.",
  },
  {
    icon: FileCheck2,
    title: "Release governance",
    text: "Design documents, mapping documents, UAT triage, Service Manager, TCAB, and ECAB.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">{aboutContent.eyebrow}</p>
            <h2 className="display mt-5 text-4xl font-black uppercase leading-[1.02] text-white sm:text-5xl">
              {aboutContent.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="space-y-6"
          >
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-[#b6bec7]">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="panel p-5"
              >
                <Icon size={22} className="text-[#00f0d4]" />
                <h3 className="mt-5 text-base font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9aa3ad]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
