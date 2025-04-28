import { Github, Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const titles = [
  "Web3 Enthusiast",
  "MERN Stack Developer",
  "Mobile App Developer",
  "Rust Developer",
];

export const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const sectionRef = useRef(null);

  // Scroll-based parallax for canvas
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3]);

  // Typing animation for titles
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    if (isTyping) {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 1500);
        }
      }, 120);
      return () => clearInterval(typeInterval);
    } else {
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
      }, 60);
      return () => clearInterval(eraseInterval);
    }
  }, [currentTitleIndex, isTyping]);

  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 2,
      glow: Math.random() * 0.5 + 0.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, `rgba(147, 197, 253, ${p.glow})`);
        gradient.addColorStop(1, "rgba(147, 197, 253, 0)");
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${1 - distance / 150})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Globe animation
  useEffect(() => {
    const canvas = globeRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes = Array.from({ length: 30 }, () => ({
      theta: Math.random() * Math.PI * 2,
      phi: Math.random() * Math.PI,
      radius: 100,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(147, 197, 253, 0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();

      nodes.forEach((node, i) => {
        node.theta += node.speed;
        const x = centerX + node.radius * Math.sin(node.phi) * Math.cos(node.theta);
        const y = centerY + node.radius * Math.sin(node.phi) * Math.sin(node.theta);
        const z = node.radius * Math.cos(node.phi);

        const scale = 0.5 + z / node.radius * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(147, 197, 253, 0.8)";
        ctx.fill();
        ctx.closePath();

        nodes.slice(i + 1).forEach((node2) => {
          const x2 = centerX + node2.radius * Math.sin(node2.phi) * Math.cos(node2.theta);
          const y2 = centerY + node2.radius * Math.sin(node2.phi) * Math.sin(node2.theta);
          const z2 = node2.radius * Math.cos(node2.phi);
          const distance = Math.sqrt(
            Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2) + Math.pow(z2 - z, 2)
          );
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(147, 197, 253, ${1 - distance / 50})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-black"
      ref={sectionRef}
    >
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ y: canvasY, opacity: canvasOpacity, filter: "drop-shadow(0 0 10px rgba(147, 197, 253, 0.3))" }}
      />
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <canvas
            ref={globeRef}
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            style={{ filter: "drop-shadow(0 0 15px rgba(147, 197, 253, 0.5))" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow font-mono">
            Tanishq Sharma
          </h1>
          <div className="h-12 flex items-center justify-center md:justify-start">
            <p className="text-xl md:text-2xl text-white/90 font-mono animate-typewriter relative">
              {displayedText}
              <span className="absolute right-0 w-1 h-6 bg-blue-400 animate-cursor-blink" />
            </p>
          </div>
          <p className="max-w-lg mx-auto md:mx-0 text-base text-gray-300/90 leading-relaxed font-mono">
            Building the future with intelligent solutions at the intersection of AI, Web3, and software engineering.
            Passionate about machine learning, scalable systems, and innovative tech.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-blue-500/20 border-blue-500/20 text-blue-300 hover:text-blue-200 transition-all duration-300"
                onClick={() => window.open("https://github.com/tanishqsharma", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-blue-500/20 border-blue-500/20 text-blue-300 hover:text-blue-200 transition-all duration-300"
                onClick={() => window.open("https://linkedin.com/in/tanishqsharma", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-blue-500/20 border-blue-500/20 text-blue-300 hover:text-blue-200 transition-all duration-300"
                onClick={() => window.open("mailto:tanishq.sharma@example.com", "_blank")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none transition-all duration-300 font-mono"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-transparent hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-lg px-6 py-3 rounded-full font-mono transition-all duration-300"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              Explore My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes typewriter-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 15px rgba(59, 130, 246, 0.5); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7); }
        }
        .animate-typewriter { animation: typewriter-glow 2s ease-in-out infinite; }
        .animate-cursor-blink { animation: cursor-blink 0.8s step-end infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-typewriter, .animate-cursor-blink, .animate-text-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};