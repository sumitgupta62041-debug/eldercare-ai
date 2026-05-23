import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { EmergencyLog } from "@/data/mockData";
import { AppLayout } from "@/layouts/AppLayout";
import { useEmergencyStore, useHealthStore } from "@/store";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Brain,
  CheckCircle2,
  Hand,
  Heart,
  MapPin,
  RefreshCw,
  ShieldAlert,
  Siren,
  Timer,
  Trash2,
  User,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatTimestamp(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function emergencyTypeColor(type: string) {
  if (type.includes("SOS")) return "destructive";
  if (type.includes("Fall")) return "destructive";
  if (type.includes("Heart")) return "destructive";
  if (type.includes("Oxygen")) return "destructive";
  return "secondary";
}

// ─── Sensor Status Badge ──────────────────────────────────────────────────────

type SensorStatus = "normal" | "warning" | "critical";

function statusBadge(status: SensorStatus) {
  if (status === "critical")
    return (
      <Badge variant="destructive" className="text-xs px-2 py-0.5">
        Critical
      </Badge>
    );
  if (status === "warning")
    return (
      <Badge
        variant="outline"
        className="text-xs px-2 py-0.5 border-amber-500/60 text-amber-500"
      >
        Warning
      </Badge>
    );
  return (
    <Badge
      variant="outline"
      className="text-xs px-2 py-0.5 border-emerald-500/60 text-emerald-500"
    >
      Normal
    </Badge>
  );
}

// ─── Live Sensor Row ──────────────────────────────────────────────────────────

interface SensorRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: SensorStatus;
  ocid: string;
  checkbox?: {
    checked: boolean;
    onChange: () => void;
    label: string;
  };
}

