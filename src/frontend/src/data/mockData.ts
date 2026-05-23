// Mock data for Smart Elderly Care System

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "elderly" | "caregiver";
  avatar?: string;
  age?: number;
  condition?: string;
  phone?: string;
}

export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  isActive: boolean;
  color: string;
  icon: string;
}

export interface MedicineReminder {
  id: string;
  medicineId: string;
  medicineName: string;
  scheduledTime: string;
  taken: boolean;
  takenAt?: string;
}

export interface EmergencyLog {
  id: string;
  timestamp: string;
  type: string;
  location: string;
  notified: boolean;
  resolved: boolean;
}

export interface VitalPoint {
  time: string;
  heartRate: number;
  oxygen: number;
  bp: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

// User profiles
export const mockUsers: UserProfile[] = [
  {
    id: "user-1",
    name: "Martha Johnson",
    email: "martha.johnson@email.com",
    role: "elderly",
    age: 74,
    condition: "Hypertension, Type 2 Diabetes",
    phone: "91894932189",
  },
  {
    id: "user-2",
    name: "Dr. Sarah Chen",
    email: "sarah.chen@healthcare.com",
    role: "caregiver",
    phone: "91894932189",
  },
];

// Sample medicines
export const mockMedicines: Medicine[] = [
  {
    id: "med-1",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Twice daily",
    times: ["08:00", "20:00"],
    isActive: true,
    color: "primary",
    icon: "💊",
  },
  {
    id: "med-2",
    name: "Vitamin D3",
    dosage: "2000 IU",
    frequency: "Once daily",
    times: ["09:00"],
    isActive: true,
    color: "secondary",
    icon: "🌟",
  },
  {
    id: "med-3",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Three times daily",
    times: ["07:00", "13:00", "19:00"],
    isActive: true,
    color: "accent",
    icon: "💉",
  },
];

// Today's reminders (relative to current time)
export const generateTodayReminders = (): MedicineReminder[] => {
  const now = new Date();
  const hours = now.getHours();
  return [
    {
      id: "rem-1",
      medicineId: "med-1",
      medicineName: "Lisinopril",
      scheduledTime: "08:00",
      taken: hours >= 9,
      takenAt: hours >= 9 ? "08:05" : undefined,
    },
    {
      id: "rem-2",
      medicineId: "med-3",
      medicineName: "Metformin",
      scheduledTime: "07:00",
      taken: hours >= 8,
      takenAt: hours >= 8 ? "07:10" : undefined,
    },
    {
      id: "rem-3",
      medicineId: "med-2",
      medicineName: "Vitamin D3",
      scheduledTime: "09:00",
      taken: hours >= 10,
      takenAt: hours >= 10 ? "09:15" : undefined,
    },
    {
      id: "rem-4",
      medicineId: "med-3",
      medicineName: "Metformin",
      scheduledTime: "13:00",
      taken: hours >= 14,
      takenAt: hours >= 14 ? "13:02" : undefined,
    },
    {
      id: "rem-5",
      medicineId: "med-1",
      medicineName: "Lisinopril",
      scheduledTime: "20:00",
      taken: false,
    },
    {
      id: "rem-6",
      medicineId: "med-3",
      medicineName: "Metformin",
      scheduledTime: "19:00",
      taken: false,
    },
  ];
};

// Emergency log entries
export const mockEmergencyLog: EmergencyLog[] = [
  {
    id: "emg-1",
    timestamp: "2026-05-07T14:23:00",
    type: "High Heart Rate",
    location: "Living Room — 40.7128°N, 74.0060°W",
    notified: true,
    resolved: true,
  },
  {
    id: "emg-2",
    timestamp: "2026-05-06T09:15:00",
    type: "Fall Detected",
    location: "Bathroom — 40.7128°N, 74.0060°W",
    notified: true,
    resolved: true,
  },
  {
    id: "emg-3",
    timestamp: "2026-05-04T22:40:00",
    type: "Low Oxygen Level",
    location: "Bedroom — 40.7128°N, 74.0060°W",
    notified: true,
    resolved: true,
  },
  {
    id: "emg-4",
    timestamp: "2026-05-02T16:55:00",
    type: "SOS Button Pressed",
    location: "Kitchen — 40.7128°N, 74.0060°W",
    notified: true,
    resolved: true,
  },
  {
    id: "emg-5",
    timestamp: "2026-04-29T08:30:00",
    type: "No Movement Detected",
    location: "Bedroom — 40.7128°N, 74.0060°W",
    notified: true,
    resolved: true,
  },
];

// 24-hour vitals history
export const generate24hVitals = (): VitalPoint[] => {
  const points: VitalPoint[] = [];
  const baseHR = 72;
  const baseO2 = 97;
  const baseBP = 118;
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, "0");
    const hrVariance = Math.sin(i * 0.4) * 8 + (Math.random() - 0.5) * 6;
    const o2Variance = (Math.random() - 0.5) * 3;
    const bpVariance = Math.sin(i * 0.3) * 6 + (Math.random() - 0.5) * 8;
    points.push({
      time: `${hour}:00`,
      heartRate: Math.round(baseHR + hrVariance),
      oxygen: Math.min(100, Math.max(90, Math.round(baseO2 + o2Variance))),
      bp: Math.round(baseBP + bpVariance),
    });
  }
  return points;
};

// Sample AI chat messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: "chat-1",
    role: "assistant",
    content:
      "Hello Martha! 👋 I'm your AI Health Assistant. I'm here to help you with health guidance, medication reminders, and wellness tips. How are you feeling today?",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
];

// AI response templates (keyword-based)
export const aiResponses: Record<string, string> = {
  dizzy:
    "I'm concerned about your dizziness. Please sit down immediately and drink a glass of water. Check if you've taken your medications on time. If the dizziness persists for more than 10 minutes, please press the SOS button or call Dr. Sarah Chen.",
  chest:
    "Chest pain or discomfort is serious and should not be ignored. Please sit down, stay calm, and press the SOS button now. Try to take slow, deep breaths while help is on the way.",
  pain: "I understand you're experiencing pain. Please describe where the pain is located and rate it from 1-10. If it's severe (7+) or accompanied by other symptoms, please contact your caregiver immediately.",
  medicine:
    "Your next scheduled medication is Lisinopril at 8:00 PM. Remember: take it with a full glass of water. Don't take it if you've already had it today. Would you like me to set a reminder?",
  tired:
    "Feeling tired is common and can have many causes. Make sure you're drinking enough water (aim for 8 glasses daily), getting adequate sleep, and taking gentle walks. If fatigue is persistent, it's worth mentioning to Dr. Chen at your next visit.",
  sleep:
    "Good sleep is essential for your health. Try to maintain a regular bedtime around 10 PM. Avoid screens an hour before bed, keep your bedroom cool and dark. Your average sleep this week has been 6.8 hours — slightly below the recommended 7-8 hours.",
  emergency:
    "If this is an emergency, please press the red SOS button immediately! I'm alerting your caregiver Dr. Sarah Chen and emergency services. Stay calm and stay where you are.",
  blood:
    "Your blood pressure today is within acceptable range. Continue taking your Lisinopril as prescribed. Reduce sodium intake and try light walking for 15-20 minutes daily. Stress management is also important for blood pressure control.",
  default:
    "Thank you for sharing that with me. I'm always here to help with your health questions. For urgent concerns, remember to use the SOS button or contact Dr. Sarah Chen directly. Is there anything specific you'd like to know about your health today?",
};
