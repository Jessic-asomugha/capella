import React from "react";
import { ActiveTab } from "../types";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
        "Perfect for soundproof backup generators (20kVA - 150kVA)",
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
        "Ideal for massive heavy duty aggregates & storage reservoirs",
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
        "Strict adherence to HSE (Health, Safety, Environment) protocols",
        "Experienced logistics coordinators & certified drivers",
        "Terminal-to-terminal product bridging and hauling",
      ],
      client: "Independents, Depot Operators, Multinational Corporations",
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
      client: "Hospitals, Data Centres, Telecommunication Sites",
    },
  ];

  const testimonials = [
    {
      quote: "Capella has completely solved our fuel supply anxieties. In our healthcare facility, a power outage is not just inconvenient—it is life-threatening. Their unadulterated AGO has kept our backup systems running without single filter clog for over two years.",
      author: "Dr. Aliyu Mohammed",
      role: "Director of Clinical Operations",
      org: "Prime Care Hospital, Abuja",
    },
    {
      quote: "With a fleet of heavy earthmoving equipment, fuel theft and inaccurate meter measurements were costing us millions. Capella's transparent meter ticketing and strict volume checks have saved us over 15% on our monthly diesel overhead.",
      author: "Engr. Sandra Okafor",
      role: "Project Manager",
      org: "Apex Construction & Infrastructure",
    },
  ];

  return (
    <div id="services-tab" className="bg-white py-12 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="flex items-center gap-3 justify-center">
          <div className="w-8 h-[2px] bg-amber-450"></div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-amber-600">What We Do</span>
          <div className="w-8 h-[2px] bg-amber-450"></div>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight">
          Our Core Services
        </h2>
        <p className="text-brand-600 text-sm leading-relaxed max-w-2xl mx-auto">
          Comprehensive, high-performance energy and logistics solutions tailored to meet the rigorous operational standards of modern industries in Abuja and Nigeria.
        </p>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((svc, idx) => (
          <div key={svc.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`relative lg:col-span-5 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
              <div className="absolute inset-0 border border-brand-200 transform translate-x-3 translate-y-3 -z-10 rounded-lg"></div>
              <div className="relative bg-white p-3 rounded-lg border border-brand-200 overflow-hidden shadow-md">
                <img src={svc.image} alt={svc.title} referrerPolicy="no-referrer" className="w-full h-72 sm:h-80 object-cover rounded-md img-zoom" />
                <div className="absolute top-6 right-6 bg-brand-900/90 backdrop-blur-sm text-amber-450 px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
                  {svc.badge}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-[0.15em] bg-brand-50 border border-brand-200 text-brand-700 uppercase rounded-md inline-block">
                {svc.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 tracking-tight">
                {svc.title}
              </h3>
              <p className="text-brand-600 text-xs sm:text-sm leading-relaxed">{svc.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {svc.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex gap-2.5 items-start group">
                    <span className="w-5 h-5 rounded-md border border-brand-900 text-brand-900 flex items-center justify-center text-[10px] shrink-0 font-bold bg-brand-50 group-hover:bg-amber-450 group-hover:text-white group-hover:border-amber-450 transition-colors">✓</span>
                    <span className="text-xs text-brand-600 font-medium leading-normal">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-brand-400 font-mono uppercase text-[10px] tracking-wider">Typical Clients: </span>
                  <span className="font-bold text-brand-700">{svc.client}</span>
                </div>
                <button
                  onClick={() => setActiveTab("CONTACT")}
                  className="text-brand-950 hover:text-amber-600 font-bold uppercase tracking-widest text-xs border-b-2 border-amber-450 hover:border-brand-400 pb-0.5 flex items-center gap-1.5 group self-start cursor-pointer transition-colors duration-150"
                >
                  <span>Inquire Volume</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials with background image */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/src/assets/images/energy_partners_1784144533028.jpg" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-950/92"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-8 h-[2px] bg-amber-450"></div>
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-amber-450">Testimonials</span>
              <div className="w-8 h-[2px] bg-amber-450"></div>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Trusted by Abuja's Top Leaders
            </h3>
            <p className="text-xs text-brand-300">
              Read how Capella helps local corporations manage backup energy operations with absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-brand-800/60 relative flex flex-col justify-between gap-6">
                <div className="text-amber-450/30 font-display text-6xl absolute top-4 left-6 pointer-events-none select-none">"</div>
                <p className="text-xs sm:text-sm text-brand-100 italic relative z-10 leading-relaxed pt-2">{test.quote}</p>
                <div className="flex gap-3.5 items-center border-t border-brand-800/60 pt-4">
                  <div className="w-11 h-11 bg-amber-450 rounded-md text-brand-950 flex items-center justify-center font-display font-bold text-sm uppercase">
                    {test.author.split(" ").pop()?.[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs sm:text-sm text-white uppercase tracking-wide">{test.author}</h4>
                    <p className="text-[11px] text-brand-300 font-mono">
                      {test.role} — <span className="text-amber-450 font-bold">{test.org}</span>
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
        <div className="bg-brand-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 border border-brand-800 shadow-lg">
          <div className="flex justify-center">
            <ShieldCheck className="w-10 h-10 text-amber-450" />
          </div>
          <span className="font-mono text-[10px] text-brand-400 font-bold uppercase tracking-[0.25em]">
            Uncompromised Supply Agreements
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight max-w-xl mx-auto">
            Establish a Certified Fuel Delivery Schedule Today
          </h3>
          <p className="text-xs text-brand-300 max-w-lg mx-auto leading-relaxed">
            Protect your commercial operations from unpredictable public grid lockouts. Work with Abuja's most reliable fuel supply specialists.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab("CONTACT")}
              className="px-8 py-4 bg-amber-450 hover:bg-amber-500 text-brand-950 font-sans font-semibold text-xs uppercase tracking-widest rounded-md transition-colors duration-150 flex items-center justify-center gap-2 group"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
