import { Button } from "@/components/ui/button";
import { useSettingsStore } from "@/store";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useSettingsStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative btn-accessible transition-healthcare"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      data-ocid="theme.toggle"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-foreground" />
        ) : (
          <Moon className="h-5 w-5 text-foreground" />
        )}
      </motion.div>
    </Button>
  );
}
