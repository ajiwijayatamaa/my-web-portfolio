export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  githubBackendUrl?: string;
  deployUrl?: string;
}

export interface Education {
  id: number;
  title: string;
  university: string;
  period: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Board Platform",
    thumbnail: "pencari-kerja.png",
    description:
      "Full-stack job board platform with company job posting management, applicant tracking, pre-selection tests, interview scheduling with automated email reminders, and recruitment analytics dashboards.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    githubUrl: "https://github.com/ajiwijayatamaa/job-board-frontend",
    githubBackendUrl: "https://github.com/ajiwijayatamaa/job-board-backend",
    deployUrl: "https://pencarikerja.vercel.app/",
  },
  {
    id: 2,
    title: "Event Management Platform",
    thumbnail: "event-management.png",
    description:
      "Event management platform for organizers and attendees with authentication, referral system, event dashboard, statistics visualization, and automated email notifications.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    githubUrl: "https://github.com/ajiwijayatamaa/event-management-frontend",
    githubBackendUrl:
      "https://github.com/ajiwijayatamaa/event-management-backend",
    deployUrl: "https://eventifire.vercel.app/",
  },
  {
    id: 3,
    title: "Furniture Jati.ind",
    thumbnail: "company-profile.png",
    description:
      "Responsive company profile website for a premium teak furniture business featuring landing page, gallery, custom furniture showcase, blog management, and authentication.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl:
      "https://github.com/ajiwijayatamaa/-company-profile-react-router",
    deployUrl: "https://galery-furniturejatiind.vercel.app/",
  },
  {
    id: 4,
    title: "Pricing Plans",
    thumbnail: "img-2-project-html5-and-css- fundamental.jpeg",
    description:
      "Choose the plan that best fits your needs. Start free and upgrade anytime.",
    techStack: ["HTML5", "CSS3", "MongoDB"],
  },
  {
    id: 5,
    title: "E-Commerce",
    thumbnail: "img-3-project-front-end-e-commerce-website.jpeg",
    description: "Improve layout and styling for product modals",
    techStack: ["HTML5", "CSS3"],
  },
];

export const educations: Education[] = [
  {
    id: 1,
    title: "Bachelor of Information Systems",
    university: "Universitas Pembangunan Nasional Veteran Jakarta",
    period: "Aug 2021 - Jul 2025",
    description:
      "Final Project: Design and Development of a Teak Furniture Sales System Using Laravel 11",
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
