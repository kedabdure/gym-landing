// Program data model
export interface Program {
  id: string;
  number: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  accent: string;
}

// Registration data model
export interface RegistrationData {
  program: string;
  fullName: string;
  email: string;
  phone: string;
  submittedAt?: string;
}

// Form step types
export type FormStep = "program" | "info" | "success";
