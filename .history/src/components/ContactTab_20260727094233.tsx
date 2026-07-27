import React, { useState } from "react";
import { QuoteFormData, ActiveTab } from "../types";
import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckCircle, AlertCircle, Loader, Landmark } from "lucide-react";

interface ContactTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function ContactTab({ setActiveTab }: ContactTabProps) {
  // Form State
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Retail Diesel Supply",
    estimatedVolume: "",
    frequency: "On-demand",
    deliveryAddress: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; quoteId?: string; error?: string } | null>(null);

  // Abuja distribution zone interactive representation
  const zones = [
    { name: "Central Business District", desc: "Corporate HQ - 15min Dispatch Area", coords: "x: 50%, y: 50%", active: true },
    { name: "Maitama & Asokoro", desc: "Premium Estates & Diplomatic Zone", coords: "x: 60%, y: 35%", active: true },
    { name: "Wuse & Garki", desc: "Commercial Offices & Hotels Corridor", coords: "x: 45%, y: 58%", active: true },
    { name: "Gwarinpa & Jabi", desc: "Residential Hubs & Construction Sites", coords: "x: 30%, y: 40%", active: true },
    { name: "Idu Industrial Layout", desc: "Heavy Factories & Manufacturing", coords: "x: 20%, y: 65%", active: true }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitResult(null);

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.deliveryAddress) {
      setSubmitResult({ success: false, error: "Please fill in all required fields." });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitResult({ success: true, quoteId: data.quoteId });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "Retail Diesel Supply",
          estimatedVolume: "",
          frequency: "On-demand",
          deliveryAddress: "",
          message: ""
        });
      } else {
        setSubmitResult({ success: false, error: data.error || "Failed to submit request." });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitResult({ success: false, error: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact-tab" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Contact Introduction Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
          <div className="w-12 h-1 bg-slate-900 mx-auto mb-2"></div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight uppercase">
            Connect &amp; Request a Quote
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Reach out to our centralized dispatch office in Abuja CBD or fill in the procurement detail form below. We provide fast, itemized commercial proposals within 60 minutes.
          </p>
        </div>

        {/* Info Blocks Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-slate-50 p-6 rounded-none border border-slate-200 flex gap-4 items-start">
            <div className="w-10 h-10 border border-slate-200 bg-white text-slate-900 rounded-none flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">Corporate HQ</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                (Address pending from client)
              </p>
            </div>
          </div>

          {/* Contact Methods Card */}
          <div className="bg-slate-50 p-6 rounded-none border border-slate-200 flex gap-4 items-start">
            <div className="w-10 h-10 border border-slate-200 bg-white text-slate-900 rounded-none flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs text-slate-500">
              <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">Direct Lines</h4>
              <p className="font-semibold text-slate-850">
                Phone: <span className="font-mono">(Pending from client)</span>
              </p>
              <p className="font-semibold text-slate-850">
                WhatsApp: <span className="font-mono">(Pending from client)</span>
              </p>
              <p className="font-semibold text-slate-850">
                Email: <span className="font-mono">(Pending from client)</span>
              </p>
            </div>
          </div>

          {/* Availability Card */}
          <div className="bg-slate-50 p-6 rounded-none border border-slate-200 flex gap-4 items-start">
            <div className="w-10 h-10 border border-slate-200 bg-white text-slate-900 rounded-none flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs text-slate-500 leading-relaxed">
              <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider">Business Hours</h4>
              <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 4:00 PM</p>
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Logistics Dispatch: 24/7/365 Standby
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Layout: Quote Form on Left, custom Abuja Logistics Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quote Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-none border border-slate-200 space-y-6">
            <div className="space-y-1.5">
              <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide">Request a Commercial Proposal</h3>
              <p className="text-xs text-slate-400">Provide your generator specifications and logistics requirements for a quick, itemized quote.</p>
            </div>

            {submitResult && (
              <div className={`p-4 rounded-none flex items-start gap-3 text-xs sm:text-sm ${
                submitResult.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
              }`}>
                {submitResult.success ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Quote Request Logged Successfully!</p>
                      <p className="text-xs mt-1 text-green-700">
                        Your custom proposal is being compiled under Reference ID: <strong className="font-mono bg-green-100 px-1 py-0.5 rounded-none">{submitResult.quoteId}</strong>. A logistics representative will email you shortly.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Submission Failed</p>
                      <p className="text-xs mt-1 text-red-700">{submitResult.error}</p>
                    </div>
                  </>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Your Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Aliyu Ibrahim"
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Corporate Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. ibrahim@company.com"
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Telephone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. +234 803 123 4567"
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Zenith Hotels & Suites"
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              {/* Service Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Service Required <span className="text-red-500">*</span></label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                >
                  <option value="Retail Diesel Supply">Retail Diesel Supply</option>
                  <option value="Bulk Fuel Delivery">Bulk Fuel Delivery</option>
                  <option value="Oil & Gas Logistics">Oil & Gas Logistics</option>
                  <option value="Emergency Delivery">Emergency Delivery</option>
                </select>
              </div>

              {/* Estimated Volume */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Estimated Volume (Litres)</label>
                <input
                  type="number"
                  name="estimatedVolume"
                  value={formData.estimatedVolume}
                  onChange={handleInputChange}
                  placeholder="e.g. 2500"
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              {/* Frequency */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Supply Frequency</label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                >
                  <option value="On-demand">On-demand / Emergency Drop</option>
                  <option value="Weekly">Weekly Scheduled Delivery</option>
                  <option value="Bi-weekly">Bi-weekly Scheduled Delivery</option>
                  <option value="Monthly">Monthly Scheduled Delivery</option>
                </select>
              </div>

              {/* Delivery Address */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Delivery Address in Abuja <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Plot 12, Garki Area 11, Abuja"
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-700">Additional Instructions / Generator Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your generator kVA capacity, access roads, or delivery timing constraints..."
                  className="px-3.5 py-2.5 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-900 transition-colors resize-none"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-900"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin text-white" />
                      <span>Processing Proposal...</span>
                    </>
                  ) : (
                    <span>Submit Quote Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Bespoke Abuja Vector Map Grid */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-none p-6 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-[9px] font-bold text-amber-500 uppercase tracking-widest">Zone Map</span>
              <h3 className="font-display font-bold text-base uppercase tracking-wide">Abuja Logistics Reach</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">Our logistics trucks operate across Abuja FCT Municipal and adjoining heavy industrial regions.</p>
            </div>

            {/* Custom Interactive SVG/CSS Vector Map of Abuja Districts */}
            <div className="relative h-64 bg-slate-950 border border-slate-800 rounded-none overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
              
              {/* SVG Grid background */}
              <svg className="absolute inset-0 w-full h-full text-slate-800/40 opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Map district markers */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping opacity-75"></div>
              <div className="absolute top-1/2 left-1/2 w-3.5 h-3.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[8px] font-black text-slate-950 shadow-md border-2 border-slate-900">
                ★
              </div>
              <div className="absolute top-[54%] left-[53%] font-mono text-[9px] bg-slate-900 border border-slate-800 text-white px-1.5 py-0.5 rounded-none font-bold whitespace-nowrap">
                Capella HQ (CBD)
              </div>

              {/* Other Zone Dots */}
              <div className="absolute top-[35%] left-[62%] w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="absolute top-[38%] left-[63%] font-mono text-[8px] text-slate-500">Maitama</div>

              <div className="absolute top-[62%] left-[42%] w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="absolute top-[65%] left-[43%] font-mono text-[8px] text-slate-500">Garki</div>

              <div className="absolute top-[40%] left-[32%] w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="absolute top-[40%] left-[17%] font-mono text-[8px] text-slate-500">Gwarinpa</div>

              <div className="absolute top-[68%] left-[22%] w-2 h-2 bg-slate-600 rounded-full"></div>
              <div className="absolute top-[71%] left-[23%] font-mono text-[8px] text-slate-500">Idu Industrial</div>
            </div>

            {/* List of active distribution sectors */}
            <div className="space-y-3.5 pt-2">
              <h4 className="font-display font-semibold text-xs tracking-wider text-slate-300 uppercase">Coverage Highlights</h4>
              <div className="grid grid-cols-1 gap-3 text-xs leading-relaxed">
                {zones.map((zone, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-1.5"></span>
                    <div>
                      <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider">{zone.name}</div>
                      <div className="text-[11px] text-slate-450">{zone.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
