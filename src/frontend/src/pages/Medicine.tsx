import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  MedicineReminder,
  Medicine as MedicineType,
} from "@/data/mockData";
import { AppLayout } from "@/layouts/AppLayout";
import { useMedicineStore } from "@/store";
import {
  AlertTriangle,
  Bell,
  Check,
  CheckCircle2,
  Clock,
  Pill,
  Plus,
  Trash2,
  Volume2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";

// ─── 7-day adherence mock data ────────────────────────────────────────────────
const weeklyAdherence = [
  { day: "Mon", pct: 100 },
  { day: "Tue", pct: 83 },
  { day: "Wed", pct: 67 },
  { day: "Thu", pct: 100 },
  { day: "Fri", pct: 50 },
  { day: "Sat", pct: 83 },
  { day: "Sun", pct: 67 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getCurrentTime(): string {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
}

function getReminderStatus(
  reminder: MedicineReminder,
): "taken" | "overdue" | "due_now" | "upcoming" {
  if (reminder.taken) return "taken";
  const current = getCurrentTime();
  const diff =
    Number.parseInt(reminder.scheduledTime.replace(":", "")) -
    Number.parseInt(current.replace(":", ""));
  if (diff < -5) return "overdue";
  if (diff >= -5 && diff <= 10) return "due_now";
  return "upcoming";
}

const STATUS_CONFIG = {
  taken: {
    label: "Taken",
    color: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
    border: "border-emerald-500/20",
  },
  overdue: {
    label: "Overdue",
    color: "bg-destructive/20 text-destructive border-destructive/30",
    border: "border-destructive/40",
  },
  due_now: {
    label: "Due Now",
    color: "bg-amber-500/20 text-amber-500 border-amber-500/30",
    border: "border-amber-500/40",
  },
  upcoming: {
    label: "Upcoming",
    color: "bg-primary/15 text-primary border-primary/20",
    border: "border-border/30",
  },
};

const FREQ_OPTIONS = [
  { value: "Once daily", label: "Once daily", count: 1 },
  { value: "Twice daily", label: "Twice daily", count: 2 },
  { value: "Three times daily", label: "Three times daily", count: 3 },
];

// ─── Add Medicine Form ────────────────────────────────────────────────────────
function AddMedicineDialog() {
  const addMedicine = useMedicineStore((s) => s.addMedicine);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("Once daily");
  const [times, setTimes] = useState(["08:00"]);

  const freqCount = FREQ_OPTIONS.find((f) => f.value === frequency)?.count ?? 1;

  function handleFreqChange(val: string) {
    setFrequency(val);
    const count = FREQ_OPTIONS.find((f) => f.value === val)?.count ?? 1;
    const defaults = ["08:00", "14:00", "20:00"];
    setTimes(defaults.slice(0, count));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !dosage.trim()) return;
    addMedicine({
      name: name.trim(),
      dosage: dosage.trim(),
      frequency,
      times,
      isActive: true,
      color: "primary",
      icon: "💊",
    });
    toast.success(`${name} added to your medicine list!`);
    setOpen(false);
    setName("");
    setDosage("");
    setFrequency("Once daily");
    setTimes(["08:00"]);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="gap-2 gradient-calm text-primary-foreground border-0"
          data-ocid="medicine.add_button"
        >
          <Plus className="h-4 w-4" />
          Add Medicine
        </Button>
      </DialogTrigger>
      <DialogContent
        className="glass-dark border-border/20 max-w-md"
        data-ocid="medicine.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-lg flex items-center gap-2">
            <Pill className="h-5 w-5 text-primary" />
            Add New Medicine
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="med-name">Medicine Name</Label>
            <Input
              id="med-name"
              placeholder="e.g. Aspirin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-muted/30 border-border/30"
              required
              data-ocid="medicine.name_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="med-dosage">Dosage</Label>
            <Input
              id="med-dosage"
              placeholder="e.g. 10mg"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="bg-muted/30 border-border/30"
              required
              data-ocid="medicine.dosage_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label>Frequency</Label>
            <Select value={frequency} onValueChange={handleFreqChange}>
              <SelectTrigger
                className="bg-muted/30 border-border/30"
                data-ocid="medicine.frequency_select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FREQ_OPTIONS.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Scheduled Time{freqCount > 1 ? "s" : ""}</Label>
            <div className="grid gap-2">
              {Array.from({ length: freqCount }).map((_, idx) => (
                <Input
                  key={`time-slot-slot-${idx + 1}`}
                  type="time"
                  value={times[idx] ?? "08:00"}
                  onChange={(e) => {
                    const updated = [...times];
                    updated[idx] = e.target.value;
                    setTimes(updated);
                  }}
                  className="bg-muted/30 border-border/30"
                  data-ocid={`medicine.time_input.${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              data-ocid="medicine.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="gradient-calm text-primary-foreground border-0"
              data-ocid="medicine.submit_button"
            >
              Add Medicine
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Progress Card ────────────────────────────────────────────────────────────
function TodayProgressCard() {
  const getTodayProgress = useMedicineStore((s) => s.getTodayProgress);
  const reminders = useMedicineStore((s) => s.reminders);
  const { taken, total } = getTodayProgress();
  const pct = total === 0 ? 0 : Math.round((taken / total) * 100);

  const barColor =
    pct >= 80
      ? "from-emerald-500 to-teal-500"
      : pct >= 50
        ? "from-amber-400 to-yellow-500"
        : "from-destructive to-rose-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card
        className="glass-dark border-border/20 overflow-hidden"
        data-ocid="medicine.progress_card"
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Today's Progress
              </h2>
              <p className="text-3xl font-bold font-display mt-1 text-foreground">
                {taken}
                <span className="text-muted-foreground text-lg font-normal">
                  /{total}
                </span>
                <span className="text-base font-medium text-muted-foreground ml-2">
                  medicines taken
                </span>
              </p>
            </div>
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold font-display bg-gradient-to-br ${barColor} text-white shadow-lg`}
            >
              {pct}%
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-3 rounded-full bg-muted/40 overflow-hidden">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
          </div>
          {/* Mini summary */}
          <div className="flex gap-4 mt-4 text-sm">
            <span className="text-emerald-500 font-medium">
              <CheckCircle2 className="inline h-3.5 w-3.5 mr-1" />
              {taken} taken
            </span>
            <span className="text-muted-foreground">
              <Clock className="inline h-3.5 w-3.5 mr-1" />
              {reminders.filter((r) => !r.taken).length} remaining
            </span>
            <span className="text-destructive font-medium">
              <AlertTriangle className="inline h-3.5 w-3.5 mr-1" />
              {
                reminders.filter((r) => getReminderStatus(r) === "overdue")
                  .length
              }{" "}
              overdue
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Reminder Card ────────────────────────────────────────────────────────────
function ReminderCard({
  reminder,
  index,
}: { reminder: MedicineReminder; index: number }) {
  const markTaken = useMedicineStore((s) => s.markTaken);
  const status = getReminderStatus(reminder);
  const cfg = STATUS_CONFIG[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      data-ocid={`medicine.reminder.item.${index + 1}`}
    >
      <motion.div
        className={`relative rounded-xl border p-4 glass-dark transition-healthcare ${
          status === "overdue" ? "border-destructive/40" : cfg.border
        }`}
        animate={
          status === "due_now"
            ? {
                boxShadow: [
                  "0 0 0 0 rgba(251,191,36,0)",
                  "0 0 0 6px rgba(251,191,36,0.2)",
                  "0 0 0 0 rgba(251,191,36,0)",
                ],
              }
            : {}
        }
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-lg">
              💊
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-foreground truncate">
                {reminder.medicineName}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {reminder.scheduledTime}
                {reminder.takenAt && (
                  <span className="ml-2 text-emerald-500">
                    · Taken at {reminder.takenAt}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge className={`text-xs border ${cfg.color}`}>{cfg.label}</Badge>
            {!reminder.taken && (
              <Button
                size="sm"
                variant="outline"
                className="h-8 px-3 border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => markTaken(reminder.id)}
                data-ocid={`medicine.mark_taken_button.${index + 1}`}
              >
                <Check className="h-3.5 w-3.5 mr-1" />
                Mark Taken
              </Button>
            )}
            {reminder.taken && (
              <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Done
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Medicine List Item ────────────────────────────────────────────────────────
function MedicineListItem({
  medicine,
  index,
}: { medicine: MedicineType; index: number }) {
  const removeMedicine = useMedicineStore((s) => s.removeMedicine);

  function handleDelete() {
    removeMedicine(medicine.id);
    toast.success(`${medicine.name} removed.`);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="flex items-center gap-4 rounded-xl border border-border/30 px-4 py-3 glass-dark"
      data-ocid={`medicine.list.item.${index + 1}`}
    >
      <div className="text-2xl flex-shrink-0">{medicine.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate">
          {medicine.name}
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            {medicine.dosage}
          </span>
        </p>
        <p className="text-xs text-muted-foreground">
          {medicine.frequency} · {medicine.times.join(", ")}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Badge
          className={`text-xs border ${
            medicine.isActive
              ? "bg-emerald-500/15 text-emerald-500 border-emerald-500/30"
              : "bg-muted/30 text-muted-foreground border-border/30"
          }`}
        >
          {medicine.isActive ? "Active" : "Inactive"}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          onClick={handleDelete}
          aria-label={`Remove ${medicine.name}`}
          data-ocid={`medicine.delete_button.${index + 1}`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Weekly Chart ─────────────────────────────────────────────────────────────
function WeeklyAdherenceChart() {
  return (
    <Card
      className="glass-dark border-border/20"
      data-ocid="medicine.history_chart"
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          7-Day Adherence History
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={weeklyAdherence} barSize={28}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 10,
                fontSize: 12,
              }}
              formatter={(value: number) => [`${value}%`, "Adherence"]}
            />
            <Bar dataKey="pct" radius={[6, 6, 0, 0]}>
              {weeklyAdherence.map((entry) => (
                <Cell
                  key={entry.day}
                  fill={
                    entry.pct >= 80
                      ? "hsl(var(--primary))"
                      : entry.pct >= 50
                        ? "hsl(40 93% 47%)"
                        : "hsl(var(--destructive))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

// ─── Voice Reminder Button ─────────────────────────────────────────────────────
function VoiceReminderButton() {
  const reminders = useMedicineStore((s) => s.reminders);
  const [speaking, setSpeaking] = useState(false);

  function speakReminders() {
    if (!("speechSynthesis" in window)) {
      toast.error("Voice synthesis not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const pending = reminders.filter((r) => !r.taken);
    if (pending.length === 0) {
      const utter = new SpeechSynthesisUtterance(
        "All your medicines for today have been taken. Great job!",
      );
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
      toast.success("🎉 All medicines taken today!");
      return;
    }
    const names = pending
      .map((r) => `${r.medicineName} at ${r.scheduledTime}`)
      .join(", ");
    const message = `You have ${pending.length} medicine${
      pending.length > 1 ? "s" : ""
    } remaining today: ${names}. Please take them on time.`;
    const utter = new SpeechSynthesisUtterance(message);
    utter.rate = 0.85;
    utter.pitch = 1;
    setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
    toast.info(
      `🔔 Speaking ${pending.length} pending reminder${pending.length > 1 ? "s" : ""}...`,
    );
  }

  return (
    <Button
      variant="outline"
      className="gap-2 border-primary/30 text-primary hover:bg-primary/10"
      onClick={speakReminders}
      data-ocid="medicine.voice_reminder_button"
    >
      <motion.div
        animate={speaking ? { scale: [1, 1.2, 1] } : {}}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6 }}
      >
        <Volume2 className="h-4 w-4" />
      </motion.div>
      {speaking ? "Speaking..." : "Test Voice Reminder"}
    </Button>
  );
}

// ─── Overdue Alert Watcher ────────────────────────────────────────────────────
function OverdueWatcher() {
  const reminders = useMedicineStore((s) => s.reminders);
  const alerted = useRef(new Set<string>());

  useEffect(() => {
    const overdue = reminders.filter(
      (r) => !r.taken && getReminderStatus(r) === "overdue",
    );
    for (const r of overdue) {
      if (!alerted.current.has(r.id)) {
        alerted.current.add(r.id);
        toast.error(
          `⚠️ Overdue: ${r.medicineName} was scheduled at ${r.scheduledTime}`,
        );
        if ("speechSynthesis" in window) {
          const utter = new SpeechSynthesisUtterance(
            `Attention! You missed your ${r.medicineName} at ${r.scheduledTime}. Please take it now.`,
          );
          utter.rate = 0.85;
          window.speechSynthesis.speak(utter);
        }
      }
    }
  }, [reminders]);

  return null;
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Medicine() {
  const medicines = useMedicineStore((s) => s.medicines);
  const reminders = useMedicineStore((s) => s.reminders);

  const sortedReminders = [...reminders].sort((a, b) =>
    a.scheduledTime.localeCompare(b.scheduledTime),
  );

  return (
    <AppLayout>
      <OverdueWatcher />
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <h1 className="text-2xl font-bold font-display text-foreground flex items-center gap-2">
              <Pill className="h-6 w-6 text-primary" />
              Medicine Reminders
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Manage your daily medication schedule
            </p>
          </div>
          <div className="flex items-center gap-2">
            <VoiceReminderButton />
            <AddMedicineDialog />
          </div>
        </motion.div>

        {/* Progress + History */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3">
            <TodayProgressCard />
          </div>
          <div className="lg:col-span-2">
            <WeeklyAdherenceChart />
          </div>
        </div>

        {/* Today's Schedule */}
        <section data-ocid="medicine.schedule.section">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="h-4 w-4 text-primary" />
            <h2 className="text-base font-semibold font-display text-foreground">
              Today's Schedule
            </h2>
            <Badge className="text-xs bg-primary/15 text-primary border-primary/20 border">
              {sortedReminders.length} doses
            </Badge>
          </div>
          <div className="space-y-2">
            <AnimatePresence>
              {sortedReminders.map((reminder, idx) => (
                <ReminderCard
                  key={reminder.id}
                  reminder={reminder}
                  index={idx}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Medicine List */}
        <section data-ocid="medicine.list.section">
          <div className="flex items-center gap-2 mb-3">
            <Pill className="h-4 w-4 text-primary" />
            <h2 className="text-base font-semibold font-display text-foreground">
              My Medicines
            </h2>
            <Badge className="text-xs bg-muted/30 text-muted-foreground border border-border/30">
              {medicines.length} total
            </Badge>
          </div>
          {medicines.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-xl border border-dashed border-border/30 p-10 text-center"
              data-ocid="medicine.list.empty_state"
            >
              <Pill className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground">No medicines added yet.</p>
              <p className="text-sm text-muted-foreground/60 mt-1">
                Click "Add Medicine" to get started.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-2">
              <AnimatePresence>
                {medicines.map((med, idx) => (
                  <MedicineListItem key={med.id} medicine={med} index={idx} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>
      </div>
    </AppLayout>
  );
}
