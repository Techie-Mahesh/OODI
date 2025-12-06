import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { karnatakaSyllabus } from "@/lib/karnataka-syllabus";
import { Link } from "wouter";
import { Calculator, FlaskConical, Globe, ChevronRight } from "lucide-react";

const iconMap: Record<string, any> = {
  Calculator,
  FlaskConical,
  Globe
};

export default function SubjectsPage() {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-heading">{t("nav.curriculum")}</h1>
        <p className="text-muted-foreground">Select a subject to start learning.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {karnatakaSyllabus.map((subject) => {
          const Icon = iconMap[subject.icon] || Globe;
          
          return (
            <Link key={subject.id} href={`/dashboard/subjects/${subject.id}`}>
              <Card className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50 group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${subject.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{subject.title[language]}</CardTitle>
                  <CardDescription>{subject.chapters.length} Chapters</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-primary font-medium">
                    <span>View Chapters</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
