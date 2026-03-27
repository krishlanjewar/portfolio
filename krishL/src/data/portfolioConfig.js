// ============================================================
// portfolioConfig.js — single source of truth for all content
// Toggle any section with  show: true | false
// Add items by appending objects to the arrays below
// ============================================================

export const meta = {
  name: "Krish Lanjewar",
  title: "App Developer",
  tagline: "Building Experiences, One Pixel at a Time.",
  description:
    "Personal portfolio of Krish Lanjewar – a passionate App Developer specialising in Flutter, Android, and Web applications.",
  url: "https://krishlanjewar.dev",
  ogImage: "/og-image.webp",
  email: "krishlanjewar@example.com",
  phone: "+91 98765 43210",
  location: "Nagpur, Maharashtra, India",
};

export const social = {
  github: "https://github.com/krishlanjewar",
  linkedin: "https://linkedin.com/in/krishlanjewar",
  instagram: "https://instagram.com/krishlanjewar",
};

// Hero section
export const hero = {
  show: true,
  greeting: "Hello, I'm",
  name: "Krish Lanjewar",
  roles: ["App Developer", "Flutter Dev", "Android Dev", "UI/UX Enthusiast"],
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
};

// About section
export const about = {
  show: true,
  bio: [
    "I'm a passionate App Developer with hands-on experience building high-performance mobile and web applications using Flutter, Android (Kotlin/Java), and React.",
    "I love translating complex ideas into elegant, user-friendly interfaces — combining clean code architecture with pixel-perfect designs.",
    "Currently pursuing my B.Tech at G.H. Raisoni Institute of Engineering and Technology, Nagpur, where I balance academic excellence with real-world open-source contributions.",
  ],
  stats: [
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Technologies", value: 15, suffix: "+" },
    { label: "Months Exp.", value: 18, suffix: "+" },
    { label: "Commits", value: 500, suffix: "+" },
  ],
};

// Education section
export const education = {
  show: true,
  items: [
    {
      degree: "B.Tech – Computer Science",
      institution: "G.H. Raisoni Institute of Engineering and Technology",
      location: "Nagpur, MH",
      period: "2022 – 2026",
      grade: "CGPA: 8.2",
    },
    {
      degree: "HSC – Science (PCM)",
      institution: "Nagpur Junior College",
      location: "Nagpur, MH",
      period: "2020 – 2022",
      grade: "88.4%",
    },
    {
      degree: "SSC",
      institution: "Delhi Public School",
      location: "Nagpur, MH",
      period: "2019 – 2020",
      grade: "91.6%",
    },
  ],
};

