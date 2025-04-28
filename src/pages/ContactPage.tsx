import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ContactPage = () => {
  const canvasRef = useRef(null);
  const [clickParticles, setClickParticles] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

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

  // Particle network with mouse interaction and click bursts
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouse = { x: null, y: null };
    let localClickParticles = [...clickParticles];

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

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
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

      // Update click particles locally first
      localClickParticles = localClickParticles
        .map((cp) => ({
          ...cp,
          x: cp.x + cp.vx,
          y: cp.y + cp.vy,
          life: cp.life - 1,
          radius: cp.radius * 0.95,
        }))
        .filter((cp) => cp.life > 0);
      
      // Update state only once per animation frame
      setClickParticles(localClickParticles);

      // Draw click particles
      localClickParticles.forEach((cp) => {
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
  }, []); // Remove clickParticles from dependencies

  // Handle button/form click for particle burst
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

    setClickParticles((prev) => [...prev, ...newParticles]);
  };

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { name: string; email: string; message: string } = { name: "", email: "", message: "" };
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(e);
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Placeholder for form submission (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Message sent! (Placeholder)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{ opacity: 0.6, filter: "drop-shadow(0 0 10px rgba(147, 197, 253, 0.3))" }}
        />
        <div className="flex items-center justify-center py-10 relative z-10">
            <div className="container mx-auto px-4 pt-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 animate-text-glow font-mono"
            >
              Contact Me
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-lg mx-auto space-y-8"
            >
              <motion.p
              className="text-lg text-gray-300/90 leading-relaxed font-mono text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
              >
              Drop me a message for collaboration, job opportunities, or just to say hi!
              </motion.p>
              <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-transparent text-white border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 font-mono"
                aria-label="Name"
                />
                {errors.name && (
                <p className="text-red-400 text-sm mt-1 font-mono">{errors.name}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-transparent text-white border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 font-mono"
                aria-label="Email"
                />
                {errors.email && (
                <p className="text-red-400 text-sm mt-1 font-mono">{errors.email}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 bg-transparent text-white border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-blue-500/10 transition-all duration-300 font-mono resize-none"
                aria-label="Message"
                />
                {errors.message && (
                <p className="text-red-400 text-sm mt-1 font-mono">{errors.message}</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none py-3 rounded-lg transition-all duration-300 font-mono"
                onClick={handleClick}
                >
                Send Message
                </Button>
              </motion.div>
              </form>
              <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent text-blue-400 border-blue-500/20 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-md hover:shadow-blue-500/30 transition-all duration-300"
                  onClick={(e) => {
                  handleClick(e);
                  window.open(link.url, "_blank");
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </Button>
                </motion.div>
              ))}
              </div>
            </motion.div>
            </div>
        </div>
      </div>
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
    </div>
  );
};

export default ContactPage;