import { InternetIdentityProvider } from "@caffeineai/core-infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

// Initialize theme from persisted settings on first load
(function initTheme() {
  try {
    const stored = localStorage.getItem("settings-store");
    if (stored) {
      const parsed = JSON.parse(stored) as { state?: { theme?: string } };
      if (parsed?.state?.theme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      // Default: dark mode
      document.documentElement.classList.add("dark");
    }
  } catch {
    document.documentElement.classList.add("dark");
  }
})();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <InternetIdentityProvider>
      <App />
      <Toaster
        richColors
        position="top-right"
        toastOptions={{ duration: 4000 }}
      />
    </InternetIdentityProvider>
  </QueryClientProvider>,
);
