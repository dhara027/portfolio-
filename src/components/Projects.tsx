import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "SaaS Billing Platform",
      description: "SaaS billing backend with subscription tiers, invoices, recurring payments & webhooks.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Stripe", "Docker"],
      github: "https://github.com/dhara027/saas_billing-master"
    },
    {
      title: "Doctor Appointment System",
      description: "Healthcare appointment system for doctors and patients with secure auth and dashboards.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Razorpay", "JWT"],
      github: "https://github.com/dhara027/Doctor_App"
    },
    {
      title: "The Wild Oasis (Booking App)",
      description: "Hotel and cabin booking app with search, calendar, and admin management.",
      tech: ["Next.js", "TailwindCSS", "Supabase", "NextAuth", "date-fns"],
      github: "https://github.com/dhara027/The-Wild-Oasis-Booking"
    },
    {
      title: "Real Estate Management System",
      description: "Real-estate CRM with property listing, lead tracking, and responsive analytics dashboards.",
      tech: ["Next.js", "Node.js", "MongoDB", "Leaflet", "TailwindCSS"],
      github: "https://github.com/dhara027/real-estate-management"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl font-display text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:border-primary hover:bg-primary/5"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
