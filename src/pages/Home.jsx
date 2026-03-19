import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { MeshBackground } from "../components/MeshBackground"; // <-- New import!

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* New Glassmorphism Background Effect */}
      <MeshBackground />

      {/* Content above backgrounds */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};