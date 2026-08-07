"use client";

import { Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0B] text-white/50 text-xs py-16 border-t border-white/5 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Pitch */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                LIVE IT UP
              </span>
              <span className="text-[9px] tracking-[0.25em] text-accent-gold uppercase font-medium">
                IMAGE | STYLE | CONFIDENCE
              </span>
            </a>
            <p className="text-white/40 leading-relaxed font-light">
              {"India's leading luxury Image Consulting & Personal Branding boutique. Empowering individuals to look better, feel confident, and make an impact."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-accent-gold transition-colors font-medium">
                  Services
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-accent-gold transition-colors font-medium">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-gold transition-colors font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-accent-gold transition-colors font-medium">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-3 font-light leading-relaxed text-white/40">
              <li>Level 14, Luxury Tower, Bandra Kurla Complex, Mumbai, India</li>
              <li>support@liveitup.in</li>
              <li>+91 99999 99999</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex items-center gap-4 text-white/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-accent-gold hover:text-[#0B0B0B] transition-all border border-white/5"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-accent-gold hover:text-[#0B0B0B] transition-all border border-white/5"
                aria-label="LinkedIn Page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="mailto:support@liveitup.in"
                className="bg-white/5 p-3 rounded-full hover:bg-accent-gold hover:text-[#0B0B0B] transition-all border border-white/5"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-accent-gold hover:text-[#0B0B0B] transition-all border border-white/5"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-white/30 text-[10px]">
          <p>© {currentYear} Live It Up. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0 font-medium">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
