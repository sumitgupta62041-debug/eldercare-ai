import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { AppLayout } from "@/layouts/AppLayout";
import { useAuthStore, useSettingsStore } from "@/store";
import { useNavigate } from "@tanstack/react-router";
import {
  Bell,
  BellOff,
  Download,
  Globe,
  Heart,
  Info,
  KeyRound,
  Lock,
  LogOut,
  Moon,
  Palette,
  Phone,
  ShieldAlert,
  Sun,
  User,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Animation helpers ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function SectionCard({
  title,
  icon: Icon,
  children,
  iconClass = "text-primary",
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  iconClass?: string;
}) {
  return (
    <motion.div
      variants={sectionVariants}
      className="glass rounded-2xl p-6 shadow-soft"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className={`h-4 w-4 ${iconClass}`} />
        </div>
        <h2 className="text-lg font-bold font-display text-foreground">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function SettingRow({
  label,
  description,
  children,
  locked,
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
  locked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-foreground">{label}</span>
          {locked && (
            <div className="flex items-center gap-1 text-amber-500">
              <Lock className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Always on</span>
            </div>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5 pr-4">
            {description}
          </p>
        )}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Settings() {
  const navigate = useNavigate();
  const {
    theme,
    soundEnabled,
    notificationsEnabled,
    language,
    toggleTheme,
    toggleSound,
    toggleNotifications,
  } = useSettingsStore();
  const { user, logout } = useAuthStore();

  const [fontSize, setFontSize] = useState<"medium" | "large" | "xl">("large");
  const [selectedLang, setSelectedLang] = useState(
    language === "es" ? "es" : language === "fr" ? "fr" : "en",
  );
  const [medicineReminders, setMedicineReminders] = useState(true);
  const [popupNotifications, setPopupNotifications] =
    useState(notificationsEnabled);

  // Emergency contact + profile state
  const [contactName, setContactName] = useState("My Contact");
  const [contactPhone, setContactPhone] = useState("91894932189");
  const [profileName, setProfileName] = useState(
    user?.name ?? "Martha Johnson",
  );
  const [profileEmail, setProfileEmail] = useState(
    user?.email ?? "martha@example.com",
  );

  function handleThemeToggle() {
    toggleTheme();
    toast.success(`${theme === "dark" ? "Light" : "Dark"} mode enabled`, {
      description: "Theme updated successfully.",
      duration: 3000,
    });
  }

  function handleSoundToggle() {
    toggleSound();
    toast.info(`Sound alerts ${soundEnabled ? "disabled" : "enabled"}`, {
      description: soundEnabled
        ? "You won't hear audio alerts."
        : "Voice and sound alerts are now on.",
      duration: 3000,
    });
  }

  function handleNotificationsToggle() {
    toggleNotifications();
    setPopupNotifications((v) => !v);
    toast.info(
      `Popup notifications ${notificationsEnabled ? "disabled" : "enabled"}`,
      {
        duration: 3000,
      },
    );
  }

  function handleMedicineRemindersToggle() {
    setMedicineReminders((v) => !v);
    toast.info(
      `Medicine reminders ${medicineReminders ? "disabled" : "enabled"}`,
      {
        duration: 3000,
      },
    );
  }

  function handleFontSizeChange(size: "medium" | "large" | "xl") {
    setFontSize(size);
    const labels = { medium: "Medium", large: "Large", xl: "Extra Large" };
    toast.success(`Font size set to ${labels[size]}`, { duration: 2500 });
  }

  function handleLangChange(lang: string) {
    setSelectedLang(lang);
    const names: Record<string, string> = {
      en: "English",
      es: "Spanish",
      fr: "French",
    };
    toast.success(`Language set to ${names[lang]}`, {
      description: "Language preference saved.",
      duration: 3000,
    });
  }

  function handleSaveContact() {
    toast.success("Emergency contact saved", {
      description: `${contactName} — ${contactPhone}`,
      duration: 3000,
    });
  }

  function handleSaveProfile() {
    toast.success("Profile updated", {
      description: "Name and email saved successfully.",
      duration: 3000,
    });
  }

  function handleChangePassword() {
    toast.success("Password updated", {
      description: "Your password has been changed successfully.",
      duration: 4000,
    });
  }

  function handleDataExport() {
    toast.info("Preparing data export…", {
      description: "Your health data will be ready in a few seconds.",
      duration: 3000,
    });
    setTimeout(() => {
      toast.success("Data export ready", {
        description: "health-data-export.json downloaded.",
        duration: 5000,
      });
    }, 2500);
  }

  function handleTestNotification() {
    toast.message("🔔 Test Notification", {
      description: "Medicine reminder: Time to take your Blood Pressure pill!",
      duration: 5000,
    });
    if (soundEnabled && "speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(
        "This is a test notification. Time to take your medicine.",
      );
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
    }
  }

  async function handleLogout() {
    logout();
    toast.success("Logged out successfully", {
      description: "See you next time!",
      duration: 3000,
    });
    await navigate({ to: "/login" });
  }

  const fontSizeOptions: { value: "medium" | "large" | "xl"; label: string }[] =
    [
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
      { value: "xl", label: "Extra Large" },
    ];

  const langOptions = [
    { value: "en", label: "🇺🇸 English" },
    { value: "es", label: "🇪🇸 Spanish" },
    { value: "fr", label: "🇫🇷 French" },
  ];

  return (
    <AppLayout>
      <motion.div
        data-ocid="settings.page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 pb-10"
      >
        {/* Page header */}
        <motion.div variants={sectionVariants}>
          <h1 className="text-3xl font-bold font-display text-foreground">
            Settings
          </h1>
          <p className="text-muted-foreground mt-1 text-base">
            Customize your experience and manage preferences.
          </p>
        </motion.div>

        {/* 1. APPEARANCE */}
        <SectionCard title="Appearance" icon={Palette}>
          <SettingRow
            label="Dark Mode"
            description="Switch between dark and light interface themes."
          >
            <motion.button
              type="button"
              data-ocid="settings.theme_toggle"
              onClick={handleThemeToggle}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-smooth border ${
                theme === "dark"
                  ? "bg-primary/15 border-primary/30 text-primary"
                  : "bg-amber-500/10 border-amber-400/30 text-amber-600"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </motion.div>
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </motion.button>
          </SettingRow>

          <Separator className="opacity-50" />

          <SettingRow
            label="Font Size"
            description="Choose a comfortable text size for better readability."
          >
            <div className="flex gap-2">
              {fontSizeOptions.map(({ value, label }) => (
                <motion.button
                  type="button"
                  key={value}
                  data-ocid={`settings.font_size.${value}`}
                  onClick={() => handleFontSizeChange(value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth border ${
                    fontSize === value
                      ? "bg-primary/15 border-primary/30 text-primary"
                      : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </SettingRow>

          <Separator className="opacity-50" />

          <SettingRow
            label="Language"
            description="Interface language (mock — no live translation)."
          >
            <div className="flex gap-2">
              {langOptions.map(({ value, label }) => (
                <motion.button
                  type="button"
                  key={value}
                  data-ocid={`settings.lang.${value}`}
                  onClick={() => handleLangChange(value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth border ${
                    selectedLang === value
                      ? "bg-secondary/20 border-secondary/40 text-secondary-foreground"
                      : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Globe className="h-3.5 w-3.5 inline mr-1.5 opacity-70" />
                  {label}
                </motion.button>
              ))}
            </div>
          </SettingRow>
        </SectionCard>

        {/* 2. NOTIFICATIONS */}
        <SectionCard title="Notifications" icon={Bell}>
          <SettingRow
            label="Sound Alerts"
            description="Play audio cues and voice reminders for important events."
          >
            <div className="flex items-center gap-3">
              {soundEnabled ? (
                <Volume2 className="h-4 w-4 text-primary" />
              ) : (
                <VolumeX className="h-4 w-4 text-muted-foreground" />
              )}
              <Switch
                data-ocid="settings.sound_toggle"
                checked={soundEnabled}
                onCheckedChange={handleSoundToggle}
                aria-label="Toggle sound alerts"
              />
            </div>
          </SettingRow>

          <Separator className="opacity-50" />

          <SettingRow
            label="Popup Notifications"
            description="Show on-screen banner alerts for reminders and status changes."
          >
            <div className="flex items-center gap-3">
              {popupNotifications ? (
                <Bell className="h-4 w-4 text-primary" />
              ) : (
                <BellOff className="h-4 w-4 text-muted-foreground" />
              )}
              <Switch
                data-ocid="settings.popup_toggle"
                checked={popupNotifications}
                onCheckedChange={handleNotificationsToggle}
                aria-label="Toggle popup notifications"
              />
            </div>
          </SettingRow>

          <Separator className="opacity-50" />

          <SettingRow
            label="Medicine Reminders"
            description="Get notified when it's time to take your scheduled medication."
          >
            <Switch
              data-ocid="settings.medicine_reminder_toggle"
              checked={medicineReminders}
              onCheckedChange={handleMedicineRemindersToggle}
              aria-label="Toggle medicine reminders"
            />
          </SettingRow>

          <Separator className="opacity-50" />

          <SettingRow
            label="Emergency Alerts"
            description="Critical alerts for detected emergencies — this cannot be disabled."
            locked
          >
            <Switch
              data-ocid="settings.emergency_alerts_toggle"
              checked={true}
              disabled
              aria-label="Emergency alerts always on"
            />
          </SettingRow>

          <Separator className="opacity-50" />

          <div className="pt-1">
            <Button
              variant="outline"
              size="sm"
              type="button"
              data-ocid="settings.test_notification_button"
              onClick={handleTestNotification}
              className="gap-2 transition-smooth"
            >
              <Bell className="h-4 w-4" />
              Test Notification
            </Button>
          </div>
        </SectionCard>

        {/* 3. PRIVACY & SECURITY */}
        <SectionCard
          title="Privacy & Security"
          icon={ShieldAlert}
          iconClass="text-amber-500"
        >
          {/* Emergency contact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">
                Emergency Contact
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-sm">
                  Contact Name
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="settings.contact_name_input"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Full name"
                  className="bg-muted/30"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-phone" className="text-sm">
                  Phone Number
                </Label>
                <Input
                  id="contact-phone"
                  data-ocid="settings.contact_phone_input"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="bg-muted/30"
                />
              </div>
            </div>
            <Button
              size="sm"
              type="button"
              data-ocid="settings.save_contact_button"
              onClick={handleSaveContact}
              className="gap-2 transition-smooth"
            >
              <Phone className="h-3.5 w-3.5" />
              Save Contact
            </Button>
          </div>

          <Separator className="opacity-50" />

          {/* Profile edit */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">
                Profile Information
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="profile-name" className="text-sm">
                  Full Name
                </Label>
                <Input
                  id="profile-name"
                  data-ocid="settings.profile_name_input"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="bg-muted/30"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="profile-email" className="text-sm">
                  Email Address
                </Label>
                <Input
                  id="profile-email"
                  data-ocid="settings.profile_email_input"
                  value={profileEmail}
                  onChange={(e) => setProfileEmail(e.target.value)}
                  className="bg-muted/30"
                />
              </div>
            </div>
            <Button
              size="sm"
              type="button"
              data-ocid="settings.save_profile_button"
              onClick={handleSaveProfile}
              className="gap-2 transition-smooth"
            >
              <User className="h-3.5 w-3.5" />
              Save Profile
            </Button>
          </div>

          <Separator className="opacity-50" />

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              type="button"
              data-ocid="settings.change_password_button"
              onClick={handleChangePassword}
              className="gap-2 transition-smooth"
            >
              <KeyRound className="h-4 w-4" />
              Change Password
            </Button>
            <Button
              variant="outline"
              size="sm"
              type="button"
              data-ocid="settings.export_data_button"
              onClick={handleDataExport}
              className="gap-2 transition-smooth"
            >
              <Download className="h-4 w-4" />
              Export My Data
            </Button>
          </div>
        </SectionCard>

        {/* 4. ABOUT */}
        <SectionCard
          title="About"
          icon={Info}
          iconClass="text-secondary-foreground"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-calm flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-base font-display text-foreground">
                    Smart Elderly Care
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Emergency Assistance System
                  </p>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Version</span>
                  <Badge variant="secondary" className="font-mono text-xs">
                    1.0.0
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Developed by the CareAI Team
                </p>
                <p className="text-muted-foreground text-xs">
                  Built with ❤️ for seniors &amp; caregivers
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-3 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-destructive">
                  <Phone className="h-3.5 w-3.5" />
                  Emergency Hotlines
                </div>
                <p className="text-muted-foreground">
                  🚨 Emergency Services:{" "}
                  <span className="font-bold text-foreground">911</span>
                </p>
                <p className="text-muted-foreground">
                  👨‍⚕️ Caregiver Hotline:{" "}
                  <span className="font-bold text-foreground">
                    1-800-CARE-NOW
                  </span>
                </p>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  📧{" "}
                  <span className="underline cursor-pointer hover:text-foreground transition-smooth">
                    support@careai.health
                  </span>
                </p>
                <p>
                  🌐{" "}
                  <span className="underline cursor-pointer hover:text-foreground transition-smooth">
                    www.careai.health
                  </span>
                </p>
                <p>
                  📜{" "}
                  <span className="underline cursor-pointer hover:text-foreground transition-smooth">
                    Privacy Policy
                  </span>
                  {" — "}
                  <span className="underline cursor-pointer hover:text-foreground transition-smooth">
                    Terms of Service
                  </span>
                </p>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 5. LOGOUT */}
        <motion.div variants={sectionVariants}>
          <motion.button
            type="button"
            data-ocid="settings.logout_button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-destructive/10 border border-destructive/25 text-destructive hover:bg-destructive/20 transition-smooth font-semibold text-base"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="h-5 w-5" />
            Sign Out of Account
          </motion.button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Signed in as{" "}
            <span className="font-medium text-foreground">
              {user?.name ?? "Martha Johnson"}
            </span>
            {" ("}
            {user?.email ?? "martha@example.com"}
            {")"}{" "}
          </p>
        </motion.div>
      </motion.div>
    </AppLayout>
  );
}
