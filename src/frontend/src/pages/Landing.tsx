import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/layouts/AuthLayout";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  Bell,
  Bot,
  Brain,
  Heart,
  Moon,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// ── Feature cards data ────────────────────────────────────────────────────────
const features = [
  {
    icon: Brain,
    title: "AI Health Monitoring",
    description:
      "Real-time AI analysis of heart rate, blood pressure, and oxygen levels with smart anomaly detection.",
    gradient: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Bell,
    title: "Medicine Reminders",
    description:
      "Voice-guided medication alerts, schedule management, and daily progress tracking for full adherence.",
    gradient: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Shield,
    title: "Emergency Detection",
    description:
      "Smart IoT simulation detects falls, elevated heart rate, and low oxygen — triggers instant caregiver alerts.",
    gradient: "from-destructive/20 to-destructive/5",
    iconColor: "text-destructive",
  },
  {
    icon: Zap,
    title: "Voice Assistant",
    description:
      "Spoken reminders and emergency alerts using browser Speech Synthesis — fully hands-free experience.",
    gradient: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Users,
    title: "Caregiver Connect",
    description:
      "Dedicated caregiver dashboard with live status, emergency history, and health summaries at a glance.",
    gradient: "from-primary/15 to-secondary/10",
    iconColor: "text-primary",
  },
  {
    icon: Moon,
    title: "24/7 AI Insights",
    description:
      "Wellness scoring, sleep tracking, and personalized AI recommendations that evolve with the patient.",
    gradient: "from-secondary/15 to-primary/10",
    iconColor: "text-secondary",
  },
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Geriatric Specialist, NYC Medical Center",
    quote:
      "This platform has transformed how we manage elderly patients remotely. The AI emergency detection has prevented three hospitalizations in my practice alone.",
    avatar: "PS",
  },
  {
    name: "Robert & Linda Chen",
    role: "Family Caregivers, San Francisco",
    quote:
      "We finally have peace of mind about Mom living alone. The real-time health dashboard and instant SOS alerts mean we're always one tap away from knowing she's safe.",
    avatar: "RL",
  },
  {
    name: "Eleanor Whitfield",
    role: "Resident, Silver Oak Senior Living",
    quote:
      "The medicine reminders have eliminated my missed doses completely. The voice assistant feels like a kind companion who genuinely cares about my wellbeing.",
    avatar: "EW",
  },
];

const stats = [
  { value: "500+", label: "Families Protected", icon: Heart },
  { value: "99.9%", label: "System Uptime", icon: Activity },
  { value: "24/7", label: "AI Support", icon: Sparkles },
  { value: "<30s", label: "Emergency Response", icon: Shield },
];

