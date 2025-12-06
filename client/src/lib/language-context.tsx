import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "kn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.features": "Features",
    "nav.curriculum": "Curriculum",
    "nav.pricing": "Pricing",
    "nav.login": "Log In",
    "nav.getStarted": "Get Started",
    "nav.dashboard": "Dashboard",
    "nav.home": "Home",
    "hero.new": "New: Class 10 Karnataka State Board",
    "hero.title": "Master Your Curriculum. Achieve Your Goals.",
    "hero.subtitle":
      "The smartest way to prepare for Class 10 (SSLC). Personalized daily tasks, adaptive quizzes, and real-time progress tracking.",
    "hero.cta": "Start Learning Now",
    "hero.explore": "Explore Syllabus",
    "why.title": "Why OODI?",
    "why.subtitle": "Everything you need to excel in SSLC",
    "feature.tasks": "Daily Smart Tasks",
    "feature.tasks.desc":
      "Bite-sized tasks every day based on your syllabus and weak areas.",
    "feature.goals": "Goal-Based Learning",
    "feature.goals.desc":
      "Target 'Pass', 'First Class', or 'Distinction'. We customize the path.",
    "feature.bilingual": "Kannada & English",
    "feature.bilingual.desc":
      "Switch languages instantly to understand complex concepts better.",
    "auth.welcome": "Welcome to OODI",
    "auth.subtitle":
      "Enter your credentials to access your personalized learning path.",
    "auth.login": "Login",
    "auth.signup": "Sign Up",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.submit": "Login",
    "auth.google": "Continue with Google",
    "auth.confirmPassword": "Confirm Password",
    "auth.fullName": "Full Name",
    "auth.fullNamePlaceholder": "Enter your full name",
    "auth.googleSuccessTitle": "Google Sign-In Successful",
    "auth.googleSuccessDescription":
      "You have successfully signed in with Google. Redirecting...",
    "auth.agreementText":
      "By signing up, you agree to our Terms of Service and Privacy Policy.",
    "auth.orContinueWith": "Or continue with",
    "auth.creatingAccount": "Creating your account...",
    "auth.loggingIn": "Logging you in...",
    "dash.welcome": "Hello, Arjun!",
    "dash.track": "You're on track to hit your 'Distinction' goal. Keep it up!",
    "dash.focus": "Today's Focus",
    "dash.continue": "Continue Learning",
    "dash.smartTasks": "Smart Tasks for You",
    "dash.weekly": "Weekly Performance",
    "sub.math": "Mathematics",
    "sub.science": "Science",
    "sub.social": "Social Science",
    "sub.english": "English",
    "sub.kannada": "Kannada",
    "sub.hindi": "Hindi",
  },
  kn: {
    "nav.features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
    "nav.curriculum": "ಪಠ್ಯಕ್ರಮ",
    "nav.pricing": "ದರಗಳು",
    "nav.login": "ಲಾಗಿನ್",
    "nav.getStarted": "ಪ್ರಾರಂಭಿಸಿ",
    "nav.dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "nav.home": "ಮುಖಪುಟ",
    "hero.new": "ಹೊಸತು: 10ನೇ ತರಗತಿ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪಠ್ಯಕ್ರಮ",
    "hero.title":
      "ನಿಮ್ಮ ಪಠ್ಯಕ್ರಮವನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ. ನಿಮ್ಮ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಿ.",
    "hero.subtitle":
      "10ನೇ ತರಗತಿ (SSLC) ಗೆ ತಯಾರಿ ನಡೆಸಲು ಅತ್ಯುತ್ತಮ ಮಾರ್ಗ. ವೈಯಕ್ತೀಕರಿಸಿದ ದೈನಂದಿನ ಕಾರ್ಯಗಳು ಮತ್ತು ಪ್ರಗತಿ ಪರಿಶೀಲನೆ.",
    "hero.cta": "ಈಗಲೇ ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
    "hero.explore": "ಪಠ್ಯಕ್ರಮವನ್ನು ನೋಡಿ",
    "why.title": "OODI ಏಕೆ?",
    "why.subtitle": "SSLC ಯಲ್ಲಿ ಉತ್ತಮ ಅಂಕ ಗಳಿಸಲು ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ ಇಲ್ಲಿದೆ",
    "feature.tasks": "ದೈನಂದಿನ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಯಗಳು",
    "feature.tasks.desc":
      "ನಿಮ್ಮ ಪಠ್ಯಕ್ರಮ ಮತ್ತು ದುರ್ಬಲ ವಿಷಯಗಳ ಆಧಾರದ ಮೇಲೆ ಪ್ರತಿದಿನದ ಚಿಕ್ಕ ಕಾರ್ಯಗಳು.",
    "feature.goals": "ಗುರಿ ಆಧಾರಿತ ಕಲಿಕೆ",
    "feature.goals.desc":
      "'ಪಾಸ್', 'ಫರ್ಸ್ಟ್ ಕ್ಲಾಸ್' ಅಥವಾ 'ಡಿಸ್ಟಿಂಕ್ಷನ್' ಗುರಿಯನ್ನು ಆರಿಸಿ. ನಾವು ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಕಲಿಸುತ್ತೇವೆ.",
    "feature.bilingual": "ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್",
    "feature.bilingual.desc":
      "ಕ್ಲಿಷ್ಟಕರವಾದ ವಿಷಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ ಕಲಿಯಿರಿ.",
    "auth.welcome": "OODI ಗೆ ಸ್ವಾಗತ",
    "auth.subtitle": "ನಿಮ್ಮ ಕಲಿಕೆಯ ಹಾದಿಯನ್ನು ಪ್ರವೇಶಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ.",
    "auth.login": "ಲಾಗಿನ್",
    "auth.signup": "ಸೈನ್ ಅಪ್",
    "auth.email": "ಇಮೇಲ್",
    "auth.password": "ಪಾಸ್‌ವರ್ಡ್",
    "auth.submit": "ಲಾಗಿನ್ ಮಾಡಿ",
    "auth.google": "Google ನೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
    "auth.confirmPassword": "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
    "auth.fullName": "ಪೂರ್ಣ ಹೆಸರು",
    "auth.fullNamePlaceholder": "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    "auth.googleSuccessTitle": "Google ಸೈನ್-ಇನ್ ಯಶಸ್ವಿ",
    "auth.googleSuccessDescription":
      "ನೀವು ಯಶಸ್ವಿಯಾಗಿ Google ನೊಂದಿಗೆ ಸೈನ್ ಇನ್ ಆಗಿದ್ದೀರಿ. ಮರುನಿರ್ದೇಶನ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    "dash.welcome": "ನಮಸ್ಕಾರ, ಅರ್ಜುನ್!",
    "dash.track":
      "ನಿಮ್ಮ 'ಡಿಸ್ಟಿಂಕ್ಷನ್' ಗುರಿಯತ್ತ ನೀವು ಸರಿಯಾದ ಹಾದಿಯಲ್ಲಿದ್ದೀರಿ. ಹೀಗೆ ಮುಂದುವರಿಸಿ!",
    "dash.focus": "ಇಂದಿನ ಗಮನ",
    "dash.continue": "ಕಲಿಕೆಯನ್ನು ಮುಂದುವರಿಸಿ",
    "dash.smartTasks": "ನಿಮಗಾಗಿ ಸ್ಮಾರ್ಟ್ ಕಾರ್ಯಗಳು",
    "dash.weekly": "ವಾರದ ಸಾಧನೆ",
    "sub.math": "ಗಣಿತ",
    "sub.science": "ವಿಜ್ಞಾನ",
    "sub.social": "ಸಮಾಜ ವಿಜ್ಞಾನ",
    "sub.english": "ಇಂಗ್ಲಿಷ್",
    "sub.kannada": "ಕನ್ನಡ",
    "sub.hindi": "ಹಿಂದಿ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
