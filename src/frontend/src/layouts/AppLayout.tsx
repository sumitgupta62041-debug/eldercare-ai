import { EmergencyOverlay } from "@/components/EmergencyOverlay";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { SOSButton } from "@/components/SOSButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronRight,
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  Pill,
  Settings,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/medicine", label: "Medicine", icon: Pill },
  { to: "/emergency", label: "Emergency", icon: AlertTriangle },
  { to: "/chat", label: "AI Assistant", icon: MessageCircle },
  { to: "/caregiver", label: "Caregiver", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
];

function RealTimeClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="text-sm text-muted-foreground font-mono tabular-nums">
      {time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </span>
  );
}

function getPageTitle(pathname: string) {
  const map: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/medicine": "Medicine Reminders",
    "/emergency": "Emergency Monitoring",
    "/chat": "AI Health Assistant",
    "/caregiver": "Caregiver Panel",
    "/settings": "Settings",
  };
  return map[pathname] ?? "Smart Elderly Care";
}

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuthStore();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const initials =
    user?.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "ME";

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        data-ocid="sidebar.panel"
        className="fixed lg:relative z-40 flex flex-col h-full glass-dark border-r border-border/20 shadow-soft-dark"
        initial={false}
        animate={{ width: sidebarOpen ? 240 : 72 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ overflow: "hidden" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-border/15">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl gradient-calm flex items-center justify-center">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="min-w-0"
              >
                <p className="font-bold text-sm font-display text-foreground leading-tight">
                  Smart Elderly Care
                </p>
                <p className="text-xs text-muted-foreground">
                  Emergency Assistance
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav items */}
        <nav
          className="flex-1 px-2 py-4 space-y-1 overflow-y-auto"
          aria-label="Main navigation"
        >
          {navItems.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                data-ocid={`nav.${label.toLowerCase().replace(/\s+/g, "_")}.link`}
              >
                <motion.div
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-healthcare cursor-pointer ${
                    active
                      ? "bg-primary/15 text-primary border border-primary/25"
                      : "text-muted-foreground hover:bg-muted/40 hover:text-foreground border border-transparent"
                  }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <AnimatePresence>
                    {sidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm font-medium truncate"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {active && sidebarOpen && (
                    <ChevronRight className="h-3.5 w-3.5 ml-auto text-primary" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="px-2 pb-4 border-t border-border/15 pt-4">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-muted/30">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarFallback className="text-xs font-bold bg-primary/20 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-xs font-semibold truncate">
                    {user?.name ?? "Guest"}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {user?.role ?? "user"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0"
                onClick={logout}
                aria-label="Log out"
                data-ocid="sidebar.logout_button"
              >
                <LogOut className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top navbar */}
        <header
          className="bg-card border-b border-border/20 shadow-soft px-4 py-3 flex items-center gap-4 shrink-0"
          data-ocid="topbar.panel"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen((o) => !o)}
            className="btn-accessible transition-healthcare"
            aria-label="Toggle sidebar"
            data-ocid="topbar.menu_toggle"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={sidebarOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {sidebarOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>

          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold font-display text-foreground truncate">
              {getPageTitle(pathname)}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <RealTimeClock />
            <NotificationDropdown />
            <ThemeToggle />
            <Avatar
              className="h-8 w-8 cursor-pointer"
              data-ocid="topbar.user_avatar"
            >
              <AvatarFallback className="text-xs font-bold bg-primary/20 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page content */}
        <main
          className="flex-1 overflow-y-auto bg-background"
          data-ocid="main.panel"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 pr-4 sm:pr-6">
            {children}
          </div>
        </main>
      </div>

      {/* Global overlays */}
      <SOSButton />
      <EmergencyOverlay />
    </div>
  );
}
