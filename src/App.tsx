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
    { title: "Oil & Gas",              desc: "Logistics and supply for petroleum operations across Nigerian corridors.",         icon: Zap     },
    { title: "Construction Companies", desc: "Direct on-site deliveries fueling heavy equipment and generator banks.",         icon: Truck   },
    { title: "Manufacturing Industries", desc: "Scheduled bulk supply matching complex production duty cycles.",              icon: Factory },
    { title: "Hotels & Hospitality",   desc: "Continuous supply protecting guest comfort and HVAC systems.",                   icon: ShieldCheck },
    { title: "Hospitals & Healthcare",  desc: "Reliable power for critical medical facilities and life-support systems.",    icon: ShieldCheck },
    { title: "Schools & Universities",  desc: "Educational institutions requiring consistent backup power solutions.",          icon: Factory },
    { title: "Government Agencies",    desc: "Public sector organizations with high-security and reliability requirements.", icon: ShieldCheck },
    { title: "Telecommunications",     desc: "Network infrastructure requiring uninterrupted power supply.",                  icon: Zap     },
    { title: "Logistics Companies",     desc: "Transport and distribution hubs requiring efficient fuel management.",          icon: Truck   },
    { title: "Estates & Residences",   desc: "Gated communities and luxury residential complexes.",                             icon: ShieldCheck },
    { title: "Supermarkets & Malls",   desc: "Retail centers with high energy consumption needs.",                              icon: Factory },
    { title: "Banks & Financial",      desc: "Financial institutions requiring secure and reliable power.",                    icon: ShieldCheck },
    { title: "Restaurants",            desc: "Food service establishments requiring consistent power for operations.",        icon: ShieldCheck },
    { title: "Agricultural Companies", desc: "Farming and agribusiness operations with energy-intensive needs.",              icon: Factory },
    { title: "Mining Companies",       desc: "Extractive industries requiring heavy equipment power solutions.",               icon: Truck   },
    { title: "Churches & Religious",    desc: "Places of worship requiring reliable backup power systems.",                      icon: ShieldCheck },
  ];

  const services = [
    {
      title: "Diesel (AGO) Supply",
      image: "/src/assets/images/diesel_supply_hero_1784144456700.jpg",
      desc: "Supply of premium Automotive Gas Oil (AGO) for businesses, industries, estates, and institutions across Abuja and neighboring states.",
      points: ["Regular and scheduled deliveries", "Serving offices, estates, and industrial sites"],
    },
    {
      title: "Bulk Fuel Delivery",
      image: "/src/assets/images/bulk_diesel_truck_1784144470553.jpg",
      desc: "Safe and timely bulk fuel transportation directly to customer locations for large-volume operational needs.",
      points: ["Direct-to-site tanker delivery", "Suited to factories, construction sites, and large installations"],
    },
    {
      title: "Procurement & Logistics",
      image: "/src/assets/images/oil_gas_logistics_1784144502095.jpg",
      desc: "Efficient sourcing and transportation of petroleum-related products, backed by a vetted logistics network.",
      points: ["End-to-end sourcing and delivery coordination", "Reliable supply chain management for corporate clients"],
    },
  ];

  const whyUs = [
    { title: "Professionalism & Integrity", desc: "We deliver complete business solutions backed by professionalism, integrity, and timely execution." },
    { title: "Customer-Focused Service", desc: "Our focus is building lasting relationships through quality service and dependable performance." },
    { title: "Reliable Logistics", desc: "Experienced management and professional workforce ensuring competitive pricing and reliable delivery." },
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
                    Across Abuja (FCT), Kaduna, Nasarawa, Niger State, and Kogi. International partnerships available upon request.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {industries.map(({ title, desc, icon: Icon }, i) => (
                    <div key={i} className="mat-card p-6 group">
                      <div className="w-10 h-10 rounded-sm bg-mat-blue-50 flex items-center justify-center mb-4 group-hover:bg-mat-blue-500 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-mat-blue-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display font-bold text-mat-dark-800 text-sm uppercase tracking-wide mb-2">{title}</h3>
                      <p className="font-sans text-xs text-mat-dark-400 leading-relaxed">{desc}</p>
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

            {/* 6. Final CTA */}
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
