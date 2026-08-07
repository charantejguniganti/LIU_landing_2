"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVideo from "@/components/FeaturedVideo";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white selection:bg-accent-gold selection:text-black">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Video Section */}
        <FeaturedVideo />

        {/* Before / After Transformation */}
        <BeforeAfter />

        {/* Testimonials */}
        <Testimonials />

        {/* Services Grid */}
        <Services />

        {/* Transformation Journey */}
        <Journey />

        {/* Stats Counters */}
        <Stats />

        {/* Programs & Package comparison */}
        <Programs />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Urgent Consultation CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
