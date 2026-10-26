import React from "react";
import { Code2, BrainCircuit, TrendingUp, Film, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  borderColor: string;
  glowColor: string;
}

export const Services: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: "Website Development",
      icon: <Code2 className="w-7 h-7 text-electric" />,
      tagline: "High-Performance Modern Web Apps",
      description:
        "Custom, responsive, and ultra-fast websites engineered with modern frameworks like React and TypeScript. Designed for optimal conversion, accessibility, and search visibility.",
      features: [
        "Modern React & Next.js architectures",
        "Mobile-first responsive engineering",
        "Interactive UI/UX & fluid motion",
        "SEO and Core Web Vitals optimization",
      ],
      gradient: "from-cyan-500/20 via-electric/10 to-transparent",
      borderColor: "hover:border-electric/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]",
    },
    {
      title: "AI-Powered Solutions",
      icon: <BrainCircuit className="w-7 h-7 text-purple-glow" />,
      tagline: "Intelligent Automation & Machine Learning",
      description:
        "Smart artificial intelligence integrations that automate repetitive operations, unlock predictive analytics, and deploy conversational customer agents tailored to your workflow.",
      features: [
        "Custom AI assistants & conversational copilots",
        "Intelligent document & workflow automation",
        "Predictive data intelligence models",
        "API integration with state-of-the-art LLMs",
      ],
      gradient: "from-purple-deep/30 via-purple-neon/15 to-transparent",
      borderColor: "hover:border-purple-neon/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-7 h-7 text-emerald-400" />,
      tagline: "Targeted Growth & Data-Driven Visibility",
      description:
        "Comprehensive growth marketing that elevates your brand presence. We combine algorithmic SEO, paid acquisition funnels, and data analytics to drive qualified pipeline.",
      features: [
        "Advanced technical SEO & content clustering",
        "Precision multi-channel ad campaigns",
        "Conversion rate optimization (CRO)",
        "Real-time analytics & attribution tracking",
      ],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    },
    {
      title: "Promotional Video Production",
      icon: <Film className="w-7 h-7 text-amber-400" />,
      tagline: "Cinematic Visuals & Brand Storytelling",
      description:
        "High-impact promotional videos, product motion graphics, and commercial showreels that captivate your target audience and articulate your value proposition clearly.",
      features: [
        "Product walkthroughs & teaser reels",
        "3D motion graphics & UI showcases",
        "Scriptwriting, voiceover & sound design",
        "Multi-platform aspect ratios for social & web",
      ],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderColor: "hover:border-amber-500/50",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    },
  ];

  return (
    <section id="services" className="relative py-28 bg-[#050814] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-electric/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1124] border border-[#1E294B] text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            Our Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Comprehensive Digital Services for the Modern Era
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From technical engineering to creative visual storytelling, NovaTech provides the complete spectrum of solutions to scale your business.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl bg-[#0B1124]/90 border border-[#1E294B] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 ${service.borderColor} ${service.glowColor} backdrop-blur-xl flex flex-col justify-between`}
            >
              {/* Subtle card top gradient */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-[#131C38] border border-[#1E294B] shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <a
                    href="#contact"
                    className="p-2.5 rounded-full bg-[#131C38]/60 text-slate-400 group-hover:text-white group-hover:bg-[#131C38] transition-all"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {service.tagline}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1 group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-800/80">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-electric shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
