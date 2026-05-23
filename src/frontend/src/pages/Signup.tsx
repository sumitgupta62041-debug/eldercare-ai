import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/layouts/AuthLayout";
import { useAuthStore } from "@/store";
import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const ROLES = [
  {
    value: "elderly" as const,
    label: "Elderly User",
    description: "Track health & get reminders",
    icon: "👵",
  },
  {
    value: "caregiver" as const,
    label: "Caregiver",
    description: "Monitor & support a loved one",
    icon: "👩\u200d\u2695\ufe0f",
  },
];

export default function Signup() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"elderly" | "caregiver">("elderly");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2)
      e.name = "Please enter your full name (min 2 characters).";
    if (!email.includes("@")) e.email = "Enter a valid email address.";
    if (password.length < 6)
      e.password = "Password must be at least 6 characters.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1000));

    login({ email, password, role });
    toast.success("Account created!", {
      description: "Welcome to Smart Elderly Care. Your dashboard is ready.",
    });
    navigate({ to: role === "caregiver" ? "/caregiver" : "/dashboard" });
  }

  function clearFieldError(field: string) {
    setErrors((p) => {
      const next = { ...p };
      delete next[field];
      return next;
    });
  }

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black font-display text-foreground">
            Create your account
          </h2>
          <p className="text-sm text-muted-foreground">
            Start your free care journey today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Full name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm font-medium">
              Full name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Martha Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  if (name && name.trim().length < 2)
                    setErrors((p) => ({
                      ...p,
                      name: "Name must be at least 2 characters.",
                    }));
                  else clearFieldError("name");
                }}
                className="pl-9 h-12 text-base rounded-xl bg-background/60"
                data-ocid="signup.name_input"
              />
            </div>
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  key="name-err"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-destructive mt-1"
                  data-ocid="signup.name.field_error"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

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
                onBlur={() => {
                  if (email && !email.includes("@"))
                    setErrors((p) => ({
                      ...p,
                      email: "Enter a valid email address.",
                    }));
                  else clearFieldError("email");
                }}
                className="pl-9 h-12 text-base rounded-xl bg-background/60"
                data-ocid="signup.email_input"
              />
            </div>
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  key="email-err"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-destructive mt-1"
                  data-ocid="signup.email.field_error"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
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
                autoComplete="new-password"
                placeholder="Min. 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (password && password.length < 6)
                    setErrors((p) => ({
                      ...p,
                      password: "Password must be at least 6 characters.",
                    }));
                  else clearFieldError("password");
                }}
                className="pl-9 pr-10 h-12 text-base rounded-xl bg-background/60"
                data-ocid="signup.password_input"
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
            <AnimatePresence>
              {errors.password && (
                <motion.p
                  key="pw-err"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-destructive mt-1"
                  data-ocid="signup.password.field_error"
                >
                  {errors.password}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Role selector */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">I am a</Label>
            <div className="grid grid-cols-2 gap-3">
              {ROLES.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRole(r.value)}
                  className={`rounded-xl border px-3 py-3 text-left transition-smooth hover:scale-[1.02] active:scale-[0.98] ${
                    role === r.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/40 text-muted-foreground hover:border-border"
                  }`}
                  data-ocid={`signup.role_${r.value}_button`}
                >
                  <span className="text-lg block mb-1">{r.icon}</span>
                  <p className="text-xs font-bold text-foreground">{r.label}</p>
                  <p className="text-xs opacity-60">{r.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 text-base rounded-xl gradient-calm text-primary-foreground shadow-soft transition-healthcare hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
            data-ocid="signup.submit_button"
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                  data-ocid="signup.loading_state"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account…
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Create Account
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </form>

        {/* Sign in link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate({ to: "/login" })}
            className="text-primary font-semibold hover:underline transition-colors"
            data-ocid="signup.login_link"
          >
            Sign in
          </button>
        </p>
      </motion.div>
    </AuthLayout>
  );
}
