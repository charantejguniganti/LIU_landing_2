"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Live It Up helped me discover my style and confidence. I get compliments everywhere now!",
      name: "Priya Sharma",
      role: "Entrepreneur",
    },
    {
      quote: "The session was a game changer. I finally understand what suits me and how to present myself.",
      name: "Rahul Mehta",
      role: "Marketing Manager",
    },
    {
      quote: "It's not just styling, it's a complete transformation. Highly recommended!",
      name: "Neha Kapoor",
      role: "Business Owner",
    },
    {
      quote: "Professional, insightful and absolutely worth it. My confidence has never been this high!",
      name: "Arjan Malhotra",
      role: "Software Engineer",
    },
  ];

  const publications = [
    "VOGUE",
    "INDIA TODAY",
    "FEMINA",
    "mid-day",
    "THE ECONOMIC TIMES",
    "Forbes",
  ];

  return (
    <section id="reviews" className="py-24 bg-[#0B0B0B] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight">
            Loved by <span className="text-accent-red">Thousands</span> of Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/5 hover:border-accent-gold/20 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
            >
              <div>
                {/* Quote */}
                <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                {/* Author profile */}
                <div className="flex flex-col gap-1.5 border-t border-white/5 pt-4">
                  <span className="text-xs font-bold text-white tracking-wide">{t.name}</span>
                  <span className="text-[10px] text-white/50">{t.role}</span>
                </div>

                {/* Star rating */}
                <div className="flex gap-0.5 mt-3 text-accent-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press / Publication logos */}
        <div className="border-t border-white/5 pt-12">
          <p className="text-center text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
            {publications.map((pub, idx) => (
              <span
                key={idx}
                className="font-serif text-sm md:text-base font-extrabold tracking-[0.15em] text-white/30 hover:text-white/60 transition-colors"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
