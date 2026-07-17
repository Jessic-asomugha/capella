export type ActiveTab = "HOME" | "ABOUT" | "SERVICES" | "CONTACT" | "ENERGY_HUB";

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  estimatedVolume: string;
  frequency: string;
  deliveryAddress: string;
  message: string;
}

export interface EstimatorInput {
  generatorKva: string;
  runningHoursPerDay: string;
  businessType: string;
  averageLoad: string;
  daysOfBackupNeeded: string;
}

export interface EstimatorResult {
  hourlyConsumption: number;
  dailyConsumption: number;
  totalCalculated: number;
  tankRecommendation: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface QuoteSubmissionResult {
  id: string;
  name: string;
  email: string;
  serviceType: string;
  status: string;
  timestamp: string;
}
