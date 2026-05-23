import { r as reactExports, u as useNavigate, j as jsxRuntimeExports } from "./index-D1My1Djg.js";
import { r as resolveElements, m as motion, H as Heart, B as Button } from "./proxy-CjookoZg.js";
import { S as Sparkles } from "./sparkles-CIA-7qOT.js";
import { S as Shield } from "./shield-CXbbi-B_.js";
import { A as Activity } from "./activity-Wrxa32qX.js";
import { B as Bot } from "./bot-dlCMaPhs.js";
import { B as Brain, Z as Zap } from "./zap-BsdlKos8.js";
import { B as Bell, U as Users, M as Moon } from "./users-A7LrIhw3.js";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const features = [
  {
    icon: Brain,
    title: "AI Health Monitoring",
    description: "Real-time AI analysis of heart rate, blood pressure, and oxygen levels with smart anomaly detection.",
    gradient: "from-primary/20 to-primary/5",
    iconColor: "text-primary"
  },
  {
    icon: Bell,
    title: "Medicine Reminders",
    description: "Voice-guided medication alerts, schedule management, and daily progress tracking for full adherence.",
    gradient: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary"
  },
  {
    icon: Shield,
    title: "Emergency Detection",
    description: "Smart IoT simulation detects falls, elevated heart rate, and low oxygen — triggers instant caregiver alerts.",
    gradient: "from-destructive/20 to-destructive/5",
    iconColor: "text-destructive"
  },
  {
    icon: Zap,
    title: "Voice Assistant",
    description: "Spoken reminders and emergency alerts using browser Speech Synthesis — fully hands-free experience.",
    gradient: "from-accent/20 to-accent/5",
    iconColor: "text-accent"
  },
  {
    icon: Users,
    title: "Caregiver Connect",
    description: "Dedicated caregiver dashboard with live status, emergency history, and health summaries at a glance.",
    gradient: "from-primary/15 to-secondary/10",
    iconColor: "text-primary"
  },
  {
    icon: Moon,
    title: "24/7 AI Insights",
    description: "Wellness scoring, sleep tracking, and personalized AI recommendations that evolve with the patient.",
    gradient: "from-secondary/15 to-primary/10",
    iconColor: "text-secondary"
  }
];
const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Geriatric Specialist, NYC Medical Center",
    quote: "This platform has transformed how we manage elderly patients remotely. The AI emergency detection has prevented three hospitalizations in my practice alone.",
    avatar: "PS"
  },
  {
    name: "Robert & Linda Chen",
    role: "Family Caregivers, San Francisco",
    quote: "We finally have peace of mind about Mom living alone. The real-time health dashboard and instant SOS alerts mean we're always one tap away from knowing she's safe.",
    avatar: "RL"
  },
  {
    name: "Eleanor Whitfield",
    role: "Resident, Silver Oak Senior Living",
    quote: "The medicine reminders have eliminated my missed doses completely. The voice assistant feels like a kind companion who genuinely cares about my wellbeing.",
    avatar: "EW"
  }
];
const stats = [
  { value: "500+", label: "Families Protected", icon: Heart },
  { value: "99.9%", label: "System Uptime", icon: Activity },
  { value: "24/7", label: "AI Support", icon: Sparkles },
  { value: "<30s", label: "Emergency Response", icon: Shield }
];
function FadeInSection({
  children,
  delay = 0
}) {
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 32 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
function Landing() {
  const navigate = useNavigate();
  const featuresRef = reactExports.useRef(null);
  function scrollToFeatures() {
    var _a;
    (_a = featuresRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.header,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/30 shadow-soft",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl gradient-calm flex items-center justify-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-lg text-foreground leading-none", children: "Smart Elderly Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-xs text-muted-foreground", children: "Emergency Assistance" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => navigate({ to: "/login" }),
                "data-ocid": "nav.login_button",
                children: "Sign In"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: () => navigate({ to: "/signup" }),
                className: "gradient-calm text-primary-foreground shadow-soft transition-healthcare hover:scale-105",
                "data-ocid": "nav.signup_button",
                children: "Get Started"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[90vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full",
            style: {
              background: "radial-gradient(circle, oklch(var(--primary) / 0.15) 0%, transparent 70%)"
            },
            animate: { scale: [1, 1.08, 1], rotate: [0, 5, 0] },
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full",
            style: {
              background: "radial-gradient(circle, oklch(var(--secondary) / 0.15) 0%, transparent 70%)"
            },
            animate: { scale: [1.08, 1, 1.08], rotate: [0, -5, 0] },
            transition: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full",
            style: {
              background: "radial-gradient(circle, oklch(var(--accent) / 0.08) 0%, transparent 70%)"
            },
            animate: { y: [-20, 20, -20] },
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -40 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-6",
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.2 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                      "AI-Powered Healthcare Platform"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl xl:text-7xl font-black font-display leading-[1.05] tracking-tight", children: [
                  "Smart Care",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "bg-clip-text text-transparent",
                      style: {
                        backgroundImage: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))"
                      },
                      children: "for Your"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Loved Ones"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              className: "text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg",
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: {
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              },
              children: "AI-powered health monitoring, emergency detection, and caregiver connectivity — giving families peace of mind and seniors the independence they deserve."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-wrap gap-4",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.35 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: () => navigate({ to: "/login" }),
                    className: "gradient-calm text-primary-foreground btn-accessible shadow-soft-dark transition-healthcare hover:scale-105 hover:shadow-lg px-8",
                    "data-ocid": "hero.get_started_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 mr-2" }),
                      "Get Started Free"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    onClick: scrollToFeatures,
                    className: "btn-accessible transition-healthcare hover:scale-105 border-border/50 px-8",
                    "data-ocid": "hero.learn_more_button",
                    children: "Learn More"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "flex flex-wrap gap-3",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              children: [
                { icon: "🔒", label: "HIPAA Compliant" },
                { icon: "⚡", label: "Real-time Monitoring" },
                { icon: "🌐", label: "24/7 Available" }
              ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/30",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: badge.icon }),
                    badge.label
                  ]
                },
                badge.label
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "relative z-10 hidden lg:block",
            initial: { opacity: 0, x: 40, scale: 0.95 },
            animate: { opacity: 1, x: 0, scale: 1 },
            transition: {
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1]
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-3xl blur-xl opacity-40",
                  style: {
                    background: "linear-gradient(135deg, oklch(var(--primary) / 0.4), oklch(var(--secondary) / 0.4))"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "aria-label": "Smart Elderly Care AI Dashboard",
                  className: "relative rounded-3xl shadow-soft-dark border border-border/20 w-full overflow-hidden",
                  style: { aspectRatio: "2/1" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0",
                        style: {
                          background: "linear-gradient(135deg, oklch(var(--primary) / 0.25) 0%, oklch(var(--secondary) / 0.2) 40%, oklch(var(--accent) / 0.15) 100%)"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-5 p-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [
                        { label: "Heart Rate", value: "72 bpm", icon: "❤️" },
                        { label: "Oxygen", value: "98%", icon: "💨" },
                        { label: "BP", value: "118/76", icon: "⚡" }
                      ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "glass rounded-2xl px-4 py-3 text-center shadow-soft",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-1", children: m.icon }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: m.value })
                          ]
                        },
                        m.label
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-6 py-3 flex items-center gap-3 shadow-soft", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "All vitals normal — AI monitoring active" })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 shadow-soft-dark",
                  animate: { y: [0, -6, 0] },
                  transition: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-green-400" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Heart Rate" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "72 bpm" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute -top-4 -right-6 glass rounded-2xl px-4 py-3 shadow-soft-dark",
                  animate: { y: [0, 6, 0] },
                  transition: {
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "All Normal" })
                    ] })
                  ] })
                }
              )
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-y border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-black font-display text-foreground", children: stat.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: stat.label })
    ] }) }, stat.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        ref: featuresRef,
        id: "features",
        className: "py-24 bg-background",
        "data-ocid": "features.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" }),
              "Powered by AI"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl font-black font-display tracking-tight", children: "Everything your family needs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "A complete platform designed to keep seniors safe, healthy, and connected — with zero compromise on usability." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileHover: { y: -4, scale: 1.01 },
              transition: { type: "spring", stiffness: 400, damping: 20 },
              className: `glass rounded-2xl p-6 border border-border/20 bg-gradient-to-br ${feature.gradient} hover:shadow-soft-dark transition-smooth cursor-default`,
              "data-ocid": `features.card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: `h-6 w-6 ${feature.iconColor}` }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold font-display mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.description })
              ]
            }
          ) }, feature.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/30 border-y border-border/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl font-black font-display tracking-tight", children: "Trusted by families worldwide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground", children: "Real stories from caregivers and seniors who rely on our platform every day." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { y: -3 },
          transition: { type: "spring", stiffness: 300, damping: 20 },
          className: "glass rounded-2xl p-6 border border-border/20 flex flex-col gap-4 h-full",
          "data-ocid": `testimonials.card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: [
              "“",
              t.quote,
              "”"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-border/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0",
                  style: {
                    background: "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))"
                  },
                  children: t.avatar
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: t.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t.role })
              ] })
            ] })
          ]
        }
      ) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        whileHover: { scale: 1.01 },
        transition: { type: "spring", stiffness: 200, damping: 20 },
        className: "rounded-3xl p-12 text-center relative overflow-hidden border border-primary/20",
        style: {
          background: "linear-gradient(135deg, oklch(var(--primary) / 0.12), oklch(var(--secondary) / 0.12))"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5",
              style: {
                backgroundImage: "radial-gradient(circle at 20% 80%, oklch(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(var(--secondary)) 0%, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl gradient-calm mx-auto flex items-center justify-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-5xl font-black font-display", children: "Start protecting your loved ones today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Join 500+ families who trust Smart Elderly Care to keep their seniors safe, healthy, and connected." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  onClick: () => navigate({ to: "/signup" }),
                  className: "gradient-calm text-primary-foreground btn-accessible shadow-soft-dark transition-healthcare hover:scale-105 px-10",
                  "data-ocid": "cta.signup_button",
                  children: "Create Free Account"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  onClick: () => navigate({ to: "/login" }),
                  className: "btn-accessible transition-healthcare hover:scale-105 border-border/50 px-10",
                  "data-ocid": "cta.login_button",
                  children: "Sign In"
                }
              )
            ] })
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-card border-t border-border/30 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-xl gradient-calm flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: "Smart Elderly Care" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ". Built with love using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-primary hover:underline",
            children: "caffeine.ai"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-foreground transition-colors cursor-pointer", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-foreground transition-colors cursor-pointer", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-foreground transition-colors cursor-pointer", children: "Support" })
      ] })
    ] }) })
  ] });
}
export {
  Landing as default
};
