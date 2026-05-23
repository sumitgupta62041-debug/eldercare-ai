import {
  aiResponses,
  generate24hVitals,
  generateTodayReminders,
  mockChatMessages,
  mockEmergencyLog,
  mockMedicines,
} from "@/data/mockData";
import type {
  ChatMessage,
  EmergencyLog,
  Medicine,
  MedicineReminder,
  VitalPoint,
} from "@/data/mockData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// ─── Auth Store ───────────────────────────────────────────────────────────────
interface AuthUser {
  name: string;
  email: string;
  role: "elderly" | "caregiver";
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (credentials: {
    email: string;
    password: string;
    role?: "elderly" | "caregiver";
  }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (credentials) => {
        const isCaregiver =
          credentials.role === "caregiver" ||
          credentials.email.includes("caregiver") ||
          credentials.email.includes("sarah") ||
          credentials.email.includes("doctor") ||
          credentials.email.includes("dr.");
        set({
          user: {
            name: isCaregiver ? "Dr. Sarah Chen" : "Martha Johnson",
            email: credentials.email,
            role: isCaregiver ? "caregiver" : "elderly",
          },
          isAuthenticated: true,
        });
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: "auth-store" },
  ),
);

// ─── Health Store ─────────────────────────────────────────────────────────────
interface HealthState {
  heartRate: number;
  bloodPressure: { systolic: number; diastolic: number };
  oxygenLevel: number;
  sleepHours: number;
  activityMinutes: number;
  activityStatus: "active" | "resting" | "sleeping";
  wellnessScore: number;
  vitalsHistory: VitalPoint[];
  simulationId: ReturnType<typeof setInterval> | null;
  updateVitals: () => void;
  startSimulation: () => void;
  stopSimulation: () => void;
}

export const useHealthStore = create<HealthState>()((set, get) => ({
  heartRate: 72,
  bloodPressure: { systolic: 118, diastolic: 78 },
  oxygenLevel: 97,
  sleepHours: 7.2,
  activityMinutes: 28,
  activityStatus: "resting",
  wellnessScore: 82,
  vitalsHistory: generate24hVitals(),
  simulationId: null,
  updateVitals: () => {
    const { heartRate, oxygenLevel, bloodPressure, vitalsHistory } = get();
    const newHR = Math.max(
      55,
      Math.min(130, heartRate + (Math.random() - 0.5) * 8),
    );
    const newO2 = Math.max(
      88,
      Math.min(100, oxygenLevel + (Math.random() - 0.5) * 2),
    );
    const newSystolic = Math.max(
      90,
      Math.min(160, bloodPressure.systolic + (Math.random() - 0.5) * 6),
    );
    const newDiastolic = Math.max(
      60,
      Math.min(100, bloodPressure.diastolic + (Math.random() - 0.5) * 4),
    );
    const activityOptions: HealthState["activityStatus"][] = [
      "active",
      "resting",
      "sleeping",
    ];
    const randomActivity =
      activityOptions[Math.floor(Math.random() * activityOptions.length)];
    const wellness = Math.round(
      (newO2 / 100) * 40 +
        (newHR < 100 ? 30 : 15) +
        (newSystolic < 140 ? 20 : 10) +
        Math.random() * 10,
    );
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    const newPoint: VitalPoint = {
      time: timeStr,
      heartRate: Math.round(newHR),
      oxygen: Math.round(newO2),
      bp: Math.round(newSystolic),
    };
    set({
      heartRate: Math.round(newHR),
      oxygenLevel: Math.round(newO2),
      bloodPressure: {
        systolic: Math.round(newSystolic),
        diastolic: Math.round(newDiastolic),
      },
      activityStatus: randomActivity,
      activityMinutes: Math.max(
        0,
        Math.min(120, get().activityMinutes + (Math.random() - 0.4) * 3),
      ),
      wellnessScore: Math.min(100, Math.max(40, wellness)),
      vitalsHistory: [...vitalsHistory.slice(-47), newPoint],
    });
  },
  startSimulation: () => {
    const { simulationId, updateVitals } = get();
    if (simulationId) return;
    const id = setInterval(() => {
      updateVitals();
    }, 5000);
    set({ simulationId: id });
  },
  stopSimulation: () => {
    const { simulationId } = get();
    if (simulationId) {
      clearInterval(simulationId);
    }
    set({ simulationId: null });
  },
}));

// ─── Medicine Store ───────────────────────────────────────────────────────────
interface MedicineState {
  medicines: Medicine[];
  reminders: MedicineReminder[];
  addMedicine: (medicine: Omit<Medicine, "id">) => void;
  removeMedicine: (id: string) => void;
  markTaken: (reminderId: string) => void;
  getTodayProgress: () => { taken: number; total: number };
  getOverdueReminders: () => MedicineReminder[];
}

