import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { karnatakaSyllabus } from "@/lib/karnataka-syllabus";
import { ChevronLeft, CheckCircle2, Play, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function LessonPage() {
  const { lessonId } = useParams();
  const { language } = useLanguage();

  // Helper to find lesson data
  let lessonData = null;
  let chapterData = null;
  let subjectData = null;

  for (const subject of karnatakaSyllabus) {
    for (const chapter of subject.chapters) {
      const lesson = chapter.lessons.find(l => l.id === lessonId);
      if (lesson) {
        lessonData = lesson;
        chapterData = chapter;
        subjectData = subject;
        break;
      }
    }
    if (lessonData) break;
  }

  if (!lessonData || !subjectData || !chapterData) {
    return <div className="p-8">Lesson not found</div>;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/subjects/${subjectData.id}`}>
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-lg font-bold font-heading">{lessonData.title[language]}</h1>
            <p className="text-xs text-muted-foreground">{chapterData.title[language]}</p>
          </div>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          Mark as Complete
          <CheckCircle2 className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {lessonData.type === 'video' && (
             <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                   </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-80"
                />
             </div>
          )}

          {lessonData.type === 'text' && (
            <Card className="p-8 prose dark:prose-invert max-w-none">
               <h2>Introduction</h2>
               <p>
                 This is a placeholder for the text content of the lesson. In a real application, 
                 this would contain rich text, formulas, and diagrams specific to the Karnataka State Syllabus.
               </p>
               <h3>Key Concepts</h3>
               <ul>
                 <li>Concept 1: Understanding the basics</li>
                 <li>Concept 2: Applying the formula</li>
                 <li>Concept 3: Solving real-world problems</li>
               </ul>
               <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 my-4">
                 <h4 className="text-blue-800 dark:text-blue-300 m-0 mb-2">Important Note</h4>
                 <p className="m-0 text-blue-700 dark:text-blue-200">
                   Remember to practice the examples given at the end of this section.
                 </p>
               </div>
            </Card>
          )}

          {lessonData.type === 'quiz' && (
             <Card className="p-8 text-center py-20">
                <div className="h-20 w-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <FileText className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Ready for a Quiz?</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Test your knowledge of {chapterData.title[language]}. 
                  This quiz contains 10 questions and takes about 10 minutes.
                </p>
                <Button size="lg">Start Quiz</Button>
             </Card>
          )}

          {/* Discussion / Notes Placeholder */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-bold mb-4">Lesson Notes</h3>
            <textarea 
              className="w-full min-h-[100px] p-3 rounded-lg border bg-white dark:bg-slate-950 resize-y"
              placeholder="Take notes here..." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
