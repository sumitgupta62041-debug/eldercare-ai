import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/layouts/AuthLayout";
import { useAuthStore } from "@/store";
import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const DEMO_CREDENTIALS = [
  {
    label: "Elderly User",
    email: "martha@demo.com",
    password: "demo123",
    icon: "👵",
    color: "bg-primary/10 border-primary/30 text-primary",
  },
  {
    label: "Caregiver",
    email: "sarah@demo.com",
    password: "demo123",
    icon: "👩\u200d\u2695\ufe0f",
    color: "bg-secondary/10 border-secondary/30 text-secondary",
  },
];

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    const isValidDemo =
      (email === "martha@demo.com" && password === "demo123") ||
      (email === "sarah@demo.com" && password === "demo123") ||
      (email.includes("@") && password.length >= 6);

    if (!isValidDemo) {
      setIsLoading(false);
      setError("Invalid credentials. Use the demo accounts below.");
      toast.error("Login failed", {
        description: "Check your email and password.",
      });
      return;
    }

    const isCaregiver =
      email === "sarah@demo.com" ||
      email.includes("caregiver") ||
      email.includes("sarah") ||
      email.includes("doctor");

    login({ email, password, role: isCaregiver ? "caregiver" : "elderly" });
    toast.success("Welcome back!", {
      description: isCaregiver
        ? "Caregiver dashboard loading…"
        : "Health dashboard loading…",
    });
    navigate({ to: isCaregiver ? "/caregiver" : "/dashboard" });
  }

  function fillDemo(cred: (typeof DEMO_CREDENTIALS)[0]) {
    setEmail(cred.email);
    setPassword(cred.password);
    setError("");
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black font-display text-foreground">
            Welcome back
          </h2>
          <p className="text-sm text-muted-foreground">
            Sign in to your care dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9 h-12 text-base rounded-xl bg-background/60"
                data-ocid="login.email_input"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-9 pr-10 h-12 text-base rounded-xl bg-background/60"
                data-ocid="login.password_input"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                key="error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg"
                data-ocid="login.error_state"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 text-base rounded-xl gradient-calm text-primary-foreground shadow-soft transition-healthcare hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
            data-ocid="login.submit_button"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                  data-ocid="login.loading_state"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in…
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Sign In
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/40" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-card/70 px-3 text-xs text-muted-foreground">
              Quick demo access
            </span>
          </div>
        </div>

        {/* Demo credentials */}
        <div className="grid grid-cols-2 gap-3">
          {DEMO_CREDENTIALS.map((cred) => (
            <button
              key={cred.email}
              type="button"
              onClick={() => fillDemo(cred)}
              className={`rounded-xl border px-3 py-3 text-left transition-smooth hover:scale-[1.02] active:scale-[0.98] ${cred.color}`}
              data-ocid={`login.demo_${cred.label.toLowerCase().replace(" ", "_")}_button`}
            >
              <span className="text-lg block mb-1">{cred.icon}</span>
              <p className="text-xs font-bold">{cred.label}</p>
              <p className="text-xs opacity-70 truncate">{cred.email}</p>
            </button>
          ))}
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate({ to: "/signup" })}
            className="text-primary font-semibold hover:underline transition-colors"
            data-ocid="login.signup_link"
          >
            Create one free
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}
