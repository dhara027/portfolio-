import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Architecture",
      description: "Writing maintainable, documented code following best practices"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Building high-performance applications with optimal user experience"
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Attention to design detail and scalable solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        
        <Card className="bg-card border-border shadow-lg mb-8">
          <CardContent className="pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Software Engineer passionate about building scalable, maintainable, and aesthetic web applications 
              using MERN, Next.js, and Python. My approach balances clean code, visual polish, and practical business 
              logic — turning ideas into elegant digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in crafting intuitive interfaces and maintainable codebases that grow with the business.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
