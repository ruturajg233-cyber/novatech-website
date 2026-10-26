import React, { useRef, useState } from "react";
import { Play, Sparkles, Volume2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export const Showreel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="showreel" className="relative py-28 bg-[#050814] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-purple-deep/20 via-electric/15 to-primary/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1124] border border-[#1E294B] text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-electric" />
            NovaTech Showreel
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            A Glimpse Into the Future
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover how creativity, intelligent technology, and digital experiences come together to help businesses move forward.
          </p>
        </div>

        {/* Video Theater Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-tr from-purple-deep/40 via-electric/30 to-purple-neon/40 shadow-glow-dual"
        >
          {/* Glass Inner Frame */}
          <div className="relative rounded-[14px] sm:rounded-[22px] overflow-hidden bg-black/90 aspect-video group">
            {/* Native HTML5 Video */}
            <video
              ref={videoRef}
              src="/promo.mp4"
              controls
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover rounded-[14px] sm:rounded-[22px]"
            >
              <source src="/promo.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback. Please upgrade your browser to view our promotional showreel.
            </video>

            {/* Quick Play Overlay Button when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 cursor-pointer group-hover:bg-black/25"
                aria-label="Play promotional video"
              >
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-deep via-primary to-electric flex items-center justify-center p-0.5 shadow-glow-cyan hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-[#050814]/90 rounded-full flex items-center justify-center text-electric group-hover:text-white transition-colors">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Video Footnote & Specs */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 px-2 sm:px-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-electric" />
            <span>Official NovaTech Project Showreel • High-Definition 1080p</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-purple-glow" />
            <span>Interactive playback controls enabled • Preloaded metadata</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showreel;
