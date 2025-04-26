
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Code Assistant",
    description: "Developed an intelligent code completion system using transformers and deep learning.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Neural Search Engine",
    description: "Built a semantic search engine using neural networks and vector embeddings.",
    tech: ["TensorFlow", "Elasticsearch", "TypeScript", "Docker"],
    image: "photo-1461749280684-dccba630e2f6",
  },
  {
    title: "MLOps Platform",
    description: "Created an end-to-end MLOps platform for model training and deployment.",
    tech: ["Kubernetes", "AWS", "Python", "React"],
    image: "photo-1486312338219-ce68d2c6f44d",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden backdrop-blur-xl bg-background/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-foreground/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
