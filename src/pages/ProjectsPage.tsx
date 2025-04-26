
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProjectsPage;
