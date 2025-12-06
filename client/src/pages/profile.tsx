import { useLanguage } from "@/lib/language-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Mail,
  Phone,
  School,
  Award,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight font-heading">
        My Profile
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Avatar className="h-24 w-24 border-4 border-primary/10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@student"
                />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
              <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 hover:bg-orange-600">
                Class 10
              </Badge>
            </div>
            <h2 className="text-xl font-bold">Arjun Kumar</h2>
            <p className="text-sm text-muted-foreground">
              Student ID: ODEE-2024-889
            </p>

            <div className="mt-6 w-full space-y-2 text-left text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <School className="h-4 w-4" />
                <span>Karnataka State Board</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>arjun.k@example.com</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-6">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Details & Settings */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Goals</CardTitle>
              <CardDescription>
                Your target for the SSLC Examination
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Target Score</p>
                    <p className="text-sm text-muted-foreground">
                      Distinction (85%+)
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Change
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Focus Subject</p>
                    <p className="text-sm text-muted-foreground">Mathematics</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Change
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Arjun" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Kumar" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="school">School Name</Label>
                <Input
                  id="school"
                  defaultValue="Government High School, Jayanagar"
                />
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
