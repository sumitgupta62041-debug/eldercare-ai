import { m as useChatStore, e as useHealthStore, f as useMedicineStore, r as reactExports, j as jsxRuntimeExports } from "./index-D1My1Djg.js";
import { c as createLucideIcon, m as motion, H as Heart, B as Button } from "./proxy-CjookoZg.js";
import { I as Input } from "./input-EC5JqgpV.js";
import { A as AppLayout } from "./AppLayout-A3oTh0KX.js";
import { B as Bot } from "./bot-dlCMaPhs.js";
import { S as Sparkles } from "./sparkles-CIA-7qOT.js";
import { A as AnimatePresence } from "./index-CXVWI1BC.js";
import { U as User } from "./user-CzBdarbj.js";
import { V as Volume2 } from "./volume-2-B46_H9EB.js";
import "./users-A7LrIhw3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
];
const MicOff = createLucideIcon("mic-off", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
];
const Mic = createLucideIcon("mic", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
];
const Wifi = createLucideIcon("wifi", __iconNode);
const quickActions = [
  { label: "I feel weak 😟", text: "I feel weak and dizzy" },
  { label: "Check my vitals", text: "Check my vitals" },
  { label: "Medicine status", text: "medicine status" },
  { label: "Emergency help", text: "emergency help" },
  { label: "Daily wellness tip", text: "wellness tip" },
  { label: "I feel lonely", text: "I feel lonely" }
];
const wellnessTips = [
  "💧 Stay hydrated! Aim for 8 glasses of water daily — even mild dehydration can cause fatigue and confusion.",
  "🌙 Quality sleep heals your body. Try to maintain a consistent bedtime around 10 PM for optimal rest.",
  "🚶 Gentle 15-minute walks improve circulation, mood, and joint health. Even small movements count!",
  "🍎 Eating colorful fruits and vegetables provides antioxidants that support heart and brain health.",
  "🧘 Deep breathing exercises for 5 minutes can reduce blood pressure and ease anxiety naturally."
];
let tipIndex = 0;
function getNextTip() {
  const tip = wellnessTips[tipIndex % wellnessTips.length];
  tipIndex++;
  return tip;
}
function buildAIResponse(text, vitals, upcomingMeds) {
  const lower = text.toLowerCase();
  if (/weak|dizzy|tired|faint|lightheaded/.test(lower)) {
    return "Please sit down immediately and rest. 🪑 Drink a glass of water slowly. If your symptoms persist for more than 10 minutes, or if you feel a sudden worsening, please press the SOS button or contact your caregiver Dr. Sarah Chen right away. Your safety is the top priority.";
  }
  if (/vital|heart|oxygen|blood pressure|bp|bpm/.test(lower)) {
    const bpStatus = vitals.bloodPressure.systolic > 140 ? "slightly elevated — please rest" : "within normal range";
    const hrStatus = vitals.heartRate > 100 ? "elevated — try to relax" : "normal";
    const o2Status = vitals.oxygenLevel < 92 ? "low — please contact caregiver" : "excellent";
    const overall = vitals.oxygenLevel >= 95 && vitals.heartRate < 100 ? "good today! Keep up with your medications." : "like it needs attention. Please rest and consult Dr. Chen if needed.";
    return `📊 Your current vitals:

• Heart Rate: ${vitals.heartRate} bpm (${hrStatus})
• Blood Pressure: ${vitals.bloodPressure.systolic}/${vitals.bloodPressure.diastolic} mmHg (${bpStatus})
• Oxygen Level: ${vitals.oxygenLevel}% (${o2Status})

Overall your health status looks ${overall}`;
  }
  if (/medicine|medication|pill|dose|tablet|remind/.test(lower)) {
    if (upcomingMeds.length === 0) {
      return "✅ Great news! You have taken all your scheduled medications for today. Your next medicines will be listed tomorrow morning. Well done for staying on track!";
    }
    const medList = upcomingMeds.map((m) => `• ${m}`).join("\n");
    return `💊 Your upcoming medications today:

${medList}

Remember to take each medicine with a full glass of water. Would you like me to set a voice reminder?`;
  }
  if (/emergency|sos|help|call|911|danger/.test(lower)) {
    return "🚨 If you are experiencing an emergency, please press the large red SOS button immediately! I am alerting your caregiver Dr. Sarah Chen right now. Stay calm, stay where you are, and try to breathe slowly. Help is on the way.";
  }
  if (/lonely|alone|sad|depressed|upset|down/.test(lower)) {
    return "💙 I understand, and I want you to know — you are never truly alone. Dr. Sarah Chen checks in regularly and cares deeply about your wellbeing. Your family loves you. Would you like me to send a message to your caregiver so they know you could use some company today?";
  }
  if (/tip|wellness|advice|healthy|better|improve/.test(lower)) {
    return getNextTip();
  }
  if (/chest|pain|ache|hurt/.test(lower)) {
    return "⚠️ Chest pain or discomfort should never be ignored. Please sit down, stay calm, and press the SOS button now. Take slow, deep breaths while help is arranged. Do not exert yourself.";
  }
  if (/sleep|insomnia|rest|night/.test(lower)) {
    return "😴 Good sleep is essential for your health and wellbeing. Try keeping a consistent bedtime around 10 PM, avoid bright screens 1 hour before bed, and keep your room cool and quiet. A warm herbal tea before bed can also help you relax.";
  }
  return "I am here to help you every step of the way. 🤍 Can you tell me more about how you are feeling right now? You can also use the quick action buttons above for common health topics.";
}
function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const clean = text.replace(/[\u{1F300}-\u{1FFFF}\u{2600}-\u{27BF}]/gu, "");
    const u = new SpeechSynthesisUtterance(clean);
    u.rate = 0.85;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  }
}
function TypingIndicator() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -4, scale: 0.95 },
      transition: { type: "spring", stiffness: 400, damping: 28 },
      className: "flex gap-3 items-end",
      "data-ocid": "chat.typing.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-9 h-9 rounded-full gradient-calm flex items-center justify-center shadow-soft ring-2 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border border-border/20 rounded-2xl rounded-bl-sm px-4 py-3 flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "w-2 h-2 rounded-full bg-primary/70",
              animate: { y: [-3, 0, -3], opacity: [0.4, 1, 0.4] },
              transition: {
                duration: 0.7,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.18,
                ease: "easeInOut"
              }
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Health AI is thinking…" })
        ] })
      ]
    },
    "typing-indicator"
  );
}
function MessageBubble({
  id,
  role,
  content,
  timestamp,
  index
}) {
  const isUser = role === "user";
  const time = new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16, scale: 0.96 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { type: "spring", stiffness: 420, damping: 32, delay: 0.02 },
      className: `flex gap-3 items-end group ${isUser ? "flex-row-reverse" : "flex-row"}`,
      "data-ocid": `chat.message.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-soft ring-2 ${isUser ? "bg-muted ring-border/30" : "gradient-calm ring-primary/20"}`,
            children: isUser ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex flex-col gap-1 max-w-[72%] ${isUser ? "items-end" : "items-start"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${isUser ? "bg-primary/20 text-foreground border border-primary/30 rounded-br-sm" : "glass border border-border/20 text-foreground rounded-bl-sm"}`,
                  children: content
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100 ${isUser ? "flex-row-reverse" : "flex-row"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground tabular-nums", children: time }),
                    !isUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => speak(content),
                        className: "text-muted-foreground hover:text-primary transition-colors rounded p-0.5",
                        "aria-label": "Read message aloud",
                        "data-ocid": `chat.speak_button.${index + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-3 w-3" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    },
    id
  );
}
function ChatPage() {
  const { messages, isTyping, sendMessage } = useChatStore();
  const { heartRate, oxygenLevel, bloodPressure } = useHealthStore();
  const { reminders, medicines } = useMedicineStore();
  const [input, setInput] = reactExports.useState("");
  const [isListening, setIsListening] = reactExports.useState(false);
  const bottomRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
  const handleSend = (text) => {
    var _a;
    const msg = (text ?? input).trim();
    if (!msg || isTyping) return;
    setInput("");
    const now = /* @__PURE__ */ new Date();
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    const upcomingMeds = reminders.filter((r) => !r.taken && r.scheduledTime >= currentTime).map((r) => {
      const med = medicines.find((m) => m.id === r.medicineId);
      return `${r.medicineName}${med ? ` (${med.dosage})` : ""} at ${r.scheduledTime}`;
    });
    const aiReply = buildAIResponse(
      msg,
      { heartRate, oxygenLevel, bloodPressure },
      upcomingMeds
    );
    sendMessage(msg);
    setTimeout(() => {
      useChatStore.setState((state) => {
        const msgs = [...state.messages];
        for (let i = msgs.length - 1; i >= 0; i--) {
          if (msgs[i].role === "assistant") {
            msgs[i] = { ...msgs[i], content: aiReply };
            break;
          }
        }
        return { messages: msgs };
      });
    }, 950);
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleVoice = () => {
    const w = window;
    const SpeechRec = w.webkitSpeechRecognition ?? w.SpeechRecognition;
    if (!SpeechRec) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }
    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    setIsListening(true);
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col h-[calc(100vh-120px)] gap-3",
      "data-ocid": "chat.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            className: "glass rounded-2xl px-5 py-4 border border-border/20 flex items-center gap-4 shrink-0",
            "data-ocid": "chat.header.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-calm flex items-center justify-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-6 w-6 text-primary-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-card" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold font-display text-foreground text-lg leading-tight", children: "AI Health Assistant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Powered by Smart Health AI" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "w-2 h-2 rounded-full bg-emerald-500",
                    animate: { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] },
                    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-emerald-600 dark:text-emerald-400", children: "Online" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-3 w-3 text-emerald-500" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-4 px-4 py-2 rounded-xl bg-muted/30 border border-border/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 text-destructive" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tabular-nums", children: heartRate }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "bpm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-border/30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold tabular-nums", children: [
                    oxygenLevel,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "O₂" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.08 },
            className: "flex gap-2 flex-wrap shrink-0",
            "data-ocid": "chat.quick_actions.section",
            children: quickActions.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                type: "button",
                whileHover: { scale: 1.04, y: -1 },
                whileTap: { scale: 0.97 },
                onClick: () => handleSend(action.text),
                disabled: isTyping,
                className: "text-xs px-3.5 py-1.5 rounded-full bg-muted/50 border border-border/25 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/35 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium",
                "data-ocid": `chat.quick_action.${i + 1}`,
                children: action.label
              },
              action.text
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-1 overflow-y-auto glass rounded-2xl p-5 border border-border/20 space-y-5 min-h-0",
            "data-ocid": "chat.messages.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { initial: false, children: [
                messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MessageBubble,
                  {
                    id: msg.id,
                    role: msg.role,
                    content: msg.content,
                    timestamp: msg.timestamp,
                    index: i
                  },
                  msg.id
                )),
                isTyping && /* @__PURE__ */ jsxRuntimeExports.jsx(TypingIndicator, {}, "typing")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "glass rounded-2xl px-3 py-2.5 border border-border/20 flex items-center gap-2 shrink-0",
            "data-ocid": "chat.input.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "button",
                  whileTap: { scale: 0.92 },
                  onClick: handleVoice,
                  disabled: isTyping,
                  "aria-label": isListening ? "Stop listening" : "Start voice input",
                  "data-ocid": "chat.voice_button",
                  className: `flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-200 ${isListening ? "bg-destructive/20 text-destructive border border-destructive/40 animate-pulse" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/20"}`,
                  children: isListening ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  ref: inputRef,
                  value: input,
                  onChange: (e) => setInput(e.target.value),
                  onKeyDown: handleKeyDown,
                  placeholder: "Ask about your health, medicines, or wellness…",
                  className: "flex-1 border-0 bg-transparent text-sm h-10 focus-visible:ring-0 placeholder:text-muted-foreground/60",
                  "data-ocid": "chat.message.input",
                  "aria-label": "Chat message input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.8, opacity: 0 },
                  transition: { duration: 0.15 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      onClick: () => handleSend(),
                      disabled: !input.trim() || isTyping,
                      className: "h-10 w-10 p-0 gradient-calm border-0 text-primary-foreground rounded-xl shadow-soft disabled:opacity-40 flex-shrink-0",
                      "aria-label": "Send message",
                      "data-ocid": "chat.send_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                    }
                  )
                },
                isTyping ? "loading" : "idle"
              ) })
            ]
          }
        )
      ]
    }
  ) });
}
export {
  ChatPage as default
};
