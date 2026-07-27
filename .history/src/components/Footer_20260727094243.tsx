import React from "react";
import { ActiveTab } from "../types";
import { Zap, MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* Upper Footer Segment - Value Proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="w-8 h-8 border border-slate-750 flex items-center justify-center rounded-none text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-display uppercase tracking-widest text-xs">Uncompromised Quality</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We guarantee triple-filtered, 100% unadulterated AGO (Diesel) sourced from the cleanest global pipelines directly to your facility.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="w-8 h-8 border border-slate-750 flex items-center justify-center rounded-none text-white">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-display uppercase tracking-widest text-xs">Guaranteed 24/7 Supply</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Equipped with our advanced fleet of modern tanker trucks, we deliver volume accuracy with metered logistics round-the-clock.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="w-8 h-8 border border-slate-750 flex items-center justify-center rounded-none text-white">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-display uppercase tracking-widest text-xs">24/7 Support</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Round-the-clock delivery tracking and emergency response for critical facilities that can't afford downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-white bg-slate-900 flex items-center justify-center rounded-none text-white font-display font-bold text-sm">
              C
            </div>
            <span className="font-display text-white text-base font-bold tracking-widest uppercase">
              CAPELLA
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Capella Integrated Global Limited - Integrated Solutions. Trusted Results. A diversified Nigerian company providing integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors.
          </p>
          <div className="pt-2">
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider font-semibold rounded-none bg-slate-850 text-slate-300 uppercase border border-slate-800">
              Est. 2024
            </span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="space-y-4">
          <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => setActiveTab("HOME")} className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5 group">
                <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-white transition-colors" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("SERVICES")} className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5 group">
                <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-white transition-colors" />
                <span>Services</span>
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("ABOUT")} className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5 group">
                <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-white transition-colors" />
                <span>About Us</span>
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("CONTACT")} className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5 group">
                <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-white transition-colors" />
                <span>Contact & Quote</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate Headquarters */}
        <div className="space-y-4">
          <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">Headquarters</h4>
          <div className="space-y-3 text-xs">
            <div className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>
                (Address pending from client)
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span>(Phone pending from client)</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span>(Email pending from client)</span>
            </div>
          </div>
        </div>

        {/* Operations coverage */}
        <div className="space-y-4">
          <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">Logistics Area</h4>
          <p className="text-xs leading-relaxed text-slate-500">
            Our logistical networks cover Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi. International partnerships available upon request.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Abuja FCT", "Kaduna", "Nasarawa", "Niger State", "Kogi"].map((loc) => (
              <span key={loc} className="text-[10px] font-mono px-2 py-0.5 bg-slate-850 text-slate-400 rounded-none border border-slate-800">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright & disclaimer */}
      <div className="bg-slate-950 py-6 text-center text-xs text-slate-600 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Capella Integrated Global. All rights reserved.</p>
          <p className="text-[10px] text-slate-750">
            Certified diesel supplier regulated by NMDPRA. Designed with geometric balance.
          </p>
        </div>
      </div>
    </footer>
  );
}
