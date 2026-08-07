"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is this session for?",
      a: "This session is designed for working professionals, managers, entrepreneurs, and anyone looking to command more authority, build a premium personal brand, and upgrade their wardrobe styling.",
    },
    {
      q: "Is the session live?",
      a: "Yes, it is a 100% live and interactive session. You can ask questions directly to our certified image consultants during the Q&A segment.",
    },
    {
      q: "Will I get the recording?",
      a: "Yes! All registered participants who purchase the ₹199 ticket will receive access to the session recording for 7 days, so you can review the style guides anytime.",
    },
    {
      q: "Can beginners join?",
      a: "Absolutely. The transformation framework is built from the ground up, starting with simple daily styling rules that anyone can apply immediately.",
    },
    {
      q: "How do I attend?",
      a: "Once you reserve your seat, you will receive a Zoom link and calendar invite via email and WhatsApp. Just click the link to join on Sunday at 7:00 PM.",
    },
    {
      q: "What happens after payment?",
      a: "Immediately after your secure payment of ₹199, you will get instant access to the bonus materials (Checklists & PDFs) and a link to join the exclusive WhatsApp community.",
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
