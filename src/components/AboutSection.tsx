
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          About Me
        </h2>
        <Card className="p-6 backdrop-blur-xl bg-background/50 border-border">
          <div className="space-y-4">
            <p className="text-foreground/80">
              With over 5 years of experience in AI and software development, I specialize in building 
              intelligent systems that solve complex problems. My expertise spans machine learning, 
              deep learning, and large-scale AI applications.
            </p>
            <p className="text-foreground/80">
              Currently working as a Senior AI Engineer at TechCorp, where I lead the development 
              of next-generation AI solutions. Previously, I contributed to groundbreaking projects 
              at AI Innovations and DataTech Solutions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
