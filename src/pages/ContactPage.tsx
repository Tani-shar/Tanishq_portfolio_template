import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="flex items-center justify-center py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </h1>
          <Card className="max-w-lg mx-auto p-8 backdrop-blur-xl bg-background/50 border-border">
            <div className="space-y-6">
              <p className="text-foreground/80 text-center">
                Feel free to reach out for collaboration, job opportunities, or just to say hi!
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => window.open('mailto:john.anderson@example.com', '_blank')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => window.open('https://github.com/johndoe', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => window.open('https://linkedin.com/in/johndoe', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => window.open('https://twitter.com/johndoe', '_blank')}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
              <div className="text-center">
                <p className="text-foreground/60">john.anderson@example.com</p>
                <p className="text-foreground/60">+1 (555) 123-4567</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
