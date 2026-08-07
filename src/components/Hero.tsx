"use client";

import Image from "next/image";
import { CheckCircle2, Calendar, Users, Briefcase, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  const experiences = [
    "Image Analysis",
    "Style Framework",
    "Grooming Tips",
    "Body Language",
    "Q&A Session",
    "Bonus Workbook",
  ];

  const highlights = [
    { text: "Live Interactive Class" },
    { text: "Practical Frameworks" },
    { text: "90-Minute Intensive" },
    { text: "Bonus Resources" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-[#0B0B0B] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Main Info) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Capsule Tag */}
            <div className="inline-flex mb-6">
              <span className="bg-accent-red/10 border border-accent-red/30 text-accent-red text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full">
                {"Live Image Transformation Session"}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Transform Your Image.<br />
              Build Confidence.<br />
              <span className="text-accent-red">Stand Out.</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl">
              Join our exclusive Live Image Transformation Session and learn how to improve your personal style, body language, wardrobe, confidence, and executive presence.
            </p>

            {/* Scarcity / Price Capsule */}
            <div className="inline-flex gap-4 items-center mb-8 border border-white/5 bg-white/[0.02] py-2.5 px-4 rounded-xl w-fit">
              <span className="text-accent-gold font-extrabold text-lg">Only ₹199</span>
              <span className="w-1.5 h-1.5 bg-accent-red rounded-full animate-ping" />
              <span className="text-xs tracking-wider uppercase font-semibold text-white/60">Live. Interactive. Practical.</span>
            </div>

            {/* Highlights bullet points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                  <span className="text-white/80 text-xs md:text-sm font-medium">{h.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Primary CTA */}
              <Magnetic>
                <a
                  href="#cta"
                  className="flex items-center gap-3 bg-accent-red hover:bg-accent-red/90 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-accent-red/20 group cursor-pointer"
                >
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/95">Reserve My ₹199 Seat</p>
                    <p className="text-[10px] text-white/80">Claim your live access slot</p>
                  </div>
                </a>
              </Magnetic>

              {/* Secondary CTA */}
              <Magnetic>
                <a
                  href="#transformation"
                  className="flex items-center gap-3 bg-transparent border border-white/10 hover:border-accent-gold/45 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/5"
                >
                  <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                    <Calendar className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white">Watch Session Preview</p>
                    <p className="text-[10px] text-white/60">See what you will learn</p>
                  </div>
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Middle Column (Model Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center relative"
          >
            <div className="relative w-[320px] md:w-[380px] h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/hero_model.png"
                alt="Live It Up Premium Consulting"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* Right Column (Floating Premium Offer Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border-2 border-accent-gold/30 p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-accent-gold/5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/10 blur-2xl rounded-full" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-accent-red bg-accent-red/10 px-2.5 py-1 rounded-md border border-accent-red/25">Live Session</span>
                  <h3 className="font-serif text-2xl font-extrabold mt-2 text-white">
                    ₹199 <span className="text-xs font-normal text-white/50 line-through">₹999</span>
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-accent-gold font-sans">Only</span>
                </div>
              </div>

              <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                90-Minute Live Session
              </p>

              <ul className="space-y-3.5 mb-6">
                {experiences.map((exp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-xs font-light leading-snug">{exp}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-accent-red font-bold uppercase tracking-wider animate-pulse">Seats Filling Fast</span>
                <span className="text-white/40">Limited Spots</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Floating / Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="bg-accent-red/10 p-3 rounded-2xl border border-accent-red/20 text-accent-red">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">10,000+</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-gold/10 p-3 rounded-2xl border border-accent-gold/20 text-accent-gold">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">20+</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Cities</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-red/10 p-3 rounded-2xl border border-accent-red/20 text-accent-red">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">98%</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Satisfaction</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-gold/10 p-3 rounded-2xl border border-accent-gold/20 text-accent-gold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">Since 2018</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Trusted Brand</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
