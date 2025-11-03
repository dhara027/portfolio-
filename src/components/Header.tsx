import { Github, Linkedin, Briefcase } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors"
          >
            Dhara Jadav
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/dhara027" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhara-jadav-32693a390" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~01afc25ee9a24206e5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Upwork"
            >
              <Briefcase className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
