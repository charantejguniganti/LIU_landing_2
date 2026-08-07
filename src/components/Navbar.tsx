"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Transformations", href: "#transformations" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              LIVE IT UP
            </span>
            <span className="text-[9px] tracking-[0.25em] text-accent-gold uppercase font-medium">
              IMAGE | STYLE | CONFIDENCE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/80 hover:text-accent-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-red/20 border border-accent-gold/30"
              >
                <Calendar className="w-4 h-4" />
                Reserve My Seat
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-accent-gold transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B] pt-28 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-accent-gold border-b border-white/5 pb-4 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-accent-red hover:bg-accent-red/90 text-white text-sm font-semibold uppercase tracking-wider py-4 rounded-full transition-all border border-accent-gold/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Reserve My Seat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
