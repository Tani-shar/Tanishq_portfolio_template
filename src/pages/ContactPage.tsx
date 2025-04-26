import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const ContactPage = () => {
  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:john.anderson@example.com",
      label: "Email",
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/johndoe",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/johndoe",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/johndoe",
      label: "Twitter",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <Navbar />
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

      <div className="flex items-center justify-center py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow">
            Contact Me
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="max-w-lg mx-auto p-8 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="space-y-8">
                <motion.p
                  className="text-lg text-gray-300/90 leading-relaxed font-mono text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Feel free to reach out for collaboration, job opportunities, or just to say hi!
                </motion.p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300"
                        onClick={() => window.open(link.url, "_blank")}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </Button>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.p
                    className="text-gray-300/90 font-mono"
                    whileHover={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    john.anderson@example.com
                  </motion.p>
                  <motion.p
                    className="text-gray-300/90 font-mono"
                    whileHover={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    +1 (555) 123-4567
                  </motion.p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
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
    </div>
  );
};

export default ContactPage;