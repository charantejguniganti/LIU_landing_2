"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What exactly is Image Consulting?",
      a: "Image Consulting is a professional process of evaluating and upgrading your appearance, grooming, wardrobe, body language, and vocal styling to project confidence, authority, and personal alignment. It is designed to match who you are on the inside with what you display on the outside.",
    },
    {
      q: "Who is the Personal Image Transformation Program for?",
      a: "This program is designed for executives, business owners, public speakers, and ambitious professionals who recognize that their personal brand, image, and style play a critical role in their professional success and self-esteem.",
    },
    {
      q: "How long does the entire transformation process take?",
      a: "Our typical program lasts between 4 to 8 weeks. This includes the initial consultation, wardrobe analysis, customized style maps, grooming upgrades, body language styling, and follow-up support.",
    },
    {
      q: "Do you help with wardrobe shopping and styling?",
      a: "Yes! During our styling phase, we curate specific lists, fit recommendations, and coordinate shopping assistance (either online or accompanied in-person) to build a wardrobe that matches your unique body shape and personality.",
    },
    {
      q: "Can the program be done online, or is it fully in-person?",
      a: "We offer both! We conduct highly immersive in-person sessions at our luxury lounges in major Indian cities, as well as fully optimized virtual consultations for remote clients.",
    },
  ];

  return (
    <section className="py-24 bg-[#F7F2EB] text-[#111111] overflow-hidden border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                >
                  <span className="font-serif text-sm md:text-base font-bold text-black group-hover:text-accent-red transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent-red" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-black/5">
                        <p className="text-xs md:text-sm text-black/60 font-light leading-relaxed mt-4">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
