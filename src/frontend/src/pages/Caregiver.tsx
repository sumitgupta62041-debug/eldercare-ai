import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  generate24hVitals,
  mockEmergencyLog,
  mockMedicines,
} from "@/data/mockData";
import { AppLayout } from "@/layouts/AppLayout";
import { useEmergencyStore, useHealthStore, useMedicineStore } from "@/store";
import {
  Activity,
  AlertTriangle,
  Bell,
  BellOff,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Phone,
  Pill,
  Shield,
  TrendingUp,
  User,
  Wind,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import type { ElementType } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ── Types ──────────────────────────────────────────────────────────────────
interface Notification {
  id: string;
  type: "medicine" | "emergency" | "wellness";
  message: string;
  timestamp: string;
  read: boolean;
}

interface TimelineEvent {
  id: string;
  time: string;
  label: string;
  icon: "wake" | "medicine" | "alert" | "reminder" | "check";
}

// ── Static data ────────────────────────────────────────────────────────────
const TODAY_TIMELINE: TimelineEvent[] = [
  {
    id: "t1",
    time: "7:30 AM",
    label: "Woke up — good morning routine",
    icon: "wake",
  },
  {
    id: "t2",
    time: "8:00 AM",
    label: "Took Blood Pressure Medicine (Lisinopril 10mg)",
    icon: "medicine",
  },
  {
    id: "t3",
    time: "8:15 AM",
    label: "Completed morning walk — 12 min",
    icon: "check",
  },
  {
    id: "t4",
    time: "9:10 AM",
    label: "Took Vitamin D3 supplement",
    icon: "medicine",
  },
  {
    id: "t5",
    time: "10:23 AM",
    label: "Heart rate elevated alert triggered (HR 118)",
    icon: "alert",
  },
  {
    id: "t6",
    time: "12:00 PM",
    label: "Medication reminder sent — Metformin 500mg",
    icon: "reminder",
  },
  {
    id: "t7",
    time: "1:05 PM",
    label: "Took Metformin — afternoon dose confirmed",
    icon: "medicine",
  },
  {
    id: "t8",
    time: "2:30 PM",
    label: "Wellness check — all vitals normal",
    icon: "check",
  },
];

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    type: "medicine",
    message: "Lisinopril 20:00 dose overdue — not taken yet",
    timestamp: "2026-05-08T20:15:00",
    read: false,
  },
  {
    id: "n2",
    type: "emergency",
    message: "Emergency resolved — High Heart Rate at 14:23",
    timestamp: "2026-05-07T14:30:00",
    read: false,
  },
  {
    id: "n3",
    type: "wellness",
    message: "Weekly wellness check due — Friday 6:00 PM",
    timestamp: "2026-05-08T18:00:00",
    read: false,
  },
  {
    id: "n4",
    type: "medicine",
    message: "Metformin 19:00 dose reminder sent to Martha",
    timestamp: "2026-05-08T19:00:00",
    read: false,
  },
  {
    id: "n5",
    type: "wellness",
    message: "Sleep quality below average this week (6.2 hrs avg)",
    timestamp: "2026-05-08T07:00:00",
    read: true,
  },
];

const ADHERENCE_7DAY = [
  { day: "Mon", adherence: 83 },
  { day: "Tue", adherence: 100 },
  { day: "Wed", adherence: 67 },
  { day: "Thu", adherence: 100 },
  { day: "Fri", adherence: 83 },
  { day: "Sat", adherence: 100 },
  { day: "Sun", adherence: 50 },
];

const WELLNESS_7DAY = [
  { day: "Mon", score: 78 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 85 },
  { day: "Fri", score: 80 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 84 },
];

// ── Sub-components ─────────────────────────────────────────────────────────
function StatusBadge({
  value,
}: { value: "clear" | "attention" | "emergency" }) {
  if (value === "emergency")
    return (
      <Badge className="bg-destructive/20 text-destructive border border-destructive/40 animate-pulse">
        <AlertTriangle className="h-3 w-3 mr-1" /> Emergency
      </Badge>
    );
  if (value === "attention")
    return (
      <Badge className="bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30">
        <AlertTriangle className="h-3 w-3 mr-1" /> Attention Needed
      </Badge>
    );
  return (
    <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
      <CheckCircle2 className="h-3 w-3 mr-1" /> All Clear
    </Badge>
  );
}

