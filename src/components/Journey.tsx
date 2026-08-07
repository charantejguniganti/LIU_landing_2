"use client";

import { Search, FolderHeart, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Journey() {
  const steps = [
    {
      num: "1",
      title: "Discover",
      desc: "We understand you, your goals and your lifestyle.",
      icon: Search,
    },
    {
      num: "2",
      title: "Analyze",
      desc: "Our experts analyze your image, style & personality.",
      icon: FolderHeart,
    },
    {
      num: "3",
      title: "Transform",
      desc: "Personalised plan and expert guidance just for you.",
      icon: Users,
    },
    {
      num: "4",
      title: "Elevate",
      desc: "Step into your best self with confidence and impact.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            The Live It Up Experience
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Your Transformation Journey
          </h2>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
          {/* Connector Dotted Line for desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-accent-gold/25 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white border border-black/5 hover:border-accent-gold shadow-md flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <Icon className="w-8 h-8 text-accent-gold group-hover:text-accent-red transition-colors" />
                  
                  {/* Step Number Tag */}
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent-red text-white text-[11px] font-bold flex items-center justify-center border border-white">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold mb-3 text-black">
                  {step.num}. {step.title}
                </h3>
                
                <p className="text-black/60 text-xs md:text-sm font-light leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
