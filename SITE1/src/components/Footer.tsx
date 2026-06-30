import { ArrowUp, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm font-semibold text-[#9aa3ad]">{siteConfig.title}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm font-semibold text-[#9aa3ad] sm:flex-row sm:items-center sm:gap-5">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-[#00f0d4]">
              <Mail size={15} />
              {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} />
              {siteConfig.location}
            </span>
            <a href="#" className="inline-flex items-center gap-2 hover:text-[#00f0d4]">
              <ArrowUp size={15} />
              Top
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#68727d] sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Rushil Kumar</p>
          <p>IBM DataPower / API Connect / Enterprise Integration</p>
        </div>
      </div>
    </footer>
  );
}
