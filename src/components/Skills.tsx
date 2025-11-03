import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technologies = [
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "TypeScript",
    "TailwindCSS",
    "Python",
    "FastAPI",
    "Django",
    "Supabase",
    "Firebase",
    "Docker",
    "Git",
    "Vercel"
  ];

  const practices = [
    "Clean & Reusable Code",
    "UX & Accessibility Focus",
    "Modern DevOps Integration",
    "Secure API Architecture",
    "Performance Optimization",
    "Scalable Solutions",
    "Vercel / Render / Docker",
    "Maintainable Codebases"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
          Core Technologies
        </h2>
        
        <Card className="bg-card border-border shadow-lg mb-8">
          <CardContent className="pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-lg">
          <CardContent className="pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">How I Work</h3>
            <div className="flex flex-wrap gap-3">
              {practices.map((practice, index) => (
                <Badge 
                  key={index}
                  className="px-4 py-2 text-sm bg-gradient-to-r from-secondary/10 to-primary/10 text-foreground border border-secondary/20 hover:border-secondary/40 transition-colors"
                >
                  {practice}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
