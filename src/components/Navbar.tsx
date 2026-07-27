import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { ActiveTab } from "../types";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navItems: { label: string; tab: ActiveTab }[] = [
    { label: "Home",     tab: "HOME"     },
    { label: "Services", tab: "SERVICES" },
    { label: "About",    tab: "ABOUT"    },
    { label: "Contact",  tab: "CONTACT"  },
  ];

  return (
    <header className="sticky top-0 z-50 bg-mat-dark-900 shadow-lg">
      {/* Utility strip */}
      <div className="bg-mat-dark-950 border-b border-mat-dark-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-end gap-5">
          <a
            href="tel:+234800CAPELLA"
            className="flex items-center gap-1.5 text-mat-dark-300 hover:text-white transition-colors text-[11px] font-sans"
          >
            <Phone className="w-3 h-3 text-mat-blue-500" />
            <span>+234 (0) 800-CAPELLA</span>
          </a>
          <span className="text-mat-dark-700 text-xs">|</span>
          <span className="text-mat-dark-400 text-[11px] font-sans">
            dispatch@capellaglobal.com
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setActiveTab("HOME")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-mat-blue-500 flex items-center justify-center rounded-sm group-hover:bg-mat-blue-600 transition-colors">
            <span className="font-display font-black text-white text-xs tracking-tight">C</span>
          </div>
          <span className="font-display font-bold text-white tracking-wide text-base uppercase">
            Capella<span className="text-mat-blue-500 ml-1 font-normal text-sm normal-case">Global</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`font-display font-600 text-[11px] tracking-[0.18em] uppercase transition-all relative py-1 cursor-pointer ${
                activeTab === item.tab
                  ? "text-white"
                  : "text-mat-dark-300 hover:text-white"
              }`}
            >
              {item.label}
              {activeTab === item.tab && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-mat-blue-500 rounded-full" />
              )}
            </button>
          ))}
          <button
            onClick={() => setActiveTab("CONTACT")}
            className="mat-btn-primary ml-2 text-[10px]"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-mat-dark-200 hover:text-white transition-colors p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-mat-dark-800 border-t border-mat-dark-700 py-4 px-6 space-y-1 mat-fade-up">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => { setActiveTab(item.tab); setOpen(false); }}
              className={`w-full text-left py-3 px-4 font-display font-semibold text-[11px] uppercase tracking-widest rounded-sm transition-colors ${
                activeTab === item.tab
                  ? "bg-mat-blue-500 text-white"
                  : "text-mat-dark-200 hover:bg-mat-dark-700 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { setActiveTab("CONTACT"); setOpen(false); }}
            className="mat-btn-primary w-full justify-center mt-3"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
