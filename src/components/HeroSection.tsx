import { Github, Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const titles = [
  "Web3 Enthusiast",
  "MERN Stack Developer",
  "AI Engineer",
  "Rust Developer",
  "Machine Learning Engineer",
];

export const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      // Typewriter effect: Add characters one by one
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 1500); // Pause before erasing
        }
      }, 100); // Speed of typing

      return () => clearInterval(typeInterval);
    } else {
      // Erase effect: Remove characters one by one
      let charIndex = displayedText.length;
      const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
          setDisplayedText(currentTitle.slice(0, charIndex - 1));
          charIndex--;
        } else {
          clearInterval(eraseInterval);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }
      }, 50); // Speed of erasing

      return () => clearInterval(eraseInterval);
    }
  }, [currentTitleIndex, isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gray-950">
      {/* Tech-inspired Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background with Glitch Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-teal-900/40 animate-gradient-tech" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
        
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDIwYzAtMS4xLjktMiAyLTJzMiAxLjEgMiAyLTktMi0yLTJ6TTIwIDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLTItLjktMi0yem0yMCAwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0yLS45LTIgMnptLTIwIDE4Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItLTIgMi0uOS0yIDJ6bTIwIDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yIDIuOS0yLTIgMnptLTIwIDE4Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0yLS45LTIgMnptMjAgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTIgMi0uOS0yLTJ6IiBmaWxsPSIjMDBGRkZGIiBmaWxsLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-repeat animate-grid-pulse" />

        {/* Glowing Nodes and Connections */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/50 rounded-full animate-node-pulse"
              style={{
                width: `${Math.random() * 15 + 10}px`,
                height: `${Math.random() * 15 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)',
                animationDuration: `${Math.random() * 8 + 4}s`,
                animationDelay: `${Math.random() * -5}s`,
              }}
            >
              {/* Connection Lines */}
              {i % 2 === 0 && (
                <div
                  className="absolute h-px bg-blue-400/50 animate-line-draw"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    top: '50%',
                    left: '50%',
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                    animationDuration: `${Math.random() * 6 + 3}s`,
                    animationDelay: `${Math.random() * -3}s`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Subtle Glitch Overlay */}
        <div className="absolute inset-0 opacity-10 animate-glitch">
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 backdrop-blur-lg bg-white/5 p-10 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow">
            John Anderson
          </h1>
          <div className="h-12 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-white/90 font-mono animate-typewriter relative">
              {displayedText}
              <span className="absolute right-0 w-1 h-6 bg-blue-400 animate-cursor-blink" />
            </p>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300/80 leading-relaxed">
            Building the future with intelligent solutions at the intersection of AI, Web3, and software engineering. 
            Passionate about machine learning, scalable systems, and innovative tech.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-white/20 transition-colors duration-300"
            >
              <Github className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-white/20 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 hover:bg-white/20 border-white/20 transition-colors duration-300"
            >
              <Mail className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
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

        @keyframes node-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @keyframes line-draw {
          0% {
            transform: scaleX(0);
            opacity: 0.5;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0);
            opacity: 0.5;
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
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

        @keyframes cursor-blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes typewriter-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 15px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-gradient-tech {
          background-size: 400% 400%;
          animation: gradient-tech 20s ease infinite;
        }

        .animate-node-pulse {
          animation: node-pulse 4s ease-in-out infinite;
        }

        .animate-line-draw {
          transform-origin: left;
          animation: line-draw 5s ease-in-out infinite;
        }

        .animate-grid-pulse {
          animation: grid-pulse 10s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 5s steps(5) infinite;
        }

        .animate-typewriter {
          animation: typewriter-glow 2s ease-in-out infinite;
        }

        .animate-cursor-blink {
          animation: cursor-blink 0.8s step-end infinite;
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7);
          }
        }
      `}</style>
    </section>
  );
};