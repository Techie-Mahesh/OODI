import { useLanguage } from "@/lib/language-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Zap, Target, Medal, Crown, Flame } from "lucide-react";

export default function AchievementsPage() {
  const { t } = useLanguage();

  const achievements = [
    {
      id: 1,
      title: "Math Wizard",
      description: "Score 100% in 3 Algebra quizzes",
      icon: "➗",
      color: "bg-blue-100 border-blue-200 text-blue-600",
      progress: 100,
      completed: true,
      date: "2 days ago"
    },
    {
      id: 2,
      title: "7 Day Streak",
      description: "Learn for 7 consecutive days",
      icon: "🔥",
      color: "bg-orange-100 border-orange-200 text-orange-600",
      progress: 100,
      completed: true,
      date: "Yesterday"
    },
    {
      id: 3,
      title: "Science Scholar",
      description: "Complete the 'Chemical Reactions' chapter",
      icon: "🧪",
      color: "bg-purple-100 border-purple-200 text-purple-600",
      progress: 85,
      completed: false,
      date: null
    },
    {
      id: 4,
      title: "Early Bird",
      description: "Complete a lesson before 8 AM",
      icon: "🌅",
      color: "bg-yellow-100 border-yellow-200 text-yellow-600",
      progress: 0,
      completed: false,
      date: null
    },
    {
      id: 5,
      title: "Quiz Master",
      description: "Score above 90% in 5 quizzes",
      icon: "🎯",
      color: "bg-green-100 border-green-200 text-green-600",
      progress: 60,
      completed: false,
      date: null
    },
    {
      id: 6,
      title: "Language Expert",
      description: "Complete 5 English Grammar lessons",
      icon: "🗣️",
      color: "bg-pink-100 border-pink-200 text-pink-600",
      progress: 20,
      completed: false,
      date: null
    }
  ];

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-heading">Achievements</h1>
          <p className="text-muted-foreground">Track your badges and milestones.</p>
        </div>
        
        <Card className="flex items-center gap-4 p-4 bg-linear-to-r from-yellow-50 to-orange-50 border-orange-100">
          <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 ring-4 ring-orange-50">
            <Trophy className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-orange-800">Total XP</p>
            <p className="text-2xl font-bold text-orange-900">2,450</p>
          </div>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 flex flex-col items-center justify-center text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Medal className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">Badges Earned</p>
          </div>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold">85%</p>
            <p className="text-xs text-muted-foreground">Avg. Score</p>
          </div>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
            <Crown className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold">Top 10%</p>
            <p className="text-xs text-muted-foreground">Class Rank</p>
          </div>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Badges Gallery</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className={`transition-all hover:shadow-md ${achievement.completed ? 'border-green-200 bg-green-50/30' : 'opacity-80'}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl shadow-xs ${achievement.color}`}>
                  {achievement.icon}
                </div>
                {achievement.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                    Unlocked
                  </Badge>
                )}
              </div>
              <CardTitle className="mt-4 text-lg">{achievement.title}</CardTitle>
              <CardDescription>{achievement.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-medium text-muted-foreground">
                  <span>Progress</span>
                  <span>{achievement.progress}%</span>
                </div>
                <Progress value={achievement.progress} className="h-2" />
                {achievement.completed && (
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Earned {achievement.date}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
