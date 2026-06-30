"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[0.12] bg-[#07080a]/[0.88] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.15] bg-white/[0.07] font-black text-[#00f0d4]">
            RK
          </span>
          <span className="hidden text-sm font-extrabold uppercase tracking-[0.14em] sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#9aa3ad] transition hover:bg-white/[0.07] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.resumePath} target="_blank" rel="noreferrer" className="button-secondary">
            Resume
          </a>
          <a href="#contact" className="button-primary">
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.15] bg-white/[0.07] text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#07080a]/[0.96] px-4 pb-5 pt-2 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block border-b border-white/[0.08] py-4 text-sm font-bold text-[#9aa3ad]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button-primary mt-5 w-full" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      ) : null}
    </header>
  );
}
