import React from "react";
import { ActiveTab } from "../types";
import { ArrowRight, Cpu, BadgeCheck } from "lucide-react";

interface HeroSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  const trustBadges = [
    { title: "Fast Delivery", text: "Optimized logistics ensuring your operations never experience downtime due to fuel shortage.", icon: "⚡" },
    { title: "Quality Diesel", text: "Premium grade, unadulterated AGO (Diesel) guaranteed to protect and extend your generator lifespan.", icon: "💎" },
    { title: "24/7 Support", text: "Round-the-clock emergency support and delivery tracking for complete peace of mind.", icon: "📞" }
  ];

  return (
    <section id="hero-section" className="bg-white border-b border-slate-200">
      {/* Banner + split text and image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
        {/* Background circular geometry */}
        <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-slate-100 rounded-full scale-150 transform translate-x-1/3 opacity-30 pointer-events-none"></div>
        
        {/* Left column: marketing copies */}
        <div className="space-y-6 text-center lg:text-left relative z-10">
          <div className="w-12 h-1 bg-slate-900 mb-6 mx-auto lg:mx-0"></div>
          
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-slate-900 uppercase border border-slate-900 bg-slate-50 px-3.5 py-1.5 rounded-none inline-block">
            Premium Logistics &amp; Supply
          </span>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Reliable Diesel Supply &amp; <br /><span className="border-b-4 border-slate-900 pb-1">Energy Solutions</span>
          </h1>
          
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Powering hospitals, hotels, factories, and construction companies across Abuja and wider Nigeria with premium-grade, unadulterated fuel and uncompromised, metered logistics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              id="hero-request-quote-btn"
              onClick={() => setActiveTab("CONTACT")}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs tracking-widest uppercase rounded-none transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Social proof trust row */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="font-display font-bold text-2xl text-slate-900">5M+</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Litres Supplied</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-slate-900">99.8%</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Purity Rating</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl text-slate-900">100%</div>
              <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Meter Accuracy</div>
            </div>
          </div>
        </div>

        {/* Right column: beautiful image frame */}
        <div className="relative">
          <div className="absolute inset-0 border border-slate-200 transform translate-x-2 translate-y-2 -z-10"></div>
          <div className="relative bg-white p-3 rounded-none border border-slate-200 overflow-hidden">
            <img
              src="/src/assets/images/diesel_supply_hero_1784144456700.jpg"
              alt="Premium Capella fuel tanker in Abuja, Nigeria"
              referrerPolicy="no-referrer"
              className="w-full h-80 sm:h-96 object-cover rounded-none transition-transform duration-500 hover:scale-102"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 bg-slate-900 text-white p-4 rounded-none max-w-xs flex gap-3 items-center border border-slate-800">
              <div className="w-10 h-10 bg-slate-800 rounded-none flex items-center justify-center text-white shrink-0">
                <BadgeCheck className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-amber-500">NMDPRA Registered</h4>
                <p className="text-[10px] text-slate-300">Certified for safe, environment-compliant diesel fuel supply in Nigeria.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar cards as in the mockup design, but styled geometrically */}
      <div className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-6 transition-colors duration-200 text-center md:text-left flex flex-col items-center md:items-start gap-4 group hover:bg-white"
              >
                <div className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center text-xl group-hover:border-slate-900 transition-colors rounded-none">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">{badge.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{badge.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
