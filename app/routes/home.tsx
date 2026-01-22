import type { Route } from "./+types/home";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import ExperienceSection from "./components/experience-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import ProjectsSection from "./components/project-section";
import SkillsSection from "./components/skills-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aji Wijayatama | Junior Full Stack Developer" },
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
