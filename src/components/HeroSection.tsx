import React from "react";
import { ActiveTab } from "../types";
import { ArrowRight, ShieldCheck, Gauge, Clock } from "lucide-react";

interface HeroSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  const pillars = [
    { icon: ShieldCheck, label: "Unadulterated AGO", sub: "Triple-filtered, purity tested" },
    { icon: Gauge,       label: "Metered Delivery",  sub: "Sealed digital meter tickets" },
    { icon: Clock,       label: "24 / 7 Dispatch",   sub: "Emergency standby fleet"       },
  ];

  return (
    <>
      {/* ── Full-bleed hero ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/diesel_supply_hero_1784144456700.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay — matches Matelick dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-mat-dark-950/90 via-mat-dark-900/75 to-mat-dark-900/40" />
        </div>

        {/* Copy */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-40">
          <div className="max-w-2xl space-y-7">
            <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-white mat-fade-up">
              Premium Diesel Logistics &amp; Supply
            </p>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.04] tracking-tight mat-fade-up-d1">
              Reliable Energy<br />for Every Industry
            </h1>

            <p className="font-sans text-mat-dark-200 text-base leading-relaxed max-w-lg mat-fade-up-d2">
              Capella Integrated Global delivers premium-grade, unadulterated AGO directly to your facility — ensuring your operations never stop.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 mat-fade-up-d3">
              <button onClick={() => setActiveTab("CONTACT")} className="mat-btn-primary">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setActiveTab("SERVICES")} className="mat-btn-outline">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pillar strip ── */}
      <section className="bg-white border-b border-mat-dark-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-mat-dark-100">
            {pillars.map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex items-center gap-5 py-7 px-6 group hover:bg-mat-blue-50 transition-colors">
                <div className="w-12 h-12 rounded-sm bg-mat-blue-500 flex items-center justify-center shrink-0 group-hover:bg-mat-blue-600 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-mat-dark-800 text-sm uppercase tracking-wide">{label}</div>
                  <div className="font-sans text-mat-dark-400 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
