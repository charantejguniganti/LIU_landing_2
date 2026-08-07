"use client";

import { useEffect, useState } from "react";
import { Calendar, MessageSquare, AlertCircle } from "lucide-react";

export default function FinalCTA() {
  // Scarcity Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 37,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="cta" className="py-24 bg-[#0B0B0B] text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-red/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 text-center">
          
          <div className="inline-flex items-center gap-2 mb-6 bg-accent-red/10 border border-accent-red/30 px-4 py-1.5 rounded-full text-accent-red">
            <AlertCircle className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Limited Consultations Available This Week</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready To Look, Feel & Live Your Best?
          </h2>
          
          <p className="text-white/60 text-xs md:text-sm font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Book your free 1-on-1 personal consultation call. Our certified image experts will analyze your style profiles and guide you on your transformation blueprint.
          </p>

          {/* Countdown Clock */}
          <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto mb-12">
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
              <span className="block text-2xl font-bold text-accent-gold">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="text-[9px] uppercase tracking-wider text-white/40 font-semibold">Days</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
              <span className="block text-2xl font-bold text-accent-gold">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-[9px] uppercase tracking-wider text-white/40 font-semibold">Hours</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
              <span className="block text-2xl font-bold text-accent-gold">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-[9px] uppercase tracking-wider text-white/40 font-semibold">Mins</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
              <span className="block text-2xl font-bold text-accent-gold">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="text-[9px] uppercase tracking-wider text-white/40 font-semibold">Secs</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider">Yes! I Want To Transform</p>
                <p className="text-[10px] text-white/80">Chat with experts on WhatsApp</p>
              </div>
            </a>

            {/* Calendar CTA */}
            <button
              onClick={() => alert("Consultation Form Opened")}
              className="flex items-center gap-3 bg-accent-red hover:bg-accent-red/90 text-white px-6 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center border border-accent-gold/25 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-white" />
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider">Book Free Consultation</p>
                <p className="text-[10px] text-white/80">Select call date & time</p>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
