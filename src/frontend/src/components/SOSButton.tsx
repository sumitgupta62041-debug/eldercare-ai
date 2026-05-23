import { useEmergencyStore } from "@/store";
import { Siren } from "lucide-react";
import { motion } from "motion/react";

export function SOSButton() {
  const { triggerSOS, isEmergency } = useEmergencyStore();

  if (isEmergency) return null;

  return (
    <motion.button
      type="button"
      data-ocid="sos.primary_button"
      onClick={triggerSOS}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center gap-1 w-20 h-20 rounded-full bg-destructive text-destructive-foreground font-bold text-sm shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] transition-all duration-300 cursor-pointer border-4 border-destructive-foreground/20"
      aria-label="SOS Emergency Button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
    >
      {/* Outer pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-destructive"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
      />
      {/* Inner pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-destructive"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      <Siren className="h-6 w-6 relative z-10" aria-hidden />
      <span className="relative z-10 font-black tracking-widest text-xs">
        SOS
      </span>
    </motion.button>
  );
}
