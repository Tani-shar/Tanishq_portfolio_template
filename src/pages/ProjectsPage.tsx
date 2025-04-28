import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProjectsPage;