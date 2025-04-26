
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/50 border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            JA
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/projects">
              <Button variant="ghost" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Projects
              </Button>
            </Link>
            <Link to="/skills">
              <Button variant="ghost" className="gap-2">
                <Star className="h-4 w-4" />
                Skills
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="gap-2">
                <User className="h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
