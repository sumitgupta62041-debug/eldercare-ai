import { VitalsCard } from "@/components/VitalsCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { generate24hVitals } from "@/data/mockData";
import { AppLayout } from "@/layouts/AppLayout";
import {
  useAuthStore,
  useEmergencyStore,
  useHealthStore,
  useMedicineStore,
} from "@/store";
import {
  Activity,
  AlertCircle,
  Brain,
  CheckCircle2,
  Droplets,
  Flame,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── Greeting ────────────────────────────────────────────────────────────────
function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function getFormattedDate(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// ─── Wellness badge ──────────────────────────────────────────────────────────
function WellnessBadge({ score }: { score: number }) {
  const color =
    score >= 80
      ? "text-emerald-400 border-emerald-400/40 bg-emerald-400/10"
      : score >= 60
        ? "text-yellow-400 border-yellow-400/40 bg-yellow-400/10"
        : "text-destructive border-destructive/40 bg-destructive/10";
  const label =
    score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Attention";

  return (
    <div
      data-ocid="dashboard.wellness_score"
      className={`flex items-center gap-3 px-5 py-3 rounded-2xl border glass ${color}`}
    >
      <div className="text-center">
        <span className="block text-4xl font-bold font-display leading-none">
          {score}
        </span>
        <span className="text-xs font-medium uppercase tracking-wider opacity-80">
          / 100
        </span>
      </div>
      <div>
        <p className="text-sm font-bold font-display">{label}</p>
        <p className="text-xs opacity-70">Wellness Score</p>
      </div>
      <Sparkles className="h-5 w-5 opacity-60" />
    </div>
  );
}

// ─── AI Insights ─────────────────────────────────────────────────────────────
interface InsightItem {
  icon: ReactNode;
  text: string;
  level: "info" | "warning" | "ok";
}

function AIInsightsCard({
  heartRate,
  oxygenLevel,
  sleepHours,
  activityMinutes,
}: {
  heartRate: number;
  oxygenLevel: number;
  sleepHours: number;
  activityMinutes: number;
}) {
  const insights: InsightItem[] = [];

  if (heartRate > 100) {
    insights.push({
      icon: <Heart className="h-4 w-4" />,
      text: "Your heart rate is elevated — rest and hydrate. Avoid strenuous activity for now.",
      level: "warning",
    });
  } else {
    insights.push({
      icon: <Heart className="h-4 w-4" />,
      text: "Heart rate is in a healthy range. Keep up your gentle daily activity routine.",
      level: "ok",
    });
  }

  if (oxygenLevel < 95) {
    insights.push({
      icon: <Wind className="h-4 w-4" />,
      text: "Oxygen level slightly low — try deep, slow breathing exercises for 5 minutes.",
      level: "warning",
    });
  } else {
    insights.push({
      icon: <Wind className="h-4 w-4" />,
      text: "Oxygen saturation is excellent. Continue breathing exercises for sustained wellness.",
      level: "ok",
    });
  }

  if (sleepHours < 6.5) {
    insights.push({
      icon: <Moon className="h-4 w-4" />,
      text: "Sleep was below recommended levels. Aim for 7–8 hours and limit screen time before bed.",
      level: "warning",
    });
  } else if (activityMinutes < 20) {
    insights.push({
      icon: <Activity className="h-4 w-4" />,
      text: "Activity is low today. A 15-minute gentle walk can significantly boost your mood and circulation.",
      level: "info",
    });
  } else {
    insights.push({
      icon: <Flame className="h-4 w-4" />,
      text: "Great job staying active today! Drink water after exercise and rest as needed.",
      level: "ok",
    });
  }

  const levelStyle: Record<string, string> = {
    ok: "bg-primary/10 text-primary border-primary/20",
    warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    info: "bg-secondary/10 text-secondary border-secondary/20",
  };

  return (
    <motion.div
      data-ocid="dashboard.ai_insights_card"
      className="glass rounded-2xl p-6 border border-border/20 shadow-soft"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-secondary/15 text-secondary">
          <Brain className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold font-display text-base text-foreground">
            AI Health Insights
          </h3>
          <p className="text-xs text-muted-foreground">
            Personalized recommendations
          </p>
        </div>
        <Badge
          variant="secondary"
          className="ml-auto text-xs bg-secondary/15 text-secondary border-secondary/30"
        >
          Live Analysis
        </Badge>
      </div>

      <div className="space-y-3">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.text}
            data-ocid={`dashboard.insight.item.${i + 1}`}
            className={`flex items-start gap-3 p-3.5 rounded-xl border ${levelStyle[insight.level]}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
          >
            <div className="mt-0.5 flex-shrink-0">{insight.icon}</div>
            <p className="text-sm leading-relaxed">{insight.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Chart tooltip ───────────────────────────────────────────────────────────
function CustomTooltip({
  active,
  payload,
  label,
  unit,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  unit: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-xl px-3 py-2 border border-border/30 shadow-soft text-sm">
      <p className="text-muted-foreground text-xs">{label}</p>
      <p className="font-bold text-foreground">
        {payload[0].value}{" "}
        <span className="font-normal text-muted-foreground">{unit}</span>
      </p>
    </div>
  );
}

// ─── Medicine Progress ────────────────────────────────────────────────────────
function MedicineProgressCard() {
  const getTodayProgress = useMedicineStore((s) => s.getTodayProgress);
  const { taken, total } = getTodayProgress();
  const pct = total > 0 ? Math.round((taken / total) * 100) : 0;

  return (
    <motion.div
      data-ocid="dashboard.medicine_progress_card"
      className="glass rounded-2xl p-6 border border-border/20 shadow-soft flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-primary/15 text-primary">
          <Droplets className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold font-display text-base text-foreground">
            Medicine Progress
          </h3>
          <p className="text-xs text-muted-foreground">Today's schedule</p>
        </div>
      </div>

      <div className="flex items-end gap-2 mb-3">
        <span className="text-3xl font-bold font-display text-foreground">
          {taken}
        </span>
        <span className="text-base text-muted-foreground mb-1">
          / {total} doses
        </span>
        <span
          className={`ml-auto text-sm font-semibold ${
            pct === 100
              ? "text-emerald-400"
              : pct >= 50
                ? "text-yellow-400"
                : "text-destructive"
          }`}
        >
          {pct}%
        </span>
      </div>

      <Progress
        value={pct}
        className="h-3 rounded-full"
        data-ocid="dashboard.medicine_progress_bar"
      />

      <p className="text-xs text-muted-foreground mt-3">
        {pct === 100
          ? "\u2705 All medications taken for today!"
          : `${total - taken} dose${total - taken !== 1 ? "s" : ""} remaining today`}
      </p>
    </motion.div>
  );
}

// ─── Emergency Status Card ────────────────────────────────────────────────────
function EmergencyStatusCard() {
  const emergencyLog = useEmergencyStore((s) => s.emergencyLog);
  const isEmergency = useEmergencyStore((s) => s.isEmergency);

  const latest = emergencyLog[0];
  const lastTime = latest
    ? new Date(latest.timestamp).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const statusLabel = isEmergency
    ? "Emergency Active"
    : latest?.resolved === false
      ? "Unresolved"
      : "All Clear";
  const statusColor = isEmergency
    ? "text-destructive border-destructive/40 bg-destructive/10"
    : latest?.resolved === false
      ? "text-yellow-400 border-yellow-400/40 bg-yellow-400/10"
      : "text-emerald-400 border-emerald-400/40 bg-emerald-400/10";

  return (
    <motion.div
      data-ocid="dashboard.emergency_status_card"
      className="glass rounded-2xl p-6 border border-border/20 shadow-soft flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75, duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2.5 rounded-xl ${
            isEmergency
              ? "bg-destructive/15 text-destructive"
              : "bg-emerald-500/15 text-emerald-400"
          }`}
        >
          {isEmergency ? (
            <AlertCircle className="h-5 w-5" />
          ) : (
            <ShieldCheck className="h-5 w-5" />
          )}
        </div>
        <div>
          <h3 className="font-bold font-display text-base text-foreground">
            Emergency Status
          </h3>
          <p className="text-xs text-muted-foreground">Real-time monitoring</p>
        </div>
      </div>

      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold mb-3 ${statusColor}`}
      >
        {isEmergency ? (
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
          </span>
        ) : (
          <CheckCircle2 className="h-3.5 w-3.5" />
        )}
        {statusLabel}
      </div>

      <div className="space-y-1.5">
        {lastTime && (
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Last event:</span> {latest?.type}
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          {lastTime ? `at ${lastTime}` : "No emergency events recorded"}
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">{emergencyLog.length}</span> event
          {emergencyLog.length !== 1 ? "s" : ""} in history
        </p>
      </div>
    </motion.div>
  );
}

// ─── Dashboard Skeleton ───────────────────────────────────────────────────────
function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-72 rounded-xl" />
          <Skeleton className="h-4 w-48 rounded-lg" />
        </div>
        <Skeleton className="h-20 w-44 rounded-2xl" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-32 rounded-2xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
      <Skeleton className="h-52 rounded-2xl" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-40 rounded-2xl" />
        <Skeleton className="h-40 rounded-2xl" />
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const [ready, setReady] = useState(false);
  const user = useAuthStore((s) => s.user);
  const heartRate = useHealthStore((s) => s.heartRate);
  const bloodPressure = useHealthStore((s) => s.bloodPressure);
  const oxygenLevel = useHealthStore((s) => s.oxygenLevel);
  const sleepHours = useHealthStore((s) => s.sleepHours);
  const activityMinutes = useHealthStore((s) => s.activityMinutes);
  const activityStatus = useHealthStore((s) => s.activityStatus);
  const wellnessScore = useHealthStore((s) => s.wellnessScore);
  const vitalsHistory = useHealthStore((s) => s.vitalsHistory);
  const startSimulation = useHealthStore((s) => s.startSimulation);
  const stopSimulation = useHealthStore((s) => s.stopSimulation);

  useEffect(() => {
    startSimulation();
    const timer = setTimeout(() => setReady(true), 500);
    return () => {
      stopSimulation();
      clearTimeout(timer);
    };
  }, [startSimulation, stopSimulation]);

  const chartData =
    vitalsHistory.length > 0 ? vitalsHistory : generate24hVitals();
  const displayData = chartData.slice(-24);

  const firstName = user?.name?.split(" ")[0] ?? "there";

  const hrStatus: "normal" | "warning" | "critical" =
    heartRate > 110 ? "critical" : heartRate > 100 ? "warning" : "normal";
  const bpStatus: "normal" | "warning" | "critical" =
    bloodPressure.systolic > 140
      ? "critical"
      : bloodPressure.systolic > 130
        ? "warning"
        : "normal";
  const o2Status: "normal" | "warning" | "critical" =
    oxygenLevel < 90 ? "critical" : oxygenLevel < 95 ? "warning" : "normal";
  const sleepStatus: "normal" | "warning" =
    sleepHours < 5 ? "warning" : "normal";
  const activityStatusLevel: "normal" | "warning" =
    activityMinutes < 10 ? "warning" : "normal";
  const hrTrend: "up" | "down" | "stable" =
    heartRate > 90 ? "up" : heartRate < 65 ? "down" : "stable";
  const o2Trend: "up" | "down" | "stable" =
    oxygenLevel < 95 ? "down" : "stable";

  if (!ready) {
    return (
      <AppLayout>
        <DashboardSkeleton />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div data-ocid="dashboard.page" className="space-y-6 pb-6">
        {/* ── Header ── */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-bold font-display text-foreground">
              {getGreeting()}, {firstName}! 👋
            </h2>
            <p className="text-muted-foreground mt-1 text-base">
              {getFormattedDate()}
            </p>
          </div>
          <WellnessBadge score={wellnessScore} />
        </motion.div>

        {/* ── Vitals Grid ── */}
        <div
          data-ocid="dashboard.vitals_grid"
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {(
            [
              {
                icon: <Heart className="h-5 w-5" />,
                label: "Heart Rate",
                value: heartRate,
                unit: "BPM",
                status: hrStatus,
                trend: hrTrend,
                subtitle:
                  heartRate > 100 ? "Slightly elevated" : "Normal range",
                ocid: "dashboard.vitals.heart_rate",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                label: "Blood Pressure",
                value: `${bloodPressure.systolic}/${bloodPressure.diastolic}`,
                unit: "mmHg",
                status: bpStatus,
                trend: "stable" as const,
                subtitle:
                  bpStatus === "normal" ? "Healthy range" : "Monitor closely",
                ocid: "dashboard.vitals.blood_pressure",
              },
              {
                icon: <Wind className="h-5 w-5" />,
                label: "Oxygen Level",
                value: oxygenLevel,
                unit: "SpO\u2082 %",
                status: o2Status,
                trend: o2Trend,
                subtitle:
                  oxygenLevel >= 95 ? "Optimal saturation" : "Below target",
                ocid: "dashboard.vitals.oxygen",
              },
              {
                icon: <Moon className="h-5 w-5" />,
                label: "Sleep",
                value: sleepHours,
                unit: "hours",
                status: sleepStatus,
                trend: "stable" as const,
                subtitle: sleepHours >= 7 ? "Well rested" : "Needs improvement",
                ocid: "dashboard.vitals.sleep",
              },
              {
                icon: <Activity className="h-5 w-5" />,
                label: "Activity",
                value: Math.round(activityMinutes),
                unit: "min",
                status: activityStatusLevel,
                trend: (activityMinutes > 30 ? "up" : "stable") as
                  | "up"
                  | "stable",
                subtitle:
                  activityMinutes >= 30 ? "Goal achieved" : "Keep moving!",
                ocid: "dashboard.vitals.activity",
              },
              {
                icon: <Flame className="h-5 w-5" />,
                label: "Status",
                value:
                  activityStatus === "active"
                    ? "Active"
                    : activityStatus === "sleeping"
                      ? "Sleeping"
                      : "Resting",
                unit: "",
                status: "normal" as const,
                trend: "stable" as const,
                subtitle:
                  activityStatus === "active"
                    ? "In motion"
                    : activityStatus === "sleeping"
                      ? "In rest mode"
                      : "Relaxed",
                ocid: "dashboard.vitals.status",
              },
            ] as const
          ).map((card, i) => (
            <motion.div
              key={card.ocid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              <VitalsCard
                icon={card.icon}
                label={card.label}
                value={card.value as string | number}
                unit={card.unit}
                status={card.status as "normal" | "warning" | "critical"}
                trend={card.trend as "up" | "down" | "stable"}
                subtitle={card.subtitle}
                data-ocid={card.ocid}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Charts Row ── */}
        <div
          data-ocid="dashboard.charts_row"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Heart Rate Chart */}
          <motion.div
            className="glass rounded-2xl p-5 border border-border/20 shadow-soft"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            data-ocid="dashboard.chart.heart_rate"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-4 w-4 text-primary" />
              <h3 className="font-semibold font-display text-sm text-foreground">
                Heart Rate \u2014 24h
              </h3>
              <Badge
                variant="outline"
                className="ml-auto text-xs text-primary border-primary/30"
              >
                {heartRate} BPM
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                data={displayData}
                margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="gradHR" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="oklch(0.65 0.22 190)"
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="95%"
                      stopColor="oklch(0.65 0.22 190)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.9 0.008 290 / 0.15)"
                />
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 10, fill: "oklch(0.45 0.01 290)" }}
                  tickLine={false}
                  axisLine={false}
                  interval={5}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "oklch(0.45 0.01 290)" }}
                  tickLine={false}
                  axisLine={false}
                  domain={[50, 140]}
                />
                <Tooltip
                  content={(props) => (
                    <CustomTooltip
                      active={props.active}
                      payload={props.payload as { value: number }[] | undefined}
                      label={props.label as string}
                      unit="BPM"
                    />
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="heartRate"
                  stroke="oklch(0.65 0.22 190)"
                  strokeWidth={2.5}
                  fill="url(#gradHR)"
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Oxygen Level Chart */}
          <motion.div
            className="glass rounded-2xl p-5 border border-border/20 shadow-soft"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            data-ocid="dashboard.chart.oxygen"
          >
            <div className="flex items-center gap-2 mb-4">
              <Wind className="h-4 w-4 text-secondary" />
              <h3 className="font-semibold font-display text-sm text-foreground">
                Oxygen Level \u2014 24h
              </h3>
              <Badge
                variant="outline"
                className="ml-auto text-xs text-secondary border-secondary/30"
              >
                {oxygenLevel}% SpO\u2082
              </Badge>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                data={displayData}
                margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="gradO2" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="oklch(0.6 0.18 280)"
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="95%"
                      stopColor="oklch(0.6 0.18 280)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="oklch(0.9 0.008 290 / 0.15)"
                />
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: 10, fill: "oklch(0.45 0.01 290)" }}
                  tickLine={false}
                  axisLine={false}
                  interval={5}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "oklch(0.45 0.01 290)" }}
                  tickLine={false}
                  axisLine={false}
                  domain={[85, 100]}
                />
                <Tooltip
                  content={(props) => (
                    <CustomTooltip
                      active={props.active}
                      payload={props.payload as { value: number }[] | undefined}
                      label={props.label as string}
                      unit="%"
                    />
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="oxygen"
                  stroke="oklch(0.6 0.18 280)"
                  strokeWidth={2.5}
                  fill="url(#gradO2)"
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* ── AI Insights ── */}
        <AIInsightsCard
          heartRate={heartRate}
          oxygenLevel={oxygenLevel}
          sleepHours={sleepHours}
          activityMinutes={activityMinutes}
        />

        {/* ── Bottom Row ── */}
        <div
          data-ocid="dashboard.bottom_row"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <MedicineProgressCard />
          <EmergencyStatusCard />
        </div>
      </div>
    </AppLayout>
  );
}
