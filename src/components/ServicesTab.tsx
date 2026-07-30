import React from "react";
import { ActiveTab } from "../types";
import { ArrowRight, ShieldCheck, CircleCheck as CheckCircle } from "lucide-react";

interface ServicesTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ServicesTab({ setActiveTab }: ServicesTabProps) {
  const services = [
    {
      id: "diesel-ago-supply",
      title: "Diesel (AGO) Supply",
      image: "/src/assets/images/diesel_supply_hero_1784144456700.jpg",
      badge: "Fuel Supply",
      desc: "Supply of premium Automotive Gas Oil (AGO) for businesses, industries, estates, and institutions across Abuja and neighboring states.",
      details: [
        "Regular and scheduled deliveries",
        "Serving offices, estates, and small-to-medium generators",
      ],
      client: "Offices, Estates, Malls, Supermarkets",
    },
    {
      id: "bulk-fuel-delivery",
      title: "Bulk Fuel Delivery",
      image: "/src/assets/images/bulk_diesel_truck_1784144470553.jpg",
      badge: "High-Volume Logistics",
      desc: "Safe and timely bulk fuel transportation directly to factories, construction sites, and large installations.",
      details: [
        "Direct-to-site tanker delivery",
        "Suited to large-volume operational needs",
      ],
      client: "Industrial Plants, Large Hotels, Construction Sites",
    },
    {
      id: "procurement-logistics",
      title: "Procurement & Logistics",
      image: "/src/assets/images/oil_gas_logistics_1784144502095.jpg",
      badge: "Supply Chain Operations",
      desc: "Efficient sourcing and transportation of petroleum-related products, backed by a vetted logistics network.",
      details: [
        "End-to-end sourcing and delivery coordination",
        "Reliable supply chain management for corporate clients",
      ],
      client: "Independents, Depot Operators, Corporate Clients",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600 mx-auto items-center">
            What We Do
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 mt-5 tracking-tight">
            Our Core Services
          </h2>
          <p className="font-sans text-mat-dark-400 text-sm mt-4 leading-relaxed max-w-2xl mx-auto">
            Comprehensive, high-performance energy and logistics solutions tailored to meet the rigorous operational standards of modern industries in Abuja and Nigeria.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
          {services.map((s, i) => (
            <div key={s.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="mat-card p-3 rounded-sm overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-[320px] object-cover img-zoom" />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block px-3 py-1 bg-mat-blue-50 text-mat-blue-600 font-display font-bold text-[10px] uppercase tracking-widest rounded-sm">
                  {s.badge}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-mat-dark-800 tracking-tight leading-tight">{s.title}</h3>
                <p className="font-sans text-mat-dark-400 text-sm leading-relaxed">{s.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {s.details.map((d, j) => (
                    <div key={j} className="flex gap-2.5 items-start">
                      <CheckCircle className="w-4 h-4 text-mat-blue-500 shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-mat-dark-600 leading-snug">{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-mat-dark-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs">
                    <span className="text-mat-dark-400 font-sans uppercase text-[10px] tracking-wider">Typical Clients: </span>
                    <span className="font-display font-bold text-mat-dark-700">{s.client}</span>
                  </div>
                  <button
                    onClick={() => setActiveTab("CONTACT")}
                    className="font-display font-bold text-xs uppercase tracking-widest text-mat-blue-600 border-b-2 border-mat-blue-500 pb-0.5 hover:text-mat-blue-700 transition-colors flex items-center gap-1.5 group self-start cursor-pointer"
                  >
                    Inquire Volume <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="bg-mat-blue-600 text-white p-10 sm:p-14 rounded-sm text-center space-y-5">
            <ShieldCheck className="w-10 h-10 text-white mx-auto" />
            <p className="font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-100">
              Uncompromised Supply Agreements
            </p>
            <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight max-w-xl mx-auto">
              Establish a Certified Fuel Delivery Schedule Today
            </h3>
            <p className="font-sans text-mat-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
              Protect your commercial operations from unpredictable public grid lockouts.
            </p>
            <button onClick={() => setActiveTab("CONTACT")} className="bg-white text-mat-blue-600 hover:bg-mat-dark-50 font-display font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all flex items-center justify-center gap-2 group mx-auto cursor-pointer">
              Request a Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
