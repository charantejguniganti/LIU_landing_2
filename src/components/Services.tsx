"use client";

import { User, Shirt, Library, Sparkles, UserCheck, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const serviceList = [
    {
      title: "Image Consulting",
      desc: "Discover your best self through expert analysis and personalised guidance.",
      icon: User,
    },
    {
      title: "Personal Styling",
      desc: "Curated wardrobe and style recommendations that reflect your personality.",
      icon: Shirt,
    },
    {
      title: "Wardrobe Revamp",
      desc: "Declutter, optimize and build a wardrobe that truly works for you.",
      icon: Library,
    },
    {
      title: "Grooming & Look",
      desc: "Hair, skincare, grooming and overall look enhancement.",
      icon: Sparkles,
    },
    {
      title: "Body Language",
      desc: "Confident posture, communication & presence training.",
      icon: UserCheck,
    },
    {
      title: "Personal Branding",
      desc: "Build a strong personal brand that creates the right impact.",
      icon: Award,
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
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            How We Transform Your Image
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16"
        >
          {serviceList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  boxShadow: "0 20px 30px rgba(201, 169, 106, 0.15)",
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
            href="#programs"
            className="inline-flex items-center gap-2 border border-black/10 hover:border-accent-red/50 hover:bg-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 group text-black/80 hover:text-accent-red"
          >
            Explore All Services
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
