import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const ProjectsSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const clickParticlesRef = useRef([]);
  const [clickParticles, setClickParticles] = useState([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = sectionRef.current.offsetHeight;
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

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const force = (150 - distance) / 150;
            p.vx += (dx / distance) * force * 0.1;
            p.vy += (dy / distance) * force * 0.1;
          }
        }
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

      clickParticlesRef.current = clickParticlesRef.current
        .map((cp) => ({
          ...cp,
          x: cp.x + cp.vx,
          y: cp.y + cp.vy,
          life: cp.life - 1,
          radius: cp.radius * 0.95,
        }))
        .filter((cp) => cp.life > 0);

      clickParticlesRef.current.forEach((cp) => {
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, cp.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${cp.life / 50})`;
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newParticles = Array.from({ length: 10 }, () => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
      radius: Math.random() * 3 + 2,
      life: 50,
    }));
    clickParticlesRef.current = [...clickParticlesRef.current, ...newParticles];
    setClickParticles(clickParticlesRef.current);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ y: canvasY, opacity: canvasOpacity, filter: "drop-shadow(0 0 10px rgba(147, 197, 253, 0.3))" }}
        onClick={handleClick}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow font-mono"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group overflow-hidden bg-transparent border border-blue-500/20 rounded-lg"
              variants={cardVariants}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
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
                      className="px-3 py-1 text-sm rounded-full bg-transparent text-blue-400 border border-blue-500/20 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/30 font-mono"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.7); }
        }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-text-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};