function VitalCard({
  icon: Icon,
  label,
  value,
  unit,
  color,
  sub,
}: {
  icon: ElementType;
  label: string;
  value: string | number;
  unit: string;
  color: string;
  sub?: string;
}) {
  return (
    <motion.div
      className="glass rounded-2xl p-4 flex flex-col gap-2 min-w-0"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-xs text-muted-foreground font-medium">
          {label}
        </span>
      </div>
      <div className="flex items-end gap-1 mt-1">
        <span className="text-2xl font-bold font-display text-foreground">
          {value}
        </span>
        <span className="text-sm text-muted-foreground mb-0.5">{unit}</span>
      </div>
      {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
    </motion.div>
  );
}

const timelineIconMap: Record<TimelineEvent["icon"], ElementType> = {
  wake: Activity,
  medicine: Pill,
  alert: AlertTriangle,
  reminder: Bell,
  check: CheckCircle2,
};
const timelineColorMap: Record<TimelineEvent["icon"], string> = {
  wake: "bg-primary/15 text-primary",
  medicine: "bg-secondary/15 text-secondary",
  alert: "bg-destructive/15 text-destructive",
  reminder: "bg-accent/15 text-accent",
  check: "bg-emerald-500/15 text-emerald-500",
};

// ── Main Component ─────────────────────────────────────────────────────────
export default function Caregiver() {
  const {
    heartRate,
    oxygenLevel,
    bloodPressure,
    activityStatus,
    wellnessScore,
    startSimulation,
  } = useHealthStore();
  const { isEmergency, emergencyType, emergencyLog, cancelEmergency } =
    useEmergencyStore();
  const { reminders, getTodayProgress } = useMedicineStore();
  const [notifications, setNotifications] = useState<Notification[]>(
    INITIAL_NOTIFICATIONS,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startSimulation();
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, [startSimulation]);

  // Build 7-day vitals from generate24hVitals for charts
  const weeklyHR = useMemo(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const data = generate24hVitals();
    return days.map((day, i) => ({
      day,
      heartRate: Math.round(data[Math.min(i * 3, data.length - 1)].heartRate),
      oxygen: Math.round(data[Math.min(i * 3, data.length - 1)].oxygen),
    }));
  }, []);

  const progress = getTodayProgress();
  const overdue = reminders.filter((r) => {
    const now = new Date();
    const current = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    return !r.taken && r.scheduledTime < current;
  });

  const overallStatus = useMemo((): "clear" | "attention" | "emergency" => {
    if (isEmergency) return "emergency";
    if (heartRate > 105 || oxygenLevel < 93 || overdue.length > 1)
      return "attention";
    return "clear";
  }, [isEmergency, heartRate, oxygenLevel, overdue.length]);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const markRead = (id: string) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const recentEmergencies = emergencyLog.slice(0, 10);
  const avgHR = Math.round(
    weeklyHR.reduce((a, b) => a + b.heartRate, 0) / weeklyHR.length,
  );
  const avgO2 = Math.round(
    weeklyHR.reduce((a, b) => a + b.oxygen, 0) / weeklyHR.length,
  );
  const avgWellness = Math.round(
    WELLNESS_7DAY.reduce((a, b) => a + b.score, 0) / WELLNESS_7DAY.length,
  );

  return (
    <AppLayout>
      <div className="space-y-6" data-ocid="caregiver.page">
        {/* HEADER */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-14 w-14 ring-2 ring-primary/30">
                <AvatarFallback className="text-lg font-bold bg-primary/15 text-primary font-display">
                  MJ
                </AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display text-foreground leading-tight">
                Caregiver Dashboard
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" />
                Monitoring:{" "}
                <span className="font-semibold text-foreground">
                  Martha Johnson
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 text-xs px-3 py-1">
              <Clock className="h-3 w-3 mr-1.5" />
              Last Active: 2 minutes ago
            </Badge>
            <StatusBadge value={overallStatus} />
          </div>
        </motion.div>

        {/* LIVE STATUS CARD */}
        <motion.section
          data-ocid="caregiver.live_status.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="glass-dark rounded-2xl p-5 border border-primary/15">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-base font-bold font-display text-foreground">
                  Live Status Monitor
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <StatusBadge value={overallStatus} />
            </div>
            {loading ? (
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                data-ocid="caregiver.live_status.loading_state"
              >
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-24 rounded-2xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <VitalCard
                  icon={Heart}
                  label="Heart Rate"
                  value={heartRate}
                  unit="bpm"
                  color={
                    heartRate > 105
                      ? "bg-destructive/15 text-destructive"
                      : "bg-primary/15 text-primary"
                  }
                  sub={heartRate > 105 ? "⚠ Elevated" : "Normal range"}
                />
                <VitalCard
                  icon={Wind}
                  label="Oxygen Level"
                  value={oxygenLevel}
                  unit="%"
                  color={
                    oxygenLevel < 93
                      ? "bg-destructive/15 text-destructive"
                      : "bg-emerald-500/15 text-emerald-500"
                  }
                  sub={oxygenLevel < 93 ? "⚠ Low" : "Healthy"}
                />
                <VitalCard
                  icon={TrendingUp}
                  label="Blood Pressure"
                  value={`${bloodPressure.systolic}/${bloodPressure.diastolic}`}
                  unit="mmHg"
                  color={
                    bloodPressure.systolic > 140
                      ? "bg-accent/15 text-accent"
                      : "bg-secondary/15 text-secondary"
                  }
                  sub={bloodPressure.systolic > 140 ? "⚠ High" : "Controlled"}
                />
                <VitalCard
                  icon={Activity}
                  label="Activity"
                  value={activityStatus}
                  unit=""
                  color="bg-chart-5/15 text-chart-5"
                  sub={`Wellness: ${wellnessScore}/100`}
                />
              </div>
            )}
          </div>
        </motion.section>

        {/* EMERGENCY ALERT CENTER */}
        <motion.section
          data-ocid="caregiver.emergency.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div
            className={`rounded-2xl border p-5 ${
              isEmergency
                ? "bg-destructive/8 border-destructive/40 shadow-[0_0_30px_oklch(var(--destructive)/0.15)]"
                : "glass-dark border-border/20"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle
                className={`h-5 w-5 ${isEmergency ? "text-destructive animate-bounce" : "text-muted-foreground"}`}
              />
              <h2 className="text-base font-bold font-display text-foreground">
                Emergency Alert Center
              </h2>
            </div>

            <AnimatePresence>
              {isEmergency && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-destructive/12 border border-destructive/40 rounded-xl p-4 mb-4"
                  data-ocid="caregiver.emergency.alert_card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-destructive text-sm uppercase tracking-wide">
                        🚨 Active Emergency
                      </p>
                      <p className="text-base font-semibold text-foreground mt-1">
                        {emergencyType}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                        <Clock className="h-3 w-3" />
                        {new Date().toLocaleTimeString()}
                        <MapPin className="h-3 w-3 ml-2" />
                        Home — GPS acquired
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        type="button"
                        size="sm"
                        className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xs gap-1"
                        data-ocid="caregiver.emergency.call_button"
                      >
                        <Phone className="h-3 w-3" /> Call Now
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={cancelEmergency}
                        className="text-xs border-destructive/40 text-destructive hover:bg-destructive/10"
                        data-ocid="caregiver.emergency.resolve_button"
                      >
                        Mark Resolved
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">
              Emergency History
            </p>
            <div
              className="space-y-2"
              data-ocid="caregiver.emergency.history_list"
            >
              {recentEmergencies.length === 0 ? (
                <div
                  className="text-center py-6 text-muted-foreground text-sm"
                  data-ocid="caregiver.emergency.empty_state"
                >
                  No emergency events recorded.
                </div>
              ) : (
                recentEmergencies.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between gap-3 rounded-xl bg-muted/30 px-4 py-3"
                    data-ocid={`caregiver.emergency.history.item.${i + 1}`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {entry.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(entry.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {entry.notified && (
                        <Badge className="text-xs bg-primary/10 text-primary border-primary/20">
                          Notified
                        </Badge>
                      )}
                      <Badge
                        className={`text-xs ${
                          entry.resolved
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                            : "bg-destructive/10 text-destructive border-destructive/20"
                        }`}
                      >
                        {entry.resolved ? "Resolved" : "Active"}
                      </Badge>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.section>

        {/* MEDICINE ADHERENCE REPORT */}
        <motion.section
          data-ocid="caregiver.medicine.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="glass-dark rounded-2xl p-5 border border-border/20">
            <div className="flex items-center gap-2 mb-5">
              <Pill className="h-5 w-5 text-secondary" />
              <h2 className="text-base font-bold font-display text-foreground">
                Medicine Adherence Report
              </h2>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Today's Progress
                </span>
                <span className="text-sm font-bold text-foreground">
                  {progress.taken}/{progress.total} taken
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-secondary"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${progress.total ? (progress.taken / progress.total) * 100 : 0}%`,
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </div>

            <div
              className="space-y-2 mb-5"
              data-ocid="caregiver.medicine.reminders_list"
            >
              {reminders.map((r, i) => {
                const now = new Date();
                const pad = (n: number) => n.toString().padStart(2, "0");
                const current = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
                const isOver = !r.taken && r.scheduledTime < current;
                const med = mockMedicines.find((m) => m.id === r.medicineId);
                return (
                  <div
                    key={r.id}
                    className="flex items-center justify-between gap-3 rounded-xl bg-muted/30 px-3 py-2.5"
                    data-ocid={`caregiver.medicine.reminder.item.${i + 1}`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-base">{med?.icon ?? "💊"}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {r.medicineName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {r.scheduledTime}
                        </p>
                      </div>
                    </div>
                    {r.taken ? (
                      <Badge className="text-xs bg-emerald-500/12 text-emerald-600 dark:text-emerald-400 border-emerald-500/25">
                        <CheckCircle2 className="h-3 w-3 mr-1" /> Taken{" "}
                        {r.takenAt}
                      </Badge>
                    ) : isOver ? (
                      <Badge className="text-xs bg-destructive/12 text-destructive border-destructive/25 animate-pulse">
                        <AlertTriangle className="h-3 w-3 mr-1" /> Overdue
                      </Badge>
                    ) : (
                      <Badge className="text-xs bg-accent/12 text-accent border-accent/25">
                        <Clock className="h-3 w-3 mr-1" /> Upcoming
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-3">
              7-Day Adherence (%)
            </p>
            <div
              className="h-36"
              data-ocid="caregiver.medicine.adherence_chart"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ADHERENCE_7DAY}
                  margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="oklch(var(--border)/0.3)"
                  />
                  <XAxis
                    dataKey="day"
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{
                      fontSize: 11,
                      fill: "oklch(var(--muted-foreground))",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(var(--card))",
                      border: "1px solid oklch(var(--border)/0.3)",
                      borderRadius: 10,
                      fontSize: 12,
                    }}
                    formatter={(v: number) => [`${v}%`, "Adherence"]}
                  />
                  <Bar
                    dataKey="adherence"
                    fill="oklch(var(--secondary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* WEEKLY HEALTH SUMMARY */}
        <motion.section
          data-ocid="caregiver.weekly_summary.panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="glass-dark rounded-2xl p-5 border border-border/20">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-base font-bold font-display text-foreground">
                Weekly Health Summary
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                {
                  label: "Avg Heart Rate",
                  value: `${avgHR} bpm`,
                  color: "text-primary",
                },
                {
                  label: "Avg Oxygen",
                  value: `${avgO2}%`,
                  color: "text-emerald-500",
                },
                {
                  label: "Avg Wellness",
                  value: `${avgWellness}/100`,
                  color: "text-secondary",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-muted/30 px-3 py-3 text-center"
                >
                  <p className={`text-lg font-bold font-display ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Heart Rate Trend (7 days)
                </p>
                <div
                  className="h-40"
                  data-ocid="caregiver.weekly_summary.heartrate_chart"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyHR}
                      margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="oklch(var(--border)/0.3)"
                      />
                      <XAxis
                        dataKey="day"
                        tick={{
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))",
                        }}
                      />
                      <YAxis
                        tick={{
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))",
                        }}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "oklch(var(--card))",
                          border: "1px solid oklch(var(--border)/0.3)",
                          borderRadius: 10,
                          fontSize: 12,
                        }}
                        formatter={(v: number) => [`${v} bpm`, "Heart Rate"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="heartRate"
                        stroke="oklch(var(--primary))"
                        strokeWidth={2}
                        dot={{ fill: "oklch(var(--primary))", r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-wide">
                  Wellness Score Trend (7 days)
                </p>
                <div
                  className="h-40"
                  data-ocid="caregiver.weekly_summary.wellness_chart"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={WELLNESS_7DAY}
                      margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="oklch(var(--border)/0.3)"
                      />
                      <XAxis
                        dataKey="day"
                        tick={{
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))",
                        }}
                      />
                      <YAxis
                        domain={[60, 100]}
                        tick={{
                          fontSize: 11,
                          fill: "oklch(var(--muted-foreground))",
                        }}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "oklch(var(--card))",
                          border: "1px solid oklch(var(--border)/0.3)",
                          borderRadius: 10,
                          fontSize: 12,
                        }}
                        formatter={(v: number) => [`${v}`, "Wellness Score"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="oklch(var(--secondary))"
                        strokeWidth={2}
                        dot={{ fill: "oklch(var(--secondary))", r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ACTIVITY TIMELINE + NOTIFICATION CENTER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activity Timeline */}
          <motion.section
            data-ocid="caregiver.timeline.panel"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <div className="glass-dark rounded-2xl p-5 border border-border/20 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="h-5 w-5 text-accent" />
                <h2 className="text-base font-bold font-display text-foreground">
                  Today's Activity Timeline
                </h2>
              </div>
              <div className="space-y-0" data-ocid="caregiver.timeline.list">
                {TODAY_TIMELINE.map((event, i) => {
                  const Icon = timelineIconMap[event.icon];
                  const color = timelineColorMap[event.icon];
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      className="flex gap-3 pb-4 last:pb-0"
                      data-ocid={`caregiver.timeline.item.${i + 1}`}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${color}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        {i < TODAY_TIMELINE.length - 1 && (
                          <div className="w-px flex-1 bg-border/40 mt-1" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <p className="text-xs text-muted-foreground font-mono">
                          {event.time}
                        </p>
                        <p className="text-sm text-foreground mt-0.5 leading-snug">
                          {event.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* Notification Center */}
          <motion.section
            data-ocid="caregiver.notifications.panel"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="glass-dark rounded-2xl p-5 border border-border/20 h-full">
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <h2 className="text-base font-bold font-display text-foreground">
                    Notification Center
                  </h2>
                  {unreadCount > 0 && (
                    <Badge className="text-xs bg-primary/15 text-primary border-primary/25">
                      {unreadCount}
                    </Badge>
                  )}
                </div>
                {unreadCount > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={markAllRead}
                    className="text-xs text-muted-foreground hover:text-foreground"
                    data-ocid="caregiver.notifications.mark_all_read_button"
                  >
                    <BellOff className="h-3.5 w-3.5 mr-1" /> Mark all read
                  </Button>
                )}
              </div>
              <div
                className="space-y-2"
                data-ocid="caregiver.notifications.list"
              >
                {notifications.map((n, i) => (
                  <motion.div
                    key={n.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: n.read ? 0.6 : 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-smooth ${
                      n.read
                        ? "bg-muted/20"
                        : "bg-muted/40 border border-border/30"
                    }`}
                    data-ocid={`caregiver.notifications.item.${i + 1}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        n.type === "emergency"
                          ? "bg-destructive/15 text-destructive"
                          : n.type === "medicine"
                            ? "bg-secondary/15 text-secondary"
                            : "bg-primary/15 text-primary"
                      }`}
                    >
                      {n.type === "emergency" ? (
                        <AlertTriangle className="h-3.5 w-3.5" />
                      ) : n.type === "medicine" ? (
                        <Pill className="h-3.5 w-3.5" />
                      ) : (
                        <Activity className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground leading-snug">
                        {n.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {new Date(n.timestamp).toLocaleString()}
                      </p>
                    </div>
                    {!n.read && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 flex-shrink-0 text-muted-foreground hover:text-foreground"
                        onClick={() => markRead(n.id)}
                        aria-label="Mark as read"
                        data-ocid={`caregiver.notifications.mark_read_button.${i + 1}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </AppLayout>
  );
}
