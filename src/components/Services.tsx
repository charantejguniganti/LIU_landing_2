"use client";

import { UserCheck, Award, ArrowRight, Shirt, Archive, Palette, Briefcase, Zap, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const serviceList = [
    {
      title: "Module 1: Personal Styling",
      desc: "Learn to identify your silhouette and select silhouettes that reflect your unique archetype.",
      icon: Shirt,
    },
    {
      title: "Module 2: Body Language",
      desc: "Master non-verbal communication, posture, eye contact, and authentic presence.",
      icon: UserCheck,
    },
    {
      title: "Module 3: Wardrobe Secrets",
      desc: "Build a timeless capsule wardrobe that reduces clutter and matches any high-end occasion.",
      icon: Archive,
    },
    {
      title: "Module 4: Color Psychology",
      desc: "Discover how colors influence perception, mood, and assertiveness in professional meetings.",
      icon: Palette,
    },
    {
      title: "Module 5: Executive Presence",
      desc: "Command authority, build gravity, and capture any room you step into.",
      icon: Briefcase,
    },
    {
      title: "Module 6: Personal Branding",
      desc: "Craft a distinct public identity that clearly communicates your value and status.",
      icon: Award,
    },
    {
      title: "Module 7: Confidence Building",
      desc: "Unlock psychological mental shifts to speak confidently and conquer social anxiety.",
      icon: Zap,
    },
    {
      title: "Module 8: Live Q&A",
      desc: "Get direct personalized feedback and have your styling queries answered in real-time.",
      icon: MessageSquare,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  } as const;

  return (
    <section id="services" className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            What You Will Learn
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Transformation Curriculum
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {serviceList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 15px 25px rgba(201, 169, 106, 0.12)",
                }}
                className="bg-white p-6 rounded-2xl border border-black/5 hover:border-accent-gold transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Icon wrapper */}
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-accent-red/10 p-3 rounded-full border border-accent-red/20 text-accent-red mb-6 transition-transform duration-300"
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
                
                <h3 className="font-serif text-base font-bold mb-3 text-black tracking-wide group-hover:text-accent-red transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-black/60 text-xs font-light leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explore Button */}
        <div className="text-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 border border-black/10 hover:border-accent-red/50 hover:bg-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 group text-black/80 hover:text-accent-red"
          >
            Reserve My ₹199 Seat
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
