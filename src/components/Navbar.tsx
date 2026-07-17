import React, { useState } from "react";
import { Phone, Mail, Menu, X, Cpu, Landmark, ShieldCheck, Zap } from "lucide-react";
import { ActiveTab } from "../types";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", tab: "HOME" as ActiveTab },
    { label: "Services", tab: "SERVICES" as ActiveTab },
    { label: "About Us", tab: "ABOUT" as ActiveTab },
    { label: "Contact Us", tab: "CONTACT" as ActiveTab },
  ];

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      {/* Top micro-bar for trust & direct contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-amber-500 uppercase">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
              Premium Quality AGO
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="text-[11px]">Abuja's Trusted Energy Partner</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <a href="tel:+234800CAPELLA" className="hover:text-amber-500 transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+234 (0) 800-CAPELLA</span>
            </a>
            <span className="text-slate-500">|</span>
            <a href="mailto:dispatch@capellaglobal.com" className="hover:text-amber-500 transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>dispatch@capellaglobal.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          id="brand-logo"
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={() => setActiveTab("HOME")}
        >
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-none">
            <div className="w-4 h-4 border-2 border-white"></div>
          </div>
          <div className="font-display text-lg font-bold tracking-tighter uppercase text-slate-900">
            Capella <span className="text-slate-500 font-medium">Global</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.tab}
              id={`nav-item-${item.tab.toLowerCase()}`}
              onClick={() => setActiveTab(item.tab)}
              className={`font-sans font-medium text-xs uppercase tracking-widest transition-all relative py-2 ${
                activeTab === item.tab 
                  ? "text-slate-900 font-bold" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
              {activeTab === item.tab && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-900" />
              )}
            </button>
          ))}

          {/* AI Energy Hub Trigger Button */}
          <button
            id="nav-ai-hub-btn"
            onClick={() => setActiveTab("ENERGY_HUB")}
            className={`flex items-center gap-1.5 px-6 py-2.5 rounded-none font-sans font-bold text-xs tracking-widest uppercase transition-all border ${
              activeTab === "ENERGY_HUB"
                ? "bg-slate-900 border-slate-900 text-white"
                : "bg-white border-slate-200 text-slate-700 hover:border-slate-900 hover:text-slate-900"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Energy Hub</span>
          </button>
        </nav>

        {/* Mobile menu hamburger icon */}
        <div className="md:hidden flex items-center gap-3">
          <button
            id="mobile-ai-hub-badge"
            onClick={() => setActiveTab("ENERGY_HUB")}
            className="flex items-center justify-center p-2 rounded-none border border-slate-200 text-slate-700"
            title="AI Energy Hub"
          >
            <Cpu className="w-4 h-4" />
          </button>
          
          <button
            id="hamburger-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden border-t border-slate-200 bg-white shadow-md absolute top-full left-0 w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.tab}
                id={`mobile-nav-item-${item.tab.toLowerCase()}`}
                onClick={() => {
                  setActiveTab(item.tab);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-none font-sans font-medium text-xs uppercase tracking-widest transition-all ${
                  activeTab === item.tab 
                    ? "bg-slate-50 text-slate-900 font-bold border-l-4 border-slate-900" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              id="mobile-nav-ai-hub-btn"
              onClick={() => {
                setActiveTab("ENERGY_HUB");
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-slate-900 text-white font-sans font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>AI Energy Hub</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
