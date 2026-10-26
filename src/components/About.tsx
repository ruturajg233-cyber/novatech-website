import React from "react";
import { Lightbulb, Award, Shield, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface ValueCard {
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  pillars: string[];
  gradient: string;
}

export const About: React.FC = () => {
  const values: ValueCard[] = [
    {
      title: "Innovation",
      icon: <Lightbulb className="w-6 h-6 text-electric" />,
      tagline: "Forward-Thinking Tech",
      description:
        "Pushing boundaries with cutting-edge web frameworks and applied artificial intelligence to solve complex modern challenges.",
      pillars: ["Modern tech stacks", "AI-first methodologies", "Continuous experimentation"],
      gradient: "from-cyan-500/20 via-electric/10 to-transparent",
    },
    {
      title: "Quality",
      icon: <Award className="w-6 h-6 text-purple-glow" />,
      tagline: "Craftsmanship & Precision",
      description:
        "Architecting clean, maintainable code bases and fluid user interfaces designed to exceed performance and accessibility standards.",
      pillars: ["Clean code architecture", "Pixel-perfect responsiveness", "High performance benchmarks"],
      gradient: "from-purple-deep/30 via-purple-neon/15 to-transparent",
    },
    {
      title: "Reliability",
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      tagline: "Dependable Engineering",
      description:
        "Ensuring consistent system uptime, robust digital infrastructure, and transparent communication across every phase of collaboration.",
      pillars: ["Secure implementations", "Transparent delivery", "Responsive engineering support"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#050814] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1124] border border-[#1E294B] text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            About NovaTech
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Technology With Purpose
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            NovaTech is a technology startup focused on modern development, useful AI solutions, and meaningful digital experiences. We bridge engineering precision with creative vision to help ambitious businesses navigate the digital future.
          </p>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-[#0B1124]/90 border border-[#1E294B] hover:border-slate-700 p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/5 backdrop-blur-xl flex flex-col justify-between"
            >
              {/* Subtle top hover glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${val.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="p-3.5 w-fit rounded-2xl bg-[#131C38] border border-[#1E294B] mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  {val.icon}
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {val.tagline}
                </span>

                <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-3">
                  {val.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {val.description}
                </p>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {val.pillars.map((pillar) => (
                    <div key={pillar} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-electric shrink-0" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
