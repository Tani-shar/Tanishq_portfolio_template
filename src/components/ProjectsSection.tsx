
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Powered Code Assistant",
    description: "Developed an intelligent code completion system using transformers and deep learning.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
  },
  {
    title: "Neural Search Engine",
    description: "Built a semantic search engine using neural networks and vector embeddings.",
    tech: ["TensorFlow", "Elasticsearch", "TypeScript", "Docker"],
  },
  {
    title: "MLOps Platform",
    description: "Created an end-to-end MLOps platform for model training and deployment.",
    tech: ["Kubernetes", "AWS", "Python", "React"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="p-6 backdrop-blur-xl bg-background/50 border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
              <p className="text-foreground/60 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-sm rounded-full bg-accent/30 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
