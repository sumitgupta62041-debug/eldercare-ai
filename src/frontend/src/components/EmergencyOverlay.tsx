import { Button } from "@/components/ui/button";
import { useEmergencyStore } from "@/store";
import { AlertTriangle, Clock, MapPin, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

export function EmergencyOverlay() {
  const { isEmergency, emergencyType, cancelEmergency, emergencyLog } =
    useEmergencyStore();
  const activeEvent = emergencyLog[0];

  useEffect(() => {
    if (isEmergency) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isEmergency]);

  return (
    <AnimatePresence>
      {isEmergency && (
        <motion.div
          data-ocid="emergency.dialog"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Red pulsing background */}
          <motion.div
            className="absolute inset-0 bg-destructive/90"
            animate={{ opacity: [0.85, 0.95, 0.85] }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

          {/* Alert card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border-2 border-destructive/40 text-center"
          >
            {/* Pulsing icon */}
            <motion.div
              className="w-24 h-24 rounded-full bg-destructive/15 border-2 border-destructive mx-auto mb-6 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(220,38,38,0)",
                  "0 0 0 20px rgba(220,38,38,0.15)",
                  "0 0 0 0 rgba(220,38,38,0)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </motion.div>

            <h1 className="text-3xl font-black font-display text-destructive mb-2">
              EMERGENCY!
            </h1>
            <h2 className="text-xl font-bold text-foreground mb-4">
              {emergencyType}
            </h2>

            <div className="space-y-2 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="truncate">
                  {activeEvent?.location ?? "Acquiring location..."}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>
                  {activeEvent
                    ? new Date(activeEvent.timestamp).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        },
                      )
                    : "--:--:--"}
                </span>
              </div>
            </div>

            {/* Caregiver notified badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 mb-6"
            >
              <Phone className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-semibold text-primary">
                  My Contact (+91894932189) notified
                </p>
                <p className="text-xs text-muted-foreground">ETA: ~8 minutes</p>
              </div>
            </motion.div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 btn-accessible border-destructive/40 text-destructive hover:bg-destructive/10"
                onClick={cancelEmergency}
                data-ocid="emergency.cancel_button"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel Alert
              </Button>
              <Button
                className="flex-1 btn-accessible bg-primary text-primary-foreground"
                onClick={() => {
                  if ("speechSynthesis" in window) {
                    const u = new SpeechSynthesisUtterance(
                      "Calling emergency contact. Help is on the way. Stay calm.",
                    );
                    window.speechSynthesis.speak(u);
                  }
                  window.location.href = "tel:91894932189";
                }}
                data-ocid="emergency.confirm_button"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call 91894932189
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
