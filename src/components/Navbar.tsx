import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/projects", label: "Projects", icon: <Briefcase className="h-4 w-4" /> },
    { to: "/skills", label: "Skills", icon: <Star className="h-4 w-4" /> },
    { to: "/contact", label: "Contact", icon: <User className="h-4 w-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow">
            JA
          </Link>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link to={item.to}>
                  <Button
                    variant="ghost"
                    className={`gap-2 text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 transition-all duration-300 font-mono ${
                      location.pathname === item.to ? "bg-blue-500/20 text-blue-100" : ""
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                </Link>
                {location.pathname === item.to && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7);
          }
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};