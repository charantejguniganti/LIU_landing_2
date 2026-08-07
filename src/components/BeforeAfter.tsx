"use client";

import Image from "next/image";
import { Check, X, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const beforePoints = [
    "No Personal Style",
    "Low Confidence",
    "Wrong Wardrobe Choices",
    "No Clarity on Image",
    "Struggle to Make Impression",
  ];

  const afterPoints = [
    "Personal Style & Confidence",
    "Wardrobe That Works",
    "Strong First Impression",
    "Clarity & Direction",
    "Impact in Every Interaction",
  ];

  return (
    <section id="transformations" className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Real Transformations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            From Uncertain to <span className="text-accent-red">Unstoppable</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white p-6 rounded-3xl shadow-xl border border-black/5 flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="relative w-[140px] h-[180px] rounded-2xl overflow-hidden grayscale">
              <Image
                src="/images/before_model.png"
                alt="Before Live It Up Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-bold mb-4 text-black/40 uppercase tracking-wider">Before Live It Up</h3>
              <ul className="space-y-3">
                {beforePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <X className="w-4 h-4 text-accent-red flex-shrink-0" />
                    <span className="text-xs font-medium text-black/50 line-through">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Central Arrow */}
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-accent-gold/10 p-4 rounded-full border border-accent-gold/20"
            >
              <ArrowRight className="w-6 h-6 text-accent-gold" />
            </motion.div>
          </div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-6 rounded-3xl shadow-xl border border-black/5 flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="relative w-[140px] h-[180px] rounded-2xl overflow-hidden border-2 border-accent-gold">
              <Image
                src="/images/after_model.png"
                alt="After Live It Up Consulting"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-bold mb-4 text-accent-red uppercase tracking-wider">After Working With Us</h3>
              <ul className="space-y-3">
                {afterPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-black/80">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Confidence Graph Metric */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white max-w-xl mx-auto p-8 rounded-3xl shadow-lg border border-black/5"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-black/45">Their Confidence</span>
              <p className="text-3xl font-extrabold text-[#111111] mt-1">100%</p>
              <p className="text-xs text-accent-red font-semibold mt-1">Transformation Rate</p>
            </div>
            <div className="flex-1 h-16 relative">
              {/* Climbing graph drawing */}
              <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <motion.path
                  d="M0,28 Q15,22 30,20 T60,10 T100,2"
                  fill="none"
                  stroke="#A52A2A"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <div className="bg-accent-red/10 p-3 rounded-2xl border border-accent-red/20 text-accent-red">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs md:text-sm text-black/50 mt-12 font-medium">
          Join thousands of clients who have transformed their image and their lives.
        </p>

      </div>
    </section>
  );
}
