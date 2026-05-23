import { Skeleton } from "@/components/ui/skeleton";
import { useAuthStore } from "@/store";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// Lazy pages
const LandingPage = lazy(() => import("./pages/Landing"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const MedicinePage = lazy(() => import("./pages/Medicine"));
const EmergencyPage = lazy(() => import("./pages/Emergency"));
const ChatPage = lazy(() => import("./pages/Chat"));
const CaregiverPage = lazy(() => import("./pages/Caregiver"));
const SettingsPage = lazy(() => import("./pages/Settings"));

function PageLoader() {
  return (
    <div className="p-8 space-y-4">
      <Skeleton className="h-10 w-64 rounded-xl" />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-32 rounded-2xl" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-2xl" />
    </div>
  );
}

// Routes
const rootRoute = createRootRoute();

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LandingPage />
    </Suspense>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  ),
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <SignupPage />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) throw redirect({ to: "/login" });
  },
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  ),
});

const medicineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/medicine",
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) throw redirect({ to: "/login" });
  },
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MedicinePage />
    </Suspense>
  ),
});

const emergencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/emergency",
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) throw redirect({ to: "/login" });
  },
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <EmergencyPage />
    </Suspense>
  ),
});

const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chat",
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) throw redirect({ to: "/login" });
  },
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ChatPage />
    </Suspense>
  ),
});

const caregiverRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/caregiver",
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) throw redirect({ to: "/login" });
  },
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <CaregiverPage />
    </Suspense>
  ),
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) throw redirect({ to: "/login" });
  },
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <SettingsPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  landingRoute,
  loginRoute,
  signupRoute,
  dashboardRoute,
  medicineRoute,
  emergencyRoute,
  chatRoute,
  caregiverRoute,
  settingsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
