import React, { useState } from "react";
import { ActiveTab } from "../types";
import { Scale, ShieldCheck, Landmark, Truck, Users, HardHat, ChevronDown, ChevronUp, Circle as HelpCircle, ArrowRight, CircleCheck as CheckCircle } from "lucide-react";

interface AboutTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function AboutTab({ setActiveTab }: AboutTabProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "100%",  label: "Unadulterated Fuel",   desc: "AGO sourced only from Tier-1 terminals." },
    { value: "25+",   label: "Corporate Contracts",  desc: "Abuja's top hotels, hospitals, factories." },
    { value: "24/7",  label: "Operational Dispatch", desc: "Continuous logistics tracking and support." },
  ];

  const values = [
    { title: "Integrity",       desc: "Highest ethical standards in all our business dealings.",          icon: Scale       },
    { title: "Professionalism", desc: "Excellence through skilled expertise and disciplined execution.",  icon: ShieldCheck },
    { title: "Innovation",      desc: "Continuous improvement to meet evolving industry needs.",          icon: Landmark    },
    { title: "Quality",         desc: "Uncompromising standards across all service offerings.",           icon: Truck       },
    { title: "Teamwork",        desc: "Effective collaboration for collective client success.",           icon: Users       },
    { title: "Safety",          desc: "Protecting people, assets, and the environment in all operations.", icon: HardHat     },
  ];

  const faqs = [
    { q: "What makes Capella's diesel 'unadulterated'?", a: "Our AGO is sourced strictly from primary, highly vetted terminals. Upon loading, the fuel undergoes multi-stage filtration to eliminate moisture and microscopic dust sediment. We perform flashpoint and density testing before any delivery to guarantee a high octane index which extends generator life." },
    { q: "What is your minimum order volume?", a: "Minimum order for retail generator top-ups is 500 Litres within Abuja city limits. For our industrial bulk tanker service, deliveries start from 5,000 Litres up to 45,000 Litres per single consignment." },
    { q: "How does Capella guarantee metre accuracy?", a: "All delivery trucks are outfitted with calibrated positive-displacement flow meters tested and sealed by regulatory bodies. We provide a manual dip-stick measurement before and after discharge to verify physical levels alongside the digital flow-meter printout." },
    { q: "Do you supply emergency delivery during holidays or weekends?", a: "Yes. Our operations control room in Abuja FCT is open 24/7/365. We maintain emergency reserve trucks on standby specifically to support critical facilities such as healthcare centers, hospitals, cold-storage, and continuous factories." },
    { q: "Can I schedule recurring automated deliveries?", a: "Absolutely. Most corporate clients use our automated scheduling pipeline. Our logistics platform triggers automated dispatch based on your preset calendar intervals, ensuring you maintain a stable 35% backup buffer." },
  ];

  return (
    <div className="bg-white">
      {/* ── Intro ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 mat-fade-up">
            <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600">
              About Capella Integrated Global
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 tracking-tight leading-tight">
              Integrated Solutions.<br />Trusted Results.
            </h2>
            <p className="font-sans text-mat-dark-400 text-sm leading-relaxed">
              Capella Integrated Global Limited is a diversified Nigerian company providing integrated business solutions across oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors.
            </p>
            <p className="font-sans text-mat-dark-400 text-sm leading-relaxed">
              We deliver innovative, efficient, and cost-effective solutions tailored to meet the unique needs of corporate organisations, government institutions, and private businesses.
            </p>
            <ul className="space-y-3 pt-2">
              {["Registered Nigerian Company (Est. 2024)", "Experienced management & professional workforce", "Reliable logistics & competitive pricing", "Customer-focused service"].map((b, i) => (
                <li key={i} className="flex items-center gap-3 font-sans text-sm font-semibold text-mat-dark-700">
                  <CheckCircle className="w-5 h-5 text-mat-blue-500 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => setActiveTab("CONTACT")} className="mat-btn-primary mt-2">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mat-card p-3 rounded-sm overflow-hidden mat-fade-up-d1">
            <img src="/src/assets/images/energy_partners_1784144533028.jpg" alt="Capella Energy Partners" className="w-full h-[460px] object-cover img-zoom" />
          </div>
        </div>
      </section>

      {/* ── Stats — dark band ── */}
      <section className="relative py-20 bg-mat-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/src/assets/images/bulk_diesel_truck_1784144470553.jpg" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-mat-dark-700">
            {stats.map((s, i) => (
              <div key={i} className="py-8 md:py-0 md:px-8">
                <div className="font-display font-black text-5xl sm:text-6xl text-mat-blue-500">{s.value}</div>
                <div className="font-display font-bold text-sm uppercase tracking-wide text-white mt-3">{s.label}</div>
                <p className="font-sans text-xs text-mat-dark-300 mt-2 max-w-xs mx-auto leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600 mx-auto items-center">
              Our Pillars
            </p>
            <h3 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 mt-5 tracking-tight">
              Mission &amp; Vision
            </h3>
            <p className="font-sans text-mat-dark-400 text-sm mt-4 leading-relaxed max-w-xl mx-auto">
              <strong className="text-mat-dark-800">Mission:</strong> To deliver innovative business solutions that exceed customer expectations. <strong className="text-mat-dark-800">Vision:</strong> To become Nigeria's most trusted integrated services company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, desc, icon: Icon }, i) => (
              <div key={i} className="mat-card p-8 group">
                <div className="w-12 h-12 rounded-sm bg-mat-blue-50 flex items-center justify-center mb-5 group-hover:bg-mat-blue-500 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-mat-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-display font-bold text-mat-dark-800 text-sm uppercase tracking-wide mb-2">{title}</h4>
                <p className="font-sans text-xs text-mat-dark-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-mat-dark-50 border-y border-mat-dark-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600 mx-auto items-center">
              <HelpCircle className="w-3.5 h-3.5 inline mr-1" /> FAQ
            </p>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-mat-dark-800 mt-5 tracking-tight">
              Diesel Logistics &amp; Quality
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-sm border border-mat-dark-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full text-left p-5 flex justify-between items-center gap-4 transition-colors cursor-pointer ${openFaq === i ? "bg-mat-blue-500 text-white" : "hover:bg-mat-dark-50 text-mat-dark-800"}`}
                >
                  <span className="font-display font-bold text-xs uppercase tracking-wide">{f.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 text-mat-blue-500 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-white text-mat-dark-400 text-xs leading-relaxed border-t border-mat-dark-100">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About CTA ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-mat-dark-900 text-white p-10 sm:p-14 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">Ready to Secure Your Fuel Reserves?</h3>
              <p className="font-sans text-mat-dark-300 text-sm max-w-xl">
                Connect with our operations coordinators to establish a streamlined diesel supply contract.
              </p>
            </div>
            <button onClick={() => setActiveTab("CONTACT")} className="mat-btn-primary shrink-0">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
