export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  description: string;
  techStack: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    thumbnail:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    category: "Web Development",
    description:
      "Full-stack e-commerce platform with real-time inventory management and secure payment processing.",
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "AI Dashboard",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "UI/UX Design",
    description:
      "Modern analytics dashboard with AI-powered insights and predictive analytics.",
    techStack: ["React", "TypeScript", "D3.js"],
  },
  {
    id: 3,
    title: "Mobile Banking App",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    category: "Mobile Development",
    description:
      "Secure mobile banking application with biometric authentication and instant transfers.",
    techStack: ["React Native", "Firebase", "Stripe"],
  },
  {
    id: 4,
    title: "Healthcare Portal",
    thumbnail:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    category: "Web Development",
    description:
      "Patient management system with appointment scheduling and telemedicine integration.",
    techStack: ["Next.js", "PostgreSQL", "WebRTC"],
  },
  {
    id: 5,
    title: "Fitness Tracker",
    thumbnail:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    category: "Mobile Development",
    description:
      "Comprehensive fitness tracking app with workout plans and nutrition monitoring.",
    techStack: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 6,
    title: "Creative Agency Website",
    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    category: "UI/UX Design",
    description:
      "Award-winning agency website with immersive animations and 3D elements.",
    techStack: ["Three.js", "GSAP", "Tailwind CSS"],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading frontend architecture for enterprise applications, mentoring junior developers, and implementing modern design systems.",
    type: "work",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built scalable web applications from scratch, integrated third-party APIs, and optimized database performance.",
    type: "work",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description:
      "Developed responsive websites and interactive web applications for various clients across industries.",
    type: "work",
  },
  {
    id: 4,
    title: "Computer Science Degree",
    company: "State University",
    period: "2014 - 2018",
    description:
      "Bachelor's degree in Computer Science with focus on software engineering and web technologies.",
    type: "education",
  },
];

export const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "Git",
  "REST APIs",
];

export const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
];

export const personalInfo = {
  name: "Aji Wijayatama",
  title: "Junior Full Stack Developer",
  tagline: "Eager to learn, ready to build impactful web solutions.",
  email: "ajiwijayatamaa@gmail.com",
  location: "East Jakarta",
  bio: "Fresh graduate Information Systems with hands-on experience in website development.",
  longBio: `I am a fresh graduate in Information Systems with a strong interest in web and web application development. During my studies, I gained hands-on experience through various projects and self-learning, covering frontend development, database management, and system integration.

I am currently open to job opportunities where I can continue learning, grow as a Full Stack Developer, and contribute positively within a collaborative work environment.`,
};
