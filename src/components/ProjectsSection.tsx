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
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Tech-inspired Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 animate-gradient-tech" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.7))]" />
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDIwYzAtMS4xLjktMiAyLTJzMiAxLjEgMiAyLTktMi0yLTJ6TTIwIDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLTItLjktMi0yem0yMCAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0yLS45LTIgMnptLTIwIDE4Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0yLS45LTIgMnptMjAgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTIgMi0uOS0yLTJ6IiBmaWxsPSIjMDBGRkZGIiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-repeat animate-grid-pulse" />
        {/* Glowing Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/40 rounded-full animate-particle-pulse"
              style={{
                width: `${Math.random() * 12 + 8}px`,
                height: `${Math.random() * 12 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)',
                animationDuration: `${Math.random() * 8 + 4}s`,
                animationDelay: `${Math.random() * -5}s`,
              }}
            />
          ))}
        </div>
        {/* Subtle Glitch Overlay */}
        <div className="absolute inset-0 opacity-10 animate-glitch">
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card
                className="group overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white animate-text-glow font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-300/90 text-base leading-relaxed font-mono">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes gradient-tech {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 200% 200%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        @keyframes particle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-1px, 1px);
          }
          80% {
            transform: translate(1px, -1px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7);
          }
        }

        .animate-gradient-tech {
          background-size: 400% 400%;
          animation: gradient-tech 20s ease infinite;
        }

        .animate-particle-pulse {
          animation: particle-pulse 6s ease-in-out infinite;
        }

        .animate-grid-pulse {
          animation: grid-pulse 12s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 5s steps(5) infinite;
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};