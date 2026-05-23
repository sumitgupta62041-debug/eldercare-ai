import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Status = "normal" | "warning" | "critical";
type Trend = "up" | "down" | "stable";

interface VitalsCardProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  unit: string;
  status: Status;
  trend?: Trend;
  subtitle?: string;
  className?: string;
  "data-ocid"?: string;
}

const statusConfig: Record<
  Status,
  { bg: string; border: string; dot: string; text: string }
> = {
  normal: {
    bg: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    dot: "bg-primary",
    text: "text-primary",
  },
  warning: {
    bg: "from-yellow-500/10 to-yellow-500/5",
    border: "border-yellow-500/30",
    dot: "bg-yellow-500",
    text: "text-yellow-500",
  },
  critical: {
    bg: "from-destructive/15 to-destructive/5",
    border: "border-destructive/30",
    dot: "bg-destructive",
    text: "text-destructive",
  },
};

function AnimatedNumber({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(value);
  const prevRef = useRef(displayed);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    prevRef.current = value;
    if (start === end) return;
    const duration = 600;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayed(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value]);

  return <>{displayed}</>;
}

export function VitalsCard({
  icon,
  label,
  value,
  unit,
  status,
  trend = "stable",
  subtitle,
  className = "",
  "data-ocid": ocid,
}: VitalsCardProps) {
  const cfg = statusConfig[status];

  return (
    <motion.div
      data-ocid={ocid}
      className={`relative rounded-2xl overflow-hidden glass p-5 bg-gradient-to-br ${cfg.bg} border ${cfg.border} transition-healthcare hover:scale-[1.02] ${className}`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Status pulse */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          {status !== "normal" && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${cfg.dot} opacity-60`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${cfg.dot}`}
          />
        </span>
        <span className={`text-xs font-medium capitalize ${cfg.text}`}>
          {status}
        </span>
      </div>

      {/* Icon */}
      <div className={`mb-3 p-2.5 rounded-xl bg-card/60 w-fit ${cfg.text}`}>
        {icon}
      </div>

      {/* Value */}
      <div className="flex items-end gap-1.5 mb-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={typeof value === "number" ? Math.round(value) : value}
            initial={{ opacity: 0.7, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold font-display leading-none text-foreground"
          >
            {typeof value === "number" ? (
              <AnimatedNumber value={value} />
            ) : (
              value
            )}
          </motion.span>
        </AnimatePresence>
        <span className="text-sm text-muted-foreground mb-0.5">{unit}</span>
        {trend === "up" && (
          <TrendingUp
            className={`h-4 w-4 mb-0.5 ${status === "critical" ? "text-destructive" : "text-primary"}`}
          />
        )}
        {trend === "down" && (
          <TrendingDown className="h-4 w-4 mb-0.5 text-muted-foreground" />
        )}
        {trend === "stable" && (
          <Minus className="h-4 w-4 mb-0.5 text-muted-foreground" />
        )}
      </div>

      {/* Label */}
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground/70 mt-0.5">{subtitle}</p>
      )}
    </motion.div>
  );
}
