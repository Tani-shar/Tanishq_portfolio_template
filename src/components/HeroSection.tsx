import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.5))]" />
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 animate-fade-in backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
            John Anderson
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            AI & Machine Learning Engineer
          </p>
          <p className="max-w-2xl mx-auto text-foreground/60">
            Crafting intelligent solutions at the intersection of AI and software engineering. 
            Specialized in machine learning, deep learning, and scalable AI systems.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
