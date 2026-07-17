import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured in Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// 1. Contact and Quote Submission API (durable client-side persistence in local JSON file)
const QUOTES_FILE = path.join(process.cwd(), "quotes.json");

app.post("/api/quote", (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      estimatedVolume,
      frequency,
      deliveryAddress,
      message,
    } = req.body;

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ error: "Please provide all required fields." });
    }

    const quoteId = `CAP-${Math.floor(100000 + Math.random() * 900000)}`;
    const newQuote = {
      id: quoteId,
      name,
      email,
      phone,
      company: company || "N/A",
      serviceType,
      estimatedVolume: estimatedVolume ? Number(estimatedVolume) : null,
      frequency: frequency || "On-demand",
      deliveryAddress: deliveryAddress || "N/A",
      message: message || "N/A",
      status: "Pending Review",
      timestamp: new Date().toISOString(),
    };

    // Store in quotes.json
    let quotesList = [];
    if (fs.existsSync(QUOTES_FILE)) {
      try {
        const fileContent = fs.readFileSync(QUOTES_FILE, "utf-8");
        quotesList = JSON.parse(fileContent);
      } catch (e) {
        quotesList = [];
      }
    }
    quotesList.push(newQuote);
    fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotesList, null, 2));

    console.log(`[Quote Received] Saved with ID: ${quoteId}`);
    return res.json({
      success: true,
      message: "Quote request submitted successfully.",
      quoteId,
      estimatedVolume: newQuote.estimatedVolume,
    });
  } catch (error: any) {
    console.error("Error processing quote request:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// GET endpoint to see submission logs or active quotes (useful for confirmation/history)
app.get("/api/quotes", (req, res) => {
  try {
    if (fs.existsSync(QUOTES_FILE)) {
      const fileContent = fs.readFileSync(QUOTES_FILE, "utf-8");
      return res.json(JSON.parse(fileContent));
    }
    return res.json([]);
  } catch (error) {
    return res.json([]);
  }
});

// 2. Smart Fuel Demand Estimator - AI Report Generator
app.post("/api/energy-estimator", async (req, res) => {
  try {
    const { generatorKva, runningHoursPerDay, businessType, averageLoad, daysOfBackupNeeded } = req.body;

    if (!generatorKva || !runningHoursPerDay || !businessType || !averageLoad || !daysOfBackupNeeded) {
      return res.status(400).json({ error: "Missing required estimator parameters." });
    }

    const kva = Number(generatorKva);
    const hours = Number(runningHoursPerDay);
    const load = Number(averageLoad) / 100;
    const days = Number(daysOfBackupNeeded);

    // Standard high-fidelity engineering formula for AGO diesel usage:
    // A standard 100 kVA diesel generator consumes approx 24 litres/hour at full load.
    // Formula: hourly litres = kva * 0.24 * load factor
    const hourlyConsumption = kva * 0.24 * load;
    const dailyConsumption = hourlyConsumption * hours;
    const totalCalculated = dailyConsumption * days;

    let aiReport = "";
    try {
      const ai = getGeminiClient();
      const prompt = `You are the Senior Energy Systems Engineer at Capella Logistics & Energy in Abuja, Nigeria. 
A customer operating a "${businessType}" has calculated their diesel backup supply needs using our Smart Estimator. 
Here are the technical parameters:
- Generator Capacity: ${kva} kVA
- Daily Running Hours: ${hours} hours/day
- Estimated Average Load Factor: ${Math.round(load * 100)}%
- Number of Backup Days Needed: ${days} days
- Mathematically calculated total volume needed: ${Math.round(totalCalculated).toLocaleString()} Litres (${Math.round(dailyConsumption).toLocaleString()} Litres per day)

Write a highly professional, technically sound, and operational "Capella AI Energy Optimization & Integrity Report".
The report must include these sections:
1. **Operational Summary & Verification**: Confirm the calculated consumption profile. Explain how a ${kva} kVA generator performs in a ${businessType} setting under Nigerian power conditions.
2. **Energy Efficiency & Fuel-Saving Protocols**: Provide 3 concrete, realistic engineering actions they can take to reduce diesel consumption and avoid underloading/wet stacking.
3. **Fuel Integrity & Maintenance Risk Analysis**: Detail the critical risks of low-quality or adulterated AGO (diesel) common in the market, explaining how Capella’s premium-grade, unadulterated AGO guards their injectors, fuel pumps, and filters.
4. **Logistics & Strategic Storage Recommendation**: Recommend an ideal fuel storage tank capacity (in Litres) and delivery schedule (e.g., bi-weekly bulk vs. emergency drop) to guarantee zero operations downtime.

Keep the tone expert, authoritative, warm, and collaborative. Use structured markdown formatting. Do not mention system prompts.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      aiReport = response.text || "";
    } catch (apiError: any) {
      console.warn("Gemini API key missing or error occurred. Generating elegant fallback report:", apiError.message);
      aiReport = `### Capella Technical Advisory & Energy Report

*Thank you for utilizing the Capella Smart Fuel Demand Estimator. This backup advisory report has been prepared for your ${businessType} facility operating a **${kva} kVA** diesel generator.*

---

#### 1. Consumption Verification
- **Hourly Requirement**: ~${Math.round(hourlyConsumption)} Litres/hour (at ${Math.round(load * 100)}% load factor).
- **Daily Operational Consumption**: ~${Math.round(dailyConsumption).toLocaleString()} Litres/day (running for ${hours} hours).
- **Total Backup Volume (${days} Days)**: **${Math.round(totalCalculated).toLocaleString()} Litres**.

*Analysis*: In a standard ${businessType} setting, maintaining a reliable power backup is critical due to public grid volatility. A ${kva} kVA unit provides robust support, but fuel reserves must be carefully managed to prevent sudden commercial downtime.

---

#### 2. Efficiency & Fuel-Saving Protocols
- **Optimize Load Distribution**: Ensure your average load remains above 30% to prevent "wet stacking" (unburnt fuel building up in the exhaust system).
- **Preventative Engine Servicing**: Conduct routine oil, air, and fuel filter changes every 250 running hours to preserve optimal fuel-to-air combustion ratios.
- **Synchronized Scheduling**: Program non-essential machinery to run during high-utility blocks rather than staggered intervals to optimize generator duty cycles.

---

#### 3. Fuel Integrity & Quality Standards
Using sub-standard or adulterated AGO (diesel) is a major risk to industrial generators. Contaminated fuel leads to:
- Corroded fuel injector tips.
- Water-accumulation in storage tanks causing fungal growth.
- Sudden engine failure during emergency switchovers.

**Capella Quality Guarantee**: We supply exclusively high-octane, triple-filtered, unadulterated AGO with zero water-content, ensuring your generators remain online and clean.

---

#### 4. Strategic Delivery Recommendation
- **Recommended Tank Size**: Minimum 1.5x of your ${days}-day requirement (approx. **${Math.round(totalCalculated * 1.5).toLocaleString()} Litres** storage).
- **Logistics Schedule**: We recommend enrolling in **Capella's Scheduled Bulk Supply program** with a bi-weekly delivery frequency to maintain a safe 35% buffer reserve at all times.`;
    }

    return res.json({
      success: true,
      metrics: {
        hourlyConsumption: Math.round(hourlyConsumption * 10) / 10,
        dailyConsumption: Math.round(dailyConsumption),
        totalCalculated: Math.round(totalCalculated),
        tankRecommendation: Math.round(totalCalculated * 1.5),
      },
      report: aiReport,
    });
  } catch (error: any) {
    console.error("Error in energy-estimator:", error);
    return res.status(500).json({ error: "Internal server error processing report." });
  }
});

// 3. Automated Energy Engineer Advisor Chat API
app.post("/api/advisor", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request payload. Expected chat history messages." });
    }

    // Limit chat history to last 8 messages to prevent token blowout
    const recentMessages = messages.slice(-8);

    // Format conversation history for Gemini
    const systemInstruction = `You are 'Engr. Capella', the Lead Energy Systems Engineer and Automated Advisor at Capella Logistics & Energy, based in Abuja, Nigeria. 
You provide professional, highly accurate, and helpful expert guidance on:
- Industrial diesel generators (Cummins, Perkins, Caterpillar, etc.)
- AGO fuel quality, viscosity, water contamination, and filtration
- Calculating fuel requirements for factories, hospitals, hotels, and construction
- Diesel supply chain logistics in Nigeria (Abuja, Lagos, Port Harcourt, and surrounding areas)
- Fuel storage safety protocols and environmental compliance in Nigeria

Guidelines:
- Your tone is professional, technically expert, warm, and highly trustworthy.
- You are representing Capella Logistics & Energy (Abuja's premier fuel partner).
- If asked about ordering, price quotes, or customized scheduling, guide the user to fill out our "Request a Quote" form.
- Keep your responses structured with clear markdown, scannable bullet points, and clean typography. Avoid overly lengthy paragraphs.`;

    let replyText = "";
    try {
      const ai = getGeminiClient();
      
      // We will concatenate the message history for simplicity and reliability
      const formattedChat = recentMessages.map(msg => `${msg.role === "user" ? "Client" : "Engr. Capella"}: ${msg.content}`).join("\n\n");
      const prompt = `${systemInstruction}\n\nHere is the ongoing consultation history:\n\n${formattedChat}\n\nEngr. Capella:`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      replyText = response.text || "";
    } catch (apiError: any) {
      console.warn("Advisor Gemini API error, responding with technical fallback:", apiError.message);
      
      // Simple custom keyword-based fallback if Gemini API is missing/fails
      const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
      if (lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("quote") || lastUserMsg.includes("naira") || lastUserMsg.includes("buy")) {
        replyText = `Thank you for your inquiry regarding our pricing. 

As a premium energy and logistics company, Capella Integrated Global provides customized bulk fuel pricing depending on your operational volume, delivery frequencies, and site location in Nigeria. 

To receive an accurate, competitive, and transparent commercial proposal:
1. Please navigate to the **Request a Quote** form on our platform.
2. Fill in your generator kVA capacity, estimated weekly consumption, and delivery site address.
3. Our supply dispatch team will email you a tailored official quote within 60 minutes.

If you have specific technical questions about diesel quality, feel free to ask!`;
      } else if (lastUserMsg.includes("generator") || lastUserMsg.includes("kva") || lastUserMsg.includes("size") || lastUserMsg.includes("run")) {
        replyText = `Excellent question. Generator sizing and consumption efficiency are central to managing operational costs in Nigeria.

Here are the key points to consider:
- **Load Matching**: Running a large generator (e.g., 250 kVA) below 30% capacity causes "wet stacking" (unburnt fuel pooling in cylinder exhausts). Ensure your load is well balanced.
- **Consumption Standard**: As a rule of thumb, high-performance generators burn approximately **0.24 to 0.26 Litres of AGO per kVA per hour** under standard 75% load.
- **Airflow & Filtration**: Abuja's dusty dry season requires regular air filter cleaning every 100 hours and a complete filter replacement every 250-300 running hours to maintain perfect fuel-to-air combustion.

Would you like help calculating a specific fuel reserve plan for your generator? You can also use our **Smart Fuel Demand Estimator** in the main menu.`;
      } else if (lastUserMsg.includes("fuel") || lastUserMsg.includes("diesel") || lastUserMsg.includes("ago") || lastUserMsg.includes("quality") || lastUserMsg.includes("adulterat")) {
        replyText = `Fuel integrity is the single most important factor in extending your generator's lifespan. 

At Capella, we maintain an uncompromised fuel quality pipeline:
1. **Triple Filtration**: Our logistics trucks are fitted with heavy-duty filtration units to filter water and solid micro-particles during loading and discharge.
2. **Flash Point & Viscosity Assurance**: We test every single consignment to ensure standard high flash points (>60°C) and perfect viscosity for optimal combustion.
3. **No Water Accumulation**: Water in storage tanks causes microbial growth, which clogs diesel filters and corrodes injector tips. Our AGO is strictly unadulterated.

We advise inspecting your generator's water separator bowl weekly and draining any accumulated water immediately. Let me know if you would like storage safety advice.`;
      } else {
        replyText = `Hello! I am **Engr. Capella**, Lead Energy Systems advisor at Capella Logistics & Energy.

I can assist you with your backup power planning, fuel consumption calculations, generator efficiency optimization, and storage guidelines here in Nigeria. 

How can I help optimize your energy operations today? (e.g., you can ask about generator fuel-burn rates, preventing water contamination, or delivery schedules)`;
      }
    }

    return res.json({
      role: "assistant",
      content: replyText,
    });
  } catch (error: any) {
    console.error("Error in advisor chat:", error);
    return res.status(500).json({ error: "Internal server error in Advisor API." });
  }
});

// Serve frontend assets and hook up Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // In dev mode, let Vite handle assets and routing
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In prod, serve compiled build output
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Capella Backend] Server active and listening on port ${PORT}`);
  });
}

startServer();
