import React, { useState } from "react";
import { Phone, Mail, Menu, X, ChevronRight } from "lucide-react";
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
    { label: "Contact", tab: "CONTACT" as ActiveTab },
  ];

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-brand-950 text-brand-200 text-xs py-2 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-amber-450 uppercase">
              <span className="w-1.5 h-1.5 bg-amber-450 rounded-full animate-pulse"></span>
              Premium Quality AGO
            </span>
            <span className="hidden sm:inline text-brand-700">|</span>
            <span className="text-[11px] text-brand-300">Abuja's Trusted Energy Partner</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <a href="tel:+234800CAPELLA" className="hover:text-amber-450 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-450" />
              <span>+234 (0) 800-CAPELLA</span>
            </a>
            <span className="text-brand-800">|</span>
            <a href="mailto:dispatch@capellaglobal.com" className="hover:text-amber-450 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-450" />
              <span>dispatch@capellaglobal.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <div
          id="brand-logo"
          className="flex items-center gap-3 cursor-pointer select-none group"
          onClick={() => setActiveTab("HOME")}
        >
          <div className="w-9 h-9 bg-brand-900 flex items-center justify-center rounded-md group-hover:bg-brand-800 transition-colors">
            <div className="w-4 h-4 border-2 border-white"></div>
          </div>
          <div className="font-display text-lg font-bold tracking-tight uppercase text-brand-900">
            Capella <span className="text-brand-400 font-medium">Global</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <button
              key={item.tab}
              id={`nav-item-${item.tab.toLowerCase()}`}
              onClick={() => setActiveTab(item.tab)}
              className={`font-sans font-medium text-xs uppercase tracking-[0.15em] transition-all relative py-2 ${
                activeTab === item.tab
                  ? "text-brand-900 font-semibold"
                  : "text-brand-500 hover:text-brand-900"
              }`}
            >
              {item.label}
              {activeTab === item.tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-amber-450 rounded-full" />
              )}
            </button>
          ))}
          <button
            onClick={() => setActiveTab("CONTACT")}
            className="ml-2 px-5 py-2.5 bg-brand-900 hover:bg-brand-800 text-white font-sans font-semibold text-[11px] uppercase tracking-widest rounded-md transition-all flex items-center gap-2 group"
          >
            <span>Get a Quote</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            id="hamburger-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-700 hover:text-brand-900 transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden border-t border-brand-100 bg-white shadow-md absolute top-full left-0 w-full animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.tab}
                id={`mobile-nav-item-${item.tab.toLowerCase()}`}
                onClick={() => {
                  setActiveTab(item.tab);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-md font-sans font-medium text-xs uppercase tracking-widest transition-all ${
                  activeTab === item.tab
                    ? "bg-brand-50 text-brand-900 font-semibold border-l-[3px] border-amber-450"
                    : "text-brand-600 hover:bg-brand-50 hover:text-brand-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setActiveTab("CONTACT");
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-2 px-4 py-3 bg-brand-900 text-white rounded-md font-sans font-semibold text-xs uppercase tracking-widest"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
