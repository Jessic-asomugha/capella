import React from "react";
import { ActiveTab } from "../types";
import { Zap, MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-brand-950 text-brand-400 border-t border-brand-900">
      {/* Upper value proposition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-brand-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5 text-white font-semibold">
              <div className="w-9 h-9 border border-brand-800 bg-brand-900 flex items-center justify-center rounded-md text-white">
                <ShieldCheck className="w-4 h-4 text-amber-450" />
              </div>
              <span className="font-display uppercase tracking-widest text-xs">Uncompromised Quality</span>
            </div>
            <p className="text-xs text-brand-400 max-w-sm leading-relaxed">
              We guarantee triple-filtered, 100% unadulterated AGO (Diesel) sourced from the cleanest global pipelines directly to your facility.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5 text-white font-semibold">
              <div className="w-9 h-9 border border-brand-800 bg-brand-900 flex items-center justify-center rounded-md text-white">
                <Clock className="w-4 h-4 text-amber-450" />
              </div>
              <span className="font-display uppercase tracking-widest text-xs">Guaranteed 24/7 Supply</span>
            </div>
            <p className="text-xs text-brand-400 max-w-sm leading-relaxed">
              Equipped with our advanced fleet of modern tanker trucks, we deliver volume accuracy with metered logistics round-the-clock.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5 text-white font-semibold">
              <div className="w-9 h-9 border border-brand-800 bg-brand-900 flex items-center justify-center rounded-md text-white">
                <Zap className="w-4 h-4 text-amber-450" />
              </div>
              <span className="font-display uppercase tracking-widest text-xs">24/7 Support</span>
            </div>
            <p className="text-xs text-brand-400 max-w-sm leading-relaxed">
              Round-the-clock delivery tracking and emergency response for critical facilities that can't afford downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 border border-white bg-brand-900 flex items-center justify-center rounded-md text-white font-display font-bold text-sm">
              C
            </div>
            <span className="font-display text-white text-base font-bold tracking-tight uppercase">
              Capella <span className="text-brand-400 font-medium">Global</span>
            </span>
          </div>
          <p className="text-xs text-brand-400 leading-relaxed">
            Capella Integrated Global Limited — Integrated Solutions. Trusted Results. A diversified Nigerian company providing integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors.
          </p>
          <div className="pt-2">
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider font-semibold rounded-md bg-brand-900 text-brand-300 uppercase border border-brand-800">
              Est. 2024
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">Company</h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: "Home", tab: "HOME" as ActiveTab },
              { label: "Services", tab: "SERVICES" as ActiveTab },
              { label: "About Us", tab: "ABOUT" as ActiveTab },
              { label: "Contact & Quote", tab: "CONTACT" as ActiveTab },
            ].map((item) => (
              <li key={item.tab}>
                <button onClick={() => setActiveTab(item.tab)} className="hover:text-amber-450 text-brand-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-brand-700 group-hover:text-amber-450 transition-colors" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">Headquarters</h4>
          <div className="space-y-3 text-xs">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-amber-450 shrink-0 mt-0.5" />
              <span className="text-brand-400">(Address pending from client)</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-amber-450 shrink-0" />
              <span className="text-brand-400">(Phone pending from client)</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-amber-450 shrink-0" />
              <span className="text-brand-400">(Email pending from client)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-white text-xs font-semibold uppercase tracking-widest">Logistics Area</h4>
          <p className="text-xs leading-relaxed text-brand-400">
            Our logistical networks cover Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi. International partnerships available upon request.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Abuja FCT", "Kaduna", "Nasarawa", "Niger State", "Kogi"].map((loc) => (
              <span key={loc} className="text-[10px] font-mono px-2 py-0.5 bg-brand-900 text-brand-300 rounded-md border border-brand-800">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/30 py-6 text-center text-xs text-brand-600 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Capella Integrated Global. All rights reserved.</p>
          <p className="text-[10px] text-brand-700">
            Certified diesel supplier regulated by NMDPRA.
          </p>
        </div>
      </div>
    </footer>
  );
}
