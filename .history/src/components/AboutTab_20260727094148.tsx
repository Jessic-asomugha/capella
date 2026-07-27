import React, { useState } from "react";
import { ActiveTab } from "../types";
import { Landmark, ShieldCheck, Truck, Scale, ChevronDown, ChevronUp, HelpCircle, Users, HardHat } from "lucide-react";

interface AboutTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function AboutTab({ setActiveTab }: AboutTabProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "100%", label: "Unadulterated Fuel Guarantee", desc: "AGO sourced only from Tier-1 terminals." },
    { value: "25+", label: "Corporate Contracts", desc: "Powering Abuja's top hotels, hospitals, and factories." },
    { value: "24/7", label: "Operational Dispatch", desc: "Continuous logistics tracking and support." },
  ];

  const values = [
    { title: "Integrity", desc: "We uphold the highest ethical standards in all our business dealings and relationships.", icon: Scale },
    { title: "Professionalism", desc: "We deliver excellence through skilled expertise and disciplined service execution.", icon: ShieldCheck },
    { title: "Innovation", desc: "We continuously improve our solutions to meet evolving industry needs.", icon: Landmark },
    { title: "Quality", desc: "We maintain uncompromising standards across all our service offerings.", icon: Truck },
    { title: "Teamwork", desc: "We collaborate effectively to achieve collective success for our clients.", icon: Scale },
    { title: "Safety", desc: "We prioritize safety in all operations to protect people, assets, and the environment.", icon: ShieldCheck },
  ];

  const faqs = [
    {
      q: "What makes Capella's diesel 'unadulterated' compared to other local options?",
      a: "Our AGO (Automobile Gas Oil) is sourced strictly from primary, highly vetted terminals. Upon loading, the fuel undergoes a multi-stage filtration to eliminate moisture and microscopic dust sediment. We perform flashpoint and density testing before any delivery to guarantee a high octane index which extends generator life expectancy."
    },
    {
      q: "What is your minimum order volume for diesel deliveries?",
      a: "Our minimum order volume for retail generator top-ups is 500 Litres within Abuja city limits. For our industrial bulk tanker service, we handle deliveries starting from 5,000 Litres up to 45,000 Litres per single consignment."
    },
    {
      q: "How does Capella guarantee metre accuracy during fuel discharge?",
      a: "All Capella delivery trucks are outfitted with calibrated positive-displacement flow meters that are tested and sealed by regulatory bodies. We provide a manual dip-stick measurement before and after discharge to verify accurate physical levels alongside the digital digital flow-meter printout."
    },
    {
      q: "Do you supply emergency delivery during public holidays or weekends?",
      a: "Yes. Our operations control room in Abuja FCT is open 24/7/365. We maintain emergency reserve trucks on standby specifically to support critical facilities such as healthcare centers, hospitals, cold-storage, and continuous factories."
    },
    {
      q: "Can I schedule recurring automated deliveries?",
      a: "Absolutely. Most corporate clients utilize our automated scheduling pipeline. Our logistics platform triggers automated dispatch based on your preset calendar intervals (e.g., every Tuesday morning or twice monthly), ensuring you maintain a stable 35% backup buffer."
    }
  ];

  return (
    <div id="about-tab" className="bg-white py-12 space-y-20">
      {/* Introduction with Generated Partners Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <div className="w-12 h-1 bg-slate-900 mb-2"></div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900">
            About Capella Integrated Global
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">
            Integrated Solutions. Trusted Results.
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Capella Integrated Global Limited is a diversified Nigerian company providing integrated business solutions across the oil and gas, procurement, logistics, engineering, construction support, and general contracting sectors.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            We deliver innovative, efficient, and cost-effective solutions tailored to meet the unique needs of corporate organisations, government institutions, and private businesses.
          </p>

          {/* Inline list from mock up */}
          <ul className="space-y-3 pt-2">
            {[
              "Registered Nigerian Company (Est. 2024)",
              "Experienced Management & Professional Workforce",
              "Reliable Logistics & Competitive Pricing",
              "Customer-Focused Service",
            ].map((bullet, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <span className="w-5 h-5 rounded-none border border-slate-950 text-slate-950 flex items-center justify-center text-[10px] shrink-0 font-bold bg-slate-50">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <button
              onClick={() => setActiveTab("CONTACT")}
              className="text-xs font-bold tracking-widest text-slate-900 uppercase border-b-2 border-slate-900 hover:text-slate-500 transition-colors inline-flex items-center gap-2 group cursor-pointer pb-1"
            >
              <span>Partner with us today</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Image Card Container */}
        <div className="relative">
          <div className="absolute inset-0 border border-slate-200 transform translate-x-2 translate-y-2 -z-10"></div>
          <div className="relative bg-white p-3 rounded-none border border-slate-200 overflow-hidden">
            <img
              src="/src/assets/images/energy_partners_1784144533028.jpg"
              alt="Capella Energy Partners"
              referrerPolicy="no-referrer"
              className="w-full h-80 lg:h-96 object-cover rounded-none shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* Stats Board */}
      <div className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 pt-6 md:pt-0 pb-6 md:pb-0 md:px-6 first:pt-0 last:pb-0">
                <div className="font-display font-bold text-4xl sm:text-5xl text-white">{stat.value}</div>
                <div className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">{stat.label}</div>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-1 bg-slate-900 mx-auto"></div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
            Our Pillars
          </span>
          <h3 className="font-display text-3xl font-bold text-slate-900 tracking-tight uppercase">
            Mission &amp; Vision
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            <strong>Mission:</strong> To deliver innovative business solutions that exceed customer expectations.<br /><br />
            <strong>Vision:</strong> To become Nigeria's most trusted integrated services company.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-none flex flex-col gap-5 hover:bg-slate-50 transition-colors duration-200">
                <div className="w-10 h-10 border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-900 rounded-none">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight uppercase">
              Diesel Logistics &amp; Quality FAQ
            </h3>
            <p className="text-xs text-slate-500 max-w-lg mx-auto">
              Find technical answers about diesel storage safety, delivery procedures, and fuel quality guarantees.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-none border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className={`w-full text-left p-5 flex justify-between items-center gap-4 transition-colors focus:outline-none cursor-pointer ${openFaq === idx ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-900'}`}
                >
                  <span className="font-display font-bold text-xs uppercase tracking-wider">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-300 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-6 bg-white text-xs text-slate-500 leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-none flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-none">Ready to Secure Your Fuel Reserves?</h3>
            <p className="text-xs font-sans text-slate-400 max-w-xl">
              Connect with our operations coordinators to establish a streamlined, stress-free diesel supply contract for your generator installations.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("CONTACT")}
            className="w-full md:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-sans font-bold text-xs tracking-widest uppercase rounded-none transition-all duration-200 shrink-0 cursor-pointer border border-white"
          >
            Request a Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
