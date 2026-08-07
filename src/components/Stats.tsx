"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, count, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    { target: 10000, suffix: "+", label: "Clients" },
    { target: 20, suffix: "+", label: "Cities" },
    { target: 98, suffix: "%", label: "Satisfaction" },
    { target: 2018, suffix: "", label: "Trusted Since" },
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] text-white overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Stats Numbers */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Real Results. Real Impact.
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-12">
              The Live It Up Impact
            </h2>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {statsList.map((stat, i) => (
                <div key={i} className="border-l border-white/10 pl-6 py-2">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-accent-gold mb-2 font-sans">
                    <Counter value={stat.target} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-wider font-semibold text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Group Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/impact_group.png"
                alt="Live It Up Client Transformation Group"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/30 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
