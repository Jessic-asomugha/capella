import React from "react";
import { ActiveTab } from "../types";
import { ArrowRight, BadgeCheck, ShieldCheck, Truck, Headphones } from "lucide-react";

interface HeroSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  const trustBadges = [
    { title: "Fast Delivery", text: "Optimized logistics ensuring your operations never experience downtime due to fuel shortage.", icon: Truck },
    { title: "Quality Diesel", text: "Premium grade, unadulterated AGO guaranteed to protect and extend your generator lifespan.", icon: BadgeCheck },
    { title: "24/7 Support", text: "Round-the-clock emergency support and delivery tracking for complete peace of mind.", icon: Headphones },
  ];

  return (
    <section id="hero-section" className="relative bg-brand-50 overflow-hidden">
      {/* Decorative background geometry */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-amber-450/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-tr from-brand-200/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Banner + split text and image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column: marketing copy */}
        <div className="space-y-6 text-center lg:text-left animate-fade-in">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-10 h-[3px] bg-amber-450"></div>
            <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-brand-700 uppercase border border-brand-200 bg-white px-3.5 py-1.5 rounded-md">
              Premium Logistics &amp; Supply
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-brand-900 tracking-tight leading-[1.08]">
            Reliable Diesel Supply &amp; <br />
            <span className="relative inline-block">
              Energy Solutions
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-450/35 -z-10"></span>
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-brand-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Powering hospitals, hotels, factories, and construction companies across Abuja and wider Nigeria with premium-grade, unadulterated fuel and uncompromised, metered logistics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              id="hero-request-quote-btn"
              onClick={() => setActiveTab("CONTACT")}
              className="w-full sm:w-auto px-7 py-3.5 bg-brand-900 hover:bg-brand-800 text-white font-sans font-semibold text-xs tracking-widest uppercase rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => setActiveTab("SERVICES")}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-brand-50 text-brand-900 font-sans font-semibold text-xs tracking-widest uppercase rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-brand-200"
            >
              <span>Explore Services</span>
            </button>
          </div>

          {/* Social proof trust row */}
          <div className="pt-8 border-t border-brand-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="font-display font-bold text-2xl text-brand-900">5M+</div>
              <div className="text-[10px] text-brand-500 uppercase font-mono tracking-wider mt-0.5">Litres Supplied</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-brand-900">99.8%</div>
              <div className="text-[10px] text-brand-500 uppercase font-mono tracking-wider mt-0.5">Purity Rating</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-brand-900">100%</div>
              <div className="text-[10px] text-brand-500 uppercase font-mono tracking-wider mt-0.5">Meter Accuracy</div>
            </div>
          </div>
        </div>

        {/* Right column: image frame */}
        <div className="relative animate-fade-in-delay-1">
          <div className="absolute inset-0 border border-brand-200 transform translate-x-3 translate-y-3 -z-10 rounded-lg"></div>
          <div className="relative bg-white p-3 rounded-lg border border-brand-200 overflow-hidden shadow-md">
            <img
              src="/src/assets/images/diesel_supply_hero_1784144456700.jpg"
              alt="Premium Capella fuel tanker in Abuja, Nigeria"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover rounded-md img-zoom"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 bg-brand-900/95 backdrop-blur-sm text-white p-4 rounded-lg max-w-xs flex gap-3 items-center border border-brand-800 shadow-lg">
              <div className="w-10 h-10 bg-brand-800 rounded-md flex items-center justify-center text-white shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-450" />
              </div>
              <div>
                <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-amber-450">NMDPRA Registered</h4>
                <p className="text-[10px] text-brand-300 mt-0.5">Certified for safe, environment-compliant diesel fuel supply in Nigeria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar cards */}
      <div className="bg-white border-t border-brand-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-100">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="p-6 transition-colors duration-200 text-center md:text-left flex flex-col items-center md:items-start gap-4 group hover:bg-brand-50/60"
                >
                  <div className="w-11 h-11 border border-brand-200 bg-brand-50 flex items-center justify-center group-hover:border-amber-450 group-hover:bg-amber-450/10 transition-colors rounded-md text-brand-700 group-hover:text-amber-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-brand-900 text-sm uppercase tracking-wider mb-1.5">{badge.title}</h3>
                    <p className="text-xs text-brand-600 leading-relaxed">{badge.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
