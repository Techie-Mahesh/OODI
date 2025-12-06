import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, LayoutDashboard, Trophy, User, LogOut } from "lucide-react";
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

export function Navbar() {
  const [location] = useLocation();
  const isDashboard = location.startsWith("/dashboard");

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
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#curriculum" className="hover:text-foreground transition-colors">Curriculum</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
        )}

        <div className="flex flex-1 items-center justify-end gap-4">
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
                <Button variant="ghost" className="hidden sm:flex">Log In</Button>
              </Link>
              <Link href="/auth">
                <Button>Get Started</Button>
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
                <Link href="/">
                  <a className="text-lg font-medium hover:text-primary">Home</a>
                </Link>
                <Link href="/dashboard">
                  <a className="text-lg font-medium hover:text-primary">Dashboard</a>
                </Link>
                <Link href="/auth">
                  <a className="text-lg font-medium hover:text-primary">Login</a>
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
  
  const links = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/learn", label: "My Path", icon: BookOpen },
    { href: "/dashboard/achievements", label: "Achievements", icon: Trophy },
    { href: "/dashboard/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="hidden border-r bg-gray-50/40 md:block w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="flex flex-col gap-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.href;
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
             {["Mathematics", "Science", "Social Science", "English", "Kannada"].map((sub) => (
               <button key={sub} className="w-full text-left flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                 <span className="h-2 w-2 rounded-full bg-blue-400/50" />
                 {sub}
               </button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
