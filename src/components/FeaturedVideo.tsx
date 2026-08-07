"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Star, Sparkles, TrendingUp, Volume2, Settings, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="transformation" className="py-24 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Info details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
              {"SEE THE TRANSFORMATION"}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight mb-6">
              See The Live It Up<br />
              Transformation <span className="text-accent-red">In Action</span>
            </h2>
            <p className="text-black/60 text-sm md:text-base font-light leading-relaxed mb-8 max-w-md">
              Watch how we help our clients transform their image, style, confidence, and overall personal presentation to unlock new professional and social heights.
            </p>

            {/* Icons indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 border border-black/10 px-4 py-2 rounded-full bg-secondary-bg">
                <Star className="w-3.5 h-3.5 text-accent-gold" />
                <span className="text-xs font-semibold text-black/80">Real Stories</span>
              </div>
              <div className="flex items-center gap-2 border border-black/10 px-4 py-2 rounded-full bg-secondary-bg">
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                <span className="text-xs font-semibold text-black/80">Real People</span>
              </div>
              <div className="flex items-center gap-2 border border-black/10 px-4 py-2 rounded-full bg-secondary-bg">
                <TrendingUp className="w-3.5 h-3.5 text-accent-gold" />
                <span className="text-xs font-semibold text-black/80">Real Results</span>
              </div>
            </div>

            {/* Play trigger button */}
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-3 bg-accent-red hover:bg-accent-red/90 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-accent-red/20 border border-accent-gold/20 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                WATCH VIDEO
              </button>
            </div>
          </motion.div>

          {/* Right: Premium video container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div 
              onClick={() => setIsOpen(true)}
              className="relative w-full h-[240px] sm:h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-black/5 cursor-pointer group"
            >
              <Image
                src="/images/video_thumbnail.png"
                alt="Client Transformation Video Story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Real stories title on thumbnail */}
              <div className="absolute top-8 left-8 text-white z-10 hidden sm:block">
                <p className="text-[10px] tracking-[0.3em] font-semibold text-accent-gold uppercase mb-1">Live class.</p>
                <p className="text-[10px] tracking-[0.3em] font-semibold text-accent-red uppercase mb-1">Interactive.</p>
                <p className="text-[10px] tracking-[0.3em] font-semibold text-white uppercase mb-4">Practical.</p>
                <h4 className="font-serif text-lg tracking-wide">MASTERCLASS SESSION PREVIEW</h4>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-accent-red/20 group-hover:border-accent-red/50 transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Custom styled control bar matching the design */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/80 text-xs bg-black/40 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-white/5 pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-accent-red rounded-full animate-pulse" />
                  <span>0:00 / 2:45</span>
                </div>
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 cursor-pointer" />
                  <Settings className="w-4 h-4 cursor-pointer" />
                  <Maximize className="w-4 h-4 cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-accent-gold transition-colors p-2"
              aria-label="Close video player"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
            >
              {/* Replace with embedded premium showcase video or high-end stock asset */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Live It Up Client Transformation Journey"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
