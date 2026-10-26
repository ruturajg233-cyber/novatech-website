import React from "react";
import { motion } from "motion/react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  category: "Web Development" | "AI Solutions" | "Digital Marketing" | "Video Production" | "Customer Support";
}

interface TestimonialsColumnProps {
  testimonials: TestimonialItem[];
  duration?: number;
  className?: string;
  reverse?: boolean;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  duration = 20,
  className = "",
  reverse = false,
}) => {
  // Duplicate array so it creates an infinite loop
  const duplicatedItems = [...testimonials, ...testimonials];

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial={{ y: reverse ? "-50%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6"
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="group relative rounded-2xl bg-[#0B1124]/90 p-6 border border-[#1E294B] hover:border-[#38BDF8]/50 transition-all duration-300 shadow-lg hover:shadow-[#6366F1]/10 hover:shadow-xl backdrop-blur-md"
          >
            {/* Subtle glow border effect on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-electric/0 via-purple-neon/0 to-electric/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-4">
              <img
                src={item.avatar}
                alt={`${item.name} profile portrait`}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#1E294B] group-hover:border-electric transition-colors duration-300"
                loading="lazy"
              />
              <div>
                <h4 className="text-sm font-semibold text-white tracking-wide">{item.name}</h4>
                <p className="text-xs text-slate-400">
                  {item.role} • <span className="text-slate-300">{item.company}</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
              "{item.content}"
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-[#131C38] text-electric font-medium border border-electric/20">
                {item.category}
              </span>
              <span className="text-slate-500 text-[11px]">Demonstration Feedback</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface TestimonialsColumns1Props {
  testimonials: TestimonialItem[];
  className?: string;
}

export const TestimonialsColumns1: React.FC<TestimonialsColumns1Props> = ({
  testimonials,
  className = "",
}) => {
  // Split into 3 columns
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <div className={`relative max-h-[720px] overflow-hidden ${className}`}>
      {/* Top & Bottom Gradient Shadows for continuous smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#050814] via-[#050814]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050814] via-[#050814]/80 to-transparent z-10 pointer-events-none" />

      {/* Grid columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {/* Column 1: Visible on all devices */}
        <TestimonialsColumn testimonials={col1} duration={26} />

        {/* Column 2: Visible on tablet and desktop */}
        <TestimonialsColumn
          testimonials={col2}
          duration={32}
          reverse={true}
          className="hidden md:block"
        />

        {/* Column 3: Visible on desktop only */}
        <TestimonialsColumn
          testimonials={col3}
          duration={28}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};
export default TestimonialsColumns1;
