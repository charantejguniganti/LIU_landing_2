"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const beforePoints = [
    "Unstyled Appearance",
    "Low Confidence",
    "Outdated Wardrobe",
    "Weak First Impression",
    "Unclear Personal Brand",
  ];

  const afterPoints = [
    "Better Dressing",
    "Improved Confidence",
    "Better Communication",
    "Executive Presence",
    "Personal Branding",
  ];

  return (
    <section id="transformations" className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Interactive Reveal
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-4">
            From Uncertain to <span className="text-accent-red">Unstoppable</span>
          </h2>
          <p className="text-black/60 text-xs md:text-sm font-medium tracking-wide">
            Drag the slider to see the impact of our image coaching
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left: Interactive Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/5 select-none bg-black">
              {/* After Image (Color) - Bottom Layer */}
              <Image
                src="/images/after_model.png"
                alt="After Live It Up Consulting"
                fill
                priority
                className="object-cover"
              />

              {/* Before Image (Grayscale) - Top Layer with Polygon Clip Path */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <Image
                  src="/images/before_model.png"
                  alt="Before Live It Up Consulting"
                  fill
                  priority
                  className="object-cover grayscale"
                />
              </div>

              {/* Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-accent-gold z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-gold text-[#0B0B0B] flex items-center justify-center shadow-lg border border-white/40">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Slider Input Element */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and After Slider"
              />

              {/* Before Label Tag */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-lg border border-white/10 z-10">
                BEFORE
              </div>

              {/* After Label Tag */}
              <div className="absolute bottom-4 right-4 bg-accent-red/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-lg border border-accent-gold/20 z-10">
                AFTER
              </div>
            </div>
          </motion.div>

          {/* Right: Checklist Details */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Before state */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-black/5"
              >
                <h4 className="font-serif text-sm font-bold text-black/40 uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Before the Session</h4>
                <ul className="space-y-3">
                  {beforePoints.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <X className="w-3.5 h-3.5 text-accent-red flex-shrink-0" />
                      <span className="text-xs text-black/50 font-medium line-through">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After state */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-accent-red/25 shadow-accent-red/5"
              >
                <h4 className="font-serif text-sm font-bold text-accent-red uppercase tracking-wider mb-4 border-b border-accent-red/10 pb-2">After Attending the Live Session</h4>
                <ul className="space-y-3">
                  {afterPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span className="text-xs text-black/80 font-bold">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Confidence Climbing Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-black/5"
            >
              <div className="flex items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-black/45">Confidence Level</span>
                  <p className="text-3xl font-extrabold text-[#111111] mt-1">100%</p>
                  <p className="text-xs text-accent-red font-semibold mt-1">Transformation Rate</p>
                </div>
                <div className="flex-1 h-14 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <motion.path
                      d="M0,28 Q15,22 30,20 T60,10 T100,2"
                      fill="none"
                      stroke="#A52A2A"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
                <div className="bg-accent-red/10 p-3 rounded-xl border border-accent-red/25 text-accent-red">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        <p className="text-center text-xs md:text-sm text-black/50 mt-12 font-medium">
          Join thousands of clients who have transformed their image and their lives.
        </p>

      </div>
    </section>
  );
}
