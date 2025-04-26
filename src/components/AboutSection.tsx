import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-text-reveal");
          }
        });
      },
      { threshold: 0.2 }
    );

    const paragraphs = sectionRef.current?.querySelectorAll("p");
    paragraphs?.forEach((p) => observer.observe(p));

    return () => {
      paragraphs?.forEach((p) => observer.unobserve(p));
    };
  }, []);

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
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/40 rounded-full animate-particle-pulse"
              style={{
                width: `${Math.random() * 12 + 8}px`,
                height: `${Math.random() * 12 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)',
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * -5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow">
          About Me
        </h2>
        <Card
          className="p-8 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          ref={sectionRef}
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-300/90 leading-relaxed font-mono opacity-0">
              With over 5 years of experience in AI and software development, I specialize in building 
              intelligent systems that solve complex problems. My expertise spans machine learning, 
              deep learning, and large-scale AI applications.
            </p>
            <p className="text-lg text-gray-300/90 leading-relaxed font-mono opacity-0">
              Currently working as a Senior AI Engineer at TechCorp, where I lead the development 
              of next-generation AI solutions. Previously, I contributed to groundbreaking projects 
              at AI Innovations and DataTech Solutions.
            </p>
          </div>
        </Card>
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

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7);
          }
        }

        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out forwards;
        }

        p:nth-child(2).animate-text-reveal {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};