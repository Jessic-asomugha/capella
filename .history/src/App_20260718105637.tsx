import React, { useState, useEffect } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutTab from "./components/AboutTab";
import ServicesTab from "./components/ServicesTab";
import ContactTab from "./components/ContactTab";
import { ShieldCheck, Calendar, Clock, Landmark, Sparkles, Building, Hammer, Factory, Zap, HelpCircle } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("HOME");

  // Scroll to top on tab changes for intuitive multi-view experience
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div id="app-root" className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* Universal Sticky Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Screen Layout Container */}
      <main className="flex-grow">
        {activeTab === "HOME" && (
          <div id="home-view" className="animate-fade-in">
            {/* 1. Hero & Trust Bar */}
            <HeroSection setActiveTab={setActiveTab} />

            {/* 2. Who We Serve */}
            <section id="who-we-serve" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-amber-500">
                    Target Industries
                  </span>
                  <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                    Who We Serve Across Abuja
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Capella Integrated Global supports critical installations where continuous backup power is non-negotiable.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: "Healthcare & Hospitals", desc: "Guaranteed unadulterated diesel supply supporting life-support machinery, cooling plants, and ICU back-ups.", icon: ShieldCheck },
                    { title: "Hotels & Hospitality", desc: "Continuous volume drops protecting guest comfort, lighting installations, and HVAC systems round-the-clock.", icon: Building },
                    { title: "Heavy Construction", desc: "Direct on-site tanker deliveries fueling heavy earthmovers, concrete batchers, and generator banks.", icon: Hammer },
                    { title: "Factories & Industrial", desc: "Depot-direct scheduled bulk supplies matching complex manufacturing duty cycles and storage facilities.", icon: Factory }
                  ].map((industry, idx) => {
                    const Icon = industry.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 p-6 rounded-xl border border-gray-100 flex flex-col gap-4 shadow-3xs hover:shadow-2xs hover:bg-slate-100/50 transition-all"
                      >
                        <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-slate-900 text-base mb-1">{industry.title}</h3>
                          <p className="text-xs text-slate-600 leading-relaxed">{industry.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 3. How It Works */}
            <section id="how-it-works" className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-amber-500">
                    Streamlined Logistics
                  </span>
                  <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                    Our Delivery Workflow
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    How Capella guarantees uncompromised fuel delivery from terminal loading directly to your storage nozzles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Step connectors for desktop */}
                  <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>

                  {[
                    { num: "01", title: "Submit Request", desc: "Provide generator specifications via our Quote Form." },
                    { num: "02", title: "Technical Audit", desc: "Our coordinators confirm volume requirements, access constraints, and timing." },
                    { num: "03", title: "Metered Delivery", desc: "Our tracked tanker discharges fuel with double-filtration and digital ticketing." },
                    { num: "04", title: "Zero Downtime", desc: "Your primary backup generator remains completely protected and energized." }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-150 relative z-10 text-center space-y-3 shadow-3xs">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 font-display font-black mx-auto text-sm">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">{step.title}</h3>
                      <p className="text-xs text-slate-500 leading-normal">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Why Us */}
            <section id="why-us" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div className="space-y-6">
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-amber-500">
                    Our Uncompromised Edge
                  </span>
                  <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                    Why Corporate Leaders Choose Capella
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We understand that fuel logistics in Nigeria demands absolute transparency and uncompromising chemical purity. Sub-standard AGO causes millions in generator wear, injector clogs, and lost operational hours. 
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: "Triple Filtration Pipeline", desc: "We filter diesel during terminal collection, tanker loading, and final customer discharge to eradicate water and rust sediments." },
                      { title: "Meter Verification Security", desc: "Our delivery trucks feature sealed positive-displacement meters alongside physical manual dip measurements to confirm exact volume receipts." },
                      { title: "Federal Regulatory Compliance", desc: "Fully registered and licensed with the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) for maximum peace of mind." }
                    ].map((why, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 text-xs font-bold mt-1">✓</div>
                        <div className="space-y-0.5">
                          <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">{why.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{why.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Imagery side */}
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-900 rounded-2xl transform rotate-1 scale-102 opacity-5"></div>
                  <div className="relative bg-white p-2.5 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                    <img
                      src="/src/assets/images/bulk_diesel_truck_1784144470553.jpg"
                      alt="Capella unadulterated diesel supply truck in Nigeria"
                      referrerPolicy="no-referrer"
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Featured Service Card */}
            <section id="featured-service" className="py-20 bg-slate-50">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-lg border border-slate-800">
                  <div className="md:col-span-8 space-y-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-500">
                      Featured Program
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                      Capella Scheduled Bulk Supply
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                      Enroll in our contract procurement replenishment plan. We automatically track, forecast, and dispatch bulk diesel consignments directly to your reservoirs before your levels hit the 35% critical margin.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="text-amber-500">✓</span> Priority supply guarantees
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-500">✓</span> Preferred wholesale tariff indices
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-500">✓</span> Quarterly generator thermal audits
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-amber-500">✓</span> Customized monthly invoicing
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-4 flex justify-center md:justify-end">
                    <button
                      onClick={() => setActiveTab("CONTACT")}
                      className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-transform"
                    >
                      Enroll Program
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Final CTA */}
            <section id="final-cta" className="py-16 bg-white text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Powering Abuja’s Commercial and Industrial Resilience
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                  Join corporate networks of healthcare centers, five-star hospitality brands, and heavy industry plants that rely on Capella's fuel supply standard.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setActiveTab("CONTACT")}
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-md"
                  >
                    Request custom Quote
                  </button>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* Modular Tabs rendering based on State */}
        {activeTab === "SERVICES" && <ServicesTab setActiveTab={setActiveTab} />}
        {activeTab === "ABOUT" && <AboutTab setActiveTab={setActiveTab} />}
        {activeTab === "CONTACT" && <ContactTab setActiveTab={setActiveTab} />}
      </main>

      {/* Universal Sticky Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
