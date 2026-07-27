import React from "react";
import { ActiveTab } from "../types";
import { MapPin, Phone, Mail, ShieldCheck, Zap, Clock, ChevronRight } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mat-dark-950 text-mat-dark-400">
      {/* Upper value props */}
      <div className="border-b border-mat-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Uncompromised Quality", desc: "Triple-filtered, 100% unadulterated AGO sourced from the cleanest global pipelines." },
            { icon: Clock,       title: "Guaranteed 24/7 Supply", desc: "Modern tanker fleet delivering volume accuracy with metered logistics round-the-clock." },
            { icon: Zap,         title: "24/7 Support",          desc: "Round-the-clock delivery tracking and emergency response for critical facilities." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-sm bg-mat-dark-800 border border-mat-dark-700 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-mat-blue-500" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-xs uppercase tracking-wide mb-1.5">{title}</h4>
                <p className="font-sans text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-mat-blue-500 flex items-center justify-center rounded-sm">
              <span className="font-display font-black text-white text-sm">C</span>
            </div>
            <span className="font-display font-bold text-white text-base tracking-wide uppercase">
              Capella<span className="text-mat-blue-500 ml-1 font-normal text-sm normal-case">Global</span>
            </span>
          </div>
          <p className="font-sans text-xs leading-relaxed">
            Capella Integrated Global Limited — Integrated Solutions. Trusted Results. A diversified Nigerian company providing integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting.
          </p>
          <span className="inline-block px-2.5 py-1 text-[10px] font-mono tracking-wider font-semibold rounded-sm bg-mat-dark-800 text-mat-dark-300 uppercase border border-mat-dark-700">
            Est. 2024
          </span>
        </div>

        {/* Company links */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">Company</h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: "Home",            tab: "HOME"     as ActiveTab },
              { label: "Services",        tab: "SERVICES" as ActiveTab },
              { label: "About Us",        tab: "ABOUT"    as ActiveTab },
              { label: "Contact & Quote", tab: "CONTACT"  as ActiveTab },
            ].map((item) => (
              <li key={item.tab}>
                <button onClick={() => setActiveTab(item.tab)} className="hover:text-mat-blue-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3 h-3 text-mat-dark-600 group-hover:text-mat-blue-400 transition-colors" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* HQ */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">Headquarters</h4>
          <div className="space-y-3 text-xs">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-mat-blue-500 shrink-0 mt-0.5" />
              <span>(Address pending from client)</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-mat-blue-500 shrink-0" />
              <span>(Phone pending from client)</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-mat-blue-500 shrink-0" />
              <span>(Email pending from client)</span>
            </div>
          </div>
        </div>

        {/* Coverage */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">Logistics Area</h4>
          <p className="font-sans text-xs leading-relaxed">
            Networks cover Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi. International partnerships available upon request.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Abuja FCT", "Kaduna", "Nasarawa", "Niger State", "Kogi"].map((loc) => (
              <span key={loc} className="text-[10px] font-mono px-2 py-0.5 bg-mat-dark-800 text-mat-dark-300 rounded-sm border border-mat-dark-700">{loc}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-black/40 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-mat-dark-500">
          <p>© {year} Capella Integrated Global. All rights reserved.</p>
          <p className="text-[10px] text-mat-dark-600">Certified diesel supplier regulated by NMDPRA.</p>
        </div>
      </div>
    </footer>
  );
}
