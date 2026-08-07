"use client";

import { Shirt, Archive, UserCheck, Zap, MessageSquare, Gift, Smile } from "lucide-react";
import { motion } from "framer-motion";

export default function Journey() {
  const steps = [
    {
      num: "1",
      title: "Welcome",
      desc: "Orientation, session goals, and setting your transformation intent.",
      icon: Smile,
    },
    {
      num: "2",
      title: "Personal Style",
      desc: "Deconstruct style archetypes and identify yours.",
      icon: Shirt,
    },
    {
      num: "3",
      title: "Wardrobe",
      desc: "Core pillars of building a smart capsule wardrobe.",
      icon: Archive,
    },
    {
      num: "4",
      title: "Body Language",
      desc: "Postures, gestures, and voice presence secrets.",
      icon: UserCheck,
    },
    {
      num: "5",
      title: "Confidence",
      desc: "Psychological mental shifts for executive presence.",
      icon: Zap,
    },
    {
      num: "6",
      title: "Q&A",
      desc: "Interactive open mic queries styling session.",
      icon: MessageSquare,
    },
    {
      num: "7",
      title: "Bonus Resources",
      desc: "Unlock checklists, templates, and community credentials.",
      icon: Gift,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  } as const;

  return (
    <section className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Session Agenda
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            90-Minute Masterclass Timeline
          </h2>
        </div>

        {/* Steps Flow */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative max-w-6xl mx-auto"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Icon Circle */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 20px rgba(201, 169, 106, 0.15)",
                  }}
                  className="w-20 h-20 rounded-full bg-white border border-black/5 hover:border-accent-gold shadow-md flex items-center justify-center mb-6 relative z-10 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-accent-gold group-hover:text-accent-red transition-colors" />
                  
                  {/* Step Number Tag */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-red text-white text-[10px] font-bold flex items-center justify-center border border-white">
                    {step.num}
                  </span>
                </motion.div>

                <h3 className="font-serif text-sm font-bold mb-2 text-black">
                  {step.title}
                </h3>
                
                <p className="text-black/60 text-[11px] font-light leading-relaxed max-w-[150px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
