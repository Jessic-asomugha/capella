import React, { useState, useEffect } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutTab from "./components/AboutTab";
import ServicesTab from "./components/ServicesTab";
import ContactTab from "./components/ContactTab";
import { Zap, Hammer, Factory, Building, ShieldCheck, Landmark, Truck, ArrowRight, CircleCheck as CheckCircle } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("HOME");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const industries = [
    { title: "Oil & Gas",          desc: "Logistics and supply for petroleum operations.",                icon: Zap     },
    { title: "Construction",       desc: "On-site deliveries for heavy equipment and generators.",        icon: Hammer  },
    { title: "Manufacturing",      desc: "Scheduled bulk supply matching production cycles.",             icon: Factory },
    { title: "Hotels & Hospitality", desc: "Continuous supply protecting guest comfort and HVAC.",         icon: Building },
    { title: "Hospitals",          desc: "Reliable power for critical medical facilities.",               icon: ShieldCheck },
    { title: "Schools",            desc: "Consistent backup power for educational institutions.",         icon: Landmark },
    { title: "Telecommunications", desc: "Network infrastructure requiring uninterrupted power.",         icon: Zap     },
    { title: "Logistics",          desc: "Transport hubs requiring efficient fuel management.",            icon: Truck   },
    { title: "Estates",            desc: "Gated communities and luxury residential complexes.",           icon: Building },
    { title: "Supermarkets",       desc: "Retail centers with high energy consumption.",                  icon: Factory },
    { title: "Banks",              desc: "Financial institutions requiring secure power.",                icon: Landmark },
    { title: "Mining",             desc: "Extractive industries with heavy equipment power needs.",       icon: Hammer  },
  ];

  const workflow = [
    { num: "01", title: "Submit Request",   desc: "Provide generator specs via our quote form." },
    { num: "02", title: "Technical Audit",  desc: "We confirm volume, access, and timing." },
    { num: "03", title: "Metered Delivery", desc: "Tracked tanker discharges fuel with digital ticketing." },
    { num: "04", title: "Zero Downtime",    desc: "Your generator stays protected and energized." },
  ];

  const whyUs = [
    { title: "Triple Filtration Pipeline", desc: "Fuel is filtered at terminal collection, tanker loading, and final discharge to eradicate water and rust sediments." },
    { title: "Meter Verification Security", desc: "Delivery trucks feature sealed positive-displacement meters alongside manual dip measurements to confirm exact volume." },
    { title: "Federal Regulatory Compliance", desc: "Fully registered and licensed with NMDPRA for maximum peace of mind." },
  ];

  return (
    <div className="min-h-screen bg-white text-mat-dark-800 flex flex-col font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {activeTab === "HOME" && (
          <div className="animate-[mat-fade-up_0.6s_ease]">
            <HeroSection setActiveTab={setActiveTab} />

            {/* ── Who We Serve ── */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600 mx-auto items-center">
                    Target Industries
                  </p>
                  <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 mt-5 tracking-tight leading-tight">
                    Who We Serve
                  </h2>
                  <p className="font-sans text-mat-dark-400 text-sm mt-4 leading-relaxed">
                    Across Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {industries.map(({ title, desc, icon: Icon }, i) => (
                    <div key={i} className="mat-card p-7 group">
                      <div className="w-12 h-12 rounded-sm bg-mat-blue-50 flex items-center justify-center mb-5 group-hover:bg-mat-blue-500 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-mat-blue-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display font-bold text-mat-dark-800 text-sm uppercase tracking-wide mb-2">{title}</h3>
                      <p className="font-sans text-xs text-mat-dark-400 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Workflow — dark band ── */}
            <section className="relative py-24 overflow-hidden bg-mat-dark-900">
              <div className="absolute inset-0">
                <img src="/src/assets/images/oil_gas_logistics_1784144502095.jpg" alt="" className="w-full h-full object-cover opacity-20" />
              </div>
              <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-400 mx-auto items-center">
                    Streamlined Logistics
                  </p>
                  <h2 className="font-display font-black text-4xl sm:text-5xl text-white mt-5 tracking-tight leading-tight">
                    Our Delivery Workflow
                  </h2>
                  <p className="font-sans text-mat-dark-300 text-sm mt-4 leading-relaxed">
                    From terminal loading directly to your storage nozzles.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  {workflow.map((step, i) => (
                    <div key={i} className="bg-mat-dark-800 border border-mat-dark-700 p-7 rounded-sm group hover:border-mat-blue-500 transition-colors">
                      <div className="font-display font-black text-3xl text-mat-blue-500 mb-4">{step.num}</div>
                      <h3 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-2">{step.title}</h3>
                      <p className="font-sans text-xs text-mat-dark-300 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Why Us ── */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600">
                    Our Uncompromised Edge
                  </p>
                  <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 tracking-tight leading-tight">
                    Why Corporate Leaders Choose Capella
                  </h2>
                  <p className="font-sans text-mat-dark-400 text-sm leading-relaxed">
                    Fuel logistics in Nigeria demands absolute transparency and chemical purity. Sub-standard AGO causes millions in generator wear and lost operational hours.
                  </p>

                  <div className="space-y-5 pt-2">
                    {whyUs.map((w, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <CheckCircle className="w-6 h-6 text-mat-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-display font-bold text-mat-dark-800 text-sm uppercase tracking-wide mb-1">{w.title}</h4>
                          <p className="font-sans text-xs text-mat-dark-400 leading-relaxed">{w.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="mat-card p-3 rounded-sm overflow-hidden">
                    <img
                      src="/src/assets/images/bulk_diesel_truck_1784144470553.jpg"
                      alt="Capella bulk diesel truck"
                      className="w-full h-[440px] object-cover img-zoom"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ── Featured Service — blue band ── */}
            <section className="relative py-20 bg-mat-blue-600 overflow-hidden">
              <div className="absolute inset-0 bg-mat-blue-700/30"></div>
              <div className="relative max-w-5xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="space-y-3 text-white max-w-xl">
                  <p className="font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-100">
                    Featured Program
                  </p>
                  <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight leading-tight">
                    Scheduled Bulk Supply
                  </h3>
                  <p className="font-sans text-mat-blue-100 text-sm leading-relaxed">
                    We automatically track, forecast, and dispatch bulk diesel consignments before your levels hit the 35% critical margin.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("CONTACT")}
                  className="bg-white text-mat-blue-600 hover:bg-mat-dark-50 font-display font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all flex items-center gap-2 group shrink-0 cursor-pointer"
                >
                  Enroll Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="py-24 bg-mat-dark-50">
              <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center space-y-6">
                <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 tracking-tight leading-tight">
                  Powering Abuja's Commercial Resilience
                </h2>
                <p className="font-sans text-mat-dark-400 text-sm leading-relaxed max-w-xl mx-auto">
                  Join corporate networks of healthcare centers, five-star hospitality brands, and heavy industry plants that rely on Capella's fuel supply standard.
                </p>
                <button onClick={() => setActiveTab("CONTACT")} className="mat-btn-primary mt-2">
                  Request Custom Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        )}

        {activeTab === "SERVICES" && <ServicesTab setActiveTab={setActiveTab} />}
        {activeTab === "ABOUT"    && <AboutTab    setActiveTab={setActiveTab} />}
        {activeTab === "CONTACT"  && <ContactTab  setActiveTab={setActiveTab} />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
