import { u as useNavigate, a as useAuthStore, r as reactExports, j as jsxRuntimeExports, b as ue } from "./index-D1My1Djg.js";
import { m as motion, B as Button } from "./proxy-CjookoZg.js";
import { I as Input } from "./input-EC5JqgpV.js";
import { L as Label } from "./label-BoW8B3dC.js";
import { A as AuthLayout, M as Mail, E as EyeOff, a as Eye, L as LoaderCircle } from "./AuthLayout-CWlFRHV-.js";
import { U as User } from "./user-CzBdarbj.js";
import { A as AnimatePresence } from "./index-CXVWI1BC.js";
import { L as Lock } from "./lock-BdDvxjP3.js";
const ROLES = [
  {
    value: "elderly",
    label: "Elderly User",
    description: "Track health & get reminders",
    icon: "👵"
  },
  {
    value: "caregiver",
    label: "Caregiver",
    description: "Monitor & support a loved one",
    icon: "👩‍⚕️"
  }
];
function Signup() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [role, setRole] = reactExports.useState("elderly");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const e = {};
    if (!name.trim() || name.trim().length < 2)
      e.name = "Please enter your full name (min 2 characters).";
    if (!email.includes("@")) e.email = "Enter a valid email address.";
    if (password.length < 6)
      e.password = "Password must be at least 6 characters.";
    return e;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1e3));
    login({ email, password, role });
    ue.success("Account created!", {
      description: "Welcome to Smart Elderly Care. Your dashboard is ready."
    });
    navigate({ to: role === "caregiver" ? "/caregiver" : "/dashboard" });
  }
  function clearFieldError(field) {
    setErrors((p) => {
      const next = { ...p };
      delete next[field];
      return next;
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className: "space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black font-display text-foreground", children: "Create your account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Start your free care journey today" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-sm font-medium", children: "Full name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "name",
                  type: "text",
                  autoComplete: "name",
                  placeholder: "Martha Johnson",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  onBlur: () => {
                    if (name && name.trim().length < 2)
                      setErrors((p) => ({
                        ...p,
                        name: "Name must be at least 2 characters."
                      }));
                    else clearFieldError("name");
                  },
                  className: "pl-9 h-12 text-base rounded-xl bg-background/60",
                  "data-ocid": "signup.name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: "text-xs text-destructive mt-1",
                "data-ocid": "signup.name.field_error",
                children: errors.name
              },
              "name-err"
            ) })
          ] }),
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
                  onBlur: () => {
                    if (email && !email.includes("@"))
                      setErrors((p) => ({
                        ...p,
                        email: "Enter a valid email address."
                      }));
                    else clearFieldError("email");
                  },
                  className: "pl-9 h-12 text-base rounded-xl bg-background/60",
                  "data-ocid": "signup.email_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: "text-xs text-destructive mt-1",
                "data-ocid": "signup.email.field_error",
                children: errors.email
              },
              "email-err"
            ) })
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
                  autoComplete: "new-password",
                  placeholder: "Min. 6 characters",
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  onBlur: () => {
                    if (password && password.length < 6)
                      setErrors((p) => ({
                        ...p,
                        password: "Password must be at least 6 characters."
                      }));
                    else clearFieldError("password");
                  },
                  className: "pl-9 pr-10 h-12 text-base rounded-xl bg-background/60",
                  "data-ocid": "signup.password_input"
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
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: "text-xs text-destructive mt-1",
                "data-ocid": "signup.password.field_error",
                children: errors.password
              },
              "pw-err"
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "I am a" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setRole(r.value),
                className: `rounded-xl border px-3 py-3 text-left transition-smooth hover:scale-[1.02] active:scale-[0.98] ${role === r.value ? "border-primary bg-primary/10 text-primary" : "border-border/40 text-muted-foreground hover:border-border"}`,
                "data-ocid": `signup.role_${r.value}_button`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg block mb-1", children: r.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: r.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-60", children: r.description })
                ]
              },
              r.value
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isLoading,
              className: "w-full h-12 text-base rounded-xl gradient-calm text-primary-foreground shadow-soft transition-healthcare hover:scale-[1.02] disabled:opacity-60 disabled:scale-100",
              "data-ocid": "signup.submit_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.span,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "flex items-center gap-2",
                  "data-ocid": "signup.loading_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                    "Creating account…"
                  ]
                },
                "loading"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  children: "Create Account"
                },
                "idle"
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/login" }),
              className: "text-primary font-semibold hover:underline transition-colors",
              "data-ocid": "signup.login_link",
              children: "Sign in"
            }
          )
        ] })
      ]
    }
  ) });
}
export {
  Signup as default
};