function SensorRow({
  icon,
  label,
  value,
  status,
  ocid,
  checkbox,
}: SensorRowProps) {
  return (
    <motion.div
      layout
      data-ocid={ocid}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-300 ${
        status === "critical"
          ? "border-destructive/40 bg-destructive/8"
          : status === "warning"
            ? "border-amber-500/30 bg-amber-500/5"
            : "border-border/30 bg-card/40"
      }`}
      animate={status === "critical" ? { x: [0, -2, 2, -2, 0] } : {}}
      transition={{ duration: 0.4, repeat: status === "critical" ? 4 : 0 }}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
          status === "critical"
            ? "bg-destructive/15 text-destructive"
            : status === "warning"
              ? "bg-amber-500/15 text-amber-500"
              : "bg-primary/10 text-primary"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{value}</p>
      </div>
      {checkbox && (
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1.5 cursor-pointer text-xs text-muted-foreground select-none">
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={checkbox.onChange}
              className="accent-destructive w-4 h-4 cursor-pointer"
            />
            {checkbox.label}
          </label>
        </div>
      )}
      {statusBadge(status)}
    </motion.div>
  );
}

// ─── GPS Map (static SVG simulation) ─────────────────────────────────────────

function GPSMap() {
  return (
    <div
      data-ocid="emergency.gps_map.panel"
      className="rounded-2xl overflow-hidden border border-border/30 bg-card relative h-40"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 400 160"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360, 396].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="160"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-muted-foreground"
          />
        ))}
        {[0, 27, 54, 81, 108, 135, 162].map((y) => (
          <line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-muted-foreground"
          />
        ))}
        <rect
          x="0"
          y="65"
          width="400"
          height="8"
          fill="#64748b"
          opacity="0.3"
          rx="2"
        />
        <rect
          x="180"
          y="0"
          width="8"
          height="160"
          fill="#64748b"
          opacity="0.3"
          rx="2"
        />
        <rect
          x="60"
          y="90"
          width="100"
          height="6"
          fill="#64748b"
          opacity="0.2"
          rx="1"
        />
        <rect
          x="260"
          y="30"
          width="6"
          height="80"
          fill="#64748b"
          opacity="0.2"
          rx="1"
        />
        <rect
          x="20"
          y="20"
          width="50"
          height="35"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="90"
          y="20"
          width="70"
          height="35"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="220"
          y="20"
          width="30"
          height="35"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="280"
          y="20"
          width="80"
          height="35"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="20"
          y="90"
          width="40"
          height="50"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="100"
          y="85"
          width="55"
          height="55"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="220"
          y="90"
          width="60"
          height="55"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
        <rect
          x="310"
          y="85"
          width="70"
          height="55"
          fill="#94a3b8"
          opacity="0.15"
          rx="3"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="absolute -inset-3 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <div className="w-5 h-5 rounded-full bg-primary border-2 border-primary-foreground shadow-lg" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/95 to-transparent px-3 py-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <p className="text-xs font-medium text-foreground">
            42.3601° N, 71.0589° W — Boston, MA
          </p>
          <Badge
            variant="outline"
            className="ml-auto text-[10px] px-1.5 py-0 border-emerald-500/50 text-emerald-500"
          >
            99% accuracy
          </Badge>
        </div>
        <p className="text-[10px] text-muted-foreground mt-0.5 ml-5">
          Last updated: just now
        </p>
      </div>
    </div>
  );
}

// ─── Emergency History Row ────────────────────────────────────────────────────

function HistoryRow({
  log,
  index,
}: {
  log: EmergencyLog;
  index: number;
}) {
  return (
    <motion.tr
      data-ocid={`emergency.history.item.${index + 1}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.06 }}
      className="border-b border-border/20 last:border-0 hover:bg-muted/20 transition-colors"
    >
      <td className="py-2.5 px-3 text-xs text-muted-foreground whitespace-nowrap">
        {formatTimestamp(log.timestamp)}
      </td>
      <td className="py-2.5 px-3">
        <Badge
          variant={emergencyTypeColor(log.type) as "destructive" | "secondary"}
          className="text-xs"
        >
          {log.type}
        </Badge>
      </td>
      <td className="py-2.5 px-3 text-xs text-muted-foreground max-w-[160px] truncate">
        {log.location.split(" — ")[0]}
      </td>
      <td className="py-2.5 px-3 text-center">
        {log.notified ? (
          <Badge
            variant="outline"
            className="text-[10px] px-1.5 py-0 border-emerald-500/50 text-emerald-500"
          >
            ✓ Yes
          </Badge>
        ) : (
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
            No
          </Badge>
        )}
      </td>
      <td className="py-2.5 px-3 text-center">
        {log.resolved ? (
          <span className="text-xs text-muted-foreground">Resolved</span>
        ) : (
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-xs text-destructive font-semibold"
          >
            Active
          </motion.span>
        )}
      </td>
    </motion.tr>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Emergency() {
  const {
    isEmergency,
    triggerSOS,
    triggerAutoEmergency,
    emergencyLog,
    clearLog,
  } = useEmergencyStore();
  const { heartRate, oxygenLevel } = useHealthStore();

  const [fallDetected, setFallDetected] = useState(false);
  const [motionActive, setMotionActive] = useState(true);
  const [caregiverNotified, setCaregiverNotified] = useState(false);
  const autoTriggered = useRef(false);

  // Sensor-derived statuses
  const hrStatus: SensorStatus =
    heartRate > 120 ? "critical" : heartRate > 105 ? "warning" : "normal";
  const o2Status: SensorStatus =
    oxygenLevel < 90 ? "critical" : oxygenLevel < 94 ? "warning" : "normal";
  const fallStatus: SensorStatus = fallDetected ? "critical" : "normal";
  const motionStatus: SensorStatus = motionActive ? "normal" : "warning";
  const panicStatus: SensorStatus = isEmergency ? "critical" : "normal";

  const overallCritical =
    hrStatus === "critical" ||
    o2Status === "critical" ||
    fallStatus === "critical";
  const overallWarning =
    !overallCritical &&
    (hrStatus === "warning" ||
      o2Status === "warning" ||
      motionStatus === "warning");

  const aiLevel: SensorStatus = overallCritical
    ? "critical"
    : overallWarning
      ? "warning"
      : "normal";

  const aiRecommendation = overallCritical
    ? "⚠️ Critical conditions detected. Emergency services have been alerted. Stay calm and remain still. Help is on the way."
    : overallWarning
      ? "Elevated readings detected. Please sit down, relax, and take deep breaths. Monitor vitals closely for the next 5 minutes."
      : "All vitals within normal range. Keep up the great wellness routine! Gentle activity and hydration are recommended.";

  // Auto-trigger emergency from sensor readings
  useEffect(() => {
    if (
      (heartRate > 120 || oxygenLevel < 90 || fallDetected) &&
      !isEmergency &&
      !autoTriggered.current
    ) {
      autoTriggered.current = true;
      const type =
        heartRate > 120
          ? "High Heart Rate"
          : oxygenLevel < 90
            ? "Low Oxygen Level"
            : "Fall Detected";
      triggerAutoEmergency(type);
      setCaregiverNotified(true);
      toast.error(`⚠️ Auto Emergency: ${type}`, {
        duration: 6000,
        description: "Your contact (91894932189) has been notified.",
      });
    }
    if (!isEmergency) autoTriggered.current = false;
  }, [heartRate, oxygenLevel, fallDetected, isEmergency, triggerAutoEmergency]);

  const handleSOS = useCallback(() => {
    setCaregiverNotified(true);
    triggerSOS();
    toast.error("🚨 SOS Emergency Activated!", {
      duration: 8000,
      description: "91894932189 notified. Voice alert playing.",
    });
  }, [triggerSOS]);

  const handleFallToggle = useCallback(() => {
    setFallDetected((v) => {
      const next = !v;
      if (next) {
        toast.warning("Fall Sensor triggered for demo", { duration: 3000 });
      }
      return next;
    });
  }, []);

  const handleMotionToggle = useCallback(() => {
    setMotionActive((v) => !v);
  }, []);

  return (
    <AppLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
        data-ocid="emergency.page"
      >
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black font-display text-foreground">
              Emergency Control Center
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Real-time IoT sensor monitoring &amp; emergency response
            </p>
          </div>
          {isEmergency && (
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center gap-2 bg-destructive/15 border border-destructive/40 rounded-xl px-4 py-2"
            >
              <Siren className="h-4 w-4 text-destructive" />
              <span className="text-sm font-bold text-destructive">
                EMERGENCY ACTIVE
              </span>
            </motion.div>
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Column 1: Sensors + GPS + History */}
          <div className="lg:col-span-2 space-y-5">
            {/* Live Sensor Status Panel */}
            <motion.section
              data-ocid="emergency.sensors.panel"
              className="bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-5 shadow-soft"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-display">
                    Live Sensor Status
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <SensorRow
                  icon={<Heart className="h-4 w-4" />}
                  label="Heart Rate Monitor"
                  value={`${heartRate} bpm — live from wearable`}
                  status={hrStatus}
                  ocid="emergency.sensor.heartrate"
                />
                <SensorRow
                  icon={<Wind className="h-4 w-4" />}
                  label="Oxygen Sensor"
                  value={`SpO₂ ${oxygenLevel}% — fingertip sensor`}
                  status={o2Status}
                  ocid="emergency.sensor.oxygen"
                />
                <SensorRow
                  icon={<Waves className="h-4 w-4" />}
                  label="Fall Detection Sensor"
                  value={
                    fallDetected
                      ? "⚠️ FALL DETECTED — Accelerometer triggered"
                      : "Normal — Accelerometer stable"
                  }
                  status={fallStatus}
                  ocid="emergency.sensor.fall"
                  checkbox={{
                    checked: fallDetected,
                    onChange: handleFallToggle,
                    label: "Simulate fall",
                  }}
                />
                <SensorRow
                  icon={<Activity className="h-4 w-4" />}
                  label="Motion Sensor"
                  value={
                    motionActive
                      ? "Active — Movement detected"
                      : "No movement for 30+ minutes"
                  }
                  status={motionStatus}
                  ocid="emergency.sensor.motion"
                  checkbox={{
                    checked: !motionActive,
                    onChange: handleMotionToggle,
                    label: "No movement",
                  }}
                />
                <SensorRow
                  icon={<Hand className="h-4 w-4" />}
                  label="Panic Button"
                  value={
                    isEmergency
                      ? "Pressed — Emergency active"
                      : "Standby — Ready"
                  }
                  status={panicStatus}
                  ocid="emergency.sensor.panic"
                />
              </div>
            </motion.section>

            {/* GPS Simulation */}
            <motion.section
              data-ocid="emergency.gps.panel"
              className="bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-5 shadow-soft"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold text-foreground font-display">
                  GPS Location Simulation
                </h3>
              </div>
              <GPSMap />
            </motion.section>

            {/* Emergency History Log */}
            <motion.section
              data-ocid="emergency.history.panel"
              className="bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-5 shadow-soft"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Timer className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-display">
                      Emergency History
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      {emergencyLog.length} recorded event
                      {emergencyLog.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    clearLog();
                    toast.success("Emergency log cleared");
                  }}
                  className="text-muted-foreground hover:text-destructive h-8 px-3 text-xs"
                  data-ocid="emergency.clear_log_button"
                >
                  <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                  Clear Log
                </Button>
              </div>
              {emergencyLog.length === 0 ? (
                <div
                  data-ocid="emergency.history.empty_state"
                  className="py-10 text-center text-muted-foreground"
                >
                  <CheckCircle2 className="h-10 w-10 mx-auto mb-2 text-emerald-500/60" />
                  <p className="text-sm font-medium">
                    No emergency events recorded
                  </p>
                  <p className="text-xs mt-1">All clear!</p>
                </div>
              ) : (
                <div className="overflow-x-auto -mx-1">
                  <table className="w-full text-sm min-w-[500px]">
                    <thead>
                      <tr className="text-left border-b border-border/30">
                        {[
                          "Date / Time",
                          "Type",
                          "Location",
                          "Notified",
                          "Status",
                        ].map((h) => (
                          <th
                            key={h}
                            className="pb-2 px-3 text-xs font-semibold text-muted-foreground"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {emergencyLog.map((log, i) => (
                          <HistoryRow key={log.id} log={log} index={i} />
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              )}
            </motion.section>
          </div>

          {/* Column 2: SOS + AI Assessment + Caregiver */}
          <div className="space-y-5">
            {/* Giant SOS Button */}
            <motion.section
              data-ocid="emergency.sos.panel"
              className="bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-6 shadow-soft flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center gap-2 mb-1 self-start">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <ShieldAlert className="h-4 w-4 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground font-display">
                  SOS Emergency
                </h3>
              </div>
              <p className="text-xs text-muted-foreground self-start mb-6 ml-10">
                Tap to trigger immediate emergency alert
              </p>

              {/* Pulsing SOS button */}
              <div className="relative flex items-center justify-center my-2">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute rounded-full border border-destructive/30"
                    style={{ width: 200 + ring * 32, height: 200 + ring * 32 }}
                    animate={{
                      scale: isEmergency ? [1, 1.1, 1] : [1, 1.04, 1],
                      opacity: isEmergency ? [0.6, 0.2, 0.6] : [0.3, 0.08, 0.3],
                    }}
                    transition={{
                      duration: isEmergency ? 0.8 : 2,
                      delay: ring * 0.25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <motion.button
                  data-ocid="emergency.sos_button"
                  type="button"
                  onClick={handleSOS}
                  aria-label="Activate SOS Emergency"
                  className={`relative w-[200px] h-[200px] rounded-full font-black font-display text-white shadow-2xl border-4 flex flex-col items-center justify-center gap-1 cursor-pointer select-none ${
                    isEmergency
                      ? "bg-destructive border-destructive/60"
                      : "bg-destructive border-destructive/40 hover:bg-destructive/90"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: isEmergency
                      ? [
                          "0 0 30px 10px rgba(220,38,38,0.4)",
                          "0 0 60px 25px rgba(220,38,38,0.7)",
                          "0 0 30px 10px rgba(220,38,38,0.4)",
                        ]
                      : [
                          "0 0 20px 5px rgba(220,38,38,0.25)",
                          "0 0 40px 15px rgba(220,38,38,0.4)",
                          "0 0 20px 5px rgba(220,38,38,0.25)",
                        ],
                  }}
                  transition={{
                    duration: isEmergency ? 0.8 : 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <AlertTriangle className="h-8 w-8 mb-1" />
                  <span className="text-2xl tracking-wider leading-none">
                    SOS
                  </span>
                  <span className="text-[11px] font-medium opacity-90 tracking-widest">
                    EMERGENCY
                  </span>
                </motion.button>
              </div>

              <p className="text-xs text-muted-foreground mt-6 leading-relaxed max-w-[180px]">
                Immediately contacts 91894932189 &amp; emergency services
              </p>
            </motion.section>

            {/* AI Emergency Assessment */}
            <motion.section
              data-ocid="emergency.ai_assessment.panel"
              className={`backdrop-blur-md rounded-2xl border p-5 shadow-soft transition-all duration-500 ${
                aiLevel === "critical"
                  ? "bg-destructive/8 border-destructive/30"
                  : aiLevel === "warning"
                    ? "bg-amber-500/8 border-amber-500/30"
                    : "bg-emerald-500/8 border-emerald-500/30"
              }`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    aiLevel === "critical"
                      ? "bg-destructive/15 text-destructive"
                      : aiLevel === "warning"
                        ? "bg-amber-500/15 text-amber-500"
                        : "bg-emerald-500/15 text-emerald-500"
                  }`}
                >
                  <Brain className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground font-display text-sm">
                    AI Assessment
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    Real-time analysis
                  </p>
                </div>
                <div className="ml-auto">{statusBadge(aiLevel)}</div>
              </div>
              <div
                className={`text-sm leading-relaxed rounded-xl p-3 ${
                  aiLevel === "critical"
                    ? "bg-destructive/8 text-destructive"
                    : aiLevel === "warning"
                      ? "bg-amber-500/8 text-amber-600 dark:text-amber-400"
                      : "bg-emerald-500/8 text-emerald-700 dark:text-emerald-400"
                }`}
              >
                {aiRecommendation}
              </div>
            </motion.section>

            {/* Caregiver Alert Panel */}
            <AnimatePresence mode="wait">
              {caregiverNotified ? (
                <motion.section
                  key="notified"
                  data-ocid="emergency.caregiver_alert.panel"
                  className="bg-primary/8 backdrop-blur-md rounded-2xl border border-primary/25 p-5 shadow-soft"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <User className="h-4 w-4 text-primary" />
                    </motion.div>
                    <h3 className="font-bold text-foreground font-display text-sm">
                      Caregiver Notified
                    </h3>
                    <Badge
                      variant="outline"
                      className="ml-auto text-[10px] px-1.5 border-emerald-500/50 text-emerald-500"
                    >
                      ✓ Sent
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 bg-card/50 rounded-xl p-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">
                          SC
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">
                          Dr. Sarah Chen
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Primary Caregiver
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        "SMS notification sent",
                        "App push notification sent",
                        "GPS location shared",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-muted-foreground italic bg-muted/30 rounded-lg p-2">
                      Simulated — No real notifications sent
                    </p>
                  </div>
                </motion.section>
              ) : (
                <motion.div
                  key="standby"
                  data-ocid="emergency.standby.panel"
                  className="bg-muted/20 rounded-2xl border border-border/20 p-5 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <AlertCircle className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-sm font-medium text-muted-foreground">
                    Caregiver on standby
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    91894932189 will be notified automatically
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AppLayout>
  );
}
