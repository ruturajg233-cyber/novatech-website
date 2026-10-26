import React from "react";
import { Sparkles, ArrowUp, Code2, BrainCircuit, TrendingUp, Film } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030611] border-t border-[#1E294B] text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="inline-flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-deep via-primary to-electric flex items-center justify-center p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-[#050814] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-electric" />
                </div>
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                Nova<span className="text-electric">Tech</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              NovaTech empowers businesses through modern website development, intelligent AI-powered solutions, strategic digital marketing, and compelling promotional videos.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Technology startup & creative digital engineering studio.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Showreel", href: "#showreel" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-electric transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="flex items-center gap-2 hover:text-electric transition-colors"
                >
                  <Code2 className="w-4 h-4 text-electric shrink-0" />
                  <span>Website Development</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="flex items-center gap-2 hover:text-purple-glow transition-colors"
                >
                  <BrainCircuit className="w-4 h-4 text-purple-glow shrink-0" />
                  <span>AI-Powered Solutions</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Digital Marketing</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Film className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Promotional Video Production</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {currentYear} NovaTech. All rights reserved. Academic Case-Study Showcase.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-electric transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-800/60"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
