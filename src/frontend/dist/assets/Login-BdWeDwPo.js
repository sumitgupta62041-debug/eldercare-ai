import { u as useNavigate, a as useAuthStore, r as reactExports, j as jsxRuntimeExports, b as ue } from "./index-D1My1Djg.js";
import { m as motion, B as Button } from "./proxy-CjookoZg.js";
import { I as Input } from "./input-EC5JqgpV.js";
import { L as Label } from "./label-BoW8B3dC.js";
import { A as AuthLayout, M as Mail, E as EyeOff, a as Eye, L as LoaderCircle } from "./AuthLayout-CWlFRHV-.js";
import { L as Lock } from "./lock-BdDvxjP3.js";
import { A as AnimatePresence } from "./index-CXVWI1BC.js";
const DEMO_CREDENTIALS = [
  {
    label: "Elderly User",
    email: "martha@demo.com",
    password: "demo123",
    icon: "👵",
    color: "bg-primary/10 border-primary/30 text-primary"
  },
  {
    label: "Caregiver",
    email: "sarah@demo.com",
    password: "demo123",
    icon: "👩‍⚕️",
    color: "bg-secondary/10 border-secondary/30 text-secondary"
  }
];
function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    const isValidDemo = email === "martha@demo.com" && password === "demo123" || email === "sarah@demo.com" && password === "demo123" || email.includes("@") && password.length >= 6;
    if (!isValidDemo) {
      setIsLoading(false);
      setError("Invalid credentials. Use the demo accounts below.");
      ue.error("Login failed", {
        description: "Check your email and password."
      });
      return;
    }
    const isCaregiver = email === "sarah@demo.com" || email.includes("caregiver") || email.includes("sarah") || email.includes("doctor");
    login({ email, password, role: isCaregiver ? "caregiver" : "elderly" });
    ue.success("Welcome back!", {
      description: isCaregiver ? "Caregiver dashboard loading…" : "Health dashboard loading…"
    });
    navigate({ to: isCaregiver ? "/caregiver" : "/dashboard" });
  }
  function fillDemo(cred) {
    setEmail(cred.email);
    setPassword(cred.password);
    setError("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black font-display text-foreground", children: "Welcome back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in to your care dashboard" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", noValidate: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "text-sm font-medium", children: "Email address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "email",
              type: "email",
              autoComplete: "email",
              placeholder: "you@example.com",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "pl-9 h-12 text-base rounded-xl bg-background/60",
              "data-ocid": "login.email_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "password",
              type: showPassword ? "text" : "password",
              autoComplete: "current-password",
              placeholder: "••••••••",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: "pl-9 pr-10 h-12 text-base rounded-xl bg-background/60",
              "data-ocid": "login.password_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword((v) => !v),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
              "aria-label": showPassword ? "Hide password" : "Show password",
              children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          className: "text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg",
          "data-ocid": "login.error_state",
          children: error
        },
        "error"
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          disabled: isLoading,
          className: "w-full h-12 text-base rounded-xl gradient-calm text-primary-foreground shadow-soft transition-healthcare hover:scale-[1.02] disabled:opacity-60 disabled:scale-100",
          "data-ocid": "login.submit_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.span,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "flex items-center gap-2",
              "data-ocid": "login.loading_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Signing in…"
              ]
            },
            "loading"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: "Sign In"
            },
            "idle"
          ) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border/40" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card/70 px-3 text-xs text-muted-foreground", children: "Quick demo access" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: DEMO_CREDENTIALS.map((cred) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => fillDemo(cred),
        className: `rounded-xl border px-3 py-3 text-left transition-smooth hover:scale-[1.02] active:scale-[0.98] ${cred.color}`,
        "data-ocid": `login.demo_${cred.label.toLowerCase().replace(" ", "_")}_button`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg block mb-1", children: cred.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", children: cred.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-70 truncate", children: cred.email })
        ]
      },
      cred.email
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: "/signup" }),
          className: "text-primary font-semibold hover:underline transition-colors",
          "data-ocid": "login.signup_link",
          children: "Create one free"
        }
      )
    ] })
  ] }) });
}
export {
  Login as default
};
