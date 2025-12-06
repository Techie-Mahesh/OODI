import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar, Sidebar } from "@/components/layout";

// Pages
import LandingPage from "@/pages/landing";
import AuthPage from "@/pages/auth";
import StudentDashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <Navbar />
      <div className="flex container max-w-[1600px] mx-auto">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden">
          <Switch>
            <Route path="/dashboard" component={StudentDashboard} />
            <Route path="/dashboard/learn">
              <div className="p-8">Learning Path Page (Coming Soon)</div>
            </Route>
            <Route path="/dashboard/achievements">
              <div className="p-8">Achievements Page (Coming Soon)</div>
            </Route>
            <Route path="/dashboard/profile">
              <div className="p-8">Profile Page (Coming Soon)</div>
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

function App() {
  const [location] = useLocation();
  // Hide default navbar on dashboard (it has its own in layout) and auth page
  const shouldHideNavbar = location.startsWith("/dashboard") || location === "/auth";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="font-sans antialiased text-foreground bg-background">
           {!shouldHideNavbar && <Navbar />}
           
           <Switch>
              <Route path="/" component={LandingPage} />
              <Route path="/auth" component={AuthPage} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard*" component={DashboardLayout} />
              
              <Route component={NotFound} />
           </Switch>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