export const useMedicineStore = create<MedicineState>()((set, get) => ({
  medicines: mockMedicines,
  reminders: generateTodayReminders(),
  addMedicine: (medicine) => {
    const newMedicine: Medicine = { ...medicine, id: `med-${Date.now()}` };
    set((state) => ({ medicines: [...state.medicines, newMedicine] }));
  },
  removeMedicine: (id) => {
    set((state) => ({
      medicines: state.medicines.filter((m) => m.id !== id),
      reminders: state.reminders.filter((r) => r.medicineId !== id),
    }));
  },
  markTaken: (reminderId) => {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    set((state) => ({
      reminders: state.reminders.map((r) =>
        r.id === reminderId ? { ...r, taken: true, takenAt: timeStr } : r,
      ),
    }));
    if ("speechSynthesis" in window) {
      const reminder = get().reminders.find((r) => r.id === reminderId);
      if (reminder) {
        const utter = new SpeechSynthesisUtterance(
          `${reminder.medicineName} marked as taken. Well done!`,
        );
        utter.rate = 0.85;
        window.speechSynthesis.speak(utter);
      }
    }
  },
  getTodayProgress: () => {
    const { reminders } = get();
    return {
      taken: reminders.filter((r) => r.taken).length,
      total: reminders.length,
    };
  },
  getOverdueReminders: () => {
    const { reminders } = get();
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    return reminders.filter((r) => !r.taken && r.scheduledTime < currentTime);
  },
}));

// ─── Emergency Store ──────────────────────────────────────────────────────────
interface EmergencyState {
  isEmergency: boolean;
  emergencyType: string;
  emergencyLog: EmergencyLog[];
  triggerSOS: () => void;
  triggerAutoEmergency: (type: string) => void;
  cancelEmergency: () => void;
  clearLog: () => void;
}

export const useEmergencyStore = create<EmergencyState>()((set, _get) => ({
  isEmergency: false,
  emergencyType: "",
  emergencyLog: mockEmergencyLog,
  triggerSOS: () => {
    const newEntry: EmergencyLog = {
      id: `emg-${Date.now()}`,
      timestamp: new Date().toISOString(),
      type: "SOS Button Pressed",
      location: "Home — GPS acquiring...",
      notified: true,
      resolved: false,
    };
    set((state) => ({
      isEmergency: true,
      emergencyType: "SOS Button Pressed",
      emergencyLog: [newEntry, ...state.emergencyLog],
    }));
    speakEmergency(
      "Emergency SOS activated. Contacting your caregiver immediately.",
    );
  },
  triggerAutoEmergency: (type) => {
    const newEntry: EmergencyLog = {
      id: `emg-${Date.now()}`,
      timestamp: new Date().toISOString(),
      type,
      location: "Home — 40.7128°N, 74.0060°W",
      notified: true,
      resolved: false,
    };
    set((state) => ({
      isEmergency: true,
      emergencyType: type,
      emergencyLog: [newEntry, ...state.emergencyLog],
    }));
    speakEmergency(
      "Emergency detected. Contacting your caregiver immediately.",
    );
  },
  cancelEmergency: () => {
    set((state) => ({
      isEmergency: false,
      emergencyType: "",
      emergencyLog: state.emergencyLog.map((e, i) =>
        i === 0 ? { ...e, resolved: true } : e,
      ),
    }));
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  },
  clearLog: () => set({ emergencyLog: [] }),
}));

function speakEmergency(text: string) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.9;
    utter.pitch = 1.1;
    utter.volume = 1;
    window.speechSynthesis.speak(utter);
  }
}

// ─── Chat Store ───────────────────────────────────────────────────────────────
interface ChatState {
  messages: ChatMessage[];
  isTyping: boolean;
  sendMessage: (text: string) => void;
}

export const useChatStore = create<ChatState>()((set) => ({
  messages: mockChatMessages,
  isTyping: false,
  sendMessage: (text) => {
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };
    set((state) => ({
      messages: [...state.messages, userMsg],
      isTyping: true,
    }));
    setTimeout(
      () => {
        const lower = text.toLowerCase();
        let response = aiResponses.default;
        for (const [key, value] of Object.entries(aiResponses)) {
          if (lower.includes(key)) {
            response = value;
            break;
          }
        }
        const aiMsg: ChatMessage = {
          id: `msg-${Date.now() + 1}`,
          role: "assistant",
          content: response,
          timestamp: new Date().toISOString(),
        };
        set((state) => ({
          messages: [...state.messages, aiMsg],
          isTyping: false,
        }));
      },
      800 + Math.random() * 700,
    );
  },
}));

// ─── Settings Store ───────────────────────────────────────────────────────────
interface SettingsState {
  theme: "dark" | "light";
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  language: string;
  toggleTheme: () => void;
  toggleSound: () => void;
  toggleNotifications: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      soundEnabled: true,
      notificationsEnabled: true,
      language: "en",
      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark";
        set({ theme: newTheme });
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
      toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),
      toggleNotifications: () =>
        set((s) => ({ notificationsEnabled: !s.notificationsEnabled })),
    }),
    { name: "settings-store" },
  ),
);