// Skills section
export const skills = {
  show: true,
  categories: [
    {
      category: "Mobile",
      icon: "Smartphone",
      items: [
        { name: "Flutter / Dart", level: 90 },
        { name: "Android (Kotlin)", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Riverpod", level: 78 },
      ],
    },
    {
      category: "Web",
      icon: "Globe",
      items: [
        { name: "React.js", level: 82 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML / CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      category: "Backend & Tools",
      icon: "Wrench",
      items: [
        { name: "Node.js", level: 65 },
        { name: "REST APIs", level: 80 },
        { name: "Git / GitHub", level: 88 },
        { name: "Figma", level: 72 },
      ],
    },
  ],
};

// Experience section
export const experience = {
  show: true,
  items: [
    {
      role: "Flutter Developer Intern",
      company: "TechStart Solutions",
      period: "Jun 2024 – Dec 2024",
      description:
        "Built cross-platform mobile features using Flutter & Firebase; reduced app crash rate by 40%.",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      role: "Android Instructor",
      company: "GHRIEIT – Tech Club",
      period: "Jan 2024 – May 2024",
      description:
        "Conducted hands-on Android development workshops for 60+ students; developed lab exercises.",
      tags: ["Android", "Kotlin", "Teaching"],
    },
  ],
};

// Projects section
export const projects = {
  show: true,
  items: [
    {
      id: 1,
      title: "FinVise",
      category: "Mobile",
      description:
        "A feature-rich personal finance app with crypto tracking, SIP calculators, and offline authentication built with Flutter and Firebase.",
      thumbnail: "/projects/finvise.webp",
      color: "#F59E0B",
      tags: ["Flutter", "Firebase", "Riverpod", "CoinGecko API"],
      github: "https://github.com/krishlanjewar/finvise",
      live: null,
    },
    {
      id: 2,
      title: "MetroMate",
      category: "Mobile",
      description:
        "Smart metro navigation app for Nagpur metro with real-time schedules, route planner, and fare calculator.",
      thumbnail: "/projects/metromate.webp",
      color: "#3B82F6",
      tags: ["Flutter", "Google Maps API", "Dart"],
      github: "https://github.com/krishlanjewar/metromate",
      live: null,
    },
    {
      id: 3,
      title: "SiRNA Platform",
      category: "Web",
      description:
        "A research-grade bioinformatics web portal for siRNA sequence design, off-target analysis, and visualisation.",
      thumbnail: "/projects/sirna.webp",
      color: "#8B5CF6",
      tags: ["React", "Python (Flask)", "BioPython"],
      github: "https://github.com/krishlanjewar/sirna",
      live: "https://sirna.krishlanjewar.dev",
    },
    {
      id: 4,
      title: "Safe Rail",
      category: "Mobile",
      description:
        "Women-safety railway app with SOS alerts, live location sharing, and emergency contact management.",
      thumbnail: "/projects/saferail.webp",
      color: "#EC4899",
      tags: ["Flutter", "Firebase", "Google Maps"],
      github: "https://github.com/krishlanjewar/saferail",
      live: null,
    },
    {
      id: 5,
      title: "PlotPlan",
      category: "Web",
      description:
        "Real-estate plot booking and management portal with interactive maps, payment tracking and admin dashboard.",
      thumbnail: "/projects/plotplan.webp",
      color: "#10B981",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/krishlanjewar/plotplan",
      live: "https://plotplan.krishlanjewar.dev",
    },
    {
      id: 6,
      title: "AI Study Buddy",
      category: "AI",
      description:
        "LLM-powered study assistant that generates quizzes, summarises PDFs, and tracks learning progress.",
      thumbnail: "/projects/aistudybuddy.webp",
      color: "#06B6D4",
      tags: ["React", "OpenAI API", "Firebase"],
      github: "https://github.com/krishlanjewar/ai-study-buddy",
      live: null,
    },
  ],
};

// Beyond the Code section
export const beyondCode = {
  show: true,
  heading: "Beyond the Code",
  subheading:
    "What keeps my creative engine running outside the terminal.",
  items: [
    { icon: "Music2", label: "Music / Guitar" },
    { icon: "Camera", label: "Travel & Photography" },
    { icon: "Gamepad2", label: "PC Gaming" },
    { icon: "BookOpen", label: "Public Speaking" },
    { icon: "Dumbbell", label: "Fitness" },
    { icon: "Brain", label: "Puzzle Solving" },
  ],
};

// Achievements section
export const achievements = {
  show: true,
  heading: "Achievements Wall",
  subheading: "Milestones I'm proud of.",
  items: [
    {
      id: 1,
      icon: "Trophy",
      color: "#F59E0B",
      title: "Smart India Hackathon 2024",
      description: "Qualified for SIH 2024 Grand Finale representing college.",
    },
    {
      id: 2,
      icon: "Star",
      color: "#8B5CF6",
      title: "Best Final Year Project",
      description:
        "Awarded Best Project at department level for the FinVise app.",
    },
    {
      id: 3,
      icon: "Award",
      color: "#3B82F6",
      title: "Google Developer Student Club",
      description: "Core technical member and Flutter lead at GDSC GHRIEIT.",
    },
    {
      id: 4,
      icon: "BookOpen",
      color: "#10B981",
      title: "Research Paper Published",
      description:
        "Published paper on siRNA computational analysis in a UGC-approved journal.",
    },
    {
      id: 5,
      icon: "Zap",
      color: "#EC4899",
      title: "Open Source Contributor",
      description:
        "500+ commits across GitHub; contributed to 3 open-source Flutter plugins.",
    },
    {
      id: 6,
      icon: "Users",
      color: "#06B6D4",
      title: "Workshop Facilitator",
      description:
        "Trained 60+ students in Android & Flutter development across two semesters.",
    },
  ],
};

// Contact section
export const contact = {
  show: true,
  heading: "Contact Information",
  subheading: "Have a project in mind or just want to say hi? Drop me a line!",
};
