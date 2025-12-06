import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, LayoutDashboard, Trophy, User, LogOut, Languages } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const [location] = useLocation();
  const isDashboard = location.startsWith("/dashboard");
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex items-center gap-2 lg:mr-6">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <span>OODI</span>
            </a>
          </Link>
        </div>

        {!isDashboard && (
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">{t("nav.features")}</a>
            <a href="#curriculum" className="hover:text-foreground transition-colors">{t("nav.curriculum")}</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">{t("nav.pricing")}</a>
          </div>
        )}

        <div className="flex flex-1 items-center justify-end gap-4">
          {/* Language Toggle */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="hidden sm:flex gap-2"
          >
            <Languages className="h-4 w-4" />
            {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
          </Button>

          {isDashboard ? (
            <div className="flex items-center gap-4">
               <div className="hidden md:flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  <span className="relative flex h-2 w-2 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  7 Day Streak!
               </div>
               
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9 border-2 border-primary/10">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@student" />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trophy className="mr-2 h-4 w-4" />
                    Achievements
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth">
                <Button variant="ghost" className="hidden sm:flex">{t("nav.login")}</Button>
              </Link>
              <Link href="/auth">
                <Button>{t("nav.getStarted")}</Button>
              </Link>
            </div>
          )}
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-4">
                <div className="flex items-center justify-between">
                   <span className="text-sm font-medium">Language</span>
                   <Button variant="outline" size="sm" onClick={toggleLanguage}>
                     {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
                   </Button>
                </div>
                <Link href="/">
                  <a className="text-lg font-medium hover:text-primary">{t("nav.home")}</a>
                </Link>
                <Link href="/dashboard">
                  <a className="text-lg font-medium hover:text-primary">{t("nav.dashboard")}</a>
                </Link>
                <Link href="/auth">
                  <a className="text-lg font-medium hover:text-primary">{t("nav.login")}</a>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export function Sidebar() {
  const [location] = useLocation();
  const { t } = useLanguage();
  
  const links = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/subjects", label: "My Subjects", icon: BookOpen },
    { href: "/dashboard/achievements", label: "Achievements", icon: Trophy },
    { href: "/dashboard/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="hidden border-r bg-gray-50/40 md:block w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="flex flex-col gap-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.href || (link.href !== "/dashboard" && location.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href}>
              <a className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:text-primary ${
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted"
              }`}>
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            </Link>
          );
        })}
        
        <div className="mt-6">
          <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Subjects
          </h3>
          <div className="space-y-1">
             {[
               { id: "math", key: "sub.math" }, 
               { id: "science", key: "sub.science" }, 
               { id: "social", key: "sub.social" }, 
               { id: "english", key: "sub.english" }, 
               { id: "kannada", key: "sub.kannada" }
             ].map((sub) => (
               <Link key={sub.id} href={`/dashboard/subjects/${sub.id}`}>
                 <button className="w-full text-left flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                   <span className="h-2 w-2 rounded-full bg-blue-400/50" />
                   {t(sub.key)}
                 </button>
               </Link>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
