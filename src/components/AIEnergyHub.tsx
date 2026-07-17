import React, { useState, useRef, useEffect } from "react";
import { EstimatorInput, EstimatorResult, ChatMessage } from "../types";
import { Cpu, Zap, Calculator, MessageSquare, ArrowRight, Sparkles, Loader, User, HelpCircle, Check, ShieldCheck, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function AIEnergyHub() {
  const [activeSubTab, setActiveSubTab] = useState<"ESTIMATOR" | "ADVISOR">("ESTIMATOR");

  // --- Estimator State ---
  const [estimatorInput, setEstimatorInput] = useState<EstimatorInput>({
    generatorKva: "100",
    runningHoursPerDay: "12",
    businessType: "Hotel / Hospitality",
    averageLoad: "75",
    daysOfBackupNeeded: "7"
  });

  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportResult, setReportResult] = useState<{ metrics: EstimatorResult; report: string } | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    "Computing thermal efficiency profiles...",
    "Analyzing load factor burn metrics...",
    "Synthesizing AGO quality safety metrics...",
    "Drafting customized Abuja storage schedule...",
    "Assembling final technical advisory report..."
  ];

  // Real-time local estimation calculations (using the same formula as the backend)
  const calculateLocalMetrics = (): EstimatorResult => {
    const kva = Number(estimatorInput.generatorKva) || 100;
    const hours = Number(estimatorInput.runningHoursPerDay) || 12;
    const load = (Number(estimatorInput.averageLoad) || 75) / 100;
    const days = Number(estimatorInput.daysOfBackupNeeded) || 7;

    const hourlyConsumption = kva * 0.24 * load;
    const dailyConsumption = hourlyConsumption * hours;
    const totalCalculated = dailyConsumption * days;
    const tankRecommendation = totalCalculated * 1.5;

    return {
      hourlyConsumption: Math.round(hourlyConsumption * 10) / 10,
      dailyConsumption: Math.round(dailyConsumption),
      totalCalculated: Math.round(totalCalculated),
      tankRecommendation: Math.round(tankRecommendation)
    };
  };

  const localMetrics = calculateLocalMetrics();

  // Handle Estimator Form Submit
  const handleGenerateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingReport(true);
    setReportResult(null);
    setLoadingStep(0);

    // Dynamic loading text transition
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
    }, 1200);

    try {
      const res = await fetch("/api/energy-estimator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(estimatorInput)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setReportResult({
          metrics: data.metrics,
          report: data.report
        });
      }
    } catch (err) {
      console.error("Error generating AI report:", err);
    } finally {
      clearInterval(interval);
      setIsGeneratingReport(false);
    }
  };

  // --- Advisor State ---
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      role: "assistant",
      content: `Hello! I am **Engr. Capella**, Lead Energy Systems advisor at Capella Logistics & Energy based in Abuja.

I can assist you with:
- Industrial generator diesel consumption burn-rates (Perkins, Cummins, etc.)
- AGO fuel quality checks, preventing water contamination, and filtration
- Backup power scheduling for offices, factories, hospitals, or estates
- Diesel bulk fuel supply logistics and storage safety guidelines.

What questions can I resolve for your operations today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendChatMessage = async (msgText: string) => {
    if (!msgText.trim()) return;
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: msgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setIsChatLoading(true);

    try {
      const payloadMessages = [...chatMessages, userMsg].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages })
      });
      const data = await res.json();
      if (res.ok && data.content) {
        setChatMessages((prev) => [
          ...prev,
          {
            id: `adv-${Date.now()}`,
            role: "assistant",
            content: data.content,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsChatLoading(false);
    }
  };

  const suggestedQuestions = [
    "How to prevent wet stacking in my generator?",
    "What is AGO fuel adulteration and how do I spot it?",
    "Estimate fuel burn for a 250 kVA Cummins generator.",
    "What size diesel storage tank do I need for 10 days of backup?"
  ];

  return (
    <div id="ai-energy-hub" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hub Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="w-12 h-1 bg-slate-900 mx-auto mb-2"></div>
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4" />
            Intelligent Power Tools
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight uppercase">
            Capella AI Energy Hub
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Harness modern artificial intelligence to calculate your bulk diesel requirements, draft operational reports, or consult our automated Senior Energy Engineer advisor.
          </p>

          {/* Sub Tab Switcher Buttons */}
          <div className="flex justify-center p-1 bg-slate-100 rounded-none max-w-md mx-auto mt-6 border border-slate-200">
            <button
              onClick={() => setActiveSubTab("ESTIMATOR")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeSubTab === "ESTIMATOR"
                  ? "bg-slate-900 text-white shadow-none"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Demand Estimator</span>
            </button>
            <button
              onClick={() => setActiveSubTab("ADVISOR")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                activeSubTab === "ADVISOR"
                  ? "bg-slate-900 text-white shadow-none"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Energy Advisor</span>
            </button>
          </div>
        </div>

        {/* --- ESTIMATOR VIEW --- */}
        {activeSubTab === "ESTIMATOR" && (
          <div id="estimator-subview" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Calculator Settings Form */}
            <form onSubmit={handleGenerateReport} className="lg:col-span-5 bg-slate-50 p-6 rounded-none border border-slate-200 space-y-5">
              <div className="border-b border-slate-200 pb-3 flex items-center gap-2 text-slate-800">
                <Calculator className="w-5 h-5 text-slate-900" />
                <h3 className="font-display font-bold text-xs uppercase tracking-wider">Demand Calculator</h3>
              </div>

              {/* Generator size */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-750">Generator capacity (kVA)</label>
                <select
                  value={estimatorInput.generatorKva}
                  onChange={(e) => setEstimatorInput({ ...estimatorInput, generatorKva: e.target.value })}
                  className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-none text-xs sm:text-sm focus:outline-none focus:border-slate-950"
                >
                  <option value="20">20 kVA (Small estate/Retail shop)</option>
                  <option value="50">50 kVA (Commercial office / School)</option>
                  <option value="100">100 kVA (Medium office block / Hotel)</option>
                  <option value="250">250 kVA (Hospital / Mall / Construction)</option>
                  <option value="500">500 kVA (Large factory / Telecom hub)</option>
                  <option value="1000">1000 kVA (Heavy industrial facility)</option>
                </select>
              </div>

              {/* Business Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-750">Operational setting</label>
                <select
                  value={estimatorInput.businessType}
                  onChange={(e) => setEstimatorInput({ ...estimatorInput, businessType: e.target.value })}
                  className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-none text-xs sm:text-sm focus:outline-none focus:border-slate-950"
                >
                  <option value="Hospital / Healthcare">Hospital / Healthcare</option>
                  <option value="Hotel / Hospitality">Hotel / Hospitality</option>
                  <option value="Manufacturing Factory">Manufacturing Factory</option>
                  <option value="Office Complex / Corporate">Office Complex / Corporate</option>
                  <option value="Residential Estate / Apartment">Residential Estate / Apartment</option>
                  <option value="Construction Site">Construction Site</option>
                </select>
              </div>

              {/* Running Hours per Day */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-755">Daily generator run time</span>
                  <span className="font-mono bg-slate-200 px-2 py-0.5 rounded-none font-bold text-slate-800">{estimatorInput.runningHoursPerDay} hrs</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="24"
                  step="1"
                  value={estimatorInput.runningHoursPerDay}
                  onChange={(e) => setEstimatorInput({ ...estimatorInput, runningHoursPerDay: e.target.value })}
                  className="w-full h-1.5 bg-gray-200 rounded-none appearance-none cursor-pointer accent-slate-900"
                />
              </div>

              {/* Average Load Factor */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-755">Average operational load factor</span>
                  <span className="font-mono bg-slate-200 px-2 py-0.5 rounded-none font-bold text-slate-800">{estimatorInput.averageLoad}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  step="5"
                  value={estimatorInput.averageLoad}
                  onChange={(e) => setEstimatorInput({ ...estimatorInput, averageLoad: e.target.value })}
                  className="w-full h-1.5 bg-gray-200 rounded-none appearance-none cursor-pointer accent-slate-900"
                />
              </div>

              {/* Days of Backup Needed */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-755">Backup storage duration (days)</label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={estimatorInput.daysOfBackupNeeded}
                  onChange={(e) => setEstimatorInput({ ...estimatorInput, daysOfBackupNeeded: e.target.value })}
                  className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-none text-xs sm:text-sm focus:outline-none focus:border-slate-950"
                />
              </div>

              {/* Trigger button */}
              <button
                type="submit"
                disabled={isGeneratingReport}
                className="w-full mt-3 py-3.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-900"
              >
                {isGeneratingReport ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin text-white" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>Generate AI Advisory Report</span>
                  </>
                )}
              </button>
            </form>

            {/* Results Display Area (Live numbers + AI Report) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quick statistics preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-4 rounded-none border border-slate-200 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider mb-1">Hourly Burn</div>
                  <div className="font-display font-bold text-slate-900 text-xl sm:text-2xl font-mono">{localMetrics.hourlyConsumption} L</div>
                  <div className="text-[10px] text-slate-400">estimated average</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-none border border-slate-200 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider mb-1">Daily Total</div>
                  <div className="font-display font-bold text-slate-900 text-xl sm:text-2xl font-mono">{localMetrics.dailyConsumption.toLocaleString()} L</div>
                  <div className="text-[10px] text-slate-400">estimated daily</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-none border border-slate-200 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider mb-1">Total Backup</div>
                  <div className="font-display font-bold text-slate-900 text-xl sm:text-2xl font-mono">{localMetrics.totalCalculated.toLocaleString()} L</div>
                  <div className="text-[10px] text-slate-400">for {estimatorInput.daysOfBackupNeeded} days</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-none border border-slate-200 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider mb-1">Tank Rec</div>
                  <div className="font-display font-bold text-slate-900 text-xl sm:text-2xl font-mono">{localMetrics.tankRecommendation.toLocaleString()} L</div>
                  <div className="text-[10px] text-slate-400">1.5x safe volume</div>
                </div>
              </div>

              {/* Report Render Screen */}
              <div className="bg-white border border-slate-200 rounded-none overflow-hidden min-h-80 flex flex-col">
                <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-white" />
                    <span className="font-display font-bold text-xs uppercase tracking-wider">Capella Energy Optimization Report</span>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-450 uppercase bg-slate-800 px-2 py-0.5 rounded-none">
                    PDF format available upon delivery
                  </span>
                </div>

                {isGeneratingReport ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-4">
                    <Loader className="w-10 h-10 animate-spin text-slate-900" />
                    <div className="space-y-1.5">
                      <p className="font-semibold text-slate-800 text-sm animate-pulse">
                        {loadingMessages[loadingStep]}
                      </p>
                      <p className="text-xs text-slate-400">Our deep thermal model is processing generator telemetry...</p>
                    </div>
                  </div>
                ) : reportResult ? (
                  <div className="p-6 sm:p-8 overflow-y-auto max-h-120 prose prose-slate max-w-none text-xs sm:text-sm prose-p:leading-relaxed prose-headings:font-display prose-headings:tracking-tight prose-headings:font-bold prose-hr:border-slate-150">
                    <ReactMarkdown>{reportResult.report}</ReactMarkdown>
                    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-4 h-4 text-green-600" />
                        Report generated dynamically using Capella Systems Engine.
                      </span>
                      <button
                        onClick={() => {
                          const quoteBtn = document.getElementById("hero-request-quote-btn");
                          if (quoteBtn) quoteBtn.click();
                        }}
                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-none transition-all text-center border border-slate-900"
                      >
                        Book Bulk Delivery Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-3 bg-slate-50/50">
                    <div className="w-14 h-14 bg-slate-100 rounded-none border border-slate-200 flex items-center justify-center text-slate-900">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="space-y-1 max-w-sm">
                      <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">Review Your Consumption Profile</h4>
                      <p className="text-xs text-slate-500 leading-normal">
                        Fill in your generator parameters and click **"Generate AI Advisory Report"** to receive an engineering briefing.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- ADVISOR VIEW (CHAT SCREEN) --- */}
        {activeSubTab === "ADVISOR" && (
          <div id="advisor-subview" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left sidebar - FAQ quick prompts */}
            <div className="lg:col-span-4 bg-slate-50 p-5 rounded-none border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-slate-800 border-b border-slate-200 pb-3">
                <HelpCircle className="w-4 h-4 text-slate-900" />
                <h4 className="font-display font-bold text-xs uppercase tracking-wider">Suggested Questions</h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">Click a quick question below to consult our automated advisor instantly.</p>
              
              <div className="flex flex-col gap-2.5 pt-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendChatMessage(q)}
                    disabled={isChatLoading}
                    className="w-full text-left p-3 rounded-none bg-white hover:bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold transition-all hover:border-slate-950 disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Conversation Engine */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-none flex flex-col h-140">
              {/* Advisor Info Bar */}
              <div className="bg-slate-900 text-white px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-none flex items-center justify-center text-white font-display font-bold text-sm shrink-0 border border-slate-700">
                  EC
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-100 uppercase tracking-wider">Engr. Capella</h4>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Senior Energy Advisor • Active
                  </p>
                </div>
              </div>

              {/* Message scroll list */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/40">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 max-w-4xl ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role !== "user" && (
                      <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 self-end mb-1 rounded-none border border-slate-850">
                        EC
                      </div>
                    )}
                    
                    <div className="space-y-1 max-w-[85%]">
                      <div
                        className={`p-4 rounded-none text-xs sm:text-sm leading-relaxed prose prose-slate max-w-none ${
                          msg.role === "user"
                            ? "bg-slate-900 text-white font-medium border border-slate-900"
                            : "bg-white text-slate-800 border border-slate-200"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        ) : (
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        )}
                      </div>
                      <div className={`text-[10px] text-slate-400 font-mono ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {msg.timestamp}
                      </div>
                    </div>

                    {msg.role === "user" && (
                      <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 self-end mb-1 rounded-none border border-slate-850">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {isChatLoading && (
                  <div className="flex gap-3 justify-start items-center text-slate-400 text-xs italic">
                    <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 rounded-none border border-slate-850">
                      EC
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-none flex items-center gap-2">
                      <Loader className="w-4 h-4 animate-spin text-slate-900" />
                      <span>Engr. Capella is formulating advice...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendChatMessage(chatInput);
                }}
                className="p-4 border-t border-slate-200 bg-white flex gap-3 items-center"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  disabled={isChatLoading}
                  placeholder="Ask Engr. Capella a technical or operational question..."
                  className="flex-1 px-4 py-3 border border-slate-200 rounded-none text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-slate-950"
                />
                <button
                  type="submit"
                  disabled={isChatLoading || !chatInput.trim()}
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white disabled:text-slate-400 font-sans font-bold text-xs uppercase tracking-widest rounded-none transition-all cursor-pointer border border-slate-900"
                >
                  Consult
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
