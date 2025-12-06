import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, CheckCircle2, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/indian_students_studying_in_a_bright_modern_library.png";
import { useLanguage } from "@/lib/language-context";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {t("hero.new")}
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-heading text-balance">
                  {t("hero.title")}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl text-balance">
                  {t("hero.subtitle")}
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/auth">
                  <Button size="lg" className="h-12 px-8 text-base">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  {t("hero.explore")}
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gray-200 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p>Trusted by 10,000+ students</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
            >
               <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
                  <img 
                    src={heroImage} 
                    alt="Students learning" 
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Floating UI Elements for depth */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Daily Goal</p>
                        <p className="text-lg font-bold text-gray-900">Completed!</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                    <p className="text-xs font-medium text-gray-500 mb-2">Math Progress</p>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                    <p className="text-right text-xs font-bold mt-1 text-primary">85%</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="features">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {t("why.title")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">
              {t("why.subtitle")}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <CardTitle>{t("feature.tasks")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("feature.tasks.desc")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <CardTitle>{t("feature.goals")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("feature.goals.desc")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle>{t("feature.bilingual")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("feature.bilingual.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 shadow-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Ready to start your journey?
                <br />
                Join OODI today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Join thousands of students mastering their Class 10 curriculum. It's free to get started.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link href="/auth">
                  <Button size="lg" variant="secondary" className="h-12 px-8 text-primary font-bold">
                    Get Started for Free
                  </Button>
                </Link>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
