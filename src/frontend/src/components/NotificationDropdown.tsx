import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEmergencyStore, useMedicineStore } from "@/store";
import { AlertTriangle, Bell, Check, Pill } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const { getOverdueReminders, markTaken } = useMedicineStore();
  const { emergencyLog } = useEmergencyStore();

  const overdue = getOverdueReminders();
  const recentEmergencies = emergencyLog.slice(0, 3);
  const totalCount =
    overdue.length + recentEmergencies.filter((e) => !e.resolved).length;

  return (
    <div className="relative" data-ocid="notification.dropdown_menu">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((o) => !o)}
        className="relative btn-accessible transition-healthcare"
        aria-label="Notifications"
        data-ocid="notification.toggle"
      >
        <Bell className="h-5 w-5" />
        {totalCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-0.5 -right-0.5 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold"
          >
            {totalCount}
          </motion.span>
        )}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false);
              }}
              role="presentation"
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute right-0 top-12 z-50 w-80 glass rounded-2xl shadow-soft-dark border border-border/30 overflow-hidden"
            >
              <div className="p-4 border-b border-border/20">
                <h3 className="font-semibold text-sm font-display">
                  Notifications
                </h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {overdue.length === 0 && recentEmergencies.length === 0 ? (
                  <div
                    className="p-6 text-center text-muted-foreground text-sm"
                    data-ocid="notification.empty_state"
                  >
                    All caught up! No pending notifications.
                  </div>
                ) : (
                  <div className="divide-y divide-border/10">
                    {overdue.map((r) => (
                      <div
                        key={r.id}
                        className="flex items-center gap-3 p-3 hover:bg-muted/30 transition-colors"
                        data-ocid={`notification.item.${r.id}`}
                      >
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center">
                          <Pill className="h-4 w-4 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {r.medicineName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Overdue since {r.scheduledTime}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs h-7 shrink-0"
                          onClick={() => markTaken(r.id)}
                          data-ocid={`notification.take_button.${r.id}`}
                        >
                          <Check className="h-3 w-3 mr-1" />
                          Take
                        </Button>
                      </div>
                    ))}
                    {recentEmergencies.map((e) => (
                      <div
                        key={e.id}
                        className="flex items-center gap-3 p-3 hover:bg-muted/30 transition-colors"
                        data-ocid={`notification.emergency.${e.id}`}
                      >
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-destructive/15 flex items-center justify-center">
                          <AlertTriangle className="h-4 w-4 text-destructive" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {e.type}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(e.timestamp).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <Badge
                          variant={e.resolved ? "secondary" : "destructive"}
                          className="text-xs shrink-0"
                        >
                          {e.resolved ? "Resolved" : "Active"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
