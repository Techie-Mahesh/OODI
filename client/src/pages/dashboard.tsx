import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  PlayCircle, 
  Trophy, 
  TrendingUp, 
  Star,
  Calendar,
  ChevronRight,
  Target
} from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { useLanguage } from "@/lib/language-context";
import { Link } from "wouter";

const data = [
  { name: "Mon", score: 80 },
  { name: "Tue", score: 92 },
  { name: "Wed", score: 75 },
  { name: "Thu", score: 88 },
  { name: "Fri", score: 95 },
  { name: "Sat", score: 60 },
  { name: "Sun", score: 85 },
];

export default function StudentDashboard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-heading">{t("dash.welcome")} 👋</h1>
          <p className="text-muted-foreground">{t("dash.track")}</p>
        </div>
        <div className="flex items-center gap-3">
          <Card className="flex items-center gap-3 p-3 border-orange-100 bg-orange-50">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 border border-orange-200">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-orange-800">Goal</p>
              <p className="text-sm font-bold text-orange-900">Distinction</p>
            </div>
          </Card>
          <Card className="flex items-center gap-3 p-3 border-blue-100 bg-blue-50">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border border-blue-200">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-blue-800">XP</p>
              <p className="text-sm font-bold text-blue-900">2,450</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        
        {/* Left Column - Daily Focus */}
        <div className="col-span-4 space-y-6">
          {/* Today's Focus Card */}
          <Card className="border-none shadow-lg bg-linear-to-br from-primary to-blue-700 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                   <Badge variant="secondary" className="mb-2 bg-white/20 hover:bg-white/30 text-white border-none">{t("dash.focus")}</Badge>
                   <CardTitle className="text-2xl font-heading">Quadratic Equations</CardTitle>
                   <CardDescription className="text-blue-100">Mathematics • Chapter 4</CardDescription>
                </div>
                <div className="h-12 w-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                   <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-1"><PlayCircle className="h-4 w-4" /> 2 Lessons</div>
                <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> 45 Mins</div>
                <div className="flex items-center gap-1"><Star className="h-4 w-4" /> +150 XP</div>
              </div>
              <div className="space-y-2">
                 <div className="flex justify-between text-xs font-medium">
                   <span>Progress</span>
                   <span>35%</span>
                 </div>
                 <Progress value={35} className="h-2 bg-white/20 [&>div]:bg-white" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/lesson/m1-l1" className="w-full">
                <Button variant="secondary" className="w-full text-primary font-bold shadow-lg hover:bg-white">
                  {t("dash.continue")}
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Up Next / Smart Tasks */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {t("dash.smartTasks")}
            </h3>
            <div className="grid gap-3">
              {[
                { title: "Light - Reflection & Refraction", subject: "Science", type: "Quiz", time: "15 min", status: "Pending" },
                { title: "Rise of Nationalism in Europe", subject: "Social", type: "Revision", time: "20 min", status: "Pending" },
                { title: "Arithmetic Progressions", subject: "Math", type: "Practice", time: "30 min", status: "Locked" },
              ].map((task, i) => (
                <div key={i} className="group flex items-center justify-between p-4 bg-white border rounded-xl hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        task.subject === 'Math' ? 'bg-blue-100 text-blue-600' :
                        task.subject === 'Science' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {task.subject.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{task.title}</h4>
                        <p className="text-xs text-muted-foreground">{task.subject} • {task.type} • {task.time}</p>
                      </div>
                   </div>
                   <Button variant="ghost" size="icon" className="text-muted-foreground group-hover:text-primary">
                     {task.status === 'Locked' ? <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"><span className="text-xs">🔒</span></div> : <ChevronRight className="h-5 w-5" />}
                   </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Progress */}
        <div className="col-span-3 space-y-6">
          {/* Weekly Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("dash.weekly")}</CardTitle>
              <CardDescription>Quiz scores over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="h-[200px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={data}>
                     <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                     <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                     <Tooltip 
                        cursor={{fill: 'transparent'}}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                     <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={20} />
                   </BarChart>
                 </ResponsiveContainer>
               </div>
            </CardContent>
          </Card>

          {/* Badges / Achievements */}
          <Card>
             <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base">Recent Badges</CardTitle>
                  <Button variant="ghost" size="sm" className="text-xs h-8">View All</Button>
                </div>
             </CardHeader>
             <CardContent>
                <div className="flex gap-4 overflow-x-auto pb-2">
                   {[
                     { name: "Math Wizard", icon: "➗", color: "bg-blue-100 border-blue-200" },
                     { name: "7 Day Streak", icon: "🔥", color: "bg-orange-100 border-orange-200" },
                     { name: "Quiz Master", icon: "🎯", color: "bg-green-100 border-green-200" },
                   ].map((badge, i) => (
                     <div key={i} className={`flex-shrink-0 flex flex-col items-center justify-center h-24 w-24 rounded-xl border ${badge.color} p-2 gap-2`}>
                        <span className="text-2xl">{badge.icon}</span>
                        <span className="text-xs font-medium text-center leading-tight">{badge.name}</span>
                     </div>
                   ))}
                </div>
             </CardContent>
          </Card>

          {/* Upcoming Schedule */}
          <Card>
             <CardHeader>
                <CardTitle className="text-base">Upcoming</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="space-y-4">
                   <div className="flex items-start gap-3 relative pl-4 border-l-2 border-primary/20">
                      <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-primary"></div>
                      <div>
                         <p className="text-sm font-medium">Science Mock Test</p>
                         <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-3 relative pl-4 border-l-2 border-gray-100">
                      <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                      <div>
                         <p className="text-sm font-medium">Live Class: Geometry</p>
                         <p className="text-xs text-muted-foreground">Wed, 4:00 PM</p>
                      </div>
                   </div>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
