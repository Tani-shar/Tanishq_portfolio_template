
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-accent to-background animate-gradient-x opacity-20" />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
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
