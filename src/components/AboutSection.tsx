import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const clickParticlesRef = useRef([]);
  const [clickParticles, setClickParticles] = useState([]);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3]);

  // Particle network animation
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-6 flex flex-col md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          />
          <div>
            <motion.p
              className="text-lg text-gray-300/90 leading-relaxed font-mono"
              variants={textVariants}
            >
              With over 5 years of experience in AI and software development, I specialize in building intelligent systems that solve complex problems. My expertise spans machine learning, deep learning, and large-scale AI applications.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300/90 leading-relaxed font-mono mt-4"
              variants={textVariants}
            >
              Currently working as a Senior AI Engineer at TechCorp, where I lead the development of next-generation AI solutions. Previously, I contributed to groundbreaking projects at AI Innovations and DataTech Solutions.
            </motion.p>
          </div>
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