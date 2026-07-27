import React, { useState, useEffect } from "react";
import { ActiveTab } from "./types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutTab from "./components/AboutTab";
import ServicesTab from "./components/ServicesTab";
import ContactTab from "./components/ContactTab";
import {
  Zap, Factory, ShieldCheck, ArrowRight, CircleCheck as CheckCircle, Truck, Clock,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("HOME");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const industries = [
    { title: "Oil & Gas",       desc: "Logistics and supply for petroleum operations across Nigerian corridors.",         icon: Zap     },
    { title: "Hospitals",       desc: "Reliable power for critical medical facilities and life-support systems.",          icon: ShieldCheck },
    { title: "Manufacturing",   desc: "Scheduled bulk supply matching complex production duty cycles.",                    icon: Factory },
  ];

  const services = [
    {
      title: "Bulk Fuel Delivery",
      image: "/src/assets/images/bulk_diesel_truck_1784144470553.jpg",
      desc: "High-volume supply via our pedigree bulk tankers directly to factories, construction sites, and large installations.",
      points: ["10,000 to 45,000 Litres per consignment", "Direct-from-depot wholesale pricing"],
    },
    {
      title: "Oil & Gas Logistics",
      image: "/src/assets/images/oil_gas_logistics_1784144502095.jpg",
      desc: "End-to-end transportation, bridging, and distribution network management for petroleum products.",
      points: ["Vetted and fully tracked logistics fleet", "Terminal-to-terminal product bridging"],
    },
    {
      title: "Emergency Delivery",
      image: "/src/assets/images/emergency_delivery_1784144518527.jpg",
      desc: "Rapid-response fuel dispatch for critical backup infrastructure experiencing sudden fuel depletion.",
      points: ["Priority dispatch within Abuja FCT", "24/7 emergency hotline support"],
    },
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
            {/* 1. Hero + 2. Trust Bar */}
            <HeroSection setActiveTab={setActiveTab} />

            {/* 3. Who We Serve — 3 curated highlights */}
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {industries.map(({ title, desc, icon: Icon }, i) => (
                    <div key={i} className="mat-card p-7 group">
                      <div className="w-12 h-12 rounded-sm bg-mat-blue-50 flex items-center justify-center mb-5 group-hover:bg-mat-blue-500 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-mat-blue-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display font-bold text-mat-dark-800 text-base uppercase tracking-wide mb-2">{title}</h3>
                      <p className="font-sans text-sm text-mat-dark-400 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={() => setActiveTab("ABOUT")}
                    className="font-display font-bold text-xs uppercase tracking-widest text-mat-blue-600 border-b-2 border-mat-blue-500 pb-0.5 hover:text-mat-blue-700 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    View All Industries <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>

            {/* 4. Services — 3 highlighted services */}
            <section className="py-24 bg-mat-dark-50 border-y border-mat-dark-100">
              <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600 mx-auto items-center">
                    What We Do
                  </p>
                  <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 mt-5 tracking-tight leading-tight">
                    Our Core Services
                  </h2>
                  <p className="font-sans text-mat-dark-400 text-sm mt-4 leading-relaxed">
                    High-performance energy and logistics solutions tailored to modern industry standards.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((s, i) => (
                    <div key={i} className="mat-card overflow-hidden group flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover img-zoom" />
                      </div>
                      <div className="p-7 flex flex-col gap-4 flex-grow">
                        <h3 className="font-display font-black text-xl text-mat-dark-800 tracking-tight">{s.title}</h3>
                        <p className="font-sans text-sm text-mat-dark-400 leading-relaxed">{s.desc}</p>
                        <ul className="space-y-2 mt-auto">
                          {s.points.map((p, j) => (
                            <li key={j} className="flex gap-2.5 items-start">
                              <CheckCircle className="w-4 h-4 text-mat-blue-500 shrink-0 mt-0.5" />
                              <span className="font-sans text-xs text-mat-dark-600 leading-snug">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={() => setActiveTab("SERVICES")}
                    className="mat-btn-primary"
                  >
                    View All Services <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* 5. Why Choose Us */}
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

            {/* 6. Testimonial */}
            <section className="relative py-24 bg-mat-dark-900 overflow-hidden">
              <div className="absolute inset-0">
                <img src="/src/assets/images/energy_partners_1784144533028.jpg" alt="" className="w-full h-full object-cover opacity-15" />
              </div>
              <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
                <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-400 mx-auto items-center">
                  Testimonial
                </p>
                <blockquote className="mt-8 space-y-8">
                  <p className="font-display font-medium text-2xl sm:text-3xl text-white leading-relaxed tracking-tight">
                    "Capella has completely solved our fuel supply anxieties. In our healthcare facility, a power outage is not just inconvenient—it is life-threatening. Their unadulterated AGO has kept our backup systems running without a single filter clog for over two years."
                  </p>
                  <footer className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-mat-blue-500 rounded-sm text-white flex items-center justify-center font-display font-black text-base">
                      M
                    </div>
                    <div className="text-left">
                      <div className="font-display font-bold text-white text-sm uppercase tracking-wide">Dr. Aliyu Mohammed</div>
                      <div className="font-sans text-xs text-mat-dark-400 mt-0.5">
                        Director of Clinical Operations — <span className="text-mat-blue-400 font-semibold">Prime Care Hospital, Abuja</span>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* 7. Final CTA */}
            <section className="py-24 bg-mat-blue-600">
              <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center space-y-6">
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                  Powering Abuja's Commercial Resilience
                </h2>
                <p className="font-sans text-mat-blue-100 text-sm leading-relaxed max-w-xl mx-auto">
                  Join corporate networks of healthcare centers, five-star hospitality brands, and heavy industry plants that rely on Capella's fuel supply standard.
                </p>
                <button
                  onClick={() => setActiveTab("CONTACT")}
                  className="bg-white text-mat-blue-600 hover:bg-mat-dark-50 font-display font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all inline-flex items-center gap-2 group cursor-pointer mt-2"
                >
                  Request Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
