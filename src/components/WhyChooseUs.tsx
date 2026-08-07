"use client";

import { Award, Compass, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Certified Experts",
      desc: "Our image consultants are internationally trained and accredited, bringing years of elite experience.",
      icon: Award,
    },
    {
      title: "Personalized Guidance",
      desc: "No template solution. We curate custom lifestyle, style, and posture maps unique to you.",
      icon: Compass,
    },
    {
      title: "Luxury Experience",
      desc: "From private fittings to modern lounges, we provide a premium, white-glove consulting service.",
      icon: ShieldCheck,
    },
    {
      title: "Lifetime Support",
      desc: "Receive ongoing monthly style updates, fit reminders, and communication check-ins.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] text-white overflow-hidden border-t border-white/5 relative">
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-accent-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Why Live It Up
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
            Elevating Personal Presentation
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-accent-gold/30 transition-all duration-300 group"
              >
                <div className="bg-accent-gold/10 p-3 rounded-xl text-accent-gold w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-3 text-white">
                  {p.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
