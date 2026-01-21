import type { Route } from "./+types/home";
import AboutSection from "./components/about-section";
import ExperienceSection from "./components/experience-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/project-section";
import SkillsSection from "./components/skills-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
