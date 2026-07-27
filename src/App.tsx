import React, { useState, useEffect } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutTab from "./components/AboutTab";
import ServicesTab from "./components/ServicesTab";
import ContactTab from "./components/ContactTab";
import { ShieldCheck, Landmark, Building, Hammer, Factory, Zap, Truck, ArrowRight } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("HOME");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const industryGroups = [
    [
      { title: "Oil & Gas", desc: "Comprehensive logistics and supply solutions for petroleum operations.", icon: Zap },
      { title: "Construction Companies", desc: "Direct on-site deliveries fueling heavy equipment and generator banks.", icon: Hammer },
      { title: "Manufacturing Industries", desc: "Scheduled bulk supplies matching complex production duty cycles.", icon: Factory },
      { title: "Hotels & Hospitality", desc: "Continuous supply protecting guest comfort and HVAC systems.", icon: Building },
    ],
    [
      { title: "Hospitals & Healthcare", desc: "Reliable power for critical medical facilities and life-support systems.", icon: ShieldCheck },
      { title: "Schools & Universities", desc: "Educational institutions requiring consistent backup power solutions.", icon: Landmark },
      { title: "Government Agencies", desc: "Public sector organizations with high-security and reliability requirements.", icon: Building },
      { title: "Telecommunications", desc: "Network infrastructure requiring uninterrupted power supply.", icon: Zap },
    ],
    [
      { title: "Logistics Companies", desc: "Transport and distribution hubs requiring efficient fuel management.", icon: Truck },
      { title: "Estates & Residences", desc: "Gated communities and luxury residential complexes.", icon: Building },
      { title: "Supermarkets & Malls", desc: "Retail centers with high energy consumption needs.", icon: Factory },
      { title: "Banks & Financial", desc: "Financial institutions requiring secure and reliable power.", icon: Landmark },
    ],
    [
      { title: "Restaurants", desc: "Food service establishments requiring consistent power for operations.", icon: Building },
      { title: "Agricultural Companies", desc: "Farming and agribusiness operations with energy-intensive needs.", icon: Factory },
      { title: "Mining Companies", desc: "Extractive industries requiring heavy equipment power solutions.", icon: Hammer },
      { title: "Churches & Religious", desc: "Places of worship requiring reliable backup power systems.", icon: Landmark },
    ],
  ];

  return (
    <div id="app-root" className="min-h-screen bg-white text-brand-800 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === "HOME" && (
          <div id="home-view" className="animate-fade-in">
            <HeroSection setActiveTab={setActiveTab} />

            {/* Who We Serve */}
            <section id="who-we-serve" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="w-8 h-[2px] bg-amber-450"></div>
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-amber-600">
                      Target Industries
                    </span>
                    <div className="w-8 h-[2px] bg-amber-450"></div>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight">
                    Who We Serve
                  </h2>
                  <p className="text-brand-600 text-sm leading-relaxed max-w-2xl mx-auto">
                    Capella Integrated Global serves diverse industries across Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi. International partnerships available upon request.
                  </p>
                </div>

                {industryGroups.map((group, gIdx) => (
                  <div key={gIdx} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {group.map((industry, idx) => {
                      const Icon = industry.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-brand-50/60 p-6 rounded-xl border border-brand-100 flex flex-col gap-4 hover:shadow-md hover:bg-white hover:border-brand-200 transition-all duration-300 group"
                        >
                          <div className="w-11 h-11 bg-amber-450/10 text-amber-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-450 group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-semibold text-brand-900 text-base mb-1.5">{industry.title}</h3>
                            <p className="text-xs text-brand-600 leading-relaxed">{industry.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works - with background image */}
            <section id="how-it-works" className="relative py-20 overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/src/assets/images/oil_gas_logistics_1784144502095.jpg"
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-950/92"></div>
              </div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="w-8 h-[2px] bg-amber-450"></div>
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-amber-450">
                      Streamlined Logistics
                    </span>
                    <div className="w-8 h-[2px] bg-amber-450"></div>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Our Delivery Workflow
                  </h2>
                  <p className="text-brand-300 text-sm leading-relaxed max-w-2xl mx-auto">
                    How Capella guarantees uncompromised fuel delivery from terminal loading directly to your storage nozzles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  <div className="hidden md:block absolute top-11 left-[12%] right-[12%] h-0.5 bg-brand-700/60 z-0"></div>

                  {[
                    { num: "01", title: "Submit Request", desc: "Provide generator specifications via our Quote Form." },
                    { num: "02", title: "Technical Audit", desc: "Our coordinators confirm volume requirements, access constraints, and timing." },
                    { num: "03", title: "Metered Delivery", desc: "Our tracked tanker discharges fuel with double-filtration and digital ticketing." },
                    { num: "04", title: "Zero Downtime", desc: "Your primary backup generator remains completely protected and energized." },
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-brand-800 relative z-10 text-center space-y-3 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 bg-amber-450 rounded-full flex items-center justify-center text-brand-950 font-display font-bold mx-auto text-sm shadow-lg">
                        {step.num}
                      </div>
                      <h3 className="font-display font-semibold text-white text-sm sm:text-base">{step.title}</h3>
                      <p className="text-xs text-brand-300 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Us */}
            <section id="why-us" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-amber-450"></div>
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-amber-600">
                      Our Uncompromised Edge
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight leading-tight">
                    Why Corporate Leaders Choose Capella
                  </h2>
                  <p className="text-brand-600 text-sm leading-relaxed">
                    We understand that fuel logistics in Nigeria demands absolute transparency and uncompromising chemical purity. Sub-standard AGO causes millions in generator wear, injector clogs, and lost operational hours.
                  </p>

                  <div className="space-y-5">
                    {[
                      { title: "Triple Filtration Pipeline", desc: "We filter diesel during terminal collection, tanker loading, and final customer discharge to eradicate water and rust sediments." },
                      { title: "Meter Verification Security", desc: "Our delivery trucks feature sealed positive-displacement meters alongside physical manual dip measurements to confirm exact volume receipts." },
                      { title: "Federal Regulatory Compliance", desc: "Fully registered and licensed with the Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA) for maximum peace of mind." },
                    ].map((why, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="w-7 h-7 rounded-md bg-amber-450/15 text-amber-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 group-hover:bg-amber-450 group-hover:text-white transition-colors">✓</div>
                        <div className="space-y-1">
                          <h4 className="font-display font-semibold text-brand-900 text-sm sm:text-base">{why.title}</h4>
                          <p className="text-xs text-brand-600 leading-relaxed">{why.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-brand-900 rounded-2xl transform rotate-2 scale-[1.02] opacity-5"></div>
                  <div className="relative bg-white p-3 rounded-2xl shadow-lg border border-brand-100 overflow-hidden">
                    <img
                      src="/src/assets/images/bulk_diesel_truck_1784144470553.jpg"
                      alt="Capella unadulterated diesel supply truck in Nigeria"
                      referrerPolicy="no-referrer"
                      className="w-full h-80 lg:h-[420px] object-cover rounded-xl img-zoom"
                    />
                  </div>
                  {/* Floating stat card */}
                  <div className="absolute -bottom-5 -left-5 bg-brand-900 text-white p-4 rounded-xl shadow-xl border border-brand-800 hidden sm:block">
                    <div className="font-display font-bold text-2xl text-amber-450">35%</div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-brand-300 mt-0.5">Critical Buffer</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Service - with background image */}
            <section id="featured-service" className="relative py-20 overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/src/assets/images/emergency_delivery_1784144518527.jpg"
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/97 via-brand-950/92 to-brand-900/85"></div>
              </div>
              <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/5 backdrop-blur-md text-white rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-brand-800/60 shadow-2xl">
                  <div className="md:col-span-8 space-y-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-450">
                      Featured Program
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                      Capella Scheduled Bulk Supply
                    </h3>
                    <p className="text-sm text-brand-300 leading-relaxed max-w-xl">
                      Enroll in our contract procurement replenishment plan. We automatically track, forecast, and dispatch bulk diesel consignments directly to your reservoirs before your levels hit the 35% critical margin.
                    </p>
                    <ul className="grid grid-cols-2 gap-2.5 pt-2 text-xs text-brand-200">
                      {["Priority supply guarantees", "Preferred wholesale tariff indices", "Quarterly generator thermal audits", "Customized monthly invoicing"].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-amber-450">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-4 flex justify-center md:justify-end">
                    <button
                      onClick={() => setActiveTab("CONTACT")}
                      className="px-7 py-3.5 bg-amber-450 hover:bg-amber-500 text-brand-950 font-sans font-semibold text-xs uppercase tracking-widest rounded-md shadow-lg transition-all flex items-center gap-2 group"
                    >
                      <span>Enroll Program</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section id="final-cta" className="py-16 bg-brand-50 text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight leading-tight">
                  Powering Abuja's Commercial and Industrial Resilience
                </h2>
                <p className="text-brand-600 text-sm max-w-xl mx-auto leading-relaxed">
                  Join corporate networks of healthcare centers, five-star hospitality brands, and heavy industry plants that rely on Capella's fuel supply standard.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setActiveTab("CONTACT")}
                    className="px-7 py-3.5 bg-brand-900 hover:bg-brand-800 text-white font-sans font-semibold text-xs uppercase tracking-widest rounded-md shadow-md transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "SERVICES" && <ServicesTab setActiveTab={setActiveTab} />}
        {activeTab === "ABOUT" && <AboutTab setActiveTab={setActiveTab} />}
        {activeTab === "CONTACT" && <ContactTab setActiveTab={setActiveTab} />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
