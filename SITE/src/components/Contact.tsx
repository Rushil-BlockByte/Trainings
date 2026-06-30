"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: `+91 ${siteConfig.whatsapp}`,
    href: `https://wa.me/91${siteConfig.whatsapp}`,
    icon: MessageCircle,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Resume",
    value: "Open PDF",
    href: siteConfig.resumePath,
    icon: Download,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="panel overflow-hidden"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-10">
              <p className="eyebrow">Contact</p>
              <h2 className="display mt-5 text-4xl font-black uppercase leading-[1.02] sm:text-5xl">
                Let us make the next integration count.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#9aa3ad]">
                Available for senior integration roles, consulting conversations,
                middleware modernization, API Connect work, and DataPower delivery.
              </p>
              <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-[#b6bec7]">
                <MapPin size={18} className="mt-1 shrink-0 text-[#ffb84d]" />
                <span>{siteConfig.location}</span>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                    rel={item.label === "Email" || item.label === "Phone" ? undefined : "noreferrer"}
                    className="group min-h-40 bg-[#0b0d11] p-7 transition hover:bg-[#10141a]"
                  >
                    <Icon size={24} className="text-[#00f0d4]" />
                    <p className="mt-7 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#68727d]">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-base font-black text-white transition group-hover:text-[#00f0d4]">
                      {item.value}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
