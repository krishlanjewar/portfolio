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
  email: "lanjewarkrish07@gmail.com",
  phone: "+91 7410509989",
  location: "Nagpur, Maharashtra, India",
};

export const social = {
  github: "https://github.com/krishlanjewar",
  linkedin: "https://www.linkedin.com/in/krish-lanjewar",
  instagram: "https://instagram.com/krishlanjewar",
};

// Hero section
export const hero = {
  show: true,
  greeting: "Hello, I'm",
  name: "Krish Lanjewar",
  roles: ["Flutter Developer", "Frontend Developer", "App Developer", "Tech Enthusiast"],
  cta: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
};

// About section
export const about = {
  show: true,
  bio: [
    "Flutter Developer with practical experience in cross-platform mobile app development, Flutter UI, Supabase backend integration, authentication, database management, and state management.",
    "Seeking to build and scale real-world applications while continuously expanding my skill set to grow as a full-stack mobile developer.",
    "Driven by the passion to solve problems and create user-friendly designs, I maintain a strong focus on clean architecture, API-first integrations, and highly responsive screen designs."
  ],
  stats: [
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Active Users", value: 10, suffix: "+" },
    { label: "Daily Scans", value: 500, suffix: "+" },
    { label: "App ROI", value: 94, suffix: "%" },
  ],
};

// Education section
export const education = {
  show: true,
  items: [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "St. Vincent Pallotti College of Engineering and Technology",
      location: "Nagpur, MH",
      period: "2024 – 2028",
      grade: "CGPA: 8.0/10.0",
    }
  ],
};

// Skills section
export const skills = {
  show: true,
  categories: [
    {
      category: "Languages",
      icon: "Code2",
      items: [
        { name: "Java", level: 80 },
        { name: "Python", level: 85 },
        { name: "Dart", level: 90 },
      ],
    },
    {
      category: "Frontend",
      icon: "Layout",
      items: [
        { name: "Flutter", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 85 },
      ],
    },
    {
      category: "Database & Backend",
      icon: "Database",
      items: [
        { name: "PostgreSQL", level: 75 },
        { name: "Supabase", level: 85 },
        { name: "State Mgt. (Riverpod/Hive)", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      items: [
        { name: "Docker", level: 70 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
      ],
    },
  ],
};

// Experience section
export const experience = {
  show: true,
  items: [
    {
      role: "Flutter App Developer Intern",
      company: "Finvise",
      period: "Feb 2026 - April 2026 • Hybrid, India",
      description:
        "Built scalable Flutter applications using Riverpod for state management. Designed feature-based architectures improving code modularity and maintainability. Integrated Supabase for authentication and database operations.",
      tags: ["Flutter", "Riverpod", "Supabase"],
    },
    {
      role: "Flutter App Developer Intern",
      company: "UptoSkills",
      period: "Dec 2025 - Feb 2026 • Online, India",
      description:
        "Built responsive Flutter mobile applications with reusable components. Integrated Supabase for user authentication and implemented offline-first functionality using Hive and SharedPreferences.",
      tags: ["Flutter", "Supabase", "Hive", "SharedPreferences"],
    },
  ],
};

// Projects section
export const projects = {
  show: true,
  items: [
    {
      id: 1,
      title: "Safe Eat",
      category: "Mobile",
      description:
        "Cross-platform app that helps users understand food ingredients in simple language. Includes allergen detection and emergency features. Processes 500+ product scans daily with ~200ms REST latency.",
      thumbnail: "/projects/safeeat.webp",
      color: "#F59E0B",
      tags: ["Flutter", "Supabase", "Open Food API"],
      github: "https://github.com/krishlanjewar",
      live: null,
    },
    {
      id: 2,
      title: "Mental Health AI",
      category: "AI",
      description:
        "Intelligent Mental Health Assistant using NLP to analyze user emotions and provide personalized coping suggestions. Integrated Gemini API for real-time conversational responses with context-aware sentiment analysis.",
      thumbnail: "/projects/mentalhealth.webp",
      color: "#8B5CF6",
      tags: ["Flutter", "Supabase", "Gemini API"],
      github: "https://github.com/krishlanjewar",
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
  heading: "Certifications & Achievements",
  subheading: "Continuous learning and competitive milestones.",
  items: [
    {
      id: 1,
      icon: "Award",
      color: "#F59E0B",
      title: "HTML Certified",
      description: "Certified by UptoSkills HTML program.",
    },
    {
      id: 2,
      icon: "Trophy",
      color: "#8B5CF6",
      title: "Game Development",
      description:
        "Secured Second Prize in gamathon for building a functional game using Unity.",
    },
  ],
};

// Contact section
export const contact = {
  show: true,
  heading: "Contact Information",
  subheading: "Have a project in mind or just want to say hi? Drop me a line!",
};
