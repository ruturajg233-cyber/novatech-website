import React from "react";
import { ArrowRight, Play, Sparkles, Cpu, Globe, Rocket } from "lucide-react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#050814]"
    >
      {/* Futuristic Background Lights & Mesh Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-purple-deep/30 via-primary/20 to-electric/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-electric/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-20 right-10 w-96 h-96 bg-purple-neon/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1124]/90 border border-[#1E294B] shadow-glow-cyan/20 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-electric animate-ping" />
          <Sparkles className="w-4 h-4 text-electric" />
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            Next-Gen Technology Startup & Digital Studio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white max-w-5xl mx-auto leading-[1.12]"
        >
          Transform Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-primary-glow to-purple-glow">
            Smarter Digital Solutions
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          NovaTech helps businesses grow through modern websites, intelligent AI solutions,
          strategic digital marketing, and compelling promotional videos.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="#services"
            onClick={(e) => handleScrollTo(e, "#services")}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-deep via-primary to-electric hover:shadow-glow-dual transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#showreel"
            onClick={(e) => handleScrollTo(e, "#showreel")}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-slate-200 bg-[#0B1124]/90 border border-[#1E294B] hover:border-electric/50 hover:text-white hover:bg-[#131C38] transition-all duration-300 flex items-center justify-center gap-2.5 group backdrop-blur-md"
          >
            <div className="w-7 h-7 rounded-full bg-electric/10 text-electric flex items-center justify-center group-hover:bg-electric group-hover:text-black transition-colors">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            Watch Our Showreel
          </a>
        </motion.div>

        {/* Feature Highlights Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-800/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-electric/10 text-electric border border-electric/20">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Modern Web</p>
              <p className="text-xs text-slate-400">Performant & responsive</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-deep/20 text-purple-glow border border-purple-deep/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">AI Automation</p>
              <p className="text-xs text-slate-400">Intelligent pipelines</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary-glow border border-primary/20">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Digital Growth</p>
              <p className="text-xs text-slate-400">Strategic marketing</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Play className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Video Craft</p>
              <p className="text-xs text-slate-400">Cinematic promos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
