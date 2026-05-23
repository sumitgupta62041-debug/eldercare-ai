import { h as useEmergencyStore, e as useHealthStore, r as reactExports, b as ue, j as jsxRuntimeExports } from "./index-D1My1Djg.js";
import { A as AppLayout, S as Siren, M as MapPin, T as TriangleAlert, B as Badge } from "./AppLayout-A3oTh0KX.js";
import { c as createLucideIcon, m as motion, H as Heart, B as Button } from "./proxy-CjookoZg.js";
import { Z as Zap, B as Brain } from "./zap-BsdlKos8.js";
import { W as Wind } from "./wind-DlVqBmNU.js";
import { A as Activity } from "./activity-Wrxa32qX.js";
import { T as Trash2 } from "./trash-2-CMUTjuBE.js";
import { C as CircleCheck } from "./circle-check-BYTRUGAh.js";
import { A as AnimatePresence } from "./index-CXVWI1BC.js";
import { S as ShieldAlert } from "./shield-alert-B6w7p7W8.js";
import { U as User } from "./user-CzBdarbj.js";
import { C as CircleAlert } from "./circle-alert-C-cvOZRZ.js";
import "./users-A7LrIhw3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
];
const Hand = createLucideIcon("hand", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
];
const Waves = createLucideIcon("waves", __iconNode);
function formatTimestamp(iso) {
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function emergencyTypeColor(type) {
  if (type.includes("SOS")) return "destructive";
  if (type.includes("Fall")) return "destructive";
  if (type.includes("Heart")) return "destructive";
  if (type.includes("Oxygen")) return "destructive";
  return "secondary";
}
function statusBadge(status) {
  if (status === "critical")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "text-xs px-2 py-0.5", children: "Critical" });
  if (status === "warning")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        variant: "outline",
        className: "text-xs px-2 py-0.5 border-amber-500/60 text-amber-500",
        children: "Warning"
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      variant: "outline",
      className: "text-xs px-2 py-0.5 border-emerald-500/60 text-emerald-500",
      children: "Normal"
    }
  );
}
function SensorRow({
  icon,
  label,
  value,
  status,
  ocid,
  checkbox
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      "data-ocid": ocid,
      className: `flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-300 ${status === "critical" ? "border-destructive/40 bg-destructive/8" : status === "warning" ? "border-amber-500/30 bg-amber-500/5" : "border-border/30 bg-card/40"}`,
      animate: status === "critical" ? { x: [0, -2, 2, -2, 0] } : {},
      transition: { duration: 0.4, repeat: status === "critical" ? 4 : 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${status === "critical" ? "bg-destructive/15 text-destructive" : status === "warning" ? "bg-amber-500/15 text-amber-500" : "bg-primary/10 text-primary"}`,
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: value })
        ] }),
        checkbox && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 cursor-pointer text-xs text-muted-foreground select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              checked: checkbox.checked,
              onChange: checkbox.onChange,
              className: "accent-destructive w-4 h-4 cursor-pointer"
            }
          ),
          checkbox.label
        ] }) }),
        statusBadge(status)
      ]
    }
  );
}
function GPSMap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "emergency.gps_map.panel",
      className: "rounded-2xl overflow-hidden border border-border/30 bg-card relative h-40",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full opacity-20",
            viewBox: "0 0 400 160",
            preserveAspectRatio: "xMidYMid slice",
            "aria-hidden": "true",
            children: [
              [0, 36, 72, 108, 144, 180, 216, 252, 288, 324, 360, 396].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: x,
                  y1: "0",
                  x2: x,
                  y2: "160",
                  stroke: "currentColor",
                  strokeWidth: "0.5",
                  className: "text-muted-foreground"
                },
                `v-${x}`
              )),
              [0, 27, 54, 81, 108, 135, 162].map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "line",
                {
                  x1: "0",
                  y1: y,
                  x2: "400",
                  y2: y,
                  stroke: "currentColor",
                  strokeWidth: "0.5",
                  className: "text-muted-foreground"
                },
                `h-${y}`
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "0",
                  y: "65",
                  width: "400",
                  height: "8",
                  fill: "#64748b",
                  opacity: "0.3",
                  rx: "2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "180",
                  y: "0",
                  width: "8",
                  height: "160",
                  fill: "#64748b",
                  opacity: "0.3",
                  rx: "2"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "60",
                  y: "90",
                  width: "100",
                  height: "6",
                  fill: "#64748b",
                  opacity: "0.2",
                  rx: "1"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "260",
                  y: "30",
                  width: "6",
                  height: "80",
                  fill: "#64748b",
                  opacity: "0.2",
                  rx: "1"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "20",
                  y: "20",
                  width: "50",
                  height: "35",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "90",
                  y: "20",
                  width: "70",
                  height: "35",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "220",
                  y: "20",
                  width: "30",
                  height: "35",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "280",
                  y: "20",
                  width: "80",
                  height: "35",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "20",
                  y: "90",
                  width: "40",
                  height: "50",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "100",
                  y: "85",
                  width: "55",
                  height: "55",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "220",
                  y: "90",
                  width: "60",
                  height: "55",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "rect",
                {
                  x: "310",
                  y: "85",
                  width: "70",
                  height: "55",
                  fill: "#94a3b8",
                  opacity: "0.15",
                  rx: "3"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "relative",
            animate: { scale: [1, 1.05, 1] },
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute -inset-3 rounded-full bg-primary/20",
                  animate: { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] },
                  transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-primary border-2 border-primary-foreground shadow-lg" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/95 to-transparent px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: "42.3601° N, 71.0589° W — Boston, MA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "ml-auto text-[10px] px-1.5 py-0 border-emerald-500/50 text-emerald-500",
                children: "99% accuracy"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 ml-5", children: "Last updated: just now" })
        ] })
      ]
    }
  );
}
function HistoryRow({
  log,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.tr,
    {
      "data-ocid": `emergency.history.item.${index + 1}`,
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { delay: index * 0.06 },
      className: "border-b border-border/20 last:border-0 hover:bg-muted/20 transition-colors",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-xs text-muted-foreground whitespace-nowrap", children: formatTimestamp(log.timestamp) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: emergencyTypeColor(log.type),
            className: "text-xs",
            children: log.type
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-xs text-muted-foreground max-w-[160px] truncate", children: log.location.split(" — ")[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-center", children: log.notified ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "text-[10px] px-1.5 py-0 border-emerald-500/50 text-emerald-500",
            children: "✓ Yes"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] px-1.5 py-0", children: "No" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 text-center", children: log.resolved ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Resolved" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            animate: { opacity: [1, 0.4, 1] },
            transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
            className: "text-xs text-destructive font-semibold",
            children: "Active"
          }
        ) })
      ]
    }
  );
}
function Emergency() {
  const {
    isEmergency,
    triggerSOS,
    triggerAutoEmergency,
    emergencyLog,
    clearLog
  } = useEmergencyStore();
  const { heartRate, oxygenLevel } = useHealthStore();
  const [fallDetected, setFallDetected] = reactExports.useState(false);
  const [motionActive, setMotionActive] = reactExports.useState(true);
  const [caregiverNotified, setCaregiverNotified] = reactExports.useState(false);
  const autoTriggered = reactExports.useRef(false);
  const hrStatus = heartRate > 120 ? "critical" : heartRate > 105 ? "warning" : "normal";
  const o2Status = oxygenLevel < 90 ? "critical" : oxygenLevel < 94 ? "warning" : "normal";
  const fallStatus = fallDetected ? "critical" : "normal";
  const motionStatus = motionActive ? "normal" : "warning";
  const panicStatus = isEmergency ? "critical" : "normal";
  const overallCritical = hrStatus === "critical" || o2Status === "critical" || fallStatus === "critical";
  const overallWarning = !overallCritical && (hrStatus === "warning" || o2Status === "warning" || motionStatus === "warning");
  const aiLevel = overallCritical ? "critical" : overallWarning ? "warning" : "normal";
  const aiRecommendation = overallCritical ? "⚠️ Critical conditions detected. Emergency services have been alerted. Stay calm and remain still. Help is on the way." : overallWarning ? "Elevated readings detected. Please sit down, relax, and take deep breaths. Monitor vitals closely for the next 5 minutes." : "All vitals within normal range. Keep up the great wellness routine! Gentle activity and hydration are recommended.";
  reactExports.useEffect(() => {
    if ((heartRate > 120 || oxygenLevel < 90 || fallDetected) && !isEmergency && !autoTriggered.current) {
      autoTriggered.current = true;
      const type = heartRate > 120 ? "High Heart Rate" : oxygenLevel < 90 ? "Low Oxygen Level" : "Fall Detected";
      triggerAutoEmergency(type);
      setCaregiverNotified(true);
      ue.error(`⚠️ Auto Emergency: ${type}`, {
        duration: 6e3,
        description: "Your contact (91894932189) has been notified."
      });
    }
    if (!isEmergency) autoTriggered.current = false;
  }, [heartRate, oxygenLevel, fallDetected, isEmergency, triggerAutoEmergency]);
  const handleSOS = reactExports.useCallback(() => {
    setCaregiverNotified(true);
    triggerSOS();
    ue.error("🚨 SOS Emergency Activated!", {
      duration: 8e3,
      description: "91894932189 notified. Voice alert playing."
    });
  }, [triggerSOS]);
  const handleFallToggle = reactExports.useCallback(() => {
    setFallDetected((v) => {
      const next = !v;
      if (next) {
        ue.warning("Fall Sensor triggered for demo", { duration: 3e3 });
      }
      return next;
    });
  }, []);
  const handleMotionToggle = reactExports.useCallback(() => {
    setMotionActive((v) => !v);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      className: "space-y-6",
      "data-ocid": "emergency.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black font-display text-foreground", children: "Emergency Control Center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Real-time IoT sensor monitoring & emergency response" })
          ] }),
          isEmergency && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              animate: { opacity: [1, 0.5, 1] },
              transition: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
              className: "flex items-center gap-2 bg-destructive/15 border border-destructive/40 rounded-xl px-4 py-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "h-4 w-4 text-destructive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-destructive", children: "EMERGENCY ACTIVE" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.section,
              {
                "data-ocid": "emergency.sensors.panel",
                className: "bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-5 shadow-soft",
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display", children: "Live Sensor Status" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        animate: { rotate: 360 },
                        transition: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 text-muted-foreground" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SensorRow,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
                        label: "Heart Rate Monitor",
                        value: `${heartRate} bpm — live from wearable`,
                        status: hrStatus,
                        ocid: "emergency.sensor.heartrate"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SensorRow,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "h-4 w-4" }),
                        label: "Oxygen Sensor",
                        value: `SpO₂ ${oxygenLevel}% — fingertip sensor`,
                        status: o2Status,
                        ocid: "emergency.sensor.oxygen"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SensorRow,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Waves, { className: "h-4 w-4" }),
                        label: "Fall Detection Sensor",
                        value: fallDetected ? "⚠️ FALL DETECTED — Accelerometer triggered" : "Normal — Accelerometer stable",
                        status: fallStatus,
                        ocid: "emergency.sensor.fall",
                        checkbox: {
                          checked: fallDetected,
                          onChange: handleFallToggle,
                          label: "Simulate fall"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SensorRow,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" }),
                        label: "Motion Sensor",
                        value: motionActive ? "Active — Movement detected" : "No movement for 30+ minutes",
                        status: motionStatus,
                        ocid: "emergency.sensor.motion",
                        checkbox: {
                          checked: !motionActive,
                          onChange: handleMotionToggle,
                          label: "No movement"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SensorRow,
                      {
                        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "h-4 w-4" }),
                        label: "Panic Button",
                        value: isEmergency ? "Pressed — Emergency active" : "Standby — Ready",
                        status: panicStatus,
                        ocid: "emergency.sensor.panic"
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.section,
              {
                "data-ocid": "emergency.gps.panel",
                className: "bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-5 shadow-soft",
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display", children: "GPS Location Simulation" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GPSMap, {})
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.section,
              {
                "data-ocid": "emergency.history.panel",
                className: "bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-5 shadow-soft",
                initial: { opacity: 0, x: -16 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-4 w-4 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display", children: "Emergency History" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                          emergencyLog.length,
                          " recorded event",
                          emergencyLog.length !== 1 ? "s" : ""
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        onClick: () => {
                          clearLog();
                          ue.success("Emergency log cleared");
                        },
                        className: "text-muted-foreground hover:text-destructive h-8 px-3 text-xs",
                        "data-ocid": "emergency.clear_log_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 mr-1.5" }),
                          "Clear Log"
                        ]
                      }
                    )
                  ] }),
                  emergencyLog.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": "emergency.history.empty_state",
                      className: "py-10 text-center text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 mx-auto mb-2 text-emerald-500/60" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "No emergency events recorded" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "All clear!" })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[500px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-left border-b border-border/30", children: [
                      "Date / Time",
                      "Type",
                      "Location",
                      "Notified",
                      "Status"
                    ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "pb-2 px-3 text-xs font-semibold text-muted-foreground",
                        children: h
                      },
                      h
                    )) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: emergencyLog.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(HistoryRow, { log, index: i }, log.id)) }) })
                  ] }) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.section,
              {
                "data-ocid": "emergency.sos.panel",
                className: "bg-card/60 backdrop-blur-md rounded-2xl border border-border/30 p-6 shadow-soft flex flex-col items-center text-center",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.15, type: "spring", stiffness: 200 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 self-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4 text-destructive" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display", children: "SOS Emergency" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground self-start mb-6 ml-10", children: "Tap to trigger immediate emergency alert" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center my-2", children: [
                    [1, 2, 3].map((ring) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "absolute rounded-full border border-destructive/30",
                        style: { width: 200 + ring * 32, height: 200 + ring * 32 },
                        animate: {
                          scale: isEmergency ? [1, 1.1, 1] : [1, 1.04, 1],
                          opacity: isEmergency ? [0.6, 0.2, 0.6] : [0.3, 0.08, 0.3]
                        },
                        transition: {
                          duration: isEmergency ? 0.8 : 2,
                          delay: ring * 0.25,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        }
                      },
                      ring
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.button,
                      {
                        "data-ocid": "emergency.sos_button",
                        type: "button",
                        onClick: handleSOS,
                        "aria-label": "Activate SOS Emergency",
                        className: `relative w-[200px] h-[200px] rounded-full font-black font-display text-white shadow-2xl border-4 flex flex-col items-center justify-center gap-1 cursor-pointer select-none ${isEmergency ? "bg-destructive border-destructive/60" : "bg-destructive border-destructive/40 hover:bg-destructive/90"}`,
                        whileHover: { scale: 1.04 },
                        whileTap: { scale: 0.95 },
                        animate: {
                          boxShadow: isEmergency ? [
                            "0 0 30px 10px rgba(220,38,38,0.4)",
                            "0 0 60px 25px rgba(220,38,38,0.7)",
                            "0 0 30px 10px rgba(220,38,38,0.4)"
                          ] : [
                            "0 0 20px 5px rgba(220,38,38,0.25)",
                            "0 0 40px 15px rgba(220,38,38,0.4)",
                            "0 0 20px 5px rgba(220,38,38,0.25)"
                          ]
                        },
                        transition: {
                          duration: isEmergency ? 0.8 : 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-8 w-8 mb-1" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl tracking-wider leading-none", children: "SOS" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium opacity-90 tracking-widest", children: "EMERGENCY" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-6 leading-relaxed max-w-[180px]", children: "Immediately contacts 91894932189 & emergency services" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.section,
              {
                "data-ocid": "emergency.ai_assessment.panel",
                className: `backdrop-blur-md rounded-2xl border p-5 shadow-soft transition-all duration-500 ${aiLevel === "critical" ? "bg-destructive/8 border-destructive/30" : aiLevel === "warning" ? "bg-amber-500/8 border-amber-500/30" : "bg-emerald-500/8 border-emerald-500/30"}`,
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `w-8 h-8 rounded-lg flex items-center justify-center ${aiLevel === "critical" ? "bg-destructive/15 text-destructive" : aiLevel === "warning" ? "bg-amber-500/15 text-amber-500" : "bg-emerald-500/15 text-emerald-500"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display text-sm", children: "AI Assessment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Real-time analysis" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: statusBadge(aiLevel) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `text-sm leading-relaxed rounded-xl p-3 ${aiLevel === "critical" ? "bg-destructive/8 text-destructive" : aiLevel === "warning" ? "bg-amber-500/8 text-amber-600 dark:text-amber-400" : "bg-emerald-500/8 text-emerald-700 dark:text-emerald-400"}`,
                      children: aiRecommendation
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: caregiverNotified ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.section,
              {
                "data-ocid": "emergency.caregiver_alert.panel",
                className: "bg-primary/8 backdrop-blur-md rounded-2xl border border-primary/25 p-5 shadow-soft",
                initial: { opacity: 0, y: 20, scale: 0.95 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                transition: { type: "spring", stiffness: 250, damping: 22 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center",
                        animate: { scale: [1, 1.1, 1] },
                        transition: {
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display text-sm", children: "Caregiver Notified" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "ml-auto text-[10px] px-1.5 border-emerald-500/50 text-emerald-500",
                        children: "✓ Sent"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 bg-card/50 rounded-xl p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-primary", children: "SC" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Dr. Sarah Chen" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Primary Caregiver" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [
                      "SMS notification sent",
                      "App push notification sent",
                      "GPS location shared"
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 text-xs text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500 flex-shrink-0" }),
                          item
                        ]
                      },
                      item
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground italic bg-muted/30 rounded-lg p-2", children: "Simulated — No real notifications sent" })
                  ] })
                ]
              },
              "notified"
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": "emergency.standby.panel",
                className: "bg-muted/20 rounded-2xl border border-border/20 p-5 text-center",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { delay: 0.35 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-8 w-8 text-muted-foreground/50 mx-auto mb-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Caregiver on standby" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "91894932189 will be notified automatically" })
                ]
              },
              "standby"
            ) })
          ] })
        ] })
      ]
    }
  ) });
}
export {
  Emergency as default
};