// ── Animated section wrapper ──────────────────────────────────────────────────
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);

  function scrollToFeatures() {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/30 shadow-soft"
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl gradient-calm flex items-center justify-center shadow-soft">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-black text-lg text-foreground leading-none">
                Smart Elderly Care
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Emergency Assistance
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate({ to: "/login" })}
              data-ocid="nav.login_button"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={() => navigate({ to: "/signup" })}
              className="gradient-calm text-primary-foreground shadow-soft transition-healthcare hover:scale-105"
              data-ocid="nav.signup_button"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.header>

      {/* ── Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(var(--primary) / 0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(var(--secondary) / 0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1.08, 1, 1.08], rotate: [0, -5, 0] }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, oklch(var(--accent) / 0.08) 0%, transparent 70%)",
            }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: text */}
          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                AI-Powered Healthcare Platform
              </motion.span>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black font-display leading-[1.05] tracking-tight">
                Smart Care
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))",
                  }}
                >
                  for Your
                </span>
                <br />
                Loved Ones
              </h1>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              AI-powered health monitoring, emergency detection, and caregiver
              connectivity — giving families peace of mind and seniors the
              independence they deserve.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Button
                size="lg"
                onClick={() => navigate({ to: "/login" })}
                className="gradient-calm text-primary-foreground btn-accessible shadow-soft-dark transition-healthcare hover:scale-105 hover:shadow-lg px-8"
                data-ocid="hero.get_started_button"
              >
                <Heart className="h-5 w-5 mr-2" />
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
                className="btn-accessible transition-healthcare hover:scale-105 border-border/50 px-8"
                data-ocid="hero.learn_more_button"
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: "🔒", label: "HIPAA Compliant" },
                { icon: "⚡", label: "Real-time Monitoring" },
                { icon: "🌐", label: "24/7 Available" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/30"
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: hero image */}
          <motion.div
            className="relative z-10 hidden lg:block"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-xl opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(var(--primary) / 0.4), oklch(var(--secondary) / 0.4))",
                }}
              />
              <div
                aria-label="Smart Elderly Care AI Dashboard"
                className="relative rounded-3xl shadow-soft-dark border border-border/20 w-full overflow-hidden"
                style={{ aspectRatio: "2/1" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(var(--primary) / 0.25) 0%, oklch(var(--secondary) / 0.2) 40%, oklch(var(--accent) / 0.15) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
                  <div className="flex gap-3">
                    {[
                      { label: "Heart Rate", value: "72 bpm", icon: "❤️" },
                      { label: "Oxygen", value: "98%", icon: "💨" },
                      { label: "BP", value: "118/76", icon: "⚡" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="glass rounded-2xl px-4 py-3 text-center shadow-soft"
                      >
                        <div className="text-xl mb-1">{m.icon}</div>
                        <div className="text-xs text-muted-foreground">
                          {m.label}
                        </div>
                        <div className="text-sm font-bold text-foreground">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="glass rounded-2xl px-6 py-3 flex items-center gap-3 shadow-soft">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">
                      All vitals normal — AI monitoring active
                    </span>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 shadow-soft-dark"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Heart Rate</p>
                    <p className="text-sm font-bold text-foreground">72 bpm</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-6 glass rounded-2xl px-4 py-3 shadow-soft-dark"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-sm font-bold text-foreground">
                      All Normal
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar */}
      <section className="bg-card border-y border-border/30">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-3xl font-black font-display text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features */}
      <section
        ref={featuresRef}
        id="features"
        className="py-24 bg-background"
        data-ocid="features.section"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16 space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                <Bot className="h-4 w-4" />
                Powered by AI
              </span>
              <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight">
                Everything your family needs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete platform designed to keep seniors safe, healthy, and
                connected — with zero compromise on usability.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeInSection key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`glass rounded-2xl p-6 border border-border/20 bg-gradient-to-br ${feature.gradient} hover:shadow-soft-dark transition-smooth cursor-default`}
                  data-ocid={`features.card.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-background/50">
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials */}
      <section className="py-24 bg-muted/30 border-y border-border/20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight">
                Trusted by families worldwide
              </h2>
              <p className="text-lg text-muted-foreground">
                Real stories from caregivers and seniors who rely on our
                platform every day.
              </p>
            </div>
          </FadeInSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass rounded-2xl p-6 border border-border/20 flex flex-col gap-4 h-full"
                  data-ocid={`testimonials.card.${i + 1}`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-border/20">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))",
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner */}
      <section className="py-24 bg-background">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeInSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-3xl p-12 text-center relative overflow-hidden border border-primary/20"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--primary) / 0.12), oklch(var(--secondary) / 0.12))",
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 80%, oklch(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(var(--secondary)) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl gradient-calm mx-auto flex items-center justify-center shadow-soft">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black font-display">
                  Start protecting your loved ones today
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Join 500+ families who trust Smart Elderly Care to keep their
                  seniors safe, healthy, and connected.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate({ to: "/signup" })}
                    className="gradient-calm text-primary-foreground btn-accessible shadow-soft-dark transition-healthcare hover:scale-105 px-10"
                    data-ocid="cta.signup_button"
                  >
                    Create Free Account
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate({ to: "/login" })}
                    className="btn-accessible transition-healthcare hover:scale-105 border-border/50 px-10"
                    data-ocid="cta.login_button"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Footer */}
      <footer className="bg-card border-t border-border/30 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl gradient-calm flex items-center justify-center">
              <Heart className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">
              Smart Elderly Care
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Terms
            </span>
            <span className="hover:text-foreground transition-colors cursor-pointer">
              Support
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
