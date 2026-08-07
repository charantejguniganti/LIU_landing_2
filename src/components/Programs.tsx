"use client";

import { Check, ShieldCheck, Lock, UserCheck, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Programs() {
  const valueChecklist = [
    "Live 90-Minute Session",
    "Interactive Q&A Session",
    "Exclusive Bonus PDFs",
    "Class Recording Access",
    "WhatsApp Community Entry",
  ];

  const mainFeatures = [
    "Live Interaction",
    "Styling & Wardrobe Maps",
    "Grooming & Posture Secrets",
    "Live Q&A Session",
    "Ongoing Community Support",
  ];

  const bonuses = [
    { title: "Bonus 1: Style Checklist", value: "Worth ₹999" },
    { title: "Bonus 2: Wardrobe Guide", value: "Worth ₹1499" },
    { title: "Bonus 3: Color Guide PDF", value: "Worth ₹999" },
    { title: "Bonus 4: Grooming Checklist", value: "Worth ₹799" },
    { title: "Bonus 5: WhatsApp Community", value: "Free Entry" },
  ];

  return (
    <section id="programs" className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Core pitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Invest In Yourself
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#111111] mb-6">
              {"It's Time To"}<br />Stand Out!
            </h2>
            
            <ul className="space-y-4 mb-8">
              {valueChecklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-red/10 border border-accent-red/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-red" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-black/75">{item}</span>
                </li>
              ))}
            </ul>

            {/* Price Indicator */}
            <div className="bg-white/40 border border-black/5 p-4 rounded-xl">
              <span className="text-[10px] uppercase font-bold tracking-wider text-black/45 block mb-1">Session Access Fee</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-black">₹199</span>
                <span className="text-xs text-black/40 line-through">₹999</span>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Main Program Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex"
          >
            <div className="bg-white rounded-3xl shadow-xl border-2 border-accent-red relative overflow-hidden flex flex-col justify-between w-full">
              {/* Highlight Tag */}
              <div className="bg-accent-red text-white text-[10px] font-extrabold uppercase tracking-[0.2em] text-center py-2 animate-pulse">
                Limited Time Offer
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-black mb-1">
                    Live Image Transformation Session
                  </h3>
                  <p className="text-xs text-black/40 mb-6">Complete masterclass experience</p>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-black">₹199</span>
                    <span className="text-xs text-black/40 line-through ml-2">₹999</span>
                    <span className="text-xs text-accent-red font-semibold block mt-1">{"Today's Special Price"}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {mainFeatures.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-red flex-shrink-0" />
                        <span className="text-xs text-black/75 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#cta"
                  className="block text-center bg-accent-red hover:bg-accent-red/90 text-white text-[11px] font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-md"
                >
                  Reserve My ₹199 Seat
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bonuses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <Gift className="w-5 h-5 text-accent-red" />
                <h3 className="font-serif text-lg font-bold text-black uppercase tracking-wider">
                  Free Bonuses Included
                </h3>
              </div>

              {/* Bonus Items List */}
              <div className="space-y-3">
                {bonuses.map((bonus, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-black/5 hover:border-accent-gold/45 transition-all duration-300 flex justify-between items-center group cursor-pointer">
                    <div>
                      <h4 className="font-serif text-xs font-bold text-black group-hover:text-accent-red transition-colors">
                        {bonus.title}
                      </h4>
                    </div>
                    <div className="text-[10px] font-extrabold uppercase text-accent-gold bg-accent-gold/10 px-2 py-1 rounded">
                      {bonus.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom trust icons */}
            <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-6">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-5 h-5 text-accent-gold mb-1" />
                <span className="text-[9px] uppercase tracking-wider font-bold text-black/50">Secure Payments</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="w-5 h-5 text-accent-gold mb-1" />
                <span className="text-[9px] uppercase tracking-wider font-bold text-black/50">100% Secure</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserCheck className="w-5 h-5 text-accent-gold mb-1" />
                <span className="text-[9px] uppercase tracking-wider font-bold text-black/50">Expert Led</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
