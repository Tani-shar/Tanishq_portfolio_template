
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
