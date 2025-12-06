import { useParams, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/language-context";
import { karnatakaSyllabus } from "@/lib/karnataka-syllabus";
import { PlayCircle, FileText, HelpCircle, ChevronLeft, ChevronRight, Lock } from "lucide-react";

export default function ChaptersPage() {
  const { subjectId } = useParams();
  const { language } = useLanguage();
  
  const subject = karnatakaSyllabus.find(s => s.id === subjectId);

  if (!subject) {
    return <div className="p-8">Subject not found</div>;
  }

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/dashboard/subjects">Subjects</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{subject.title[language]}</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-heading mb-2">{subject.title[language]}</h1>
          <p className="text-muted-foreground">Class 10 Karnataka State Syllabus</p>
        </div>
      </div>

      <div className="space-y-6">
        {subject.chapters.map((chapter, index) => (
          <Card key={chapter.id} className="overflow-hidden">
            <div className="border-l-4 border-primary">
              <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                      Chapter {index + 1}
                    </span>
                    <CardTitle className="text-xl">{chapter.title[language]}</CardTitle>
                    <CardDescription className="mt-1">{chapter.description[language]}</CardDescription>
                  </div>
                  {index === 0 && (
                    <div className="text-right">
                      <span className="text-sm font-medium text-primary">In Progress</span>
                      <Progress value={33} className="h-1.5 w-24 mt-2" />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  {chapter.lessons.map((lesson) => {
                    const Icon = lesson.type === 'video' ? PlayCircle : lesson.type === 'quiz' ? HelpCircle : FileText;
                    return (
                      <Link key={lesson.id} href={`/dashboard/lesson/${lesson.id}`}>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                              lesson.type === 'video' ? 'bg-blue-100 text-blue-600' : 
                              lesson.type === 'quiz' ? 'bg-purple-100 text-purple-600' : 
                              'bg-orange-100 text-orange-600'
                            }`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                                {lesson.title[language]}
                              </p>
                              <p className="text-xs text-muted-foreground capitalize">
                                {lesson.type} • {lesson.duration}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground group-hover:text-primary">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
