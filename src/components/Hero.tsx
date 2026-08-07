"use client";

import Image from "next/image";
import { CheckCircle2, MessageSquare, Calendar, Users, Briefcase, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const experiences = [
    "Personal Style That Defines You",
    "Confident Body Language",
    "Grooming That Makes Impact",
    "Wardrobe That Works For You",
    "Colors That Bring Out Your Best",
    "A Powerful Personal Brand",
    "Lasting Confidence & Presence",
  ];

  const highlights = [
    { text: "Expert Consultants" },
    { text: "Personalised Approach" },
    { text: "Proven Results" },
    { text: "Complete Transformation" },
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
                {"India's Leading Image Consulting Brand"}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Look Better.<br />
              Feel Confident.<br />
              <span className="text-accent-red">Live It Up.</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
              Personalised Image Consulting to help you look your best, feel confident, and create the right first impression.
            </p>

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
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-green-500/10 group"
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/95">Yes! I Want To Transform</p>
                  <p className="text-[10px] text-white/80">Chat with our experts on WhatsApp</p>
                </div>
              </a>

              {/* Consultation CTA */}
              <a
                href="#cta"
                className="flex items-center gap-3 bg-transparent border border-white/10 hover:border-accent-gold/45 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/5"
              >
                <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                  <Calendar className="w-5 h-5 text-accent-gold" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">Book a Free Consultation</p>
                  <p className="text-[10px] text-white/60">Speak to our image expert</p>
                </div>
              </a>
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

          {/* Right Column (You'll Experience Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 blur-2xl rounded-full" />
              
              <h3 className="font-serif text-xl font-bold mb-6 text-white">
                {"You'll"} <span className="text-accent-gold">Experience</span>
              </h3>

              <ul className="space-y-4 mb-6">
                {experiences.map((exp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-light leading-snug">{exp}</span>
                  </li>
                ))}
              </ul>

              <p className="text-accent-gold text-xs font-semibold uppercase tracking-wider">
                & Much More...
              </p>
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
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Happy Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-gold/10 p-3 rounded-2xl border border-accent-gold/20 text-accent-gold">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">50+</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Image Experts</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-red/10 p-3 rounded-2xl border border-accent-red/20 text-accent-red">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">20+</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Cities Across India</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-accent-gold/10 p-3 rounded-2xl border border-accent-gold/20 text-accent-gold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">5 Star</p>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Rated Services</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
