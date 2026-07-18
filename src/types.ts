export type ActiveTab = "HOME" | "ABOUT" | "SERVICES" | "CONTACT";

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



export interface QuoteSubmissionResult {
  id: string;
  name: string;
  email: string;
  serviceType: string;
  status: string;
  timestamp: string;
}
