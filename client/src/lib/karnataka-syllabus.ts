
export interface Chapter {
  id: string;
  title: { en: string; kn: string };
  description: { en: string; kn: string };
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: { en: string; kn: string };
  type: 'video' | 'text' | 'quiz';
  duration: string;
}

export interface Subject {
  id: string;
  title: { en: string; kn: string };
  icon: string;
  color: string;
  chapters: Chapter[];
}

export const karnatakaSyllabus: Subject[] = [
  {
    id: "math",
    title: { en: "Mathematics", kn: "ಗಣಿತ" },
    icon: "Calculator",
    color: "text-blue-600 bg-blue-100",
    chapters: [
      {
        id: "m1",
        title: { en: "Arithmetic Progressions", kn: "ಸಮಾಂತರ ಶ್ರೇಢಿಗಳು" },
        description: { en: "Study of sequences and series", kn: "ಅನುಕ್ರಮಗಳು ಮತ್ತು ಸರಣಿಗಳ ಅಧ್ಯಯನ" },
        lessons: [
          { id: "m1-l1", title: { en: "Introduction to AP", kn: "ಸಮಾಂತರ ಶ್ರೇಢಿಯ ಪರಿಚಯ" }, type: 'video', duration: "15 min" },
          { id: "m1-l2", title: { en: "nth term of an AP", kn: "ಸಮಾಂತರ ಶ್ರೇಢಿಯ n ನೇ ಪದ" }, type: 'text', duration: "20 min" },
          { id: "m1-q1", title: { en: "Practice Quiz", kn: "ಅಭ್ಯಾಸ ರಸಪ್ರಶ್ನೆ" }, type: 'quiz', duration: "10 min" },
        ]
      },
      {
        id: "m2",
        title: { en: "Triangles", kn: "ತ್ರಿಭುಜಗಳು" },
        description: { en: "Properties of similar triangles", kn: "ಸಮರೂಪ ತ್ರಿಭುಜಗಳ ಗುಣಲಕ್ಷಣಗಳು" },
        lessons: [
          { id: "m2-l1", title: { en: "Similar Figures", kn: "ಸಮರೂಪ ಆಕೃತಿಗಳು" }, type: 'text', duration: "10 min" },
          { id: "m2-l2", title: { en: "BPT Theorem", kn: "ಥೇಲ್ಸ್ ಪ್ರಮೇಯ" }, type: 'video', duration: "25 min" },
        ]
      },
      {
        id: "m3",
        title: { en: "Quadratic Equations", kn: "ವರ್ಗ ಸಮೀಕರಣಗಳು" },
        description: { en: "Solving quadratic equations", kn: "ವರ್ಗ ಸಮೀಕರಣಗಳನ್ನು ಬಿಡಿಸುವುದು" },
        lessons: [
          { id: "m3-l1", title: { en: "Standard Form", kn: "ಆದರ್ಶ ರೂಪ" }, type: 'text', duration: "15 min" },
        ]
      }
    ]
  },
  {
    id: "science",
    title: { en: "Science", kn: "ವಿಜ್ಞಾನ" },
    icon: "FlaskConical",
    color: "text-purple-600 bg-purple-100",
    chapters: [
      {
        id: "s1",
        title: { en: "Chemical Reactions and Equations", kn: "ರಾಸಾಯನಿಕ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಸಮೀಕರಣಗಳು" },
        description: { en: "Understanding chemical changes", kn: "ರಾಸಾಯನಿಕ ಬದಲಾವಣೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು" },
        lessons: [
          { id: "s1-l1", title: { en: "Chemical Equations", kn: "ರಾಸಾಯನಿಕ ಸಮೀಕರಣಗಳು" }, type: 'video', duration: "20 min" },
          { id: "s1-l2", title: { en: "Types of Reactions", kn: "ರಾಸಾಯನಿಕ ಕ್ರಿಯೆಗಳ ವಿಧಗಳು" }, type: 'text', duration: "30 min" },
        ]
      },
      {
        id: "s2",
        title: { en: "Acids, Bases and Salts", kn: "ಆಮ್ಲಗಳು, ಪ್ರತ್ಯಾಮ್ಲಗಳು ಮತ್ತು ಲವಣಗಳು" },
        description: { en: "Properties of acids and bases", kn: "ಆಮ್ಲಗಳು ಮತ್ತು ಪ್ರತ್ಯಾಮ್ಲಗಳ ಗುಣಲಕ್ಷಣಗಳು" },
        lessons: [
          { id: "s2-l1", title: { en: "Indicators", kn: "ಸೂಚಕಗಳು" }, type: 'video', duration: "15 min" },
        ]
      },
      {
        id: "s3",
        title: { en: "Life Processes", kn: "ಜೀವ ಕ್ರಿಯೆಗಳು" },
        description: { en: "Basic functions of living beings", kn: "ಜೀವಿಗಳ ಮೂಲಭೂತ ಕಾರ್ಯಗಳು" },
        lessons: [
          { id: "s3-l1", title: { en: "Nutrition", kn: "ಪೋಷಣೆ" }, type: 'video', duration: "25 min" },
        ]
      }
    ]
  },
  {
    id: "social",
    title: { en: "Social Science", kn: "ಸಮಾಜ ವಿಜ್ಞಾನ" },
    icon: "Globe",
    color: "text-orange-600 bg-orange-100",
    chapters: [
      {
        id: "ss1",
        title: { en: "The Rise of Nationalism in Europe", kn: "ಯುರೋಪಿನಲ್ಲಿ ರಾಷ್ಟ್ರೀಯತೆಯ ಉದಯ" },
        description: { en: "History of European nationalism", kn: "ಯುರೋಪಿಯನ್ ರಾಷ್ಟ್ರೀಯತೆಯ ಇತಿಹಾಸ" },
        lessons: [
          { id: "ss1-l1", title: { en: "French Revolution", kn: "ಫ್ರೆಂಚ್ ಕ್ರಾಂತಿ" }, type: 'text', duration: "20 min" },
        ]
      }
    ]
  },
  {
    id: "english",
    title: { en: "English", kn: "ಇಂಗ್ಲಿಷ್" },
    icon: "BookOpen",
    color: "text-pink-600 bg-pink-100",
    chapters: [
      {
        id: "e1",
        title: { en: "A Hero", kn: "ಒಬ್ಬ ನಾಯಕ" },
        description: { en: "Story by R.K. Narayan", kn: "ಆರ್.ಕೆ. ನಾರಾಯಣ್ ಅವರ ಕಥೆ" },
        lessons: [
          { id: "e1-l1", title: { en: "Summary", kn: "ಸಾರಾಂಶ" }, type: 'text', duration: "10 min" },
          { id: "e1-l2", title: { en: "Question & Answers", kn: "ಪ್ರಶ್ನೆ ಮತ್ತು ಉತ್ತರಗಳು" }, type: 'quiz', duration: "15 min" },
        ]
      },
      {
        id: "e2",
        title: { en: "Grandma Climbs a Tree", kn: "ಅಜ್ಜಿ ಮರ ಹತ್ತುತ್ತಾರೆ" },
        description: { en: "Poem by Ruskin Bond", kn: "ರಸ್ಕಿನ್ ಬಾಂಡ್ ಅವರ ಕವಿತೆ" },
        lessons: [
          { id: "e2-l1", title: { en: "Poem Analysis", kn: "ಕವಿತೆಯ ವಿಶ್ಲೇಷಣೆ" }, type: 'video', duration: "12 min" },
        ]
      }
    ]
  },
  {
    id: "kannada",
    title: { en: "Kannada", kn: "ಕನ್ನಡ" },
    icon: "Feather",
    color: "text-red-600 bg-red-100",
    chapters: [
      {
        id: "k1",
        title: { en: "Yuddha", kn: "ಯುದ್ಧ" },
        description: { en: "Lessons on war and peace", kn: "ಯುದ್ಧ ಮತ್ತು ಶಾಂತಿಯ ಪಾಠಗಳು" },
        lessons: [
          { id: "k1-l1", title: { en: "Introduction", kn: "ಪರಿಚಯ" }, type: 'video', duration: "15 min" },
        ]
      },
      {
        id: "k2",
        title: { en: "Shabari", kn: "ಶಬರಿ" },
        description: { en: "Extract from Ramayana", kn: "ರಾಮಾಯಣದ ಭಾಗ" },
        lessons: [
          { id: "k2-l1", title: { en: "Story of Shabari", kn: "ಶಬರಿಯ ಕಥೆ" }, type: 'text', duration: "20 min" },
        ]
      }
    ]
  }
];
