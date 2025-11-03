import { Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 animate-fade-in">
          Dhara Jadav
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Software Engineer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Building scalable, maintainable, and aesthetic web applications using MERN, Next.js, and Python.
          Balancing clean code, visual polish, and practical business logic — turning ideas into elegant digital experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a href="mailto:jadavdhara007@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            jadavdhara007@gmail.com
          </a>
          <span className="hidden md:inline">•</span>
          <a href="tel:+919328214782" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +91 9328214782
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a href="/Dhara_Jadav_CV.pdf" download>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download resume
            
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
