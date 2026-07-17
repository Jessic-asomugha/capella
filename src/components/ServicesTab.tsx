import React from "react";
import { ActiveTab } from "../types";

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
        "Perfect for soundproof backup generators (20kVA - 150kVA)"
      ],
      client: "Offices, Estates, Malls, Supermarkets"
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
        "Ideal for massive heavy duty aggregates & storage reservoirs"
      ],
      client: "Industrial Plants, Large Hotels, Construction Sites"
    },
    {
      id: "oil-gas-logistics",
      title: "Oil & Gas Logistics",
      image: "/src/assets/images/oil_gas_logistics_1784144502095.jpg",
      badge: "Supply Chain Operations",
      desc: "End-to-end transportation, bridging, and distribution network management for petroleum products across Nigerian supply corridors.",
      details: [
        "Vetted and fully tracked logistics fleet",
        "Strict adherence to HSE (Health, Safety, Environment) protocols",
        "Experienced logistics coordinators & certified drivers",
        "Terminal-to-terminal product bridging and hauling"
      ],
      client: "Independents, Depot Operators, Multinational Corporations"
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
        "Pre-allocated emergency response standby units"
      ],
      client: "Hospitals, Data Centres, Telecommunication Sites"
    }
  ];

  const testimonials = [
    {
      quote: "Capella has completely solved our fuel supply anxieties. In our healthcare facility, a power outage is not just inconvenient—it is life-threatening. Their unadulterated AGO has kept our backup systems running without single filter clog for over two years.",
      author: "Dr. Aliyu Mohammed",
      role: "Director of Clinical Operations",
      org: "Prime Care Hospital, Abuja"
    },
    {
      quote: "With a fleet of heavy earthmoving equipment, fuel theft and inaccurate meter measurements were costing us millions. Capella's transparent meter ticketing and strict volume checks have saved us over 15% on our monthly diesel overhead.",
      author: "Engr. Sandra Okafor",
      role: "Project Manager",
      org: "Apex Construction & Infrastructure"
    }
  ];

  return (
    <div id="services-tab" className="bg-white py-12 space-y-20">
      {/* Services Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="w-12 h-1 bg-slate-900 mx-auto mb-2"></div>
        <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
          What We Do
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight uppercase">
          Our Core Services
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
          Comprehensive, high-performance energy and logistics solutions tailored to meet the rigorous operational standards of modern industries in Abuja and Nigeria.
        </p>
      </div>

      {/* Services List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((svc, idx) => (
          <div
            key={svc.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
          >
            {/* Image side */}
            <div className={`relative lg:col-span-5 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
              <div className="absolute inset-0 border border-slate-200 transform translate-x-2 translate-y-2 -z-10"></div>
              <div className="relative bg-white p-3 rounded-none border border-slate-200 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-80 object-cover rounded-none"
                />
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-[0.15em] bg-slate-55 border border-slate-200 text-slate-700 uppercase rounded-none inline-block">
                {svc.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight uppercase">
                {svc.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {svc.desc}
              </p>

              {/* Bullet details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {svc.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-none border border-slate-950 text-slate-950 flex items-center justify-center text-[10px] shrink-0 font-bold bg-slate-50">✓</span>
                    <span className="text-xs text-slate-600 font-medium leading-normal">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Technical footprint info */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-400 font-mono uppercase text-[10px] tracking-wider">Typical Clients: </span>
                  <span className="font-bold text-slate-700">{svc.client}</span>
                </div>
                <button
                  onClick={() => setActiveTab("CONTACT")}
                  className="text-slate-950 hover:text-slate-600 font-bold uppercase tracking-widest text-xs border-b-2 border-slate-950 hover:border-slate-400 pb-0.5 flex items-center gap-1.5 group self-start cursor-pointer transition-colors duration-150"
                >
                  <span>Inquire Volume</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Panel */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-1 bg-slate-900 mx-auto mb-2"></div>
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
              Testimonials
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight uppercase">
              Trusted by Abuja's Top Leaders
            </h3>
            <p className="text-xs text-slate-500">
              Read how Capella helps local corporations manage backup energy operations with absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-none border border-slate-200 relative flex flex-col justify-between gap-6"
              >
                <div className="text-slate-100 font-serif text-6xl absolute top-4 left-6 pointer-events-none select-none">“</div>
                <p className="text-xs sm:text-sm text-slate-600 italic relative z-10 leading-relaxed pt-2">
                  {test.quote}
                </p>
                <div className="flex gap-3.5 items-center border-t border-slate-250 pt-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-none text-white flex items-center justify-center font-display font-bold text-xs uppercase">
                    {test.author.split(" ").pop()?.[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 uppercase tracking-wide">{test.author}</h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {test.role} — <span className="text-slate-900 font-bold">{test.org}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Final CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-slate-900 text-white rounded-none p-8 sm:p-12 text-center space-y-6 border border-slate-800">
          <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-[0.25em]">
            Uncompromised Supply Agreements
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase max-w-xl mx-auto">
            Establish a Certified Fuel Delivery Schedule Today
          </h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            Protect your commercial operations from unpredictable public grid lockouts. Work with Abuja's most reliable fuel supply specialists.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab("CONTACT")}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-sans font-bold text-xs uppercase tracking-widest rounded-none border border-white cursor-pointer transition-colors duration-150"
            >
              Request a Custom Quote
            </button>
            <button
              onClick={() => setActiveTab("ENERGY_HUB")}
              className="px-8 py-4 bg-transparent hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-none border border-slate-700 cursor-pointer transition-colors duration-150"
            >
              Estimate Fuel Demand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
