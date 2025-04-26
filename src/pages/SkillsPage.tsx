import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++"]
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"]
  },
  {
    category: "Web Technologies",
    items: ["React", "Next.js", "Node.js", "Express", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    category: "Tools & Databases",
    items: ["Git", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
  }
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Technical Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-6 backdrop-blur-xl bg-background/50 border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm rounded-full bg-accent/30 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
