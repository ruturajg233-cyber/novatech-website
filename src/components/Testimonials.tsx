import React from "react";
import { MessageSquareQuote, Info } from "lucide-react";
import { TestimonialsColumns1 } from "@/components/ui/testimonials-columns-1";
import { testimonialsData } from "@/data/testimonialsData";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-28 bg-[#050814] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-purple-deep/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-electric/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1124] border border-[#1E294B] text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-electric" />
            Client Perspectives
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real feedback about our digital solutions and creative services.
          </p>

          {/* Demonstration Content Disclaimer Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1124]/90 border border-[#1E294B] text-xs text-slate-400">
            <Info className="w-4 h-4 text-electric shrink-0" />
            <span>
              <strong>Case Study Note:</strong> Showcase scenarios illustrating client experience across our four service pillars.
            </span>
          </div>
        </div>

        {/* Animated 3-column / 2-column / 1-column component from 21st.dev */}
        <TestimonialsColumns1 testimonials={testimonialsData} />
      </div>
    </section>
  );
};
export default Testimonials;
