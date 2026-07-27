import React, { useState } from "react";
import { QuoteFormData, ActiveTab } from "../types";
import { MapPin, Phone, Mail, Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Loader, ArrowRight } from "lucide-react";

interface ContactTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ContactTab({ setActiveTab }: ContactTabProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "", email: "", phone: "", company: "",
    serviceType: "Retail Diesel Supply", estimatedVolume: "",
    frequency: "On-demand", deliveryAddress: "", message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; quoteId?: string; error?: string } | null>(null);

  const zones = [
    { name: "Central Business District", desc: "Corporate HQ — 15min dispatch" },
    { name: "Maitama & Asokoro",         desc: "Premium estates & diplomatic zone" },
    { name: "Wuse & Garki",              desc: "Commercial offices & hotels" },
    { name: "Gwarinpa & Jabi",           desc: "Residential hubs & construction" },
    { name: "Idu Industrial Layout",     desc: "Heavy factories & manufacturing" },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.deliveryAddress) {
      setResult({ success: false, error: "Please fill in all required fields." });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const data = await res.json();
      if (res.ok && data.success) {
        setResult({ success: true, quoteId: data.quoteId });
        setFormData({ name: "", email: "", phone: "", company: "", serviceType: "Retail Diesel Supply", estimatedVolume: "", frequency: "On-demand", deliveryAddress: "", message: "" });
      } else {
        setResult({ success: false, error: data.error || "Failed to submit request." });
      }
    } catch {
      setResult({ success: false, error: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls = "px-4 py-3 border border-mat-dark-200 rounded-sm text-sm bg-white focus:outline-none focus:border-mat-blue-500 focus:ring-2 focus:ring-mat-blue-100 transition-all";
  const labelCls = "font-display font-bold text-[10px] uppercase tracking-widest text-mat-dark-700";

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="mat-eyebrow font-display font-bold text-xs uppercase tracking-[0.22em] text-mat-blue-600 mx-auto items-center">
            Get In Touch
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-mat-dark-800 mt-5 tracking-tight">
            Connect &amp; Request a Quote
          </h2>
          <p className="font-sans text-mat-dark-400 text-sm mt-4 leading-relaxed max-w-2xl mx-auto">
            Reach out to our centralized dispatch office in Abuja CBD or fill in the procurement detail form below. We provide fast, itemized commercial proposals within 60 minutes.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Corporate HQ",  lines: ["(Address pending from client)"] },
            { icon: Phone,  title: "Direct Lines",  lines: ["Phone: (Pending)", "WhatsApp: (Pending)", "Email: (Pending)"] },
            { icon: Clock,  title: "Business Hours", lines: ["Mon–Fri: 8AM–6PM", "Sat: 9AM–4PM", "Dispatch: 24/7/365"] },
          ].map(({ icon: Icon, title, lines }, i) => (
            <div key={i} className="mat-card p-7 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-sm bg-mat-blue-500 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-mat-dark-800 text-xs uppercase tracking-wide mb-2">{title}</h4>
                {lines.map((l, j) => (
                  <p key={j} className="font-sans text-xs text-mat-dark-400 leading-relaxed">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 mat-card p-8 space-y-6">
            <div>
              <h3 className="font-display font-black text-lg text-mat-dark-800 tracking-tight">Request a Commercial Proposal</h3>
              <p className="font-sans text-xs text-mat-dark-400 mt-1">Provide your generator specifications and logistics requirements.</p>
            </div>

            {result && (
              <div className={`p-4 rounded-sm flex items-start gap-3 text-sm ${result.success ? "bg-mat-blue-50 text-mat-blue-700 border border-mat-blue-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {result.success ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                <div>
                  {result.success ? (
                    <>
                      <p className="font-display font-bold text-xs uppercase tracking-wide">Quote Request Logged</p>
                      <p className="font-sans text-xs mt-1">Reference ID: <strong className="font-mono">{result.quoteId}</strong>. A logistics representative will email you shortly.</p>
                    </>
                  ) : (
                    <>
                      <p className="font-display font-bold text-xs uppercase tracking-wide">Submission Failed</p>
                      <p className="font-sans text-xs mt-1">{result.error}</p>
                    </>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={onChange} required placeholder="e.g. Aliyu Ibrahim" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Corporate Email <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={onChange} required placeholder="e.g. ibrahim@company.com" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Telephone <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={onChange} required placeholder="e.g. +234 803 123 4567" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={onChange} placeholder="e.g. Zenith Hotels" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Service Required <span className="text-red-500">*</span></label>
                <select name="serviceType" value={formData.serviceType} onChange={onChange} className={inputCls}>
                  <option>Retail Diesel Supply</option>
                  <option>Bulk Fuel Delivery</option>
                  <option>Oil & Gas Logistics</option>
                  <option>Emergency Delivery</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Estimated Volume (Litres)</label>
                <input type="number" name="estimatedVolume" value={formData.estimatedVolume} onChange={onChange} placeholder="e.g. 2500" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className={labelCls}>Supply Frequency</label>
                <select name="frequency" value={formData.frequency} onChange={onChange} className={inputCls}>
                  <option value="On-demand">On-demand / Emergency Drop</option>
                  <option value="Weekly">Weekly Scheduled</option>
                  <option value="Bi-weekly">Bi-weekly Scheduled</option>
                  <option value="Monthly">Monthly Scheduled</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className={labelCls}>Delivery Address in Abuja <span className="text-red-500">*</span></label>
                <input type="text" name="deliveryAddress" value={formData.deliveryAddress} onChange={onChange} required placeholder="e.g. Plot 12, Garki Area 11, Abuja" className={inputCls} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className={labelCls}>Additional Instructions</label>
                <textarea name="message" value={formData.message} onChange={onChange} rows={4} placeholder="Generator kVA capacity, access roads, timing constraints..." className={`${inputCls} resize-none`} />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" disabled={isLoading} className="mat-btn-primary w-full justify-center">
                  {isLoading ? (
                    <><Loader className="w-4 h-4 animate-spin" /> Processing...</>
                  ) : (
                    <>Submit Quote Request <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Map + zones */}
          <div className="lg:col-span-5 bg-mat-dark-900 text-white rounded-sm p-7 space-y-6">
            <div>
              <p className="font-display font-bold text-[10px] uppercase tracking-[0.22em] text-mat-blue-400">Zone Map</p>
              <h3 className="font-display font-black text-lg tracking-tight mt-1">Abuja Logistics Reach</h3>
              <p className="font-sans text-xs text-mat-dark-300 mt-1 leading-relaxed">Our trucks operate across Abuja FCT Municipal and adjoining industrial regions.</p>
            </div>

            <div className="relative h-56 bg-mat-dark-950 rounded-sm overflow-hidden flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full text-mat-dark-700/40 opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* HQ marker */}
              <div className="absolute top-1/2 left-1/2 w-3.5 h-3.5 bg-mat-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping opacity-75" />
              <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-mat-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-mat-dark-900" />
              <div className="absolute top-[54%] left-[53%] font-mono text-[9px] bg-mat-dark-800 border border-mat-dark-700 text-white px-1.5 py-0.5 rounded font-bold whitespace-nowrap">Capella HQ (CBD)</div>
              {/* Zone dots */}
              <div className="absolute top-[36%] left-[63%] w-2 h-2 bg-mat-dark-500 rounded-full" />
              <div className="absolute top-[38%] left-[65%] font-mono text-[8px] text-mat-dark-400">Maitama</div>
              <div className="absolute top-[64%] left-[42%] w-2 h-2 bg-mat-dark-500 rounded-full" />
              <div className="absolute top-[67%] left-[44%] font-mono text-[8px] text-mat-dark-400">Garki</div>
              <div className="absolute top-[42%] left-[33%] w-2 h-2 bg-mat-dark-500 rounded-full" />
              <div className="absolute top-[42%] left-[16%] font-mono text-[8px] text-mat-dark-400">Gwarinpa</div>
              <div className="absolute top-[70%] left-[24%] w-2 h-2 bg-mat-dark-500 rounded-full" />
              <div className="absolute top-[73%] left-[25%] font-mono text-[8px] text-mat-dark-400">Idu Industrial</div>
            </div>

            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wide text-mat-dark-300">Coverage Highlights</h4>
              {zones.map((z, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 bg-mat-blue-500 rounded-full shrink-0 mt-1.5" />
                  <div>
                    <div className="font-display font-bold text-mat-dark-200 text-xs uppercase tracking-wide">{z.name}</div>
                    <div className="font-sans text-[11px] text-mat-dark-400">{z.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
