
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
