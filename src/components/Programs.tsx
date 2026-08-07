"use client";

import { Check, ArrowRight, ShieldCheck, Lock, UserCheck, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Programs() {
  const valueChecklist = [
    "Personalised 1-on-1 Guidance",
    "Expert Image Consultants",
    "Proven Transformation Process",
    "Lifetime Impact & Confidence",
  ];

  const mainFeatures = [
    "1-on-1 Consultation",
    "Wardrobe & Styling",
    "Grooming & Look Enhancement",
    "Personal Branding",
    "Follow-up Support",
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
              {"It's Time To"}<br />Live It Up!
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

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-green-500/10 w-fit"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider">Yes! I Want To Transform</p>
                <p className="text-[8px] text-white/80">Chat with our experts on WhatsApp</p>
              </div>
            </a>
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
              <div className="bg-accent-red text-white text-[10px] font-extrabold uppercase tracking-[0.2em] text-center py-2">
                Most Loved
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-black mb-1">
                    Personal Image Transformation Program
                  </h3>
                  <p className="text-xs text-black/40 mb-6">Complete transformation experience</p>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-black">₹24,999</span>
                    <span className="text-xs text-black/50 block mt-1">One Time Investment</span>
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
                  Book Free Consultation
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Other Programs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="font-serif text-lg font-bold text-black/50 uppercase tracking-wider mb-6">
                Other Programs
              </h3>

              {/* Style Makeover Session */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-black/5 hover:border-accent-gold/45 hover:shadow-lg transition-all duration-300 group cursor-pointer mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-serif text-base font-bold text-black group-hover:text-accent-red transition-colors">
                      Style Makeover Session
                    </h4>
                    <p className="text-sm font-semibold text-black/70 mt-1">₹9,999</p>
                  </div>
                  <div className="p-2.5 rounded-full bg-accent-gold/10 group-hover:bg-accent-red group-hover:text-white transition-colors text-accent-gold">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Wardrobe Detox */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-black/5 hover:border-accent-gold/45 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-serif text-base font-bold text-black group-hover:text-accent-red transition-colors">
                      Wardrobe Detox
                    </h4>
                    <p className="text-sm font-semibold text-black/70 mt-1">₹14,999</p>
                  </div>
                  <div className="p-2.5 rounded-full bg-accent-gold/10 group-hover:bg-accent-red group-hover:text-white transition-colors text-accent-gold">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
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
                <span className="text-[9px] uppercase tracking-wider font-bold text-black/50">100% Confidential</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserCheck className="w-5 h-5 text-accent-gold mb-1" />
                <span className="text-[9px] uppercase tracking-wider font-bold text-black/50">Expert Support</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
