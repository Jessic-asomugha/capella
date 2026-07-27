import React from "react";
import { ActiveTab } from "../types";
import { ArrowRight, ShieldCheck, CircleCheck as CheckCircle } from "lucide-react";

interface ServicesTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ServicesTab({ setActiveTab }: ServicesTabProps) {
  const services = [
    {
      id: "retail-diesel",
      title: "Retail Diesel Supply",
      image: "/src/assets/images/retail_diesel_1784144486104.jpg",
      badge: "Commercial & Residential",
      desc: "Regular and scheduled drops for offices, estates, luxury residences, and small-to-medium business generators.",
      details: [
        "Deliveries starting from 500 Litres upwards",
        "Calibrated truck-mounted digital meters",
        "Purity tested and double-filtered at discharge",
        "Perfect for soundproof backup generators (20kVA – 150kVA)",
      ],
      client: "Offices, Estates, Malls, Supermarkets",
    },
    {
      id: "bulk-delivery",
      title: "Bulk Fuel Delivery",
      image: "/src/assets/images/bulk_diesel_truck_1784144470553.jpg",
      badge: "High-Volume Logistics",
      desc: "High-volume supply via our pedigree bulk fuel tankers directly to factories, construction sites, manufacturing plants, and large hotel installations.",
      details: [
        "Consignments from 10,000 to 45,000 Litres",
        "Direct-from-depot wholesale pricing index",
        "Quality test certificate provided on delivery",
        "Ideal for heavy duty aggregates & storage reservoirs",
      ],
      client: "Industrial Plants, Large Hotels, Construction Sites",
    },
    {
      id: "oil-gas-logistics",
      title: "Oil & Gas Logistics",
      image: "/src/assets/images/oil_gas_logistics_1784144502095.jpg",
      badge: "Supply Chain Operations",
      desc: "End-to-end transportation, bridging, and distribution network management for petroleum products across Nigerian supply corridors.",
      details: [
        "Vetted and fully tracked logistics fleet",
        "Strict adherence to HSE protocols",
        "Experienced logistics coordinators & certified drivers",
        "Terminal-to-terminal product bridging and hauling",
      ],
      client: "Independents, Depot Operators, Multinationals",
    },
    {
      id: "emergency-delivery",
      title: "Emergency Delivery",
      image: "/src/assets/images/emergency_delivery_1784144518527.jpg",
      badge: "Critical 24/7 Backup",
      desc: "Rapid-response fuel dispatch for critical backup infrastructure like hospitals, data centres, and cold storage facilities experiencing sudden fuel depletion.",
      details: [
        "Guaranteed priority dispatch within Abuja FCT",
        "Round-the-clock emergency telephone hotline support",
        "Self-powered rapid discharge pump systems",
        "Pre-allocated emergency response standby units",
      ],
      client: "Hospitals, Data Centres, Telecom Sites",
    },
  ];

  const testimonials = [
    {
      quote: "Capella has completely solved our fuel supply anxieties. In our healthcare facility, a power outage is life-threatening. Their unadulterated AGO has kept our backup systems running without a single filter clog for over two years.",
      author: "Dr. Aliyu Mohammed",
      role: "Director of Clinical Operations",
      org: "Prime Care Hospital, Abuja",
    },
    {
      quote: "With a fleet of heavy earthmoving equipment, fuel theft and inaccurate meter measurements were costing us millions. Capella's transparent meter ticketing has saved us over 15% on monthly diesel overhead.",
      author: "Engr. Sandra Okafor",
      role: "Project Manager",
      org: "Apex Construction & Infrastructure",
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

      {/* Testimonials — dark band */}
      <section className="relative py-20 bg-mat-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/src/assets/images/energy_partners_1784144533028.jpg" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-400 mx-auto items-center">
              Testimonials
            </p>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white mt-5 tracking-tight">
              Trusted by Abuja's Top Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-mat-dark-800 border border-mat-dark-700 p-8 rounded-sm flex flex-col justify-between gap-6 hover:border-mat-blue-500 transition-colors">
                <p className="font-sans text-sm text-mat-dark-200 italic leading-relaxed">"{t.quote}"</p>
                <div className="flex gap-3.5 items-center border-t border-mat-dark-700 pt-5">
                  <div className="w-11 h-11 bg-mat-blue-500 rounded-sm text-white flex items-center justify-center font-display font-black text-base">
                    {t.author.split(" ").pop()?.[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">{t.author}</h4>
                    <p className="font-sans text-[11px] text-mat-dark-400 mt-0.5">{t.role} — <span className="text-mat-blue-400 font-semibold">{t.org}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
